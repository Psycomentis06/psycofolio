import type { SocialMediaNames } from "$lib/services/social_media";

export interface ISocialMedia {
    code: SocialMediaNames;
    username: string;
}