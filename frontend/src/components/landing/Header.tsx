import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">YAML Resume</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#example"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Example
            </a>
            <a
              href="#docs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link to="/app">Try Editor</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
