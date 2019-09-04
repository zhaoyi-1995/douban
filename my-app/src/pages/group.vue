<template>
    <div class="allBox container-fluid">
        <all-nav></all-nav>
        <user-login></user-login>
        <group-session title="租房找室友" :arr='arra'></group-session>
        <group-session title="来聊五块钱" :arr='arrb'></group-session>
        <group-session title="买买买" :arr='arrc'></group-session>
        <footer-logo></footer-logo>
    </div>
</template>
<script>
import AllNav from '../components/allNav'
import UserLogin from '../components/groups/userlogin'
import GroupSession from '../components/groups/groupSession'
import FooterLogo from '../components/footerLogo'
export default {
    components:{
        AllNav,
        UserLogin,
        GroupSession,
        FooterLogo
    },
    data() {
        return {
            arra:[],
            arrb:[],
            arrc:[]
        }
    },
    created(){
        this.axios({
            url:'/groups',
            methods: 'get'
        }).then((ok)=>{
            console.log(ok.data);
            this.arra = ok.data.xiaozua;
            this.arrb = ok.data.xiaozub;
            this.arrc = ok.data.xiaozuc;
        })
    }
}
</script>
<style scoped>
    .allBox{
        padding-top: .5rem;
    }
</style>