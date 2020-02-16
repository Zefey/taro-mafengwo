import Taro from "@tarojs/taro";
import { View,Swiper,SwiperItem,Image,Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import "./index.scss";
import DateUtil from "../../util/dateUtil";

@connect(
    ({ user }) => ({
        user
    }),
    dispatch => ({
        update(data) {
            dispatch(update(data));
        },
    })
)
class Reply extends Taro.Component {

    constructor(props){
        super(props);
        this.state={
            replyContent:'',
            data:[]
        }
    }

    componentDidMount(){
        this.getReply();
    }

    getReply = () => {
        let travelId = this.props.travelId;
        Taro.request({
            url: "http://zefey.com:12345/mfw/replyList",
            data:{
                travelId:travelId
            },
            success: res => {
                console.log('getReply',res);
                let data = res.data.data;
                this.setState({
                    data:data
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }

    onInput = (data) => {
        let value = data.detail.value;
        console.log('onInput',value);
        this.setState({
            replyContent:value
        })
    }

    reply = () => {
        const {replyContent,} = this.state;
        const {travelId,user} = this.props;
        let {openid='',nickName='',avatarUrl='',} = user;
        Taro.request({
            url: "http://zefey.com:12345/mfw/addReply",
            data:{
                travelId:travelId,
                content:replyContent,
                openid:openid,
                userName:nickName,
                userAvatar:avatarUrl
            },
            method:'POST',
            success: res => {
                console.log('addReply',res);
                this.getReply();
                this.setState({
                    replyContent:''
                })
            },
            fail: err => {
                console.log("getLocationList err", err);
            }
        });
    }


    render() {
        const {replyContent,data} = this.state;
        let { avatarUrl } = this.props.user;
        return (
            <View>
                <Text className="replyTitle">回复</Text>
                <View className="replysWrap">
                    <Image src={avatarUrl || 'http://zefey.com/file/1581578380981.png'} className="replyUserAvatar"/>
                    <View className="replysView">
                        <Input value={replyContent} type='text' placeholder='发表你的见解' className="replysText" onInput={this.onInput}/>
                    </View>
                    {!!replyContent ?
                    <Text className="sendText" style={{color:'#2347e9'}} onClick={this.reply}>发送</Text>
                    :
                    <Text className="sendText" style={{color:'#ddd'}} onClick={this.reply}>发送</Text>}
                </View>
                {data.map((item,index)=>{
                    return (
                        <View className="replyItemView" key={item.id}>
                            <Image src={item.user_avatar || 'http://zefey.com/file/1581578380981.png'} className="replyUserAvatar"/>
                            <View className="replyInfoView">
                                <View className="replyUserInfo">
                                    <Text className="replyUserName">{item.user_name || '匿名用户'}</Text>
                                    <Text className="replyUserTime">{DateUtil.formatDate(item.create_time)}</Text>
                                </View>
                                <Text className="replyContent">{item.content}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
export default Reply;
