# YAML to Resume Generator

A dynamic resume generator that converts YAML data into professional PDF resumes using LaTeX, featuring an Overleaf-style interface with live preview.

## Features

### ✨ Dynamic Section Ordering

- **Reorder sections** by changing their order in the YAML
- **Add/Remove sections** dynamically
- **Responsive content** - add unlimited items to any section

### 🎨 Jake's Resume Template

- Based on the popular Jake's Resume (Anonymous) template from Overleaf
- Professional, ATS-friendly design
- Clean typography with Font Awesome icons

### 🔧 Supported Section Types

#### **Skills Section**

```yaml
- type: skills
  title: Technical Skills
  items:
    - category: Languages
      list: "Python, Java, C, HTML/CSS, JavaScript"
    - category: Developer Tools
      list: "VS Code, Eclipse, Google Cloud Platform"
```

#### **Education Section**

```yaml
- type: education
  title: Education
  items:
    - university: State University
      degree: Bachelor of Science in Computer Science
      location: "City, State"
      dates: "Sep. 2017 – May 2021"
```

#### **Experience Section**

```yaml
- type: experience
  title: Experience
  items:
    - company: Tech Company
      role: Software Engineer
      location: "City, State"
      dates: "May 2020 – Present"
      points:
        - Developed scalable web applications
        - Led cross-functional teams
```

#### **Projects Section**

```yaml
- type: projects
  title: Projects
  items:
    - name: YAML Resume Generator
      technologies: "React, TypeScript, Node.js, LaTeX"
      date: "Dec 2024"
      points:
        - Built full-stack application
        - Implemented real-time preview
```

## Quick Start

### Development Mode

1. **Start Backend:**

   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Start Frontend:**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Open:** `http://localhost:5173`

### Docker Deployment

```bash
docker-compose up --build
```

## How It Works

1. **Edit YAML** in the left panel with your resume data
2. **Reorder sections** by changing their position in the `sections` array
3. **Add/remove items** within any section
4. **Compile** to generate PDF with real-time preview
5. **Download** your professional resume

## YAML Structure

```yaml
name: Your Name
phone: "123-456-7890"
email: "email@example.com"
linkedin: "linkedin.com/in/username"
github: "github.com/username"

sections:
  # Change order here to reorder PDF sections
  - type: skills
    title: Technical Skills
    items: [...]

  - type: education
    title: Education
    items: [...]

  - type: experience
    title: Experience
    items: [...]

  - type: projects
    title: Projects
    items: [...]
```

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, CodeMirror
- **Backend:** Node.js, Express, TypeScript
- **PDF Generation:** LaTeX (pdflatex), Mustache templating
- **Deployment:** Docker, Docker Compose

## Key Features

- 🔄 **Dynamic Section Ordering** - Change YAML order = Change PDF order
- 📱 **Responsive Design** - Add unlimited entries to any section
- ⚡ **Real-time Preview** - See changes instantly
- 🎯 **ATS-Friendly** - Professional formatting that passes ATS systems
- 🐳 **Docker Ready** - One-command deployment
- 🛡️ **LaTeX Security** - Automatic character escaping
- 💾 **Memory Efficient** - Automatic cleanup of temporary files
