<script lang="ts">
  import { fade } from 'svelte/transition'
  import SettingsIcon from "./icons/Settings.svelte";

  let activeTab = 0;
  const setActiveTab = (index: number) => {
    activeTab = index;
  };
</script>

<!-- The button to open modal -->
<label for="settings-modal" class="btn btn-circle btn-ghost">
  <SettingsIcon />
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="settings-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box bg-base-200 md:max-w-none md:w-10/12">
    <h3 class="font-bold text-lg">Settings</h3>
    <div class="modal-content flex my-4">
      <div class="tabs tabs-boxed flex-col items-start">
        <button on:click={() => setActiveTab(0)} class="{activeTab === 0 ? 'tab-active' : ''} tab">General</button>
        <button on:click={() => setActiveTab(1)} class="{activeTab === 1 ? 'tab-active' : ''} tab">tab2</button>
        <button on:click={() => setActiveTab(2)} class="{activeTab === 2 ? 'tab-active' : ''} tab">tab3</button>
        <button on:click={() => setActiveTab(3)} class="{activeTab === 3 ? 'tab-active' : ''} tab">Login</button>
      </div>
      <div class="divider divider-horizontal"> </div>
      <div class="tabs-content">
      <!-- Tabs content -->
      {#if activeTab === 0}
      <div class="tab-content" in:fade="{{duration: 900}}">tab1</div>
        {:else if activeTab === 1}
      <div class="tab-content" in:fade="{{duration: 900}}">tab2</div>
        {:else if activeTab === 2}
      <div class="tab-content" in:fade="{{duration: 900}}">tab3</div>
        {:else if activeTab === 3}
      <div class="tab-content" in:fade="{{duration: 900}}">Login</div>
        {/if}
    </div>
    </div>
    <div class="modal-action">
      <label for="settings-modal" class="btn">Close</label>
    </div>
  </div>
</div>
