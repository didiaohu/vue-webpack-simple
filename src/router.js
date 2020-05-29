/*
 * @Description: 路由
 * @Author: 胡博君
 * @Date: 2020-05-29 15:55:56
 * @LastEditors: 胡博君
 * @LastEditTime: 2020-05-29 16:00:56
 */ 
import Home from './App.vue';
import Login from './view/login.vue';

const routers = [{
  path: '/',
  component: Home,
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
}]

export default routers;