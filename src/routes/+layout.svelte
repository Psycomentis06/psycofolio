<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { onMount, setContext } from "svelte";
  import { initTheme } from "$lib/services/theme";
  import { writable} from "svelte/store";

  const themeStore = writable();
  setContext("theme", themeStore);
  onMount(() => {
    const theme = initTheme();
    themeStore.set(theme);
  });

</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>
</div>
