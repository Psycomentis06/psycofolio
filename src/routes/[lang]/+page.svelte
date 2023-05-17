<script lang="ts">
  import { socialMedia, getSocialMedia } from '$lib/services/social_media'
  import ProfilePic from "$lib/assets/images/avatar.png";
  import HomeUsernameTitle from "$lib/components/HomeUsernameTitle.svelte";
  import SocialMediaLink from "$lib/components/SocialMediaLink.svelte";
  import MinusLogo from "$lib/components/icons/Minus.svelte"
  import PlusIcon from "$lib/components/icons/Plus.svelte"
  import type { IProfile } from "$lib/models/profile";
  import type { SocialMediaNames } from "$lib/services/social_media";
  import { getContext } from "svelte";
  import type { PageData } from "./$types";
  import type { Writable } from "svelte/store";

  const isLogged = getContext<Writable<boolean>>("logged")
  export let data: PageData;
  let socialMediaAddName = "";
  let socialMediaAddSelect = "";
  let socialMediaAddModalState = false
  $: socialMediaAddSelected = getSocialMedia(socialMediaAddSelect)
  let profile = data.profile as IProfile


  function addSocialMedia() {
    if (socialMediaAddName === "") {
      alert("Empty username")
      return
    }
    if (socialMediaAddSelect === "") {
      alert("Please select a social media platform")
      return
    }
    profile.socialMedias?.push({
      code: socialMediaAddSelect as SocialMediaNames,
      username: socialMediaAddName
    })

    fetch('/api/profile?lang=' + data.lang, {
      method: 'POST',
      body: JSON.stringify({data: profile}),
    }).then(res => res.json())
    .then(res => {
      if (res.message) {
        profile = profile
      } else if (res.error) {
        alert(res.error)
      }
      socialMediaAddModalState = false
    })
  }

  function removeSocialMedia(code: SocialMediaNames) {
    if (!confirm("Are you sure you want to remove this social media account?")) return
    profile.socialMedias = profile.socialMedias?.filter(sm => sm.code !== code)
    fetch('/api/profile?lang=' + data.lang, {
      method: 'POST',
      body: JSON.stringify({data: profile}),
    }).then(res => res.json())
    .then(res => {
      if (res.message) {
        profile = profile
      } else if (res.error) {
        alert(res.error)
      }
    })
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Psycofolio (Psycomentis Portfolio) is a web resume application made with SvelteKit."
  />
</svelte:head>

<div class="w-full h-[250px] bg-black relative flex items-center justify-center">
    <HomeUsernameTitle username={profile.firstName + ' ' + profile.lastName} />
    <div>
      <img class="w-36 h-36 rounded-full absolute -bottom-14 left-1/2 transform -translate-x-1/2" src={ProfilePic} alt="">
    </div>
</div>
<div class="socials flex items-center justify-center mt-24">
  {#if !$isLogged}
  <div class="links lg:w-1/2 flex items-center justify-center">
    {#each profile.socialMedias || [] as sm}
    <div class="mx-3">
      <SocialMediaLink socialMediaName={sm.code} username={sm.username} />
    </div>
    {/each}
  </div>
  {:else}
    <div class="group/edit relative links lg:w-1/2 flex items-center justify-center p-8 border-2 border-transparent hover:border-primary rounded-lg">
      <label for="social-media-add-modal" class="btn btn-circle btn-primary absolute -top-7 opacity-0 group-hover/edit:opacity-100">
        <PlusIcon className="w-6 h-6" />
      </label>
    {#if profile.socialMedias?.length === 0}
      <h2 class="text-center text-xlg font-otomanopee">No social media added</h2>
    {:else}
      
    {#each profile.socialMedias || [] as sm}
      
    <div class="relative group/link-remove mx-4">
      <button on:click={() => removeSocialMedia(sm.code)} class="btn btn-circle btn-sm btn-error absolute -top-3 right-0 opacity-0 group-hover/link-remove:opacity-100">
        <MinusLogo />
      </button>
      <SocialMediaLink socialMediaName={sm.code} username={sm.username} />
    </div> 
    {/each}
    {/if}
    </div>
  {/if}

  <!-- Add social modal -->
  <input bind:checked={socialMediaAddModalState}  type="checkbox" id="social-media-add-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="social-media-add-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold"> Add Social Account </h3>
    <div class="my-4">
      <label for="social-media-username" class="label">Username</label>
      <input bind:value={socialMediaAddName} type="text" id="social-media-username" class="input input-bordered w-full" placeholder="Username" />

      <div class="mt-5">
      <label for="social-media-name">
        Social Media
      </label>
      <select style={'border-color: ' + socialMediaAddSelected?.color + '; outline-color: ' + socialMediaAddSelected?.color} bind:value={socialMediaAddSelect} id="social-media-name" class="input input-bordered w-full mt-1">
          <option value="">Choose one</option>
        {#each socialMedia as sm }
          <option value={sm.name}>{sm.fullName}</option>
        {/each}
      </select>

      <button on:click={() => addSocialMedia()} class="btn btn-success btn-block mt-4">Add</button>
      </div>
    </div>
  </div>
</div>
</div>
