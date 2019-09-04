<template>
    <div>
        <p class="topp">
            <span class="titles">{{ title }}</span>
            <span @click="more()" class="moreMovies">更多</span>
        </p>
        <div class="listBox">
            <a v-for="(v,i) in arr" :key='i' :href="v.href" :style='{color:v.color }' v-if="!v.line">{{ v.title }}</a>
            <br v-else>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
    }
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
    .listBox{
        width: 100%;
        overflow: auto;
        white-space: nowrap;
    }
    a{
        display: inline-block;
        padding: .1rem;
        border:1px solid;
        margin: 0 .05rem .1rem;
        border-radius: .08rem;
    }
    
</style>