import Vue from 'vue'
import App from './App.vue'
import '_u/rem'
import router from './router'
import '_a/css/reset.css'
import '_a/css/valiable.less'
import iView from 'iview'

import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
