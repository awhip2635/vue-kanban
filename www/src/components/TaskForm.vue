<template>
    <div class="task-form">
        <form @submit.prevent="createTask(listId, boardId)">
            <button type="submit">Add Task</button>
            <input type="text" placeholder="Task Description" v-model="description">
        </form>
    </div>
</template>
<script>
    export default {
        name: 'TaskForm',
        props: ["listId","boardId"],
        data() {
            return {
                description: ''
            }
        },
        methods: {
            createTask(listId, boardId) {
                var obj = {
                    description: this.description,
                    boardId: boardId,
                    listId: listId
                }
                this.$store.dispatch('createTask', obj)
            }
        }
    }

</script>
<style scoped></style>