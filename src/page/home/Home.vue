<template>
  <div class="btn-position">
    <el-row>
      <router-link to="/label">
        <el-button round >文章分类</el-button>
      </router-link>
      <router-link to="/image">
        <el-button type="primary" round >图片上传</el-button>
      </router-link>
      <router-link to="/comment">
        <el-button type="success" round>文章评论</el-button>
      </router-link>
      <router-link to="/article">
        <el-button type="danger" round>文章列表</el-button>
      </router-link>

    </el-row>
  </div>
</template>

<script>
  import Label from "./Label/Label";
    export default {
        name: "Home.vue",
    }
</script>

<style scoped>
  .btn-position {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
