  <script lang="ts">
  import { getContext } from "svelte";
  import PencilIcon from '$lib/components/icons/Pencil.svelte'
  import CheckIcon from '$lib/components/icons/Check.svelte'
  import CloseIcon from '$lib/components/icons/Close.svelte'
  import { fade } from "svelte/transition";
  import type { Writable } from "svelte/store";
  import type { IProfile } from "$lib/models/profile";
  import { getActiveLanguage } from "$lib/services/language";

    export let profileStore: Writable<IProfile>;
    let usernameInput = $profileStore.fullName;
    const isLogged = getContext<Writable<boolean>>("logged");
    
    let editMode = false

    function editUsername() {
      if (usernameInput === "") {
        alert("Empty username")
        return
      }
      profileStore.update(p => {
        p.fullName = usernameInput
        return p
      })
      editMode = false
      const activeLang = getActiveLanguage()
      fetch('/api/profile?lang=' + activeLang, {
        method: 'POST',
        body: JSON.stringify({data: $profileStore}),
      }).then(res => res.json())
      .then(data => {
        usernameInput = data.fullName
      })
    }
  </script>

  {#if !$isLogged}
    <h1 class="text-white text-5xl text-center font-thin special-font">{$profileStore.fullName}</h1>
  {:else if !editMode}
    <div class="relative group/edit" in:fade>
        <button on:click={() => editMode = true} class="btn btn-circle btn-sm btn-info absolute top-0 -right-10 opacity-0 group-hover/edit:opacity-100">
            <PencilIcon width="14px" height="14px" />
        </button>
        <h1 class="text-white text-5xl text-center font-thin font-fuggles">{$profileStore.fullName}</h1>
    </div>
    {:else}
    <div class="relative" in:fade>
        <div class="btn-group absolute -top-8 right-0">
            <button on:click={() => editUsername()} class="btn btn-sm btn-primary">
                <CheckIcon width="18px" height="18px" />
            </button>
            <button on:click={() => editMode = false} class="btn btn-sm btn-secondary">
                <CloseIcon width="18px" height="18px" />
            </button>
          </div>
          <input bind:value={usernameInput} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs input-md" />
    </div>
  {/if}
