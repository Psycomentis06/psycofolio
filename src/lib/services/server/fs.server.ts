import { mkdirSync, existsSync, writeFile, readFileSync, unlink } from 'fs'
import { randomUUID } from 'crypto'
import { APP_DATA_DIR } from '$env/static/private'

export function initialize() {
    existsSync(APP_DATA_DIR) || mkdirSync(APP_DATA_DIR)
}

export function createLoginSessionFile(): string | null {
    initialize()
    let date = new Date()
    date.setMinutes(date.getMinutes() + 30)

    const data = {
        expiration: date.getTime()
    }
    const sessionId = randomUUID()
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    writeFile(sessionFile, JSON.stringify(data), (err) => {
        if (err) {
            console.error(err)
            return null
        }
    })
    return sessionId
}

export function deleteLoginSessionFile(sessionId: string) {
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    return unlink(sessionFile, (err) => {

        if (err) {
            console.error(err)
        }
    })
}

export function loginSessionFileExists(sessionId: string) {
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    return existsSync(sessionFile)
}

export function getLoginSessionFile(sessionId: string) {
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    
    return readFileSync(sessionFile, 'utf-8')
    
}

export function updateLoginSessionFile(sessionId: string, data: any) {
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    return writeFile(sessionFile, JSON.stringify(data), (err) => {
        if (err) {
            console.error('Update file: ', err)
        }
    })
}