export function createStore(reducer){
    let state = null;
    const listener = [];// 事件池
    const subscribe = (f)=>listener.push(f);// 这个函数负责向 事件池中添加事件
    const getState = ()=>{return state};
    let oldState = state;
    const dispatch = (action) => {
        oldState = state;
        state = reducer(state,action);
        listener.forEach(item=>item&&item(oldState));// 更新完数据之后； 重新渲染
    }
    dispatch({});// 为了初始化数据
    return{
        getState,
        dispatch,
        subscribe
    }
}
