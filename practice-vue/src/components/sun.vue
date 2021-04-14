<template>
    <div class="sun">{{datas}}</div>
</template>
<script>
export default {
    data(){
        return{
            name: '谁'
        }
    },
    props:{
        datas:{
            type: String,
            default: ''
        }
    },
    data(){
        return{

        }
    },
    created(){
        console.log('没有刷新');
        this.name = JSON.parse(JSON.stringify(this.$route.parmas.msg));
        console.log(this.$route.params,'路由');
        this.$axios.get(`/sun/msg=${this.datas}`).then((respond)=>{
            console.log(respond);
        });

        // export function getHot(){
        //     return new Promise((resolve,reject)=>{
        //         this.$axios.get('路由').then((response)=>{});
        //     })
        // }
    },
}
</script>
<style>

</style>


