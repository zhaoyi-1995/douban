<template>
    <div class="allBox">
        <all-nav></all-nav>
        <div class="container-fluid centerBox">
            <movie-show :arr='firstArr' title='最受关注的图书|虚构类'></movie-show>
            <movie-show :arr='secondArr' title='最受关注的图书|非虚构类'></movie-show>
            <only-book title='豆瓣纸书' :arr='bookArr'></only-book>
            <good-movies title="发现好书" :arr='goodBook'></good-movies>
            <kinds-look :arr='kindsLookData'></kinds-look>
            <footer-logo></footer-logo>
        </div>
    </div>
</template>
<script>
import AllNav from '../components/allNav'
import movieShow from '../components/movies/movieShow'
import OnlyBook from '../components/books/onlyBook'
import GoodMovies from '../components/movies/goodMovies'
import kindsLook from '../components/movies/kindsLook'
import footerLogo from '../components/footerLogo'
export default {
    components:{
        AllNav,
        movieShow,
        OnlyBook,
        GoodMovies,
        kindsLook,
        footerLogo
    },
    data() {
        return {
            bookArr:[],
            goodBook:[],
            kindsLookData:[]
        }
    },
    created() {
        this.axios({
            url:'/books',
            methods: 'get',
        }).then((ok)=>{
            this.bookArr = ok.data;
        });
        this.axios({
            url:'/goodbook',
            methods:'get'
        }).then((ok)=>{
            this.goodBook = ok.data
        });
        this.axios({
            url:'/movielist',
            methods:'get',
        }).then((ok)=>{
            console.log(ok.data)
            this.kindsLookData = ok.data

        })
    },
    computed: {
        firstArr(){ 
             var one = this.bookArr.slice(0,10)
             console.log(this.bookArr)
            return one
        },
        secondArr(){
            return this.bookArr.slice(20,30)
        }
    },
    
}

</script>
<style scoped>
    .allBox{
        padding-top: .5rem;
    }
    .centerBox{
        padding-top: .3rem;
    }
</style>