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

// 新建项目，怎么使用 redux和rect-redux?
/*
    新建一个文件夹 名子一般是store
    文件夹里边必有一个index.js ==> 里边需要我们 
        引入 createStore、combineReducers、applyMiddleWare 这三个函数
        然后 装上 redux-thunk 插件；
        使用createStore创造 store ;需要我们传入 根reducer(是通过combineReducers产生的)
            createStore的第二个参数是 applyMiddleWare(reduxThunk)
            以后每新增一个reducer我们都要在这个文件里引入，然后放到combineReducers的参数中
    一般还会有actions.js reducers.js action-types.js 这个三个文件 
    
    创建完成之后，在根组件中，我们使用 Provider(react-redux提供的)组件抱住我们之前的内容
        然后给这个组件设置一个
        行内属性store 值是 通过createStore产生的那个对象(store文件夹-->index.js)
    
    对于所有的子组件 ；若需要用到 store中的数据；
        则需要使用connect(react-redux)处理当前组件    

*/

// 新建组件的时候 
/*
    一般情况下，需要我们去创造一个 对应reducer;然后把你创建的这个reducer引入到使用
        combineReducers的文件中，然后把引进来的文件加给combineReducers的实参；
        然后再去对应的添加一个actions文件
*/