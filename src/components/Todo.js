import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'

const Todo = ({ onClick, completed, title }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? '#999999' : '#000000'
    }}
  >
    {title}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo
