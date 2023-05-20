<script lang="ts">
  import ThemeSelectButton from "./ThemeSelectButton.svelte";
  import LanguageSelectButton from "./LanguageSelectButton.svelte";
  import AdminNavDropdown from "./AdminNavDropdown.svelte";
  import Login from "../components/Login.svelte";
  import { getContext } from "svelte";
  import type { Writable } from 'svelte/store'
  import type { IUITranslation } from '$lib/interfaces/IUITranslation';

  const isLogged = getContext<Writable<boolean>>("logged");
  const translationStore = getContext<Writable<IUITranslation>>("translation");
</script>

<nav class="navbar bg-base-100">
  <div class="navbar-start" />
  <div class="navbar-center">
    <div class="dropdown">
      <button class="btn capitalize btn-wide text-lg"> {$translationStore['navbar.specialty.title']} </button>
      <ul
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
      >
        <li><button>Complete</button></li>
        <li><button>Web Dev</button></li>
        <li><button>Dev Ops</button></li>
        <li><button>Desktop Dev</button></li>
        <li><button>Mobile Dev</button></li>
      </ul>
    </div>
  </div>
  <div class="navbar-end">
    <ul class="flex justify-around w-[150px] items-center">
      <li>
        <ThemeSelectButton />
      </li>
      <li>
        <LanguageSelectButton />
      </li>
      {#if $isLogged}
        <li>
          <AdminNavDropdown />
        </li>
      {:else}
        <li>
          <Login />
        </li>
      {/if}
    </ul>
  </div>
</nav>
