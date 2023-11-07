import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const PrivacyConsentPopup = ({ language }) => {
  const [open, setOpen] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setConsentGiven(true);
    localStorage.setItem('consentGiven', true);
  };

  useEffect(() => {
    const consent = localStorage.getItem('consentGiven');
    if (!consent && !consentGiven && !open) {
      setOpen(true);
    }
  }, [consentGiven, open]);

  const privacyPolicy = {
    en: 'https://example.com/privacy-policy/en',
    ua: 'https://example.com/privacy-policy/ua',
  };

  const contentText = {
    en: 'We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By clicking “Accept”, you consent to the use of ALL the cookies. Read our Privacy Policy for more information.',
    ua: 'Ми використовуємо файли cookie та інші технології відстеження, щоб покращити ваш досвід перегляду нашого веб-сайту, показувати персоналізований контент та цілевану рекламу, аналізувати трафік нашого веб-сайту та зрозуміти, звідки наші відвідувачі приходять. Натиснувши “Прийняти”, ви даєте згоду на використання ВСІХ файлів cookie. Дізнайтеся більше в нашій Політиці конфіденційності.',
  };

  const buttonText = {
    en: 'Accept',
    ua: 'Прийняти',
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{language === 'en' ? 'Privacy Policy':'Політика конфіденційності'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {contentText[language]}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained" style={{ backgroundColor: "rgb(31 41 55)" , color: "#fff" }}>
          {buttonText[language]}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyConsentPopup;