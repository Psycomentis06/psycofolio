import { getAvailableLanguages } from "../language"

export function isAvailableLanguage (lang: string) {
    let valid = false
    getAvailableLanguages().map((l) => {
        if (l.code === lang) {
            valid = true;
        }
        }
    )
    return valid;
}