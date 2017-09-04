<template>
    <div class="lists">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="panel">
                <div class="row">
                    <div class="col-xs-1">
                        <button @click="toggleAddTask" class="btn btn-efault glyphicon glyphicon-plus"></button>
                    </div>
                    <div class="col-xs-1">
                        <button @click="toggleDescription" class="q btn"><strong>?</strong></button>
                    </div>
                    <div class="col-xs-offset-5 col-xs-1">
                        <button @click="showEditor()" class="btn glyphicon glyphicon-pencil"></button>
                    </div>
                    <div class="col-xs-offset-1 col-xs-1">
                        <button @click="deleteList(list)" class="btn btn-danger">X</button>
                    </div>
                </div>
                <div class="row">
                    <div v-if="!editor">
                        <div class="col-xs-12">
                            <div class="name">
                                <h2 class="list-credentials">{{list.name}}</h2>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="col-xs-12">
                            <form class="form-inline edit-form" @submit.prevent="editList(), showEditor()">
                                <div class="form-group">
                                    <input class="form-control edit-input" type="text" v-model="list.name">
                                    <button class="btn btn-default edit-btn">Edit</button>
                                </div>
                            </form>
                            <form class="form-inline edit-form" @submit.prevent="editList(), showEditor()">
                                <div class="form-group">
                                    <input class="form-control edit-input" type="text" v-model="list.description">
                                    <button class="btn btn-default edit-btn">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-if="showDescription">
                        <div class="col-xs-12">
                            <p class="list-description">{{list.description}}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-show="addTask">
                        <div class="col-xs-offset-1 col-xs-10">
                            <taskform :listId="list._id" :boardId="boardId"></taskform>
                        </div>
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
    import draggable from 'vuedraggable'
    export default {
        name: 'list',
        props: ["list", "boardId", "listId"],
        data() {
            return {
                addTask: false,
                showDescription: false,
                editor: false
            }
        },
        mounted() {
            this.$store.dispatch('getTasks', { boardId: this.boardId, listId: this.list._id })

        },
        components: {
            Tasks,
            Taskform,
            draggable
        },
        computed: {
            // Non-draggable below
            tasks() {
                return this.$store.state.activeTasks[this.list._id]
            }
        },
        methods: {
            deleteList(list) {
                return this.$store.dispatch('removeList', list)
            },
            toggleAddTask() {
                this.addTask = !this.addTask
            },
            toggleDescription() {
                this.showDescription = !this.showDescription
            },
            showEditor() {
                this.editor = !this.editor
            },
            editList() {
                var obj = {
                    listId: this.list._id,
                    boardId: this.boardId,
                    name: this.list.name,
                    description: this.list.description
                }
                this.$store.dispatch('editList', obj)
            }
        }
    }

</script>
<style scoped>
    .q{
        margin-left: 1rem;
        border: transparent;
        font-size: 2rem
    }
    input {
        background-color: transparent;
        border: transparent;
        color: white;
    }

    .edit-form {
        margin-top: 1rem;
    }

    .panel {
        background-color: rgba(0, 0, 0, .8);
        color: white;
        border: 1px solid white;
        padding: 1rem 0 2rem .5rem;
    }

    .list-credentials {
        color: white;
        font-family: 'Audiowide', cursive;
    }

    .list-description {
        color: white;
        font-family: 'Audiowide', cursive;
        font-size: 2rem;
    }
</style>