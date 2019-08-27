<template>
  <div class="div-border">
    <div class="content-position" style="padding-top: 30px;">
      <h1>分类</h1>
    </div>
    <el-divider></el-divider>
    <div class="content-position">
      <span>添加分类:</span>
      <el-input v-model="labelName" placeholder="请输入分类名" class="input-width"></el-input>
      <el-button type="primary" @click="addLabel">添加</el-button>
      <el-divider></el-divider>
    </div>
    <div class="content-position">
      <span>删除分类:</span>
      <el-select v-model="deleteName" placeholder="请选择" class="input-width">
        <el-option
          v-for="item in labelList"
          :key="item.labelId"
          :label="item.labelName"
          :value="item.labelName">
        </el-option>
      </el-select>
      <el-button type="danger" @click="deleteLabel">删除</el-button>
      <el-divider></el-divider>
    </div>
    <div class="content-position">
      <span>分类列表:</span>
      <el-button type="success" @click="getLabelList1">刷新</el-button>
      <div style="margin-left: 100px;padding-bottom: 30px;">
        <el-table
          :data="labelList"
          v-loading="loading"
          stripe
          style="width: 100%">
          <el-table-column
            prop="labelId"
            label="分类ID"
            width="550px">
          </el-table-column>
          <el-table-column
            prop="labelName"
            label="分类名称"
            width="550px">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "LabelAdd",
        data () {
            return {
                labelName:"",
                labelList:[],
                deleteName:"",
                loading:false
            }
        },
        methods: {
            addLabel () {
                let token = "Bearer "+localStorage.getItem("token");
                axios.post("http://127.0.1:8888/twinkle/label",{
                    labelName: this.labelName,
                },
                {
                    headers:{'Authorization': token}
                }
                ).then((res) => {
                    res = res.data;
                    if (res.code == 20003) {
                        this.successMessage(res.message);
                        this.getLabelList();
                    }else{
                        this.errMessage(res.message);
                    }
                })
            },
            deleteLabel () {
                let token = "Bearer "+localStorage.getItem("token");
                axios.delete(`http://127.0.1:8888/twinkle/label/${this.deleteName}`,
                    {
                        headers:{'Authorization': token}
                    }
                ).then((res) => {
                    res = res.data;
                    if (res.code == 20005) {
                        this.successMessage(res.message);
                        this.deleteName = "";
                        this.getLabelList();
                    }else{
                        this.errMessage(res.message);
                    }
                })
            },
            getLabelList () {
                axios.get("http://127.0.1:8888/twinkle/label"
                ).then((res) => {
                    res = res.data.data;
                    this.labelList = res;
                    this.loading = false;

                })
            },
            getLabelList1 () {
                this.loading = true;

                this.getLabelList();
                this.successMessage("刷新成功")
            },
            successMessage (msg) {
                this.$message({
                    message: msg,
                    type: 'success'
                });
            },
            errMessage (msg) {
                this.$message.error(msg);
            }
        },
        mounted() {
            this.getLabelList();

        }
    }
</script>

<style scoped>
  .div-border{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 0 auto;
    width: 1300px;
  }
  .content-position{
    margin-left: 20px;
    margin-top: 30px;
  }
  .input-width{
    width: 300px
  }
</style>
