import Vue from 'vue'
import App from './App.vue'
import '_u/rem'
import router from './router'
import '_a/css/reset.css'
import '_a/css/valiable.less'
import iView from 'iview'
// 引用fullpage 插件
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
