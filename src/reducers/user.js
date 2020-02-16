import { UPDATE_INFO } from '../constants/user'

const INITIAL_STATE = {
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_INFO:
      return {
        ...state,
        ...action.data
      }
     default:
       return state
  }
}
