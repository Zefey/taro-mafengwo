(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/SearchBar/index"],{

/***/ "./src/component/SearchBar/index.jsx":
/*!*******************************************!*\
  !*** ./src/component/SearchBar/index.jsx ***!
  \*******************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/component/SearchBar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(SearchBar, _Taro$Component);

  function SearchBar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "user", "statusBarHeight", "animationData", "scrollTop"], _this.clickHandler = function () {
      _taroWeapp2.default.navigateBack();
    }, _this.handleLocalSwitch = function () {
      console.log('handleLocalSwitch');
      _taroWeapp2.default.navigateTo({
        url: "/pages/localSwitch/index"
      });
    }, _this.handleSearch = function () {
      console.log('handleSearch');
      _taroWeapp2.default.navigateTo({
        url: "/pages/search/index"
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchBar.prototype.__proto__ || Object.getPrototypeOf(SearchBar.prototype), "_constructor", this).call(this, props);
      this.state = {
        statusBarHeight: 0,
        animationData: null
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _taroWeapp2.default.getSystemInfo().then(function (res) {
        _this2.setState({
          statusBarHeight: res.statusBarHeight || 0
        });
      });

      // Taro的动画真难用,不如自己手写

      // let animationData = Taro.createAnimation({
      //     duration: 1000,
      //     timingFunction: "ease",
      //     delay: 0
      // }).scale(2,2).rotate(45).step();

      // this.setState({
      //     animationData:animationData.export()
      // })
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          scrollTop = _props.scrollTop,
          user = _props.user;
      var statusBarHeight = this.__state.statusBarHeight;


      var style = {
        paddingTop: (_taroWeapp2.default.$statusBarHeight || statusBarHeight) + "px",
        backgroundColor: "rgba(255,255,255," + (scrollTop / 300 || 0) + ")"
      };
      // console.log('scrollTop',scrollTop);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        user: user
      });
      return this.__state;
    }
  }]);

  return SearchBar;
}(_taroWeapp2.default.Component), _class2.$$events = ["handleLocalSwitch", "handleSearch"], _class2.options = {
  addGlobalClass: true
}, _class2.$$componentPath = "component/SearchBar/index", _temp2)) || _class);
exports.default = SearchBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(SearchBar));

/***/ }),

/***/ "./src/component/SearchBar/index.scss":
/*!********************************************!*\
  !*** ./src/component/SearchBar/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/SearchBar/index.jsx","runtime","vendors"]]]);