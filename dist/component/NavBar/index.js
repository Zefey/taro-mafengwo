(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/NavBar/index"],{

/***/ "./src/component/NavBar/index.jsx":
/*!****************************************!*\
  !*** ./src/component/NavBar/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/component/NavBar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Navbar, _Taro$Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "showLeft", "showRelease", "title", "style", "textColor", "releaseClick", "releaseColor", "__fn_onClick"], _this.clickHandler = function () {
      _taroWeapp2.default.navigateBack();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Navbar.prototype.__proto__ || Object.getPrototypeOf(Navbar.prototype), "_constructor", this).call(this, props);

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
          _props$showLeft = _props.showLeft,
          showLeft = _props$showLeft === undefined ? false : _props$showLeft,
          title = _props.title,
          style = _props.style,
          textColor = _props.textColor,
          showRelease = _props.showRelease,
          releaseClick = _props.releaseClick,
          releaseColor = _props.releaseColor;
      var statusBarHeight = this.__state.statusBarHeight;

      var style1 = _extends({
        paddingTop: (_taroWeapp2.default.$statusBarHeight || statusBarHeight) + "px"
      }, style);
      console.log('Navbar', title, showLeft);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style1);
      var anonymousState__temp2 = showLeft ? (0, _taroWeapp.internal_inline_style)(textColor && { color: textColor }) : null;
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(textColor && { color: textColor });
      var anonymousState__temp4 = showRelease ? (0, _taroWeapp.internal_inline_style)({ borderColor: releaseColor }) : null;
      var anonymousState__temp5 = showRelease ? (0, _taroWeapp.internal_inline_style)({ color: releaseColor }) : null;
      var anonymousState__temp6 = showRelease ? (0, _taroWeapp.internal_inline_style)({ color: releaseColor }) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        showLeft: showLeft,
        showRelease: showRelease,
        title: title
      });
      return this.__state;
    }
  }, {
    key: "funPrivateezzzz",
    value: function funPrivateezzzz() {
      return this.props.releaseClick.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return Navbar;
}(_taroWeapp2.default.Component), _class.$$events = ["clickHandler", "funPrivateezzzz"], _class.options = {
  statusBarHeight: 0,
  addGlobalClass: true
}, _class.$$componentPath = "component/NavBar/index", _temp2);
exports.default = Navbar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Navbar));

/***/ }),

/***/ "./src/component/NavBar/index.scss":
/*!*****************************************!*\
  !*** ./src/component/NavBar/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/NavBar/index.jsx","runtime","vendors"]]]);