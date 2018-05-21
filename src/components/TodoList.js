import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTask, deleteTask }) => (
  <div className="list-group my-2">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleTask={() => toggleTask(todo.id)}
        deleteTask={() => deleteTask(todo.id)}
      />
    )}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TodoList
