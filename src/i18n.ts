import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// LANGUAGES
const translationFiles = import.meta.glob("~/locales/*/translation.json");

const resources: Record<string, Record<string, string>> = {};

for (const path in translationFiles) {
  const match = path.match(/\/locales\/(.+)\/translation\.json/);
  if (match) {
    const langCode = match[1];

    const translation: any = await translationFiles[path]();
    resources[langCode] = {
      translation: translation.default,
    };
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(new LanguageDetector(null, { lookupLocalStorage: "customKey" }))
  .init({
    resources,
    fallbackLng: ["tr", "en"],
    interpolation: {
      escapeValue: false,
    },
    // backend: {
    //   overrideMimeType: "application/json", // tried with this and without
    //   loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },
  });

export default i18n;
