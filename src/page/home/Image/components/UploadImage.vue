<template>
  <div class="div-border">
    <h1 style="text-align: center; margin-bottom: 10px;">图片附件库</h1>
    <el-upload
      action="http://127.0.1:8888/twinkle/image"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :before-remove="beforeRemove"
      :file-list="fileList"
      name="image"
      :on-success="getSuccess"
      :on-error="getError"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "UploadImage",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                fileList:[]
            };
        },
        methods: {
            handleRemove(file, fileList) {
                axios.delete(`http://127.0.1:8888/twinkle/image/${ file.name }`
                ).then((res) => {
                    res = res.data;
                    if(res.code == 20005){
                        this.successMsg("删除成功")
                    }else {
                        this.errMsg("删除失败")
                    }
                })
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            getImgList () {
                axios.get("http://127.0.1:8888/twinkle/image"
                ).then((res) => {
                    res = res.data.data;
                    this.fileList = res;
                })
            },
            getError () {
                this.errMsg("文件大小不符合要求!!!")
            },
            getSuccess () {
                this.successMsg("上传图片成功")
            },
            successMsg (msg) {
                this.$notify({
                    title: '成功',
                    message: msg,
                    type: 'success'
                });
            },
            errMsg (msg) {
                this.$notify.error({
                    title: '错误',
                    message: msg
                });
            }
        },
        mounted() {
            this.getImgList()
        }

    }
</script>

<style scoped>
  .div-border{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0 auto;
    width: 1300px;
    padding: 40px;
  }
</style>
