import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import Banner from "../../component/Banner";
import Travel from "../../component/Travel";

import "./index.scss";

@connect(
    ({ banner }) => ({
        banner
    }),
    dispatch => ({
    })
)
class Read extends Component {
    //   config = {
    //     navigationBarTitleText: "我的"
    //   };

    state = {
        bannerData:[
            {
                id:1,
                img: "http://zefey.com/file/1580614986847.jpg",
                title: "恭喜发财",
                url:'https://www.baidu.com/'
            },
        ]
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        const {banner,travelData} = this.props;
        return (
            <View className="read">
                <Banner data={banner.bannerData1}/>
                <Travel style={{marginTop:'-8px'}}/>
            </View>
        );
    }
}

export default Read;
