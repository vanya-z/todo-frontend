import { connect } from 'react-redux'
import { removeAlert } from '../actions'
import AlertList from '../components/AlertList'

const mapStateToProps = state => ({
  alerts: state.alerts
})

const mapDispatchToProps = dispatch => ({
  removeAlert: id => {
    dispatch(removeAlert(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertList)
