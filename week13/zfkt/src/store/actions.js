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
    return function(dispatch,getState){
        // str: all react vue 
        // 接口这个有三类   /getLessons/all /getLessons/vue /getLessons/react
        // 
        // 根据 str 直接修改 store中的 titleCode
        dispatch({
            type:types.HOMETITLE,
            code:str
        })

        let p = '/getLessons/'+str;
        str = p;
        axios.get(str).then((data)=>{
            dispatch({
                type:types.HOMELIST,
                list:data.data
            })
        })
    }
}