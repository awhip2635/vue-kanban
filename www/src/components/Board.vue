<template>
  <div>
    <div class="container-fluid">
      <a href="/#/userboards" class="home"><h2>
home</h2></a>
      <h1 class="board-credentials">
        {{board.name}}
      </h1>
      <p class="board-description">
        {{board.description}}
      </p>
      <form @submit.prevent="createList(board._id)">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Description" v-model="description">
        <button type="submit">Create List</button>
      </form>
      <br>
       <div class="row">
      <div v-for="list in lists">
        <lists :list="list" :boardId="board._id"></lists>
       
       </div>
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
.home {
  position: fixed;
  left: 25px;
}

.board-credentials {
  color: black;
  font-family:'Audiowide', cursive;
  font-size: 100px;

}
.board-description {
  color: black;
  font-family: 'Audiowide', cursive;
  font-size: 50px;
}
</style>