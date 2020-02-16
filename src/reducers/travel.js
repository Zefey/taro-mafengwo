import { TRAVEL_LIST,TRAVEL_CHANGE_LOCATION } from '../constants/travel'

const INITIAL_STATE = {
    data:[],
    location:''
}

export default function travel (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TRAVEL_LIST:
      return {
        ...state,
        data:action.data
      }
    case TRAVEL_CHANGE_LOCATION:
      return {
        ...state,
        location:action.data
      }
     default:
       return state
  }
}
