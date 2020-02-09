import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";

@connect(
    ({ commonInfo }) => ({
        commonInfo
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
            animationData:null
        }
    }

    componentDidMount(){
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

    render() {
        const { scrollTop,commonInfo } = this.props;
        let style = {
            paddingTop: Taro.$statusBarHeight + "px",
            backgroundColor:`rgba(255,255,255,${scrollTop/300 || 0})`
        };
        return (
            <View className="searchBarWrap" style={style}>
                <View className="locationView">
                    <Text className="locationText">{commonInfo.city}</Text>
                    <View className="iconfont iconcaret-down"/>
                </View>
                <View className="searchView">
                    <View className="iconfont iconsearch"/>
                    <Text className="searchText">搜索目的地/景点/攻略</Text>
                </View>
            </View>
        );
    }
}
export default SearchBar;
