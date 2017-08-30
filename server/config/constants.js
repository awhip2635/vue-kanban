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
    endpoint: 'Boards',
    useCustomRoutes: true
  },
  list: {
    name: 'List',
    endpoint: 'Lists'
    
  },

  task: {
    name: 'Task',
    endpoint: 'Tasks'
  },

  comments: {
    name: 'Comments',
    endpoint: 'Comments'
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