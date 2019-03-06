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
    },
    deleteList(state,option){
      let ary = state.list.filter(item=>item.id != option);
      state.list = ary;
    }
  },
  actions: {
    addFn({commit},option){
      // option  是使用时传递的一个对象
      return axios.post('/add2',option)
    },
    getList({commit},option){
      // 从后台获取列表数据
      return axios.get('/list').then((data)=>{
        console.log(data);// data.data是后台给的数据
        commit('changeList',data.data)
      })
    },
    deleteFn({commit},option){
      axios.get('/delete',{params:{id:option}}).then((data)=>{
        // 若成功 data.data 是 ‘success’；
        if(data.data ==='success'){
          // 从state.list中把这条数据删除
          
          commit('deleteList',option)// option 就是那条数据的ID
        }
      })
    }
  }
})
