import Taro, { Component } from "@tarojs/taro";
import { UPDATE_INFO } from "../constants/user";

const updateUserInfo = data => {
    return {
        type: UPDATE_INFO,
        data
    };
};

export function update(data) {
    return dispatch => {
        dispatch(updateUserInfo(data));
        let {openid,nickName,avatarUrl} = data;
        console.log('xxxxxx',openid,nickName,avatarUrl);
        if(openid && nickName && avatarUrl){
            Taro.request({
                url: "http://zefey.com:12345/user/login",
                data:{
                    openid:openid,
                    nickName:nickName,
                    avatarUrl:avatarUrl
                },
                method:'POST',
                success: res => {
                    console.log('remote login',res);
                    let [first] = res.data.data;
                    dispatch(updateUserInfo(first));
                },
                fail: err => {
                    console.log("remote login err", err);
                }
            });
        }
    };
}
