import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, ScrollView,MovableArea,MovableView } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { update } from "../../actions/commonInfo";
import SearchBar from "../../component/SearchBar";
import Read from "../read";
import Destination from "../destination";
import "./index.scss";

const QQMapWX = require('../../sdk/qqmap-wx-jssdk');

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
class Index extends Component {
    // config = {
    //   navigationBarTitleText: '首页'
    // }

    constructor(props){
        super(props);
        this.qqmapsdk = null;
        this.state = {
            scrollTop: 0,
            tabViewData:[
                {id:1,name:'推荐阅读'},
                {id:2,name:'目的地'}
            ],
            tabViewIndex:1
        };
    }

    

    componentDidMount(){
        //sdk初始化
        this.qqmapsdk = new QQMapWX({
            key: 'RM6BZ-57A3O-OUWWO-SRK3I-JWHI7-POBVT'
        })
        //登录
        this.login();
        //定位
        this.location();
    }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    login = () => {
        //微信登录
        Taro.login({
            success:  (res) => {
                if (res.code) {
                    //发起网络请求
                    Taro.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session',
                        data: {
                            appid:'wx5bd348ec3a45bb65',
                            secret:'5c2e6371c4b7a118ce35fcc16bb6d602',
                            js_code: res.code,
                            grant_type:'authorization_code'
                        },
                        success:  (res) => {
                            console.log('login res',res.data)
                            this.props.update(res.data);
                        },
                        fail: (err) => {
                            console.log('login err',err)
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    }

    location = () => {
        Taro.getLocation({complete:(res)=>{
            console.log('getLocation',res);
            if(this.qqmapsdk){
                this.qqmapsdk.reverseGeocoder({
                    location: {
                      latitude: res.latitude,
                      longitude: res.longitude
                    },
                    success: (result)=> {
                      console.log('success',result);
                      let {city} = result.result['ad_info'];
                      city = city.replace('市','');
                      this.props.update({
                        locationCity:city
                      })
                    },
                    fail: (result)=> {
                      console.log('fail',result);
                      this.props.update({
                        locationCity:'定位失败',
                      })
                    }
                  })
            }
        }});
    }

    onScroll = e => {
        // console.log(e.detail);
        const { scrollTop } = e.detail;
        this.setState({
            scrollTop: scrollTop
        });
    };

    toggleTab = (i) => {
        this.setState({
            tabViewIndex:i
        })
    }

    bindGetUserInfo = (data) => {
        console.log('bindGetUserInfo',data);
        let userInfo = data.detail.userInfo;
        this.props.update(userInfo);
        Taro.navigateTo({
            url: "/pages/mine/index"
        });
    }

    render() {
        const { scrollTop,tabViewData,tabViewIndex } = this.state;
        const { commonInfo } = this.props;
        const style = {
            paddingTop: Taro.$statusBarHeight + "px",
            
        };
        return (
            <View>
                <MovableArea className="moveWrap">
                    <MovableView className="moveView" direction='all' x={350} y={500}>
                        <Button openType='getUserInfo' onGetUserInfo={this.bindGetUserInfo}>
                            <View className="iconfont iconuser userIcon"/>
                            <Text className="userText">{commonInfo.openid ? '我的' : '登录'}</Text>
                        </Button>
                    </MovableView>
                </MovableArea>
                <ScrollView
                    className="index"
                    onScroll={this.onScroll}
                    scrollY
                    enableBackToTop
                    scrollWithAnimation
                >
                    {/* 搜索栏 */}
                    <SearchBar key={'SearchBar'} scrollTop={scrollTop} />
                    {/* tabView切换 */}
                    <View className="tabViewWrap" style={style}>
                        {tabViewData.map((item,index)=>{
                            return (
                                (index == tabViewIndex ?
                                <View key={item.id} className="tabViewItemActive">
                                    <Text className="tabViewTextActive">{item.name}</Text>
                                    <View className="underline"/>
                                </View>
                                :
                                <View key={item.id} className="tabViewItem" onClick={()=>{this.toggleTab(index)}}>
                                    <Text className="tabViewText">{item.name}</Text>
                                </View>)
                            )
                        })}
                    </View>
                    {tabViewIndex == 0 ?
                    <Read />
                    :
                    <Destination />
                    }
                </ScrollView>
            
            </View>
        );
    }
}

export default Index;
