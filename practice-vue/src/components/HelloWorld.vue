<template>
  <div class="box">
    <div>{{msg}}</div>
    <!-- <div>{{$store.state.name}}</div> -->
    <button @click="btnAction()">确定</button>
    <button @click="cityAction('上海')">上海</button>
    <button @click="cityAction('深圳')">深圳</button>
    <button @click="cityAction('北京')">北京</button>
    <!-- <div>{{$store.getters.count}}</div> -->
  </div>
          
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  computed:{
    // ...Vuex.mapSate(['name','city',''])
  },
  methods:{
    // ...Vuex.mapMutations(["modifyName"]),

    btnAction(){
      console.log(this.msg);
      // this.$store.commit('modifyName',this.msg);
    },
    cityAction(city){
      // this.$store.dispatch('selectCity',city)
    }
  },
  mounted(){
    // this.init();
  },
  methods: {
    // init(){
    // this.$axios.get('url+传参');
    // this.$axios.delete('url+传参');
    // this.$axios.post('url',{name: '传参'});
    // this.$axios.put('url',{name: '传参'});
    // this.$axios.patch('url',{name: '传参'});
    // this.$axios.header('url');
    

      // //执行多个并发请求
      // function getUserAccount() {
      //   return this.$axios.get('../../data/test.json');
      // }
      // function getUserPermissions() {
      //   return this.$axios.get('../../data/test.json');
      // }
      // var that = this;
      // this.$axios.all([that.getUserAccount(), that.getUserPermissions()])
      //   .then(this.axios.spread(function (acct, perms) {
      //     console.log(acct, perms,'请求');
      //     // 两个请求现在都执行完成
      //   })).catch((err)=>{
      //     console.log(error);
      //   })
        // }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  color: #42b983;
  font-weight: 700;
  font-size: 20px;
}
</style>
