import React, { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import hamburger from './images/hamburger.png'
import Logo from "./logo.svg";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import Flag from 'react-world-flags';
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const menuItems = [
  {
    label: {
      en: 'About us',
      ua: 'Про нас',
    },
    href: '#aboutus',
  },
  {
    label: {
      en: 'How to Use',
      ua: 'Як користуватися',
    },
    href: '#howtouse',
  },
  {
    label: {
      en: 'Guide',
      ua: 'Посібник',
    },
    href: '#guide',
  },
];


const languages = [
  { label: 'English', value: 'en', flag: <Flag code="840" width={32} /> },
  { label: 'Українська', value: 'ua', flag: <Flag code="804" width={32} /> },
];

const Header = ({ onLanguageChange }) => {

  const navigate = useNavigate();
  const [language, setLanguage] = useState(() => {
    const pathSegments = window.location.pathname.split("/");
    const languageFromURL = pathSegments[1];

    if (languageFromURL === "en" || languageFromURL === "ua") {
      return languageFromURL;
    }

    const browserLanguage = navigator.language || navigator.userLanguage;

    // Extract the language code
    const languageCode = browserLanguage.split(/[-_]/)[0];

    // Map "uk" to "ua", otherwise return the language code
    const mappedLanguageCode = languageCode === "uk" ? "ua" : languageCode;

    // Check if the language is "en" or "ua", otherwise, return a default language
    if (mappedLanguageCode === "en" || mappedLanguageCode === "ua") {
      return mappedLanguageCode;
    } else {
      // You can set a default language here if needed
      return "en";
    }
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    // Save the selected language to localStorage
    localStorage.setItem("language", language);

    // Notify the parent component about the language change
    onLanguageChange(language);

    // Automatically navigate to the language-specific route
    navigate(`/${language}`);

    // Додаю зміну атрибута lang у <html>
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'ua' ? 'uk' : 'en';
    }
  }, [language, onLanguageChange, navigate]);

  const [state, setState] = React.useState({
    top: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    //onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ px: "10px" }}>
        {menuItems.map((menuItem) => (
          <ListItem key={menuItem.href} disablePadding>
            <Link href={menuItem.href} underline="none">
              <ListItemText primary={menuItem.label[language]} sx={{ fontSize: '22px', fontWeight: 'bolder', color: 'black' }} />
            </Link>
          </ListItem>
        ))}

        <Divider />
        <ListItem>
          <InputLabel id="language-select-label" sx={{ width: '100%' }}>
            {language === 'en' ? 'Choose language' : 'Виберіть мову'}
          </InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            sx={{
              width: '100%'
            }}
            value={language}
            onChange={handleLanguageChange}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.value} value={lang.value}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: 8 }}>{lang.flag}</span>
                  <span className="ml-2">{lang.label}</span>
                </div>
              </MenuItem>
            ))}
          </Select>
        </ListItem>
      </List>
    </Box>
  );


  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setLanguage(lang);
    setIsSelectOpen(false);
    navigate(`/${lang}`);
  };

  return (
    <header className="py-7 px-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="generatepasswordtome"
          className="w-6 h-6 mr-1 logo"
        />
      </div>
      <ul className="lg:flex items-center hidden text-decoration-none gap-5 text-[#071016] text-xl font-medium">
        <li className=" cursor-pointer"><a href="#aboutus">{language === 'en' ? 'About us' : 'Про нас'}</a></li>
        <li className=" cursor-pointer"><a href="#howtouse">{language === 'en' ? 'How to Use' : 'Як користуватися?'}</a></li>
        <li className=" cursor-pointer"><a href="#guide">{language === 'en' ? 'Guide' : 'Посібник'}</a></li>

      </ul>

      <select 
        name="English" 
        value={language} 
        onChange={handleLanguageChange} 
        id="eng" 
        className="py-3 lg:flex hidden px-4 pr-5 justify-center pr-0 border-2 border-[#2A4E63] rounded-[60px] bg-transparent w-auto"
      >
        <option value="en">Eng</option>
        <option value="ua">Українська</option>
      </select>

      <div className=" flex lg:hidden">
        {['top'].map((anchor) => (
          <React.Fragment key={anchor}>
            <img src={hamburger} alt="hamburger" onClick={toggleDrawer(anchor, true)} className=" cursor-pointer" />
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>


    </header>
  );
};

export default Header;
