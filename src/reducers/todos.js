const todos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks
    case 'ADD_TASK':
      return [
        action.task,
        ...state
      ]
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.task.id)
          ? {...task, completed: action.task.completed}
          : task
      )
    case 'DELETE_TASK':
      return state.filter(task =>
        task.id !== action.task.id
      )
    default:
      return state
  }
}

export default todos
