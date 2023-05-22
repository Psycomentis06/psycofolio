<script lang="ts">
  import {
    getSocialMedia,
    type SocialMediaNames,
  } from "$lib/services/social_media";
  import {
    ColorType,
    getBrightness,
    getDarkness,
    getHtmlElementBgColor,
    getReadableColor,
    guessColorType,
    hexToHSL,
    hexToRGBA,
    hslToRgba,
    hslToStr,
    isTransparent,
    rgbaToHex,
    rgbaToHSL,
    rgbaToStr,
    strToRGBA,
  } from "$lib/utils/colors";
  import { getContext, onMount } from "svelte";

  export let socialMediaName: SocialMediaNames;
  export let username: string;

  const socialMedia = getSocialMedia(socialMediaName);
  $: socialMediaBrandColor = socialMedia?.color || "#000000";
  $: borderTextHoverColor = 'white'

  if (!socialMedia) {
    throw new Error(`Social media ${socialMediaName} not found`);
  }

  function getUrl() {
    return socialMedia?.url.replace("${username}", username);
  }

  let hoverColor = "background-color: " + socialMedia.color;
  let ref: HTMLAnchorElement;

  onMount(() => {
    setupColors();
    window.addEventListener("themechange", () => {
      setupColors()
    });
  });

  function setupColors() {
    const a = getHtmlElementBgColor(ref);
    const hslSocial = hexToHSL(socialMedia?.color || "#000000");
    const bgRgba = strToRGBA(a);
    const bgHsl = rgbaToHSL(bgRgba);
    const rc = getReadableColor(hslSocial, bgHsl);
    socialMediaBrandColor = rgbaToHex(hslToRgba(rc))
    
    const lightness = getBrightness(hexToHSL(socialMediaBrandColor));
    if (lightness > 50) {
      borderTextHoverColor = 'black'
    }
    else borderTextHoverColor = 'white'
  }
</script>

<a
  bind:this={ref}
  href={getUrl()}
  style="color: {socialMediaBrandColor}; --social-media-hover-bg: {socialMediaBrandColor}; --border-hover-color: {borderTextHoverColor};"
  target="_blank"
  class="social-link border-2 btn btn-outline capitalize rounded-full shadow"
>
  {@html socialMedia.icon}
  <p class="mx-2">
    {username}
  </p>
</a>

<style>
  .social-link:hover {
    color: var(--border-hover-color) !important;
    border: var(--border-hover-color) 2px solid !important;
    background-color: var(--social-media-hover-bg);
  }
</style>
