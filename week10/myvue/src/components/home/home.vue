<template>
    <div class='home'>
        <my-title til='首页'></my-title>
        <div class='swiper_box'>
            <swiper :list="banner"></swiper>
        </div>
        <hotbook></hotbook>
        <!-- <pullto :top-load-method="refresh">
            <ul v-for="item in 10">
                <li>{{ item }}</li>
            </ul>
        </pullto> -->
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import swiper from '@/common/swiper.vue'
    import hotbook from './hotbook'
    import pullto from 'vue-pull-to'
    export default {
        components: {
            pullto,
            'my-title':title,
            swiper,
            hotbook
        },
        data() {
            return {
                banner: []
            }
        },
        methods: {
            refresh(loaded) {
                console.log(loaded)
                loaded('done')
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