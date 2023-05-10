
export async function load({route, params}) {
    
    console.log(route.id);
    
    if (/\/\[lang]\/admin/.test(route.id || '')) {
        console.log("admin layout");
    }
    return {
        lang: params?.lang,
    };
}