<template>
    <div>
        <div class="loopBox">
            <h4>{{ arr[0].title }}的图片</h4>
            <div class="imgBox">
                <img :src="arr[0].images.small" v-for="(v,i) in 5" :key='i'>
            </div>
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
    .loopBox{
        padding-top: .15rem;
    }
    h4{
        font-size: .16rem;
        color: #aaaaaa;
    }
    .imgBox{
        display: flex;
        overflow: auto;
    }
    .imgBox img{
        width: 2.1rem;
        height: 1.4rem;
        margin: 0 .1rem;
    }
</style>