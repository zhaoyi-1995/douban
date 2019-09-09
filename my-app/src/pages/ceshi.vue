<template>
    <div>
        <input type="text" v-model="num" @input="func()">
        {{ data }}
    </div>

</template>
<script>
var mytimer ='';
export default {
    data() {
        return {
            num:60,
            data:0
        }
    },
    methods: {
        func(){
            if(this.num>0){ 
                if(mytimer){
                    clearInterval(mytimer);
                    mytimer=''
                }
                this.data = this.num;
                mytimer =  setInterval(()=>{
                    this.data--
                    if(this.data == 0){
                        clearInterval(mytimer);
                        mytimer ='';
                    }
                },1000)
            }else if(this.num<=0){
                clearInterval(mytimer);
            }
            
        }
    },
}
</script>
<style scoped>
    
</style>