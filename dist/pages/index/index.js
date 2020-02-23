(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/actions/banner.js":
/*!*******************************!*\
  !*** ./src/actions/banner.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBanner2 = exports.updateBanner1 = undefined;
exports.getBanner = getBanner;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _banner = __webpack_require__(/*! ../constants/banner */ "./src/constants/banner.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateBanner1 = exports.updateBanner1 = function updateBanner1(data) {
  return {
    type: _banner.UPDATE_BANNER1,
    data: data
  };
};

var updateBanner2 = exports.updateBanner2 = function updateBanner2(data) {
  return {
    type: _banner.UPDATE_BANNER2,
    data: data
  };
};

function getBanner(data) {
  return function (dispatch) {
    _taroWeapp2.default.request({
      url: 'http://zefey.com:12345/mfw/bannerList',
      data: data,
      success: function success(res) {
        if (data.type == 1) {
          dispatch(updateBanner1(res.data.data));
        } else if (data.type == 2) {
          dispatch(updateBanner2(res.data.data));
        }
      },
      fail: function fail(err) {
        console.log('bannder err', err);
      }
    });
  };
}

/***/ }),

/***/ "./src/actions/scenic.js":
/*!*******************************!*\
  !*** ./src/actions/scenic.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = undefined;
exports.getScenic = getScenic;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _scenic = __webpack_require__(/*! ../constants/scenic */ "./src/constants/scenic.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var update = exports.update = function update(data) {
  return {
    type: _scenic.SCENIC_LIST,
    data: data
  };
};

function getScenic(data) {
  return function (dispatch) {
    _taroWeapp2.default.request({
      url: 'http://zefey.com:12345/mfw/scenicList',
      data: data,
      success: function success(res) {
        var data = res.data.data;
        dispatch(update(data));
      },
      fail: function fail(err) {
        console.log('bannder err', err);
      }
    });
  };
}

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

var _travel = __webpack_require__(/*! ../../actions/travel */ "./src/actions/travel.js");

var _banner = __webpack_require__(/*! ../../actions/banner */ "./src/actions/banner.js");

