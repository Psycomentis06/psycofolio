<script lang="ts">
  import Header from "./[lang]/Header.svelte";
  import "./styles.css";
  import { onMount, setContext } from "svelte";
  import { initTheme } from "$lib/services/theme";
  import { setLanguage, getActiveLanguage, isAvailableLanguage } from '$lib/services/language'
  import { get, writable} from "svelte/store";
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  const themeStore = writable();
  setContext("theme", themeStore);
  // Set translation
  const translationStore = writable(data.translation);
  setContext("translation", translationStore);
  
  onMount(() => {
    
    // Set theme
    const theme = initTheme();
    themeStore.set(theme);
    // Set lang
    const pathname = $page.url.pathname
    if (pathname === "/") {
      setLanguage(getActiveLanguage());
      goto(`/${getActiveLanguage()}`, { replaceState: true });
    } else {
      if (data.lang === undefined || data.lang === null) {
        setLanguage(getActiveLanguage());
      } else if (isAvailableLanguage(data.lang)) {
        setLanguage(data.lang)
      } else {
        setLanguage(getActiveLanguage());
        goto(`/${getActiveLanguage()}/${pathname}`, { replaceState: true });
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
