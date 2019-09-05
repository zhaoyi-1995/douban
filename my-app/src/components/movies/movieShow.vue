<template>
    <div class="allBoxs">
        <p class="topp">
            <span class="titles">{{ title }}</span>
            <span @click="more()" class="moreMovies">更多</span>
        </p>
        <div class="imgBox">
            <div class="movieSession" v-for='(v,i) in arr' :key='i'>
                <router-link :to='{name:"DetailsPage",params:{id:v.id}}'>
                    <img :src="v.images.small">
                    <p>{{ v.title }}</p>
                </router-link>    
                    <star :fivexx='v.rating.average'></star>    
            </div>
        </div>
    </div>
</template>
<script>
import star from './star'
export default {
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
    methods: {
        more(){
            
        }
    },
    components:{
        star
    }
}
</script>
<style scoped>
    .allBoxs{
        margin-bottom: .1rem;
    }
    .topp{
        padding-right: .2rem;
        display: flex;
        justify-content: space-between;
        /* height: .2rem; */
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
        width: 100%;
        display: flex;
        overflow-x: auto;

    }
    .movieSession{
        width: 1.2rem;
        margin: 0 .05rem;
    }
    .movieSession img{
        width: 1.2rem;
        height: 1.7rem;
    } 
    .movieSession p{
        width: 100%;
        /* height: .2rem; */
        line-height: .2rem;
        color: #111111;
        font-size: .14rem;
        text-align: center;
        margin-top:.1rem;
        margin-bottom:0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; 
    }
</style>