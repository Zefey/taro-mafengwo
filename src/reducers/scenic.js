import { SCENIC_LIST } from '../constants/scenic'

const INITIAL_STATE = {
    data:[],
}

export default function scenic (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCENIC_LIST:
      return {
        ...state,
        data:action.data
      }
     default:
       return state
  }
}
