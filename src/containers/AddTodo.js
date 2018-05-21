import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAlert } from '../actions'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
import { API_ROOT } from '../api-config';

const AddTodo = ({ dispatch }) => {
  let input
  let loading = 'Add'

  const isDisabled = () => {
    return false
  }

  const createTask = (e) => {
    e.preventDefault()
    this.loading = 'true'
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
    })
  }

  return (
    <div>
      <form className="form-inline" onSubmit={e => {createTask(e)}}>
        <input ref={node => input = node} className="form-control mr-sm-2" placeholder="Enter a new task" />
        <button className="btn btn-success mt-2 mt-sm-0" disabled={isDisabled()}>Add {this.loading} task <FontAwesomeIcon icon={faCheckCircle} /></button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
