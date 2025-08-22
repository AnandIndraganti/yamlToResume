// frontend/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { isAnalyticsEnabled } from "./lib/analytics";
import LandingPage from "./pages/LandingPage";
import AppPage from "./pages/AppPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<AppPage />} />
        </Routes>
      </Router>
      {isAnalyticsEnabled() && <Analytics />}
    </>
  );
}

export default App;
