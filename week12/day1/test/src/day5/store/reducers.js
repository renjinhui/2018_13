import * as types from './action-types'
export function countReducer(state,action) {
    if(!state){
        return {
            count:0
        }
    }
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                count:state.count+action.num
            }
            break;
        case types.REMOVE:
            return {
                ...state,
                count:state.count-action.num
            }    
        default:
            return state
            break;
    }
}
export function colorReducer(state={color:'green'},action) {
    switch (action.type) {
        case types.COLOR:
            return{
                ...state,
                color:action.col
            }
            break;
        default:
            return state
            break;
    }
}