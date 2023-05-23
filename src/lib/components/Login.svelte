<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { page } from "$app/stores";
  import EyeSlashIcon from "./icons/EyeSlash.svelte";
  import EyeIcon from "./icons/Eye.svelte";
  import LoginIcon from "./icons/Login.svelte";
  import type { Writable } from "svelte/store";
  import type { IUITranslation } from "$lib/interfaces/IUITranslation";

  let passwordVisible = false;
  let username = "";
  let password = "";
  let loginApiLoading = false;

  function togglePasswordVisibility() {
    passwordVisible = !passwordVisible;
  }

  const translationStore = getContext<Writable<IUITranslation>>("translation");
  
  const loggedIn = getContext<Writable<boolean>>("logged");

  const login = async () => {
    loginApiLoading = true;
    const apiRoute = $page.url.origin + "/api/auth/login";
    try {
      const loginFetch = await fetch(apiRoute, {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const loginResponse = await loginFetch.json();
      if (loginResponse?.sessionId) {
        loggedIn.set(true);
      }
      
    } catch (e) {
      console.log('Login Error', e);
    }
    loginApiLoading = false;
  };

  const passwordInputHandler = (e: any) => {
    password = e.target.value;
  };
</script>

<label for="login-modal" class="btn btn-ghost btn-circle">
  <LoginIcon />
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="login-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative bg-base-100">
    <label
      for="login-modal"
      class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
    >
    <h3 class="text-xl font-bold text-center">
      {$translationStore["navbar.login.title"]}
    </h3>
    <div class="login-form my-6 flex items-center justify-center flex-col">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="username-input">
          <span class="label-text"
            >{$translationStore["navbar.login.form.input.username.label"]}</span
          >
        </label>
        <input
          bind:value={username}
          id="username-input"
          type="text"
          placeholder={$translationStore[
            "navbar.login.form.input.username.placeholder"
          ]}
          class="input input-bordered w-full max-w-xs"
        />
      </div>

      <div class="form-control w-full max-w-xs relative">
        <label class="label" for="password-input">
          <span class="label-text"
            >{$translationStore["navbar.login.form.input.password.label"]}</span
          >
        </label>
        <input
          on:input={passwordInputHandler}
          id="password-input"
          type={passwordVisible ? "text" : "password"}
          placeholder={$translationStore[
            "navbar.login.form.input.password.placeholder"
          ]}
          class="input input-bordered w-full max-w-xs"
        />
        <button
          on:click={() => togglePasswordVisibility()}
          class="swap absolute top-12 ltr:right-2 rtl:left-2"
        >
          <div class={passwordVisible ? "swap-off" : "swap-on"}>
            <EyeIcon />
          </div>
          <div class={passwordVisible ? "swap-on" : "swap-off"}>
            <EyeSlashIcon />
          </div>
        </button>
      </div>

      <div class="my-5">
        <button
          on:click={() => {
            login();
          }}
          class="btn btn-primary btn-wide {loginApiLoading ? 'loading' : ''}"
          >{$translationStore["navbar.login.form.button.submit"]}</button
        >
      </div>
    </div>
  </div>
</div>
