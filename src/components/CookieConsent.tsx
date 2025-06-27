import React, { useEffect, useRef } from 'react';
import { run as cookieConsentRun, setLanguage as cookieConsentSetLanguage } from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConsentConfig';

const supportedLangs = ['en', 'ua', 'es', 'fr'];

const getEffectiveLanguage = (propLang) => {
  if (propLang && supportedLangs.includes(propLang)) return propLang;
  const browserLang = navigator.language.slice(0, 2);
  if (supportedLangs.includes(browserLang)) return browserLang;
  return 'en';
};

const CookieConsentComponent = ({ language }) => {
  const prevLanguageRef = useRef(null);
  const isInitializedRef = useRef(false);

  //useEffect(() => {
    // console.log('🔄 CookieConsent: language змінився на:', language);
    // console.log('🔄 CookieConsent: попередня мова:', prevLanguageRef.current);
  //}, [language]);

  useEffect(() => {
    const effectiveLang = getEffectiveLanguage(language);
    if (!isInitializedRef.current) {
      // console.log('Ініціалізую cookie consent банер з мовою:', effectiveLang);
      cookieConsentRun({
        ...pluginConfig,
        language: {
          ...pluginConfig.language,
          default: effectiveLang,
        },
      });
      isInitializedRef.current = true;
      prevLanguageRef.current = language;
      return;
    }
    const prevLanguage = prevLanguageRef.current;
    const isBannerVisible = !!document.querySelector('#cc-main');
    if (language && prevLanguage && prevLanguage !== language && isBannerVisible) {
      // console.log(`Змінюю мову з ${prevLanguage} на ${language} через cookieConsentSetLanguage`);
      try {
        cookieConsentSetLanguage(language);
        // console.log('✅ Мова банера оновлена через setLanguage');
      } catch (error) {
        // console.error('❌ Помилка при оновленні мови через setLanguage:', error);
      }
    } else {
      // console.log('Код НЕ зайшов у умову зміни мови');
    }
    prevLanguageRef.current = language;
  }, [language]);

  return null;
};

export default CookieConsentComponent;
