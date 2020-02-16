import Taro from "@tarojs/taro";
import { View,Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
    })
)
class SearchBar extends Taro.Component {
    static options = {
        addGlobalClass: true
    };

    constructor(props){
        super(props);
        this.state = {
            statusBarHeight:0,
            animationData:null
        }
    }

    componentDidMount(){
        Taro.getSystemInfo().then((res) => {
            this.setState({
                statusBarHeight:res.statusBarHeight || 0
            })
        })


        // Taro的动画真难用,不如自己手写
        
        // let animationData = Taro.createAnimation({
        //     duration: 1000,
        //     timingFunction: "ease",
        //     delay: 0
        // }).scale(2,2).rotate(45).step();

        // this.setState({
        //     animationData:animationData.export()
        // })
    }

    clickHandler = () => {
        Taro.navigateBack();
    };

    handleLocalSwitch = () => {
        console.log('handleLocalSwitch');
        Taro.navigateTo({
            url: "/pages/localSwitch/index"
        });
    }

    handleSearch = () => {
        console.log('handleSearch');
        Taro.navigateTo({
            url: "/pages/search/index"
        });
    }

    render() {
        const { scrollTop,user } = this.props;
        const { statusBarHeight } = this.state;

        let style = {
            paddingTop: (Taro.$statusBarHeight || statusBarHeight) + "px",
            backgroundColor:`rgba(255,255,255,${scrollTop/300 || 0})`
        };
        // console.log('scrollTop',scrollTop);
        return (
            <View className="searchBarWrap" style={style}>
                <View className="locationView" onClick={this.handleLocalSwitch}>
                    <Text className="locationText">{user.locationCity}</Text>
                    <View className="iconfont iconcaret-down"/>
                </View>
                <View className="searchView" onClick={this.handleSearch}>
                    <View className="iconfont iconsearch"/>
                    <Text className="searchText">搜索目的地/景点/攻略</Text>
                </View>
            </View>
        );
    }
}
export default SearchBar;
