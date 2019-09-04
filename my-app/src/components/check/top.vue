<template>
    <div>
        <div class="topBox">
            <span @click="func()">关闭</span>
            <input type="text" @focus="funb()" @blur="funb()">
            <img src="../../../static/img/search.png" alt="" v-if='!bool' >
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            bool:false
        }
    },
   methods: {
       funb(){
           this.bool = !this.bool
       },
       func(){
           this.$router.go(-1);
       }
   },
}
</script>
<style scoped>
    .topBox{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        position: fixed;
        top: 0;
        border-bottom: 1px solid #f3f3f3
    }
    span{
        color: #42bd56;
        font-size: .16rem;
        margin-left: .25rem;
        margin-right: .2rem;
    }
    input{
        width: 70%;
        height: .3rem;
        border: none;
        background: #f3f3f3;
        border-radius: 2px;
    }
    img{
        width: .2rem;
        height: .2rem;
        position: absolute;
        left: 1.92rem;
        top: .15rem ;
    }
</style>