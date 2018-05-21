import { combineReducers } from 'redux'
import alerts from './alerts'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  alerts,
  todos,
  visibilityFilter
})
