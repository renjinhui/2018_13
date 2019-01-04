function on(ele,type,f) {
    if(/^my\w+/.test(type)){
        ele[type] = ele[type] || [];
        if(ele[type].indexOf(f)==-1){
            ele[type].push(f);
        }
    }else{
        type = type.replace(/on/g,'')
        ele.addEventListener(type,f,false);
    }
    
}
function fire(ele,type) {
    ele[type] = ele[type] || [];
    for(let i =0; i < ele[type].length;i++){
        ele[type][i] && ele[type][i].call(ele)
    }
    let arr = [];
    ele[type].map((item)=>{
        item === null ? null : arr.push(item)
    })
    ele[type] = arr;
}

function off(ele,type,f){
    if(/^my\w+/.test(type)){
        ele[type] = ele[type] || [];
        ele[type] = ele[type].map((item)=>{
            return item !==f ? item : null
        });
    }else{
        type = type.replace(/on/g,'');
        ele.removeEventListener(type,f,false);
    }
    
}
