import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

// 引入共用css
import './assets/common.css';
// 引入swiper的 css
import 'swiper/dist/css/swiper.min.css'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

// 前置守卫
router.beforeEach((to,from,next)=>{
  //该函数 在路由跳转之后，组件渲染（加载）之前；执行 
    // console.log(to,from,next)
    // if(to.path !=='/add'){
    //   next('/add')
    // }else{
    //   next()
    // }
    // next('/add')// 可以传参 参数决定下一步跳到哪个路径去
    document.title = to.meta.til || '书城'
    next();
})

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app2')
