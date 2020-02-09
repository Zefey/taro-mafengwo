import { UPDATE_INFO } from '../constants/commonInfo'

const INITIAL_STATE = {
  city:'广州'
}

export default function commonInfo (state = INITIAL_STATE, action) {
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
