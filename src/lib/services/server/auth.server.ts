import { APP_AUTH_USERNAME, APP_AUTH_PASSWORD } from '$env/static/private'
import { createLoginSessionFile, deleteLoginSessionFile, loginSessionFileExists } from './fs'

export function login(username: string, password: string) {
    const loginState = username === APP_AUTH_USERNAME && password === APP_AUTH_PASSWORD
    if (loginState) {
        createLoginSessionFile()
        return true
    }
    return false
}

export function logout(sessionId: string) {
    deleteLoginSessionFile(sessionId)
}

export function isLogged(sessionId: string) {
    return loginSessionFileExists(sessionId)
}