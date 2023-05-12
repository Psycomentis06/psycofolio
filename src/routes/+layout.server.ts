import { isLogged } from '$lib/services/server/auth.server'
export async function load({params, fetch, cookies}) {
    const sessionId = cookies.get('sessionId')
    let logged = false
    if (sessionId) {
        logged = isLogged(sessionId)
        if (!logged) {
            cookies.delete('sessionId', { path: '/' })
        }
    }
    const translationFilePath = '/translations/' + params.lang + '.json';
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