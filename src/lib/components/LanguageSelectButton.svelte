<script lang="ts">
    import { onMount } from "svelte";
    import { getAvailableLanguages, getActiveLanguage, setLanguage } from '../services/language'
    import LanguageIcon from "./icons/Language.svelte";
    import { page } from '$app/stores'
  import { goto } from "$app/navigation";

    let languages = getAvailableLanguages();
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
        goto(localePath, { replaceState: true })
      }) 
    }
</script>
<div title="Change Language" class="dropdown dropdown-end">
  <button class="btn btn-ghost btn-circle">
    <LanguageIcon />
  </button>
  <div
    class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl"
  >
    <ul class="menu menu-compact gap-1 p-3">
        {#each languages as lang}
      <li>
        <button on:click={() => changeLanguage(lang.code)} class="{activeLanguage === lang.code ? 'active' : ''} flex rounded-box p-2 w-full text-left"
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
