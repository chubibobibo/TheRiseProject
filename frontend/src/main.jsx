import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import StatusProvider from "./utils/StatusProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StatusProvider> */}
    <App />
    {/* </StatusProvider> */}
    <ToastContainer position='top-center' />
  </React.StrictMode>
);
