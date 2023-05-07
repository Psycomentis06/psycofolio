<script lang="ts">
  import { getContext } from "svelte";
  import ThemeButton from "./ThemeButton.svelte";
  import PaintIcon from "./icons/Paint.svelte";

  const themeStore = getContext("theme");
  
</script>

<div class="dropdown">
  <button class="btn btn-circle btn-ghost">
    <PaintIcon />
  </button>
  <div class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56 right-0">
    <ThemeButton selected={ $themeStore === 'acid'} className="my-2" themeName="acid" themeDisplay="Acid" />
    <ThemeButton selected={ $themeStore === 'emerald'} className="my-2" themeName="emerald" themeDisplay="Emerald" />
    <ThemeButton selected={ $themeStore === 'night'} className="my-2" themeName="night" themeDisplay="Night" />
    <ThemeButton selected={ $themeStore === 'synthwave'} className="my-2" themeName="synthwave" themeDisplay="Synth Wave" />
    <ThemeButton selected={ $themeStore === 'forest'} className="my-2" themeName="forest" themeDisplay="Forest" />
    <ThemeButton selected={ $themeStore === 'business'} themeName="business" themeDisplay="Business" />
  </div>
</div>
