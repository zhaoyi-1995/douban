<template>
    <div class="grouList">
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="(v,i) in arr" :key='i'>
                <div class="topBox">
                    <img :src="v.images.small" alt="">
                    <span class="spana">{{ v.title }}</span>
                    <span class="spanb">{{ v.group_member }}人</span>
                </div>
                <div class="bottomBox">
                    <span class="spanc">{{ v.group_topic.time }}</span>
                    <span class="spand">{{ v.group_topic.title }}</span>
                </div>
            </li>

            <p><a href="#">更多相关小组</a></p>
        </ul>

    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
    .grouList{
        padding:.1rem .08rem;
    }
    h3{
        font-size: .2rem;
    }
    li{
        margin-top: .2rem;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: .15rem
    }
    .spana{
        display: inline-block;
        margin-left: .1rem;
        font-size: .18rem;
        color: #111111;
        vertical-align: middle;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    .spanb{
        float: right;
        margin-right: .2rem;
        font-size: .14rem;
        line-height: .48rem;
        vertical-align: middle;
        color: #cccccc;
    }
    .bottomBox{
        margin-top: .1rem;
        display: flex;
        color: #aaaaaa;
        font-size: .16rem;
        white-space: nowrap;
    }
    .spand{
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p{
         margin-top: 0.1rem;
         text-align: center;
    }
    p a{
        font-size: .16rem;
        color: #42bd56;
    }
</style>