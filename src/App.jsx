// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppEn from "./AppEn";
import AppUa from "./AppUa";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/en/*" element={<AppEn />} />
        <Route path="/ua/*" element={<AppUa />} />
        <Route path="/*" element={<AppEn />} />
      </Routes>
    </Router>
  );
}


