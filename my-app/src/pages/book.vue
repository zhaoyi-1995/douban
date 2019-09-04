<template>
    <div class="allBox">
        <all-nav></all-nav>
        <div class="container-fluid centerBox">
            <movie-show :arr='firstArr' title='最受关注的图书|虚构类'></movie-show>
            <movie-show :arr='secondArr' title='最受关注的图书|非虚构类'></movie-show>
            
        </div>
        

    </div>
</template>
<script>
import AllNav from '../components/allNav'
import movieShow from '../components/movies/movieShow'
export default {
    components:{
        AllNav,
        movieShow
    },
    data() {
        return {
            bookArr:[]
        }
    },
    created() {
        this.axios({
            url:'/books',
            methods: 'get',
        }).then((ok)=>{
            this.bookArr = ok.data;
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