
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FuturisticEffects from "./components/ui/FuturisticEffects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Company from "./pages/Company"

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<App/>
<FuturisticEffects/>

</React.StrictMode>
);
