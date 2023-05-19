<script lang="ts">
  import Header from "./[lang]/Header.svelte";
  import "./styles.css";
  import { onMount, setContext } from "svelte";
  import { initTheme } from "$lib/services/theme";
  import { setLanguage, getActiveLanguage, isAvailableLanguage } from '$lib/services/language'
  import { writable} from "svelte/store";
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  const themeStore = writable();
  setContext("theme", themeStore);
  // Set translation
  const translationStore = writable(data.translation);
  setContext("translation", translationStore);

  setContext('logged', writable(data.logged))

  const languageStore = writable();
  setContext("language", languageStore);

  const profileStore = writable({});
  setContext("profile", profileStore);
  
  onMount( () => {
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
    const activeLang = getActiveLanguage();
    languageStore.set(activeLang);
    document.addEventListener('languagechange', (e) => {
      const { detail } = e as CustomEvent
      getProfileData(detail.lang)
    })
    getProfileData(data.lang || activeLang)
  });

async function getProfileData(lang: string) {
    lang = lang || getActiveLanguage()
    const profileFetch = await fetch('/api/profile?lang=' + lang, {method: 'GET'})
    const profileData = await profileFetch.json()
    if (profileData.error) {
      alert(profileData.error)
      return
    } else if (profileData.profile) {
      profileStore.set(profileData.profile)
    }
  }

  </script>
<div class="app">

  <Header />

  <main>
    <slot />
  </main>
</div>
