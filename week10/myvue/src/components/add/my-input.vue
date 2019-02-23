<template>
    <div class='myInput'>
        <h3>{{text}}</h3>
        <!-- <h3><slot></slot></h3> -->
        <input  
            :value='value' 
            @input='$emit("input",$event.target.value)'
            :type="type||'text'"
        >
    </div>
</template>

<script>
    export default {
        props:['value',"text",'type']
    }
</script>

<style scoped lang='less'>
    .myInput{
        width: 90%;
        margin: auto;
        text-align: center;
        h3{
            text-align: center;
            font-size: 0.8rem;
        }
        input{
            outline: none;
            border-radius: 0.2rem;
            border: 1px solid #ccc;
            padding: 0.2rem;
            font-size: 0.5rem
        }
    }
</style>