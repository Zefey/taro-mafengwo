import Taro from "@tarojs/taro";
import { View,Swiper,SwiperItem,Image,Text } from "@tarojs/components";

import "./index.scss";

class Banner extends Taro.Component {

    constructor(props){
        super(props);
        let data = props.data || [];
        this.state={
            statusBarHeight:0,
            data:data
        }
    }

    componentDidMount(){
        Taro.getSystemInfo().then((res) => {
            this.setState({
                statusBarHeight:res.statusBarHeight || 0
            })
        })
    }

    componentWillReceiveProps(nextProps){
        let data = nextProps.data;
        this.setState({
            data
        })
    }

    itemClick = (item) => {
        Taro.navigateTo({
            url: `/pages/webPage/index?url=${item.url}`
        });
    }

    render() {
        const { data,statusBarHeight } = this.state;
        const style = {
            paddingTop: (Taro.$statusBarHeight || statusBarHeight) + "px",
            
        };
        let length = data.length;
        return length > 0 ? (
            <Swiper
                className="swiperWrap"
                indicatorColor="#999"
                indicatorActiveColor="#333"
                circular
                indicatorDots={length != 1}
                autoplay={length != 1}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperItem key={item.id}>
                            <View className="swiperItem" style={style}>
                                <Image src={item.img} className="swiperImg" onClick={()=>{this.itemClick(item);}}/>
                                <Text className="swiperTitle">{item.title}</Text>
                            </View>
                            <View className="swiperItemBg" style={{backgroundImage:`url(${item.img})`}}/>
                        </SwiperItem>
                    );
                })}
            </Swiper>
        ) : null;
    }
}
export default Banner;
