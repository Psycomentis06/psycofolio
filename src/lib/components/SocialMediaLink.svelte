<script lang="ts">
    import { getSocialMedia, type SocialMediaNames } from "$lib/services/social_media";
    export let socialMediaName: SocialMediaNames
    export let username: string;

    const socialMedia = getSocialMedia(socialMediaName);

    if (!socialMedia) {
        throw new Error(`Social media ${socialMediaName} not found`);
    }

    function getUrl() {
        return socialMedia?.url.replace('${username}', username);
    }

    let hoverColor = 'background-color: ' + socialMedia.color;
</script>

<a href="{getUrl()}" style="color: {socialMedia.color}; --social-media-hover-bg: {socialMedia.color}" target="_blank" class="social-link btn btn-outline capitalize rounded-full shadow">
    {@html socialMedia.icon}
    <p class="mx-2">
        {username}
    </p>
</a>

<style>
    .social-link:hover {
        color: white !important;
        border: white 1px solid !important;
        background-color: var(--social-media-hover-bg);
    }
</style>