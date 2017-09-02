<template>
    <div class="commentForm">
        <div class="row">
            <div class="col-xs-12">
                <div class="form-group">
                    <form class="form-inline" @submit.prevent="createComment(taskId, listId, boardId)">
                        <input class="form-control" type="text" placeholder="Comment" v-model="description">
                        <button class="btn btn-default" type="submit">Add Comment</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'CommentForm',
        props: ["taskId", "listId", "boardId"],
        data() {
            return {
                description: ''
            }
        },
        methods: {
            createComment(taskId, listId, boardId) {
                var obj = {
                    taskId: taskId,
                    listId: listId,
                    boardId: boardId,
                    description: this.description
                }
                this.$store.dispatch('createComment', obj)
                this.description = ''
            }
        }
    }

</script>
<style scoped>
    .form-control{
        background-color: transparent;
        color: black;
    }
.btn{
    color: black
}
</style>