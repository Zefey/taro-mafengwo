(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/Banner/index"],{

/***/ "./src/component/Banner/index.jsx":
/*!****************************************!*\
  !*** ./src/component/Banner/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/component/Banner/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Banner, _Taro$Component);

  function Banner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Banner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray1", "length", "data", "statusBarHeight"], _this.itemClick = function (item) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/webPage/index?url=" + item.url
      });
    }, _this.anonymousFunc0Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Banner, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Banner.prototype.__proto__ || Object.getPrototypeOf(Banner.prototype), "_constructor", this).call(this, props);
      var data = props.data || [];
      this.state = {
        statusBarHeight: 0,
        data: data
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
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.data;
      this.setState({
        data: data
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          data = _state.data,
          statusBarHeight = _state.statusBarHeight;

      var style = {
        paddingTop: (_taroWeapp2.default.$statusBarHeight || statusBarHeight) + "px"

      };
      var length = data.length;
      var loopArray1 = length > 0 ? data.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = length > 0 ? (0, _taroWeapp.internal_inline_style)(style) : null;

        var _$indexKey = "bzzzz" + index;

        _this3.anonymousFunc0Map[_$indexKey] = function () {
          _this3.itemClick(item.$original);
        };

        var $loopState__temp4 = length > 0 ? (0, _taroWeapp.internal_inline_style)({ backgroundImage: "url(" + item.$original.img + ")" }) : null;
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray1: loopArray1,
        length: length
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Banner;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "component/Banner/index", _temp2);
exports.default = Banner;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Banner));

/***/ }),

/***/ "./src/component/Banner/index.scss":
/*!*****************************************!*\
  !*** ./src/component/Banner/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/Banner/index.jsx","runtime","vendors"]]]);