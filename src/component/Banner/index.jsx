import Taro from "@tarojs/taro";
import { View,Swiper,SwiperItem,Image,Text } from "@tarojs/components";

import "./index.scss";

class Banner extends Taro.Component {

    constructor(props){
        super(props);
        let data = props.data || [];
        this.state={
            data:data
        }
    }
    state = {
        data: [
            {
                id:1,
                img: "http://zefey.com/file/1580613191115.jpg",
                title: "新年快乐"
            },
            {
                id:2,
                img: "http://zefey.com/file/1580614986847.jpg",
                title: "恭喜发财"
            },
            {
                id:3,
                img: "http://zefey.com/file/1580615570040.jpg",
                title: "世界和平"
            }
        ]
    };

    render() {
        const { data } = this.state;
        const style = {
            paddingTop: Taro.$statusBarHeight + "px",
            
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
                                <Image src={item.img} className="swiperImg"/>
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
