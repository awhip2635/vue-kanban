<template>
    <div class="tasks">
        <div class="col-xs-10">
            <div class="phone-viewport complete-example">
                <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">
                    <div class="md-toolbar-container">
                        <button class="glyphicon glyphicon-th-list btn" @click="$refs.sidenav.toggle()">
                            <!-- <Span>Icon</Span> -->
                        </button>

                        <span style="flex: 1"></span>
                        <button class="glyphicon glyphicon-trash btn" @click="deleteTask(task._id)"></button>


                    </div>

                    <div class="md-toolbar-container">
                        <h3>
                            {{task.description}}
                        </h3>
                    </div>
                </md-whiteframe>

                <md-list class="md-double-line">
                    <commentform :taskId="task._id" :listId="listId" :boardId="boardId"></commentform>
                    
                        <div v-for="comment in comments">
                           
                                
                                <comments :comment="comment" :taskId="task._id" :listId="listId" :boardId="boardId"></comments>        
                          
                        </div>

                </md-list>

                <md-sidenav md-theme="blue" class="md-left" ref="sidenav">
                    <md-toolbar class="md-account-header">
                        <md-list class="md-transparent">


                            <md-list-item>
                                <div class="md-list-text-container">
                                    <span>Move Task</span>
                                </div>

                                <md-button class="md-icon-button md-list-action">
                                    <md-icon>arrow_drop_down</md-icon>
                                </md-button>
                            </md-list-item>
                        </md-list>
                    </md-toolbar>

                    <md-list>
                            <div v-for="list in lists">
                                <md-list-item @click="$refs.sidenav.toggle(), moveTask(list._id, task._id)" class="md-primary">
                                    <md-icon>insert_drive_file</md-icon> <span>{{list.name}}</span>
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
            moveTask(listId, taskId){
                var obj = {
                    listId: listId,
                    taskId: taskId
                }
                this.$store.dispatch('moveTask', obj)
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
        height: 540px;
        display: flex;
        flex-flow: column;
        position: relative;
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
    /* } */
    /* } */
</style>