<template>
    <div class="allBoxs" @click="func()">
        <div class="leftBox">
            <img src="../../../static/img/2.jpg" alt="">
            <span>请先登录</span>
        </div>
        <div class="rightBox">
            <img src="../../../static/img/4.png" alt="">
            <img src="../../../static/img/5.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        func(){
            this.$router.push('/login')
        }
    },
}
</script>
<style scoped>
    .allBoxs{
        display: flex;
        justify-content: space-between;
        padding: .15rem .1rem;
        border-bottom: 2px solid #e8e8e8;
    }
    .leftBox img{
        border-radius: 50%;
        margin-right: .15rem;
        vertical-align: middle;
    }
    .leftBox span{
        font-size: .14rem;
        color:#aaaaaa;
    }
    .rightBox img{
        width: .25rem;
        height: .2rem;
        margin: .12rem .15rem 0 0;
    }
</style>