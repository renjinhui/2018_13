<template>
    <div>
        <el-date-picker
            v-model="date"
            class='inp'
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        <el-input class='inp' v-model="name" placeholder="请输入姓名"></el-input>
        <el-input class='inp' v-model="province" placeholder="请输入省份"></el-input>
        <el-input class='inp' v-model="city" placeholder="请输入市区"></el-input>
        <el-input class='inp' v-model="address" placeholder="请输入地址"></el-input>
        <el-input class='inp' v-model="num" placeholder="请输入邮编"></el-input>
        <el-button class='inp' type="primary" @click='fn'>提交</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date:'',
                name: '',
                province:'',
                city:'',
                address:'',
                num:''
            }
        },
        methods: {
            fn() {
                // date: '2016-05-03',
                // name: '王小虎',
                // province: '上海',
                // city: '普陀区',
                // address: '上海市普陀区金沙江路 1518 弄',
                // zip: 200333 
                let obj = {
                    date:this.date,
                    name:this.name,
                    province:this.province,
                    city:this.city,
                    address:this.address,
                    zip:this.num
                }
                let p = this.$store.dispatch('addFn',obj);
                p.then((data)=>{
                    console.log(data)
                })
            }
        },
    }
</script>

<style scoped>
    .inp{
        width: 200px;
        display: block;
        margin: 10px auto;
    }
</style>