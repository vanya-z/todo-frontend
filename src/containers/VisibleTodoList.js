import { connect } from 'react-redux'
import { setTasks, toggleTask, deleteTask, addAlert } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import store from '../store'
import { API_ROOT } from '../api-config';

const loadTasks = () => {
  fetch(`${API_ROOT}/tasks`)
  .then(function(response) {
    if (response.ok) {
      response.json().then(json => {
        store.dispatch(setTasks(json || []))
      })
    } else {
      response.json().then(json => {
        store.dispatch(addAlert({type: 'danger', message: json.error}))
      })
    }
  }, function(error) {
    store.dispatch(addAlert({type: 'danger', message: error.message}))
  })
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTask: id => {
    fetch(`${API_ROOT}/tasks/${id}/toggle`, {method: 'put'})
    .then(function(response) {
      if (response.ok) {
        response.json().then(json => {
          dispatch(toggleTask(json))
        })
      } else {
        response.json().then(json => {
          dispatch(addAlert({type: 'danger', message: json.error}))
        })
      }
    }, function(error) {
      dispatch(addAlert({type: 'danger', message: error.message}))
    })
  },
  deleteTask: id => {
    fetch(`${API_ROOT}/tasks/${id}`, {method: 'delete'})
    .then(function(response) {
      if (response.ok) {
        response.json().then(json => {
          dispatch(deleteTask(json))
        })
      } else {
        response.json().then(json => {
          dispatch(addAlert({type: 'danger', message: json.error}))
        })
      }
    }, function(error) {
      dispatch(addAlert({type: 'danger', message: error.message}))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

loadTasks()