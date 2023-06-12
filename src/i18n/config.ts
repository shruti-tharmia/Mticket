import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languageConstants } from '../constants/language';
i18n.use(initReactI18next).init({
  fallbackLng: languageConstants.english,
  lng: languageConstants.german,
  resources: {
    en: {
      translations: require('./locales/languages/en.json'),
    },
    hn: {
      translations: require('./locales/languages/hn.json'),
    },
    tm: {
      translations: require('./locales/languages/tm.json'),
    },
    ger: {
      translations: require('./locales/languages/ger.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});
i18n.languages = [
  languageConstants.english,
  languageConstants.hindi,
  languageConstants.german,
  languageConstants.tamil,
];
export default i18n;