var _scenic = __webpack_require__(/*! ../../actions/scenic */ "./src/actions/scenic.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QQMapWX = __webpack_require__(/*! ../../sdk/qqmap-wx-jssdk */ "./src/sdk/qqmap-wx-jssdk.js");

var Index = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    update: function update(data) {
      dispatch((0, _user.update)(data));
    },
    getBanner: function getBanner(data) {
      dispatch((0, _banner.getBanner)(data));
    },
    getTravel: function getTravel(data) {
      dispatch((0, _travel.getTravel)(data));
    },
    getScenic: function getScenic(data) {
      dispatch((0, _scenic.getScenic)(data));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray72", "$compid__73", "$compid__74", "$compid__75", "tabViewData", "tabViewIndex", "user", "statusBarHeight", "scrollTop", "quickKnow", "routeData", "getBanner", "getTravel", "getScenic", "update"], _this.login = function () {
      //微信登录
      _taroWeapp2.default.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            _taroWeapp2.default.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                appid: 'wx5bd348ec3a45bb65',
                secret: '5c2e6371c4b7a118ce35fcc16bb6d602',
                js_code: res.code,
                grant_type: 'authorization_code'
              },
              success: function success(res) {
                console.log('login res', res.data);
                _this.props.update(_extends({}, _this.props.user, res.data));
              },
              fail: function fail(err) {
                console.log('login err', err);
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }, _this.location = function () {
      _taroWeapp2.default.getLocation({ complete: function complete(res) {
          console.log('getLocation', res);
          console.log('qqmapsdk', _this.qqmapsdk);
          if (_this.qqmapsdk) {
            _this.qqmapsdk.reverseGeocoder({
              location: {
                latitude: res.latitude,
                longitude: res.longitude
              },
              success: function success(result) {
                console.log('success', result);
                var city = result.result['ad_info'].city;

                city = city.replace('市', '');
                _this.props.update(_extends({}, _this.props.user, {
                  locationCity: city
                }));
                //banner数据
                _this.props.getBanner({ type: 1, location: city });
                _this.props.getBanner({ type: 2, location: city });
                //travel数据
                _this.props.getTravel({ location: city });
                //quick数据
                _this.getQuickKnowList(city);
                //route数据
                _this.getRouteList(city);
                //scenic数据
                _this.props.getScenic({ location: city });
              },
              fail: function fail(result) {
                console.log('fail', result);
                _this.props.update(_extends({}, _this.props.user, {
                  locationCity: '定位失败'
                }));
              }
            });
          }
        } });
    }, _this.getSystemInfo = function () {
      _taroWeapp2.default.getSystemInfo().then(function (res) {
        _this.setState({
          statusBarHeight: res.statusBarHeight || 0
        });
      });
    }, _this.onScroll = function (e) {
      // console.log(e.detail);
      var scrollTop = e.detail.scrollTop;

      _this.setState({
        scrollTop: scrollTop
      });
    }, _this.toggleTab = function (i) {
      _this.setState({
        tabViewIndex: i
      });
    }, _this.getQuickKnowList = function (locationCity) {
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/quickKnowList",
        data: {
          location: locationCity
        },
        success: function success(res) {
          console.log('quickKnowList', res);
          var data = res.data.data;
          var expect = [];
          var json = {};
          for (var i = 0; i < data.length; i++) {
            if (data[i].big_title) {
              json[data[i].big_title] = [];
            }
          }
          for (var key in json) {
            var temp = {};
            temp.name = key;
            expect.push(temp);
          }
          console.log('quickKnow expect', expect);
          _this.setState({
            quickKnow: expect
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.getRouteList = function (locationCity) {
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/routeList",
        data: {
          location: locationCity
        },
        success: function success(res) {
          console.log('routeList', res);
          var data = res.data.data;
          var expect = [];
          var json = {};
          for (var i = 0; i < data.length; i++) {
            if (data[i].title) {
              json[data[i].title] = [];
            }
          }
          for (var _i = 0; _i < data.length; _i++) {
            for (var key in json) {
              if (data[_i].title == key) {
                json[data[_i].title].push(data[_i]);
              }
            }
          }
          for (var _key2 in json) {
            var value = json[_key2];

            var _value = _slicedToArray(value, 1),
                first = _value[0];

            var temp = {};
            if (first) {
              temp = _extends({}, temp, first);
            }
            temp.data = value;
            expect.push(temp);
          }
          console.log('expect111', expect);
          _this.setState({
            routeData: expect
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.bindGetUserInfo = function (data) {
      console.log('bindGetUserInfo', data);
      var userInfo = data.detail.userInfo;
      _this.props.update(_extends({}, _this.props.user, userInfo));
      _taroWeapp2.default.navigateTo({
        url: "/pages/mine/index"
      });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["SearchBar", "Read", "Destination"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",


    // config = {
    //   navigationBarTitleText: '首页'
    // }

    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.qqmapsdk = null;
      this.state = {
        statusBarHeight: 0,
        scrollTop: 0,
        tabViewData: [{ id: 1, name: '推荐阅读' }, { id: 2, name: '目的地' }],
        tabViewIndex: 1,
        quickKnow: [],
        routeData: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //sdk初始化
      this.qqmapsdk = new QQMapWX({
        key: 'RM6BZ-57A3O-OUWWO-SRK3I-JWHI7-POBVT'
      });
      //登录
      this.login();
      //定位
      this.location();
      //获取系统参数
      this.getSystemInfo();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var localChange = this.props.user.locationCity !== nextProps.user.locationCity;
      var nextCity = nextProps.user.locationCity;
      if (localChange) {
        //地址改变,在这里更新一波数据
        console.log('localChange', localChange, nextCity);
        //banner数据
        this.props.getBanner({ type: 1, location: nextCity });
        this.props.getBanner({ type: 2, location: nextCity });
        //travel数据
        this.props.getTravel({ location: nextCity });
        //quick数据
        this.getQuickKnowList(nextCity);
        //route数据
        this.getRouteList(nextCity);
        //scenic数据
        this.props.getScenic({ location: nextCity });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__73"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__73 = _genCompid2[0],
          $compid__73 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__74"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__74 = _genCompid4[0],
          $compid__74 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__75"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__75 = _genCompid6[0],
          $compid__75 = _genCompid6[1];

      var _state = this.__state,
          scrollTop = _state.scrollTop,
          tabViewData = _state.tabViewData,
          tabViewIndex = _state.tabViewIndex,
          statusBarHeight = _state.statusBarHeight,
          quickKnow = _state.quickKnow,
          routeData = _state.routeData;
      var user = this.__props.user;

      var style = {
        paddingTop: (_taroWeapp2.default.$statusBarHeight || statusBarHeight) + "px"
      };
      var anonymousState__temp = 'SearchBar';
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(style);
      var loopArray72 = tabViewData.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "dczzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          _this2.toggleTab(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "scrollTop": scrollTop
      }, $compid__73, $prevCompid__73);
      tabViewIndex == 0 && _taroWeapp.propsManager.set({}, $compid__74, $prevCompid__74);
      !(tabViewIndex == 0) && _taroWeapp.propsManager.set({
        "quickKnow": quickKnow,
        "routeData": routeData
      }, $compid__75, $prevCompid__75);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray72: loopArray72,
        $compid__73: $compid__73,
        $compid__74: $compid__74,
        $compid__75: $compid__75,
        user: user
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class2.$$events = ["bindGetUserInfo", "onScroll", "anonymousFunc0"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors"]]]);