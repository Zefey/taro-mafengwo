import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import NavBar from "../../component/NavBar";

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
    })
)
class Quick extends Component {
      config = {
        navigationBarTitleText: "我的"
      };

    state = {
        data:[]
    }

    componentDidMount() {
        console.log("this.$router.params", this.$router.params);
        this.getQuickKnowList();
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    getQuickKnowList = () => {
        const {locationCity} = this.props.user;
        Taro.request({
            url: "http://zefey.com:12345/mfw/quickKnowList",
            data:{
                location:locationCity
            },
            success: res => {
                console.log('quickKnowList',res);
                let data = res.data.data;
                let expect = [];
                let json = {};
                for(let i=0;i<data.length;i++){
                    if(data[i].big_title){
                        json[data[i].big_title] = [];
                    }
                }
                for(let i=0;i<data.length;i++){
                    for(let key in json){
                        if(data[i].big_title == key){
                            json[data[i].big_title].push(data[i]);
                        }
                    }
                }
                for(let key in json){
                    let temp = {};
                    temp.title = key;
                    temp.data = json[key];
                    expect.push(temp);
                }
                console.log('expect',expect);
                this.setState({
                    data:expect
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }

    render() {
        const { data } = this.state;
        return (
            <View className="quick">
                <NavBar key={'quick'} title="快速了解" showLeft={true} />
                <View className="divLine1"/>
                {data.map((item,index)=>{
                    return (
                        <View key={index}>
                            <View className="bigTitle">
                                <View className="titleBg"/>
                                <Text >{item.title}</Text>
                            </View>
                            {item.data.map((item1,index1)=>{
                                return (
                                    <View key={item1.id}>
                                        <Text className="smallTitle">{item1.title}</Text>
                                        {!!item1.img && <Image className="titleImg" src={item1.img}/>}
                                        <Text className="mainContent">{item1.content}</Text>
                                        <View className="divLine"/>
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </View>
        );
    }
}

export default Quick;
