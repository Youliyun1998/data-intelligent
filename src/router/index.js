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
    component: () => import('../views/Product/Index.vue'),
    children: [
      {
        path: '/product/SmartLampStandard',
        name: 'SmartLampStandard',
        component: () => import('../views/Product/SmartLampStandard.vue')
      },
      {
        path: '/product/SmartEnviroment',
        name: 'SmartEnviroment',
        component: () => import('../views/Product/SmartEnviroment.vue')
      }, {
        path: '/product/SmartPark',
        name: 'SmartPark',
        component: () => import('../views/Product/SmartPark.vue')
      }, {
        path: '/product/SmartTraval',
        name: 'SmartTraval',
        component: () => import('../views/Product/SmartTraval.vue')
      }, {
        path: '/product/SmartWuGuan',
        name: 'SmartWuGuan',
        component: () => import('../views/Product/SmartWuGuan.vue')
      }]
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
