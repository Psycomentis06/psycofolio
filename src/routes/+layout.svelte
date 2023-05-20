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
  import { language as configLanguage } from '../app-config.json'
  import type { IConfigLanguage, IConfigLanguageAvailableProperties, IConfigLanguageFontProperties } from "$lib/interfaces/IAppConfig";
  import { loadFontFamily, updateClassFontFamily } from "$lib/services/fonts";

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
    // Get Profile data
    const activeLang = getActiveLanguage();
    languageStore.set(activeLang);
    document.addEventListener('languagechange', (e) => {
      const { detail } = e as CustomEvent
      getProfileData(detail.lang)
      setupFont(detail.lang)
      setDirection()
    })
    getProfileData(data.lang || activeLang)
  

    // Load and set fonts
    setupFont(activeLang)

    // Set page direction
    setDirection()
  });

  function setDirection() {
    const configLangData = configLanguage.available.find(l => l.code === getActiveLanguage()) as IConfigLanguageAvailableProperties | undefined
    if (configLangData) {
      document.body.dir = configLangData.rtl  ? 'rtl' : 'ltr'
    }
  }

function setupFont(lang: string) {
    lang = lang || getActiveLanguage()
    const configLangData = configLanguage.available.find(l => l.code === lang) as IConfigLanguageAvailableProperties | undefined
    if (!configLangData) return
    let fontsSet = new Set<string>()
    Object.values(configLangData.fonts).forEach(f => {
      fontsSet.add(f.fontFamily)
    })

    fontsSet.forEach(f => {
      loadFontFamily(f)
    })

    for (const [key, val] of Object.entries(configLangData.fonts)) {
      updateClassFontFamily( '.' + key + '-font', val.fontFamily)
    }
}

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
