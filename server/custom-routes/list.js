let Lists = require('../models/list')
let Board = require('../models/board')

module.exports = {
  Lists: {
    path: '/api/boards/:boardId/lists',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Lists'
      Lists.findById({boardId: req.params.boardId})
        .then(list => {
            console.log(list)
          res.send(handleResponse(action, list))
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