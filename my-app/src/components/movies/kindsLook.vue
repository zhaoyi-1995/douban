<template>
    <div>
        <h3>分类浏览</h3>
        <ul>
            <li v-for='(v,i) in arr' :key='i'>
                <a :href="v.ahref">{{ v.text }}</a>
                <span>&gt;</span>
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
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    li{
        text-indent: .2rem;
        height: .4rem;
        width: 48%;
        display: flex;
        justify-content: space-between;
        line-height: .4rem;
        border-top: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;
        
    }
    li a{
        color: #42bd56;
    }
    span{
        margin-right: .2rem;
        font-size: .18rem;
        color: #dfdfdf;
    }
</style>