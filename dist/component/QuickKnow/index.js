(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/QuickKnow/index"],{

/***/ "./src/component/QuickKnow/index.jsx":
/*!*******************************************!*\
  !*** ./src/component/QuickKnow/index.jsx ***!
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

__webpack_require__(/*! ./index.scss */ "./src/component/QuickKnow/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuickKnow = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(QuickKnow, _Taro$Component);

  function QuickKnow() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, QuickKnow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = QuickKnow.__proto__ || Object.getPrototypeOf(QuickKnow)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "data", "style"], _this.goQuickKnow = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/quickKnow/index"
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QuickKnow, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(QuickKnow.prototype.__proto__ || Object.getPrototypeOf(QuickKnow.prototype), "_constructor", this).call(this, props);
      var data = props.data || [];
      this.state = {
        data: data
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.data || [];
      this.setState({
        data: data
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

      var style = this.__props.style;
      var data = this.__state.data;

      console.log('quickKnow', data);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return QuickKnow;
}(_taroWeapp2.default.Component), _class2.$$events = ["goQuickKnow"], _class2.$$componentPath = "component/QuickKnow/index", _temp2)) || _class);
exports.default = QuickKnow;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(QuickKnow));

/***/ }),

/***/ "./src/component/QuickKnow/index.scss":
/*!********************************************!*\
  !*** ./src/component/QuickKnow/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/QuickKnow/index.jsx","runtime","vendors"]]]);