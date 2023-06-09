import type { IGenericResponse } from '$lib/interfaces/IGenericResponse.js';
import { getUploadsWithUri, uploadFile } from '$lib/services/server/upload.server.js';
import { json } from '@sveltejs/kit';

/**
 * @api {get} /api/profile/uploads/server Get profile uploads
 */
export function GET({url}) {
    const u = getUploadsWithUri(url.origin)
    const response: IGenericResponse = {
        type: 'success',
        message: 'Uploads',
        data: u
    }
    return json(response);
}

/**
 * @api {post} /api/profile/uploads/server Post profile uploads
*/
export async function POST({request}) {
    const response: IGenericResponse = {
        type: 'error',
        message: 'Invalid image'
    }
    const data = await request.formData()
    const img = data.get('image');
    if (!(img instanceof File)) {
        return json(response);
    }
    const u = await uploadFile(img)

    if (u) {
        response.type = 'success';
        response.message = 'Image uploaded';
        response.data = u;
        return json(response);
    }

    return json(response);
}
