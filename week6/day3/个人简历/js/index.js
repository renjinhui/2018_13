let bell = $('#bell')[0],
    say = $('#say')[0],
    music = $('#music')[0];

// 管理第一个块  loading块
function loading() {
    // 进度条  整个盒子
    // 控制进度条的长度；根据已经加载的图片个数
    // 进度条加载完成之后 让盒子消失
    let $progressBar = $('.progressBar'),
        $loadingBox = $('.loadingBox');
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'
    ];
    // 数组里 都是本项目要用到的图片；
    // 计数器  onload;
    let n = 0;
    ary.forEach(item => {
        let temp = new Image(); // 创造一个临时图
        temp.src = './images/' + item; // 图的地址是用到的某张图
        temp.onload = load; //该图片加载完成之后
    })

    function load() {
        n++;
        if (n === ary.length) {
            // 所有图片加载完成
            $progressBar.css({
                width: '100%'
            })
            $loadingBox.css({
                opacity: 0
            });
            let timer = setTimeout(() => {
                clearTimeout(timer);
                $loadingBox.css({
                    display: 'none'
                });
                phone();
            }, 1800); // 让盒子变透明 一共用了 1s  +  0.8s;
        } else {
            $progressBar.css({
                width: n / ary.length * 100 + '%'
            })
        }
    }

}
loading();

// 管理第二个块  phoneBox 块
function phone() {
    bell.play();
    bell.addEventListener('canplay', function () {
        
        // 当音频可以播放时 做的事情
    }, false)
    // 点击接听  让 接听盒子消失； 挂机盒子升上来； 时间盒子显示
    let $phoneBox = $('.phoneBox'),
        $listenBox = $phoneBox.find('.listenBox'),
        $listenBtn = $listenBox.find('.listenBtn'),
        $noBox = $phoneBox.find('.no_listenBox'),
        $noBtn = $noBox.find('.no_listenBtn'),
        $timeBox = $phoneBox.find('.timeBox');
    let timer = null;    
    $listenBtn.tap(function () {
        $listenBox.hide();
        bell.pause(); // 让铃声停止
        say.play(); // 语音播放 
        $noBox.css({
            transform: 'translateY(0)'
        });
        $timeBox.show();
        
        say.oncanplay = function () {
            // 控制 音频播放时间 的显示
            timer = setInterval(() => {
                // 音频 currentTime 当前的播放时间
                //      ended 音频是否播放完毕 true 完毕
                //      paused 音频是否处于暂停状态  true  暂停
                let str = '00:' + (say.currentTime.toFixed(0)<10 ? '0'+say.currentTime.toFixed(0) : say.currentTime.toFixed(0));
                $timeBox.html(str);
                if(say.ended){
                    // 音频被暂停
                    clearInterval(timer);
                    next();// 直接走下一屏
                }
            }, 1000)
        }

    })

    // 点击挂机键 让整个盒子下移
    function next() {
        $phoneBox.css({
            transform: 'translateY(100%)'
        })
        msg();
    }
    $noBtn.tap(function(){
        next();
        clearInterval(timer);
        say.pause()// 音频暂停
    })
}

// 管理 消息模块
function msg() {
    music.play();// 背景音乐
    let $msgBox = $('.msgBox'),
        $ul = $msgBox.find('ul'),
        $lis = $msgBox.find('li'),
        $keyBoard = $msgBox.find('.keyBoard'),
        $textBox = $keyBoard.find('.textBox'),
        $btn = $keyBoard.find('.btn');
    // 设置每条； 用css先把他们都向下挪动 并且是透明的
    // 通过JS 设置，让他们回到原位即可
    let moveTimer = null;
    let n = 0; // 出现条的索引
    let h = 0; // ul 上移高度
    // 通过定时器 实现一条一条的出现
    function move() {
        moveTimer = setInterval(() => {
            // 判断所有条数是否已经走完
            if (n === $lis.length) {
                clearInterval(moveTimer);
                return;
            }

            $lis.eq(n).css({
                opacity: 1,
                transform: 'translateY(0)'
            })

            // 让键盘升上来
            if (n == 2) {
                clearInterval(moveTimer);
                $keyBoard.css({
                    transform: 'translateY(0)'
                })
                let timer = setTimeout(() => {
                    // 让键盘停稳之后再让字体出现
                    clearTimeout(timer);
                    input();
                }, 1600);

            }
            // 让整个ul 上移  每次移动 出现的li 的高度
            if (n >= 3) {
                h += $lis[n].offsetHeight; // 获取到的就是以px为单位的
                $ul.css({
                    transform: `translateY(-${h}px)`
                })
            }

            n++;
        }, 1000)
    }
    move();

    function input() {
        let str = '我们现在使用的是VUE和REACT';
        let str2 = ''; // 用存储拼接好的字符串
        let m = 0;
        let timer = null;
        timer = setInterval(() => {
            if (m === str.length) {
                // 字体输入完成
                $btn.show();
                clearInterval(timer);
                return;
            }
            str2 += str[m];
            m++;
            $textBox.html(str2);
        }, 100)
    }
    $btn.tap(function () {
        // 点击发送按钮 重新定时器；发送该条数据
        $lis.eq(n).css({
            opacity: 1,
            transform: 'translateY(0)'
        })

        // 让发送当前这条数据时  ul上移
        h += $lis[n].offsetHeight;
        $ul.css({
            transform: `translateY(-${h}px)`
        })
        n++;


        $textBox.html(''); // 清空输入框；
        // 让键盘下去
        $keyBoard.css({
            transform: 'translateY(3.7rem)',
            transition: 'all 0.6s' // 去除 过渡效果的延迟效应
        })

        move(); // 重启定时器
    })
}
// msg();