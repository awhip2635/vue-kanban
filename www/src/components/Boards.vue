<template>
  <div class="boards">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-offset-10 col-xs-2">
          <button @click="logout" class="btn logout btn-default">Logout</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-4 col-xs-4">
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
                <div class="col-xs-1">
                  <button @click="showEditor()" class="btn glyphicon glyphicon-pencil"></button>
                </div>
                <div class="col-xs-9">
                  <div v-if="editor">
                    <h2>
                      <router-link :to="'/userboards/'+ board._id + '/lists'">{{board.name}}</router-link>
                    </h2>
                    <h5>
                      {{board.description}}
                    </h5>
                  </div>
                  <div v-else>
                    <form class="form-inline edit-form" @submit.prevent="editBoard(board._id, board.name, board.description), showEditor()">
                      <div class="form-group">
                        <input class="form-control edit-input" type="text" v-model="board.name">
                        <button class="btn btn-default edit-btn">Edit</button>
                      </div>
                    </form>
                    <form class="form-inline edit-form" @submit.prevent="editBoard(board._id, board.name, board.description), showEditor()">
                      <div class="form-group">
                        <input class="form-control edit-input" type="text" v-model="board.description">
                        <button class="btn btn-default edit-btn">Edit</button>
                      </div>
                    </form>
                  </div>
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
        description: '',
        editor: true
      }
    },
    mounted() {
      this.$store.dispatch('getBoards')
      // this.$store.dispatch('getAuth')
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
          .then(
          this.name = '',
          this.description = ''
          )
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      },
      logout() {
        this.$store.dispatch('logout')
        this.$store.dispatch('getAuth')
      },
      showEditor() {
        this.editor = !this.editor
      },
      editBoard(boardId, name, description) {
        var obj = {
          boardId: boardId,
          name: name,
          description: description
        }
        this.$store.dispatch('editBoard', obj)
      }
    }
  }

</script>

<style scoped>
  .edit-input{
    border: transparent;
  }
  .btn-danger {
    margin-top: 1rem;
  }

  .btn-primary {
    margin-bottom: 1rem;
  }

  .boards-top-heading {
    color: magenta;
    font-family: 'Encode Sans Condensed', sans-serif;
    font-size: 10rem;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 10px;
    /* margin: 0 40rem 5rem 40rem; */
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

  .logout {
    background-color: rgba(0, 0, 0, .8)
  }
</style>