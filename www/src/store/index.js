import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'



let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    boards: [{ name: 'This is total rubbish' }],
    activeBoard: {},
    activeLists: {},
    activeTasks: [],
    activeComments: {},
    error: {},
    loggedIn: false,
    registering: false,
    logging: false
  },
  mutations: {
    setBoards(state, data) {
      state.boards = data
    },
    handleError(state, err) {
      state.error = err
    },
    changeLog(state) {
      state.loggedIn = !state.loggedIn
    },
    reg(state) {
      state.registering = true
      state.logging = false
    },
    log(state) {

      state.registering = false
      state.logging = true
    },
    setActiveBoard(state, payload) {
      state.activeBoard = payload
    },
    setLists(state, payload) {
      state.activeLists = payload
    },
    setTasks(state, payload) {
      payload.forEach(function(element) {
        state.activeTasks.push(element)
        
      }, this);
      console.log('active tasks: ', payload)
    },
    clearTasks(state){
      state.activeTasks = []
    }

  },

  // on app.vue
  // mounted(){
  //   this.$store.dispatch('getAuth')
  // }

  // getAuth(){
  // auth('authenticate'){
  // .then(res => {
  //   if (!res.data.data){
  //     return router.push('./login')
  //   }
  //   state.user = res.data.data
  //   router.push('/userboards')
  // }).catch(err=> {
  //   router.push('./login')
  // })
  // })
  // }
  // }
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
    login({ commit, dispatch }, obj) {
      auth.post("login", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message == "Invalid Email or Password") {
            return console.log(res.data.message)
          } else {
            dispatch('changeLog')
          }

        })
        .catch(() => console.log('error'))
    },
    register({ commit, dispatch }, obj) {
      auth.post("register", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message) {
            console.log('account created')
            dispatch('changeLog')
          } else if (res.error) {
            alert("Invalid Email or password");
          }
        })
        .catch(() => console.log('error'))
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then((res) => {
          console.log(res.data.message)
          dispatch('changeLog')
        })
        .catch(() => console.log('error'))
    },
    reg({ commit, dispatch }) {
      commit('reg')
    },
    log({ commit, dispatch }) {
      commit('log')
    },
    changeLog({ commit, dispatch }) {
      commit('changeLog')
    },

    //login items ^^^^^^

    // board items below
    getBoards({ commit, dispatch }) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
          commit('setLists', {})
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getBoard({ commit, dispatch }, id) {
      api('userboards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createBoard({ commit, dispatch }, board) {
      api.post('boards/', board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeBoard({ commit, dispatch }, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    // board items ^^^^^^^^^^^^

    // list items below
    getLists({ commit, dispatch }, boardId) {
      api(`userboards/${boardId}/lists`)
        .then(res => {
          commit('setLists', res.data.data)
          // console.log(res)
          for (var i = 0; i < res.data.data.length; i++) {
            var list = res.data.data[i]
            var obj = {
              boardId: list.boardId,
              listId: list._id
            }
            dispatch('getTasks', obj)

          }
      // console.log(obj)
    })
  .catch(err => {
    commit('handleError', err)
  })
    },
createList({ commit, dispatch }, list) {
  // console.log(list)
  api.post(`userboards/${list.boardId}/lists/`, list)
    .then(res => {
      dispatch('getLists', list.boardId)
    })
    .catch(err => {
      commit('handleError', err)
    })
},
removeList({ commit, dispatch }, list) {
  // console.log(list)  
  api.delete(`userboards/${list.boardId}/lists/${list._id}`)
    .then(res => {
      dispatch('getLists', list.boardId)
    })
    .catch(err => {
      commit('handleError', err)
    })
},
getTasks({ commit, dispatch }, task) {
  console.log('Task:',task)
  api(`userboards/${task.boardId}/lists/${task.listId}/task`)
    .then(res => {
      console.log('Task Res:', res)
      commit('setTasks', res.data.data)
      // console.log(res)
    })
    .catch(err => {
      commit('handleError', err)
    })
},
createTask({ commit, dispatch }, task) {
  // console.log(list)
  commit('clearTasks')
  api.post(`userboards/${task.boardId}/lists/${task.listId}/task`, task)
    .then(res => {
      console.log('created',res)
      dispatch('getTasks', task)
    })
    .catch(err => {
      commit('handleError', err)
    })
},
removeTask({ commit, dispatch }, task) {
  // console.log(list)  
  api.delete(`userboards/${task.boardId}/lists/${task.listId}/task/${task._id}`)
    .then(res => {
      dispatch('getTasks', task.listId)
    })
    .catch(err => {
      commit('handleError', err)
    })
},

handleError({ commit, dispatch }, err) {
  commit('handleError', err)
}
  }

})


export default store
