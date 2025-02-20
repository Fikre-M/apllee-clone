// import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


// createRoot(document.getElementById("root")).render(
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

