// App.js
import React from "react";
import AppUa from './AppUa';
import AppEn from './AppEn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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


