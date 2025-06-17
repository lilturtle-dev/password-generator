import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import SeoText from "./SeoText";
import HowToUse from "./HowToUse";
import AboutUs from "./AboutUs";
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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import SeoList from "./SeoList";
import zxcvbn from "zxcvbn";
import { Helmet } from "react-helmet";
import seoData from "./SeoData";
import { rankColor } from "./functions/RankColor";
import { getStrengthWord } from "./functions/GetStrengthWord";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function App() {
  const handleCopyAllClick = () => {
    const allPasswords = passwords.join("\n");
    navigator.clipboard.writeText(allPasswords);

    const newSnackbar = {
      id: new Date().getTime(),
      message:
        language === "en"
          ? "All passwords copied successfully"
          : "Усі паролі успішно скопійовано",
    };

    setSnackbars((prevSnackbars) => [...prevSnackbars, newSnackbar]);

    setTimeout(() => {
      setSnackbars((prevSnackbars) =>
        prevSnackbars.filter((snackbar) => snackbar.id !== newSnackbar.id)
      );
    }, 500);
  };

  const handleDownloadAllClick = () => {
    const allPasswords = passwords.join("\n");
    const blob = new Blob([allPasswords], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "passwords.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [snackbars, setSnackbars] = useState([]);
  const [passwordLength, setPasswordLength] = useState(12);
  const [selectedCharacterSets, setSelectedCharacterSets] = useState([
    "0-9",
    "#$%",
    "a-z",
    "A-Z",
  ]);
  const [language, setLanguage] = useState("ua");
  const [quantity, setQuantity] = useState(1);
  const [passwords, setPasswords] = useState([]);
  const maxquantity = 100;
  const mode = "production";
  const handleQuantityChange = (event) => {
    setQuantity("");
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
    "A-Z": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "a-z": "abcdefghijklmnopqrstuvwxyz",
    "0-9": "0123456789",
    "#$%": "!@#$%^&*()",
  };

  const GeneratePasswords = useCallback(() => {
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
  }, [passwords, quantity, selectedCharacterSets, passwordLength, characterSets]);

  useEffect(() => {
    // This function will be executed on page load
    GeneratePasswords();
  }, [GeneratePasswords]);

  useEffect(() => {
    const seoInfo = seoData.find((data) => data.language === language);

    if (seoInfo) {
      document.title = seoInfo.title;
      document.querySelector('meta[name="description"]').content =
        seoInfo.description;
    }
  }, [language]);

  const handleCopyClick = (index) => {
    if (index >= 0 && index < passwords.length) {
      navigator.clipboard.writeText(passwords[index]);

      // Create a new snackbar and add it to the state
      const newSnackbar = {
        id: new Date().getTime(),
        message:
          language === "en"
            ? "Password copied successfully"
            : "Пароль успішно скопійовано",
      };

      setSnackbars((prevSnackbars) => [...prevSnackbars, newSnackbar]);

      setTimeout(() => {
        // Remove the snackbar after a certain duration
        setSnackbars((prevSnackbars) =>
          prevSnackbars.filter((snackbar) => snackbar.id !== newSnackbar.id)
        );
      }, 500);
    }
  };

  const renderedSnackbars = snackbars.map((snackbar) => (
    <Snackbar
      key={snackbar.id}
      open={true} // Automatically open the snackbar
      autoHideDuration={6000}
      onClose={() =>
        setSnackbars((prevSnackbars) =>
          prevSnackbars.filter((item) => item.id !== snackbar.id)
        )
      }
      message={snackbar.message}
      color="bg-[#2A4E63]"
    />
  ));

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
    <div
      className="flex relative items-center flex-row lg:flex-row gap-4 h-auto w-[100%] my-5 lg:my-1 flex-wrap lg:flex-nowrap"
      key={index}
    >
      <div className="py-1 lg:px-4 w-[100%] lg:w-[80%] flex items-center h-16 border-2 border-[#E5F6FF] border-solid rounded-[120px] text-[#071016] text-[12px] md:text-[20px]">
        <input
          type="text"
          value={password || ""}
          className="rounded-[40px] ml-[16px] border-none outline-none h-full w-[80%] lg:w-[80%] md:py-5 flex-grow-1 text-base lg:text-lg"
        />
        <div className="flex items-center lg:justify-end justify-center flex-nowrap w-full lg:max-w-[300px] max-w-[150px] h-full bg-[#E5F6FF] lg:bg-transparent rounded-[40px]">
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold hidden lg:flex text-[18px] lg:text-[20px] rounded-[60px] px-[16px] py-[12px] w-full my-2 lg:w-auto lg:px-6 lg:py-2 mx-2 whitespace-nowrap justify-center"
            onClick={() => handleGeneratePassword(index)}
          >
            {"Генерувати"}
          </button>
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[16px] md:text-[18px] flex lg:hidden lg:text-[24px] rounded-[60px] px-[8px] md:px-[16px] py-[10px] md:py-[12px] lg:my-0 mx-2 whitespace-nowrap justify-center py-0 items-center px-2 h-full"
            onClick={() => handleGeneratePassword(index)}
          >
            {language === "en" ? "Generate" : "Генерувати"}
          </button>
          <img
            onClick={() => handleGeneratePassword(index)}
            src={refreash}
            alt="refresh"
            className="flex mr-2 cursor-pointer h-[15px] md:h-[20px]"
          />
        </div>
      </div>
      <button
        disabled={password?.length < 1}
        className="bg-[#2A4E63] w-[100%] -bottom-12 lg:w-[20%] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer"
        style={password?.length < 1 ? { cursor: "not-allowed" } : {}}
        onClick={() => handleCopyClick(index)}
      >
        {"Копіювати"}
      </button>
    </div>
  ));

  // Create a separate array for the first password
  const firstPasswordInput = passwords.length > 0 ? passwordInputs[0] : null;
  const TimeToCrackResult = passwords.length > 0 ? zxcvbn(passwords[0]) : null;
  const CrackScore = TimeToCrackResult ? TimeToCrackResult.score : null;
  const strengthWord = getStrengthWord(CrackScore, language);

  const scoreColor = rankColor(CrackScore);
  const strengthColor = { color: scoreColor };
  const strengthWordScoreEn = TimeToCrackResult
    ? TimeToCrackResult.crack_times_display.offline_slow_hashing_1e4_per_second
    : null;
  const strengthWordScoreUk = strengthWordScoreEn
    ? strengthWordScoreEn
        .replace(/years/g, "років")
        .replace(/year/g, "рік")
        .replace(/months/g, "місяці")
        .replace(/month/g, "місяць")
        .replace(/days/g, "днів")
        .replace(/day/g, "день")
        .replace(/hours/g, "годин")
        .replace(/hour/g, "година")
        .replace(/minutes/g, "хвилин")
        .replace(/minute/g, "хвилина")
        .replace(/seconds/g, "секунд")
        .replace(/second/g, "секунда")
        .replace(/century/g, "століття")
        .replace(/centuries/g, "століття")
        .replace(/less than a/g, "менше ніж")
    : null;

  // Create an array for the rest of the passwords (excluding the first one)
  const restPasswordInputs =
    passwords.length > 1 ? passwordInputs.slice(1) : [];
  return (
    <div
      className={`container ${language} mx-auto w-screen lg:w-full px-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>
          {seoData.find((data) => data.language === language)?.title}
        </title>
        <meta
          name="description"
          content={
            seoData.find((data) => data.language === language)?.description
          }
        />
      </Helmet>
      <div className="flex h-auto align-middle flex-col items-center justify-center mx-auto p-0 lg:p-3 font-sans">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        {renderedSnackbars}

        <div
          className={`bg-[url('./images/vector-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center mb-4 bg-[#E5F6FF] w-full lg:w-[100%] rounded-72 pt-10 md:pt-32`}
        >
          <h2 className="mx-1 md:mb-2 text-[30px] lg:text-[50px] font-bold tracking-tight text-center text-gray-900">
            {"Потрібен унікальний, безпечний"} <br />
            {"Пароль?"}
          </h2>
          <p className="text-center text-[22px] text-[#2A4E63] mx-2 mb-4">
            {`За допомогою" згенерувати пароль "для мене`}
          </p>
          <div className="w-full lg:w-9/12 flex flex-col bg-white drop-shadow-lg  rounded-48 shadow p-[20px] md:p-[60px] relative">
            <div className="absolute hidden bg-white drop-shadow-lg  top-[-30px] left-[-140px] border-[#E5F6FF] border-2 border-solid rounded-[120px] py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex items-center gap-2">
              <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                <img
                  src={passwordImage}
                  alt="password"
                  width={20}
                  height={20}
                />
              </div>
              <p className="pt-[10px]">*******</p>
            </div>
            {/* bottom passaword lock */}
            <div className="absolute hidden justify-start bg-white drop-shadow-lg  top-[150px] right-[-120px] border-[#E5F6FF] border-2 border-solid rounded-[120px]  py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex lg:items-center gap-2">
              <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                <img
                  src={passwordImage}
                  alt="password"
                  width={20}
                  height={20}
                />
              </div>
              <p className="pt-[10px]">*******</p>
            </div>
            {firstPasswordInput}
            <div
              className=" text-[#2A4E63] text-[16px] md:text-[18px] lg:mt-3 lg:flex"
              style={strengthColor}
            >
              {`${strengthWord} На злам може знадобитися ${strengthWordScoreUk}.`}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-1 lg:mt-3">
              <div className="flex flex-col gap-3 items-start mt-8 lg:mt-6">
                <label
                  htmlFor="Password"
                  className="text-[16px] md:text-[22px] text-[#2A4E63]"
                >
                  {"Довжина пароля:"} {passwordLength}
                </label>
                <div className="flex items-center gap-4 w-full">
                  <RemoveCircleOutlineIcon
                    onClick={() =>
                      setPasswordLength((prev) => Math.max(1, prev - 1))
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <Slider
                    value={passwordLength}
                    min={4}
                    max={100}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    className="h-[15px]"
                  />
                  <AddCircleOutlineIcon
                    onClick={() =>
                      setPasswordLength((prev) => Math.min(100, prev + 1))
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 items-start">
                <label
                  htmlFor="quantity"
                  className="text-[16px] md:text-[22px] text-[#2A4E63]"
                >
                  {"Кількість"}
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max={maxquantity}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border-2 border-[#E5F6FF] border-solid rounded-[18px] text-[#071016] text-[18px] md:text-[20px] py-3 md:py-5 px-3 outline-none w-full"
                />
              </div>
            </div>
            <div className="flex gap-3 flex-wrap items-center mt-9 ">
              <label
                htmlFor="Character"
                className="text-[16px] md:text-[22px] text-[#2A4E63]"
              >
                {"Використати символи:"}
              </label>
              <div className="flex items-start flex-nowrap text-[10px] md:text-[20px]">
                {Object.keys(characterSets).map((characterSet) => (
                  <div key={characterSet} className="flex items-center gap-2">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedCharacterSets.includes(characterSet)}
                          onChange={() => handleCheckboxChange(characterSet)}
                          checkedIcon={<CheckBoxOutlinedIcon />}
                          sx={{ 
                            color: "#2A4E63",
                            "&.Mui-checked": {
                              color: "#2A4E63"
                            }
                          }}
                          className="h-[24px] text-sm md:text-[22px]"
                        />
                      }
                      className="text-[18px] md:text-[20px]"
                      label={
                        <span className="text-[18px] md:text-[16px]">
                          {characterSet}
                        </span>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            {restPasswordInputs}
            {passwords.length >= 2 ? (
              <div className="flex gap-3 mt-2">
                <Button
                  className="bg-[#2A4E63] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer"
                  onClick={handleCopyAllClick}
                >
                  <FileCopyIcon sx={{ marginRight: 1 }} />
                  {language === "en" ? "Copy All" : "Копіювати всі"}
                </Button>
                <Button
                  className="bg-[#2A4E63] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer"
                  onClick={handleDownloadAllClick}
                >
                  <CloudDownloadIcon sx={{ marginRight: 1 }} />
                  {language === "en" ? "Download All" : "Завантажити всі"}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full mt-10">
          {mode === "production" && <AdBanner language="ua" />}
        </div>
        <div className="lg:my-10 w-full">
          <SeoText language="ua" />
        </div>
        <div id="howtouse" className="lg:my-10 w-full">
          <HowToUse language="ua" />
        </div>
        <div id="aboutus" className="lg:my-10 w-full">
          <AboutUs language="ua" />
        </div>
        <div className="mb-4 w-full">
          {mode === "production" && <AdBanner language="ua" />}
        </div>
        <div id="guide" className="lg:my-10 w-full">
          <SeoList language="ua" />
        </div>
        <Footer language="ua" />
        <PrivacyConsentPopup language="ua" />
      </div>
    </div>
  );
}
