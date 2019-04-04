// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import 'style/icon-font.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //router: router
  components: { App },
  template: '<App/>'
})

/* 路由就是根据网址不同，返回不同的内容给用户 */
