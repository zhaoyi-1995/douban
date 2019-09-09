<template>
    <div>
        <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            :score-template='v'>
        </el-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value:0
        }
    },
    props:{
        num:{
            type:Number,
            required:true
        }
    },
    created() {
        this.value = this.num/2
    },
     computed: {
        v(){
            var v = (this.value*2).toFixed(1)
            return v
        }
    },
}
</script>
<style scoped>
    
</style>