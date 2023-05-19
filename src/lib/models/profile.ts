import type { ISocialMedia } from "./socialmedia";

export interface IProfile {
    fullName?: string;
    email?: string;
    phone?: string;
    birthDate?: Date;
    address?: string;
    city?: string;
    socialMedias?: ISocialMedia[];
}

export class Profile {

}

export function createProfile(data: IProfile): Profile {
    return new Profile();
}