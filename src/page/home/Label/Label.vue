<template>
  <div class="label-position">
    <label-add></label-add>
  </div>
</template>

<script>
  import LabelAdd from "./components/LabelAdd";
    export default {
        name: "Label",
        components:{
            LabelAdd
        }
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
