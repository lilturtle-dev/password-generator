import React from 'react';
import Radio from '@mui/material/Radio';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function LanguageSelector({ language, setLanguage }) {
  return (
    <ListItem>
      <ListItemText primary="Select Language" />
      <Radio
        value="en"
        checked={language === "en"}
        onChange={(e) => setLanguage(e.target.value)}
        size="large" // Make the radio button larger
       color="#2A4E63"
       style={{color:'#2A4E63'}}
      />
      <label htmlFor="English" className="mx-5 font-bold text-lg">
        English
      </label>
      <Radio
        value="ua"
        checked={language === "ua"}
        onChange={(e) => setLanguage(e.target.value)}
        size="large" // Make the radio button larger
        color="#2A4E63"
        style={{color:'#2A4E63'}}

      />
      <label htmlFor="ua" className="mx-5 font-bold text-lg">
        ua
      </label>
    </ListItem>
  );
}

export default LanguageSelector;
