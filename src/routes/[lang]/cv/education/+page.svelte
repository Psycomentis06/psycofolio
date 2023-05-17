<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h3>Education page</h3>


<!-- The button to open modal -->
<a href="#my-modal-2" class="btn">open modal</a>
<!-- Put this part before </body> tag -->
<div class="modal" id="my-modal-2">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
     <!-- svelte-ignore a11y-invalid-attribute -->
     <a href="#" class="btn">Yay!</a>
    </div>
  </div>
</div>