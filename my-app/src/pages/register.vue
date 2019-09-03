<template>
    <div class="regBox">
        <h1 class="title">欢迎加入豆瓣</h1>
        <div class="inputBox">
            <input type="email" placeholder="邮箱" class="users" v-model="email">
            <input :type="bool?'text':'password'" placeholder="Token" v-model="userPass" class="users" id="passWord">
            <input type="text" placeholder="用户名" class="users" v-model="userName">
        </div>
        
        <span @click="shows()" :class="['bg',bool?'show':'hide']"></span>
        <input type="button" value="立即注册" class="users" id="regBtn" @click="register()">
        <p class="more"> 点击「注册」代表你已阅读并同意用户使用协议</p>
        <p class="last"><span @click='down()'>下载豆瓣APP</span></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bool:false,
            email:'',
            userName:'',
            userPass:''
        }
    },
    methods: {
        shows(){
            this.bool = !this.bool;
        },
        down(){
            this.$router.push('/download')

        },
        register(){
            this.axios({
                methods:'get',
                url:'http://localhost:3000/register',
                params:{userName:this.userName,userPass:this.userPass,email:this.email}
            }).then((ok)=>{
                console.log(ok);
            })
        }
    },
}
</script>
<style scoped>
    .regBox{
        position: relative;
    }
    .title{
        margin-top: .4rem;
        font-size: .4rem;
        font-weight: 100;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
        color: #17aa52;
    }
    .inputBox{
        width: 100%;
        padding: .1rem ;
        box-sizing: border-box;
        margin-top: .35rem;
    }
    .users{
        display: block;
        width: 100%;
        height: .5rem;
        text-indent: .15rem;
        border-top-left-radius: .05rem;
        border-top-right-radius: .05rem;
        border: 1px solid #cccccc;
        outline: 0;
        font-size: .18rem;
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
        right: .2rem;
        top: 1.73rem;
    }
    .hide{
        background: url(../../static/img/show.png) no-repeat right center;
        background-size: .25rem .25rem;
        position: absolute;
        right: .2rem;
        top: 1.73rem;
    }
    #regBtn{
        display: block;
        margin: 0 auto ;
        width: 95%;
        background: #42bd56;
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