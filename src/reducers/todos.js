const todos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.tasks
    case 'ADD_TODO':
      return [
        action.task,
        ...state
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.task.id)
          ? {...todo, completed: action.task.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
