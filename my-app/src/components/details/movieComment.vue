<template>
    <div>
        <div class="commentsBox">
            <h4 class="title">{{ arr[0].title }}的短评论</h4>
            <div class="commentBox" v-for="(v,i) in 5" :key='i'>
                <img src="../../../static/img/download.png" alt="download" class="leftImg">
                <p class="user"><b>豆瓣</b></p>
                <p><span class="time">2017-03-01  19:30:41</span></p>
                <div class="texts">
                    <p class="artical">
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                    </p>
                </div>
                <div class="bottomBox">
                    <div class="shar">
                        <img src="../../../static/img/zan.png" alt="">
                        <span>4</span>
                    </div >
                    <div class="right">
                        <img src="../../../static/img/more.png" alt="">
                    </div>
                </div>
            </div>
            <p class="moreComment">显示更多评论</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .title{
        text-align: left;
        font-size: .16rem;
        color: #aaaaaa;
    }
    .commentsBox{
        padding-top: .15rem;
    }
     .commentBox{
        padding: 0 0 .1rem  .5rem;
        margin-bottom: .2rem;
        border-bottom: 1px solid #e8e8e8;
        position: relative;
    }
    .user{
        padding-top:.1rem;
        text-indent: .15rem;
    }
    .time{
        color:#aaaaaa;
        display: inline-block;
        font-size: .14rem;
        text-indent: .15rem;
    }
    .leftImg{
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
    }
    p{
        margin: 0;
    }
    .texts{
        padding: .1rem .08rem;
        margin-top: .05rem;
        width: 100%;
        height: .7rem;
        border-radius: .05rem;    
    }
    
    .artical{
        font-size: .12rem;
        color:#aaaaaa;
    }
    .bottomBox{
        overflow: hidden;
    }
    .shar{
        float: left;
        margin-right: .15rem;
    }
    .shar img{
        vertical-align: middle;
    }
    .shar span{
        vertical-align: middle;
        color: #d5d5d5;
    }
    .right{
        float: right;
    }
    .moreComment{
        text-align: center;
        color:#42bd56 ;
        font-size:.14rem ;
        padding-bottom: .2rem;
    }
</style>