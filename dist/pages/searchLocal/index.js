(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/searchLocal/index"],{

/***/ "./src/pages/searchLocal/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/searchLocal/index.jsx ***!
  \*****************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/searchLocal/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _redux.connect)(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    changelocation: function changelocation(data) {
      dispatch((0, _travel.changelocation)(data));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Search, _BaseComponent);

  function Search() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray12", "$compid__14", "result", "data", "changelocation"], _this.state = {
      data: [],
      result: []

    }, _this.getLocationList = function () {
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/locationList",
        success: function success(res) {
          console.log('getLocationList', res);
          var data = res.data.data;
          _this.setState({
            data: data,
            result: data
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.switch = function (city) {
      _this.props.changelocation(city);
      _taroWeapp2.default.navigateBack();
    }, _this.onInput = function (data) {
      var value = data.detail.value;
      _this.fuzzyQuery(value);
    }, _this.fuzzyQuery = function (keyWord) {
      var list = _this.state.data;
      var arr = [];
      for (var i = 0; i < list.length; i++) {
        if (list[i].name.indexOf(keyWord) >= 0) {
          arr.push(list[i]);
        }
      }
      _this.setState({
        result: arr
      });
    }, _this.cancel = function () {
      _taroWeapp2.default.navigateBack();
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["NavBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }

    //   config = {
    //     navigationBarTitleText: "目的地切换"
    //   };

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getLocationList();
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__14 = _genCompid2[0],
          $compid__14 = _genCompid2[1];

      var _state = this.__state,
          searchText = _state.searchText,
          data = _state.data,
          result = _state.result;

      console.log('searchText', searchText);
      var anonymousState__temp = "searchLocalPage";
      var loopArray12 = result.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "jzzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          _this2.switch(item.$original.name);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "title": "\u9A6C\u8702\u7A9D",
        "showLeft": true
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray12: loopArray12,
        $compid__14: $compid__14
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

  return Search;
}(_taroWeapp.Component), _class2.$$events = ["onInput", "cancel", "anonymousFunc0"], _class2.$$componentPath = "pages/searchLocal/index", _temp2)) || _class);
exports.default = Search;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Search, true));

/***/ }),

/***/ "./src/pages/searchLocal/index.scss":
/*!******************************************!*\
  !*** ./src/pages/searchLocal/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/searchLocal/index.jsx","runtime","vendors"]]]);