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
banner();