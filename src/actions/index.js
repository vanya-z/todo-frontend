export const setTasks = tasks => ({
  type: 'SET_TASKS',
  tasks
})

export const addTodo = task => ({
  type: 'ADD_TODO',
  task
})

export const toggleTodo = task => ({
  type: 'TOGGLE_TODO',
  task
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

let nextAlertId = 0
export const addAlert = alert => ({
  type: 'ADD_ALERT',
  id: nextAlertId++,
  alert
})

export const removeAlert = id => ({
  type: 'REMOVE_ALERT',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
