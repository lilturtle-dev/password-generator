// App.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HelmetProvider } from "react-helmet-async";
import GeneratePassword from "./GeneratePassword";
import TagManager from "react-gtm-module";
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const TagManagerArgs = {
  gtmId:'GTM-KR2SHTKB'
}

TagManager.initialize(TagManagerArgs)

// Create theme context
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    // Update document class for global CSS
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: "#2A4E63",
      },
      secondary: {
        main: "#E5F6FF",
      },
      background: {
        default: isDarkMode ? '#1a1a1a' : '#ffffff',
        paper: isDarkMode ? '#2d2d2d' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#071016',
        secondary: isDarkMode ? '#b0b0b0' : '#2A4E63',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HelmetProvider>
          <Router>
            <Routes>
              <Route path="/:lang?" element={<GeneratePassword />} />
            </Routes>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;


