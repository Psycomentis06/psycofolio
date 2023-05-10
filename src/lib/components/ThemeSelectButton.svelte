<script lang="ts">
  import { getContext } from "svelte";
  import { getAvailableThemes } from '../services/theme'
  import ThemeButton from "./ThemeButton.svelte";
  import PaintIcon from "./icons/Paint.svelte";

  const themeStore = getContext("theme");
  
</script>

<div class="dropdown">
  <button class="btn btn-circle btn-ghost">
    <PaintIcon />
  </button>
  <div class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 right-0">
    {#each getAvailableThemes() as theme }
      <ThemeButton selected={ $themeStore === theme.code} className="my-2" themeName={theme.code} themeDisplay={theme.name} />
    {/each}
  </div>
</div>
