// 获取元素
var $bannerBox = $('.banner_box'),
    $box = $('.box'),
    $lis = $bannerBox.children('li'),
    $tipBox = $('.tip_box'),
    $leftBtn = $('.left_btn'),
    $rightBtn = $('.right_btn'),
    $tips = $tipBox.children('li');// JQ 获取DOM元素不存在DOM映射

var index = 0;// 用index控制要显示的索引
var max = 0; //   最大的index值 
var timer = null;


// 获取数据
$.ajax({
    type:'get', // 类型
    url:'./data.json', // 接口地址
    success:function (data) { // data 从后台获取的数据 JSON对象
        console.log(data);
        giveHtml(data);
        max = data.length;
        autoPlay();// 在数据渲染完成之后再去autoPlay
        eventBind();
        $lis.eq(0).css({zIndex:10}).fadeIn().siblings().fadeOut().css({zIndex:1});
    },
    error:function () {
        console.log(arguments);
    }
})

// 渲染 数据
function giveHtml(data){
    data = data || [];
    var str = '';
    var str2 = '';
    data.forEach((item,index)=>{
        str += `<li>
                    <img src="${item.src}" alt="">
                    <h2>${item.title}</h2>
                </li>`;
        if(index == 0){
            str2 += `<li class='tip current'></li>`
        }else{
            str2 += `<li class='tip'></li>`;
        }
    })
    $bannerBox.html(str);// 把str结构放到页面中
    $tipBox.html(str2);
    $lis = $bannerBox.children('li');// 重新获取新的 li 集合；
    $tips = $tipBox.children('li');// 重新获取新的tip
}

// 轮播函数

function play(){
    index++;
    console.log(index);
    if(index === max){
        // 当 index 超过最大索引时 让 index变成0；
        index = 0;
    }
    if(index == -1){
        index = max - 1;

    }
    $lis.eq(index).css({zIndex:10}).fadeIn().siblings().fadeOut().css({zIndex:1});
    $tips.eq(index).addClass('current').siblings().removeClass('current');
}

// 自动轮播
function autoPlay(){
    timer = setInterval(play,3000)
}

// 进入box 就要清除定时器
$box.on('mouseenter',function () {
    clearInterval(timer);
});
$box.mouseleave(function(){
    autoPlay();
})


// 点击左右按钮
$leftBtn.on('click',function(){
    // 左点
    if(index < 0)return;
    index -= 2;
    play();
});
$rightBtn.on('click',function () {
    play();
})

function eventBind() {
    $tips.on('click',function () {
        // this this的索引
        var n = $(this).index();
        index = n - 1;
        play();
    })
}




