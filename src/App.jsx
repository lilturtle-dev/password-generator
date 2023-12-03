// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}


