
function Banner(options) {
    this.defaultOptions = {
        el:$('.box').eq(0),
        url:'./data.json'
    };
    for(let k in options){
        if(options.hasOwnProperty(k)){
            this.defaultOptions[k] = options[k];
        }
    };
    // 获取元素
    this.$box = $(this.defaultOptions.el);
    this.$bannerBox = this.$box.find('.banner_box');
    this.$tipBox = this.$box.find('.tip_box');
    this.$lis = this.$bannerBox.children('li');
    this.$tips = this.$tipBox.children('li');
    this.$leftBtn = this.$box.find('.left_btn');
    this.$rightBtn = this.$box.find('.right_btn');

    this.index = 0; // 控制显示张数的索引    
    this.max = 0; // 控制索引的有边界
    this.timer = null;

    this.getData();
}
Banner.prototype = {
    constructor:Banner,
    getData:function getData() {
        $.ajax({
            type:'get',
            url:this.defaultOptions.url,
            data:{a:12},
            success:(data) => {
                this.giveHtml(data);
                this.max = data.length;
                this.autoPlay();
                this.$lis.eq(0).siblings().fadeOut().css({zIndex:1});// 刚开始进入时； 第一张到第二张 无效果
                this.eventBind();
            }
        })
    },
    giveHtml:function giveHtml(data){
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
        this.$bannerBox.html(str);
        this.$tipBox.html(str2);
        // 更新变量
        this.$lis = this.$bannerBox.children('li');
        this.$tips = this.$tipBox.children('li');
    },
    play:function play() {
        this.index++;
        if(this.index == this.max){
            //超出右边界
            this.index = 0;
        }
        if(this.index == -1){
            this.index = this.max - 1;
        }
        this.$lis.eq(this.index).css({zIndex:10}).fadeIn().siblings().fadeOut().css({zIndex:1});
        this.$tips.eq(this.index).addClass('current').siblings().removeClass('current');
    },
    autoPlay:function autoPlay(){
        this.timer = setInterval(() => {
            this.play();
        },1000)
    },
    eventBind:function eventBind() {
        let _this = this;
        this.$box.on('mouseenter', () => {
            clearInterval(this.timer);
        });
        this.$box.on('mouseleave',()=>{
            this.autoPlay();
        });
        this.$tips.on('mouseenter',function () {
            let n = $(this).index();
            _this.index = n - 1;
            _this.play();
        });
        this.$leftBtn.on('click',() => {
            this.index -= 2;
            this.play();
        });
        this.$rightBtn.on('click',() => {
            this.play();
        })
    }
}


let qqq =  new Banner({
    el:$('.box')[0],
    url:'./data.json'
});

new Banner({
    el:$('.box')[1],
    url:'./data.json'
});

new Banner({
    el:$('.box')[2],
    url:'./data.json'
});