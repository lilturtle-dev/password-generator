# Color Scheme Documentation

## Overview
This document describes the color scheme used in the Password Generator application, including CSS variables and their usage.

## CSS Variables

### Dark Theme Colors
- `--dark-theme-bg: #121212` - Main dark background
- `--dark-theme-text: #E0E0E0` - Primary text color in dark mode
- `--dark-theme-white: #E0E0E0` - White text replacement in dark mode
- `--dark-theme-card: #1c1c1c` - Card background in dark mode
- `--dark-theme-input: #121212` - Input background in dark mode
- `--dark-theme-border: #374151` - Border color in dark mode

### Light Theme Colors
- `--light-theme-text: #071016` - Primary text color in light mode
- `--light-theme-bg: #ffffff` - Main light background
- `--light-theme-card: #ffffff` - Card background in light mode
- `--light-theme-input: #ffffff` - Input background in light mode
- `--light-theme-border: #E5F6FF` - Border color in light mode

### Primary Colors
- `--primary-color: #2A4E63` - Main brand color
- `--secondary-color: #E5F6FF` - Secondary brand color
- `--accent-color: #05a9ff` - Accent color for buttons and highlights
- `--success-color: #96DBFF` - Success/positive color

### Status Colors
- `--success-bg: #166534` - Success background
- `--info-bg: #2A4E63` - Info background
- `--warning-bg: #854d0e` - Warning background
- `--error-bg: #dc2626` - Error background

### Text Colors
- `--text-primary: #111827` - Primary text color
- `--text-secondary: #6b7280` - Secondary text color
- `--text-muted: #9ca3af` - Muted text color

### Button Colors
- `--button-primary: #2A4E63` - Primary button color
- `--button-primary-hover: #1e3a8a` - Primary button hover
- `--button-secondary: #E5F6FF` - Secondary button color
- `--button-accent: #05a9ff` - Accent button color
- `--button-accent-hover: #1e3a8a` - Accent button hover

### Background Colors
- `--bg-primary: #ffffff` - Primary background
- `--bg-secondary: #f9fafb` - Secondary background
- `--bg-accent: #E5F6FF` - Accent background
- `--bg-success: #f0fdf4` - Success background
- `--bg-info: #eff6ff` - Info background
- `--bg-warning: #fffbeb` - Warning background
- `--bg-error: #fef2f2` - Error background

## Usage

### In CSS
```css
.my-element {
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border-color: var(--light-theme-border);
}

.dark .my-element {
  color: var(--dark-theme-text);
  background-color: var(--dark-theme-bg);
  border-color: var(--dark-theme-border);
}
```

### In Tailwind Classes
```jsx
<div className="text-[#071016] dark:text-[#e0e0e0] bg-white dark:bg-[#121212]">
  Content
</div>
```

### In Material-UI Theme
```jsx
const theme = createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    text: {
      primary: isDarkMode ? '#e0e0e0' : '#071016',
      secondary: isDarkMode ? '#b0b0b0' : '#2A4E63',
    },
  },
});
```

## Key Changes Made

1. **Replaced white text in dark mode**: All instances of `#ffffff` and `text-white` in dark mode have been replaced with `#e0e0e0` for better readability and reduced eye strain.

2. **Centralized color management**: All colors are now defined in `src/styles/colors.css` as CSS variables.

3. **Consistent theming**: Colors are consistently applied across all components including:
   - Buttons (copy, download, standard selectors)
   - Text elements (headings, paragraphs, lists)
   - Accordion components
   - Material-UI components
   - Form elements

4. **Improved accessibility**: The `#e0e0e0` color provides better contrast against dark backgrounds while maintaining readability.

## File Structure
```
src/
├── styles/
│   └── colors.css          # Color variables
├── index.css               # Main styles with color imports
└── components/
    └── SeoAccordion.jsx    # Updated with new colors
```

## Maintenance

When adding new colors or modifying existing ones:
1. Update the variables in `src/styles/colors.css`
2. Use the variables in CSS files
3. Update Tailwind classes in JSX components
4. Update Material-UI theme configuration in `App.jsx`
5. Test in both light and dark modes 