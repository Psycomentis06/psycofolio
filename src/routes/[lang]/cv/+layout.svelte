<script lang="ts">
    import ProfileDrawer from './ProfileDrawer.svelte';
    import { page } from '$app/stores'

    $: pathname = $page.url.pathname
</script>
<section>
  <div class="flex flex-row font-firasan">
    <div class="sidebar w-[300px] shadow-lg bg-base-200 p-4 rounded-lg mx-2">
        <ProfileDrawer />
    </div>
      <div class="w-full mx-2 p-4 bg-base-200 rounded-lg shadow-lg">
        <div class="tabs mb-5 w-full items-center justify-center">
            <a href='education' class=" { pathname.endsWith('education') ? 'tab-active' : ''} tab tab-md tab-bordered">Education</a> 
            <a href='experience' class=" { pathname.endsWith('experience') ? 'tab-active' : ''} tab tab-md tab-bordered">Experience</a> 
            <a href='skills' class=" { pathname.endsWith('skills') ? 'tab-active' : ''} tab tab-md tab-bordered">Skills</a>
            <a href='projects' class="{ pathname.endsWith('projects') ? 'tab-active' : ''} tab tab-md tab-bordered">Projects</a>
            <a href='hobbies' class="{ pathname.endsWith('hobbies') ? 'tab-active' : ''} tab tab-md tab-bordered">Hobbies</a>
            <a href='languages' class="{ pathname.endsWith('languages') ? 'tab-active' : ''} tab tab-md tab-bordered">Languages</a>
          </div>
        <slot />
      </div>
  </div>
</section>
