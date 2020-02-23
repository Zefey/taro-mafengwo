import { combineReducers } from 'redux'
import user from './user'
import travel from './travel'
import banner from './banner'
import scenic from './scenic'

export default combineReducers({
  user,
  travel,
  banner,
  scenic
})
