import React from "react";
import ReactDOM from "react-dom/client";
import TestReactComponent from "./TestReactComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TestReactComponent />
  </React.StrictMode>
);
