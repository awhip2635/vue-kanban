<template>
  <div class="board">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-2">
          <a href="/#/userboards" class="home">
            <button class="btn btn-default but">Return to Boards</button>
          </a>
        </div>
        <div class="col-xs-offset-8 col-xs-2">
          <button @click="logout" class="btn boards btn-default but">Logout</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="heading">
            <h2 class="board-credentials">
              {{board.name}}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-4 col-xs-4">
          <div class="addList">
            <form @submit.prevent="createList(board._id)">
              <div class="form-group">
                <input type="text" placeholder="Name" class="form-control list" v-model="name">
                <input type="text" placeholder="Description" class="form-control list" v-model="description">
                <button class="btn btn-default list-btn" type="submit">Create List</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="lists">
          <div v-for="list in lists">
            <lists :list="list" :boardId="board._id"></lists>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tasks from './Tasks'
  import Lists from './Lists'
  export default {
    name: 'board',
    data() {
      return {
        name: '',
        description: '',
        taskDescription: ''
      }

    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
      this.$store.dispatch('getLists', this.$route.params.id)
      // this.$store.dispatch('getAuth')
    },
    methods: {
      createList(boardId) {
        var obj = {
          name: this.name,
          description: this.description,
          boardId: boardId
        }
        this.$store.dispatch('createList', obj)
        this.name = ''
        this.description = ''
      },
      logout() {
        this.$store.dispatch('logout')
        this.$store.dispatch('getAuth')
      },


      createTask(listId, boardId) {
        var obj = {
          taskDescription: this.taskDescription,
          boardId: boardId,
          listId: listId

        }
      },
      deleteTask(listId) {
        return this.$store.dispatch('removeTask', task)
      }
    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.activeLists
      },
      tasks() {
        return this.$store.state.activeTasks
      },
      loadTasks() {
        console.log(this.$store.state.activeLists)
      }
    },
    components: {
      Tasks,
      Lists
    }
  }

</script>

<style scoped>
  .but{
    background-color: rgba(0, 0, 0, .8)
  }
  .home {
    background-color: transparent;
    color: white;
  }

  .heading {
    background-color: rgba(0, 0, 0, .8);
    color: white;
    padding: 1rem;
    border-radius: 15px;
    margin: 2rem 10rem 2rem 10rem;
  }

  .board-credentials {
    color: white;
    font-family: 'Audiowide', cursive;
    font-size: 100px;
  }

  .board-description {
    color: white;
    font-family: 'Audiowide', cursive;
    font-size: 50px;
  }

  .addList {
    background-color: rgba(0, 0, 0, .8);
    color: white;
    padding: 2rem;
    border-radius: 10px;
  }

  .list {
    background-color: transparent;
    color: white;
    margin: 1rem 0 1rem 0;
  }

  .list-btn {
    background-color: transparent;
    color: white;
  }

  .lists {
    margin-top: 3rem;
  }
  .board{
    padding-bottom: 6rem;
  }
</style>