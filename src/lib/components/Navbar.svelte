<script>
  import ThemeSelectButton from "./ThemeSelectButton.svelte";
  import LanguageSelectButton from "./LanguageSelectButton.svelte";
  import Settings from "../components/Settings.svelte";
  import Login from "../components/Login.svelte";
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
        <Login />
      </li>
      <!-- 
        Show for admin
      <li>
        <Settings />
      </li>
      -->
     </ul>
  </div>
</nav>
