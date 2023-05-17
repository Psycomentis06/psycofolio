<script lang="ts">
    import DefaultAvatarImg from '$lib/assets/images/avatar.png';
  import SocialMediaLink from '$lib/components/SocialMediaLink.svelte';
  import { SocialMediaNames } from '$lib/services/social_media';
</script>
<div class="profile-drawer">
    <div class="avatar-div flex items-center justify-center">
        <div class="avatar">
            <div class="w-24 rounded-full ring-4 ring-primary ">
              <img src={DefaultAvatarImg} alt="" />
            </div>
          </div>
    </div>
    <div class="my-4 text-center">
        <h1 class="text-xl my-2">Username</h1>
        <h2 class="text-sm my-2">user's job</h2>
        <h2 class="text-sm my-2"><a href="mailto:email@mail.com?subject = Contact&body = :)">email@mail.com</a></h2>
        <address class="text-sm my-2">user's address</address>
        <a href="tel:00-00-00-00" class="text-sm my-2">+1 00 00 00 00</a>
    </div>
    <div class="divider"></div>
    <div class="social-media font-sans flex justify-around items-center flex-wrap" style="gap: 10px;">
        <SocialMediaLink socialMediaName={SocialMediaNames.REDDIT} username="user" />
        <SocialMediaLink socialMediaName={SocialMediaNames.DISCORD} username="user" />
        <SocialMediaLink socialMediaName={SocialMediaNames.STACKOVERFLOW} username="user" />
    </div>
</div>