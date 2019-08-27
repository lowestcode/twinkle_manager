<template>
  <div class="login-position">
    <LoginWindow></LoginWindow>
  </div>
</template>

<script>
  import LoginWindow from "./components/LoginWindow";
    export default {
        name: "Login",
        components:{
            LoginWindow
        },
        methods:{

        }
    }
</script>

<style scoped>
  .login-position {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

  }
</style>
