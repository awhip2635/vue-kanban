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
    endpoint: 'userboards'
  },
  list: {
    name: 'List',
    endpoint: 'userboards/:boardId/lists'
  },

  task: {
    name: 'Task',
    endpoint: 'userboards/:boardId/lists/:listId/tasks'
  },

  comments: {
    name: 'Comments',
    endpoint: 'userboards/:boardId/lists/:listId/tasks/:taskId/comments'
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