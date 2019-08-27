<template>
  <div class="label-position">
    <comment-list></comment-list>
  </div>
</template>

<script>
    import CommentList from "./components/CommentList";
    export default {
        name: "Comment",
        components:{
            CommentList
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
