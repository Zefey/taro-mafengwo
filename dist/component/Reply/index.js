(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/Reply/index"],{

/***/ "./src/component/Reply/index.jsx":
/*!***************************************!*\
  !*** ./src/component/Reply/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/component/Reply/index.scss");

var _dateUtil = __webpack_require__(/*! ../../util/dateUtil */ "./src/util/dateUtil.js");

var _dateUtil2 = _interopRequireDefault(_dateUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reply = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    update: function (_update) {
      function update(_x) {
        return _update.apply(this, arguments);
      }

      update.toString = function () {
        return _update.toString();
      };

      return update;
    }(function (data) {
      dispatch(update(data));
    })
  };
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Reply, _Taro$Component);

  function Reply() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Reply);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Reply.__proto__ || Object.getPrototypeOf(Reply)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray10", "avatarUrl", "replyContent", "data", "travelId", "user"], _this.getReply = function () {
      var travelId = _this.props.travelId;
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/replyList",
        data: {
          travelId: travelId
        },
        success: function success(res) {
          console.log('getReply', res);
          var data = res.data.data;
          _this.setState({
            data: data
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.onInput = function (data) {
      var value = data.detail.value;
      console.log('onInput', value);
      _this.setState({
        replyContent: value
      });
    }, _this.reply = function () {
      var replyContent = _this.state.replyContent;
      var _this$props = _this.props,
          travelId = _this$props.travelId,
          user = _this$props.user;
      var _user$openid = user.openid,
          openid = _user$openid === undefined ? '' : _user$openid,
          _user$nickName = user.nickName,
          nickName = _user$nickName === undefined ? '' : _user$nickName,
          _user$avatarUrl = user.avatarUrl,
          avatarUrl = _user$avatarUrl === undefined ? '' : _user$avatarUrl;

      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/addReply",
        data: {
          travelId: travelId,
          content: replyContent,
          openid: openid,
          userName: nickName,
          userAvatar: avatarUrl
        },
        method: 'POST',
        success: function success(res) {
          console.log('addReply', res);
          _this.getReply();
          _this.setState({
            replyContent: ''
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Reply, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Reply.prototype.__proto__ || Object.getPrototypeOf(Reply.prototype), "_constructor", this).call(this, props);
      this.state = {
        replyContent: '',
        data: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getReply();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          replyContent = _state.replyContent,
          data = _state.data;
      var avatarUrl = this.__props.user.avatarUrl;

      var anonymousState__temp = !!replyContent ? (0, _taroWeapp.internal_inline_style)({ color: '#2347e9' }) : null;
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ color: '#ddd' });
      var loopArray10 = data.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = _dateUtil2.default.formatDate(item.$original.create_time);
        return {
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray10: loopArray10,
        avatarUrl: avatarUrl
      });
      return this.__state;
    }
  }]);

  return Reply;
}(_taroWeapp2.default.Component), _class2.$$events = ["onInput", "reply"], _class2.$$componentPath = "component/Reply/index", _temp2)) || _class);
exports.default = Reply;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Reply));

/***/ }),

/***/ "./src/component/Reply/index.scss":
/*!****************************************!*\
  !*** ./src/component/Reply/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/Reply/index.jsx","runtime","vendors"]]]);