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
class QuickKnow extends Taro.Component {

    constructor(props){
        super(props);
        this.state = {
            data:[
                {id:1,name:`${this.props.commonInfo.city}概况`},
                {id:2,name:'不容错过'},
                {id:3,name:'重要城市'},
                {id:4,name:'热门景点'},
                {id:5,name:'人气美食'},
                {id:6,name:'交通指南'},
                {id:7,name:'实用信息'},
            ]
        }
    }

    render() {
        const { style } = this.props;
        const { data } = this.state;
        return (
            <View className="quickKnowWrap" style={style}>
                <Text className="quickKnowText">快速了解</Text>
                <View className="tagList">
                    {data.map((item,index)=>{
                        return (
                            <View key={item.id} className="tagView">
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
