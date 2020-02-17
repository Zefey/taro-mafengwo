import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({})
)
class TravelRoute extends Taro.Component {
    constructor(props) {
        super(props);
        let data = props.data || [];
        this.state = {
            data: data
        };
    }

    componentWillReceiveProps(nextProps){
        let data = nextProps.data || [];
        this.setState({
            data:data
        })
    }

    goDetail = (data) => {
        let param = this.Qs(data);
        Taro.navigateTo({
            url: `/pages/routeDetail/index?${param}`
        });
    }

    Qs = (data) => {
        let QsData = []
        for (let key in data) {
          QsData.push(`${key}=${typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]}`)
        }
        return QsData = QsData.join('&')
    }

    render() {
        const { style } = this.props;
        const { data } = this.state;
        return (
            <View className="travelRouteWrap" style={style}>
                <Text className="travelRouteText">行程路线</Text>
                <ScrollView
                    className="routeList"
                    scrollWithAnimation={true}
                    scrollX={true}
                >
                    {data.map((item, index) => {
                        return (
                            <View className="routeViewW" key={index} onClick={()=>{this.goDetail(item)}}>
                                <View className="routeView">
                                    <Image
                                        className="routeImg"
                                        src={item.titleImg}
                                    />
                                    <Text className="routeText">
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}
export default TravelRoute;
