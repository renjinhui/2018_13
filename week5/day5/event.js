function on(ele,type,f){
    if(/^my/.test(type)){
        ele[type] = ele[type] || [];// 保证 对应的事件池是个数组
        if(ele[type].indexOf(f)==-1){
            ele[type].push(f);// 判断 事件是否已经存在；若不存在  再去添加
        }
    }else{
        type = type.replace(/^on/,'');// 把传进来的事件中 on 去掉
        ele.addEventListener(type,f,false);
    }
}

function fire(ele,type) {
    ele[type] = ele[type] || [];
    for(let i = 0 ; i < ele[type].length; i++){
        // 循环事件池 让池子里所有的事件都执行； 
        // 并且保证函数执行时 里边的this 指向 ele
        ele[type][i] && ele[type][i].call(ele)
    }

    // 把事件池中的 null 清除
    let arr = [];
    ele[type].forEach(item=> item === null ? null : arr.push(item));
    ele[type] = arr;
}

function off(ele,type,f){
    if(/^my/.test(type)){
        // 若是要移除的事件  则 直接把这一项替换成 null;
        ele[type] = ele[type].map(item=>item===f ? null : item)
    }else{
        type = type.replace(/^on/,'');
        ele.removeEventListener(type,f,false);
    }
}

on(box,'myZIndex',f);
on(document,'click',f2);