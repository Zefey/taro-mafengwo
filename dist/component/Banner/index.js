(wx.webpackJsonp=wx.webpackJsonp||[]).push([[3],{"58":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r,a,c=n(0),p=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(c);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(59);var i=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Banner,p.default.Component),o(Banner,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Banner.prototype.__proto__||Object.getPrototypeOf(Banner.prototype),"_constructor",this).call(this,t);var e=t.data||[];this.state={"statusBarHeight":0,"data":e},this.$$refs=new p.default.RefsArray}},{"key":"componentDidMount","value":function componentDidMount(){var e=this;p.default.getSystemInfo().then(function(t){e.setState({"statusBarHeight":t.statusBarHeight||0})})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(t){var e=t.data;this.setState({"data":e})}},{"key":"_createData","value":function _createData(t,e,n){var r=this;this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var o=this.__state,a=o.data,i=o.statusBarHeight,u={"paddingTop":(p.default.$statusBarHeight||i)+"px"},s=a.length,l=0<s?a.map(function(t,e){t={"$original":(0,c.internal_get_original)(t)};var n=0<s?(0,c.internal_inline_style)(u):null,o="bzzzz"+e;return r.anonymousFunc0Map[o]=function(){r.itemClick(t.$original)},{"$loopState__temp2":n,"_$indexKey":o,"$loopState__temp4":0<s?(0,c.internal_inline_style)({"backgroundImage":"url("+t.$original.img+")"}):null,"$original":t.$original}}):[];return Object.assign(this.__state,{"loopArray1":l,"length":s}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,o)}}]),a=r=Banner,r.$$events=["anonymousFunc0"],r.$$componentPath="component/Banner/index",a);function Banner(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Banner);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n=_possibleConstructorReturn(this,(t=Banner.__proto__||Object.getPrototypeOf(Banner)).call.apply(t,[this].concat(r)))).$usedState=["loopArray1","length","data","statusBarHeight"],n.itemClick=function(t){p.default.navigateTo({"url":"/pages/webPage/index?url="+t.url})},n.anonymousFunc0Map={},n.customComponents=[],_possibleConstructorReturn(n,e)}e.default=i,Component(n(0).default.createComponent(i))},"59":function(t,e,n){}},[[58,0,1]]]);