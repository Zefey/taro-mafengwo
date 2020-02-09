import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { update } from "../../actions/commonInfo";
import SearchBar from "../../component/SearchBar";
import Read from "../read";
import Destination from "../destination";

import "./index.scss";

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

    //   componentDidMount() {
    //     setTimeout(() => {
    //       Taro.navigateTo({
    //         url: "/pages/mine/index"
    //       });
    //     }, 2000);
    //   }

    state = {
        scrollTop: 0,
        tabViewData:[
            {id:1,name:'推荐阅读'},
            {id:2,name:'目的地'}
        ],
        tabViewIndex:1
    };

    componentDidMount(){
        //模拟定位
        this.props.update({
            city:'潮州'
        })
    }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

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

    render() {
        const { scrollTop,tabViewData,tabViewIndex } = this.state;
        const style = {
            paddingTop: Taro.$statusBarHeight + "px",
            
        };
        return (
            <ScrollView
                className="index"
                onScroll={this.onScroll}
                scrollY
                enableBackToTop
                scrollWithAnimation
            >
                {/* 搜索栏 */}
                <SearchBar scrollTop={scrollTop} />
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
        );
    }
}

export default Index;
