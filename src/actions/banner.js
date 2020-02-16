import Taro, { Component } from "@tarojs/taro";
import {
    UPDATE_BANNER1,
    UPDATE_BANNER2
  } from '../constants/banner'
  
export const updateBanner1 = (data) => {
    return {
        type: UPDATE_BANNER1,
        data
    }
}

export const updateBanner2 = (data) => {
    return {
        type: UPDATE_BANNER2,
        data
    }
}

export function getBanner (data) {
    return dispatch => {
        Taro.request({
            url: 'http://zefey.com:12345/mfw/bannerList',
            data: data,
            success:  (res) => {
                if(data.type == 1){
                    dispatch(updateBanner1(res.data.data));
                }else if(data.type == 2){
                    dispatch(updateBanner2(res.data.data));
                }
            },
            fail: (err) => {
                console.log('bannder err',err)
            }
        })
    }
}