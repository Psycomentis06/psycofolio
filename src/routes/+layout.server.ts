import { isLogged } from '$lib/services/server/auth.server'
import { isAvailableLanguage } from '$lib/services/server/language.server'
import { language } from '../app-config.json'

export async function load({params, fetch, cookies}) {
    const sessionId = cookies.get('sessionId')
    let logged = false
    if (sessionId) {
        logged = isLogged(sessionId)
        if (!logged) {
            cookies.delete('sessionId', { path: '/' })
        }
    }

    let lang = params.lang || language.default;
    if (!isAvailableLanguage(lang)) {
        lang = language.default
    }

    const translationFilePath = '/translations/' + lang + '.json';
    let translation = {};
    try{
    const translationFetch = await fetch(translationFilePath)
    translation = await translationFetch.json()
    } catch (e) {
        console.log('Layout Server: ', e);
                
    }

        return {
            translation,
            logged
    }
} 