let Board = require('../models/board')

module.exports = {
  Board: {
    path: '/userboards/:boardId',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Board'
      Boards.findById({creatorId: req.session.uid},{boardId: req.params.boardId})
        .then(board => {
          res.send(handleResponse(action, board))
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