import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";
import Banner from "../../component/Banner";
import QuickKnow from "../../component/QuickKnow";
import TravelRoute from "../../component/TravelRoute";
import Travel from "../../component/Travel";
import Scenic from "../../component/Scenic";

@connect(
    ({ banner,scenic }) => ({
        banner,
        scenic
    }),
    dispatch => ({
        
    })
)
class Destination extends Component {
    //   config = {
    //     navigationBarTitleText: "我的"
    //   };

    state = {
        bannerData:[
            {
                id:1,
                img: "http://zefey.com/file/1580613191115.jpg",
                title: "新年快乐",
                url:'https://www.baidu.com/'
            },
            {
                id:2,
                img: "http://zefey.com/file/1580615570040.jpg",
                title: "世界和平",
                url:'https://www.baidu.com/'
            }
        ]
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        const { banner,quickKnow,routeData,scenic } = this.props;
        return (
            <View className="destination">
                <Banner data={banner.bannerData2}/>
                <QuickKnow style={{marginTop:'-8px'}} data={quickKnow}/>
                <TravelRoute data={routeData}/>
                {/* <Travel /> */}
                <Scenic data={scenic.data}/>
            </View>
        );
    }
}

export default Destination;
