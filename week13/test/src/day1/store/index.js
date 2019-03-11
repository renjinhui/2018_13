// import {createStore,combineReducers} from '../../redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'// 可以使用异步的一个插件
import {colorReducer,countReducer} from './reducers'

let rootReducer = combineReducers({
    myCol:colorReducer,// store 中对应的属性名就是myCol
    myNum:countReducer
})
// let rootReducer = combineReducers({
//     colorReducer:colorReducer,
//     countReducer:countReducer
// })
let store = createStore(rootReducer,applyMiddleware(reduxThunk));


// export default {store}
// // 这种使用方法要通过 解构的方式 获取store  是不支持的
export default store