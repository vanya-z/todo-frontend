import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import Confirm from './Confirm'

const Todo = ({ toggleTask, deleteTask, completed, title, id }) => (
  <li className="list-group-item">
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#999999' : '#000000'
      }}>
      {title}
    </span>
    <span className="float-right">
      <button type="button" onClick={toggleTask} className={completed ? "btn btn-sm btn-outline-success align-top mx-2" : "btn btn-sm btn-outline-light align-top mx-2"}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <Confirm deleteTask={() => deleteTask()}></Confirm>
    </span>
  </li>
)

Todo.propTypes = {
  toggleTask: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo
