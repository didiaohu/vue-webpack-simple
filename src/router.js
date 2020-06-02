/*
 * @Description: 路由
 * @Author: 胡博君
 * @Date: 2020-05-29 15:55:56
 * @LastEditors: 小小小
 * @LastEditTime: 2020-06-01 01:47:47
 */ 
import Home from './App.vue';
import Login from './view/login.vue';
import Register from './view/register.vue';

const routers = [{
  path: '/',
  component: Home,
  children: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
}]

export default routers;