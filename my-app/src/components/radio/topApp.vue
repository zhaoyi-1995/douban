<template>
    <div class="topLoad">
        <span>{{ title }}</span>
        <button class="btn btn-success" id="btn1">极速下载</button>
        <button class="btn btn-default">打开</button>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .topLoad{
        padding:.15rem 0;
        width: 100%;
        background: url(../../../static/img/bg.jpg) no-repeat;
        background-size: 100%;
    }
    span{
        margin-left: .25rem;
        color: #42bd56;
        font-size: .16rem;
    }
    #btn1{
        margin: 0 .1rem 0 .6rem;
    }
    .btn-default{
        color: #42bd56;
        border-color:#42bd56; 
    }
</style>