// 管理第一个块  loading块
function loading() {
    // 进度条  整个盒子
    // 控制进度条的长度；根据已经加载的图片个数
    // 进度条加载完成之后 让盒子消失
    let $progressBar = $('.progressBar'),
        $loadingBox = $('.loadingBox');
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'];
    // 数组里 都是本项目要用到的图片；
    // 计数器  onload;
    let n = 0;
    ary.forEach(item=>{
        let temp = new Image();// 创造一个临时图
        temp.src = './images/'+item;// 图的地址是用到的某张图
        temp.onload = load;//该图片加载完成之后
    })
    function load() {
        n++;
        if(n === ary.length){
            // 所有图片加载完成
            $progressBar.css({
                width:'100%'
            })
            $loadingBox.css({
                opacity: 0
            });
            let timer = setTimeout(() => {
                clearTimeout(timer);
                $loadingBox.css({
                    display:'none'
                });
                phone();
            }, 1800);// 让盒子变透明 一共用了 1s  +  0.8s;
        }else{
            $progressBar.css({
                width: n/ary.length*100 + '%'
            })
        }
    }

}
loading();

// 管理第二个块  phoneBox 块
function phone() {
    // 点击接听  让 接听盒子消失； 挂机盒子升上来； 时间盒子显示
    let $phoneBox = $('.phoneBox'),
        $listenBox = $phoneBox.find('.listenBox'),
        $listenBtn = $listenBox.find('.listenBtn'),
        $noBox = $phoneBox.find('.no_listenBox'),
        $noBtn = $noBox.find('.no_listenBtn'),
        $timeBox = $phoneBox.find('.timeBox');
        $listenBtn.tap(function () {
            $listenBox.hide();
            $noBox.css({
                transform:'translateY(0)'
            });
            $timeBox.show();
        })

        // 点击挂机键 让整个盒子下移
        $noBtn.tap(function(){
            $phoneBox.css({
                transform:'translateY(100%)'
            })
        })
}