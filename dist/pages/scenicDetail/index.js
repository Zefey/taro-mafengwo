(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/scenicDetail/index"],{

/***/ "./src/pages/scenicDetail/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/scenicDetail/index.jsx ***!
  \******************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/scenicDetail/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QQMapWX = __webpack_require__(/*! ../../sdk/qqmap-wx-jssdk */ "./src/sdk/qqmap-wx-jssdk.js");

var ScenicDetail = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ScenicDetail, _BaseComponent);

  function ScenicDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ScenicDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ScenicDetail.__proto__ || Object.getPrototypeOf(ScenicDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__65", "tags", "location", "name", "content", "address", "openTime"], _this.state = {
      address: ''
    }, _this.navigate = function () {
      var _this$$router$params = _this.$router.params,
          latitude = _this$$router$params.latitude,
          longitude = _this$$router$params.longitude;

      _taroWeapp2.default.openLocation({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        scale: 18
      });
    }, _this.customComponents = ["NavBar", "Travel"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScenicDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ScenicDetail.prototype.__proto__ || Object.getPrototypeOf(ScenicDetail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _$router$params = this.$router.params,
          latitude = _$router$params.latitude,
          longitude = _$router$params.longitude;
      //sdk初始化

      this.qqmapsdk = new QQMapWX({
        key: 'RM6BZ-57A3O-OUWWO-SRK3I-JWHI7-POBVT'
      });
      this.qqmapsdk.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function success(result) {
          console.log('success', result);
          _this2.setState({
            address: result.result.address
          });
        },
        fail: function fail(result) {
          console.log('fail', result);
          _this2.setState({
            address: '定位失败'
          });
        }
      });
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__65"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__65 = _genCompid2[0],
          $compid__65 = _genCompid2[1];

      var _$router$params2 = this.$router.params,
          name = _$router$params2.name,
          location = _$router$params2.location,
          tags = _$router$params2.tags,
          content = _$router$params2.content,
          openTime = _$router$params2.openTime;
      var address = this.__state.address;

      tags = tags && tags.split(',');
      var anonymousState__temp = 'scenic';
      _taroWeapp.propsManager.set({
        "title": name,
        "showLeft": true
      }, $compid__65, $prevCompid__65);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__65: $compid__65,
        tags: tags,
        location: location,
        name: name,
        content: content,
        openTime: openTime
      });
      return this.__state;
    }
  }]);

  return ScenicDetail;
}(_taroWeapp.Component), _class2.$$events = ["navigate"], _class2.$$componentPath = "pages/scenicDetail/index", _temp2)) || _class);
exports.default = ScenicDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ScenicDetail, true));

/***/ }),

/***/ "./src/pages/scenicDetail/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/scenicDetail/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/scenicDetail/index.jsx","runtime","vendors"]]]);