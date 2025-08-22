import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CodeExample from "@/components/landing/CodeExample";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  // Track landing page visit
  useEffect(() => {
    trackEvent.landingPageVisited();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="example">
          <CodeExample />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
