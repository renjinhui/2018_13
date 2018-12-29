var utils = {
    toAry:function (obj) {
        var ary = [];
        try{
            ary = [].slice.call(obj);
        }catch(e){
            for(var i=0; i < obj.length; i++){
                ary.push(obj[i]);
            }
        }
        return ary
    },
    toJSON:function (str) {
        if("JSON" in window){
            return JSON.parse(str)
        }
        return eval('('+str+')')
        // return eval(`(${str})`)
    },
    toJSON2:function(str){
        try{
            return JSON.parse(str)
        }catch(e){
            return eval(`(${str})`)
        }
    },
    offset(ele){
        var left = ele.offsetLeft,
            top = ele.offsetTop,
            parent = ele.offsetParent;
        while (parent && parent.tagName.toUpperCase() != 'BODY') {
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }   
        return {
            left,top
        } 
    },
    win(attr,value){// 获取窗口的一些属性
        // 两个参数就是设置  一个参数就是获取
        if(value === undefined){
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    },
    getCss(ele,attr){
        //获取元素样式值
        var value = null;
        if('getComputedStyle' in window){
            // window下 有该属性
            value = window.getComputedStyle(ele,null)[attr];
        }else{
            // filter:alpha(opacity=100)
            if(attr === 'opacity'){
                value = ele.currentStyle['filter'].match(/\d+/)[0]/100;
            }else{
                value = ele.currentStyle[attr];
            }
        }
        // 10px  20rem  30em 
        var reg = /^-?(\d+|[1-9])\d+(\.\d+)?(px|rem|em|pt)?$/ 
        if(reg.test(value)){
            value = parseFloat(value);
        }
        return value;
    },
    setCss(ele,attr,value){
        if(/width|height|margin|padding|left|top|right|bottom/.test(attr)){
            value = parseFloat(value)+'px';
        }
        ele.style[attr] = value;
    },
    setCssBatch(ele,obj){
        if(Object.prototype.toString.call(obj)!=='[object Object]')return;
        for(var k in obj){
            if(obj.hasOwnProperty(k)){
                utils.setCss(ele,k,obj[k])
            }
        }
    },
    css(){
        var fn = utils.setCss;
        if(arguments.length == 2 && typeof arguments[1] === 'string'){
            fn = utils.getCss;
        }else if(arguments.length == 2){
            fn = utils.setCssBatch;
        }
        return fn.apply(utils,arguments);
    }
}