var box = document.querySelector('.box');// box 是可视窗口
var bannerBox = document.querySelector('.banner_box');// ul长条
var tipBox = document.getElementsByClassName('tip_box')[0];// 圆点所在盒子
var tips = tipBox.getElementsByTagName('li');// 要利用DOM映射
var leftBtn = document.querySelector('.left_btn');// 获取左按钮
var rightBtn = document.querySelector('.right_btn');// 获取右按钮

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','./data.json');// 第三个参数不写 默认是true；
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && /[23]\d{2}/.test(xhr.status)){
            // 代表请求成功
            var d = JSON.parse(xhr.responseText);
            giveHtml(d);// 把获取到的数据渲染到页面
        }
    }
    xhr.send();
}
getData();


//把数据渲染到DOM上
function giveHtml(data){
    data = data || [];
    max = data.length;
    var str = ''; // 拼接结构字符串的
    // 要给 data 补一条数据（跟第一条数据一样）
    data.push(data[0]);
    data.forEach((item)=>{
        str += `<li>
                    <img src="${item.src}" alt="">
                    <h2>${item.title}</h2>
                </li>`;
    })
    //bannerBox 的宽度 是由 图片的个数（data.length） 和每一个图片的宽度(box的宽度)决定的
    var w = utils.css(box,'width');
    var n = data.length;
    utils.css(bannerBox,'width',w*n);
    bannerBox.innerHTML = str;// 现在直接填内容 导致 所有的li向下排列

    // 给 tipBox赋元素
    var str2 = '';// 用来拼接小圆点
    // data 时已经增加过的数据
    for(var i = 0; i < data.length-1;i++){
        if(i==0){
            str2 += `<li class="tip current"></li>`;
            continue;
        }
        str2 += `<li class="tip"></li>`;
    }
    tipBox.innerHTML = str2;
    tipClick();
}

// 播放轮播图
// 设置一个全局变量 index; 用来控制显示哪一张；
var index = 0;//默认显示 第一张
var width = utils.css(box,'width');// 获取一屏的宽度
var max = 0;// index的最大值
function play() {
    index++;//进来 先把index + 1； 对应页面显示 是要让bannerBox 向左移动 index*width;
    
    if(index > max){// 右边界
        //将要显示 空白
        utils.css(bannerBox,'left',0);// 直接闪到第一张
        index = 1;
    }
    if(index == -1){// 左边界
        utils.css(bannerBox,'left',-max*width);// 直接闪到最后一张（伪第一张）
        index = max-1;
    }

    // 控制圆点 index 0 第一个点 ；。。。; index 4  第一个点
    if(index == max){
        // for(var i = 0; i < tips.length; i++){
        //     tips[i].className = 'tip'
        // }
        // tips[0].className = 'tip current';
        tipClass(0);
    }else{
        // for(var i = 0; i < tips.length; i++){
        //     tips[i].className = 'tip'
        // }
        // tips[index].className = 'tip current';
        tipClass(index);
    }
    
    // utils.css(bannerBox,'left',-index*width)
    animate(bannerBox,500,{left:-index*width})
}


// 处理 tip 类名
function tipClass(n){
    for(var i = 0; i < tips.length; i++){
        tips[i].className = 'tip'
    }
    tips[n].className = 'tip current';
}

var timer = setInterval(function(){
    play();
},2000);

box.onmouseenter = function () {
    // 鼠标进入时 清除定时器
    clearInterval(timer);
};
box.onmouseleave = function () {
    // 鼠标离开时 重启定时器
    timer = setInterval(function(){
        play();
    },2000);
};
leftBtn.onclick = function () {
    index -= 2;
    play();
};
rightBtn.onclick = function () {
    play();
}

//
function tipClick() {
    for(let i = 0; i < tips.length; i++){
        tips[i].onmouseenter = function () {
            index = i-1;
            console.log(i)
            play();
        }
    }
}



// setInterval(play,2000);

