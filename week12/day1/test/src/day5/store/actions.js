import * as types from './action-types'
export function add(n) {
    return {
        type:types.ADD,
        num:n
    }
}
export function remove(n) {
    return {
        type:types.REMOVE,
        num:n
    }
}
export function change(str) {
    return{
        type:types.COLOR,
        col:str
    }
}