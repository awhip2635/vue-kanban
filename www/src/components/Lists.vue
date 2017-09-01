<template>
    <div class="lists">
        <div class="col-xs-6 col-sm-3 col-md-3">
            <div class="panel">
                <div class="row">
                    <div class="col-xs-9">
                        <h3 class="list-credentials">{{list.name}}</h3>
                    </div>
                    <div class="col-xs-1">
                        <button @click="deleteList(list)" class="btn btn-danger">X</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <p class="list-description">{{list.description}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <taskform :listId="list._id" :boardId="boardId"></taskform>
                    </div>
                </div>
                <div class="row">
                    <div v-for="task in tasks">
                        <div class="col-xs-12">
                            <tasks :task="task" :listId="list._id" :boardId="boardId"></tasks>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tasks from './Tasks'
    import Taskform from './TaskForm'
    export default {
        name: 'list',
        props: ["list", "boardId", "listId"],
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch('getTasks', { boardId: this.boardId, listId: this.list._id })

        },
        components: {
            Tasks,
            Taskform
        },
        computed: {
            tasks() {
                return this.$store.state.activeTasks[this.list._id]
            }
        },
        methods: {
            deleteList(list) {
                return this.$store.dispatch('removeList', list)
            }
        }
    }

</script>
<style scoped>
    .panel {
        background-color: rgba(0, 0, 0, .8);
        color: white;
        border: 1px solid white;
        padding: 1rem 0 2rem .5rem;
    }

    .list-credentials {
        color: white;
        font-family: 'Audiowide', cursive;
        font-size: 6rem;
    }

    .list-description {
        color: white;
        font-family: 'Audiowide', cursive;
        font-size: 2rem;
    }
</style>