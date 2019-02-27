import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    count(state,option){

    },
    changeList(state,option){
      state.list = option;
    }
  },
  actions: {
    addFn({commit},option){
      // option  是使用时传递的一个对象
      return axios.post('/add',option)
    },
    getList({commit},option){
      // 从后台获取列表数据
      return axios.get('/list').then((data)=>{
        console.log(data);// data.data是后台给的数据
        commit('changeList',data.data)
      })
    }
  }
})
