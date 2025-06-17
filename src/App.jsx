// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppEn from "./AppEn";
import AppUa from "./AppUa";
import TagManager from "react-gtm-module";

const TagManagerArgs = {
  gtmId:'GTM-KR2SHTKB'
}

TagManager.initialize(TagManagerArgs)

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A4E63",
    },
    secondary: {
      main: "#E5F6FF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/en" element={<AppEn />} />
          <Route path="/ua" element={<AppUa />} />
          <Route path="/" element={<AppEn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


