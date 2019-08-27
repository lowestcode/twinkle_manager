<template>
  <div>
    <h1>Twinkle后端登录</h1>
    <div>
      用户名：<el-input v-model="userName" placeholder="请输入用户名" class="input-position"></el-input>
    </div>
    <div>
      密&nbsp;&nbsp;&nbsp;码：<el-input v-model="userPassword" placeholder="请输入密码" class="input-position"></el-input>
    </div>
    <el-button class="btn-position" @click="login">登录</el-button>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "LoginWindow",
        data () {
            return{
                userName:"",
                userPassword:""
            }
        },
        methods:{
            login () {
                axios.post("http://127.0.1:8888/twinkle/admin/login",{
                    "userName":this.userName,
                    "userPassword":this.userPassword
                }).then((res) => {
                    res = res.data;
                    if(res.code == 20000 && res != null){
                        let token = res.data.token;
                        let role = res.data.role;
                        let userName = res.data.user.userName;
                        localStorage.setItem("token",token);
                        localStorage.setItem("role",role);
                        localStorage.setItem("userName",userName);
                        this.$router.push('home')
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .input-position{
    width: 280px;
    margin-top: 20px;
  }

  .btn-position{
    margin-top: 20px;
  }
</style>
