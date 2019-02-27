import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('./components/home/index.vue'),
      redirect:'/table',
      children:[
        {
          path:'/table',
          component:()=>import('./components/home/table.vue')
        },
        {
          path:'/info',
          component:()=>import('./components/home/info.vue')
        }
      ]
    },
    {
      path:'/login',
      component: ()=>import('./components/login/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
