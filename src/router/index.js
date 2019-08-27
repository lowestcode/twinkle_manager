import Vue from 'vue'
import Router from 'vue-router'
import Login from "../page/login/Login";
import Home from "../page/home/Home";
import Label from "../page/home/Label/Label";
import ImageView from "../page/home/Image/ImageView";
import Comment from "../page/home/Comment/Comment";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // children:[
      //   {
      //     path:'label',
      //     name: 'label',
      //     component: ()=>import('@/page/home/Label/Label')
      //   }
      // ]
    },
    {
      path: '/label',
      name: 'Label',
      component: Label
    },
    {
      path: '/image',
      name: 'ImageView',
      component: ImageView
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
  ]
})
