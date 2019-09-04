<template>
    <div>
        <ul>
            <li><span @click="funa()">注册账号</span>|<span @click="funb()">登录豆瓣</span></li>
            <li class="two"><span @click="func()">使用桌面版</span>|<span @click="fund()">使用豆瓣APP</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        funb(){
            this.$router.push('/login');
        },
        funa(){
            this.$router.push('/register');
        },
        func(){
            this.$router.push('/home');
        },
        fund(){
            this.$router.push('/download');
        }
    },
}
</script>
<style scoped>
    ul{
        margin-top: .2rem;
    }
    li{
        padding: .1rem;
        border-top: 1px solid #f3f3f3;
        color: #e5e5e5;
    }
    span{
        color: #42bd56;
        font-size: .14rem;
        display: inline-block;
        width: 49%;
        text-align: center;
    }
    .two{
        border-bottom: 1px solid #f3f3f3;
    }
</style>