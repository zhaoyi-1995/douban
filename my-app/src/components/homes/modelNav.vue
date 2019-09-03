<template>
    <div class="navBox">
        <router-link to='/movies'>影院热映</router-link>
        <router-link to='/redio'>欧美新碟榜</router-link>
        <router-link to='/register'>注册账号</router-link>
        <router-link to='/login'>登录豆瓣</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .navBox{
      padding: .2rem;
    }  
    a{
        display: inline-block;
        width: 47%;
        line-height: .4rem;
        text-align: center;
        background-color: #f6f6f6;
        color: #494949;
        border-radius: .1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }
</style>