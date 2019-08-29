<template>
  <div class="div-border">
  <div class="markdown-body" v-html="content"></div>
    <mavon-editor ref="editor" :ishljs = "true" v-model="markContent"/>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
        name: "Article",
        data () {
            return{
                content:"",
                markContent:""
            }
        },
        methods : {
            findOnArticle() {
                axios.get(`http://127.0.1:8888/twinkle/article/searchOne`,{
                    params:{
                        articleId: "1167062789043290112"
                    }
                    }
                ).then((res)=>{
                    res = res.data;
                    console.log(res);
                    if(res.code == 20000){
                        this.content = res.data.content;
                        this.markContent = res.data.markDown;
                    }

                })
            },
        },
        mounted() {
            this.findOnArticle();
        }
    }
</script>

<style scoped>
  .div-border{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0 auto;
    width: 1450px;
    padding: 40px;
  }

</style>
