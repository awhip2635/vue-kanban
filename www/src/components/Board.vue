<template>
  <div> 
    <div>
      <h1>
        {{board.name}}
      </h1>
      <h2>
        {{board.description}}
      </h2>
      <div v-for="list in lists">
        <h3>{{list.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  mounted(){
    this.$root.$store.dispatch('getBoard', this.$route.params.id)
    this.$root.$store.dispatch('getLists', this.$route.params.id)
  },
  computed:{
    board(){
      return this.$store.state.activeBoard
    },
    lists(){
      return this.$store.state.activeLists
    }
  }
}
</script>

<style scoped>

</style>
