import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-0 bg-gradient-hero">
          <CardContent className="p-12 lg:p-16 text-center text-white relative z-10">
            {/* Background effects */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Ready to get started?
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Build Your Resume in Minutes
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join developers who've already discovered the easiest way to
                  create professional resumes. No LaTeX knowledge required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold group"
                >
                  <Link to="/app">
                    Create Your Resume Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  View Documentation
                </Button>
              </div>

              <div className="pt-8 text-white/70 text-sm">
                <p>Free to use • No signup required • Instant PDF download</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
