<template>
    <div class='home'>
        <my-title til='首页'></my-title>
        <div class='swiper_box'>
            <swiper :list="banner"></swiper>
        </div>
        <hotbook></hotbook>
        首页
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import swiper from '@/common/swiper.vue'
    import hotbook from './hotbook'
    export default {
        data() {
            return {
                banner: []
            }
        },
        created() {
            let q = this.$store.dispatch('getBanner',(data)=>{
                console.log(data);
                this.banner = data;
            });
            // q.then((data)=>{
            //     console.log(data);
            // })
        },
        components:{
            'my-title':title,
            swiper,
            hotbook
        }
    }
</script>

<style scoped lang='less'>
    .home{
        padding-bottom: 2rem;
    }
    .swiper_box{
        width: 100%;
        height: 4rem;
        background: #ccc;
        margin-top:1.5rem;
    }
</style>