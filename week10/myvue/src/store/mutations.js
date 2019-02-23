export function addCount(state,option){
    state.count += option;
}
export function removeCount(state,option){
    state.count -= option;
}

// 添加收藏
export function addCollect(state,option){
    let bol = state.collectList.some(item=>{
        return item.bookId == option.bookId
    })
    if(bol)return;
    state.collectList.push(option)
}
// 删除收藏
export function removeCollect(state,option){
    state.collectList = state.collectList.filter(item=>{
        //筛选出bookId 不相同的项
        return item.bookId !== option.bookId
    })
}

// 给list 添加数据
export function addList(state,option){
    state.list.unshift(...option);
}

export function removeList(state,option){
    state.list = state.list.filter(item=>{
        return item.bookId != option.bookId
    })
}