<script lang="ts">
    import { getContext, onMount, createEventDispatcher } from "svelte";
    import { getAvailableLanguages, getActiveLanguage, setLanguage } from '../services/language'
    import LanguageIcon from "./icons/Language.svelte";
    import { page } from '$app/stores'
    import { goto } from "$app/navigation";
  import type { Writable } from "svelte/store";

    let languages = getAvailableLanguages();
    const languageStore = getContext<Writable<string>>('language')
    const translationStore = getContext<Writable<any>>('translation')
    let activeLanguage: string
    onMount(() => {
      activeLanguage = getActiveLanguage();
    });

    function changeLanguage(lang: string) {
      setLanguage(lang, () => {
        let locale = $page.url.pathname.split('/')
        locale[1] = lang
        const localePath = locale.join('/')
        activeLanguage = lang
        languageStore.set(lang)
        //window.location.href = localePath
        goto(localePath, { replaceState: true })

        // Update translation
        fetch('/translations/' + lang + '.json')
          .then((response) => response.json())
          .then((data) => {
            translationStore.set(data)
          })
      const ce = new CustomEvent('languagechange', { detail: lang })
      document.dispatchEvent(ce)
      })
    }
</script>
<div title="Change Language" class="dropdown ltr:dropdown-end rtl:dropdown-right">
  <button class="btn btn-ghost btn-circle">
    <LanguageIcon />
  </button>
  <div
    class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl"
  >
    <ul class="menu menu-compact gap-1 p-3">
        {#each languages as lang}
      <li>
        <button on:click={() => changeLanguage(lang.code)} class="{$languageStore === lang.code ? 'active' : ''} flex rounded-box p-2 w-full text-left"
          ><img
            loading="lazy"
            width="20"
            height="20"
            alt={lang.name}
            src={lang.flag}
          /> <span class="flex flex-1 justify-between">{lang.name}</span></button
        >
      </li>
      {/each}
    </ul>
  </div>
</div>
