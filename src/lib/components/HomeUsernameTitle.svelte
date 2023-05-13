  <script lang="ts">
  import { getContext } from "svelte";
  import PencilIcon from '$lib/components/icons/Pencil.svelte'
  import CheckIcon from '$lib/components/icons/Check.svelte'
  import CloseIcon from '$lib/components/icons/Close.svelte'
  import { fade } from "svelte/transition";

    const isLogged = getContext("logged");
    
    let editMode = false
  </script>

  {#if !isLogged}
    <h1 class="text-white text-5xl text-center font-thin font-fuggles">Amor Ali</h1>
  {:else if !editMode}
    <div class="relative group/edit" in:fade>
        <button on:click={() => editMode = true} class="btn btn-circle btn-sm btn-info absolute top-0 -right-10 opacity-0 group-hover/edit:opacity-100">
            <PencilIcon width="14px" height="14px" />
        </button>
        <h1 class="text-white text-5xl text-center font-thin font-fuggles">Psycofolio</h1>
    </div>
    {:else}
    <div class="relative" in:fade>
        <div class="btn-group absolute -top-8 right-0">
            <button class="btn btn-sm btn-primary">
                <CheckIcon width="18px" height="18px" />
            </button>
            <button on:click={() => editMode = false} class="btn btn-sm btn-secondary">
                <CloseIcon width="18px" height="18px" />
            </button>
          </div>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs input-md" />
    </div>
  {/if}
