import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text,ScrollView,Image,Picker } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getTravel } from "../../actions/travel";

import NavBar from "../../component/NavBar";
import DateUtil from "../../util/dateUtil";

import "./index.scss";

@connect(
    ({ user,travel }) => ({
        user,
        travel
    }),
    dispatch => ({
        getTravel(data) {
            dispatch(getTravel(data));
        },
    })
)
class AddTravel extends Component {

    state={
        content:'',
        time:DateUtil.formatDate(new Date()),
        imgs:[]
    }

    componentDidMount() {
        console.log("this.$router.params", this.$router.params);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    release = () => {
        console.log('release');
        const {content,time,imgs} = this.state;
        const {travel,user} = this.props;
        let {openid='',nickName='',avatarUrl='',locationCity=''} = user;
        
        let location = travel.location;
        let imgStr = imgs.join();
        if(!location || !content || !imgStr){
            return;
        }
        Taro.request({
            url: "http://zefey.com:12345/mfw/addTravel",
            data:{
                imgs:imgStr,
                userName:nickName,
                userAvatar:avatarUrl,
                content:content,
                openid:openid,
                location:location,
                time:time,
            },
            method:'POST',
            success: res => {
                console.log('release',res);
                this.props.getTravel({location:locationCity});
                Taro.navigateBack({
                    delta: 2
                });
            },
            fail: err => {
                console.log("release err", err);
            }
        });
    }

    onInput = (data) => {
        let value = data.detail.value;
        this.setState({
            content:value
        })
    }

    addImgs = () => {
        Taro.showActionSheet({
            itemList:['拍照','从手机相册选择']
        })
        .then((res) => {
            console.log(res.errMsg, res.tapIndex)
            switch (res.tapIndex) {
                case 0:
                    Taro.chooseImage({
                        sourceType:['camera']
                    }).then((res)=>{
                        console.log('chooseImage0',res);

                        for(let i in res.tempFilePaths){
                            Taro.uploadFile({
                                url: 'http://zefey.com:12345/file/upload',
                                filePath: res.tempFilePaths[i],
                                name: 'file',
                            }).then((res)=>{
                                console.log('uploadFile',res);
                                let data = JSON.parse(res.data);
                                if(data.status == 1){
                                    const imgs = this.state.imgs;
                                    this.setState({
                                        imgs:imgs.concat(data.data)
                                    })
                                }
                            }).catch((err)=>{
                                console.log('uploadFile',err);
                            })
                        }
                    }).catch((err)=>{
                        console.log('chooseImage0',err);
                    })
                    break;
                case 1:
                    Taro.chooseImage({
                        sourceType:['album']
                    }).then((res)=>{
                        console.log('chooseImage1',res);

                        for(let i in res.tempFilePaths){
                            Taro.uploadFile({
                                url: 'http://zefey.com:12345/file/upload',
                                filePath: res.tempFilePaths[i],
                                name: 'file',
                            }).then((res)=>{
                                console.log('uploadFile',res);
                                let data = JSON.parse(res.data);
                                if(data.status == 1){
                                    const imgs = this.state.imgs;
                                    this.setState({
                                        imgs:imgs.concat(data.data)
                                    })
                                }
                            }).catch((err)=>{
                                console.log('uploadFile',err);
                            })
                        }
                        
                    }).catch((err)=>{
                        console.log('chooseImage1',err);
                    })
                    break;
            }
        })
        .catch((err) => {
            console.log(err.errMsg)
        })
    }

    chooseLocal = () => {
        Taro.navigateTo({
            url: `/pages/searchLocal/index`
        });
    }

    onDateChange = (data) => {
        console.log('onDateChange',data);
        this.setState({
          time: data.detail.value
        })
    }

    render() {
        const { location } = this.props.travel;
        const { content,imgs,time } = this.state;
        let color = '#ddd';
        if(location && content && imgs.length>0){
            color = "#3d3dff";
        }
        return (
            <View className="addTravel">
                <NavBar 
                    key={'AddTravel'}
                    title="" 
                    showLeft={true} 
                    showRelease={true}
                    releaseColor={color}
                    releaseClick={this.release}
                />
                <Textarea 
                    className="textareaView" 
                    value={content} 
                    // autoHeight={true}
                    maxlength={-1}
                    placeholder="分享你的心情和故事吧~"
                    placeholderClass="placeholder"
                    onInput={this.onInput}
                    />
                <ScrollView 
                    className="imgsWrapView"
                    scrollWithAnimation={true}
                    scrollX={true}
                    >
                    {imgs.map((item,index)=>{
                        return (
                            <View className="imgItemWrap">
                                <View className="imgItemView">
                                    <Image src={item} className="imgItem"/>
                                </View>
                            </View>
                        )
                    })}
                    <View className="imgItemWrap" onClick={this.addImgs}>
                        <View className="imgItemBtn">
                            <Image src={'http://zefey.com/file/1581855859781.jpg'} className="imgItem1"/>
                        </View>
                    </View>
                </ScrollView>
                <View className="locationWrapView" onClick={this.chooseLocal}>
                    <View className="locationView">
                        <View className="iconfont iconlocation-fill locatioonIcon"/>
                        <Text className="locationText">{location || '添加拍摄地点'}</Text>
                    </View>
                    <View className="iconfont iconright rightIcon"/>
                </View>
                <Picker mode='date' onChange={this.onDateChange}>
                    <View className="bottomView">
                            <Text className='timeText'>拍摄于 {time}</Text>
                            <View className="iconfont iconcaret-down downIcon"/>
                    </View>
                </Picker>
            </View>
        );
    }
}

export default AddTravel;
