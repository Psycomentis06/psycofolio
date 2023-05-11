import { json } from '@sveltejs/kit'
import { login } from '$lib/services/server/auth.server'

export function GET({}) {
    return  json({ message: 'Hello world' })
}

export async function POST({request, cookies}) {
    try {
    const { username, password } = await request.json()
    const sessionId = login(username, password) 
    if (!sessionId) {
        return json({ message: 'Login Error', type: 'InvalidCredentials'  })
    }
    cookies.set('sessionId', sessionId, { path: '/' })
    return json({ sessionId })
    } catch (e) {
        return json({ message: 'Login Error', type: 'Exception' })
    }
}