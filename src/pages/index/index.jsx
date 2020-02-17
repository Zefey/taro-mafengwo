import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, ScrollView,MovableArea,MovableView } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { update } from "../../actions/user";
import { getTravel } from "../../actions/travel";
import { getBanner } from "../../actions/banner";
import SearchBar from "../../component/SearchBar";
import Read from "../read";
import Destination from "../destination";
import "./index.scss";

const QQMapWX = require('../../sdk/qqmap-wx-jssdk');

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
        update(data) {
            dispatch(update(data));
        },
        getBanner(data) {
            dispatch(getBanner(data));
        },
        getTravel(data) {
            dispatch(getTravel(data));
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
            statusBarHeight:0,
            scrollTop: 0,
            tabViewData:[
                {id:1,name:'推荐阅读'},
                {id:2,name:'目的地'}
            ],
            tabViewIndex:1,
            quickKnow:[],
            routeData:[]
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
        //获取系统参数
        this.getSystemInfo();
    }

    componentWillReceiveProps(nextProps) {
        let localChange = this.props.user.locationCity !== nextProps.user.locationCity;
        let nextCity = nextProps.user.locationCity;
        if(localChange){
            //地址改变,在这里更新一波数据
            console.log('localChange',localChange,nextCity);
            //banner数据
            this.props.getBanner({type:1,location:nextCity});
            this.props.getBanner({type:2,location:nextCity});
            //travel数据
            this.props.getTravel({location:nextCity});
            //quick数据
            this.getQuickKnowList(nextCity);
            //route数据
            this.getRouteList(nextCity);
        }
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
                            this.props.update({...this.props.user,...res.data});
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
                        ...this.props.user,
                        locationCity:city
                      })
                      //banner数据
                      this.props.getBanner({type:1,location:city});
                      this.props.getBanner({type:2,location:city});
                      //travel数据
                      this.props.getTravel({location:city});
                      //quick数据
                      this.getQuickKnowList(city);
                      //route数据
                      this.getRouteList(city);
                    },
                    fail: (result)=> {
                      console.log('fail',result);
                      this.props.update({
                        ...this.props.user,
                        locationCity:'定位失败',
                      })
                    }
                  })
            }
        }});
    }

    getSystemInfo = () => {
        Taro.getSystemInfo().then((res) => {
            this.setState({
                statusBarHeight:res.statusBarHeight || 0
            })
        })
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

    getQuickKnowList = (locationCity) => {
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
                for(let key in json){
                    let temp = {};
                    temp.name = key;
                    expect.push(temp);
                }
                console.log('quickKnow expect',expect);
                this.setState({
                    quickKnow:expect
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }

    getRouteList = (locationCity) => {
        Taro.request({
            url: "http://zefey.com:12345/mfw/routeList",
            data:{
                location:locationCity
            },
            success: res => {
                console.log('routeList',res);
                let data = res.data.data;
                let expect = [];
                let json = {};
                for(let i=0;i<data.length;i++){
                    if(data[i].title){
                        json[data[i].title] = [];
                    }
                }
                for(let i=0;i<data.length;i++){
                    for(let key in json){
                        if(data[i].title == key){
                            json[data[i].title].push(data[i]);
                        }
                    }
                }
                for(let key in json){
                    let value = json[key];
                    let [first] = value;
                    let temp = {};
                    if(first){
                        temp = {...temp,...first};
                    }
                    temp.data = value;
                    expect.push(temp);
                }
                console.log('expect111',expect);
                this.setState({
                    routeData:expect
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }

    bindGetUserInfo = (data) => {
        console.log('bindGetUserInfo',data);
        let userInfo = data.detail.userInfo;
        this.props.update({...this.props.user,...userInfo});
        Taro.navigateTo({
            url: "/pages/mine/index"
        });
    }

    render() {
        const { scrollTop,tabViewData,tabViewIndex,statusBarHeight,quickKnow,routeData } = this.state;
        const { user } = this.props;
        const style = {
            paddingTop: (Taro.$statusBarHeight || statusBarHeight) + "px",
        };
        return (
            <View>
                <MovableArea className="moveWrap">
                    <MovableView className="moveView" direction='all' x={350} y={500}>
                        <Button openType='getUserInfo' onGetUserInfo={this.bindGetUserInfo}>
                            <View className="iconfont iconuser userIcon"/>
                            <Text className="userText">{user.openid ? '我的' : '登录'}</Text>
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
                    <Read key="Read" />
                    :
                    <Destination key="Destination" quickKnow={quickKnow} routeData={routeData}/>
                    }
                </ScrollView>
            
            </View>
        );
    }
}

export default Index;
