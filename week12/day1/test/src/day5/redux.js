export function createStore(reducer){
    let state;
    const listener = [];// 事件池
    const subscribe = (f)=>{
        listener.push(f);
        return ()=>{
            // 移除 事件池中 对应的事件
            // 把f从事件池中移除
            listener = listener.filter(item=> {
                return item !== f
            })
        }
    }// 这个函数负责向 事件池中添加事件
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
export function combineReducers(reducers) {
    // reducers是一个对象 里边包含了我们所有的 reducer
    //{countReducer:countReducer,colorReducer:colorReducer}
    return (state={},action)=>{
        let obj = {};
        for(let k in reducers){
            obj[k] = reducers[k](state[k],action)
        }
        
        return obj
    }
}

//