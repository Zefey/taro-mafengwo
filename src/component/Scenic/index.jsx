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
class Scenic extends Taro.Component {
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

    goDetail = data => {
        let param = this.Qs(data);
        Taro.navigateTo({
            url: `/pages/scenicDetail/index?${param}`
        });
    };

    Qs = data => {
        let QsData = [];
        for (let key in data) {
            QsData.push(
                `${key}=${
                    typeof data[key] === "object"
                        ? JSON.stringify(data[key])
                        : data[key]
                }`
            );
        }
        return (QsData = QsData.join("&"));
    };

    render() {
        const { style } = this.props;
        const { data } = this.state;
        console.log('ScenicWrap',data);
        return (
            <View className="ScenicWrap" style={style}>
                <Text className="ScenicText">热门景点</Text>
                {data.map((item, index) => {
                    let tags = item.tags && item.tags.split(",");
                    return (
                        <View
                            className="scenicItemView"
                            key={index}
                            onClick={() => {
                                this.goDetail(item);
                            }}
                        >
                            <Image className="scenicImg" src={item.img} />
                            <View className="itemContent">
                                <Text className="routeText">{item.name}</Text>
                                <View className="tagsWrapView">
                                    {tags &&
                                        tags.map((item1, index1) => {
                                            return (
                                                <View
                                                    key={index1}
                                                    className="tagItem"
                                                >
                                                    <Text className="tagText">
                                                        {item1}
                                                    </Text>
                                                </View>
                                            );
                                        })}
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}
export default Scenic;
