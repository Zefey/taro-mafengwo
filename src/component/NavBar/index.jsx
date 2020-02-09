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
        const { showLeft = false } = this.props;
        const style = {
            paddingTop: Taro.$statusBarHeight + "px"
        };
        return (
            <View className="navbarWrap" style={style}>
                {showLeft && (
                    <View
                        className="iconfont iconleft navLeft"
                        onClick={this.clickHandler}
                    />
                )}
                <View className="title">{this.props.title}</View>
            </View>
        );
    }
}
export default Navbar;
