import Vue from 'vue'
import Router from 'vue-router'
// 从 vue-router 引入 路由插件 名字自定义成了Router
// import Home from './views/Home.vue'
import home from './components/home/home.vue'
import list from './components/list/list.vue'
import collect from './components/collect/collect.vue'
import add from './components/add/add.vue'

// import qqq from './components/index.vue'

Vue.use(Router)
const routes = [
  {
    path: '/',
    //让 index.vue 加载了之后 再去加载 home
    component:() => import('./components/index.vue'),
    // component:qqq,
    redirect: '/home',
    children:[
      {
        path: '/home',
        component:home
      },
      {
        path: '/list',
        component: list
      },
      {
        path: '/collect',
        component: collect
      },
      {
        path: '/add',
        component: add
      }
    ]
  },
  {
    path:'/login',
    // 路由的懒加载
    // 只有走到 login路径 才会去加载 对应的组件
    component: () => import('./components/login/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path:'/*',
    redirect: '/home'
  }
]
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes 
})
