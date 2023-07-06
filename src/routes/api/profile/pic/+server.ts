import type { IGenericResponse } from '$lib/interfaces/IGenericResponse.js';
import type { IProfile } from '$lib/models/profile.js';
import { isAvailableLanguage } from '$lib/services/language.js';
import { getProfile, setProfile } from '$lib/services/server/profile.server.js';
import type { IUpload } from '$lib/services/server/upload.server.js';
import { json } from '@sveltejs/kit';

// Update profile pic
export async function PUT({url, request}) {
    const responseMsg: IGenericResponse = {
        message: 'Invalid',
        type: 'error'
    }
    const lang = url.searchParams.get('lang');
    if (lang === null) {
        responseMsg.message = 'Lang missing'
        return json(responseMsg)
    }
    if (!isAvailableLanguage(lang)) {
        responseMsg.message = 'Invalid lang value'
        return json(responseMsg)
    }
    const { profilePic }= await request.json()
    if (profilePic === undefined) {
        responseMsg.message = 'ProfilePic is missing'
        return json(responseMsg)
    }
    const profile:IProfile = getProfile(lang) 
    profile.profilePic = profilePic
    setProfile(profile, lang)
    responseMsg.data = profile
    responseMsg.type = 'success'
    responseMsg.message = 'Updated successfully'
    return json(responseMsg)
}