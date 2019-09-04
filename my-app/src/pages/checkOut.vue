<template>
    <div class="allBox">
        <top></top>
        <list :arr='listData'></list>
        <footers></footers>
    </div>
</template>
<script>
import top from '../components/check/top'
import List from '../components/check/list'
import Footers from '../components/check/footer'
export default {
    data() {
        return {
            listData:[]
        }
    },
    components:{
        top,
        List,
        Footers
    },
    created() {
        this.axios({
            url:'/check',
            methods:'get'
        }).then((ok)=>{
            console.log(ok.data)
            this.listData = ok.data;
        })
    },
}
</script>
<style scoped>
    .allBox{
        padding-top: .5rem;
    }
</style>