import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@material-ui/core";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  hamburger from './images/hamburger.png'
import Logo from "./logo.svg";
import LanguageSelector from "./LanguageSelect";

const useStyles = makeStyles(() => ({
  languageSelect: {
    color: "black",
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "black",
    },
  },
}));

const Header = ({ onLanguageChange }) => {
  const classes = useStyles();
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    onLanguageChange(language);
  }, [language]);


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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About', 'Why Choose Us', 'Uses'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text}  sx={{fontSize:'22px',fontWeight:'bolder',color:'black'}}/>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider/>
        <ListItem>
      <LanguageSelector language={language} setLanguage={setLanguage}/> 
      </ListItem>  
      </List>
    </Box>
  );


  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setLanguage(lang);
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
        <li className=" cursor-pointer"><a href="#aboutus">{language=='en'? 'About us':'Про нас'}</a></li>
        <li className=" cursor-pointer"><a href="#howtouse">{language=='en'?'How to Use':'Як користуватися?'}</a></li>
      </ul>

      <select name="English" value={language} onChange={handleLanguageChange} id="eng" className=" py-3 lg:flex hidden px-4 pr-0 border-2 border-[#2A4E63] rounded-[60px] bg-transparent w-auto">
         <option value="en">Eng</option>
        <option value="ua">Українська</option>
       </select>

       <div className=" flex lg:hidden">
      {[ 'top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <img src={hamburger} alt="hamburger" onClick={toggleDrawer(anchor, true)} className=" cursor-pointer"/>
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
