<template>
    <div>
        <div class="commentBox">
            <img src="../../../static/img/download.png" alt="download" class="leftImg">
            <p><b>豆瓣</b><span>写了日记</span></p>
            <p><span class="time">2017-03-01  19:30:41</span></p>
            <div class="texts">
                <h4>豆瓣App 4.12.0 主要更新</h4>
                <p class="artical">
                 - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                </p>
            </div>
            <div class="bottomBox">
                <div class="shar">
                    <img src="../../../static/img/zan.png" alt="">
                    <span>4</span>
                </div >
                <div class="shar">
                    <img src="../../../static/img/session.png" alt="">
                    <span>2</span>
                </div>
                <div class="shar">
                    <img src="../../../static/img/shar.png" alt="">
                    <span>1</span>
                </div>
                <div class="right">
                    <img src="../../../static/img/more.png" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .commentBox{
        padding: 0 0 .28rem  .6rem;
        margin: .24rem;
        border-bottom: 1px solid #e8e8e8;
        position: relative;
    }
    .time{
        color:#aaaaaa;
        font-size: .14rem;
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
        width: 100%;
        height: 1.2rem;
        border:1px solid #d8d8d8;
        border-radius: .05rem;    
    }
    h4{
        text-align: center;
        font-size: .18rem;
        color: #494949;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .artical{
        font-size: .12rem;
        color:#aaaaaa;
    }
    .bottomBox{
        overflow: hidden;
        margin-top: .2rem;
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
</style>