import { mkdirSync, existsSync, writeFile, readFile, unlink } from 'fs'
import { randomUUID } from 'crypto'
import { APP_DATA_DIR } from '$env/static/private'

export function initialize() {
    existsSync(APP_DATA_DIR) || mkdirSync(APP_DATA_DIR)
}

export function createLoginSessionFile() {
    const data = {
    }
    const sessionId = randomUUID()
    const sessionFile = `${APP_DATA_DIR}/${sessionId}`
    writeFile(sessionFile, JSON.stringify(data), (err) => {
        if (err) {
            console.error(err)
        }
    })

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