import * as types from './action-types'

const colObj = {
    color:'green'
}
export const colReducer = (state=colObj,action)=>{
    switch (action.type) {
        case types.COLOR:
            return {
                color:action.color
            }
            break;
    
        default:
            return{
                ...state
            }
            break;
    }
}
export const swiperReducer = (state={
    swiperList:[]
},action)=>{
    switch (action.type) {
        case types.SWIPER:
            return{
                swiperList: action.list
            }
            break;
        default:
            return{
                ...state
            }
            break;
    }
}

// 首页列表数据相关
const homeListData = {
    titleCode:'all', //用来控制显示的 哪类数据（all react vue）
    list:[]
}
export const homeList = (state=homeListData,action)=>{
    switch (action.type) {
        case types.HOMELIST:
            return{
                ...state,
                list:action.list
            }
            break;
        case types.HOMETITLE:
            return{
                ...state,
                titleCode:action.code
            }    
        default:
            return{
                ...state
            }
            break;
    }
}