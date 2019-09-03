<template>
    <div >
        <div v-for='(v,i) in arr' :key='i' class="allBox">
            <div class="topCenter">
            <div class="leftBox">
                    <h3>{{ arrTitle[i] }}</h3>
                    <p>{{ arrContent[i] }}</p>
                </div>
                <div class="rightBox">
                    <img :src="v.image" alt="">
                </div>
            </div>
            <div class="bottomCenter">
                <span>{{ v.subcategory_name }}</span>
                <span>{{ v.owner.name }}</span>
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
        },
        arrContent:{
            type:Array,
            required:true
        },
        arrTitle:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .allBox{
        padding-top: 0;
        padding-left:.25rem;
        padding-right:.25rem;
        margin-top: .2rem;
        border-bottom: 1px solid #e3e3e3;
    }
    .topCenter,.bottomCenter{
        width: 100%;
        display: flex;
    }
    .bottomCenter{
        padding: .05rem 0 .15rem;
        justify-content: space-between;
        font-size: .12rem;
        color: #cccccc;
    }
    .leftBox{
        padding-right: .1rem;
    }
    .rightBox img{
        display: block;
        width: 0.8rem;
        height: 1.1rem;
    }
    h3{
        margin:0 0 .1rem ; 
        font-weight: 100;
        font-size: .16rem;
        color: #494949;
    }
    p{
        color: #aaaaaa;
        font-size: .14rem;
    }
</style>