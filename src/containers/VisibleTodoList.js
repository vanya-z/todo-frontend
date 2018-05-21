import { connect } from 'react-redux'
import { setTasks, toggleTodo, addAlert } from '../actions'
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
  toggleTodo: id => {
    fetch(`${API_ROOT}/tasks/${id}/toggle`, {method: 'put'})
    .then(function(response) {
      if (response.ok) {
        response.json().then(json => {
          dispatch(toggleTodo(json))
        })
      } else {
        response.json().then(json => {
          dispatch(addAlert({type: 'danger', message: json.error}))
        })
      }
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

loadTasks()