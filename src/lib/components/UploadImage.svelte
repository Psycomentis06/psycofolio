<script lang="ts">
  import { onMount } from "svelte";


    let uploading = false;
    // Don't want to use XMLHttpRequest, and lazy to implement it myself (for now)
    // some important tasks comes first
    let uploadProgress = 0;


  function uploadImage(e: Event) {
    uploading = true
    const { files } = e.target as HTMLInputElement
    if (!files) return
    const fd = new FormData()
    fd.append('image', files[0])
    fetch('/api/profile/uploads', {
      method: 'POST',
      body: fd
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      uploading = false
      if (res.type === 'success') {
        const ce = new CustomEvent('imageupload', {
          detail: res.data
        })
        dispatchEvent(ce)
      } else {
        alert(res.message)
      }
    })
  }

</script>
<div class="tooltip block" data-tip="Upload Image">
    <label for="user-avatar-update" class="btn btn-primary btn-block {uploading ? 'btn-disabled' : ''}">
        <span class="upload-progress-bar bg-success rounded" style="width: {uploadProgress}%;"></span>
        <span>
            {uploading ? 'In Progress' : 'Upload'}
        </span>
    </label>
    <input
        on:input={(e) => uploadImage(e)}
        type="file"
        id="user-avatar-update"
        class="hidden"
    />
</div>

<style>
    .upload-progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: width 0.5s ease-in-out;
    }
</style>