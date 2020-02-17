import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import NavBar from "../../component/NavBar";
import DateUtil from "../../util/dateUtil";

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
    })
)
class RouteDetail extends Component {

    componentDidMount() {
        console.log("this.$router.params", this.$router.params);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}


    render() {
        let {title,contentImg,tags,data} = this.$router.params;
        tags = tags && tags.split(',');
        data = data && JSON.parse(data);
        return (
            <View className="route">
                <NavBar key={'route'} title={title} showLeft={true}/>
                <Image src={contentImg} className="contentImg"/>
                <View className="mainContent">

                    <Text className="titleText">{title}</Text>
                    <View className="tagsWrapView">
                        {tags && tags.map((item,index)=>{
                            return (
                                <View key={index} className="tagItem">
                                    <Text className="tagText">{item}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View className="routeWrapView">
                    <Text className="routeTitle">行程概览</Text>
                    <View className="dayRouteWrap">
                        {data && data.map((item,index)=>{
                            return (
                                <View className="dayRoute" key={index}>
                                    <Text className="routelocation">DAY{index+1}·{item.location}</Text>
                                    <Text className="routeTitle">DAY{index+1}·{item.location_title}</Text>
                                    <Text className="routeDesc">{item.route}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View className="routeDetailView">
                    {data && data.map((item,index)=>{
                        return (
                            <View className="routeDetailItem" key={index}>
                                <View className="routeLocalView">
                                    <View className="iconfont iconlocation-fill locatioonIcon"/>
                                    <Text className="routeLocalTitle">{item.location}</Text>
                                </View>
                                <Text className="routeDetailTitle">DAY{index+1}·{item.location_title}</Text>
                                <Image className="routeDetailImg" src={item.location_img}/>
                                <Text className="routeDetailText">{item.content}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}

export default RouteDetail;
