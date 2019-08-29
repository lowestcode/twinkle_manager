<template>
  <div class="div-border">
  <div id="main">
      <mavon-editor ref="editor" :ishljs = "true" @imgAdd="imgAdd" @imgDel="imgDel" v-model="value"/>
    </div>
    <el-button type="danger" @click="addArticle">提交</el-button>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "ArticleEdit",
        data () {
            return{
                value:""
            }
        },
        methods:{
            addArticle () {
                let mavonHtml = this.$refs.editor.d_render;
                axios.post("http://127.0.1:8888/twinkle/article",{
                    labelId: "1",
                    articleTag:"2",
                    title:"asdasd",
                    content:mavonHtml,
                    markDown:this.value
                    }
                ).then((res) => {
                    res = res.data;
                    console.log(res)
                })
            },
            imgAdd (filename,file) {
                var formdata = new FormData();
                formdata.append('image', file);
                axios({
                    url: 'http://127.0.1:8888/twinkle/image',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((res) => {
                    res = res.data;
                    if(res.code == 20003){
                        let url = res.data.url
                        // 找到图片的位置,并更换他
                        this.$refs.editor.$img2Url(filename, url);
                    }
                })
            },
            imgDel (filename) {
                // filename是图片的信息，需要图片的id，url的最后是图片的id，所有截取
                let imgId = filename[0].substr(-19)
                axios.delete(`http://127.0.1:8888/twinkle/image/${ imgId }`
                ).then((res) => {
                    res = res.data;
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
  #main{
    width: 1400px;
    margin: 0 auto;
  }
  .div-border{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0 auto;
    width: 1450px;
    padding: 40px;
  }
</style>
