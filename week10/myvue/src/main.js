import Vue from 'vue'
import App from './App.vue'
import router123 from './router'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  router:router123,
  store,
  render: h => h(App)
}).$mount('#app')
