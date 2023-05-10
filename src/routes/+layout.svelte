<script lang="ts">
  import Header from "./[lang]/Header.svelte";
  import "./styles.css";
  import { onMount, setContext } from "svelte";
  import { initTheme } from "$lib/services/theme";
  import { setLanguage, getActiveLanguage } from '$lib/services/language'
  import { writable} from "svelte/store";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  const themeStore = writable();
  setContext("theme", themeStore);
  onMount(() => {
    // Set theme
    const theme = initTheme();
    themeStore.set(theme);
    // Set lang
    if (window.location.pathname === "/") {
      setLanguage(getActiveLanguage());
      window.location.href = `/${getActiveLanguage()}`;
    } else {
      if (data.lang) {
        setLanguage(data.lang);
      }
    }
  });

</script>
<div class="app">

  <Header />

  <main>
    <slot />
  </main>
</div>
