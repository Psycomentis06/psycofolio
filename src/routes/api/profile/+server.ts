import { json } from "@sveltejs/kit";
import { isAvailableLanguage } from '$lib/services/server/language.server'
import { getProfile, setProfile } from '$lib/services/server/profile.server'

export function GET({url}) {
    const lang = url.searchParams.get('lang');
    if (lang === null) {
        return json({ error: 'lang is missing' })
    }
    if (!isAvailableLanguage(lang)) {
        return json({ error: 'lang value is not valid' })
    }
    const profile = getProfile(lang) 
    return json({ profile })
}

export async function POST({url, request}) {
    const lang = url.searchParams.get('lang');
    if (lang === null) {
        return json({ error: 'lang is missing' })
    }
    if (!isAvailableLanguage(lang)) {
        return json({ error: 'lang value is not valid' })
    }

    const { data } = await request.json()
    if (data === undefined) {
        return json({ error: 'data is missing' })
    }
    const profile = getProfile(lang)
    Object.entries(data).forEach(([key, value]) => {
        profile[key] = value
    })
    setProfile(profile, lang)

    return json({ message: 'success'})
}