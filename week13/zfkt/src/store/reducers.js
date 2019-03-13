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