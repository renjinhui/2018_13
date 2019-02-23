<template>
    <div class='list'>
        <my-title til='列表页'></my-title>
        <div class="lit_box">
            <item 
                v-for='item in myyy' 
                :key='item.bookId' 
                :data='item'
                @change='fn'
                @collect='fn2'
            ></item>
        </div>
        列表页
    </div>
</template>

<script>
    import title from '@/common/title.vue'
    import item from './item'
    export default {
        data() {
            return {
                // list: []
            }
        },
        created() {
            // this.$store.dispatch('getListData',(data)=>{
            //     this.list = data;
            // })
            console.log(this.$store.state.list);
            if(this.$store.state.list.length == 0){
                // 长度为0 说明是第一次进来；需要从后台获取数据
                this.$store.dispatch('getListData')
            }
        },
        components:{
            'my-title':title,
            item
        },
        methods: {
            fn(d){
                // 要从vuex中把对应的数据删掉
                // d 就是要删除的数据
                console.log(d)
                this.$store.commit('removeList',d);
            },
            fn2(data){
                //收藏
                //data 是我们要放到 state中的collectList中的数据 
                console.log(222);
                this.$store.commit('addCollect',data);
            }
        },
        computed: {
            myyy(){
                return this.$store.state.list;
            }
        },
    }
</script>

<style scoped lang='less'>
    .lit_box{
        margin: 1.5rem 0 2rem 0;
    }
</style>