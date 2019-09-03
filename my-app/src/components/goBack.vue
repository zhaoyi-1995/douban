<template>
    <div class="goBackBox">
        <p class="goBack" @click="goback()">取消</p>
    </div>
</template>
<script>
export default {
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
    .goBackBox{
        position: relative;
    }
    .goBack{
        font-size: .14rem;
        color: #42bd56;
        position: absolute;
        top:.16rem;
        left: .15rem;
    }
</style>