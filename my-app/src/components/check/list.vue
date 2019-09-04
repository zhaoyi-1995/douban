<template>
    <div>
        <ul>
            <li v-for='(v,i) in arr' :key='i'>
                <router-link :to='v.href' :style='{color:v.col}' class="bigger">{{ v.tit }}</router-link>
                <router-link :to='v.href'>{{ v.jieshi }}</router-link>
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
        width: 33%;
        margin: .2rem 0 .2rem;
    }
    a{
        display: block;
        text-align: center;
        color: #999999;
        font-size: .12rem;
    }
    .bigger{
        text-align: center;
        font-size: .22rem;
    }
</style>