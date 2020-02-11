import Taro, { Component } from "@tarojs/taro";
import { WebView } from "@tarojs/components";
import NavBar from "../../component/NavBar";

class WebPage extends Component {
    handleMessage = e => {
        console.log("handleMessage", e);
    };

    render() {
        const { url } = this.$router.params;
        return (
            <WebView src={url} onMessage={this.handleMessage} />
        );
    }
}

export default WebPage;
