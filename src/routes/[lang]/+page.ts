export async function load({fetch, params}) {
    const fetchRes = await fetch('/api/profile?lang=' + params.lang)
    const profile = await fetchRes.json()
    
    return {
        profile: profile.profile
    }
}