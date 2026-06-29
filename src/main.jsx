import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App";

const container = document.getElementById("root");
const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Always use createRoot (not hydrateRoot) even when prerendered HTML is present.
// The prerendered static HTML is purely for SEO crawlers that never run JS.
// Attempting hydrateRoot with prerendered content causes React 18 to silently
// fall back on any mismatch (dark/light mode, sessionStorage, createPortal, etc.)
// while leaving the old static DOM in place — resulting in duplicate/extra
// content appearing after the footer for real users.
ReactDOM.createRoot(container).render(tree);

