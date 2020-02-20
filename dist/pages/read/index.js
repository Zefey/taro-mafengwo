(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/read/index"],{

/***/ "./src/pages/read/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/read/index.jsx ***!
  \**********************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/read/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Read = (_dec = (0, _redux.connect)(function (_ref) {
  var banner = _ref.banner;
  return {
    banner: banner
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Read, _BaseComponent);

  function Read() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Read);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Read.__proto__ || Object.getPrototypeOf(Read)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__3", "$compid__4", "bannerData", "banner", "travelData"], _this.state = {
      bannerData: [{
        id: 1,
        img: "http://zefey.com/file/1580614986847.jpg",
        title: "恭喜发财",
        url: 'https://www.baidu.com/'
      }]
    }, _this.customComponents = ["Banner", "Travel"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Read, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Read.prototype.__proto__ || Object.getPrototypeOf(Read.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    //   config = {
    //     navigationBarTitleText: "我的"
    //   };

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__3"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__3 = _genCompid2[0],
          $compid__3 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__4"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__4 = _genCompid4[0],
          $compid__4 = _genCompid4[1];

      var _props = this.__props,
          banner = _props.banner,
          travelData = _props.travelData;

      var anonymousState__temp = { marginTop: '-8px' };
      _taroWeapp.propsManager.set({
        "data": banner.bannerData1
      }, $compid__3, $prevCompid__3);
      _taroWeapp.propsManager.set({
        "style": anonymousState__temp
      }, $compid__4, $prevCompid__4);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__3: $compid__3,
        $compid__4: $compid__4
      });
      return this.__state;
    }
  }]);

  return Read;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "pages/read/index", _temp2)) || _class);
exports.default = Read;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Read));

/***/ }),

/***/ "./src/pages/read/index.scss":
/*!***********************************!*\
  !*** ./src/pages/read/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/read/index.jsx","runtime","vendors"]]]);