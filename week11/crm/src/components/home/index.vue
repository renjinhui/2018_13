<template>
<div class="container_box">
    <el-container class='box'>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px" class='menu_box'>
                <div class='inner_box'>
                    <myMenu></myMenu>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer>footer</el-footer>
    </el-container>
</div>    
</template>

<script>
    import myMenu from './menu.vue'
    export default {
        components:{
            myMenu
        }
    }
</script>

<style scoped>
.menu_box{
    overflow:hidden
}
.inner_box{
    width: 240px;
    height: 100%;
    overflow-x:hidden 
}
.box,.container_box{
    height: 100%;
    position: relative
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #7fb0e0;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>