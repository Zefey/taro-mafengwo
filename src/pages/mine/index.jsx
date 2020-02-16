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
class Mine extends Component {

    componentDidMount() {
        console.log("this.$router.params", this.$router.params);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    release = () => {
        console.log('release');
        Taro.navigateTo({
            url: "/pages/addTravel/index"
        });
    }

    render() {
        const { nickName,avatarUrl,create_time,id,focus,fans,custom } = this.props.user;
        return (
            <View className="mine">
                <NavBar key={'mine'} title="个人中心" showLeft={true} style={{backgroundColor:'#555'}} textColor={'#fff'}/>
                <View className="userWrap">
                    <View className="userInfo">
                        <Image src={avatarUrl} className="userAvatar"/>
                        <View className="userTextWrap">
                            <Text className="userName">{nickName}</Text>
                            <Text className="userId">UID:{id}</Text>
                            <Text className="userTime">{DateUtil.formatDate(create_time)} 加入马蜂窝</Text>
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
                    <View className="travelBtn" onClick={this.release}>
                        <Text className="travelBtnText">立即发布</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Mine;
