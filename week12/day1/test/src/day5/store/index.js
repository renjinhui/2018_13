import {createStore,combineReducers} from '../redux'
import {countReducer,colorReducer} from './reducers'


let rootReducer = combineReducers({countReducer,colorReducer})

export const store = createStore(rootReducer)