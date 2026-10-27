import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { global: en },
      fr: { global: fr },
    },
    supportedLngs: ["fr", "en"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
      convertDetectedLanguage: (lng) => lng.split("-")[0] ?? lng,
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
