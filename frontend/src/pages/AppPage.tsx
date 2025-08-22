// App Page - Resume Generator
import { useState, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Link } from "react-router-dom";
import YamlEditor from "../components/YamlEditor";
import PdfViewer from "../components/PdfViewer";
import { API_ENDPOINTS } from "../config/api";
import { trackEvent } from "../lib/analytics";

const initialYaml = `name: First Last
phone: "123-456-7890"
email: "email@gmail.com"
linkedin: "linkedin.com/in/username"
github: "github.com/username"

# Dynamic section ordering - change the order here to change PDF layout
sections:
  - type: skills
    title: Technical Skills
    items:
      - category: Languages
        list: "Python, Java, C, HTML/CSS, JavaScript, SQL"
      - category: Developer Tools
        list: "VS Code, Eclipse, Google Cloud Platform, Android Studio"
      - category: Technologies/Frameworks
        list: "Linux, Jenkins, GitHub, JUnit, WordPress"

  - type: education
    title: Education
    items:
      - university: State University
        degree: Bachelor of Science in Computer Science
        cgpa: "CGPA: 9.2/10"
        dates: "Sep. 2017 – May 2021"
      - university: Community College
        degree: Associate Degree in Mathematics
        cgpa: "GPA: 3.8/4.0"
        dates: "Sep. 2015 – May 2017"

  - type: experience
    title: Experience
    items:
      - company: Electronics Company
        role: Software Engineer Intern
        location: "City, State"
        dates: "May 2020 – Aug 2020"
        points:
          - Developed a service to automatically perform a set of unit tests daily on multiple products
          - Incorporated scripts using Python and PowerShell to aggregate XML test results into an organized format
          - Utilized Jenkins to provide a continuous integration service in order to automate the entire process
      - company: Tech Startup
        role: Junior Developer
        location: "Remote"
        dates: "Jun 2021 – Present"
        points:
          - Built responsive web applications using React and TypeScript
          - Collaborated with cross-functional teams in an Agile environment

  - type: projects
    title: Projects
    items:
      - name: YAML Resume Generator
        technologies: "React, TypeScript, Node.js, LaTeX, Docker"
        link: "https://yaml-resume-generator.vercel.app"
        points:
          - Built a full-stack application to generate PDF resumes from YAML input
          - Implemented real-time preview with LaTeX compilation backend
          - Deployed using Docker containers for consistent environments
      - name: Machine Learning Pipeline
        technologies: "Python, scikit-learn, pandas, Docker"
        link: "https://ml-pipeline-demo.herokuapp.com"
        points:
          - Developed automated ML pipeline for data preprocessing and model training
          - Achieved 95 percent accuracy on classification tasks using ensemble methods

  - type: coursework
    title: Relevant Coursework
    items:
      - Data Structures
      - Software Methodology
      - Algorithms Analysis
      - Database Management
      - Artificial Intelligence
      - Internet Technology
      - Systems Programming
      - Computer Architecture

  - type: achievements
    title: Achievements
    items:
      - Achieved a 4 star fraternity ranking by the Office of Fraternity and Sorority Affairs (highest possible ranking)
      - Led chapter of 30+ members to work towards goals that improve community service and academics
      - Managed executive board of 5 members and ran weekly meetings to oversee progress
      - Organized coding workshops and hackathons for university students
      - Won first place in university coding competition with team of 4 developers

  - type: coding
    title: CODING PROFILE
    items:
      - platform: "LeetCode"
        username: "your_username"
        url: "https://leetcode.com/your_username/"
      - platform: "CodeChef"
        username: "your_username"
        url: "https://www.codechef.com/users/your_username"
      - platform: "GFG"
        username: "your_username"
        url: "https://auth.geeksforgeeks.org/user/your_username/"
`;

export default function AppPage() {
  const [yaml, setYaml] = useState(initialYaml);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Track page visit
  useEffect(() => {
    trackEvent.appPageVisited();
  }, []);

  const handleCompile = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("🚀 Calling API:", API_ENDPOINTS.COMPILE);
      const response = await fetch(API_ENDPOINTS.COMPILE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yaml }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        trackEvent.compilationError(response.status.toString());
        throw new Error(errorText);
      }

      const blob = await response.blob();

      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }

      const newPdfUrl = URL.createObjectURL(blob);
      setPdfUrl(newPdfUrl);
      
      // Track successful compilation
      trackEvent.resumeCompiled();
    } catch (err: any) {
      setError(err.message);
      trackEvent.compilationError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle YAML changes with analytics
  const handleYamlChange = (value: string) => {
    setYaml(value);
    // Track YAML editing (debounced to avoid too many events)
    if (value.length > 0 && value.length % 100 === 0) {
      trackEvent.yamlEdited(value.length);
    }
  };

  return (
    <div className="app-container">
      {/* Header with Flowbite styling */}
      <header>
        <nav className="bg-gray-900 border-gray-700 px-4 lg:px-6 py-2 shadow-lg">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <svg
                  className="mr-3 h-5 sm:h-6 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
                  YAML Resume Generator
                </span>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center lg:order-2 space-x-3">
              <button
                onClick={handleCompile}
                disabled={isLoading}
                className={`text-white font-medium rounded-lg text-sm px-3 lg:px-4 py-1.5 lg:py-2 focus:ring-4 focus:outline-none transition-all duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Compiling...
                  </div>
                ) : (
                  "Compile PDF"
                )}
              </button>

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  download="resume.pdf"
                  onClick={() => trackEvent.pdfDownloaded()}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-3 lg:px-4 py-1.5 lg:py-2 focus:outline-none transition-all duration-200 border border-gray-600 hover:border-gray-500"
                >
                  Download PDF
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <div className="main-container">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={50} minSize={20}>
            <div className="panel-content editor-panel">
              <div className="yaml-editor-container">
                <YamlEditor value={yaml} onChange={handleYamlChange} />
              </div>
              {error && <pre className="error-message">{error}</pre>}
            </div>
          </Panel>
          <PanelResizeHandle className="resize-handle" />
          <Panel defaultSize={50} minSize={30}>
            <div className="panel-content pdf-panel">
              <div className="pdf-viewer-container">
                <PdfViewer pdfUrl={pdfUrl} />
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
