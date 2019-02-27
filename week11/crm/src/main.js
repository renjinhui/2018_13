import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 插件 element-ui
import eleUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 这种引入 css 的方式 只使用引入本地文件

import './assets/common.css' // 引入共用css

Vue.use(eleUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
