import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";

import "./index.scss";
import Banner from "../Banner";

class TabView extends Taro.Component {

    static options = {
        addGlobalClass: true
    };

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            tabList: [
                { title: "推荐阅读" },
                { title: "目的地" },
            ]
        };
    }

    handleClick = value => {
        this.setState({
            current: value
        });
    };

    render() {
        const { tabList, current } = this.state;
        return (
            <AtTabs
                className="customTabView"
                current={current}
                tabList={tabList}
                onClick={this.handleClick}
                animated={false}
                swipeable={false}
                scroll={false}
            >
                <AtTabsPane current={current} index={0}>
                    <Banner/>
                </AtTabsPane>
                <AtTabsPane current={current} index={1}>
                    <Banner/>
                </AtTabsPane>
            </AtTabs>
        );
    }
}
export default TabView;
