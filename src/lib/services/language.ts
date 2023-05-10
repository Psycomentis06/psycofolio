import { language } from "../../app-config.json";

export function getAvailableLanguages() {
  return language.available;
}

/**
 * Set language code to local storage, this function does not change the language
 * To really change the language we need to reload the page and change the "lang" param in the url
 * @param lang language code
 * @param callback callback function to be called after setting the language
 */
export function setLanguage(lang: string, callback?: () => void) {
  localStorage.setItem("lang", lang);
  callback && callback();
}

export function getActiveLanguage() {
  const lang = localStorage.getItem("lang");
  if (lang) {
    return lang;
  }
  return language.default;
}

export function isAvailableLanguage(lang: string) {
    let valid = false
    getAvailableLanguages().map((l) => {
      if (l.code === lang) {
        setLanguage(lang);
        valid = true;
    }
    });
    return valid;
}
