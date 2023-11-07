import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import SeoText from "./SeoText";
import HowToUse from "./HowToUse";
import AboutUs from "./AboutUs";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AdBanner from "./Adbanner";
import Slider from "@mui/material/Slider";
import Header from "./Header";
import Footer from "./Footer";
import PrivacyConsentPopup from "./PrivacyConsentPopup";
import passwordImage from "./images/password.png";
import refreash from "./images/refreash.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function App() {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [characterSet, setCharacterSet] = useState("standard");
  const [selectedCharacterSets, setSelectedCharacterSets] = useState(["123", "#$%", 'abc', 'ABC']);
  const [language, setLanguage] = useState("en");
  const [quantity, setQuantity] = useState(1);
  const [passwords, setPasswords] = useState([]);
  const maxquantity = 20;
  const handleQuantityChange = (event) => {
    setQuantity('');
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity <= maxquantity) {
      setQuantity(newQuantity);
    }

  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleCheckboxChange = (characterSet) => {
    // Toggle the selected character set on or off
    if (selectedCharacterSets.includes(characterSet)) {
      setSelectedCharacterSets(
        selectedCharacterSets.filter((set) => set !== characterSet)
      );
    } else {
      setSelectedCharacterSets([...selectedCharacterSets, characterSet]);
    }
  };

  const characterSets = {
    ABC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    abc: "abcdefghijklmnopqrstuvwxyz",
    123: "0123456789",
    "#$%": "!@#$%^&*()",
  };
  useEffect(() => {
    // This function will be executed on page load
    GeneratePasswords();
  }, [quantity, selectedCharacterSets]);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCopyClick = (index) => {
    if (index >= 0 && index < passwords.length) {
      navigator.clipboard.writeText(passwords[index]);
      handleClick();
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 500);
    }
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        {language == "en" ? "hide" : "сховати"}
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const GeneratePasswords = () => {
    const currentQuantity = passwords.length;
    const newQuantity = quantity - currentQuantity;

    if (newQuantity > 0) {
      const generatedPasswords = [...passwords]; // Create a copy of the current passwords array

      for (let i = 0; i < newQuantity; i++) {
        let characters = "";
        selectedCharacterSets.forEach((set) => {
          characters += characterSets[set];
        });

        let password = "";
        for (let j = 0; j < passwordLength; j++) {
          password += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }

        generatedPasswords.push(password); // Push the new password to the existing array
      }

      setPasswords(generatedPasswords); // Update the state with the updated array
    } else if (currentQuantity > quantity) {
      // Decrease the quantity of displayed passwords
      setPasswords(passwords.slice(0, quantity));
    }
  };

  const handleGeneratePassword = (index) => {
    if (index >= 0 && index < passwords.length) {
      GeneratePassword(index);
    }
  };

  const GeneratePassword = (index) => {
    let characters = "";
    selectedCharacterSets.forEach((set) => {
      characters += characterSets[set];
    });

    let password = "";
    for (let j = 0; j < passwordLength; j++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    const updatedPasswords = [...passwords];
    updatedPasswords[index] = password;
    setPasswords(updatedPasswords);
  };

  const passwordInputs = passwords.map((password, index) => (
    <div className="flex relative items-center flex-row lg:flex-row gap-4 h-auto w-[100%] my-5 lg:my-1 flex-wrap lg:flex-nowrap" key={index}>
      <div className="py-2 w-[100%] lg:w-[80%] flex items-center h-auto border-2 border-[#E5F6FF] border-solid rounded-[120px] text-[#071016] text-[12px] md:text-[20px]">
        <input
          type="text"
          value={password || ""}
          className="rounded-[40px] ml-[16px] border-none outline-none h-full w-[80%] lg:w-[80%] md:py-5 flex-grow-1"
        />
        <div className="flex items-center justify-end flex-nowrap w-full lg:max-w-[300px] max-w-[150px] ">
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold hidden lg:flex text-[18px] lg:text-[24px] rounded-[60px] px-[16px] py-[12px] w-full my-2 lg:my-0 mx-2 whitespace-nowrap justify-center"
            onClick={() => handleGeneratePassword(index)}
          >
            {language === "en" ? "Generate Password" : "Генерувати"}
          </button>
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[12px] md:text-[18px] flex lg:hidden lg:text-[24px] rounded-[60px] px-[8px] md:px-[16px] py-[10px] md:py-[12px] my-2 lg:my-0 mx-2 whitespace-nowrap justify-center"
            onClick={() => handleGeneratePassword(index)}
          >
            {language === "en" ? "Generate" : "Генерувати"}
          </button>
          <img
            onClick={() => handleGeneratePassword(index)}
            src={refreash}
            alt="refreash image"
            className="flex mr-2 cursor-pointer h-[15px] md:h-[20px]"
          />
        </div>
      </div>
      <button
        disabled={password?.length < 1}
        className="bg-[#2A4E63] w-[100%] -bottom-12 lg:w-[20%] text-white font-semibold text-[12px] md:text-[24px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer"
        style={password?.length < 1 ? { cursor: "not-allowed" } : {}}
        onClick={() => handleCopyClick(index)}
      >
        {language === "en" ? "Copy" : "Копіювати"}
      </button>
    </div>
  ));
  // Create a separate array for the first password
  const firstPasswordInput = passwords.length > 0 ? passwordInputs[0] : null;

  // Create an array for the rest of the passwords (excluding the first one)
  const restPasswordInputs = passwords.length > 1 ? passwordInputs.slice(1) : [];
  return (
    <div class="container mx-auto">

      <div className="flex h-auto align-middle flex-col items-center justify-center mx-auto p-0 lg:p-3 font-sans">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={language == "en" ? "Password copied successfully" : "Пароль успішно згенеровано"}
          action={action}
          color="bg-[#2A4E63]"
        />

        <div className={`bg-[url('./images/vector-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center mb-4 bg-[#E5F6FF] w-full lg:w-[100%] rounded-72 pt-10 md:pt-32`}>
          <h2 className="mx-1 md:mb-2 text-[30px] lg:text-[50px] font-bold tracking-tight text-center text-gray-900">
            {language == "en"
              ? "Need a Unique, Secure"
              : "Потрібен унікальний, безпечний"}{" "}
            <br />
            {language == "en" ? "Password?" : "Пароль?"}
          </h2>
          <p className="text-center text-[22px] text-[#2A4E63] mx-2 mb-4">
            {language == "en"
              ? "With Generate Password to me"
              : `За допомогою" згенерувати пароль "для мене`}
          </p>
          <div className="w-11/12 flex flex-col bg-white drop-shadow-lg  rounded-48 shadow p-[20px] md:p-[60px] relative">
            <div className="absolute hidden bg-white drop-shadow-lg  top-[-30px] left-[-140px] border-[#E5F6FF] border-2 border-solid rounded-[120px] py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex items-center gap-2">
              <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                <img
                  src={passwordImage}
                  alt="password image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="pt-[10px]">*******</p>
            </div>
            {/* bottom passaword lock */}
            <div className="absolute hidden justify-start bg-white drop-shadow-lg  bottom-[55%] right-[-120px] border-[#E5F6FF] border-2 border-solid rounded-[120px]  py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex lg:items-center gap-2">
              <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                <img
                  src={passwordImage}
                  alt="password image"
                  width={20}
                  height={20}
                />
              </div>
              <p className="pt-[10px]">*******</p>
            </div>
            {firstPasswordInput}
            <div className=" text-[#2A4E63] text-[12px] md:text-[18px] lg:mt-3 lg:flex">
              {/* {language == "en"
                  ? "Strong! Could take 317,098 years to crack."
                  : "Сильний! На злам може знадобитися 317 098 років."} */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-1 lg:mt-3">
              <div className="flex flex-col gap-3 items-start mt-8 lg:mt-6">
                <label for="Password" className="text-[12px] md:text-[22px] text-[#2A4E63]">
                  {language == "en" ? "Password length:" : "Довжина пароля:"}{" "}
                  {passwordLength}
                </label>
                <div className="flex items-center gap-4 w-full">
                  <RemoveCircleOutlineIcon />
                  <Slider
                    value={passwordLength}
                    min={1}
                    max={100}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    className="h-[15px]"

                  />{" "}
                  <AddCircleOutlineIcon />
                </div>
              </div>

              <div className="flex flex-col gap-3 items-start">
                <label for="quantity" className="text-[12px] md:text-[22px] text-[#2A4E63]">
                  {language == "en" ? "Quantity" : "Кількість"}
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max={maxquantity}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border-2 border-[#E5F6FF] border-solid rounded-[18px] text-[#071016] text-[12px] md:text-[20px] py-3 md:py-5 px-3 outline-none w-full"
                />
              </div>
            </div>
            <div className="flex gap-3 flex-wrap items-center mt-9 ">
              <label for="Character" className="text-[12px] md:text-[22px] text-[#2A4E63]">
                {language == "en" ? "Characters used:" : "Використати символи:"}
              </label>
              <div className="flex items-start flex-nowrap text-[10px] md:text-[20px]">
                {Object.keys(characterSets).map((characterSet) => (
                  <div key={characterSet} className="flex items-center gap-2">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedCharacterSets.includes(characterSet)}
                          onChange={() => handleCheckboxChange(characterSet)}
                          checkedIcon={<CheckBoxOutlinedIcon color='#2A4E63' />}
                          color="#2A4E63"
                          style={{ borderRadius: 10, color: '#2A4E63' }}
                          className="h-[12px] text-sm md:text-[22px]"

                        />
                      }
                      className="text-[10px] md:text-[20px]"
                      label={<span className="text-[10px] md:text-[16px]">{characterSet}</span>}
                    />
                  </div>
                ))}
              </div>
            </div>
            {restPasswordInputs}
          </div>
        </div>
        <div className=" mt-48 lg:mt-40 w-full">
          <AdBanner language={language} />
        </div>
        <div className="my-20 w-full">
          <SeoText language={language} />
        </div>
        <div id="howtouse" className="my-20 w-full">
          <HowToUse language={language} />
        </div>
        <div id="aboutus" className="my-20 w-full">
          <AboutUs language={language} />
        </div>
        <div className="mb-4 w-full">
          <AdBanner language={language} />
        </div>
        <Footer language={language} />
        <PrivacyConsentPopup language={language} />
      </div>
    </div>
  );
}
