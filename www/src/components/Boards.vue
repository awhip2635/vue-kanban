<template>
  <div>
    <form @submit.prevent="createBoard">
      <input type="text" v-model="name" placeholder="name">
      <input type="text" v-model="description" placeholder="description">
      <button type="submit">Add Board</button>
    </form>
    <ul>
      <li v-for="board in boards">
        <router-link :to="'/userboards/'+ board._id + '/lists'">{{board.name}}</router-link> <button @click="removeBoard(board)">x</button></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'boards',
    data(){
      return{
        name: '',
        description: ''
      }
    },
    mounted() {
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      }
    },
    methods: {
      createBoard() {
        this.$store.dispatch('createBoard', {
          name: this.name,
          description: this.description
        })
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      }
    }
  }

</script>

<style scoped>

</style>