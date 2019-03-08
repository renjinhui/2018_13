
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

function createStore(reducer){
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
function reducer(state,action) {
    if(!state){
        return {
            title:{
                text:'标题',
                color:"red"
            },
            content:{
                text:"内容",
                color:'blue'
            }
        }
    }
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
const store = createStore(reducer);
store.subscribe((old)=>{renderApp(store.getState(),old)});
renderApp(store.getState())
store.dispatch({type:"UPDATE_CONTENT",text:"sefgsdfgsfgsdggfgsg"});

