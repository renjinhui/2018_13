<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button type="danger" @click='fn(scope.row)' size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    created() {
      let p = this.$store.dispatch('getList');
    },
    methods: {
      handleClick(row) {
        console.log(row);// 点击的那一条数据 对象
        //跳转到 info 界面
        this.$router.push({path:'/info',query:row})
      },
      fn(row){
        // row 当前点击那一行的数据
        // 告诉后台删除这条数据
        // 调用 actions中的 deleteFn 即可
        this.$store.dispatch('deleteFn',row.id)
      }
    },

    data() {
      return {
        // tableData: []
      }
    },
    computed: {
      tableData(){
        return this.$store.state.list;
      }
    },
  }
</script>
<style lang="less" scoped>
    th.el_main{
        line-height: auto;
    }
</style>
