// App.js
import React from "react";
import AppUa from './AppUa';
import AppEn from './AppEn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TagManager from "react-gtm-module";

const TagManagerArgs = {
  gtmId:'G-PZ6VYZCN79'
}

TagManager.initialize(TagManagerArgs)

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


