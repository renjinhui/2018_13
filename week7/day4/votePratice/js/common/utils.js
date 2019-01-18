~(function(){
    //获取url地址参数部分
    let queryUrlPrams = function(url){
        let reg = /([^?=#&]+)=([^?=#&]+)/g;
        let obj = {};
        url.replace(reg,($0,$1,$2)=>{
            obj[$1] = $2;
        });
        return obj;
    }
    window.queryUrlParams = queryUrlPrams;
})();