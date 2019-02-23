<template>
    <div class='add'>
        <my-title til='添加页'>
            
        </my-title>
        <myInput v-model='name' text='书的名字'></myInput>
        <myInput v-model='info' text='书的信息'></myInput>
        <myInput v-model='price' text='书的价格' type='number'></myInput>
        <myInput v-model='cover' text='书的封面'></myInput>
        <button @click="add">添加</button>
    </div>
</template>
<script>
    import title from '@/common/title.vue'
    import myInput from './my-input.vue'
    export default {
        data() {
            return {
                name: '',info:'',price:'',cover:''
            }
        },
        components:{
            'my-title':title,
            myInput
        },
        methods: {
            add(){
                // 修改vuex中的数据 list

                // bookCover:"https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg"
                // bookId:7
                // bookInfo:"与React|Angular三分天下 "
                // bookName:"Vue.js权威指南"
                // bookPrice:888
                let obj = {
                    // bookCover:this.cover
                    bookCover:"https://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg",
                    bookId:Math.random(),
                    bookInfo:this.info,
                    bookName:this.name,
                    bookPrice:this.price
                }
                this.$store.commit("addList",[obj]);
                this.$router.push('/list');
            }
        },
    }
</script>

<style scoped>
    .add{
        padding: 1.5rem 0 2rem 0;
    }
    button{
        width:60%;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        background: #ccc;
        outline: none;
        font-size: 1rem;
        margin: 0.5rem auto;
        display: block;
    }
</style>