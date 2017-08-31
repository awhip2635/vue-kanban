<template>
    <div class="comments">
        <p>
        {{comment.description}}
        </p>
        <button class="btn btn-default" @click="deleteComment(comment._id)">x</button>
    </div>
</template>

<script>
export default {
        name: 'Comments',
        props: ["comment", "taskId", "listId", "boardId"],
        data() {
            return {
            }
        },
         methods: {
            deleteComment(commentId){
                var comment ={
                    boardId: this.boardId,
                    listId: this.listId,
                    taskId: this.taskId,
                    commentId: commentId
                }
                this.$store.dispatch('deleteComment', comment)
            }
        }
}
</script>

<style scoped>

</style>