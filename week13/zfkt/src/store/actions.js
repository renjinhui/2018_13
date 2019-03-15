import axios from 'axios'
import * as types from './action-types'
axios.defaults.baseURL = 'http://localhost:8000'
export function getSwiperData() {
    return function(dispatch,getState){
        return axios.get('/getSliders')
        // axios.get('/getSliders').then((data)=>{
        //     dispatch({
        //         type:types.SWIPER,
        //         list:data.data
        //     })
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
}

// 获取首页列表数据
export function getHomeList(str){
    // debugger
        return function(dispatch,getState){
            // str: all react vue 
            // 接口这个有三类   /getLessons/all /getLessons/vue /getLessons/react
            // 
            // 根据 str 直接修改 store中的 titleCode
            // debugger;
            dispatch({
                type:types.HOMETITLE,
                code:str
            })

            let p = '/getLessons/'+str;
            str = p;
            axios.get(str).then((data)=>{
                dispatch({
                    type:types.HOMELIST,
                    list:data.data.list
                })
            })
        }
}
// 新加载 首页列表数据
export const add = (n) => (dispatch,getState) => {
    let state = getState();
    let {titleCode,list} = state.homeList;
    let url = '/getLessons/'+titleCode+'?offset='+n;
    // 根据n 来决定从多少条数据 开始 请求后台数据
    return axios.get(url).then((data2)=>{
        //data.data.list 是新获取的数据
        // debugger;
        dispatch({
            type:types.HOMELIST,
            list:list.concat(data2.data.list)
        })
        return data2.data.hasMore
    })
}

// 登录
export const login = (obj) => (dispatch,getState) => {
    
    return axios.post('/login',obj)
}
// 注册
export const reg = (obj) => (dispatch,getState) => {
    
    return axios.post('/reg',obj)
}