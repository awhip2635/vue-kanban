<template>
  <div id="app">
    <error></error>
    <login></login>
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
</style>
