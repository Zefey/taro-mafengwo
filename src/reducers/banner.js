import { UPDATE_BANNER1,UPDATE_BANNER2 } from '../constants/banner'

const INITIAL_STATE = {
    bannerData1:[],
    bannerData2:[]
}

export default function banner (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_BANNER1:
      return {
        ...state,
        bannerData1:action.data
      }
    case UPDATE_BANNER2:
      return {
        ...state,
        bannerData2:action.data
      }
     default:
       return state
  }
}
