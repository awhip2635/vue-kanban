<template>
    <div class="tasks">
            <h1>
                {{task.description}}
            </h1>
    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        props: ["task"],
        data() {
            return {
                taskDescription: ''
            }
        },
        methods: {
            createTask(listId, boardId) {
                var obj = {
                    taskDescription: this.taskDescription,
                    boardId: boardId,
                    listId: listId

                }
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
            }
        }
    }

</script>

<style scope>

</style>