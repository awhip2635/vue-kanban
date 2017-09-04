<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Error from './components/Error'
  import Login from './components/Login'
  import Foot from './components/Foot'
  export default {
    name: 'app',
    components: {
      Error,
      Login,
      Foot
    },
    mounted() {
      this.$store.dispatch('getAuth')
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

  input {
    background-color: transparent;
    color: white;
  }

  .btn {
    background-color: transparent;
    color: white;
  }

  .logout {
    background-color: rgba(0, 0, 0, .8)
  }
</style>