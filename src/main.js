/*
 * @Description: 入口文件
 * @Author: 胡博君
 * @Date: 2020-05-27 17:38:20
 * @LastEditors: 胡博君
 * @LastEditTime: 2020-05-29 17:55:05
 */ 
import Vue from 'vue';
import routes from './router.js'
import VueRouter from 'vue-router';
import './style/common.scss';
Vue.use(VueRouter);

// 实例化VueRouter
const router = new VueRouter({
  saveScrollPosition: true,
  hashbang: false,
  mode: 'history', //开始HTML5模式 去掉url中#
  routes
});

new Vue({
  router
}).$mount('#app');