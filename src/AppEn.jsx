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
import seoData from "./SeoData";
import { rankColor } from "./functions/RankColor";
import { getStrengthWord } from "./functions/GetStrengthWord";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useReward } from "react-rewards";
import { useTheme } from './App';

// CSS стилі для анімації зірочок
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

// Компонент для анімованого пароля
const AnimatedPassword = ({ length = 7 }) => {
  const [currentChars, setCurrentChars] = useState(Array(length).fill('*'));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  
  useEffect(() => {
    const characters = ['*', 'A', 'B', 'C', '1', '2', '3', 'X', 'Y', 'Z', '9', '8', '7'];
    let charIndex = 0;
    let isPaused = false;
    
    const interval = setInterval(() => {
      if (!isPaused && !isBlinking) {
        // Прокручуємо символи для активної позиції
        setCurrentChars(prev => {
          const newChars = [...prev];
          newChars[activeIndex] = characters[charIndex % characters.length];
          return newChars;
        });
        
        charIndex++;
        
        // Якщо прокрутили всі символи для поточної позиції
        if (charIndex >= characters.length) {
          isPaused = true;
          setTimeout(() => {
            isPaused = false;
            charIndex = 0;
            
            // Переходимо до наступної позиції
            if (activeIndex < length - 1) {
              setActiveIndex(prev => prev + 1);
            } else {
              // Всі символи підібрані - починаємо миготіння
              setIsComplete(true);
              setIsBlinking(true);
              setBlinkCount(0);
              
              // Миготіння 3 рази
              const blinkInterval = setInterval(() => {
                setBlinkCount(prev => {
                  if (prev >= 5) { // 3 повних циклу (0-1-2-3-4-5 = 3 рази)
                    clearInterval(blinkInterval);
                    setIsBlinking(false);
                    setIsComplete(false);
                    // Скидаємо все для нового циклу
                    setCurrentChars(Array(length).fill('*'));
                    setActiveIndex(0);
                    return 0;
                  }
                  return prev + 1;
                });
              }, 800); // Повільніше миготіння - 800ms
            }
          }, 1000); // Пауза 1 секунда між позиціями
        }
      }
    }, 1000); // Збільшено з 200ms до 1000ms (в 5 разів повільніше)
    
    return () => clearInterval(interval);
  }, [activeIndex, length, isComplete, isBlinking]);
  
  return (
    <span className="password-cracking">
      {currentChars.map((char, index) => (
        <span 
          key={index} 
          className={`char ${index === activeIndex ? 'active' : ''} ${isComplete ? 'complete' : ''} ${isBlinking ? 'blinking' : ''}`}
          style={{ 
            '--char-index': index
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

function PasswordRow({ password, index, language, onGenerate, onCopy, refreash, runReward, isAnimating }) {
  const disabledStyle = isAnimating ? { pointerEvents: 'none', opacity: 0.5, cursor: 'wait' } : {};
  return (
    <div
      className="flex relative items-center flex-row lg:flex-row gap-4 h-auto w-[100%] my-5 lg:my-1 flex-wrap lg:flex-nowrap"
      key={index}
    >
      <div className="py-1 lg:px-4 w-[100%] lg:w-[80%] flex items-center h-16 border-2 border-[#E5F6FF] border-solid rounded-[120px] text-[#071016] text-[12px] md:text-[20px]">
        <input
          type="text"
          value={password || ""}
          className="rounded-[40px] ml-[16px] border-none outline-none h-full w-[80%] lg:w-[80%] md:py-5 flex-grow-1 text-base lg:text-lg"
          readOnly
        />
        <div className="flex items-center lg:justify-end justify-center flex-nowrap w-full lg:max-w-[300px] max-w-[150px] h-full bg-[#E5F6FF] lg:bg-transparent rounded-[40px]">
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold hidden lg:flex text-[18px] lg:text-[20px] rounded-[60px] px-[16px] py-[12px] w-full my-2 lg:w-auto lg:px-6 lg:py-2 mx-2 whitespace-nowrap justify-center"
            onClick={() => { onGenerate(index); runReward(); }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {language === "en" ? "Generate Password" : "Генерувати"}
          </button>
          <button
            className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[16px] md:text-[18px] flex lg:hidden lg:text-[24px] rounded-[60px] px-[8px] md:px-[16px] py-[10px] md:py-[12px] lg:my-0 mx-2 whitespace-nowrap justify-center py-0 items-center px-2 h-full"
            onClick={() => { onGenerate(index); runReward(); }}
            disabled={isAnimating}
            style={disabledStyle}
          >
            {language === "en" ? "Generate" : "Генерувати"}
          </button>
          <img
            onClick={() => { onGenerate(index); runReward(); }}
            src={refreash}
            alt="refresh"
            className="flex mr-2 h-[15px] md:h-[20px]"
            style={disabledStyle}
          />
        </div>
      </div>
      <button
        disabled={password?.length < 1}
        className="bg-[#2A4E63] w-[100%] -bottom-12 lg:w-[20%] text-white font-semibold text-[16px] md:text-[20px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer"
        style={password?.length < 1 ? { cursor: "not-allowed" } : {}}
        onClick={() => onCopy(index)}
      >
        {language === "en" ? "Copy" : "Копіювати"}
      </button>
    </div>
  );
}

export default function App() {
  const { isDarkMode } = useTheme();
  const handleCopyAllClick = () => {
    const allPasswords = passwords.join("\n");
    navigator.clipboard.writeText(allPasswords);
    setSnackbars((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: language === "en" ? "All passwords copied!" : "Всі паролі скопійовані!",
        severity: "success",
      },
    ]);
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
  const [language, setLanguage] = useState("en");
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

  // --- Анімація по центру сторінки ---
  const rewardTypes = ['confetti'];
  const [currentRewardType, setCurrentRewardType] = useState(null);
  const rewardQueue = useRef([]);
  const { reward: confettiReward, isAnimating: isConfetti } = useReward('centerReward', 'confetti', {
    elementCount: 120,
    elementSize: 18,
    spread: 160,
    lifetime: 200,
    zIndex: 9999,
    position: 'fixed',
    fps: 60
  });
  // const { reward: emojiReward, isAnimating: isEmoji } = useReward('centerReward', 'emoji', {
  //   elementCount: 60,
  //   elementSize: 40,
  //   spread: 160,
  //   lifetime: 200,
  //   zIndex: 9999,
  //   position: 'fixed',
  //   emoji: ['🤓', '😊', '🥳'],
  //   fps: 60
  // });
  const isAnimating = isConfetti;
  const runReward = () => {
    const type = rewardTypes[Math.floor(Math.random() * rewardTypes.length)];
    if (isAnimating) {
      rewardQueue.current.push(type);
      return;
    }
    setCurrentRewardType(type);
    if (type === 'confetti') confettiReward();
  };
  useEffect(() => {
    if (!isAnimating && rewardQueue.current.length > 0) {
      const nextType = rewardQueue.current.shift();
      setCurrentRewardType(nextType);
      if (nextType === 'confetti') confettiReward();
    }
  }, [isAnimating]);

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
    />
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

  // Create an array for the rest of the passwords (excluding the first one)
  const restPasswordInputs =
    passwords.length > 1 ? passwordInputs.slice(1) : [];

  // Додаємо CSS стилі для анімації зірочок
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = passwordCrackingStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className={`container ${language} mx-auto w-screen lg:w-full px-3 ${isDarkMode ? 'dark' : ''}`}>
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
        <meta name="keywords" content="password generator, secure password, strong password, online password generator, free password generator, password security" />
        <meta name="author" content="Generate Password To Me" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seoData.find((data) => data.language === language)?.title} />
        <meta property="og:description" content={seoData.find((data) => data.language === language)?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Generate Password To Me",
            "description": "Free online password generator tool for creating strong and secure passwords",
            "url": window.location.href,
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Generate Password To Me"
            }
          })}
        </script>
      </Helmet>
      <div id="centerReward" style={{position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 9999}} />
      <div className={`flex h-auto align-middle flex-col items-center justify-center mx-auto p-0 lg:p-3 font-sans ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        {renderedSnackbars}
        <main className="w-full">
          <div
            className={`bg-[url('./images/vector-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center mb-4 w-full lg:w-[100%] rounded-72 pt-10 md:pt-32 ${isDarkMode ? 'bg-gray-800' : 'bg-[#E5F6FF]'}`}
          >
            <h1 className="mx-1 md:mb-2 text-[30px] lg:text-[50px] font-bold tracking-tight text-center text-gray-900">
              {language === "en"
                ? "Need a Unique, Secure"
                : "Потрібен унікальний, безпечний"}{" "}
              <br />
              {language === "en" ? "Password?" : "Пароль?"}
            </h1>
            <p className="text-center text-[22px] text-[#2A4E63] mx-2 mb-4">
              {"With Generate Password to me"}
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
                <p className="pt-[10px] relative">
                  <AnimatedPassword length={7} />
                </p>
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
                <p className="pt-[10px] relative">
                  <AnimatedPassword length={7} />
                </p>
              </div>
              {firstPasswordInput}
              <div
                className=" text-[#2A4E63] text-[16px] md:text-[18px] lg:mt-3 lg:flex"
                style={strengthColor}
              >
                {`${strengthWord} Could take ${strengthWordScoreEn} to crack.`}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-1 lg:mt-3">
                <div className="flex flex-col gap-3 items-start mt-8 lg:mt-6">
                  <label
                    id="password-length-label"
                    htmlFor="Password"
                    className="text-[16px] md:text-[22px] text-[#2A4E63]"
                  >
                    {language === "en" ? "Password Length:" : "Довжина пароля:"} {passwordLength}
                  </label>
                  <div className="flex items-center gap-4 w-full">
                    <RemoveCircleOutlineIcon
                      onClick={() =>
                        setPasswordLength((prev) => Math.max(4, prev - 1))
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <Slider
                      value={passwordLength}
                      min={4}
                      max={100}
                      onChange={(e) => setPasswordLength(e.target.value)}
                      aria-label="Password length slider"
                      aria-describedby="password-length-label"
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
                    {language === "en" ? "Quantity" : "Кількість"}
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
                  {language === "en" ? "Use characters:" : "Використати символи:"}
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
        </main>
        <section className="w-full mt-10">
          {mode === "production" && <AdBanner language="en" />}
        </section>
        <section className="lg:my-10 w-full">
          <SeoText language="en" />
        </section>
        <section id="howtouse" className="lg:my-10 w-full">
          <HowToUse language="en" />
        </section>
        <section id="aboutus" className="lg:my-10 w-full">
          <AboutUs language="en" />
        </section>
        <section className="mb-4 w-full">
          {mode === "production" && <AdBannerSecond language="en" />}
        </section>
        <section id="guide" className="lg:my-10 w-full">
          <SeoList language="en" />
        </section>
        <Footer language="en" />
        <PrivacyConsentPopup language="en" />
      </div>
    </div>
  );
}
