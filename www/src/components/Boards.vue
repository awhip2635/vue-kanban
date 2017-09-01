<template>
  <div class="boards">
    <div class="container-fluid">

      <div class="row">
        <div class="col-xs-12">
          <h1 class="boards-top-heading"><strong>BOARDS</strong></h1>
        </div>
        <div class="col-xs-offset-3 col-xs-6">
          <div class="new">

            <form class="form-inline" @submit.prevent="createBoard">
              <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Board Name">
                <input type="text" class="form-control" v-model="description" placeholder="Board Description">
                <button type="submit" class="btn btn-primary">Add New Board</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-for="board in boards">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-board">
              <div class="row">
                <div class="col-xs-10">
                  <h2>
                    <router-link :to="'/userboards/'+ board._id + '/lists'">{{board.name}}</router-link>
                  </h2>
                  <h5>
                    {{board.description}}
                  </h5>
                </div>
                <div class="col-xs-2">
                  <button class="btn btn-danger" @click="removeBoard(board)">Remove</button>
                </div>
              </div>
            </div>
          </div>
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
  .btn-danger {
    margin-top: 1rem;
  }

  .boards-top-heading {
    color: magenta;
    font-family: 'Encode Sans Condensed', sans-serif;
    font-size: 10rem;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 10px;
    margin: 0 40rem 5rem 40rem;
  }

  .panel-board {
    max-width: 85%;
    background-color: rgba(0, 0, 0, .8);
    color: white;
  }

  a {
    color: white;
  }

  .new {
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, .8);
    padding: 1rem;
    border-radius: 10px;
  }

  input {
    background-color: transparent;
    color: white;
  }

  .btn {
    background-color: transparent;
  }
</style>