<template>
    <div class="task-form">
        <form class="form-inline" @submit.prevent="createTask(listId, boardId)">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Task Description" v-model="description">
                <button class="btn btn-default" type="submit">Add Task</button>
            </div>
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
<style scoped>
    .form-control{
        background-color: transparent;
        color: white;
    }
    .btn{
        background-color: transparent;
        color: white;
    }
</style>