var $lyricBox = $('.lyricBox'),
    $footer = $('footer'),
    $audio = $('audio')[0],
    $playBtn = $('.playBtn'),
    $runTime = $('.runTime'),
    $endTime = $('.endTime'),
    $runLine = $('.runLine'),
    timer = null,
    $btnBox = $('.btnBox'),
    translateY = 0;


function initHeight() {
    var t_Height = $lyricBox.offset().top;
    var b_Height = $footer.offset().top;
    $lyricBox.css({height:b_Height-t_Height});
}
initHeight();


// 定义一个函数 去后台拿数据；
function getLyric(){
    return new Promise(function (resolve) {
        $.ajax({
            url:'./data.json',
            type:'get',
            success: resolve
        })
    })
}

//处理拿到的歌词
function changeLyric(data){
    let str = data.lyric;//拿到歌词字符串
    let ary = [];//存储 匹配到的内容
    let reg = /\[(\d{2})\:(\d{2})\.\d+\]([^\[]+)/g;
    str.replace(reg,function(){
        //循环匹配字符串；
        let arr = [];
        arr.push(arguments[1]);
        arr.push(arguments[2]);
        arr.push(arguments[3]);
        ary.push(arr);
    });
    return ary;
}

//把处理好的数据放到页面上 什么时候执行？数据处理好之后直接执行
function giveHTML(ary){
    //ary循环 拼接数据 扔到页面上
    let str = ``;
    ary.forEach((item)=>{
        //item == > 00 00 that girl
        str += `<p m="${item[0]}" s="${item[1]}">${item[2]}</p>`;
    });
    $lyricBox.find('.lyric').html(str);
}

//拿数据填到页面
getLyric().then(function (data) {
    let ary = changeLyric(data);
    return ary;
}).then(function (data) {
    giveHTML(data);
}).then(function () {
    audioPlay();
});


//把数据赛完页面之后在进行play
function audioPlay() {
    $audio.play();
    $audio.addEventListener('canplay',function () {
        //音频可以播放的时候要执行的动作
        changeState();
        setEndTime();
    },false);
}

function changeState() {
    if($playBtn.hasClass('move')){
        $playBtn.removeClass('move');
        $audio.pause();
        clearInterval(timer)
    }else {
        $playBtn.addClass('move');
        $audio.play();
        setTime();
    }
}

//按钮控制播放
$playBtn.on('singleTap',function () {
    changeState();
});


// $audio.currentTime;//当前播放时间
// $audio.duration;//音频的总时间
function computedTime(time) {
    //把时间处理成 00:00 这种格式
    let m = Math.floor(time/60);//分钟
    let s = Math.floor(time - m*60);//秒
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    return m+':'+s;
}
//处理前边的播放时间
function setTime(){
    timer = window.setInterval(function () {
        let runT = computedTime($audio.currentTime);
        let percent = $audio.currentTime/$audio.duration;
        $runLine.css({width:`${percent*100}%`});
        $runTime.html(runT);
        matchLyric();
        if($audio.ended){
            //说明音频播放完成
            clearInterval(timer);//清除定时器
            $playBtn.removeClass('move');//停止按钮的旋转
        }
    },200);//这个时间只要是小于1秒的就可以
}

//设置结束时间
function setEndTime() {
    let endT = computedTime($audio.duration);
    $endTime.html(endT);
}

//处理歌词的适应问题  根据音频的播放时间 找到对应播放时间的歌词 ，让对应的歌词加上active类就可以了
function matchLyric() {
    let curT = $audio.currentTime;
    let ary = computedTime(curT).split(':');
    let $p = $lyricBox.find('p');
    let $curEle = $p.filter(`[m="${ary[0]}"]`).filter(`[s="${ary[1]}"]`);
    if(!$curEle.length)return;
    if($curEle.hasClass('active'))return;
    $curEle.addClass('active').siblings().removeClass('active');
    if($curEle.index() > 3){
        moveLyric($curEle);
    }
}

//移动歌词
function moveLyric($curEle) {
    let h = $curEle.height();
    translateY -= h;
    // $lyricBox.find('.lyric')[0].style.transform = `translateY(${translateY}px)`
    $lyricBox.find('.lyric').css({transform:`translateY(${translateY}px)`});
}
