import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "@/components/ui/icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
              <span className="text-blue-400">YAML</span> to Resume
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Transform your YAML code into professional resumes instantly. No
              more manual LaTeX editing — just write YAML and get beautiful
              PDFs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white group"
            >
              <Link to="/app">
                Start Building
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => {
                const exampleSection = document.getElementById("example");
                exampleSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FileText className="mr-2 w-4 h-4" />
              View Example
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5 min</div>
              <div className="text-sm text-gray-400">Setup time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-sm text-gray-400">
                LaTeX knowledge needed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="text-sm text-gray-400">Customization options</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
