import React, { useState, useEffect, useCallback, useRef } from "react";
import Button from "@mui/material/Button";
import SeoText from "./SeoText";
import HowToUse from "./HowToUse";
import AboutUs from "./AboutUs";
import AdBanner from "./Adbanner";
import AdBannerSecond from "./AddbannerSecond";
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
import lang from "./lang.json";
import { rankColor } from "./functions/RankColor";
import { getStrengthWord } from "./functions/GetStrengthWord";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useReward } from "react-rewards";
import { useTheme } from "./App";
import seoData from "./SeoData";

function t(key, language) {
  return lang[key] && lang[key][language] ? lang[key][language] : key;
}

function translateTimeUnits(str, language) {
  if (!str) return str;
  return str
    .replace(/years/g, t('time_years', language))
    .replace(/year/g, t('time_year', language))
    .replace(/months/g, t('time_months', language))
    .replace(/month/g, t('time_month', language))
    .replace(/days/g, t('time_days', language))
    .replace(/day/g, t('time_day', language))
    .replace(/hours/g, t('time_hours', language))
    .replace(/hour/g, t('time_hour', language))
    .replace(/minutes/g, t('time_minutes', language))
    .replace(/minute/g, t('time_minute', language))
    .replace(/seconds/g, t('time_seconds', language))
    .replace(/second/g, t('time_second', language))
    .replace(/centuries/g, t('time_centuries', language))
    .replace(/century/g, t('time_century', language))
    .replace(/less than a/g, t('time_less_than_a', language));
}

