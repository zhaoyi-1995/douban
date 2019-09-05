<template>
    <div>
        <p class="topp">
            <span class="titles">{{ title }}</span>
            <span @click="more()" class="moreMovies">更多</span>
        </p>
        <div class="imgBox">
            <img :src="arr[index].images.small" alt="">
            <div class="textBox">
                <div class="titleBox">
                    <h3>{{ arr[index].title }}</h3>
                    <span>{{ arr[index].price }}</span>
                </div>
                <p>{{ arr[index].author_intro }} </p>
                <span class="next" @click="func()">换一个&gt;&gt;</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            index:0
        }
    },
    methods: {
        func(){
            if(this.index == this.arr.length){
                this.index = 0;
            }else{
                this.index++;
            }
        }
    },
    props:{
        title:{
            type:String,
            required:true
        },
        arr:{
            type:Array,
            required:true
        }
    },
}
</script>
<style scoped>
     .topp{
        padding-right: .2rem;
        display: flex;
        justify-content: space-between;
        line-height: .2rem;
        margin-bottom: .15rem;
    }
    .titles{
        font-size: .18rem;
        color: #111111;
    }
    .moreMovies{
        color: #42bd56;
        font-size:.15rem ;
    }
    .imgBox{
        padding: .1rem .08rem;
        display: flex;
    }
    img{
        width: 1.2rem;
        height: 1.6rem;
    }
    .textBox{
        padding-left: .1rem;
        
    }
    .titleBox{
        padding-top: .15rem;
        display: flex;
        justify-content: space-between;
    }
    .titleBox h3{
        width: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        color: #494949;
        font-size: .16rem;
    }
    .titleBox span{
        font-size: .14rem;
        color: #e76648;
    }
    .textBox p{
        text-indent: .28rem;
        margin-top: .15rem;
        color: #9b9b9b;
        font-size: .14rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
    .next{
        display: block;
        text-align: center;
        font-size: .14rem;
        color: #9b9b9b;
    }
</style>