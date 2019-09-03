<template>
    <div class="allBox">
        <img src="../../static/img/download.png" alt="">
        <div class="rightBox">
            <h3>豆瓣</h3>
            <p>我们的精神角落</p>
        </div>
        <p class="foot"><a href="#">去 App Store 免费下载 iOS 客户端</a></p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .allBox{
        text-align: center;
    }
    img{
        width: .8rem;
        height: .8rem;
        vertical-align: middle;
    }
    .rightBox{
        display: inline-block;
        vertical-align: middle;
        margin-left: .1rem;
    }
    h3{
        text-align: left;
        margin: 0;
    }
    .foot{
        padding: .3rem 0 .8rem;
    }
    .foot a{
        color: #42bd56;
    }
</style>