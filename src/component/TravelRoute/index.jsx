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
class TravelRoute extends Taro.Component {

    constructor(props){
        super(props);
        this.state = {
            data:[
                {id:1,name:'潮州老城时光经典3日',img:'http://zefey.com/file/1580796950484.png'},
                {id:2,name:'南澳岛深度旅游线路',img:'http://zefey.com/file/1580797828759.jpeg'}
            ]
        }
    }

    render() {
        const { style } = this.props;
        const { data } = this.state;
        return (
            <View className="travelRouteWrap" style={style}>
                <Text className="travelRouteText">行程路线</Text>
                <View className="routeList">
                    {data.map((item,index)=>{
                        return (
                            <View key={item.id} className="routeView">
                                <Image className="routeImg" src={item.img}/>
                                <Text className="routeText">{item.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}
export default TravelRoute;
