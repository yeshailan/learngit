<template>
  <div class="home">
      <div @click="clickAction()">{{homeMsg}}</div>
      <div @click="duck()">去home</div>
  </div>
          
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      homeMsg: "首页",
      homevaule: '非父子传值',
    }
  },
  methods:{
      clickAction(){
          console.log('点击了');
          this.$event.$emit("homevaule",{
            homevaule: this.homevaule,
            homeMsg: this.homeMsg
          })
      },
      duck(){
          this.$router.push('/page');
          this.$router.replce('/hot');
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  color: #42b983;
}
</style>