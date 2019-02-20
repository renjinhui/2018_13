<template>
    <div class='list'>
        <my-title til='列表页'></my-title>
        <div class="lit_box">
            <item 
                v-for='item in list' 
                :key='item.bookId' 
                :data='item'
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
                list: []
            }
        },
        created() {
            this.$store.dispatch('getListData',(data)=>{
                this.list = data;
            })
        },
        components:{
            'my-title':title,
            item
        }
    }
</script>

<style scoped lang='less'>
    .lit_box{
        margin: 1.5rem 0 2rem 0;
    }
</style>