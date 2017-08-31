<template>
    <div class="lists">
        <div class="col-xs-6 col-sm-3 col-md-3">
            <div class="panel list">
                <h3 class="list-credentials">{{list.name}}</h3>
                <p class="list-description">{{list.description}}</p>
                <button @click="deleteList(list)" class="btn btn-danger">Delete List</button>
                <taskform :listId="list._id" :boardId="boardId"></taskform>
                <div v-for="task in tasks">
                     <tasks :task="task" :listId="list._id" :boardId="boardId"></tasks>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tasks from './Tasks'
    import Taskform from './TaskForm'
    export default {
        name: 'list',
        props: ["list","boardId", "listId"],
        data() {
            return {
            }
        },
        mounted(){
            this.$store.dispatch('getTasks', {boardId: this.boardId, listId: this.list._id})

        },
        components: {
            Tasks,
            Taskform
        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks[this.list._id]
            }
        },
        methods: {
            deleteList(list) {
        return this.$store.dispatch('removeList', list)
        }
    }
    }
</script>
<style scoped>
.list-credentials {
  color: black;
  font-family:'Audiowide', cursive;
  font-size: 60px;

}
.list-description {
  color: black;
  font-family: 'Audiowide', cursive;
  font-size: 30px;
}
</style>