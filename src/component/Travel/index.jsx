import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import DateUtil from '../../util/dateUtil';

import "./index.scss";

@connect(
    ({ travel }) => ({
        travel
    }),
    dispatch => ({
    })
)
class Travel extends Taro.Component {
    static options = {
        addGlobalClass: true
    };

    constructor(props) {
        super(props);
        let data = props.travel.data;
        this.formatData(data);
    }

    componentWillReceiveProps(nextProps){
        let data = nextProps.travel.data;
        this.formatData(data);
    }

    formatData = (data) => {
        let expect = [];
        let firstCol = [];
        let secondCol = [];
        for(let i in data){
            if(i%2 == 0){
                firstCol.push(data[i]);
            }else{
                secondCol.push(data[i]);
            }
        }
        expect.push(firstCol);
        expect.push(secondCol);
        
        this.setState({
            data:expect
        })
    }

    goDeail = (data) => {
        let param = this.Qs(data);
        Taro.navigateTo({
            url: `/pages/travelDetail/index?${param}`
        });
    }

    Qs = (data) => {
        let QsData = []
        for (let key in data) {
          QsData.push(`${key}=${data[key]}`)
        }
        return QsData = QsData.join('&')
    }

    render() {
        const { data } = this.state;
        const { style } = this.props;
        console.log('data',data);
        return (
            <View className="travelWrap" style={style}>
                <Text className="travelTitleText">正在旅行</Text>
                <View className="travelList">
                    {data && data.map((item1,index1)=>(
                        <View className="travelItemWrap" key={index1}>
                            {item1.map((item,index)=>{
                                let [first] = item.imgs;
                                return (
                                    <View className="travelItem" key={item.id} onClick={()=>{this.goDeail(item)}}>
                                        <Image className="travelImg" src={first} mode={'widthFix'}/>
                                        <View className="travelTitleView1">
                                            <View className="iconfont iconlocation-fill locatioonIcon"/>
                                            <Text className="travelTitle">{item.location}</Text>
                                        </View>
                                        <Text className="descText">{item.content}</Text>
                                        <View className="bottomView">
                                            <View className="leftView">
                                                <Image src={item.user_avatar} className="userAvatar"/>
                                                <View className="leftViewText">
                                                    <Text className="userName">{item.user_name}</Text>
                                                    <Text className="createTime">{DateUtil.formatDate(item.time)}</Text>
                                                </View>
                                            </View>
                                            <View className="rightView">
                                                <View className="iconfont iconheart likeIcon"/>
                                                <Text className="likeCount">{item.likes}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
export default Travel;
