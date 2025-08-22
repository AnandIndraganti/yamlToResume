import { FileText, Github, Twitter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">YAML Resume</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform YAML into professional resumes with LaTeX quality. No
              manual editing required.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Product</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/app"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Editor
              </Link>
              <a
                href="#features"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#example"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Examples
              </a>
              <a
                href="#templates"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Templates
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#docs"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#api"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                API Reference
              </a>
              <a
                href="#support"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href="#changelog"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Changelog
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Community</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <p>© 2024 YAML Resume Generator</p>
            <div className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> for
              developers
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              title="GitHub"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              title="Twitter"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
