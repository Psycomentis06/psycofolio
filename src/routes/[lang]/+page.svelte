<script lang="ts">
  import ProfilePic from "$lib/assets/images/avatar.png";
  import HomeUsernameTitle from "$lib/components/HomeUsernameTitle.svelte";
  import { getContext, onMount } from "svelte";
  import SocialMediaListContainer from '$lib/components/SocialMediaListContainer.svelte';
  import type { Writable } from "svelte/store";
  import type { IProfile } from "$lib/models/profile";
  import type { PageData } from "./$types";
  import ChevronRightIcon from "$lib/components/icons/ChevronRight.svelte";

  export let data: PageData;



  const profileStore = getContext<Writable<IProfile>>('profile');

  onMount(() => {
    document.addEventListener('languagechange', (lang) => {
      const { detail } = lang as CustomEvent
      console.log(detail);
    })
  })
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Psycofolio (Psycomentis Portfolio) is a web resume application made with SvelteKit."
  />
</svelte:head>

<div class="w-full h-[250px] bg-black relative flex items-center justify-center">
    <HomeUsernameTitle {profileStore} />
    <div>
      <img class="w-36 h-36 rounded-full absolute -bottom-14 left-1/2 transform -translate-x-1/2" src={ProfilePic} alt="">
    </div>
</div>
 <div class="mt-20 mb-3">
  <SocialMediaListContainer {profileStore} />
 </div>

 <div class="my-4">
 <p class="md:w-1/2 mx-auto description text-justify">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas nesciunt vero architecto consequuntur beatae illo, fuga animi distinctio totam culpa corrupti ipsam harum unde, eligendi inventore? Harum, expedita ab.
  </p>
 </div>

 <div class="flex items-center justify-center my-7">
  <a href={data.lang + '/cv/education'} class="btn btn-secondary btn-outline btn-block md:btn-wide md:rounded-full">
    Go next (cv) 
    <ChevronRightIcon className="w-5 h-5 ml-2" />
  </a>
 </div>