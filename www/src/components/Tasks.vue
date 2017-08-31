<template>
    <div class="tasks">
            <button @click="deleteTask(task._id)">x</button>
            <h3>
                {{task.description}}
            </h3>
            <commentform :taskId="task._id" :listId="listId" :boardId="boardId"></commentform>
            <div v-for="comment in comments">
                     <comments :comment="comment" :taskId="task._id" :listId="listId" :boardId="boardId"></comments>
                </div>
    </div>
</template>

<script>
    import Comments from './Comments'
    import Commentform from './CommentForm'
    export default {
        name: 'Tasks',
        props: ["task", "listId", "boardId"],
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
            },
            deleteTask(taskId) {
                var task ={
                    boardId: this.boardId,
                    listId: this.listId,
                    taskId: taskId
                }
                this.$store.dispatch('deleteTask', task)
            }
        },
        
        computed: {
            board() {
                return this.$store.state.activeBoard
            },
            lists() {
                return this.$store.state.activeLists
            },
            comments() {
                return this.$store.state.comments[this.task._id]
            }
        },
        mounted(){
            this.$store.dispatch('getComments', {boardId: this.boardId, listId: this.listId, taskId: this.task._id})

        },
        components:{
            Comments,
            Commentform
        }
    }

</script>

<style scope>

</style>