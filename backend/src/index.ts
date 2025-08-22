// backend/src/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import yaml from "js-yaml";
import mustache from "mustache";
import fs from "fs";
import path from "path";
import os from "os";
import { execFile } from "child_process";
import { mkdtemp, rm } from "fs/promises";
import { promisify } from "util";
const execAsync = promisify(execFile);

const app = express();
const port = process.env.PORT || 8080;

function escapeLaTeX(str: string): string {
  return str
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

function escapeData(data: any): any {
  if (typeof data === "string") {
    return escapeLaTeX(data);
  }
  if (Array.isArray(data)) {
    return data.map(escapeData);
  }
  if (typeof data === "object" && data !== null) {
    const escapedObject: { [key: string]: any } = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        escapedObject[key] = escapeData(data[key]);
      }
    }
    return escapedObject;
  }
  return data;
}

app.use(
  cors({
    origin: process.env.FRONTEND_URL || [
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

async function findPdflatex(): Promise<string> {
  if (process.platform === "win32") {
    try {
      const commonPaths = [
        "C:\\Users\\anand\\AppData\\Local\\Programs\\MiKTeX\\miktex\\bin\\x64\\pdflatex.exe",
        "C:\\Program Files\\MiKTeX\\miktex\\bin\\x64\\pdflatex.exe",
        "C:\\MiKTeX\\miktex\\bin\\x64\\pdflatex.exe",
      ];

      for (const pdflatexPath of commonPaths) {
        if (fs.existsSync(pdflatexPath)) {
          return pdflatexPath;
        }
      }

      try {
        const { stdout } = await execAsync("where", ["pdflatex"]);
        return stdout.trim().split("\n")[0];
      } catch {
        return "pdflatex";
      }
    } catch {
      return "pdflatex";
    }
  }
  return "pdflatex";
}

function transformResumeData(data: any): any {
  const transformed = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    linkedin: data.linkedin,
    github: data.github,
    sections: [] as any[],
  };

  data.sections?.forEach((section: any) => {
    const sectionData = {
      title: section.title,
      items: section.items,
      is_skills: section.type === "skills",
      is_education: section.type === "education",
      is_experience: section.type === "experience",
      is_projects: section.type === "projects",
      is_coursework: section.type === "coursework",
      is_achievements: section.type === "achievements",
      is_coding: section.type === "coding",
    };

    transformed.sections.push(sectionData);
  });

  return transformed;
}

app.post("/compile", async (req: Request, res: Response) => {
  console.log("🚀 Compilation request received");
  try {
    const { yaml: yamlString } = req.body;
    if (!yamlString) {
      return res.status(400).send("Missing YAML data");
    }

    const data = yaml.load(yamlString);

    const transformedData = transformResumeData(data);

    const escapedData = escapeData(transformedData);

    const template = fs.readFileSync(
      path.join(__dirname, "../templates/jake-resume.tex"),
      "utf-8"
    );
    const renderedTex = mustache.render(template, escapedData);

    console.log("Generated LaTeX (first 500 chars):");
    console.log(renderedTex.substring(0, 500));

    const tempDir = await mkdtemp(path.join(os.tmpdir(), "latex-"));
    const texFilePath = path.join(tempDir, "resume.tex");
    const pdfFilePath = path.join(tempDir, "resume.pdf");

    fs.writeFileSync(texFilePath, renderedTex);

    const pdflatexPath = await findPdflatex();
    console.log("🔍 Using pdflatex at:", pdflatexPath);
    console.log("🔍 File exists:", fs.existsSync(pdflatexPath));

    execFile(
      pdflatexPath,
      ["-interaction=nonstopmode", "-output-directory", tempDir, texFilePath],
      (error, stdout, stderr) => {
        rm(tempDir, { recursive: true, force: true });

        if (error) {
          console.error("❌ LaTeX Error Details:");
          console.error("❌ Error code:", error.code);
          console.error("❌ Error message:", error.message);
          console.error("❌ Stdout:", stdout);
          console.error("❌ Stderr:", stderr);
          console.error("❌ Tried to execute:", pdflatexPath);
          return res
            .status(500)
            .send(
              `LaTeX compilation failed.\n\nError: ${error.message}\n\nPath tried: ${pdflatexPath}\n\nLog:\n${stdout}\n\nStderr:\n${stderr}`
            );
        }

        res.sendFile(pdfFilePath);
      }
    );
  } catch (error: any) {
    console.error("Server Error:", error);
    res.status(500).send("An internal server error occurred: " + error.message);
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server is running at http://0.0.0.0:${port}`);
});
