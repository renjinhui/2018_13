<template>
    <div>
        <div class='content_box'>
            <router-view></router-view>
        </div>
        <div class="footer_btn">
            <router-link to='/home'>
                <div class='iconfont icon-home'></div>
                首页
            </router-link>
            <router-link to='/list'>
                <div class='iconfont icon-list'></div>
                列表页
            </router-link>
            <router-link to='/collect'>
                <div class='iconfont icon-collect'></div>
                收藏页
            </router-link>
            <router-link to='/add'>
                <div class='iconfont icon-addstyle2'></div>
                添加
            </router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.content_box{
  font-size: 1rem;
}
.footer_btn {
  position: fixed;
  background: #fff;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 0.7rem;
  display: flex;
  border-top:1px solid #000;
  box-shadow: 1px 0 16px 0px #000;
  height: 2rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
  a {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: rgb(116, 118, 248);
    div{
        font-size: 0.6rem;
    }
  }
  a.current{
    color: red;
  }
}
</style>