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
    boards: [{name: 'This is total rubbish'}],
    activeBoard: {},
    error: {},
    loggedIn: false,
    registering: false,
    logging: false
  },
  mutations: {
    setBoards(state, data){
      state.boards = data
    },
    handleError(state, err){
      state.error = err
    },
    changeLog(state){
      state.loggedIn = !state.loggedIn
    },
    reg(state){
      state.registering = true
      state.logging = false
    },
    log(state){
      
      state.registering = false
      state.logging = true
    }
  },
  actions: {
    //when writing your auth routes (login, logout, register) be sure to use auth instead of api for the posts
    login({commit, dispatch}, obj){
      auth.post("login", obj)
          .then((res) => {
            console.log(res)
              // res = JSON.parse(res);
              if (res.data.message == "Invalid Email or Password"){
                return console.log(res.data.message)
              } else {
                dispatch('changeLog')
              }

          })
          .catch(() => console.log('error'))
  },
    register({commit, dispatch}, obj){
      auth.post("register", obj)
          .then((res) => {
            // console.log(res)
              // res = JSON.parse(res);
              if (res.data.message){
                console.log('account created')
                dispatch('changeLog')
              } else if (res.error){
                  alert("Invalid Email or password");
              }
          })
          .catch(() => console.log('error'))
  },
  logout({commit, dispatch}){
    auth.delete('logout')
    .then((res)=>{
      console.log(res.data.message)
      dispatch('changeLog')
    })
    .catch(( )=> console.log('error'))
  },
  reg({commit, dispatch}){
    commit('reg')
  },
  log({commit, dispatch}){
    commit('log')
  },
  changeLog({commit, dispatch}){
    commit('changeLog')
  },

    getBoards({commit, dispatch}) {
      api('boards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    getBoard({commit, dispatch},id) {
      api('boards/' + id)
        .then(res => {
          commit('setActiveBoard', res.data.data)
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    createBoard({commit, dispatch}, board) {
      // debugger
      api.post('boards/',board)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    removeBoard({commit, dispatch}, board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(err=>{
          commit('handleError', err)
        })
    },
    handleError({commit, dispatch}, err){
      commit('handleError', err)
    }
  }

})


export default store
