import * as types from './action-types'
export function colorReducer(state,action) {
    if(!state){
        return{
            color:'green'
        }
    }
    switch (action.type) {
        case types.COLOR:
            return{
                ...state,
                color:action.color
            }
            break;
    
        default:
            return state
            break;
    }
}
export function countReducer(state,action) {
    if(!state){
        return{
            count:0
        }
    }
    switch (action.type) {
        case types.COUNT:
            return{
                ...state,
                count:action.count
            }
            break;
    
        default:
            return state
            break;
    }
}