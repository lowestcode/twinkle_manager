<template>
  <div class="div-border">
    <div class="content-position">
      <span>添加评论:</span>
      <el-input
        autosize
        placeholder="请输入昵称"
        v-model="nickname">
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        style="width: 500px;"
        :autosize="{ minRows: 2, maxRows: 9}"
        placeholder="请输入评论内容"
        v-model="content">
      </el-input>
      <el-button type="success" style="position: absolute;left: 850px;top: 195px;" @click="addComment">提交</el-button>
    </div>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="评论ID"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章ID"
        width="150"
        style="text-align: center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.articleId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章名称"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.articleName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="评论人"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.nickname }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="评论内容"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="评论时间"
        width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>


      <el-table-column
        label="评论审核状态"
        width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.state == 1" style="color: #67C23A;">已通过</span>
          <span v-if="scope.row.state == 0" style="color: #F56C6C;">待审核</span>
        </template>
      </el-table-column>


      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini" v-if="scope.row.state == 0"
            type="success"
            @click="handlePass(scope.$index, scope.row)">审核通过</el-button>
          <el-button
            size="mini" v-if="scope.row.state == 1"
            type="warning"
            @click="removeState(scope.$index, scope.row)">撤下评论</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "CommentList",
        data() {
            return {
                tableData: [],
                nickname: "",
                content: ""
            }
        },
        methods: {
            handlePass(index, row) {
                axios.put(`http://127.0.1:8888/twinkle/comment/${row._id}/1`,{}
                ).then((res) => {
                    res = res.data;
                    if(res.code == 20000){
                        this.successMsg(res.message)
                        this.getCommentList();
                    }else{
                        this.errMsg("更新失败")
                    }

                })
            },
            removeState(index, row) {
                axios.put(`http://127.0.1:8888/twinkle/comment/${row._id}/0`,{}
                ).then((res) => {
                    res = res.data;
                    if(res.code == 20000){
                        this.successMsg(res.message)
                        this.getCommentList();
                    }else{
                        this.errMsg("更新失败")
                    }

                })
            },
            handleDelete(index, row) {
                axios.delete(`http://127.0.1:8888/twinkle/comment/${row._id}`
                ).then((res) => {
                    res = res.data;
                    console.log(res)
                    if(res.code == 20000){
                        this.successMsg(res.message)
                        this.getCommentList();
                    }else{
                        this.errMsg("删除失败")
                    }

                });
                console.log(index, row._id);
            },
            getCommentList () {
                axios.get("http://127.0.1:8888/twinkle/comment"
                ).then((res) => {
                    res = res.data;
                    if(res.code == 20000){
                        this.tableData = res.data;
                    }

                })
            },
            addComment () {
                //todo 文章id,文章名字写死，只是测试接口，后期删除
                axios.post(`http://127.0.1:8888/twinkle/comment`,{
                          "articleId":"1164827396168237052",
                          "articleName":"哈哈哈",
                          "content":this.content,
                          "nickname":this.nickname
                    }
                ).then((res) => {
                    res = res.data;
                    if(res.code == 20000){
                        this.successMsg(res.message)
                        this.getCommentList();
                    }else{
                        this.errMsg("添加失败")
                    }

                })
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
        computed :{
          getState (state) {
              if(state == 1){
                  return true
              }
              return false
          }
        },
        mounted() {
            this.getCommentList()
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
  .content-position{
    width: 300px;
  }
</style>
