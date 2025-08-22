import { Card, CardContent } from "@/components/ui/card";
import { Code2, FileText, Zap, Layers, Download, Palette } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "YAML Input",
    description:
      "Write your resume content in clean, readable YAML format. No complex syntax to learn.",
  },
  {
    icon: FileText,
    title: "Professional Templates",
    description:
      "Built on Jake's proven Overleaf template. Get a polished, ATS-friendly resume every time.",
  },
  {
    icon: Zap,
    title: "Instant Compilation",
    description:
      "See your changes in real-time. LaTeX compilation happens automatically in the background.",
  },
  {
    icon: Layers,
    title: "Dynamic Sections",
    description:
      "Add, remove, or reorder sections effortlessly. Experience, education, projects, and more.",
  },
  {
    icon: Download,
    title: "PDF Export",
    description:
      "Download your resume as a high-quality PDF, ready for applications and interviews.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description:
      "Extend and modify sections to match your unique background and career goals.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Everything you need to build a{" "}
            <span className="text-blue-400">standout resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From YAML to PDF in seconds. No LaTeX expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
