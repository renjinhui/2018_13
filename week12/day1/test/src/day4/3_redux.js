const appState = {
    title:{
        text:'标题',
        color:"red"
    },
    content:{
        text:"内容",
        color:'blue'
    }
}

function renderTitle(title,oldTitle={}) {
    if(title===oldTitle)return;
    console.log('title')
    let ele = document.getElementById('title');
    ele.style.color = title.color;
    ele.innerHTML = title.text;
}
function renderContent(content,oldContent={}) {
    if(content===oldContent)return;
    console.log('content')
    let ele = document.getElementById('content');
    ele.style.color = content.color;
    ele.innerHTML = content.text;
}

function renderApp(appState,oldAppState={}) {
    if(appState === oldAppState)return;
    renderTitle(appState.title,oldAppState.title);
    renderContent(appState.content,oldAppState.content)
}
// renderApp(appState)

// function dispatch(action) {
//     switch (action.type) {
//         case "UPDATE_TITLE":
//             appState.title.text = action.text
//             break;
//         case "UPDATE_CONTENT":
//             appState.content.text = action.text
//         default:
//             break;
//     }
// }
// dispatch({type:"UPDATE_TITLE",text:"改过的title"})
// dispatch({type:"UPDATE_CONTENT",text:"sefgsdfgsfgsdggfgsg"})
// renderApp(appState);

// 想把 appState 和  dispatch 合并在一块 我们创造一个 createStore函数

function createStore(state,stateChanger){
    const listener = [];// 事件池
    const subscribe = (f)=>listener.push(f);// 这个函数负责向 事件池中添加事件
    const getState = ()=>{return state};
    let oldState = state;
    const dispatch = (action) => {
        oldState = state;
        state = stateChanger(state,action);
        listener.forEach(item=>item&&item(oldState));// 更新完数据之后； 重新渲染
    }
    return{
        getState,
        dispatch,
        subscribe
    }
}
function stateChanger(state,action) {
    switch (action.type) {
        case "UPDATE_TITLE":
            // state.title.text = action.text
            return {
                ...state,
                title:{
                    ...state.title,
                    text:action.text,
                }
            }
            break;
        case "UPDATE_CONTENT":
            // state.content.text = action.text;
            return {
                ...state,
                content:{
                    ...state.content,
                    text:action.text
                }
            }
            break;
        default:
            return state
            break;
    }
}
const store = createStore(appState,stateChanger);
store.subscribe((old)=>{renderApp(store.getState(),old)});// 向事件池添加事件
renderApp(store.getState())// 初始化数据
// store.dispatch({type:"UPDATE_TITLE",text:"改过的title"});
store.dispatch({type:"UPDATE_CONTENT",text:"sefgsdfgsfgsdggfgsg"});
// renderApp(store.getState())// 修改完数据之后 重新渲染一下
// 让数据修改完成之后 自动更新视图；
// 我们优化 createStore函数； 添加一个事件池；
// 在createStore执行之后， 我们把要做的渲染函数 添加到事件池中

