import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text,Input } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { update } from "../../actions/user";

import NavBar from "../../component/NavBar";

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
        update(data) {
            dispatch(update(data));
        },
    })
)
class Search extends Component {
    //   config = {
    //     navigationBarTitleText: "目的地切换"
    //   };

    state = {
        data:[],
        result:[],

    }

    componentDidMount(){
        this.getLocationList();
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    getLocationList = () => {
        Taro.request({
            url: "http://zefey.com:12345/mfw/locationList",
            success: res => {
                console.log('getLocationList',res);
                let data = res.data.data;
                this.setState({
                    data:data
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }

    switch = (city) => {
        this.props.update({
            ...this.props.user,
            locationCity:city
        })
        Taro.navigateBack();
    }

    onInput = (data) => {
        let value = data.detail.value;
        this.fuzzyQuery(value);
    }

    fuzzyQuery = (keyWord) => {
        if(!keyWord){
            this.setState({result:[]})
            return;
        }
        const list = this.state.data;
        let arr = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.indexOf(keyWord) >= 0) {
                arr.push(list[i]);
            }
        }
        this.setState({
            result:arr
        })
    }

    cancel = () => {
        Taro.navigateBack();
    }

    render() {
        const { searchText,data,result } = this.state;
        console.log('searchText',searchText);
        return (
            <View className="searchPage">
                <NavBar key={"searchPage"} title="马蜂窝" showLeft={true}/>
                <View className="searchWrap">
                    <View className="searchView">
                        <View className="iconfont iconsearch"/>
                        <Input type='text' placeholder='搜索目的地/景点/攻略' className="searchText" focus={true} onInput={this.onInput}/>
                    </View>
                    <Text className="cancelText" onClick={this.cancel}>取消</Text>
                </View>
                {result.map((item,index)=>{
                    return (
                        <View key={item.id} className="searchItem" onClick={()=>{this.switch(item.name)}}>
                            <View className="dotView"/>
                            <Text className="searchItemText">{item.name}</Text>
                        </View>
                    )
                })}
            </View>
        );
    }
}

export default Search;
