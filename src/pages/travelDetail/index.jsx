import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text,Input } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { update } from "../../actions/user";

import NavBar from "../../component/NavBar";
import Travel from "../../component/Travel";

import "./index.scss";
import Reply from "../../component/Reply";
import DateUtil from "../../util/dateUtil";

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
class TravelDetail extends Component {
    //   config = {
    //     navigationBarTitleText: "目的地切换"
    //   };

    state = {
        imageHeights:[],
        current:0,
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    
    onChange = (data) => {
        let current = data.detail.current;
        this.setState({
            current
        })
    }

    imageLoad = (data) => {
        console.log('imageLoad',data);
        let imageHeights = this.state.imageHeights;
        let screenWidth = Taro.getSystemInfoSync().windowWidth;
        let imgHeight = data.target.height * (screenWidth / data.target.width);
        let id = data.target.id;
        imageHeights[id] = imgHeight;
        this.setState({
            imageHeights
        })
    }


    render() {
        const { imageHeights,current } = this.state;
        const { location,imgs,userAvatar,userName,content,time,id } = this.$router.params;
        let imgHeight = imageHeights[current] || 0;
        let imgArray = imgs ? imgs.split(',') : [];
        console.log('this.$router.params',this.$router.params,imageHeights,imgHeight);
        return (
            <View className="travelDetail">
                <NavBar key={'travelDetail'} title="马蜂窝" showLeft={true}/>
                <View className="travelTitleView">
                    <Text className="titleText">你正在看</Text>
                    <View className="travelLocalView">
                        <View className="iconfont iconlocation-fill locatioonIcon"/>
                        <Text className="travelLocalTitle">{location}</Text>
                    </View>
                </View>
                <Swiper
                    indicatorColor="#999"
                    indicatorActiveColor="#333"
                    circular
                    indicatorDots={imgArray.length != 1}
                    style={{height:`${imgHeight}px`}}
                    onChange={this.onChange}
                >
                    {imgArray.map((item, index) => {
                        return (
                            <SwiperItem key={index}>
                                <Image id={index} src={item} className="swiperImg" mode={'widthFix'} onLoad={this.imageLoad}/>
                            </SwiperItem>
                        );
                    })}
                </Swiper>
                <View className="travelContentWrap">
                    <View className="userInfoView">
                        <Image src={userAvatar} className="userAvatar"/>
                        <View className="leftViewText">
                            <Text className="userName">{userName}</Text>
                            <Text className="createTime">{DateUtil.formatDate(time)}</Text>
                        </View>
                    </View>
                    <View className="travelLocalView1">
                        <View className="iconfont iconlocation-fill locatioonIcon1"/>
                        <Text className="travelLocalTitle1">{location}</Text>
                    </View>
                    <View className="travelContent">
                        <Text>{content}</Text>
                    </View>
                </View>
                <View className="divLine"/>
                <Reply travelId={id}/>
                <View className="divLine2"/>
                <Travel/>
            </View>
        );
    }
}

export default TravelDetail;
