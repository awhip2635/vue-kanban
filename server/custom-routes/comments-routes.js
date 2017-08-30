let Lists = require('../models/list')
let Board = require('../models/board')
let Tasks = require('../models/task')
let Comments = require ('../models/comments')

module.exports = {
  Comments: {
    path: '/api/userboards/:boardId/lists/:listId/tasks/:taskId/comments',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Comments'
      Comments.findById({taskId: req.params.taskId})
        .then(comments => {  
          res.send(handleResponse(action, comments))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  
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