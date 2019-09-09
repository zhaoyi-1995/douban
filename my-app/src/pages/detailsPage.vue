<template>
    <div class="allBox">
         <img class="loading" src="../../static/img/loading.gif" v-if="allData.length<=0">
        <div v-else>
            <all-nav></all-nav>
            <top-app title="聊聊你的观影感受"></top-app>
            <div class="container-fluid">
                <details-session :arr='allData' ></details-session>
                <loop-img  :arr='allData'></loop-img>
                <movie-comment :arr='allData'></movie-comment>
                <div class="advertisementBox">
                    <img src="../../static/img/advertisement.png" alt="">
                </div>
                <question :arr='allData'></question>
                <good-movies title='推荐的豆列' :arr='goodMovie'></good-movies>
                <footer-logo></footer-logo>
                
            </div>
        </div>
       
    </div>
</template>
<script>
import AllNav from '../components/allNav'
import TopApp from '../components/radio/topApp'
import DetailsSession from '../components/details/detailsSession'
import LoopImg from '../components/details/loopImg'
import MovieComment from '../components/details/movieComment'
import question from '../components/details/question'
import GoodMovies from '../components/movies/goodMovies'
import FooterLogo from '../components/footerLogo'
export default {
    components:{
        AllNav,
        TopApp,
        DetailsSession,
        LoopImg,
        MovieComment,
        question,
        GoodMovies,
        FooterLogo
    },
    data() {
        return {
            id:'',
            allData:[],
            goodMovie:[],
            fraction:0,
            number:0
        }
    },
    created() {
        this.id = this.$route.params.id;
        // console.log(this.id);
        this.axios({
            url:'/movies',
            methods:'get'
        }).then((ok)=>{
            
            this.allData = ok.data.filter((v,i)=>{
                if(v.id == this.id){
                   return v
                }
            })
            this.fraction = Number(this.allData[0].rating.average)
            console.log(this.fraction)
            console.log(this.allData)
        });
        this.axios({
            url:"/findgoodmovies",
            methods:'get'
        }).then((ok)=>{
            this.goodMovie = ok.data
        })
    },
    computed: {
        numbers(){

        }
    },
   
}
</script>
<style scoped>
    .allBox{
        padding-top:.5rem;
    }
    .advertisementBox{
        width: 100%;
        padding-bottom: .2rem;
    }
    .advertisementBox img{
        width: 100%;
    }

</style>