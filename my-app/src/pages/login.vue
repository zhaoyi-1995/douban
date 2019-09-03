<template>
    <div class="loginBox">
        <go-back></go-back>
        <p class="title">登录豆瓣</p>
        <input type="email" placeholder="邮箱" class="users" v-model="email">
        <input :type="bool?'text':'password'" placeholder="Token" class="users" id="passWord" v-model="
        userPass">
        <span @click="shows()" :class="['bg',bool?'show':'hide']"></span>
        <input type="button" value="立即登录" class="users" id="loginBtn" @click="login()">
        <p class="more"> <span>使用其他方式登录</span>&nbsp; & &nbsp;<span>找回密码</span></p>
        <p class="last"><span @click="reg()">注册豆瓣账号</span>&nbsp;&nbsp;&nbsp;<span @click='down()'>下载豆瓣APP</span></p>
    </div>
</template>
<script>
import goBack from '../components/goBack'
export default {
    data(){
        return{
            bool:false,
            email:'',
            userPass:''
        }
    },
    methods: {
        shows(){
            this.bool = !this.bool;
        },
        reg(){
            this.$router.push('/register');
        },
        down(){
            this.$router.push('/download')

        },
        login(){
            var param = new URLSearchParams;
                param.append('email',this.email);
                param.append('userPass',this.userPass);
            this.axios({
                method:'post',
                url:'http://localhost:3000/login',
                data:param
            }).then((ok)=>{
                if(ok.data.linkid == 0){
                    alert('用户名或密码错误');
                }else if(ok.data.linkid == 1){
                    alert('登录成功');
                    this.$router.replace('/home')
                }else{
                    alert('请确认您已输入完成')
                }
            })
        }
    },
    components:{
        goBack
    }
}
</script>
<style scoped>
    .loginBox{
        position: relative;
    }
    .title{
        width: 70%;
        font-size: .18rem;
        font-weight: 900;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        border-bottom: 1px solid #eeeeee;
        margin: .15rem auto 0;
    }
    .users{
        display: block;
        width: 60%;
        height: .4rem;
        margin: .2rem auto 0;
        text-indent: .15rem;
        border-top-left-radius: .05rem;
        border-top-right-radius: .05rem;
        border: 1px solid #cccccc;
        outline: 0;
    }
   
    .bg{
        display: block;
        width: .25rem;
        height: .25rem;
        
    }
    .show{
        background: url(../../static/img/show1.png) no-repeat right center;
        background-size: .25rem .25rem;
        position: absolute;
        right: .83rem;
        top: 1.41rem;
    }
    .hide{
        background: url(../../static/img/show.png) no-repeat right center;
        background-size: .25rem .25rem;
        position: absolute;
        right: .83rem;
        top: 1.41rem;
    }
    #loginBtn{
        background: #17aa52;
        text-align: center;
        line-height: .4rem;
        color: white;
    }
    .more,.last{
        text-align: center;
        font-size: .14rem;
        margin-top: .1rem;
        color: #aaaaaa;
    }
    .last{
        margin-top: .3rem;
        color:#42bd56;
    }
</style>