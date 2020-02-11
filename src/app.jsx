import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'
import '../fonts/iconfont.css'

//引入taro-ui框架
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

// 5c2e6371c4b7a118ce35fcc16bb6d602

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/index',
      'pages/webPage/index',
      'pages/localSwitch/index',
    ],
    window: {
      navigationStyle:'custom',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    permission: {
      'scope.userLocation': {
        desc: '小程序想要获取您的位置信息.'
      }
    }
  }

  componentDidMount () {
    Taro.getSystemInfo().then((res) => {
      Taro.$statusBarHeight = res.statusBarHeight || 0
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
