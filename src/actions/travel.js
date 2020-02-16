import Taro, { Component } from "@tarojs/taro";
import {
    TRAVEL_LIST,
    TRAVEL_CHANGE_LOCATION
  } from '../constants/travel'
  
export const update = (data) => {
    return {
        type: TRAVEL_LIST,
        data
    }
}

export const changelocation = (data) => {
    return {
        type: TRAVEL_CHANGE_LOCATION,
        data
    }
} 

export function getTravel (data) {
    return dispatch => {
        Taro.request({
            url: 'http://zefey.com:12345/mfw/travelList',
            data:data,
            success:  (res) => {
                let data = res.data.data;
                for(let i in data){
                    data[i].imgs = data[i].imgs.split(',');
                }
                dispatch(update(data))
            },
            fail: (err) => {
                console.log('bannder err',err)
            }
        })
    }
}