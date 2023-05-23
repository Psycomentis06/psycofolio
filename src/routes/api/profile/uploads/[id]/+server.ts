import type { IGenericResponse } from '$lib/interfaces/IGenericResponse.js';
import { deleteUpload, getUploads, getUploadsWithUri, updateVisibility, type IUpload } from '$lib/services/server/upload.server.js';
import { json } from '@sveltejs/kit';
import { readFileSync } from 'fs'

// TODO: Visibility and authorized user has additional access to the file 
export function GET({params, setHeaders, url}) {
    const response: IGenericResponse = {
        type: 'error',
        message: 'File Not Found'
    }
    const imgId = params.id;
    const meta = url.searchParams.get('meta');
    const uploads = getUploads()
    const u = uploads.find((u) => u.id === imgId);
    if (u && !meta) {
        try {
            const file = readFileSync(u.path)
            setHeaders({
                'Content-Type': u.type
            })
            return new Response(file, {status: 200})
        } catch (error) {
            if (error instanceof Error) {
                response.message = error.message
            }
        }
    }
    response.type = 'success'
    response.message = 'File Found'
    response.data = u
    return json(response);
}

export async function PUT({params, request}) {
    const response: IGenericResponse = {
        type: 'error',
        message: 'File Not Found'
    }
    const imgId = params.id;
    const { visibility } = await request.json() as IUpload

    const res = updateVisibility(imgId, visibility)
    if (res) {
        response.type = 'success'
        response.message = 'File visibility updated to ' + visibility
    }
    return json(response)
}

export function DELETE({params}) {
    const response: IGenericResponse = {
        type: 'error',
        message: 'File Not Found'
    }
    const imgId = params.id;
    const res = deleteUpload(imgId)
    if (res) {
        response.type = 'success'
        response.message = 'File Deleted'
    }
    return json(response)
}