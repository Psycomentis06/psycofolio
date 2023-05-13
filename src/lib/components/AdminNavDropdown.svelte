<script lang="ts">
    import AvatarImg from '$lib/assets/images/avatar.png'
</script>
<div class="dropdown dropdown-end">
    <button class="avatar">
        <div class="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img alt="Avatar img button for admin dropdown actions" src={AvatarImg} />
        </div>
      </button>

    <div class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="/#">Export</a></li>
      <li><a href="/#">Settings</a></li>
    </div>
  </div>