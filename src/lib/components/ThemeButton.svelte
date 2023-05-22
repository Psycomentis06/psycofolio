<script lang="ts">
  import { getContext } from "svelte";
  import { setTheme } from "../services/theme";
  import type { Writable } from "svelte/store";
  export let themeName = "light";
  export let themeDisplay = "Light";
  export let selected = false;
  export let className = "";

  const themeStore = getContext<Writable<string>>("theme");
</script>

<button
  class="{className} outline-base-content overflow-hidden rounded-lg text-left [&amp;_svg]:visible"
  data-set-theme={themeName}
  data-act-class="[&amp;_svg]:visible"
  on:click={() => {
    setTheme(themeName);
    themeStore.set(themeName);
    }}
  ><div
    data-theme={themeName}
    class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
  >
    <div class="grid grid-cols-5 grid-rows-3">
      <div
        class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3 h-3 {selected ? '' : 'invisible'}"
          ><path
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
          /></svg
        >
        <div class="flex-grow text-sm font-bold">{themeDisplay}</div>
        <div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
          <div class="bg-primary w-2 rounded" />
          <div class="bg-secondary w-2 rounded" />
          <div class="bg-accent w-2 rounded" />
          <div class="bg-neutral w-2 rounded" />
        </div>
      </div>
    </div>
  </div>
  </button>
