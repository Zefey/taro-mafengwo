import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import NavBar from "../../component/NavBar";

import "./index.scss";

@connect(
    ({ commonInfo }) => ({
        commonInfo
    }),
    dispatch => ({
    })
)
class Mine extends Component {
      config = {
        navigationBarTitleText: "我的"
      };

    state = {
        userId:'10001',
        userAvatar:'http://zefey.com/file/1580710698566.jpeg',
        userName:'什么鬼',
        joinTime:'2020-01-28',
        focus:0,
        fans:0,
        custom:0

    }

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
        const { nickName,avatarUrl } = this.props.commonInfo;
        const { userId,joinTime,focus,fans,custom,userName,userAvatar} = this.state;
        return (
            <View className="mine">
                <NavBar title="个人中心" showLeft={true} style={{backgroundColor:'#555'}} textColor={'#fff'}/>
                <View className="userWrap">
                    <View className="userInfo">
                        <Image src={avatarUrl} className="userAvatar"/>
                        <View className="userTextWrap">
                            <Text className="userName">{nickName}</Text>
                            <Text className="userId">UID:{userId}</Text>
                            <Text className="userTime">{joinTime} 加入马蜂窝</Text>
                        </View>
                    </View>
                    <View className="aboutView">
                        <View className="aboutItem">
                            <Text className="aboutText">{focus}</Text>
                            <Text className="aboutText">关注</Text>
                        </View>
                        <View className="aboutItem">
                            <Text className="aboutText">{fans}</Text>
                            <Text className="aboutText">粉丝</Text>
                        </View>
                        <View className="aboutItem">
                            <Text className="aboutText">{custom}</Text>
                            <Text className="aboutText">访客</Text>
                        </View>
                    </View>
                </View>
                <View className="travelView">
                    <View className="travelTextView">
                        <Text className="travelTitle">旅行记录</Text>
                        <Text className="travelSubTitle">分享你的专属旅行记忆</Text>
                    </View>
                    <View className="travelBtn">
                        <Text className="travelBtnText">立即发布</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Mine;
