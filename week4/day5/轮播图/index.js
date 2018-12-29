// 获取元素
let $box = $('.box'),
    $bannerBox = $('.banner_box'),
    $tipBox = $('.tip_box'),
    $lis = $bannerBox.children('li'),
    $tips = $tipBox.children('li'),
    $leftBtn = $box.find('.left_btn'),
    $rightBtn = $box.find('.right_btn');

let index = 0, // 控制显示张数的索引    
    max = 0, // 控制索引的有边界
    timer = null;

//获取数据
function getData() {
    $.ajax({
        type:'get',
        url:'./data.json',
        data:{a:12},
        success:function (data) {
            giveHtml(data);
            max = data.length;
            autoPlay();
            $lis.eq(0).siblings().fadeOut().css({zIndex:1});// 刚开始进入时； 第一张到第二张 无效果
            eventBind();
        }
    })
}
getData();

// 渲染数据
function giveHtml(data){
    data = data || [];
    let str = '',str2 = '';
    data.forEach((item,index)=>{
        str += `<li>
                    <img src="${item.src}" alt="">
                    <h2>${item.title}</h2>
                </li>`;
        if(index == 0){
            str2 += `<li class='tip current'></li>`;
        }else{
            str2 += `<li class='tip'></li>`;
        }  
    })
    $bannerBox.html(str);
    $tipBox.html(str2);
    // 更新变量
    $lis = $bannerBox.children('li');
    $tips = $tipBox.children('li');
}

// 轮播图播放
function play() {
    index++;
    if(index == max){
        //超出右边界
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
    timer = setInterval(function () {
        play();
    },1000)
}

// 事件绑定
function eventBind() {
    $box.on('mouseenter',function () {
        clearInterval(timer);
    });
    $box.on('mouseleave',function(){
        autoPlay();
    });
    $tips.on('mouseenter',function () {
        let n = $(this).index();
        index = n - 1;
        play();
    });
    $leftBtn.on('click',function () {
        index -= 2;
        play();
    });
    $rightBtn.on('click',function () {
        play();
    })
}
