// var winH = document.documentElement.clientHeight;
// var t_Height = $('.lyricBox').offset().top;
// var b_Height = $('footer').height();
//$('.lyricBox').css({height:winH-t_Height-b_Height});



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
    // var b_Height = $footer.height();
    // $lyricBox.css({height:winH-t_Height-b_Height});
}
initHeight();

$playBtn.on('click',function () {
    var $this = $(this);
    if($this.hasClass('move')){
        //让音频停止 清掉定时器
        $audio.pause();
        $this.removeClass('move');
        clearInterval(timer);
    }else {
        $audio.play();
        $this.addClass('move');
        setTime();
    }
});

$audio.play();
$audio.addEventListener('canplay',function () {
    //音频可以播放的时候要执行的动作
    let endT = computedTime($audio.duration);
    $endTime.html(endT);
    setTime();
},false);

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

//获取歌词
getLyric().then(function (data) {
    // console.log(data);
    let ary =  changeLyric(data);//处理歌词
    giveHTML(ary)//把数据放到页面上
});
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

//接下来我们处理 播放时间的问题  播放时间，总时间


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
        // console.dir($audio)
        // if($audio.duration == $audio.currentTime){
        if($audio.ended){
            //说明音频播放完成
            clearInterval(timer);//清除定时器
            $playBtn.removeClass('move');//停止按钮的旋转
        }
    },200);//这个时间只要是小于1秒的就可以
}
// function setCurrentTime() {
//     $audio.currentTime = 100;
// }
// $btnBox.on('click',function () {
//     setCurrentTime();
// })


//处理歌词的适应问题  根据音频的播放时间 找到对应播放时间的歌词 ，让对应的歌词加上active类就可以了
function matchLyric() {
    let curT = $audio.currentTime;
    //computedTime(curT) ==> 01:23
    let ary = computedTime(curT).split(':');
    //ary == [01,23];
    let $p = $lyricBox.find('p');
    let $curEle = $p.filter(`[m="${ary[0]}"]`).filter(`[s="${ary[1]}"]`);
    if(!$curEle.length)return;
    if($curEle.hasClass('active'))return;
    $curEle.addClass('active').siblings().removeClass('active');
    if($curEle.index() > 3){
        moveLyric($curEle);
    }
    // $p.removeClass('active');
    // for(let i = 0; i < $p.length; i++){
    //     // $p.eq(i).attr('m') == ary[0] && $p.eq(i).attr('s') == ary[1] ? $p.eq(i).addClass('active').siblings().removeClass('active') : null;
    //     // $p.eq(i).attr('m')+":"+$p.eq(i).attr('s') == computedTime(curT) ? $p.eq(i).addClass('active').siblings().removeClass('active') : null
    // }
}

function moveLyric($curEle) {
    let h = $curEle.height();
    translateY -= h;
    // $lyricBox.find('.lyric')[0].style.transform = `translateY(${translateY}px)`
    $lyricBox.find('.lyric').css({transform:`translateY(${translateY}px)`});
}



