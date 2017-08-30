<template>
  <div>
    <div>
      <a href="/#/userboards"><button class="btn btn-default">My Boards</button></a>
      <h1>
        {{board.name}}
      </h1>
      <h2>
        {{board.description}}
      </h2>
      <hr>
      <form @submit.prevent="createList(board._id)">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Description" v-model="description">
        <button type="submit">Add List</button>
      </form>
      <div v-for="list in lists">
        <lists :list="list" :boardId="board._id"></lists>
        <!-- <hr>
        <h3>{{list.name}}</h3>
        <h4>{{list.description}}</h4>
        <button @click="deleteList(list)">Delete List</button> -->
        
        <!-- <tasks></tasks> -->
        <!-- <div v-for="task in tasks">
          <div v-if="task.listId == list._id">
            <h4>{{task.description}}</h4>
          </div>
        </div> -->
        <hr>
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
      // this.$store.dispatch('getTasks', {
      //     boardId: this.$route.params.id})
    },
    methods: {
      createList(boardId) {
        var obj = {
          name: this.name,
          description: this.description,
          boardId: boardId
        }
        return this.$store.dispatch('createList', obj)
      },
      deleteList(list) {
        return this.$store.dispatch('removeList', list)
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
    components:{
      Tasks,
      Lists
    }
  }

</script>

<style scoped>

</style>