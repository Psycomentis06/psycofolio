export async function load({route, params, data}) {
    
    if (/\/\[lang]\/admin/.test(route.id || '')) {
        if (!data.logged) {
            return {
                lang: params?.lang,
                translation: data.translation,
                logged: data.logged,
                redirect: { 
                    to: '/[lang]',
                    message: 'You must be logged in to access this page',
                }
            }
        }
    }
    return {
        lang: params?.lang,
        translation: data.translation,
        logged: data.logged
    };
}