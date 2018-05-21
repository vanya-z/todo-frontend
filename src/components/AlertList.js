import React from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert'

const AlertList = ({ alerts, removeAlert }) => (
  <div>
    {alerts.map(alert =>
      <Alert
        key={alert.id}
        {...alert}
        onClick={() => removeAlert(alert.id)}
      />
    )}
  </div>
)

AlertList.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired).isRequired,
  removeAlert: PropTypes.func.isRequired
}

export default AlertList
