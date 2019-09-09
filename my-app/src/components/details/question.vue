<template>
    <div>
        <h4>关于{{ arr[0].title }}的问答</h4>
        <ul>
            <li v-for="(v,i) in 5" :key='i'>
                <p>大家为什么对国产片这么苛刻？</p>
                <span>35回答</span>
            </li>
        </ul>
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
    h4{
        text-align: left;
        font-size: .16rem;
        color: #aaaaaa;
    }
    li p{
        color: #494949;
        font-size: .16rem;
        text-indent: .15rem;
    }
    li span{
        color: #42bd56;
        font-size: .14rem;
        display: inline-block;
        text-indent: .15rem;
        margin-bottom: .2rem;
    }
</style>