/*
* 导航的逻辑：
* 1.先判断下是否登录,根据是否登录显示对应的信息
* 2.对导航的按钮绑定点击事件，点击时跳转到对应的页面还需要携带当前页面的url地址信息
* */
let navRender =(function(){
    let $mainBox = $(".mainBox"),
        $headerBox = $(".headerBox"),
        $navBox = null,
        $navAs = null;
    let bindA = function(e){
        let target = e.target;
        if(target.nodeName === "A"){
            let targetHtml = target.innerHTML;
            switch (targetHtml){
                case  "登录":
                    window.location.href = `login.html?formUrl= ${encodeURIComponent(window.location.href)}`;
                    break;
                case  "注册":
                    window.location.href = `register.html?formUrl = ${encodeURIComponent(window.location.href)}`;
                    break;
                case "退出":
                    axios.get("/exitLogin");
                    window.location.href = window.location.href;//刷新当前页
                    break;
            }
        }
    }
    function init(){
        $mainBox.tap(bindA);
        //检测下是否登录
        axios.get("/checkLogin").then(res=>{
            if(res.code ===0){
                $headerBox.prepend(`<nav class="navBox">
                        <a href="index.html">首页</a>
                        <a href="javascript:;">登录</a>
                        <a href="javascript:;">注册</a>
                </nav>`);
            }
            $navBox = $(".navBox"),
            $navAs = $navBox.children("a");
            return res.code;
        }).then(code=>{
            if(code === 0) return;
            if(code ===1){
               axios.get("/getUser").then(res=>{
                   $navBox.hide();
                   $headerBox.prepend(`<nav class="navBox"><a href="index.html">首页</a><a href="detail.html">${res.data.name}</a><a href="javascript:;">退出</a></nav>`);
               })
            }
        });
    }
    return {
        init:init
    }
})();
navRender.init();