function on(ele,type,f) {
    // 约定 my 开头的都是自定义的事件； 其他的都是原生事件
    if(/^my/.test(type)){
        ele[type] = ele[type] || [];
        // 添加 f 事件之前 先查看事件池中是否已经存在该事件
        if(ele[type].indexOf(f) == -1){
            ele[type].push(f)
        }
    }else{
        //保证type 没有 on  ''
        type = type.replace(/^on/,'');
        ele.addEventListener(type,f,false);
    }
}

function fire(ele,type,options){
    ele[type] = ele[type] || [];
    // 循环对应的事件池； 让事件池中的所有事件都执行
    for(let i=0;i<ele[type].length;i++){
        ele[type][i] && ele[type][i].call(ele,options);
    }
    let arr = [];
    // ele[type].forEach((item) => {
    //     return item === null ? null : arr.push(item)
    // })
    // var fn = a => a;
    // var fn = (a) => {return a}

    // 写法 完全等价于上边的写法
    ele[type].forEach(item =>item === null ? null : arr.push(item));
    ele[type] = arr;
}

function off(ele,type,f){
    if(/^my/.test(type)){
        //自定义事件的移除
        ele[type] = ele[type].map((item)=>{
            return item === f ? null : item;
        })
    }else{
        type = type.replace(/^on/,'');
        ele.removeEventListener(type,f,false);
    }
}
