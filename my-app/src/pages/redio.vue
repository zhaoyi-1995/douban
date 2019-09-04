<template>
    <div class="radioBox">
        <all-nav></all-nav>
        <top-app></top-app>
        <user-login></user-login>
        <comment v-for='(v,i) in 6' :key='i'></comment>
        <p class="moreVadios"><a href="#">显示更多广播</a> </p>
        <footer-logo></footer-logo>
    </div>
</template>
<script>
import AllNav from '../components/allNav'
import TopApp from '../components/radio/topApp'
import UserLogin from '../components/groups/userlogin'
import Comment from '../components/radio/comment'
import FooterLogo from '../components/footerLogo'
export default {
    components:{
        AllNav,
        TopApp,
        UserLogin,
        Comment,
        FooterLogo
    }
}
</script>
<style scoped>
    .radioBox{
        padding-top:.5rem;
    }
    .moreVadios{
        margin: .5rem 0;
        text-align: center;
        
    }
    .moreVadios a{
        color: #42bd56;
    }
</style>