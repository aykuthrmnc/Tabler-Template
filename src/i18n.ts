import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationTr from "~/locales/tr/translation.json";
import translationEn from "~/locales/en/translation.json";

const resources = {
  tr: {
    translation: translationTr,
  },
  en: {
    translation: translationEn,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: ["tr", "en"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
