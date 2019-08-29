<template>
  <div class="label-position" style="text-align: center">
    <router-link to="/article/ArticleList">
      <el-button type="success" round>文章列表</el-button>
    </router-link>
    <router-link to="/article/articleEdit">
      <el-button type="success" round>编辑文章</el-button>
    </router-link>
    <router-link to="/article/articleView">
      <el-button type="success" round>显示文章</el-button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
  import ArticleList from "./components/ArticleList";
  import ArticleEdit from "./components/ArticleEdit";
  import ArticleView from "./components/ArticleView";
    export default {
        name: "Article",
        components: {
            ArticleList,
            ArticleEdit,
            ArticleView
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
