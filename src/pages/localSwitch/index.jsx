import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
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
class LocalSwitch extends Component {
    //   config = {
    //     navigationBarTitleText: "目的地切换"
    //   };

    state = {
        current:0,
        data:[],

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
                let expect = [];
                let hot = [];
                let json = {};
                for(let i=0;i<data.length;i++){
                    if(data[i].type != 1){
                        break;
                    }
                    if(data[i].hot){
                        hot.push(data[i]);
                    }
                    if(data[i].pre_name){
                        json[data[i].pre_name] = [];
                    }
                }
                for(let i=0;i<data.length;i++){
                    if(data[i].type != 1){
                        break;
                    }
                    for(let key in json){
                        if(data[i].pre_name == key){
                            json[data[i].pre_name].push(data[i]);
                        }
                    }
                }
                expect= [
                    {
                        name:'热门',
                        data:hot
                    }
                ];
                for(let key in json){
                    let temp = {};
                    temp.name = key;
                    temp.data = json[key];
                    expect.push(temp);
                }
                this.setState({
                    data:expect
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

    render() {
        const { data,current } = this.state;
        let cityList = [];
        if(data && data.length >0){
            cityList = data[current].data;
        }
        return (
            <View className="localSwitch">
                <NavBar key={'localSwitch'} title="目的地切换" showLeft={true}/>
                <View className="localSwitchWrap">
                    <View className="navView">
                        {data.map((item,index)=>{
                            return (
                                <View key={index} className="navItem" style={index == current ? {backgroundColor:'#fff'} : {backgroundColor:'#eee'}} onClick={()=>{this.setState({current:index})}}>
                                    <Text className="navItemText" >{item.name}</Text>
                                </View>
                            )
                        })}
                    </View>
                    {current == 0 ?
                    <View className="contentView">
                        <Text className="cityTitle">热门城市</Text>
                        <View className="cityList">
                            {cityList.map((item,index)=>{
                                return (
                                    <Text className="cityText" key={item.id} onClick={()=>{this.switch(item.name)}}>
                                        {item.name}
                                    </Text>
                                )
                            })}
                        </View>
                    </View>
                    :
                    <View className="contentView">
                        <View className="cityList">
                            {cityList.map((item,index)=>{
                                return (
                                    <View className="cityItem" onClick={()=>{this.switch(item.name)}}>
                                        <Image src={item.img} className="cityImg"/>
                                        <Text className="cityText2">{item.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>}
                </View>
            </View>
        );
    }
}

export default LocalSwitch;
