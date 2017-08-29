import Vue from 'vue'
import Router from 'vue-router'
import Boards from 'components/Boards'
import Board from 'components/Board'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userboards',
      name: 'Boards',
      component: Boards
    },{
      path: '/userboards/:id',
      name: 'Board',
      component: Board
    },{
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
