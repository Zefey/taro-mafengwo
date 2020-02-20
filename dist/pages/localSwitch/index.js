(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/localSwitch/index"],{

/***/ "./src/pages/localSwitch/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/localSwitch/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/localSwitch/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalSwitch = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(LocalSwitch, _BaseComponent);

  function LocalSwitch() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, LocalSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = LocalSwitch.__proto__ || Object.getPrototypeOf(LocalSwitch)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray5", "loopArray6", "loopArray7", "$compid__9", "data", "current", "cityList", "update", "user"], _this.state = {
      current: 0,
      data: []

    }, _this.getLocationList = function () {
      _taroWeapp2.default.request({
        url: "http://zefey.com:12345/mfw/locationList",
        success: function success(res) {
          console.log('getLocationList', res);
          var data = res.data.data;
          var expect = [];
          var hot = [];
          var json = {};
          for (var i = 0; i < data.length; i++) {
            if (data[i].type != 1) {
              break;
            }
            if (data[i].hot) {
              hot.push(data[i]);
            }
            if (data[i].pre_name) {
              json[data[i].pre_name] = [];
            }
          }
          for (var _i = 0; _i < data.length; _i++) {
            if (data[_i].type != 1) {
              break;
            }
            for (var key in json) {
              if (data[_i].pre_name == key) {
                json[data[_i].pre_name].push(data[_i]);
              }
            }
          }
          expect = [{
            name: '热门',
            data: hot
          }];
          for (var _key2 in json) {
            var temp = {};
            temp.name = _key2;
            temp.data = json[_key2];
            expect.push(temp);
          }
          _this.setState({
            data: expect
          });
        },
        fail: function fail(err) {
          console.log("getLocationList err", err);
        }
      });
    }, _this.switch = function (city) {
      _this.props.update(_extends({}, _this.props.user, {
        locationCity: city
      }));
      _taroWeapp2.default.navigateBack();
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = ["NavBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LocalSwitch, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(LocalSwitch.prototype.__proto__ || Object.getPrototypeOf(LocalSwitch.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__9"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__9 = _genCompid2[0],
          $compid__9 = _genCompid2[1];

      var _state = this.__state,
          data = _state.data,
          current = _state.current;

      var cityList = [];
      if (data && data.length > 0) {
        cityList = data[current].data;
      }
      var anonymousState__temp = 'localSwitch';
      var loopArray5 = data.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp3 = (0, _taroWeapp.internal_inline_style)(index == current ? { backgroundColor: '#fff' } : { backgroundColor: '#eee' });

        var _$indexKey = "fzzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          _this2.setState({ current: index });
        };

        return {
          $loopState__temp3: $loopState__temp3,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      var loopArray6 = current == 0 ? cityList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "gzzzz" + index;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          _this2.switch(item.$original.name);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      }) : [];
      var loopArray7 = !(current == 0) ? cityList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "hzzzz" + index;

        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          _this2.switch(item.$original.name);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "title": "\u76EE\u7684\u5730\u5207\u6362",
        "showLeft": true
      }, $compid__9, $prevCompid__9);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray5: loopArray5,
        loopArray6: loopArray6,
        loopArray7: loopArray7,
        $compid__9: $compid__9,
        cityList: cityList
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }]);

  return LocalSwitch;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class2.$$componentPath = "pages/localSwitch/index", _temp2)) || _class);
exports.default = LocalSwitch;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(LocalSwitch, true));

/***/ }),

/***/ "./src/pages/localSwitch/index.scss":
/*!******************************************!*\
  !*** ./src/pages/localSwitch/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/localSwitch/index.jsx","runtime","vendors"]]]);