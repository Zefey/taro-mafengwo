(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["component/Travel/index"],{

/***/ "./src/component/Travel/index.jsx":
/*!****************************************!*\
  !*** ./src/component/Travel/index.jsx ***!
  \****************************************/
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

var _dateUtil = __webpack_require__(/*! ../../util/dateUtil */ "./src/util/dateUtil.js");

var _dateUtil2 = _interopRequireDefault(_dateUtil);

__webpack_require__(/*! ./index.scss */ "./src/component/Travel/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Travel = (_dec = (0, _redux.connect)(function (_ref) {
  var travel = _ref.travel;
  return {
    travel: travel
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_Taro$Component) {
  _inherits(Travel, _Taro$Component);

  function Travel() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Travel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Travel.__proto__ || Object.getPrototypeOf(Travel)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray2", "data", "style", "travel"], _this.formatData = function (data) {
      var expect = [];
      var firstCol = [];
      var secondCol = [];
      for (var i in data) {
        if (i % 2 == 0) {
          firstCol.push(data[i]);
        } else {
          secondCol.push(data[i]);
        }
      }
      expect.push(firstCol);
      expect.push(secondCol);

      _this.setState({
        data: expect
      });
    }, _this.goDeail = function (data) {
      var param = _this.Qs(data);
      _taroWeapp2.default.navigateTo({
        url: "/pages/travelDetail/index?" + param
      });
    }, _this.Qs = function (data) {
      var QsData = [];
      for (var key in data) {
        QsData.push(key + "=" + data[key]);
      }
      return QsData = QsData.join('&');
    }, _this.anonymousFunc0Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Travel, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Travel.prototype.__proto__ || Object.getPrototypeOf(Travel.prototype), "_constructor", this).call(this, props);
      var data = props.travel.data;
      this.formatData(data);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var data = nextProps.travel.data;
      this.formatData(data);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var data = this.__state.data;
      var style = this.__props.style;

      console.log('data', data);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(style);
      var loopArray2 = data ? data.map(function (item1, index1) {
        item1 = {
          $original: (0, _taroWeapp.internal_get_original)(item1)
        };
        var $anonymousCallee__0 = data ? item1.$original.map(function (item, index) {
          item = {
            $original: (0, _taroWeapp.internal_get_original)(item)
          };

          var _item$$original$imgs = _slicedToArray(item.$original.imgs, 1),
              first = _item$$original$imgs[0];

          var _$indexKey = "czzzz" + index1 + "-" + index;

          _this2.anonymousFunc0Map[_$indexKey] = function () {
            _this2.goDeail(item.$original);
          };

          var $loopState__temp3 = data ? _dateUtil2.default.formatDate(item.$original.time) : null;
          return {
            first: first,
            _$indexKey: _$indexKey,
            $loopState__temp3: $loopState__temp3,
            $original: item.$original
          };
        }) : [];
        return {
          $anonymousCallee__0: $anonymousCallee__0,
          $original: item1.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray2: loopArray2,
        data: data
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

  return Travel;
}(_taroWeapp2.default.Component), _class2.$$events = ["anonymousFunc0"], _class2.options = {
  addGlobalClass: true
}, _class2.$$componentPath = "component/Travel/index", _temp2)) || _class);
exports.default = Travel;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Travel));

/***/ }),

/***/ "./src/component/Travel/index.scss":
/*!*****************************************!*\
  !*** ./src/component/Travel/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/component/Travel/index.jsx","runtime","vendors"]]]);