<template>
    <div>
        <div class="topBox">
            <div class="leftBox">
                <h4>{{ arr[0].title }}</h4>
                <div class="comment">
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template=' { value } '>
                    </el-rate>
                    <span class="peopleNum">{{ arr[0].collect_count }}人评价</span>
                </div>
                <p class="casts">
                    {{  arr[0].year }}&nbsp;/
                    <span v-for="(v,i) in arr[0].genres" :key='i'>{{ v }}&nbsp;/</span>
                    <span v-for="(v,i) in arr[0].casts" :key='i'>{{ v.name }}&nbsp;/</span>
                    {{  arr[0].directors[0].name }} 
                </p>
                <a href="#" class="app">用APP查看人影资料</a>
            </div>
            <img src="../../../static/img/1.jpg" alt="">
        </div>
        <div class="choice">
            <span>想看</span><span>看过</span>
        </div>
        <h4 class="description">{{ arr[0].title }}的简介</h4>
        <div class="textsBox">
            <p class="texts">
                上赛季的老鹰赢了29场比赛，比上一个赛季多赢了5场比赛，年轻的特雷-杨整个赛季的表现给人们留下了极其深刻的印象。虽然在最终的最佳新秀的评选中败给了表现如日中天的东契奇，但是也让人们对他的未来充满了无限的幻想和期待。
            </p>
            <span>(展开)</span>
        </div>
        <h4 class="moreKinds">查看更多相关分类</h4>
        <span v-for="(v,i) in arr[0].genres" :key='i' class="plot">{{ v }}</span>
    </div>
</template>
<script>
export default {
    data() {
      return {
        value: 3.7,
        average:0
      }
    },
    props:{
        arr:{
            type:Array,
            required:true
        }
    },
    beforeMount() {
        console.log(this.arr)
        // this.average = this.arr[0].rating.average
        // console.log(this.average)
    },
}
</script>
<style scoped>
    .topBox{
        padding-top:.2rem;
        display: flex;
        justify-content: space-between;
    }
    .topBox img{
        width: 1rem;
        height: 1.5rem;
    }
    .leftBox h4{
        color: #272727;
        font-size: .18rem;
        font-weight: 900;
    }
    .comment{
        display: flex;
    }
    /* .el-rate__item{
        width: 20px;
    }
    element.style{
        color: #aaaaaa;
    } */
    .peopleNum{
        color: #aaaaaa;
        font-size: .1rem;
        line-height: .2rem;
        margin-left:.04rem;
    }
    .casts{
        padding: .1rem 0;
        margin: 0;
        font-size: .12rem;
        color:#494949;
    }
    .casts span{
        margin-right: .1rem; 
    }
    .app{
        font-size: .14rem;
        color:#42bd56;
    }
    .choice{
        padding: .15rem;
    }
    .choice{
        display: flex;
        justify-content: space-between;
    }
    .choice span{
        display: inline-block;
        width: 48%;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        border: 1px solid #ffb712;
        color: #ffb712;
        border-radius: .04rem;
    }
    .description,.moreKinds{
        font-size: .16rem;
        color: #aaaaaa;
    }
    .texts{
        margin: 0;
        text-indent: .26rem;
        font-size:.14rem ;
        color:#494949 ;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
    .textsBox span{
        display: block;
        text-align: center;
        font-size:.16rem ;
        color:#42bd56 ;
    }
    .plot{
        margin: 0 .15rem;
        display: inline-block;
        padding: .08rem .25rem;
        border-radius: .15rem;
        background: #f5f5f5;
        text-align: center;
        font-size: .16rem;
        color:#494948 ;
    }
</style>