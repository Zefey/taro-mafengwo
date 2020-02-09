import {
    UPDATE_INFO
  } from '../constants/commonInfo'
  
  export const update = (data) => {
    return {
      type: UPDATE_INFO,
      data
    }
  }