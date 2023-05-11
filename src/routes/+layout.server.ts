export async function load({params, fetch}) {
    const translationFilePath = '/translations/' + params.lang + '.json';
    let translation = {};
    try{
    const translationFetch = await fetch(translationFilePath)
    translation = await translationFetch.json()
    } catch (e) {
        console.log(e);
                
    }

        return {
        translation: translation,
    }
} 