<template>
    <div class="tasks">
        <div class="col-xs-10">
            <div class="phone-viewport complete-example">
                <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-small">
                    <div class="md-toolbar-container">
                        <button class="glyphicon glyphicon-th-list btn" @click="$refs.sidenav.toggle()">
                        </button>
                        <button @click="addComments()" class="btn glyphicon glyphicon-pencil"></button>
                        <span style="flex: 1"></span>
                        <button class="glyphicon glyphicon-trash btn" @click="deleteTask(task._id)"></button>
                    </div>
                    <div class="md-toolbar-container description">
                        <h3>
                            {{task.description}}
                        </h3>
                    </div>
                </md-whiteframe>
                <div v-if="showComments">
                <md-list class="md-double-line">
                        <div v-for="comment in comments">
                            <comments :comment="comment" :taskId="task._id" :listId="listId" :boardId="boardId"></comments>
                        </div>
                        <div class="c-form">
                            <commentform :taskId="task._id" :listId="listId" :boardId="boardId"></commentform>
                        </div>
                    </md-list>
                </div>
                <md-sidenav md-theme="blue" class="md-left" ref="sidenav">
                    <md-toolbar class="md-account-header">
                        <md-list class="md-transparent">
                            <md-list-item>
                                <div @click="$refs.sidenav.toggle()" class="md-list-text-container">
                                    <span>Scroll to Select New List</span>
                                </div>
                            </md-list-item>
                        </md-list>
                    </md-toolbar>
                    <md-list>
                        <div v-for="list in activeLists">
                            <md-list-item @click="$refs.sidenav.toggle(), moveTask(list._id, boardId, task)" class="md-primary">
                                <span>{{list.name}}</span>
                            </md-list-item>
                        </div>
                    </md-list>
                </md-sidenav>
            </div>
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
                taskDescription: '',
                showComments: false
            }
        },
        methods: {
            createTask(listId, boardId) {
                var obj = {
                    taskDescription: this.taskDescription,
                    boardId: boardId,
                    listId: listId
                }
                this.taskDescription = ''
            },
            deleteTask(taskId) {
                var task = {
                    boardId: this.boardId,
                    listId: this.listId,
                    taskId: taskId
                }
                this.$store.dispatch('deleteTask', task)
            },
            moveTask(listId, boardId) {
                var obj = {
                    listId: listId,
                    boardId: boardId,
                    task: this.task
                }
                this.$store.dispatch('moveTask', obj)
            },
            addComments() {
                this.showComments = !this.showComments
            }
        },

        computed: {
            board() {
                return this.$store.state.activeBoard
            },
            activeLists() {
                return this.$store.state.activeLists
            },
            comments() {
                return this.$store.state.comments[this.task._id]
            },
        },
        mounted() {
            this.$store.dispatch('getComments', { boardId: this.boardId, listId: this.listId, taskId: this.task._id })
        },
        components: {
            Comments,
            Commentform
        }
    }

</script>

<style scope>
    .btn {
        background-color: transparent;
        color: white;
        margin-top: 1rem;
    }

    .panel {
        background-color: blue;
        color: white;
        border: 1px solid white;
    }

    .complete-example {
        margin-top: 2rem;
        display: flex;
        flex-flow: column;
        position: relative;
        left: 10px;
        overflow: hidden;
        z-index: 1;
    }

    .md-fab {
        margin: 0;
        position: absolute;
        bottom: -20px;
        left: 16px;
    }

    .md-title {
        color: #fff;
    }

    .md-list {
        overflow: auto;
    }

    .md-list-action .md-icon {
        color: rgba(#000, .26);
    }

    .md-avatar-icon .md-icon {
        color: #fff !important;
    }

    .md-sidenav .md-list-text-container> :nth-child(2) {
        color: rgba(#fff, .54);
    }
    /* .md-account-header { */

    .md-list-item:hover .md-button:hover {
        background-color: inherit;
    }

    .md-avatar-list .md-list-item-container:hover {
        background: none !important;
    }

    .md-double-line {
        overflow-x: hidden;
    }

    .md-primary {
        background-color: rgb(69, 115, 188);
    }

    .md-transparent {
        background-color: rgb(69, 115, 188);
    }

    .c-form {
        margin-top: 1rem;
    }

    .description {
        margin-top: -3rem;
    }

    .c-class {
        background-color: rgba(0, 0, 0, .8);
    }
</style>