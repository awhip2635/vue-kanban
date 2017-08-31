<template>
    <div class="lists">
        <div class="row">
        <div class="col-xs-9 col-sm-9 col-md-9">
        <h3 class="list-credentials">{{list.name}}</h3>
        <p class="list-description">{{list.description}}</p>
        </div>
        <div class="col-xs-3 col-sm-3 col-md-3">
        <button @click="deleteList(list)" class="btn btn-danger">Delete List</button>
        </div>
        </div>
        <taskform :listId="list._id" :boardId="boardId"></taskform>
        <div v-for="task in tasks">
            <div v-if="task.listId == list._id">
                <tasks :task="task"></tasks>
            </div>
        </div>
    </div>
</template>
<script>
    import Tasks from './Tasks'
    import Taskform from './TaskForm'
    export default {
        name: 'list',
        props: ["list","boardId"],
        data() {
            return {
            }
        },
        components: {
            Tasks,
            Taskform
        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks
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