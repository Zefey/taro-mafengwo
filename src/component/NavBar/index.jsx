import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";

class Navbar extends Taro.Component {
    static options = {
        addGlobalClass: true
    };

    clickHandler = () => {
        Taro.navigateBack();
    };

    render() {
        const { showLeft = false,title,style,textColor } = this.props;
        const style1 = {
            paddingTop: Taro.$statusBarHeight + "px",
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
            </View>
        );
    }
}
export default Navbar;
