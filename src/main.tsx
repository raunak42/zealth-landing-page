import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
// import { Parallax } from "@react-spring/parallax";
import { Home } from "./pages/home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);
