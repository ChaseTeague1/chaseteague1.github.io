import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import "./styles.css"
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
