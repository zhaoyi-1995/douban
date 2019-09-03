<template>
    <div class="allBox container-fluid">
        <all-nav></all-nav>
        <model-nav></model-nav>
        <recommend :arr='homedata' :arrContent='homearr' :arrTitle='homearrb'></recommend>
    </div>
</template>
<script>
import homeNav from '../components/homeNav'
import allNav from '../components/allNav'
import modelNav from '../components/homes/modelNav'
import recommend from '../components/homes/recommend'
export default {
    components:{
        homeNav,
        allNav,
        modelNav,
        recommend
    },
    data() {
        return {
            homedata:[],
            homearr:[],
            homearrb:[]
        }
    },
    created() {
        this.axios({
            url:'/home',
            methods:'get',
        }).then((data)=>{
            console.log(data.data)
            // var v = data.data
            for(var i=0;i<data.data.length;i++){
                this.homearr.push(data.data[i].content.substring(0,25) + '...')
                this.homearrb.push(data.data[i].title.substring(0,15) + '...')
            }
            this.homedata = data.data
        })
    },
}
</script>
<style scoped>
    .allBox{
        padding-top: .5rem;
    }
</style>