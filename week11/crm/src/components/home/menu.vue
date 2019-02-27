<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64">
      <el-menu-item index="2">
        <router-link to='/table' class='el_link' active-class='current'>
            <i class="el-icon-menu"></i>
            <span>人物列表</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
          <router-link to='/info' class='el_link' active-class='current'>
            <i class="el-icon-document"></i>
            <span>人物管理</span>
          </router-link>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang='less'>
    .el_link{
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: aliceblue;
    }
    .el_link.current{
        i{
            color: rgb(235, 169, 84);
        }
        color: rgb(235, 169, 84);
        /* background: rgb(94, 85, 85); */
    }
    .el-menu-vertical-demo{
        width: 200px;
        height: 100%;
    }
</style>