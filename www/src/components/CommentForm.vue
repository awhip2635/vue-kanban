<template>
<div class="commentForm">
    <form @submit.prevent="createComment(taskId, listId, boardId)">
            <button type="submit">Add Comment</button>
            <input type="text" placeholder="Comment" v-model="description">
        </form>
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
        methods:{
            createComment(taskId, listId, boardId){
                var obj = {
                    taskId: taskId,
                    listId: listId,
                    boardId: boardId,
                    description: this.description
                }
                this.$store.dispatch('createComment', obj)
            }
        }
}

</script>
<style scoped>

</style>