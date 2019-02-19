<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '珠峰'
    }
  },
  created() {
    console.log(123);
  }
}

</script>

<style lang="less">

</style>
