import { APP_DATA_DIR } from '$env/static/private'
import { existsSync, mkdirSync, writeFile, readFileSync } from 'fs'
import type { IProfile } from '$lib/models/profile'
import { language } from '../../../app-config.json'

const profileDir = APP_DATA_DIR + '/profile'

const defaultProfile: IProfile = {
    fullName: 'Full Name',
    email: 'email@domain.com',
    phone: '+00 000 000 000',
    address: 'Address',
    city: 'City',
    birthDate: new Date(),
    socialMedias: []
}

export function init(filePath: string | null = null) {
    if (!existsSync(profileDir)) {
        mkdirSync(profileDir)
    }

    if (filePath !== null) {
        // if file not found we crate it with default data
        if (!existsSync(filePath)) {
            writeFile(filePath, JSON.stringify(defaultProfile), {encoding: 'utf-8'}, (err) => {
                if (err) {
                    console.error('From Profile Server INIT: ', err)
                }
            })
    }
}
}

export function setProfile(data: IProfile, lang: string | null = null) {
    if (lang === null) {
        lang = language.default
    }
    const profileFile = `${profileDir}/profile.${lang}.json`
    init(profileFile)
    writeFile(profileFile, JSON.stringify(data), {encoding: 'utf-8'}, (err) => {
        if (err) {
            console.error('From Profile Server: ', err)
        }
    })
}

export function getProfile(lang: string | null = null) {
    if (lang === null) {
        lang = language.default
    }
    const profileFile = `${profileDir}/profile.${lang}.json`
    init(profileFile)
    const data = readFileSync(profileFile, {encoding: 'utf-8'})
    return JSON.parse(data)
}