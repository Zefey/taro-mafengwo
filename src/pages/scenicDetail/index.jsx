import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import NavBar from "../../component/NavBar";
import DateUtil from "../../util/dateUtil";
import Travel from "../../component/Travel";

const QQMapWX = require('../../sdk/qqmap-wx-jssdk');

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
    })
)
class ScenicDetail extends Component {

    state={
        address:''
    }


    componentDidMount(){
        let {latitude,longitude} = this.$router.params;
        //sdk初始化
        this.qqmapsdk = new QQMapWX({
            key: 'RM6BZ-57A3O-OUWWO-SRK3I-JWHI7-POBVT'
        })
        this.qqmapsdk.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: (result)=> {
              console.log('success',result);
              this.setState({
                address:result.result.address
              })
            },
            fail: (result)=> {
              console.log('fail',result);
              this.setState({
                address:'定位失败'
              })
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    navigate = () => {
        let {latitude,longitude} = this.$router.params;
        Taro.openLocation({
            latitude:parseFloat(latitude),
            longitude:parseFloat(longitude),
            scale: 18
        });
    }


    render() {
        let {name,location,tags,content,openTime} = this.$router.params;
        let {address} = this.state;
        tags = tags && tags.split(',');
        return (
            <View className="scenic">
                <NavBar key={'scenic'} title={name} showLeft={true}/>
                <View className="scenicView">
                    <Text className="smallTitle">{location}·景点玩乐</Text>
                    <Text className="titleText">{name}</Text>
                    <View className="tagsWrapView">
                        {tags && tags.map((item1,index1)=>{
                            return (
                                <View key={index1} className="tagItem">
                                    <Text className="tagText">{item1}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <Text className="content">{content}</Text>
                    <Text className="midTitleText">景点玩乐详情</Text>
                    <View className="detailViewWrap">
                        <View className="detailView">
                            <View className="iconfont iconlocation locatioonIcon"/>
                            <Text className="detailText1">{address}</Text>
                        </View>
                        <View className="navBtn" onClick={this.navigate}>
                            <View className="iconfont iconcloud locatioonIcon"/>
                            <Text className="navText">导航</Text>
                        </View>
                    </View>
                    <View className="detailView">
                        <View className="iconfont icontime-circle locatioonIcon"/>
                        <Text className="detailText1">开放时间  {openTime}</Text>
                    </View>
                </View>
                <Travel />
            </View>
        );
    }
}

export default ScenicDetail;
