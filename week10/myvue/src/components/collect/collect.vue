<template>
    <div class='collect'>
        <my-title til='收藏页'></my-title>
        <item 
            v-for='item in data' 
            :data='item' 
            :key="item.bookId"
            :button_show='false'
            @change="fn"
        ></item>
        收藏页
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import item from '../list/item.vue'
    export default {
        components:{
            'my-title':title,
            item
        },
        computed: {
            data(){
                // data 依赖于vuex中的 collectList
                return this.$store.state.collectList
            }
        },
        methods: {
            fn(data){
                // 收藏页的删除
                this.$store.commit('removeCollect',data);
            }
        },
    }
</script>

<style scoped>
    .collect{
        padding: 1.5rem 0 2rem 0;
    }
</style>