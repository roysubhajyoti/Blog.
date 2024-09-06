import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "../Theme/themeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
