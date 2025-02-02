import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router";
import App from "./App.tsx";
// import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

// Enable cross-document view transitions
if (document.documentElement) {
  document.documentElement.style.viewTransitionName = 'root';
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
