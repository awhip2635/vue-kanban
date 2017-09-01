let Board = require('../models/board')
let List = require('../models/list')
let Task = require('../models/task')
let Comments = require('../models/comments')
console.log('right page')
module.exports = {
  Board: {
    path: '/userboards/:boardId',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Board'
      Board.findById(req.params.boardId)
        .then(board => {
          console.log(board)
          res.send(handleResponse(action, board))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  //lists
  ListbyBoardId: {
    path: '/userboards/:boardId/lists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Lists by boardId'
      
      List.find({boardId: req.params.boardId})
        .then(list => {
          res.send(handleResponse(action, list))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  PostList: {
    path: '/userboards/:boardId/lists',
    reqType: 'post',
    method(req, res, next){
      let action = 'Post Lists to board'
      
      List.create(req.body)
        .then(list => {
          res.send(handleResponse(action, list))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  DeleteList: {
    path: '/userboards/:boardId/lists/:listId',
    reqType: 'delete',
    method(req, res, next){
      let action = 'Delete Lists from board'
      List.findByIdAndRemove(req.params.listId)
        .then(list => {
          res.send(handleResponse(action, list))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  //tasks
  TaskbyListId: {
    path: '/userboards/:boardId/lists/:listId/task',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Tasks by listId'
      
      Task.find({listId: req.params.listId})
        .then(task => {
          res.send(handleResponse(action, task))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  PostTask: {
    path: '/userboards/:boardId/lists/:listId/task',
    reqType: 'post',
    method(req, res, next){
      let action = 'Post Task to list'
      
      Task.create(req.body)
        .then(task => {
          res.send(handleResponse(action, task))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  PutTask: {
    path: '/userboards/:boardId/lists/:listId/task/:taskId',
    reqType: 'put',
    method(req, res, next){
      let action = 'Moving task to new list'
      Task.findByIdAndUpdate({listId: req.params.listId}, task)
      .then(task=>{
        res.send(handleResponse(action, task))
      })
      .catch(error=> {
        return next(handleResponse(action, null, error))
      })
    }
  },
  DeleteTask: {
    path: '/userboards/:boardId/lists/:listId/task/:taskId',
    reqType: 'delete',
    method(req, res, next){
      let action = 'Delete Task from List'
      Task.findByIdAndRemove(req.params.taskId)
        .then(task => {
          res.send(handleResponse(action, task))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  //comments
  CommentbyTaskId: {
    path: '/userboards/:boardId/lists/:listId/task/:taskId/comments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find comments by taskId'
      
      Comments.find({taskId: req.params.taskId})
        .then(comment => {
          res.send(handleResponse(action, comment))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  PostComment: {
    path: '/userboards/:boardId/lists/:listId/task/:taskId/comments',
    reqType: 'post',
    method(req, res, next){
      let action = 'Post Comment to task'
      Comments.create(req.body)
        .then(comment => {
          res.send(handleResponse(action, comment))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  DeleteComment: {
    path: '/userboards/:boardId/lists/:listId/task/:taskId/comments/:commentId',
    reqType: 'delete',
    method(req, res, next){
      let action = 'Delete comment from task'
      Comments.findByIdAndRemove(req.params.commentId)
        .then(comment => {
          res.send(handleResponse(action, comment))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }