
export async function load({route, params, data}) {
    
    if (/\/\[lang]\/admin/.test(route.id || '')) {
        console.log("admin layout");
    }
    return {
        lang: params?.lang,
        translation: data.translation
    };
}