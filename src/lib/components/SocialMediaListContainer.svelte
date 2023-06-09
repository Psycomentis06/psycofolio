<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { socialMedia, getSocialMedia } from '$lib/services/social_media'
  import SocialMediaLink from "$lib/components/SocialMediaLink.svelte";
  import MinusLogo from "$lib/components/icons/Minus.svelte"
  import PlusIcon from "$lib/components/icons/Plus.svelte"
  import type { IProfile } from "$lib/models/profile";
  import type { SocialMediaNames } from "$lib/services/social_media";
  import { getActiveLanguage } from '$lib/services/language'
  import ChevronRightIcon from "./icons/ChevronRight.svelte";

  const isLogged = getContext<Writable<boolean>>("logged")
  export let profileStore: Writable<IProfile>;
  $: socialMedias = $profileStore.socialMedias && $profileStore.socialMedias?.length > 4 ? $profileStore.socialMedias?.slice(0, 4) : $profileStore.socialMedias 
  let socialMediaAddName = "";
  let socialMediaAddSelect = "";
  let socialMediaAddModalState = false
  $: socialMediaAddSelected = getSocialMedia(socialMediaAddSelect)
  function addSocialMedia() {
    if (socialMediaAddName === "") {
      alert("Empty username")
      return
    }
    if (socialMediaAddSelect === "") {
      alert("Please select a social media platform")
      return
    }
    const socialMedia = $profileStore.socialMedias || []
    socialMedia.push({
      code: socialMediaAddSelect as SocialMediaNames,
      username: socialMediaAddName
    })

    profileStore.update(p => {
      p.socialMedias = socialMedia
      return p
    })

    const activeLang = getActiveLanguage()

    fetch('/api/profile?lang=' + activeLang, {
      method: 'POST',
      body: JSON.stringify({data: $profileStore}),
    }).then(res => res.json())
    .then(res => {
      if (res.message) {
      } else if (res.error) {
        alert(res.error)
      }
      socialMediaAddModalState = false
    })
  }

  function removeSocialMedia(code: SocialMediaNames) {
    if (!confirm("Are you sure you want to remove this social media account?")) return
    // Remove based on code (buggy if there are multiple social media with the same code)
    profileStore.update(p => {
      p.socialMedias = p.socialMedias?.filter(sm => sm.code !== code)
      return p
    })
    const activeLang = getActiveLanguage()
    fetch('/api/profile?lang=' + activeLang, {
      method: 'POST',
      body: JSON.stringify({data: $profileStore}),
    }).then(res => res.json())
    .then(res => {
      if (res.message) {
      } else if (res.error) {
        alert(res.error)
      }
    })
  }
</script>

<div class="socials flex items-center justify-center">
  {#if !$isLogged}
  <div class="links lg:w-1/2 flex items-center justify-center flex-wrap" style="gap: 10px">
    {#each socialMedias || [] as sm}
    <div class="mx-3">
      <SocialMediaLink socialMediaName={sm.code} username={sm.username} />
    </div>
    {/each}
    {#if $profileStore.socialMedias && $profileStore.socialMedias?.length > 4}
      <label for="social-media-show-all-modal" class="btn btn-outline btn-primary rounded-full normal-case">
        Show All (+{$profileStore.socialMedias.length - 4})
        <ChevronRightIcon width="18px" height="18px" />
      </label>
    {/if}
  </div>
  {:else}
    <div class="group/edit relative links lg:w-1/2 flex items-center justify-center p-8 border-2 border-transparent hover:border-primary rounded-lg flex-wrap" style="gap: 10px;">
      <label for="social-media-add-modal" class="btn btn-circle btn-primary absolute -top-7 opacity-0 group-hover/edit:opacity-100">
        <PlusIcon className="w-6 h-6" />
      </label>
    {#if socialMedias?.length === 0}
      <h2 class="text-center text-xlg font-otomanopee">No social media added</h2>
    {:else}
      
    {#each socialMedias || [] as sm}
    <div class="relative group/link-remove mx-4">
      <button on:click={() => removeSocialMedia(sm.code)} class="btn btn-circle btn-sm btn-error absolute -top-3 right-0 opacity-0 group-hover/link-remove:opacity-100">
        <MinusLogo />
      </button>
      <SocialMediaLink socialMediaName={sm.code} username={sm.username} />
    </div> 
    {/each}
    {#if $profileStore.socialMedias && $profileStore.socialMedias?.length > 4}
      <label for="social-media-show-all-modal" class="btn btn-outline btn-primary rounded-full normal-case">
        Show All (+{$profileStore.socialMedias.length - 4})
        <ChevronRightIcon width="18px" height="18px" />
      </label>
    {/if}
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

<!-- Show All modal -->


<input type="checkbox" id="social-media-show-all-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative w-[600px] max-w-5xl">
    <label for="social-media-show-all-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-xl font-bold text-center"> Show all social media accounts </h3>
    <div class="my-7 flex items-center justify-center flex-wrap" style="gap: 10px">
    {#each $profileStore.socialMedias || [] as sm}
    <div class="relative group/link-remove mx-4">
      <button on:click={() => removeSocialMedia(sm.code)} class="btn btn-circle btn-sm btn-error absolute -top-3 right-0 opacity-0 group-hover/link-remove:opacity-100">
        <MinusLogo />
      </button>
      <SocialMediaLink socialMediaName={sm.code} username={sm.username} />
    </div> 
    {/each}
    </div>
  </div>
</div>
</div>
