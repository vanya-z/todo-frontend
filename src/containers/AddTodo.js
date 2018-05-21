import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAlert } from '../actions'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import { API_ROOT } from '../api-config';

const AddTodo = ({ dispatch }) => {
  let input

  const createTask = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      dispatch(addAlert({type: 'danger', message: "Task cannot be empty."}))
      return
    }
    fetch(`${API_ROOT}/tasks`, {
      method: 'post',
      body: JSON.stringify({title: input.value})
    }).then(function(response) {
      if (response.ok) {
        response.json().then(json => {
          dispatch(addTodo(json))
          input.value = ''
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

  return (
    <div>
      <form className="form-inline" onSubmit={e => {createTask(e)}}>
        <input ref={node => input = node} className="form-control mr-sm-2" placeholder="Enter a new task" />
        <button className="btn btn-success mt-2 mt-sm-0"><FontAwesomeIcon icon={faPlus} /> Add task</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
