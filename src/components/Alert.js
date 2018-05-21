import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ onClick, type, message }) => (
  <div className={"alert alert-dismissible fade show alert-" + type} role="alert">
    <strong>Holy guacamole!</strong> {message}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)

Alert.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Alert
