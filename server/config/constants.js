const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  board: {
    name: 'Board',
    endpoint: 'boards'
  },
  list: {
    name: 'List',
    endpoint: 'boards/:boardId/lists'
  },

  task: {
    name: 'Task',
    endpoint: 'boards/:boardId/lists/:listId/tasks'
  },

  comments: {
    name: 'Comments',
    endpoint: 'boards/:boardId/lists/:listId/tasks/:taskId/comments'
  },
  
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}