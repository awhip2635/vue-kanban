<template>
  <div id="app">
    <error></error>
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/Error'
import Login from './components/Login'
export default {
  name: 'app',
  components:{
    Error,
    Login
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

body {
  background-image: url('http://www.wallpapers13.com/wp-content/uploads/2015/12/Forest-trees-trees-nature-background-09855-915x515.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
