<script>
  import ProfilePic from "$lib/assets/images/avatar.png";
  import HomeUsernameTitle from "$lib/components/HomeUsernameTitle.svelte";
  import SocialMediaLink from "$lib/components/SocialMediaLink.svelte";
  import { SocialMediaNames } from "$lib/services/social_media";

</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Psycofolio (Psycomentis Portfolio) is a web resume application made with SvelteKit."
  />
</svelte:head>

<div class="w-full h-[250px] bg-black relative flex items-center justify-center">
    <HomeUsernameTitle />
    <div>
      <img class="w-36 h-36 rounded-full absolute -bottom-14 left-1/2 transform -translate-x-1/2" src={ProfilePic} alt="Luffy from one piece">
    </div>
</div>
<div class="socials flex items-center justify-center mt-24">
  <div class="links lg:w-1/2 flex items-center justify-around">
    <SocialMediaLink socialMediaName={SocialMediaNames.GITHUB} username="amorali" />
    <SocialMediaLink socialMediaName={SocialMediaNames.LINKEDIN} username="amorali" />
    <SocialMediaLink socialMediaName={SocialMediaNames.TWITTER} username="amorali" />
    <SocialMediaLink socialMediaName={SocialMediaNames.INSTAGRAM} username="amorali" />
  </div>
</div>
