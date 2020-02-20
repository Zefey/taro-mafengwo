(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/quickKnow/index"],{

/***/ "./src/pages/quickKnow/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/quickKnow/index.jsx ***!
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

__webpack_require__(/*! ./index.scss */ "./src/pages/quickKnow/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quick = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Quick, _BaseComponent);

  function Quick() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Quick);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Quick.__proto__ || Object.getPrototypeOf(Quick)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__15", "data", "user"], _this.config = {
      navigationBarTitleText: "我的"
    }, _this.state = {
      data: []
    }, _this.getQuickKnowList = function () {
      var locationCity = _this.props.user.locationCity;

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
          for (var _i = 0; _i < data.length; _i++) {
            for (var key in json) {
              if (data[_i].big_title == key) {
                json[data[_i].big_title].push(data[_i]);
              }
            }
          }
          for (var _key2 in json) {
            var temp = {};
            temp.title = _key2;
            temp.data = json[_key2];
            expect.push(temp);
          }
          console.log('expect', expect);
          _this.setState({
            data: expect
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.customComponents = ["NavBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Quick, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Quick.prototype.__proto__ || Object.getPrototypeOf(Quick.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("this.$router.params", this.$router.params);
      this.getQuickKnowList();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__15 = _genCompid2[0],
          $compid__15 = _genCompid2[1];

      var data = this.__state.data;

      var anonymousState__temp = 'quick';
      _taroWeapp.propsManager.set({
        "title": "\u5FEB\u901F\u4E86\u89E3",
        "showLeft": true
      }, $compid__15, $prevCompid__15);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__15: $compid__15
      });
      return this.__state;
    }
  }]);

  return Quick;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/quickKnow/index", _temp2)) || _class);
exports.default = Quick;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Quick, true));

/***/ }),

/***/ "./src/pages/quickKnow/index.scss":
/*!****************************************!*\
  !*** ./src/pages/quickKnow/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/quickKnow/index.jsx","runtime","vendors"]]]);