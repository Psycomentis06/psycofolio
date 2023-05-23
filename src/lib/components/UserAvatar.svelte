<script lang="ts">
  import ProfilePic from "$lib/assets/images/avatar.png";
  import PencilIcon from '$lib/components/icons/Pencil.svelte'
  import CheckIcon from '$lib/components/icons/Check.svelte'
  import ImageIcon from '$lib/components/icons/Photo.svelte'
  import CloudArrowUpIcon from '$lib/components/icons/CloudArrowUp.svelte'
  import ArrowLeftIcon from "$lib/components/icons/ArrowLeft.svelte";
  import { slide, fade } from "svelte/transition";
  import RoutedModal from "./RoutedModal.svelte";
  import Uploads from "../../routes/[lang]/admin/uploads/Uploads.svelte";
  import {page} from '$app/stores'
  export let className:string = "";
  export let width = 100;
  export let height = 100;
  export let isLogged: boolean = true;
  enum uploadModalActiveStateType {
    NONE,
    UPLOADS,
    REMOTE,
  }
  let uploadModalActiveState = uploadModalActiveStateType.NONE;
  $: uploadModalActiveStateBackArrow = uploadModalActiveState == uploadModalActiveStateType.NONE ? false : true;
  

  function uploadImage(e: Event) {
    const { files } = e.target as HTMLInputElement
    if (!files) return
    const fd = new FormData()
    fd.append('image', files[0])
    fetch('/api/profile/uploads', {
      method: 'POST',
      body: fd
    })
  }

  function saveUrl() {
    console.log('updating image');
  }

 function uploadModalActiveStateBackHandler() {
    switch(uploadModalActiveState) {
      case uploadModalActiveStateType.NONE:
      break;
      case uploadModalActiveStateType.UPLOADS:
        uploadModalActiveState = uploadModalActiveStateType.NONE;
      break;
      case uploadModalActiveStateType.REMOTE:
        uploadModalActiveState = uploadModalActiveStateType.NONE;
      break;
    }
 } 
</script>
    <div class="group">
      {#if isLogged}
        <div class='{className} z-50 opacity-0 group-hover:opacity-100 flex items-center justify-center' style="background-color: rgba(0, 0, 0, 0.7); width: {width}px; height: {height}px;">
            <label for="user-avatar-update-modal" class="flex items-center justify-center flex-col transition-all duration-200 active:scale-90 rounded-full" style="width: {(width * 0.8)}px; height: {(height * 0.8)}px">
                <PencilIcon width={(width * 0.3) + 'px'} height={(height * 0.3) + 'px'} />
                <p class="text-center mt-2">
                    Update
                </p>
            </label>
     </div>
      {/if}
      <img class={className} src={ProfilePic} alt="" style='width: {width}px; height: {height}px;'>
    </div>
            <input type="checkbox" id="user-avatar-update-modal" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box">
                  {#if uploadModalActiveStateBackArrow}
                  <button transition:fade class="btn btn-sm btn-circle absolute left-2 top-6" on:click={() => uploadModalActiveStateBackHandler()}>
                    <ArrowLeftIcon />
                  </button>
                  {/if}
                  <h3 class="font-bold text-xl text-center">Update user profile picture</h3>
                <div class="content mt-6">
                  {#if uploadModalActiveState == uploadModalActiveStateType.NONE}
                  <div class="flex w-full" in:slide>
                    <div class="grid p-4 flex-grow card rounded-box place-items-center">
                      <button class="hover:text-accent tooltip" data-tip="Server Uploads" on:click={() => uploadModalActiveState = uploadModalActiveStateType.UPLOADS}>
                        <ImageIcon width="100px" height="100px" />
                        UPLOADS
                      </button>
                    </div>
                    <div class="divider divider-horizontal">OR</div>
                    <div class="grid p-4 flex-grow card rounded-box place-items-center">
                      <button class="hover:text-accent tooltip" data-tip="Using URL" on:click={() => uploadModalActiveState = uploadModalActiveStateType.REMOTE}>
                        <CloudArrowUpIcon width="100px" height="100px" />
                        REMOTE
                      </button>
                    </div>
                  </div>
                  {:else if uploadModalActiveState == uploadModalActiveStateType.UPLOADS}
                    <div in:slide>
                      <RoutedModal link={$page.params.lang + '/admin/uploads'}>
                        <span slot="button-slot" class="btn btn-block">Pick from old uploads</span>
                        <svelte:fragment slot="component">
                          <Uploads />
                        </svelte:fragment>
                      </RoutedModal>
                      <div class="divider">OR</div>
                      <div class="tooltip block" data-tip="Coming Soon">
                          <label for="user-avatar-update" class="btn btn-primary btn-block">Upload</label>
                          <input on:input={(e) => uploadImage(e)} type="file" id="user-avatar-update" class="hidden" />
                      </div>
                    </div>
                  {:else if uploadModalActiveState == uploadModalActiveStateType.REMOTE}
                    <div in:slide>
                        <div class="form-control ">
                            <label class="input-group">
                              <span>URL</span>
                              <input type="text" placeholder="http://exemple.com/image.png" class="input input-bordered w-full" />
                              <button class="btn btn-success" on:click={() => saveUrl()}>
                                <CheckIcon />
                              </button>
                            </label>
                          </div>
                    </div>
                  {/if}
                </div>
                <div class="modal-action">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <label for="user-avatar-update-modal" class="btn btn-error" on:click={() => uploadModalActiveState = uploadModalActiveStateType.NONE}>Close</label>
                </div>
            </div>
            </div>