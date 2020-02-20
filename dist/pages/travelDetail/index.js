(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/travelDetail/index"],{

/***/ "./src/pages/travelDetail/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/travelDetail/index.jsx ***!
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

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/travelDetail/index.scss");

var _dateUtil = __webpack_require__(/*! ../../util/dateUtil */ "./src/util/dateUtil.js");

var _dateUtil2 = _interopRequireDefault(_dateUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TravelDetail = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    update: function update(data) {
      dispatch((0, _user.update)(data));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(TravelDetail, _BaseComponent);

  function TravelDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TravelDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TravelDetail.__proto__ || Object.getPrototypeOf(TravelDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__11", "$compid__12", "imgArray", "userAvatar", "location", "userName", "content", "imageHeights", "current"], _this.state = {
      imageHeights: [],
      current: 0
    }, _this.onChange = function (data) {
      var current = data.detail.current;
      _this.setState({
        current: current
      });
    }, _this.imageLoad = function (data) {
      console.log('imageLoad', data);
      var imageHeights = _this.state.imageHeights;
      var screenWidth = _taroWeapp2.default.getSystemInfoSync().windowWidth;
      var imgHeight = data.target.height * (screenWidth / data.target.width);
      var id = data.target.id;
      imageHeights[id] = imgHeight;
      _this.setState({
        imageHeights: imageHeights
      });
    }, _this.customComponents = ["NavBar", "Reply", "Travel"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TravelDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TravelDetail.prototype.__proto__ || Object.getPrototypeOf(TravelDetail.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    //   config = {
    //     navigationBarTitleText: "目的地切换"
    //   };

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__11 = _genCompid2[0],
          $compid__11 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__12 = _genCompid4[0],
          $compid__12 = _genCompid4[1];

      var _state = this.__state,
          imageHeights = _state.imageHeights,
          current = _state.current;
      var _$router$params = this.$router.params,
          location = _$router$params.location,
          imgs = _$router$params.imgs,
          userAvatar = _$router$params.userAvatar,
          userName = _$router$params.userName,
          content = _$router$params.content,
          time = _$router$params.time,
          id = _$router$params.id;

      var imgHeight = imageHeights[current] || 0;
      var imgArray = imgs ? imgs.split(',') : [];
      console.log('this.$router.params', this.$router.params, imageHeights, imgHeight);
      var anonymousState__temp = 'travelDetail';
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ height: imgHeight + "px" });
      var anonymousState__temp3 = _dateUtil2.default.formatDate(time);
      _taroWeapp.propsManager.set({
        "title": "\u9A6C\u8702\u7A9D",
        "showLeft": true
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "travelId": id
      }, $compid__12, $prevCompid__12);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        imgArray: imgArray,
        userAvatar: userAvatar,
        location: location,
        userName: userName,
        content: content
      });
      return this.__state;
    }
  }]);

  return TravelDetail;
}(_taroWeapp.Component), _class2.$$events = ["onChange", "imageLoad"], _class2.$$componentPath = "pages/travelDetail/index", _temp2)) || _class);
exports.default = TravelDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(TravelDetail, true));

/***/ }),

/***/ "./src/pages/travelDetail/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/travelDetail/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/travelDetail/index.jsx","runtime","vendors"]]]);