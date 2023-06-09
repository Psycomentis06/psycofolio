<script lang="ts">
  import type { IUpload } from "$lib/services/server/upload.server";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";

    let showInfoPanel = false

    let contextMenuRef: HTMLUListElement
    let contextMenuShow = false

    let imgs: IUpload[] = []

    function getImages() {
        fetch("/api/profile/uploads")
            .then((res) => res.json())
            .then((res) => {
                imgs = res.data as IUpload[]
                imgs = imgs.filter((i) => i.type.startsWith("image/"))
            })
    }
    

    let selectedImgIndex = 0
    let selectedImg = writable<IUpload>(imgs[selectedImgIndex])
    const selectImg = (i: number) => {
        selectedImgIndex = i
        selectedImg.set(imgs[selectedImgIndex])
        showInfoPanel = true
    }

    let contextMenuImgIndex: number = 0

    function buttonContextMenu(e: MouseEvent, imgIndex: number) {
        e.preventDefault()
        contextMenuImgIndex = imgIndex
        contextMenuShow = true
        contextMenuRef.style.top = `${e.clientY}px`
        contextMenuRef.style.left = `${e.clientX}px`

        addEventListener("click", () => {
            contextMenuShow = false
        }, { once: true })
    }

    function toggleVisibility(img: IUpload) {
        fetch('/api/profile/uploads/' + img.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visibility: img.visibility === 'public' ? 'private' : 'public'
            })
        }).then((res) => res.json())
        .then(res => {
            if (res.type === 'success') {
                getImages()
                selectImg(selectedImgIndex)
            } else {
                alert(res.message)
            }
        })
    }

    function remove(img: IUpload) {
        if (!confirm('Are you sure you want to remove this image')) {
            return false;
        }
        fetch('/api/profile/uploads/' + img.id, {
            method: 'DELETE'
        }).then((res) => res.json())
        .then(res => {
            if (res.type === 'success') {
                getImages()
                showInfoPanel = false
            } else {
                alert(res.message)
            }
        })
    }

    onMount(() => {
        getImages()
        addEventListener('imageupload', () => {
            getImages()
        })
    })


</script>
<div class="uploads-component">
    <div class="flex justify-between p-2 transition duration-200" style="gap: 20px">
        <div class="images bg-base-200 w-full rounded-lg p-3 flex items-start flex-wrap" style="gap: 30px;">
            {#each imgs as i, index}
                <button on:contextmenu={(e) => buttonContextMenu(e, index)} on:click={() => selectImg(index)} class="rounded-lg active:scale-90 transition-all duration-200 active:rounded-xl overflow-hidden { i.visibility === 'public' ? 'border-success border-2' : ''}">
                    <img class="w-32 h-32 object-cover" src={i.path} alt="">
                </button>
            {/each}
        </div>
        {#if showInfoPanel}
            <div class="info w-1/3 bg-base-200 rounded-lg p-3 relative" transition:slide={{axis: 'x'}}>
                <button on:click={() => showInfoPanel = false} class="btn btn-sm btn-circle absolute top-2 right-2">
                    ✕
                </button>
                <div class="mt-9">
                    <img class="w-full h-[250px] rounded-lg object-cover shadow-lg" src={$selectedImg.path} alt="">
                    <h4 class="text-center text-lg">{$selectedImg.name}</h4>

                    <div class="action-buttons my-4 text-center">
                        <button class="btn btn-info">
                            Set as default
                        </button>
                        <button on:click={() => remove($selectedImg)} class="btn btn-error">
                            Remove
                        </button>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            ID:
                        </span>
                        <span>
                            {$selectedImg.id}
                        </span>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            Type:
                        </span> 
                        <span>
                            {$selectedImg.type}
                        </span>
                    </div>
                    
                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            Size:
                        </span>
                        <span>
                            {(($selectedImg.size / 1000) / 1000).toFixed(2)} MB
                        </span>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            Last Modified:
                        </span>
                        <span>
                            {new Date($selectedImg.lastModifiedDate).toLocaleString()}
                        </span>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            MD5:
                        </span>
                        <span>
                            {$selectedImg.md5}
                        </span>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            SHA256:
                        </span>
                        <span>
                            {$selectedImg.sha256}
                        </span>
                    </div>

                    <div class="flex my-2">
                        <span class="font-bold mr-2">
                            Visibility:
                        </span>
                        <span class="flex items-center">
                            <input on:input={(e) => toggleVisibility($selectedImg)} type="checkbox" checked={ $selectedImg.visibility === 'public' ? true : false } class="toggle">
                            <span class="mx-3"> {$selectedImg.visibility} </span>
                        </span>
                    </div>

                </div>
            </div>
        {/if}
    </div>

    <!-- Context Menu -->

    <ul bind:this={contextMenuRef} class="menu bg-base-100 w-56 p-2 rounded-box absolute {contextMenuShow ? 'block' : 'hidden'}">
        <li><button>Set as default</button></li>
        <li><button on:click={() => toggleVisibility(imgs[contextMenuImgIndex])}>Toggle Visibility</button></li>
        <li><button on:click={() => remove(imgs[contextMenuImgIndex])}>Remove</button></li>
    </ul>
</div>