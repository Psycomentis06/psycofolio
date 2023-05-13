export interface IProfile {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export class Profile {

}

export function createProfile(data: IProfile): Profile {
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone
    };
}