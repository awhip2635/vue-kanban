<template>
    <div class="comments">
        <div class="row">
            <div class="col-xs-10 col-sm-10">
                <h5 class="comment">
                    {{comment.description}}
                </h5>
            </div>
            <div class="col-xs-2 col-sm-2">

                <button class="btn glyphicon glyphicon-remove" @click="deleteComment(comment._id)"></button>
            </div>
        </div>
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
            deleteComment(commentId) {
                var comment = {
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
    .btn {
        color: black;
        margin-bottom: 1rem;
    }

    .comment {
        margin-top: 3rem;
    }
</style>