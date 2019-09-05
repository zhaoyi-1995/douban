<template>
    <div class="allBox">
        <all-nav></all-nav>
        <top-app title="聊聊你的观影感受"></top-app>
        <div class="container-fluid">
            <details-session :arr='allData'></details-session>
        </div>
    </div>
</template>
<script>
import AllNav from '../components/allNav'
import TopApp from '../components/radio/topApp'
import DetailsSession from '../components/details/detailsSession'
export default {
    components:{
        AllNav,
        TopApp,
        DetailsSession
    },
    data() {
        return {
            id:'',
            allData:[],
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
            // console.log(this.allData)

        })
    },
    // computed: {
    //     checkObj(){
    //         var dataDetails;
    //         this.allData.some((v,i)=>{
    //             if(v.id == this.id){
    //                 dataDetails = this.allData.slice(i,1);
    //                 return
    //             }
    //         })
    //         console.log("aaa"+dataDetails);
    //         return dataDetails
    //     }
    // },
}
</script>
<style scoped>
    .allBox{
        padding-top:.5rem;
    }

</style>