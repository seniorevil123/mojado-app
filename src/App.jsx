import React from "react";
import Books from "./Books";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>Library Management</h1>
      <Books />
    </div>
  );
};

export default App;
