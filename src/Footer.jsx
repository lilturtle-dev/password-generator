import React from "react";
import Logo from "./logo.svg";
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import linkdIn from './images/linkdIn.png'


const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full py-4 px-2 flex flex-col gap-5 lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="generatepasswordtome" Використання
            className="w-6 h-6 mr-1 logo"
          />

        </div>
        <ul className="lg:flex items-center hidden text-decoration-none gap-5 text-[#071016] text-xl font-medium">
          <li className=" cursor-pointer"><a href="#aboutus">{language == 'en' ? 'About us' : 'Про нас'}</a></li>
          <li className=" cursor-pointer"><a href="#howtouse">{language == 'en' ? 'How to use' : 'Як використовувати'}</a></li>
          <li className=" cursor-pointer"><a href="#guide">{language == 'en' ? 'Guide' : 'Посібник'}</a></li>
        </ul>
        {/* <ul className="flex items-center text-decoration-none gap-4 ">
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]   w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={facebook} alt="facebook image" /></li>
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]  w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={twitter} alt="facebook image" /></li>
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]  w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={linkdIn} alt="facebook image" /></li>
        </ul> */}
      </footer>
      <div className="text-black text-[18px] w-full text-center font-medium my-5 ml-2 lg:text-left">{language == 'en' ? 'Copyright' : 'Авторське право'} © <span className=" text-[#96DBFF] font-bold">GeneratePasswordTo.Me </span>{currentYear}</div>
    </>
  );
};

export default Footer;
