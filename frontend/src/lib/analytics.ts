// Analytics utility functions
import { track } from "@vercel/analytics";

// Custom event tracking functions
export const trackEvent = {
  // Track when user compiles a resume
  resumeCompiled: () => {
    track("resume_compiled", {
      timestamp: new Date().toISOString(),
    });
  },

  // Track when user downloads a PDF
  pdfDownloaded: () => {
    track("pdf_downloaded", {
      timestamp: new Date().toISOString(),
    });
  },

  // Track when user visits the app page
  appPageVisited: () => {
    track("app_page_visited", {
      timestamp: new Date().toISOString(),
    });
  },

  // Track when user visits landing page
  landingPageVisited: () => {
    track("landing_page_visited", {
      timestamp: new Date().toISOString(),
    });
  },

  // Track YAML editor usage
  yamlEdited: (characterCount: number) => {
    track("yaml_edited", {
      characterCount,
      timestamp: new Date().toISOString(),
    });
  },

  // Track compilation errors
  compilationError: (errorType: string) => {
    track("compilation_error", {
      errorType,
      timestamp: new Date().toISOString(),
    });
  },
};

// Check if analytics should be enabled (only in production)
export const isAnalyticsEnabled = () => {
  return import.meta.env.PROD;
};
