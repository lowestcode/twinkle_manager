<template>
  <div class="label-position">
    <upload-image></upload-image>
  </div>
</template>

<script>
    import UploadImage from "./components/UploadImage";
    export default {
        name: "ImageView",
        components: {UploadImage}
    }
</script>

<style scoped>
  .label-position {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
