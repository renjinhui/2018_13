// 想用 axios 则必须先把 axios 引入
import axios from 'axios';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c6d1bbe63a457265eb11535/myvue2';
export function getBanner({commit},option){
    //请求banner数据
    // http://www.baidu.com/bannerList
    axios.get('/bannerList').then((data)=>{
        option(data.data)
    })
}

// 请求热门图书数据
export function getHotbook({commit},option) {
    // http://163.com/hobook
    axios.get('/hotbook').then((data)=>{
        option && option(data.data)
    })
}

// 请求列表数据
export function getListData({commit},option) {
    axios.get('/listdata').then((data)=>{
        // option && option(data.data)
        // 请求成功之后  把data.data 赋给 state中的list
        commit('addList',data.data);
    })
}