import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import NavBar from "../../component/NavBar";

import "./index.scss";

@connect(
    ({  }) => ({
        
    }),
    dispatch => ({
        
    })
)
class Mine extends Component {
    //   config = {
    //     navigationBarTitleText: "我的"
    //   };

    componentDidMount() {
        console.log("this.$router.params", this.$router.params);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        return (
            <View className="mine">
                <NavBar title="我的" showLeft={true} />
                <View>
                    <Text>Hello, World</Text>
                </View>
            </View>
        );
    }
}

export default Mine;
