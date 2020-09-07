// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter)
// 配置
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/serve',
    name: 'serve',
    component: () => import('../views/Serve.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/example',
    name: 'example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]
const router = new VueRouter({ routes })
export default router
