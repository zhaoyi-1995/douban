<template>
    <div class="allBox">
        <all-nav></all-nav>
        <div class="allContent">
            <movie-show title="影院热映" :arr='firstPart'></movie-show>
            <movie-show title="免费在线观影" :arr='secondPart'></movie-show>
            <movie-show title="新片速递" :arr='thirdPart'></movie-show>
            <good-movies title="发现好电影" :arr='findGoodMovies'></good-movies>
            <kinds-look :arr='kindsLookData'></kinds-look>
            <footer-logo></footer-logo>
        </div>
    </div>
</template>
<script>
import allNav from '../components/allNav'
import movieShow from '../components/movies/movieShow'
import goodMovies from '../components/movies/goodMovies'
import kindsLook from '../components/movies/kindsLook'
import footerLogo from '../components/footerLogo'
export default {
    components:{
        allNav,
        movieShow,
        goodMovies,
        kindsLook,
        footerLogo
    },
    data() {
        return {
            getMovies:[],
            firstPart:[],
            secondPart:[],
            thirdPart:[],
            findGoodMovies:[],
            kindsLookData:[]
            
        }
    },
    created(){
        this.axios({
            url:'/movies',
            methods:'get',
        }).then((ok)=>{
            this.getMovies = ok.data;
            this.firstPart = this.getMovies.slice(0,10);
            this.secondPart = this.getMovies.slice(31,41);
            this.thirdPart = this.getMovies.slice(61,71);
        });
        this.axios({
            url:'/findgoodmovies',
            methods:'get',
        }).then((ok)=>{
            console.log(ok.data)
            this.findGoodMovies = ok.data

        });
        this.axios({
            url:'/movielist',
            methods:'get',
        }).then((ok)=>{
            console.log(ok.data)
            this.kindsLookData = ok.data

        })
    }
}
</script>
<style scoped>
    .allBox{
        padding-top: .6rem;
    }
    .allContent{
        padding-left:.2rem; 
    }
</style>