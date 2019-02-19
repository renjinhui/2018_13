<template>
    <div>
        <router-link to='/home'>home</router-link>
        <router-link to='/add'>add</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(1)
        },
        mounted() {
            console.log(4)
        },
    }
</script>

<style scoped>

</style>