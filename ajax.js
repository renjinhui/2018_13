function ajax(options){
    let {
        url,
        type = 'get',// 给type一个备用值
        data,
        dataType = 'json',
        cache = true, // 默认走缓存 处理get的缓存问题
        async = true, // 默认异步
        success, // 成功的回调函数
        error // 失败的回调函数
    } = options;
    let isGet = null; // true  是get
    if(/^(get|head|delete)$/.test(type)){
        isGet = true;
    }else{
        isGet = false;
    }

    let str = '';// 存储拼接好的字符串
    for(let k in data){
        str += `${k}=${encodeURIComponent(data[k])}&`
    }
    str = str.replace(/(&)$/,'');// a=12&b=13

    // 若是 get
    if(isGet){
        let ary = url.split('?');
        if(ary[1] === ''){
            url += str; // 只一个问号的情况
        }else if(ary[1] === undefined){
            url += '?' + str;
        }else{
            // 有参数  有& 则直接拼上str  没有 & 拼一个&+str
            /&$/.test(ary[1]) ? url += str : url += '&'+str;
        }

        // 若不需要缓存  只要在url 后边拼接一个新的参数；
        if(!cache){
            // 不要缓存
            url += `_=${Date.now()}`
        }

    }
    var xhr = new XMLHttpRequest();
    xhr.open(type,url,async);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){// 保证请求已经完成
            if(/^(2\d{2}|304)$/.test(xhr.status)){
                let data = null;
                switch (dataType) {
                    case 'json':
                        try{
                            data = JSON.parse(xhr.responseText)
                        }catch(e){
                            data = xhr;
                        }
                        break;
                    case 'xml':
                        data = xhr.responseXML;
                        break;
                    default:
                        data = xhr;
                        break;
                }
                success && success(data) // 函数存在 再去执行
            }else{
                // 失败
                error && error(xhr);
            }
        }
    }
    xhr.send(str);
}
