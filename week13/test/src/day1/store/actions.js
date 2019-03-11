import {COLOR} from './action-types'
export const changeColor = (str)=>{
    // let obj = {}
    // setTimeout(() => {
    //     obj = {
    //         type:COLOR,
    //         color:str
    //     }
    // }, 2000);
    // return obj
    return {
        type:COLOR,
        color:str
    }
}
export function changeColor1(str) {
    return function(dispatch,getState){
        // dispatch,getState 就是 store里的 对应的那两个函数
        console.log(getState,dispatch);
        // 在这个函数体里 我们可以书写任何异步代码；
        setTimeout(() => {
            dispatch({
                type:COLOR,
                color:str
            })
        }, 2000);
    }
}