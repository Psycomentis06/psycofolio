import { APP_DATA_DIR } from '$env/static/private'
import { createHash } from 'node:crypto'
import { unlink, existsSync, writeFileSync, mkdirSync, readFileSync } from 'fs'

export interface IUpload {
    id: string;
    name: string;
    oldName: string;
    size: number;
    type: string;
    path: string;
    lastModifiedDate: number;
    md5: string;
    sha256: string;
    visibility: UploadVisibility;
}

export enum UploadVisibility {
    PRIVATE = 'private',
    PUBLIC = 'public'
}


const UPLOADS_DIR = APP_DATA_DIR + '/uploads';
const UPLOADS_DATA_FILE = UPLOADS_DIR + '/uploads.json';

export async function isPng(file: File) {
    const buffer = await file.arrayBuffer()
    const header = new Uint8Array(buffer).subarray(0, 4);
    const pngHeader = new Uint8Array([137, 80, 78, 71]);
    return pngHeader.every((value, index) => value === header[index]);
}

export async function isJpg(file: File) {
    const buffer = await file.arrayBuffer()
    const header = new Uint8Array(buffer).subarray(0, 4);
    const jpgHeader = new Uint8Array([255, 216, 255]);
    return jpgHeader.every((value, index) => value === header[index]);
}

export async function isValid(file: File) {
    return await isPng(file) || await isJpg(file);
}

export async function imageType(file: File) {
    if (await isPng(file)) {
        return 'image/png';
    } else if (await isJpg(file)) {
        return 'image/jpg';
    } else {
        return null;
    }
}

export async function imageExtension(file: File) {
    if (await isPng(file)) {
        return 'png';
    } else if (await isJpg(file)) {
        return 'jpg';
    } else {
        return null;
    }
}

export function init() {
if (!existsSync(UPLOADS_DIR)) {
    mkdirSync(UPLOADS_DIR);
}

if (!existsSync(UPLOADS_DATA_FILE)) {
    writeFileSync(UPLOADS_DATA_FILE, JSON.stringify([]));
}

}

export async function uploadFile(file: File) {
    init()
    const id = crypto.randomUUID();
    const fileContent = await file.arrayBuffer();
    const fileContentF = new Uint8Array(fileContent);
    const fileExtension = file.name.split('.').pop();
    const fileName = id + '.' + fileExtension || await imageExtension(file) || 'bin';
    const path = UPLOADS_DIR + '/' + fileName;
    const f: IUpload = {
        id,
        name: fileName,
        oldName: file.name,
        size: file.size,
        type: await imageType(file) || file.type,
        path,
        lastModifiedDate : Date.now(),
        md5: createHash('md5').update(fileContentF).digest('hex'),
        sha256: createHash('sha256').update(fileContentF).digest('hex'),
        visibility: UploadVisibility.PRIVATE
    }

    writeFileSync(path, fileContentF);
    const uploads = JSON.parse(readFileSync(UPLOADS_DATA_FILE, {encoding: 'utf-8'})) as IUpload[];
    uploads.push(f);
    writeFileSync(UPLOADS_DATA_FILE, JSON.stringify(uploads));
    return f;
}

export function getUploads() {
    init()
    return JSON.parse(readFileSync(UPLOADS_DATA_FILE, {encoding: 'utf-8'})) as IUpload[];
}

export function getUploadsWithUri(host: string): IUpload[] { 
    const u = getUploads()
    u.forEach((u) => {
        u.path = host + '/api/profile/uploads/' + u.id;
    });
    return u;
}

export function deleteUpload(id: string) {
    init()
    const uploads = getUploads();
    const index = uploads.findIndex((u) => u.id === id);
    if (index === -1) {
        return false;
    }
    const upload = uploads[index];
    uploads.splice(index, 1);
    unlink(upload.path, () => {}); 
    writeFileSync(UPLOADS_DATA_FILE, JSON.stringify(uploads));
    return true;
}

export function updateVisibility(id:string, visibility: UploadVisibility) {
    const uploads = getUploads()
    const index = uploads.findIndex((u) => u.id === id);
    if (index >= 0) {
        uploads[index].visibility = visibility
        writeFileSync(UPLOADS_DATA_FILE, JSON.stringify(uploads));
        return true
    }
    return false
}