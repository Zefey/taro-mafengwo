import Taro from "@tarojs/taro";
import { View,Text } from "@tarojs/components";

import "./index.scss";

class Navbar extends Taro.Component {
    static options = {
        statusBarHeight:0,
        addGlobalClass: true
    };

    clickHandler = () => {
        Taro.navigateBack();
    };

    componentDidMount(){
        Taro.getSystemInfo().then((res) => {
            this.setState({
                statusBarHeight:res.statusBarHeight || 0
            })
        })
    }

    render() {
        const { showLeft = false,title,style,textColor,showRelease,releaseClick,releaseColor } = this.props;
        const { statusBarHeight } = this.state;
        const style1 = {
            paddingTop: (Taro.$statusBarHeight || statusBarHeight) + "px",
            ...style
        };
        console.log('Navbar',title,showLeft);
        return (
            <View className="navbarWrap" style={style1}>
                {showLeft && (
                    <View
                        className="iconfont iconleft navLeft"
                        style={textColor && {color:textColor}}
                        onClick={this.clickHandler}
                    />
                )}
                <View className="title" style={textColor && {color:textColor}}>{title}</View>
                {showRelease &&
                <View className="navRight">
                    <View className="releaseBtn" style={{borderColor:releaseColor}} onClick={releaseClick}>
                        <View className="iconfont iconcloud releaseIcon" style={{color:releaseColor}}/>
                        <Text className="releaseText" style={{color:releaseColor}}>发布</Text>
                    </View>
                </View>}
            </View>
        );
    }
}
export default Navbar;
