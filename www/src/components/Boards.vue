<template>
  <div>
    <div>
      <h1 class="boards-top-heading"><strong>BOARDS</strong></h1>
      <form @submit.prevent="createBoard">
        <input type="text" v-model="name" placeholder="name">
        <input type="text" v-model="description" placeholder="description">
        <button type="submit" class="btn btn-primary">Add Board</button>
      </form>
    </div>


    <div v-for="board in boards" class="panel panel-board">
      <div class="row">
        <div class="col-xs-1 col-sm-10 col-md-10">
          <h3>
            <router-link :to="'/userboards/'+ board._id + '/lists'">{{board.name}}</router-link>
          </h3>
        </div>
        <div class="col-xs-6 col-sm-2 col-md-2">
          <button class="btn btn-danger" @click="removeBoard(board)">Remove</button>
        </div>
      </div>
    </div>

  </div>
  </div>

</template>

<script>
  export default {
    name: 'boards',
    data() {
      return {
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
.boards-top-heading {
  color: magenta;
font-family: 'Encode Sans Condensed', sans-serif;
}

.panel-board {
  max-width: 75%;
}
</style>