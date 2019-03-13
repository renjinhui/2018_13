import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import {colReducer} from './reducers'
let rootReducer = combineReducers({
    myCol:colReducer
})
const store = createStore(rootReducer,applyMiddleware(reduxThunk))
export default store