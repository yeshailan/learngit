<template>
  <div class="page" :datas="hot" @click="sun()">
      <!-- <div>{{"pagePsg}}</div> -->
      <div class="value-cl" v-for="(item,i) in valueList" :key="i">
          {{item}}
          <span>{{item.homeMsg}}</span>
          <span>{{item.homevaule}}</span>
      </div>
  </div>
          
</template>

<script>

export default {
  name: 'HelloWorld1',
  data () {
    return {
        hot:'old',
      pagePsg: '页面',
      pageValue: '页面父子传值',
      valueList: []
    }
  },
  created(){
      console.log('怎么没监听到');
      let that = this;
      this.$event.$on('homevaule',(value)=>{
          this.valueList.push(value);
          console.log(this.valueList);
      });

       this.demo();
  },
  methods:{
      sun(){
          this.router.push('/hot');
      },
      demo(){
           var name = "The Window";
        　　var object = {
        　　　　name : "My Object",
        　　　　getNameFunc : function(){
                var that = this;
        　　　　　　return function(){
        　　　　　　　　return this.name;
        　　　　　　};
        　　　　}
        　　};
　　        alert(object.getNameFunc()());
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.value-cl{
    color: green;
    width: 30px;
    height: 40px;
}
.page{
  color: #42b983;
}
</style>