<template>
    <div class='list'>
        <div class="left">
            <img :src="data.bookCover" alt="">
        </div>
        <div class='right'>
            <h4>{{data.bookName}}</h4>
            <p class="desc">{{data.bookInfo}}</p>
            <div class="price">${{(data.bookPrice/100).toFixed(2)}}</div>
            <div class="btn_box">
                <button @click='f(data)'>删除</button>
                <button v-show='button_show' @click='f2(data)'>收藏</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props:['data','button_show'],
        props:{
            data:{
                default(){
                    return {}
                }
            },
            button_show:{
                default:true
            }
        },
        methods: {
            f(data){
                //点击删除执行的动作
                this.$emit('change',data)
            },
            f2(data){
                //点击收藏执行的动作
                this.$emit('collect',data)
            }
        },
    }
</script>

<style scoped lang='less'>
    .list{
        overflow: hidden;
        border-bottom: 1px solid #000;
        margin-bottom: 2px;
        .left{
            float: left;
            width: 2.8rem;
            img{
                width: 100%;
            }
        }
        .right{
            float: right;
            width: 7rem;
            h4{
                font-size: 0.8rem;
            }
            .desc{
                font-size: 0.6rem;
            }
            .price{
                color: red;
                font-size: 0.5rem;
            }
            .btn_box{
                button{
                    height: 0.8rem;
                    line-height: 0.8rem;
                    background: red;
                    border-radius:0.2rem;
                    padding: 0rem 0.5rem;
                    outline: none;
                    margin-right:0.3rem;
                    color:#fff;
                    border:none
                }
            }
        }
    }
</style>