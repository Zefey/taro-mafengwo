import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./index.scss";

class TabView extends Taro.Component {
    static options = {
        addGlobalClass: true
    };

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        let data = [
            {
                id: 1,
                imgs: [
                    "http://zefey.com/file/1580710492577.jpg",
                    "http://zefey.com/file/1580710498675.jpg",
                    "http://zefey.com/file/1580710505348.jpg"
                ],
                title:'牌坊街',
                desc:'据黄梅岑先生《潮州牌坊纪略》载：“牌坊，传说可上溯唐宋，初以木建，形似‘乌凹肚门’。古时统治者提倡伦理道德，把城乡间于节义、功德、科第突出成就者，将其‘嘉德懿行’，书贴坊上旌表，称为‘表闾’，故牌坊也具纪念作用。到明时改用石砌，加叠层楼，饰以花纹，二柱一门或四柱三门，唯嘉靖时建多柱多门长牌坊”',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 2,
                imgs: [
                    "http://zefey.com/file/1580788025373.jpg",
                ],
                title:'啊啊啊啊',
                desc:'什么鬼',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 3,
                imgs: [
                    "http://zefey.com/file/1580788025373.jpg",
                ],
                title:'啊啊啊啊',
                desc:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 4,
                imgs: [
                    "http://zefey.com/file/1580710492577.jpg",
                    "http://zefey.com/file/1580710498675.jpg",
                    "http://zefey.com/file/1580710505348.jpg"
                ],
                title:'牌坊街',
                desc:'据黄梅岑先生《潮州牌坊纪略》载：“牌坊，传说可上溯唐宋，初以木建，形似‘乌凹肚门’。古时统治者提倡伦理道德，把城乡间于节义、功德、科第突出成就者，将其‘嘉德懿行’，书贴坊上旌表，称为‘表闾’，故牌坊也具纪念作用。到明时改用石砌，加叠层楼，饰以花纹，二柱一门或四柱三门，唯嘉靖时建多柱多门长牌坊”',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 5,
                imgs: [
                    "http://zefey.com/file/1580710492577.jpg",
                    "http://zefey.com/file/1580710498675.jpg",
                    "http://zefey.com/file/1580710505348.jpg"
                ],
                title:'牌坊街',
                desc:'据黄梅岑先生《潮州牌坊纪略》载：“牌坊，传说可上溯唐宋，初以木建，形似‘乌凹肚门’。古时统治者提倡伦理道德，把城乡间于节义、功德、科第突出成就者，将其‘嘉德懿行’，书贴坊上旌表，称为‘表闾’，故牌坊也具纪念作用。到明时改用石砌，加叠层楼，饰以花纹，二柱一门或四柱三门，唯嘉靖时建多柱多门长牌坊”',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 6,
                imgs: [
                    "http://zefey.com/file/1580788025373.jpg",
                ],
                title:'啊啊啊啊',
                desc:'什么鬼',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 7,
                imgs: [
                    "http://zefey.com/file/1580788025373.jpg",
                ],
                title:'啊啊啊啊',
                desc:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            },
            {
                id: 8,
                imgs: [
                    "http://zefey.com/file/1580710492577.jpg",
                    "http://zefey.com/file/1580710498675.jpg",
                    "http://zefey.com/file/1580710505348.jpg"
                ],
                title:'牌坊街',
                desc:'据黄梅岑先生《潮州牌坊纪略》载：“牌坊，传说可上溯唐宋，初以木建，形似‘乌凹肚门’。古时统治者提倡伦理道德，把城乡间于节义、功德、科第突出成就者，将其‘嘉德懿行’，书贴坊上旌表，称为‘表闾’，故牌坊也具纪念作用。到明时改用石砌，加叠层楼，饰以花纹，二柱一门或四柱三门，唯嘉靖时建多柱多门长牌坊”',
                userAvatar:'http://zefey.com/file/1580710698566.jpeg',
                userName:'什么鬼',
                like:123,
                createTime:'2019-12-12'
            }
        ];
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

    render() {
        const { data } = this.state;
        const { style } = this.props;
        console.log('data',data);
        return (
            <View className="travelWrap" style={style}>
                <Text className="travelTitleText">正在旅行</Text>
                <View className="travelList">
                    {data.map((item1,index1)=>(
                        <View className="travelItemWrap" key={index1}>
                            {item1.map((item,index)=>{
                                let [first] = item.imgs;
                                return (
                                    <View className="travelItem" key={item.id}>
                                        <Image className="travelImg" src={first} mode={'widthFix'}/>
                                        <View className="travelTitleView">
                                            <View className="iconfont iconlocation-fill locatioonIcon"/>
                                            <Text className="travelTitle">{item.title}</Text>
                                        </View>
                                        <Text className="descText">{item.desc}</Text>
                                        <View className="bottomView">
                                            <View className="leftView">
                                                <Image src={item.userAvatar} className="userAvatar"/>
                                                <View className="leftViewText">
                                                    <Text className="userName">{item.userName}</Text>
                                                    <Text className="createTime">{item.createTime}</Text>
                                                </View>
                                            </View>
                                            <View className="rightView">
                                                <View className="iconfont iconheart likeIcon"/>
                                                <Text className="likeCount">{item.like}</Text>
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
export default TabView;
