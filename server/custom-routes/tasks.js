let Lists = require('../models/list')
let Board = require('../models/board')
let Tasks = require('../models/task')

module.exports = {
  Tasks: {
    path: '/api/boards/:boardId/lists/:listId/tasks',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Tasks'
      Tasks.findById({listId: req.params.listId})
        .then(tasks => {  
          res.send(handleResponse(action, tasks))
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