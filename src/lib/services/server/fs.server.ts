import { mkdirSync, existsSync, writeFile, readFile, unlink } from 'fs'
import { randomUUID } from 'crypto'
import { APP_DATA_DIR } from '$env/static/private'

export function initialize() {
    existsSync(APP_DATA_DIR) || mkdirSync(APP_DATA_DIR)
}

export function createLoginSessionFile(): string | null {
    initialize()
    const data = {
        expiration: Date.now() + 1000 * 60 * 60 * 24 * 7
    }
    const sessionId = randomUUID()
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    console.log(process.cwd());
    
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
    return readFile(sessionFile, (err, data) => {
        if (err) {
            console.error(err)
        }
        return data
    })
}