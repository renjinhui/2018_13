import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import {colReducer,swiperReducer,homeList} from './reducers'
let rootReducer = combineReducers({
    myCol:colReducer,
    swiperData:swiperReducer,
    homeList
})
const store = createStore(rootReducer,applyMiddleware(reduxThunk))
export default store