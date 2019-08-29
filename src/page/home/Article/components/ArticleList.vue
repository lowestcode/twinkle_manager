<template>
  <div class="div-border">
    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        type="index"
        width="50">
      </el-table-column>

      <el-table-column
        label="文章ID"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.articleId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="文章标题"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章内容"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章分类"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.labelId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章分类"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.labelId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="文章状态"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.state }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="点赞数"
        width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.thumbup }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="text-align: center; margin-top: 40px">
      <el-pagination
        :hide-on-single-page="hide_flag"
        layout="total,prev, pager, next"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ArticleList",
        data() {
            return {
                tableData: [],
                pageNum:1,
                pageSize:6,
                total:0,
                hide_flag:false

            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            findAllArticleList() {
              axios.get(`http://127.0.1:8888/twinkle/article/findAll/${this.pageNum}/${this.pageSize}`
              ).then((res)=>{
                  res = res.data;

                  if(this.total < this.pageSize){
                    this.hide_flag = true
                  }
                  if(res.code == 20000){
                      this.tableData = res.data.rows;
                      this.total = res.data.total;
                  }

              })
            },
            handleCurrentChange(val) {
                this.pageNum = val;
                this.findAllArticleList();
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
        computed : {

        },
        created () {
            this.findAllArticleList();
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
