(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/addTravel/index"],{

/***/ "./src/pages/addTravel/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/addTravel/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _travel = __webpack_require__(/*! ../../actions/travel */ "./src/actions/travel.js");

var _dateUtil = __webpack_require__(/*! ../../util/dateUtil */ "./src/util/dateUtil.js");

var _dateUtil2 = _interopRequireDefault(_dateUtil);

__webpack_require__(/*! ./index.scss */ "./src/pages/addTravel/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTravel = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user,
      travel = _ref.travel;
  return {
    user: user,
    travel: travel
  };
}, function (dispatch) {
  return {
    getTravel: function getTravel(data) {
      dispatch((0, _travel.getTravel)(data));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(AddTravel, _BaseComponent);

  function AddTravel() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddTravel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddTravel.__proto__ || Object.getPrototypeOf(AddTravel)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__13", "content", "imgs", "location", "time", "travel", "user", "getTravel"], _this.state = {
      content: '',
      time: _dateUtil2.default.formatDate(new Date()),
      imgs: []
    }, _this.release = function () {
      console.log('release');
      var _this$state = _this.state,
          content = _this$state.content,
          time = _this$state.time,
          imgs = _this$state.imgs;
      var _this$props = _this.props,
          travel = _this$props.travel,
          user = _this$props.user;
      var _user$openid = user.openid,
          openid = _user$openid === undefined ? '' : _user$openid,
          _user$nickName = user.nickName,
          nickName = _user$nickName === undefined ? '' : _user$nickName,
          _user$avatarUrl = user.avatarUrl,
          avatarUrl = _user$avatarUrl === undefined ? '' : _user$avatarUrl,
          _user$locationCity = user.locationCity,
          locationCity = _user$locationCity === undefined ? '' : _user$locationCity;


      var location = travel.location;
      var imgStr = imgs.join();
      if (!location || !content || !imgStr) {
        return;
      }
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/addTravel",
        data: {
          imgs: imgStr,
          userName: nickName,
          userAvatar: avatarUrl,
          content: content,
          openid: openid,
          location: location,
          time: time
        },
        method: 'POST',
        success: function success(res) {
          console.log('release', res);
          _this.props.getTravel({ location: locationCity });
          _taroWeapp2.default.navigateBack({
            delta: 2
          });
        },
        fail: function fail(err) {
          console.log("release err", err);
        }
      });
    }, _this.onInput = function (data) {
      var value = data.detail.value;
      _this.setState({
        content: value
      });
    }, _this.addImgs = function () {
      _taroWeapp2.default.showActionSheet({
        itemList: ['拍照', '从手机相册选择']
      }).then(function (res) {
        console.log(res.errMsg, res.tapIndex);
        switch (res.tapIndex) {
          case 0:
            _taroWeapp2.default.chooseImage({
              sourceType: ['camera']
            }).then(function (res) {
              console.log('chooseImage0', res);

              for (var i in res.tempFilePaths) {
                _taroWeapp2.default.uploadFile({
                  url: 'http://zefey.com:12345/file/upload',
                  filePath: res.tempFilePaths[i],
                  name: 'file'
                }).then(function (res) {
                  console.log('uploadFile', res);
                  var data = JSON.parse(res.data);
                  if (data.status == 1) {
                    var imgs = _this.state.imgs;
                    _this.setState({
                      imgs: imgs.concat(data.data)
                    });
                  }
                }).catch(function (err) {
                  console.log('uploadFile', err);
                });
              }
            }).catch(function (err) {
              console.log('chooseImage0', err);
            });
            break;
          case 1:
            _taroWeapp2.default.chooseImage({
              sourceType: ['album']
            }).then(function (res) {
              console.log('chooseImage1', res);

              for (var i in res.tempFilePaths) {
                _taroWeapp2.default.uploadFile({
                  url: 'http://zefey.com:12345/file/upload',
                  filePath: res.tempFilePaths[i],
                  name: 'file'
                }).then(function (res) {
                  console.log('uploadFile', res);
                  var data = JSON.parse(res.data);
                  if (data.status == 1) {
                    var imgs = _this.state.imgs;
                    _this.setState({
                      imgs: imgs.concat(data.data)
                    });
                  }
                }).catch(function (err) {
                  console.log('uploadFile', err);
                });
              }
            }).catch(function (err) {
              console.log('chooseImage1', err);
            });
            break;
        }
      }).catch(function (err) {
        console.log(err.errMsg);
      });
    }, _this.chooseLocal = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/searchLocal/index"
      });
    }, _this.onDateChange = function (data) {
      console.log('onDateChange', data);
      _this.setState({
        time: data.detail.value
      });
    }, _this.customComponents = ["NavBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddTravel, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddTravel.prototype.__proto__ || Object.getPrototypeOf(AddTravel.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("this.$router.params", this.$router.params);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
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
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__13 = _genCompid2[0],
          $compid__13 = _genCompid2[1];

      var location = this.__props.travel.location;
      var _state = this.__state,
          content = _state.content,
          imgs = _state.imgs,
          time = _state.time;

      var color = '#ddd';
      if (location && content && imgs.length > 0) {
        color = "#3d3dff";
      }
      var anonymousState__temp = 'AddTravel';
      _taroWeapp.propsManager.set({
        "title": "",
        "showLeft": true,
        "showRelease": true,
        "releaseColor": color,
        "releaseClick": this.release
      }, $compid__13, $prevCompid__13);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__13: $compid__13,
        location: location
      });
      return this.__state;
    }
  }]);

  return AddTravel;
}(_taroWeapp.Component), _class2.$$events = ["onInput", "addImgs", "chooseLocal", "onDateChange"], _class2.$$componentPath = "pages/addTravel/index", _temp2)) || _class);
exports.default = AddTravel;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AddTravel, true));

/***/ }),

/***/ "./src/pages/addTravel/index.scss":
/*!****************************************!*\
  !*** ./src/pages/addTravel/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/addTravel/index.jsx","runtime","vendors"]]]);