function PasswordRow({
  password,
  index,
  language,
  onGenerate,
  onCopy,
  refreash,
  runReward,
  isAnimating,
  isDarkMode
}) {
  const disabledStyle = isAnimating
    ? { pointerEvents: "none", opacity: 0.5, cursor: "not-allowed" }
    : { cursor: "pointer" };
  return (
    <div
      className="flex relative items-center flex-row lg:flex-row gap-2 h-auto w-[100%] my-5 lg:my-1 flex-wrap lg:flex-nowrap"
      key={index}
    >
      <div
        className={`${isDarkMode ? "border-none" : "border-[#E5F6FF]"} py-1 lg:px-4 w-[100%] lg:w-[80%] flex items-center border-2 h-14 border-solid rounded-[120px] text-[#071016] text-[12px] md:text-[20px]`}
        style={isDarkMode ? { backgroundColor: "#2a4e63" } : {}}
      >
        <input
          type="text"
          value={password || ""}
          className="rounded-[40px] ml-[16px] border-none outline-none h-full w-[80%] lg:w-[80%] md:py-5 flex-grow-1 text-base lg:text-lg"
          readOnly
        />
        {/* For Desktop*/}
        <div className="hidden md:flex items-center lg:justify-end justify-center flex-nowrap w-full lg:max-w-[300px] max-w-[150px] h-full bg-[#E5F6FF] lg:bg-transparent rounded-[40px]">
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold hidden lg:flex text-[18px] lg:text-[20px] rounded-[60px] px-[16px] py-[12px] w-full my-2 lg:w-auto lg:px-6 lg:py-2 mx-2 whitespace-nowrap justify-center"
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {t("generate", language)}
          </button>
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[16px] md:text-[18px] flex lg:hidden lg:text-[24px] rounded-[60px] px-[8px] md:px-[16px] py-[10px] md:py-[12px] lg:my-0 mx-2 whitespace-nowrap justify-center py-0 items-center px-2 h-full"
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {t("generate_short", language)}
          </button>
          <img
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            src={refreash}
            alt="refresh"
            className="flex mr-2 h-[15px] md:h-[20px]"
            style={disabledStyle}
          />
        </div>
      </div>
      {/* For Mobile*/}
      <div className="flex md:hidden h-14 items-center lg:justify-end justify-center flex-nowrap w-full bg-[#E5F6FF] lg:bg-transparent rounded-[40px]">
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold hidden lg:flex text-[18px] lg:text-[20px] rounded-[60px] px-[16px] py-[12px] w-full my-2 lg:w-auto lg:px-6 lg:py-2 mx-2 whitespace-nowrap justify-center"
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {t("generate", language)}
          </button>
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[16px] md:text-[18px] flex lg:hidden lg:text-[24px] rounded-[60px] px-[8px] md:px-[16px] py-[10px] md:py-[12px] lg:my-0 mx-2 whitespace-nowrap justify-center py-0 items-center px-2 h-full"
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {t("generate_short", language)}
          </button>
          <img
            onClick={() => {
              onGenerate(index);
              runReward();
            }}
            src={refreash}
            alt="refresh"
            className="flex mr-2 h-[15px] md:h-[20px]"
            style={disabledStyle}
          />
        </div>
      <button
        disabled={password?.length < 1}
        className="bg-[#2A4E63] w-[100%] -bottom-12 h-14 lg:w-[20%] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] py-[12px]"
        style={
          password?.length < 1
            ? { cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
        onClick={() => onCopy(index)}
      >
        {t("copy", language)}
      </button>
    </div>
  );
}

const passwordCrackingStyles = `
  .password-cracking {
    position: relative;
    font-family: 'Courier New', monospace;
  }
  .password-cracking::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(42, 78, 99, 0.3), transparent);
    animation: scanning 2s infinite;
  }
  .password-cracking .char {
    display: inline-block;
    transition: all 0.2s ease;
    opacity: 0.6;
  }
  .password-cracking .char.active {
    opacity: 1;
    transform: scale(1.2);
    color: #2A4E63;
    font-weight: bold;
  }
  .password-cracking .char:not(.active) {
    opacity: 0.4;
    transform: scale(0.9);
  }
  .password-cracking .char.complete {
    color: #2A4E63;
    font-weight: bold;
    opacity: 1;
    transform: scale(1.1);
  }
  .password-cracking .char.blinking {
    animation: blink 1.6s infinite;
    color: #2A4E63;
    font-weight: bold;
    opacity: 1;
    transform: scale(1.1);
  }
  @keyframes blink {
    0%, 50% {
      opacity: 1;
      transform: scale(1.1);
    }
    25%, 75% {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }
  @keyframes scanning {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const AnimatedPassword = ({ length = 7 }) => {
  const [currentChars, setCurrentChars] = useState(Array(length).fill("*"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    const characters = [
      "*",
      "A",
      "B",
      "C",
      "1",
      "2",
      "3",
      "X",
      "Y",
      "Z",
      "9",
      "8",
      "7",
    ];
    let charIndex = 0;
    let isPaused = false;

    const interval = setInterval(() => {
      if (!isPaused && !isBlinking) {
        setCurrentChars((prev) => {
          const newChars = [...prev];
          newChars[activeIndex] = characters[charIndex % characters.length];
          return newChars;
        });
        charIndex++;
        if (charIndex >= characters.length) {
          isPaused = true;
          setTimeout(() => {
            isPaused = false;
            charIndex = 0;
            if (activeIndex < length - 1) {
              setActiveIndex((prev) => prev + 1);
            } else {
              setIsComplete(true);
              setIsBlinking(true);
              setBlinkCount(0);
              const blinkInterval = setInterval(() => {
                setBlinkCount((prev) => {
                  if (prev >= 5) {
                    clearInterval(blinkInterval);
                    setIsBlinking(false);
                    setIsComplete(false);
                    setCurrentChars(Array(length).fill("*"));
                    setActiveIndex(0);
                    return 0;
                  }
                  return prev + 1;
                });
              }, 800);
            }
          }, 1000);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeIndex, length, isComplete, isBlinking]);

  return (
    <span className="password-cracking">
      {currentChars.map((char, index) => (
        <span
          key={index}
          className={`char ${index === activeIndex ? "active" : ""} ${isComplete ? "complete" : ""} ${isBlinking ? "blinking" : ""}`}
          style={{
            "--char-index": index,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default function AppUniversal() {
  const { isDarkMode } = useTheme();
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
      const generatedPasswords = [...passwords];
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
        generatedPasswords.push(password);
      }
      setPasswords(generatedPasswords);
    } else if (currentQuantity > quantity) {
      setPasswords(passwords.slice(0, quantity));
    }
  }, [passwords, quantity, selectedCharacterSets, passwordLength, characterSets]);

  useEffect(() => {
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
      const newSnackbar = {
        id: new Date().getTime(),
        message: t("snackbar_copied", language),
      };
      setSnackbars((prevSnackbars) => [...prevSnackbars, newSnackbar]);
      setTimeout(() => {
        setSnackbars((prevSnackbars) =>
          prevSnackbars.filter((snackbar) => snackbar.id !== newSnackbar.id)
        );
      }, 500);
    }
  };

  const handleCopyAllClick = () => {
    const allPasswords = passwords.join("\n");
    navigator.clipboard.writeText(allPasswords);
    const newSnackbar = {
      id: new Date().getTime(),
      message: t("snackbar_all_copied", language),
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

  const { reward: confettiReward } = useReward(
    "centerReward",
    "confetti",
    {
      elementCount: 120,
      elementSize: 18,
      spread: 160,
      lifetime: 200,
      zIndex: 9999,
      position: "fixed",
      fps: 60,
    }
  );
  const rewardTypes = ["confetti", "balloons", "emoji"];
  const [currentRewardType, setCurrentRewardType] = useState(null);
  const rewardQueue = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const ANIMATION_DURATION = 250; // ms (lifetime + запас)
  const runReward = () => {
    const type = rewardTypes[Math.floor(Math.random() * rewardTypes.length)];
    if (isAnimating) {
      rewardQueue.current.push(type);
      return;
    }
    setCurrentRewardType(type);
    setIsAnimating(true);
    if (type === "confetti") confettiReward();
    setTimeout(() => {
      setIsAnimating(false);
      if (rewardQueue.current.length > 0) {
        runReward();
      }
    }, ANIMATION_DURATION);
  };

  const handleGeneratePassword = (index) => {
    if (index >= 0 && index < passwords.length) {
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
    }
  };

  const passwordInputs = passwords.map((password, index) => (
    <PasswordRow
      key={index}
      password={password}
      index={index}
      language={language}
      onGenerate={handleGeneratePassword}
      onCopy={handleCopyClick}
      refreash={refreash}
      runReward={runReward}
      isAnimating={isAnimating}
      isDarkMode={isDarkMode}
    />
  ));

  const firstPasswordInput = passwords.length > 0 ? passwordInputs[0] : null;
  const TimeToCrackResult = passwords.length > 0 ? zxcvbn(passwords[0]) : null;
  const CrackScore = TimeToCrackResult ? TimeToCrackResult.score : null;
  const strengthWord = getStrengthWord(CrackScore, language);
  const scoreColor = rankColor(CrackScore);
  const strengthColor = { color: scoreColor };
  const strengthWordScoreEn = TimeToCrackResult
    ? TimeToCrackResult.crack_times_display.offline_slow_hashing_1e4_per_second
    : null;
  const strengthWordScoreLocalized = translateTimeUnits(strengthWordScoreEn, language);
  const restPasswordInputs = passwords.length > 1 ? passwordInputs.slice(1) : [];

  const renderedSnackbars = snackbars.map((snackbar) => (
    <Snackbar
      key={snackbar.id}
      open={true}
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

  return (
    <div className={`container ${language} mx-auto w-screen lg:w-full px-3 ${isDarkMode ? "dark" : ""}`}>
      <div id="centerReward" style={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 9999 }} />
      <Helmet>
        <title>{seoData.find((data) => data.language === language)?.title}</title>
        <meta name="description" content={seoData.find((data) => data.language === language)?.description} />
        <link rel="alternate" href="https://generatepasswordto.me/en" hreflang="en" />
        <link rel="alternate" href="https://generatepasswordto.me/ua" hreflang="uk" />
        <link rel="alternate" href="https://generatepasswordto.me/es" hreflang="es" />
        <link rel="alternate" href="https://generatepasswordto.me/fr" hreflang="fr" />
      </Helmet>
      <div className="flex h-auto align-middle flex-col items-center justify-center mx-auto p-0 lg:p-3 font-sans">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        {renderedSnackbars}
        <main className="w-full">
          <div className={`flex flex-col justify-center items-center mb-4 w-full lg:w-[100%] rounded-72 pt-10 md:pt-32 ${isDarkMode ? "dark:bg-[#121212]" : "bg-[#E5F6FF]"} lg:bg-[url('./images/vector-bg.svg')] lg:bg-no-repeat lg:bg-center lg:bg-cover`}>
            <h1 className="mx-2 md:mb-2 text-[30px] lg:text-[50px] font-bold tracking-tight text-center text-gray-900">
              {t("main_title", language)}
            </h1>
            <p className="text-center text-[22px] text-[#2A4E63] mx-2 mb-4">
              {t("main_subtitle", language)}
            </p>
            <div className={`w-full lg:w-9/12 flex flex-col ${isDarkMode ? "bg-[#1c1c1c]" : "bg-white"} drop-shadow-lg  rounded-48 shadow p-[20px] md:p-[60px] relative`}>
              <div className="absolute hidden bg-white drop-shadow-lg  top-[-30px] left-[-140px] border-[#E5F6FF] border-2 border-solid rounded-[120px] py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex items-center gap-2">
                <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                  <img src={passwordImage} alt="password" width={20} height={20} />
                </div>
                <p className="pt-[10px] relative">
                  <AnimatedPassword length={7} />
                </p>
              </div>
              {/* bottom passaword lock */}
              <div className={`${isDarkMode ? "bg-[#888]" : "bg-white"} absolute hidden justify-start drop-shadow-lg  top-[150px] right-[-120px] border-[#E5F6FF] border-2 border-solid rounded-[120px]  py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex lg:items-center gap-2`}>
                <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3 ml-2 my-1">
                  <img src={passwordImage} alt="password" width={20} height={20} />
                </div>
                <p className="pt-[10px] relative">
                  <AnimatedPassword length={7} />
                </p>
              </div>
              {firstPasswordInput}
              <div className=" text-[#2A4E63] text-[16px] md:text-[18px] lg:mt-3 lg:flex" style={strengthColor}>
                {`${strengthWord} ${t("time_to_crack", language)} ${strengthWordScoreLocalized}.`}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-1 lg:mt-3">
                <div className="flex flex-col gap-3 items-start mt-8 lg:mt-6">
                  <label id="password-length-label" htmlFor="Password" className="text-[16px] md:text-[22px] text-[#2A4E63]">
                    {t("password_length", language)} {passwordLength}
                  </label>
                  <div className="flex items-center gap-4 w-full">
                    <RemoveCircleOutlineIcon onClick={() => setPasswordLength((prev) => Math.max(1, prev - 1))} style={{ cursor: "pointer" }} />
                    <Slider value={passwordLength} min={4} max={100} onChange={(e) => setPasswordLength(e.target.value)} aria-label="Password length slider" aria-describedby="password-length-label" valueLabelDisplay="auto" className="h-[15px]" />
                    <AddCircleOutlineIcon onClick={() => setPasswordLength((prev) => Math.min(100, prev + 1))} style={{ cursor: "pointer" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <label htmlFor="quantity" className="text-[16px] md:text-[22px] text-[#2A4E63]">
                    {t("quantity", language)}
                  </label>
                  <input type="number" id="quantity" name="quantity" min="1" max={maxquantity} value={quantity} onChange={handleQuantityChange} className={`${isDarkMode ? "border-none" : "" } border-2 border-[#E5F6FF] border-solid rounded-[18px] text-[#071016] text-[18px] md:text-[20px] py-3 md:py-5 px-3 outline-none w-full`} />
                </div>
              </div>
              <div className="flex gap-3 flex-wrap items-center mt-9 ">
                <label htmlFor="Character" className="text-[16px] md:text-[22px] text-[#2A4E63]">
                  {t('use_characters', language)}
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
                            sx={{ color: "#2A4E63", "&.Mui-checked": { color: "#2A4E63" } }}
                            className="h-[24px] text-sm md:text-[22px]"
                          />
                        }
                        className="text-[18px] md:text-[20px]"
                        label={<span className="text-[18px] md:text-[16px]">{characterSet}</span>}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {restPasswordInputs}
              {passwords.length >= 2 ? (
                <div className="flex gap-3 mt-2">
                  <Button className="bg-[#2A4E63] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer" onClick={handleCopyAllClick}>
                    <FileCopyIcon sx={{ marginRight: 1 }} />
                    {t("copy_all", language)}
                  </Button>
                  <Button className="bg-[#2A4E63] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer" onClick={handleDownloadAllClick}>
                    <CloudDownloadIcon sx={{ marginRight: 1 }} />
                    {t("download_all", language)}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </main>
        <div className="w-full mt-10">
          {mode === "production" && <AdBanner language={language} isDarkMode={isDarkMode} />}
        </div>
        <div className="lg:my-10 w-full">
          <SeoText language={language} />
        </div>
        <div id="howtouse" className="lg:my-10 w-full">
          <HowToUse language={language} />
        </div>
        <div id="aboutus" className="lg:my-10 w-full">
          <AboutUs language={language} />
        </div>
        <div className="mb-4 w-full mt-4">
          {mode === "production" && <AdBannerSecond language={language} isDarkMode={isDarkMode} />}
        </div>
        <div id="guide" className="lg:my-10 w-full">
          <SeoList language={language} />
        </div>
        <Footer language={language} />
        <PrivacyConsentPopup language={language} />
      </div>
    </div>
  );
} 