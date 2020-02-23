import Taro, { Component } from "@tarojs/taro";
import {
    SCENIC_LIST
  } from '../constants/scenic'
  
export const update = (data) => {
    return {
        type: SCENIC_LIST,
        data
    }
}

export function getScenic (data) {
    return dispatch => {
        Taro.request({
            url: 'http://zefey.com:12345/mfw/scenicList',
            data:data,
            success:  (res) => {
                let data = res.data.data;
                dispatch(update(data))
            },
            fail: (err) => {
                console.log('bannder err',err)
            }
        })
    }
}