import React from "react";
import ReactDOM from "react-dom/client";
import LoginContextProvider from "./context/LoginContext";
import App from "./App";
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);
