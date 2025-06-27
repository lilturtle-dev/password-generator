import { useEffect, useRef } from 'react';
import { run as cookieConsentRun, setLanguage as cookieConsentSetLanguage } from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConsentConfig';

const supportedLangs = ['en', 'ua', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja'];

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
      // Use setTimeout to defer initialization and avoid Strict Mode warnings
      const timer = setTimeout(() => {
        try {
          cookieConsentRun({
            ...pluginConfig,
            language: {
              ...pluginConfig.language,
              default: effectiveLang,
            },
          });
          isInitializedRef.current = true;
          prevLanguageRef.current = language;
        } catch (error) {
          console.error('Failed to initialize cookie consent:', error);
        }
      }, 0);
      
      return () => clearTimeout(timer);
    }
    
    const prevLanguage = prevLanguageRef.current;
    const isBannerVisible = !!document.querySelector('#cc-main');
    
    if (language && prevLanguage && prevLanguage !== language && isBannerVisible) {
      try {
        cookieConsentSetLanguage(language);
      } catch (error) {
        console.error('Failed to update cookie consent language:', error);
      }
    }
    
    prevLanguageRef.current = language;
  }, [language]);

  return null;
};

export default CookieConsentComponent;
