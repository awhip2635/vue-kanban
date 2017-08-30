<template>
    <div class="lists">
        <h3>{{list.name}}</h3>
        <h4>{{list.description}}</h4>
        <button @click="deleteList(list)">Delete List</button>
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
<style scoped></style>