import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import jakesResumeImage from "@/assets/jakes-resume-anonymous_page-0001.jpg";

const yamlCode = `name: First Last
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
          - Developed a service to automatically perform a set of unit tests daily
          - Incorporated scripts using Python and PowerShell to aggregate XML results
          - Utilized Jenkins to provide continuous integration service

  - type: projects
    title: Projects
    items:
      - name: YAML Resume Generator
        technologies: "React, TypeScript, Node.js, LaTeX, Docker"
        link: "https://yaml-resume-generator.vercel.app"
        points:
          - Built a full-stack application to generate PDF resumes from YAML input
          - Implemented real-time preview with LaTeX compilation backend

  - type: coursework
    title: Relevant Coursework
    items:
      - Data Structures
      - Software Methodology
      - Algorithms Analysis
      - Database Management
      - Artificial Intelligence
      - Internet Technology

  - type: achievements
    title: Achievements
    items:
      - Achieved a 4 star fraternity ranking (highest possible ranking)
      - Led chapter of 30+ members to improve community service
      - Won first place in university coding competition

  - type: coding
    title: CODING PROFILE
    items:
      - platform: "LeetCode"
        username: "your_username"
        url: "https://leetcode.com/your_username/"`;

const CodeExample = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Simple YAML,{" "}
            <span className="text-blue-400">Professional Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Write your resume content in clean YAML and watch it transform into
            a polished PDF
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* YAML Code */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                Input
              </Badge>
              <span className="text-sm text-gray-400">YAML Format</span>
            </div>

            <Card className="border border-gray-700 bg-gray-800 text-gray-200 overflow-hidden">
              <CardContent className="p-0">
                <ScrollArea className="h-[600px] w-full">
                  <div className="overflow-auto">
                    <pre className="p-6 text-sm leading-relaxed whitespace-pre-wrap min-w-max">
                      <code>{yamlCode}</code>
                    </pre>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Output Preview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-gradient-primary text-white">Output</Badge>
              <span className="text-sm text-gray-400">Professional PDF</span>
            </div>

            <Card className="border border-gray-700 bg-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full">
                  <img
                    src={jakesResumeImage}
                    alt="Jake's Resume - Professional PDF generated from YAML input showing formatted sections including education, experience, projects, and skills"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
