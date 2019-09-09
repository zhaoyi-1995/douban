<template>
    <div>
        <div class="navbar navbar-default navbar-fixed-top" id="navBox">
            <div class="leftBox "> 
                <p class="navLogo" @click="goHome()">豆瓣</p>
            </div>
            <div class="rightBox"> 
                <router-link to="/movies">电影</router-link>
                <router-link to="/book">图书</router-link>
                <router-link to="/redio">广播</router-link>
                <router-link to="/group">小组</router-link>
                <router-link to="/checkout">
                    <img src="../../static/img/menu.png" class="checkMenu">
                </router-link>
            </div>
        </div>  
    </div>
</template>
<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/home');
        }
    }
}
</script>
<style scoped>
    #navBox{
        background: white;
        position: fixed;
        top: 0;
        width: 100%;
        height: .5rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gainsboro;
        z-index: 999999;
    }
    .navLogo{
        color: #05b512;
        font-size: .26rem;
        font-weight: 800;
        margin: 0;
    }
    .leftBox{
        width: 1rem;
        line-height: .49rem;
        padding-left: .05rem;
    }
     .rightBox{
        flex: 1;
        line-height: .49rem;
        display: flex;
        justify-content: space-around;
     }
    .rightBox a:nth-child(0){
        color: #2384e8;
    }
    .rightBox a:nth-child(1){
        color: #9f7860;
    }
    .rightBox a:nth-child(2){
        color: #e4a813;
    }
    .rightBox a:nth-child(3){
        color: #2ab8cc;
    }
    .checkMenu{
        margin-top: .16rem;
        width: .25rem;
        height: .25rem;
    }
</style>