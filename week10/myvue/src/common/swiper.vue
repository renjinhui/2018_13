<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,i) in list' :key='i'>
                <img :src="item.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
// 引入 swiper 插件
import swiper from 'swiper'
export default {
    props:['list'],
    mounted(){
        // 初始化swiper时 我们需要让DOM渲染完成
        
    },
    updated() {
        new swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
};
</script>

<style lang='less'>
.swiper-container{
    height: 100%;
    .swiper-pagination-bullet{
        background:#fff;
        opacity: 1;
    }
    .swiper-pagination-bullet-active{
        background: rgb(55, 199, 243);
    }
}
img{
    width: 100%;
    height: 100%;
}
</style>