import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { update } from "../../actions/commonInfo";

import NavBar from "../../component/NavBar";

import "./index.scss";

@connect(
    ({ commonInfo }) => ({
        commonInfo
    }),
    dispatch => ({
        update(data) {
            dispatch(update(data));
        },
    })
)
class LocalSwitch extends Component {
      config = {
        navigationBarTitleText: "目的地切换"
      };

    state = {
        current:0,
        data:[
            {
                id:1,
                name:'热门',
                data:[
                    {id:1,name:'北京',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:2,name:'上海',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:3,name:'广州',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:4,name:'深圳',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:5,name:'扬州',img:'http://zefey.com/file/1581431713491.jpg'},
                ]
            },
            {
                id:2,
                name:'广东',
                data:[
                    {id:1,name:'广州',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:2,name:'深圳',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:3,name:'深圳',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:4,name:'深圳',img:'http://zefey.com/file/1581431713491.jpg'},
                ]
            },
            {
                id:3,
                name:'江苏',
                data:[
                    {id:1,name:'苏州',img:'http://zefey.com/file/1581431713491.jpg'},
                    {id:2,name:'南京',img:'http://zefey.com/file/1581431713491.jpg'},
                ]
            },
        ],

    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    switch = (city) => {
        this.props.update({
            locationCity:city
        })
        Taro.navigateBack();
    }

    render() {
        const { data,current } = this.state;
        let cityList = data[current].data;
        return (
            <View className="localSwitch">
                <NavBar title="目的地切换" showLeft={true}/>
                <View className="localSwitchWrap">
                    <View className="navView">
                        {data.map((item,index)=>{
                            return (
                                <View key={item.id} className="navItem" style={index == current ? {backgroundColor:'#fff'} : {backgroundColor:'#eee'}} onClick={()=>{this.setState({current:index})}}>
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
