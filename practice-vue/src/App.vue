<template>
  <div id="app">
    <router-view></router-view>
    <nav class="foot-nav">
      <li><router-link to="/hello">hello</router-link></li>
      <li><router-link to= "/page">page</router-link></li>
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/hot">hot</router-link></li>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.foot-nav{
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content:space-around;
}
a.router-link-active{
  color: blue;
  text-decoration: none;
}
li{
  list-style: none;
  color: red;
}
</style>
