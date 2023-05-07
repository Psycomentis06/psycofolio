<script>
  import MoonIcon from "./icons/Moon.svelte";
  import SunIcon from "./icons/Sun.svelte";
  import FacebookLogo from "../assets/icons/facebook.svg";
  import LanguageIcon from "./icons/Language.svelte";
  import SettingsIcon from "./icons/Settings.svelte";
  import PaintIcon from "./icons/Paint.svelte";
  import LoginIcon from "./icons/Login.svelte";
  import Language from "./icons/Language.svelte";
  import ThemeSelectButton from "./ThemeSelectButton.svelte";
  import LanguageSelectButton from "./LanguageSelectButton.svelte";
</script>

<nav class="navbar bg-base-100">
  <div class="navbar-start" />
  <div class="navbar-center">
    <div class="dropdown">
      <button class="btn capitalize btn-wide text-lg">
        Profile
      </button>
      <ul
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
        <li><button>Complete</button></li>
        <li><button>Web Dev</button></li>
        <li><button>Dev Ops</button></li>
        <li><button>Desktop Dev</button></li>
        <li><button>Mobile Dev</button></li>
      </ul>
    </div>
  </div>
  <div class="navbar-end">
    <ul class="flex justify-around w-[150px]">
      <li>
        <ThemeSelectButton />   
      </li>
      <li>
        <LanguageSelectButton />
      </li>
      <li>
        <button class="btn btn-circle btn-ghost">
          <SettingsIcon />
        </button>
      </li>
     </ul>
  </div>
</nav>
