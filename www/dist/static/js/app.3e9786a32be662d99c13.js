webpackJsonp([0],[,,,,function(t,s,e){"use strict";var i=e(2),o=e.n(i),a=e(79),n=e(61),r=e.n(n),c=e(60),d=e.n(c),l=e(10),u=e.n(l);o.a.use(a.a),s.a=new a.a({routes:[{path:"/userboards",name:"Boards",component:r.a},{path:"/userboards/:id/lists",name:"Board",component:d.a},{path:"/",name:"Login",component:u.a}]})},,,,,,function(t,s,e){e(54);var i=e(1)(e(43),e(75),"data-v-60b1dd3e",null);t.exports=i.exports},function(t,s,e){e(51);var i=e(1)(e(45),e(72),"data-v-41f50306",null);t.exports=i.exports},,function(t,s,e){"use strict";var i=e(17),o=e.n(i),a=e(2),n=e.n(a),r=e(81),c=e(4),d=o.a.create({baseURL:"//our-kanban-vue.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),l=o.a.create({baseURL:"//our-kanban-vue.herokuapp.com/",timeout:2e3,withCredentials:!0});n.a.use(r.a);var u=new r.a.Store({state:{boards:[],activeBoard:{},activeLists:{},activeTasks:{},comments:{},error:{},loggedIn:!1,registering:!1,logging:!1},mutations:{setBoards:function(t,s){t.boards=s},handleError:function(t,s){t.error=s},changeLog:function(t){t.loggedIn=!t.loggedIn},reg:function(t){t.registering=!0,t.logging=!1},log:function(t){t.registering=!1,t.logging=!0},setActiveBoard:function(t,s){t.activeBoard=s},setLists:function(t,s){t.activeLists=s},setTasks:function(t,s){var e=(s.boardId,s.listId),i=s.tasks;n.a.set(t.activeTasks,e,i)},clearTasks:function(t){t.activeTasks=[]},setComments:function(t,s){var e=s.taskId,i=s.comments;n.a.set(t.comments,e,i)},getAuth:function(t,s){t.user=s}},actions:{login:function(t,s){t.commit,t.dispatch;l.post("login",s).then(function(t){return"successfully logged in"==t.data.message?(c.a.push("userboards"),console.log(t.data.message)):console.log(t.data.message)}).catch(function(){return console.log("error")})},register:function(t,s){var e=(t.commit,t.dispatch);l.post("register",s).then(function(t){t.data.message?(console.log("account created"),e("changeLog"),c.a.push("userboards")):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},logout:function(t){var s=(t.commit,t.dispatch);l.delete("logout").then(function(t){console.log(t.data.message),s("getAuth")}).catch(function(){return console.log("error")})},reg:function(t){var s=t.commit;t.dispatch;s("reg")},log:function(t){var s=t.commit;t.dispatch;s("log")},changeLog:function(t){var s=t.commit;t.dispatch;s("changeLog")},getAuth:function(t){var s=t.commit;t.dispatch;l("authenticate").then(function(t){if(!t.data.data)return c.a.push("/");s("getAuth",t.data.data),c.a.push("userboards")}).catch(function(t){console.log(t),c.a.push("/")})},getBoards:function(t){var s=t.commit;t.dispatch;d("userboards").then(function(t){s("setBoards",t.data.data),s("setLists",{})}).catch(function(t){s("handleError",t)})},getBoard:function(t,s){var e=t.commit;t.dispatch;d("userboards/"+s).then(function(t){e("setActiveBoard",t.data.data)}).catch(function(t){e("handleError",t)})},createBoard:function(t,s){var e=t.commit,i=t.dispatch;d.post("boards/",s).then(function(t){i("getBoards")}).catch(function(t){e("handleError",t)})},editBoard:function(t,s){var e=t.commit,i=t.dispatch;console.log(s),d.put("boards/"+s.boardId,s).then(function(t){console.log(t),i("getBoards",s.boardId)}).catch(function(t){e("handleError",t)})},removeBoard:function(t,s){var e=t.commit,i=t.dispatch;d.delete("boards/"+s._id).then(function(t){i("getBoards")}).catch(function(t){e("handleError",t)})},getLists:function(t,s){var e=t.commit;t.dispatch;d("userboards/"+s+"/lists").then(function(t){e("setLists",t.data.data)}).catch(function(t){e("handleError",t)})},createList:function(t,s){var e=t.commit,i=t.dispatch;d.post("userboards/"+s.boardId+"/lists/",s).then(function(t){i("getLists",s.boardId)}).catch(function(t){e("handleError",t)})},editList:function(t,s){var e=t.commit,i=t.dispatch;d.put("lists/"+s.listId,s).then(function(t){i("getLists",s.boardId)}).catch(function(t){e("handleError",t)})},removeList:function(t,s){var e=t.commit,i=t.dispatch;d.delete("userboards/"+s.boardId+"/lists/"+s._id).then(function(t){i("getLists",s.boardId)}).catch(function(t){e("handleError",t)})},getTasks:function(t,s){var e=t.commit;t.dispatch;d("userboards/"+s.boardId+"/lists/"+s.listId+"/task").then(function(t){e("setTasks",{tasks:t.data.data,boardId:s.boardId,listId:s.listId})}).catch(function(t){e("handleError",t)})},createTask:function(t,s){var e=t.commit,i=t.dispatch;d.post("userboards/"+s.boardId+"/lists/"+s.listId+"/task",s).then(function(t){i("getTasks",s)}).catch(function(t){e("handleError",t)})},moveTask:function(t,s){var e=t.commit,i=t.dispatch,o=s.task.listId;s.task.listId=s.listId,d.put("tasks/"+s.task._id,s).then(function(t){i("getTasks",{boardId:s.boardId,listId:s.listId}),i("getTasks",{boardId:s.boardId,listId:o})}).catch(function(t){e("handleError",t)})},editTask:function(t,s){var e=t.commit,i=t.dispatch;d.put("tasks/"+s.task._id,s).then(function(t){i("getTasks",{boardId:s.boardId,listId:s.listId})}).catch(function(t){e("handleError",t)})},deleteTask:function(t,s){var e=t.commit,i=t.dispatch;d.delete("tasks/"+s.taskId).then(function(t){i("getTasks",s)}).catch(function(t){e("handleError",t)})},getComments:function(t,s){var e=t.commit;t.dispatch;d("userboards/"+s.boardId+"/lists/"+s.listId+"/task/"+s.taskId+"/comments").then(function(t){e("setComments",{comments:t.data.data,boardId:s.boardId,listId:s.listId,taskId:s.taskId})}).catch(function(t){e("handleError",t)})},createComment:function(t,s){var e=t.commit,i=t.dispatch;d.post("userboards/"+s.boardId+"/lists/"+s.listId+"/task/"+s.taskId+"/comments",s).then(function(t){i("getComments",s)}).catch(function(t){e("handleError",t)})},deleteComment:function(t,s){var e=t.commit,i=t.dispatch;console.log(s),d.delete("comments/"+s.commentId).then(function(t){i("getComments",s)}).catch(function(t){e("handleError",t)})},handleError:function(t,s){var e=t.commit;t.dispatch;e("handleError",s)}}});s.a=u},function(t,s){},function(t,s,e){e(48);var i=e(1)(e(35),e(69),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(64),o=e.n(i),a=e(10),n=e.n(a),r=e(65),c=e.n(r);s.default={name:"app",components:{Error:o.a,Login:n.a,Foot:c.a},mounted:function(){this.$store.dispatch("getAuth")}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(11),o=e.n(i),a=e(66),n=e.n(a);s.default={name:"board",data:function(){return{name:"",description:"",taskDescription:""}},mounted:function(){this.$store.dispatch("getBoard",this.$route.params.id),this.$store.dispatch("getLists",this.$route.params.id)},methods:{createList:function(t){var s={name:this.name,description:this.description,boardId:t};this.$store.dispatch("createList",s),this.name="",this.description=""},logout:function(){this.$store.dispatch("logout"),this.$store.dispatch("getAuth")},createTask:function(t,s){this.taskDescription},deleteTask:function(t){return this.$store.dispatch("removeTask",task)}},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.activeLists},tasks:function(){return this.$store.state.activeTasks},loadTasks:function(){console.log(this.$store.state.activeLists)}},components:{Tasks:o.a,Lists:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"boards",data:function(){return{name:"",description:"",editor:!0}},mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards}},methods:{createBoard:function(){this.$store.dispatch("createBoard",{name:this.name,description:this.description}).then(this.name="",this.description="")},removeBoard:function(t){this.$store.dispatch("removeBoard",t)},logout:function(){this.$store.dispatch("logout"),this.$store.dispatch("getAuth")},showEditor:function(){this.editor=!this.editor},editBoard:function(t,s,e){var i={boardId:t,name:s,description:e};this.$store.dispatch("editBoard",i)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"CommentForm",props:["taskId","listId","boardId"],data:function(){return{description:""}},methods:{createComment:function(t,s,e){var i={taskId:t,listId:s,boardId:e,description:this.description};this.$store.dispatch("createComment",i),this.description=""}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Comments",props:["comment","taskId","listId","boardId"],data:function(){return{}},methods:{deleteComment:function(t){var s={boardId:this.boardId,listId:this.listId,taskId:this.taskId,commentId:t};this.$store.dispatch("deleteComment",s)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"error",computed:{error:function(){return this.$store.state.error}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"foot",data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(11),o=e.n(i),a=e(67),n=e.n(a),r=e(12),c=e.n(r);s.default={name:"list",props:["list","boardId","listId"],data:function(){return{addTask:!1,showDescription:!1,editor:!1}},mounted:function(){this.$store.dispatch("getTasks",{boardId:this.boardId,listId:this.list._id})},components:{Tasks:o.a,Taskform:n.a,draggable:c.a},computed:{tasks:function(){return this.$store.state.activeTasks[this.list._id]}},methods:{deleteList:function(t){return this.$store.dispatch("removeList",t)},toggleAddTask:function(){this.addTask=!this.addTask},toggleDescription:function(){this.showDescription=!this.showDescription},showEditor:function(){this.editor=!this.editor},editList:function(){var t={listId:this.list._id,boardId:this.boardId,name:this.list.name,description:this.list.description};this.$store.dispatch("editList",t)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"login",data:function(){return{name:"",email:"",password:"",logEmail:"",logPassword:""}},methods:{login:function(){var t={email:this.logEmail,password:this.logPassword};this.$store.dispatch("login",t)},logout:function(){this.$store.dispatch("logout")},register:function(){var t={name:this.name,email:this.email,password:this.password};this.$store.dispatch("register",t),name=""},log:function(){this.$store.dispatch("log")},reg:function(){this.$store.dispatch("reg")}},computed:{loggedIn:function(){return this.$store.state.loggedIn},registering:function(){return this.$store.state.registering},logging:function(){return this.$store.state.logging}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"TaskForm",props:["listId","boardId"],data:function(){return{description:""}},methods:{createTask:function(t,s){var e={description:this.description,boardId:s,listId:t};this.$store.dispatch("createTask",e),this.description=""}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(63),o=e.n(i),a=e(62),n=e.n(a),r=e(12),c=e.n(r);s.default={name:"Tasks",props:["task","listId","boardId"],data:function(){return{taskDescription:"",edit:"",showComments:!1,showEdit:!1}},methods:{createTask:function(t,s){this.taskDescription;this.taskDescription=""},deleteTask:function(t){var s={boardId:this.boardId,listId:this.listId,taskId:t};this.$store.dispatch("deleteTask",s)},moveTask:function(t,s){var e={listId:t,boardId:s,task:this.task};this.$store.dispatch("moveTask",e)},addComments:function(){this.showComments=!this.showComments},showEditor:function(){this.showEdit=!this.showEdit},editTask:function(){var t={listId:this.listId,boardId:this.boardId,taskId:this.task._id,description:this.task.description,task:this.task};this.$store.dispatch("editTask",t)}},computed:{board:function(){return this.$store.state.activeBoard},activeLists:function(){return this.$store.state.activeLists},comments:function(){return this.$store.state.comments[this.task._id]}},mounted:function(){this.$store.dispatch("getComments",{boardId:this.boardId,listId:this.listId,taskId:this.task._id})},components:{Comments:o.a,Commentform:n.a,draggable:c.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),o=e.n(i),a=e(15),n=e.n(a),r=e(4),c=e(13),d=e(16),l=e.n(d),u=e(14);e.n(u);o.a.use(l.a),new o.a({el:"#app",store:c.a,router:r.a,template:"<App/>",components:{App:n.a}})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,e){e(53);var i=e(1)(e(36),e(74),"data-v-5337eb44",null);t.exports=i.exports},function(t,s,e){e(47);var i=e(1)(e(37),e(68),"data-v-0c6e3af6",null);t.exports=i.exports},function(t,s,e){e(57);var i=e(1)(e(38),e(78),"data-v-e477b68a",null);t.exports=i.exports},function(t,s,e){e(49);var i=e(1)(e(39),e(70),"data-v-17721eac",null);t.exports=i.exports},function(t,s,e){e(52);var i=e(1)(e(40),e(73),"data-v-49c58c80",null);t.exports=i.exports},function(t,s,e){e(55);var i=e(1)(e(41),e(76),"data-v-a458dfb4",null);t.exports=i.exports},function(t,s,e){e(50);var i=e(1)(e(42),e(71),"data-v-2392e0e6",null);t.exports=i.exports},function(t,s,e){e(56);var i=e(1)(e(44),e(77),"data-v-b860abbe",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boards"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-10 col-xs-2"},[e("button",{staticClass:"btn logout btn-default",on:{click:t.logout}},[t._v("Logout")])])]),t._v(" "),e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-xs-offset-3 col-xs-6"},[e("div",{staticClass:"new"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.createBoard(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add New Board")])])])])])]),t._v(" "),t._l(t.boards,function(s){return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"panel panel-board"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn glyphicon glyphicon-pencil",on:{click:function(s){t.showEditor()}}})]),t._v(" "),e("div",{staticClass:"col-xs-9"},[t.editor?e("div",[e("h2",[e("router-link",{attrs:{to:"/userboards/"+s._id+"/lists"}},[t._v(t._s(s.name))])],1),t._v(" "),e("h5",[t._v("\n                    "+t._s(s.description)+"\n                  ")])]):e("div",[e("form",{staticClass:"form-inline edit-form",on:{submit:function(e){e.preventDefault(),t.editBoard(s._id,s.name,s.description),t.showEditor()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"board.name"}],staticClass:"form-control edit-input",attrs:{type:"text"},domProps:{value:s.name},on:{input:function(t){t.target.composing||(s.name=t.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default edit-btn"},[t._v("Edit")])])]),t._v(" "),e("form",{staticClass:"form-inline edit-form",on:{submit:function(e){e.preventDefault(),t.editBoard(s._id,s.name,s.description),t.showEditor()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.description,expression:"board.description"}],staticClass:"form-control edit-input",attrs:{type:"text"},domProps:{value:s.description},on:{input:function(t){t.target.composing||(s.description=t.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default edit-btn"},[t._v("Edit")])])])])]),t._v(" "),e("div",{staticClass:"col-xs-2"},[e("button",{staticClass:"btn btn-danger",on:{click:function(e){t.removeBoard(s)}}},[t._v("Remove")])])])])])])])})],2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-offset-4 col-xs-4"},[e("h1",{staticClass:"boards-top-heading"},[e("strong",[t._v("BOARDS")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view"),t._v(" "),e("foot")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comments"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8 col-sm-8"},[e("h5",{staticClass:"comment"},[t._v("\n                "+t._s(t.comment.description)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-xs-2 col-sm-2"},[e("button",{staticClass:"btn glyphicon glyphicon-remove",on:{click:function(s){t.deleteComment(t.comment._id)}}})])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lists"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn btn-efault glyphicon glyphicon-plus",on:{click:t.toggleAddTask}})]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"q btn",on:{click:t.toggleDescription}},[e("strong",[t._v("?")])])]),t._v(" "),e("div",{staticClass:"col-xs-offset-5 col-xs-1"},[e("button",{staticClass:"btn glyphicon glyphicon-pencil",on:{click:function(s){t.showEditor()}}})]),t._v(" "),e("div",{staticClass:"col-xs-offset-1 col-xs-1"},[e("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteList(t.list)}}},[t._v("X")])])]),t._v(" "),e("div",{staticClass:"row"},[t.editor?e("div",[e("div",{staticClass:"col-xs-12"},[e("form",{staticClass:"form-inline edit-form",on:{submit:function(s){s.preventDefault(),t.editList(),t.showEditor()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.name,expression:"list.name"}],staticClass:"form-control edit-input",attrs:{type:"text"},domProps:{value:t.list.name},on:{input:function(s){s.target.composing||(t.list.name=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default edit-btn"},[t._v("Edit")])])]),t._v(" "),e("form",{staticClass:"form-inline edit-form",on:{submit:function(s){s.preventDefault(),t.editList(),t.showEditor()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.list.description,expression:"list.description"}],staticClass:"form-control edit-input",attrs:{type:"text"},domProps:{value:t.list.description},on:{input:function(s){s.target.composing||(t.list.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default edit-btn"},[t._v("Edit")])])])])]):e("div",[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"name"},[e("h2",{staticClass:"list-credentials"},[t._v(t._s(t.list.name))])])])])]),t._v(" "),e("div",{staticClass:"row"},[t.showDescription?e("div",[e("div",{staticClass:"col-xs-12"},[e("p",{staticClass:"list-description"},[t._v(t._s(t.list.description))])])]):t._e()]),t._v(" "),e("div",{staticClass:"row"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.addTask,expression:"addTask"}]},[e("div",{staticClass:"col-xs-offset-1 col-xs-10"},[e("taskform",{attrs:{listId:t.list._id,boardId:t.boardId}})],1)])]),t._v(" "),e("div",{staticClass:"row"},t._l(t.tasks,function(s){return e("div",[e("div",{staticClass:"col-xs-12"},[e("tasks",{attrs:{task:s,listId:t.list._id,boardId:t.boardId}})],1)])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"phone-viewport complete-example"},[e("md-whiteframe",{staticClass:"md-small",attrs:{"md-tag":"md-toolbar","md-elevation":"2","md-theme":"light-blue"}},[e("div",{staticClass:"md-toolbar-container"},[e("button",{staticClass:"glyphicon glyphicon-th-list btn",on:{click:function(s){t.$refs.sidenav.toggle()}}}),t._v(" "),e("button",{staticClass:"btn glyphicon glyphicon-comment",on:{click:function(s){t.addComments()}}}),t._v(" "),e("button",{staticClass:"btn glyphicon glyphicon-pencil",on:{click:function(s){t.showEditor()}}}),t._v(" "),e("span",{staticStyle:{flex:"1"}}),t._v(" "),e("button",{staticClass:"glyphicon glyphicon-trash btn",on:{click:function(s){t.deleteTask(t.task._id)}}})]),t._v(" "),e("div",{staticClass:"md-toolbar-container description"},[t.showEdit?e("div",[e("form",{staticClass:"form-inline edit-form",on:{submit:function(s){s.preventDefault(),t.editTask(),t.showEditor()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"form-control edit-input",attrs:{type:"text"},domProps:{value:t.task.description},on:{input:function(s){s.target.composing||(t.task.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default edit-btn"},[t._v("Edit")])])])]):e("div",[e("h3",[t._v("\n                            "+t._s(t.task.description)+"\n                        ")])])])]),t._v(" "),t.showComments?e("div",[e("md-list",{staticClass:"md-double-line"},[t._l(t.comments,function(s){return e("div",[e("comments",{attrs:{comment:s,taskId:t.task._id,listId:t.listId,boardId:t.boardId}})],1)}),t._v(" "),e("div",{staticClass:"c-form"},[e("commentform",{attrs:{taskId:t.task._id,listId:t.listId,boardId:t.boardId}})],1)],2)],1):t._e(),t._v(" "),e("md-sidenav",{ref:"sidenav",staticClass:"md-left",attrs:{"md-theme":"blue"}},[e("md-toolbar",{staticClass:"md-account-header"},[e("md-list",{staticClass:"md-transparent"},[e("md-list-item",[e("div",{staticClass:"md-list-text-container",on:{click:function(s){t.$refs.sidenav.toggle()}}},[e("span",[t._v("Scroll to Select New List")])])])],1)],1),t._v(" "),e("md-list",t._l(t.activeLists,function(s){return e("div",[e("md-list-item",{staticClass:"md-primary",on:{click:function(e){t.$refs.sidenav.toggle(),t.moveTask(s._id,t.boardId,t.task)}}},[e("span",[t._v(t._s(s.name))])])],1)}))],1)],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.error.message?e("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-xs-offset-8 col-xs-2"},[e("button",{staticClass:"btn boards btn-default but",on:{click:t.logout}},[t._v("Logout")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"heading"},[e("h2",{staticClass:"board-credentials"},[t._v("\n            "+t._s(t.board.name)+"\n          ")])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-4 col-xs-4"},[e("div",{staticClass:"addList"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createList(t.board._id)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control list",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control list",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default list-btn",attrs:{type:"submit"}},[t._v("Create List")])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"lists"},t._l(t.lists,function(s){return e("div",[e("lists",{attrs:{list:s,boardId:t.board._id}})],1)}))])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-2"},[e("a",{staticClass:"home",attrs:{href:"/#/userboards"}},[e("button",{staticClass:"btn btn-default but"},[t._v("Return to Boards")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-3"},[e("h2",{staticClass:"words"},[t._v("Log In")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.login(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.logEmail,expression:"logEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.logEmail},on:{input:function(s){s.target.composing||(t.logEmail=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.logPassword,expression:"logPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.logPassword},on:{input:function(s){s.target.composing||(t.logPassword=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Login")])])])]),t._v(" "),e("div",{staticClass:"col-xs-offset-2 col-xs-3"},[e("div",{staticClass:"text-center"},[e("h2",{staticClass:"words"},[t._v("Register")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Register")])])])])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"foot"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"bottom"},[e("div",{staticClass:"col-xs-12 col-sm-3"},[e("h4",[t._v("Website Developed By:")])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-2"},[e("a",{attrs:{href:"https://github.com/awhip2635"}},[e("h4",[t._v("Alex Whipple")])])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-2"},[e("a",{attrs:{href:"https://treverjohnston.github.io/"}},[e("h4",[t._v("Trever Johnston")])])])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"task-form"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createTask(t.listId,t.boardId)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Task Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Add Task")])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"commentForm"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"form-group"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.createComment(t.taskId,t.listId,t.boardId)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[t._v("Add Comment")])])])])])])},staticRenderFns:[]}}],[46]);
//# sourceMappingURL=app.3e9786a32be662d99c13.js.map