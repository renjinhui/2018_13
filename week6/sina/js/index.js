let $fixedTab = $('.fixed_tab'),
    $tabBox = $('.tab_box');

//实现轮播图
function banner() {
    new Swiper('.banner_box',{
        // autoplay:true , // 是否自动播放 默认false
        autoplay:{
            delay:2000, // 两张图片之间切换的等待时间
            disableOnInteraction:false // 用户操作swiper后 是否停止自动播放
        },
        loop: true, // 实现无缝滚动
        speed:200, // 图片滚动的速度
        pagination:{
            el:'.tip_box',
            type:'fraction',
            currentClass:'current',
            totalClass:'total'
        }
    })
    // 第一个参数是盒子元素的类名或者id
}
// banner();

// 获取数据 渲染到页面上
function getBanner() {
    $.ajax({
        url:'./data/banner.json',
        type:'get',
        data:{a:1,b:2},// 传给后端的数据
        success:function(data){
            console.log(data);
            bindBannerHtml(data);
            banner();
        },
        error:function(e){
            console.log(e)
        }
    })
}
// getBanner();
function getBanner2() {
    let p = new Promise(function(res,rej){
        $.ajax({
            url:'./data/banner.json',
            success:function(data){
                res(data)
            },
            error:function(err){
                rej(err);
            }
        })
    });
    return p
}
getBanner2().then(function(data){
    let a = data[0].img;
    return new Promise(function(res,rej){
        $.ajax({
            url:'./data/banner.json',
            data:{a:a},
            success:function(data){
                res(data)
            }
        })
    })

},function(){}).then((data)=>{
    console.log(data);
    bindBannerHtml(data);
    banner();
},()=>{});

// 把banner数据渲染到页面上
function bindBannerHtml(data) {
    data  = data || [];
    let str = '';// 存储拼接的字符串
    let $ul = $('.banner_box>.swiper-wrapper');
    data.forEach(item => {
        str += `<li class="swiper-slide">
                    <img src="${item.img}" alt="">
                    <h2>${item.title}</h2>
                </li>`
    });
    $ul.html(str);
}
function toTop() {
    let t = document.documentElement.scrollTop||document.body.scrollTop;
    // console.log($tabBox.offset(),t)
    if($tabBox.offset().top <= t){
        $fixedTab.removeClass('hide')
    }else{
        $fixedTab.addClass('hide')
    }
}
window.onscroll = function () {
    toTop()
}
// 先获取数据  然后再把数据渲染到页面上  渲染完成之后 再执行轮播图

// let p = new Promise(function(res,rej){
//     $.ajax({
//         url:'./data.json',
//         type: 'get',
//         success:function(data){
//             res(data) // 成功 执行 res函数
//         },
//         error:function(e){
//             rej(e) // 失败 执行  rej函数
//         }
//     })
// })
// p.then(function(d){
//     console.log(d)
// },function(err){
//     console.log(err);
// })



// let p2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res(1);
//     }, 3000);
//     rej(2);
// });
// p2.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err);
//     return 1111
// }).then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

// JS 刷新页面 
// window.location.href = window.location.href;
// window.location.reload();