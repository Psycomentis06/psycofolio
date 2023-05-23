<script lang="ts">
import { onMount } from "svelte";
export let link: string = "";
let modalElement: HTMLDivElement;
let modalActive = false;
const modalId = Math.random().toString(36).substring(2);

onMount(() => {
    document.body.appendChild(modalElement);
    addEventListener("popstate", (e) => {
      const state = e.state as { id?: string; action?: string };
      if (state?.id === modalId && state?.action === "open") {
        modalActive = true;
      } else {
        modalActive = false;
      }
    });
});

function openModal() {
  modalActive = true;
  window.history.pushState({ id: modalId, action: 'open' }, "", link);
}

function closeModal() {
    modalActive = false;
    window.history.back();
}
</script>

<div  class="routed-modal-container">
  <button class="w-full" on:click={() => openModal()}>
    <slot name="button-slot"/>
  </button>

  <div id={modalId} bind:this={modalElement} class="modal {modalActive ? 'modal-open' : ''}">
    <!-- MODAL -->
    <div class="modal-box w-full h-[80vh] max-w-5xl">
      <button  class="btn btn-sm btn-circle absolute right-2 top-2" on:click={() => closeModal()} >✕</button>
      <div class="modal-content">
        <slot name="component" />
      </div>
    </div>
  </div>
</div>
