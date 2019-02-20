<template>
    <div class='hotbook'>
        <h2>热门图书</h2>
        <ul>
            <li v-for="(item,i) in list">
                <img :src="item.img" alt="">
                <h3>{{item.title}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.$store.dispatch('getHotbook',(data)=>{
                this.list = data;
            })
        },
    }
</script>

<style scoped lang='less'>
    h2{
        font-size: 1rem;
        color: chocolate
    }
    .hotbook{
        ul{
            overflow: hidden;
            li{
                width: 5rem;
                float: left;
                h3{
                    font-size: 0.5rem;
                    text-align: center
                }
            }
        }
    }
</style>