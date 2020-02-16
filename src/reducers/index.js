import { combineReducers } from 'redux'
import user from './user'
import travel from './travel'
import banner from './banner'

export default combineReducers({
  user,
  travel,
  banner,
})
