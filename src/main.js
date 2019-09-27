import Vue from 'vue'
// IE兼容
import 'babel-polyfill'
// 重置全局样式
import 'assets/css/reset.css'
// 引入模板
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store/index.js'
// 引入存储组件
import VueCookie from 'vue-cookies'
// 全局事件
import utils from 'assets/js/utils.js'
// 全局引用自定义模板
import VueModule from 'assets/js/modules.js'
// 引入UI组件库
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.utils = utils
Vue.prototype.VueCookie = VueCookie

// 全局注册
Vue.use(VueModule)
Vue.use(iView)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
