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
class QuickKnow extends Taro.Component {

    constructor(props){
        super(props);
        let data = props.data || [];
        this.state = {
            data:data
        }
    }

    componentWillReceiveProps(nextProps){
        let data = nextProps.data || [];
        this.setState({
            data:data
        })
    }

    goQuickKnow = () => {
        Taro.navigateTo({
            url: `/pages/quickKnow/index`
        });
    }

    render() {
        const { style } = this.props;
        const { data } = this.state;
        console.log('quickKnow',data);
        return (
            <View className="quickKnowWrap" style={style}>
                <Text className="quickKnowText">快速了解</Text>
                <View className="tagList">
                    {data.map((item,index)=>{
                        return (
                            <View key={index} className="tagView" onClick={this.goQuickKnow}>
                                <Text className="tagText">{item.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}
export default QuickKnow;
