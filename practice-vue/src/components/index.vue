<template>
  <div class="hot">
      <div @click="old()">热</div>
  </div>
          
</template>

<script>
import Sun from './sun.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'practice-vue'
    }
  },
components:{
    Sun
  },
  methods: {
      old(){
          this.$router.push("/hot/sun"+this.msg);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot{
  color: #42b983;
}
</style>