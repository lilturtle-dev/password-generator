import React from "react";
import Logo from "./logo.svg";

const referalLink = 'https://hostinger.com.ua?REFERRALCODE=1098786';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full py-4 px-2 flex flex-wrap flex-col gap-5 lg:flex-row justify-between items-center">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="generatepasswordtome"
              className="w-6 h-6 mr-1 logo"
            />
          </div>
          <ul className="lg:flex items-center hidden text-decoration-none gap-5 text-[#071016] text-xl font-medium">
            <li className=" cursor-pointer">
              <a href="#aboutus">{language === "en" ? "About us" : "Про нас"}</a>
            </li>
            <li className=" cursor-pointer">
              <a href="#howtouse">
                {language === "en" ? "How to use" : "Як використовувати"}
              </a>
            </li>
            <li className=" cursor-pointer">
              <a href="#guide">{language === "en" ? "Guide" : "Посібник"}</a>
            </li>
          </ul>
          {/* <ul className="flex items-center text-decoration-none gap-4 ">
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]   w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={facebook} alt="facebook image" /></li>
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]  w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={twitter} alt="facebook image" /></li>
          <li className=" cursor-pointer border-[1px] border-[#2A4E63]  w-16 h-16 items-center  flex justify-center rounded-full border-solid"><img src={linkdIn} alt="facebook image" /></li>
        </ul> */}
        <div className="flex lg:flex-row flex-col xs:flex-wrap lg:flex-nowrap w-full">
          <div className="text-black text-[18px] md:w-full lg:w-1/2 lg:text-left md:text-center font-medium my-5 ml-2">
            {language === "en" ? "Copyright" : "Авторське право"} ©{" "}
            <span className=" text-[#96DBFF] font-bold">
              GeneratePasswordTo.Me{" "}
            </span>
            {currentYear}
          </div>
          <div className="text-black text-[18px] xs:w-full lg:w-1/2 lg:text-right md:text-center font-medium my-5 ml-2">
            <p className="inline">{language === "en" ? "Working with " : "Працює на серверах "}</p><a className="text-[18px] inline text-[#96DBFF] font-semibold cursor-pointer" href={referalLink} rel="nofollow">  {language === "en" ? "Hostinger" : "Hostinger"}</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
