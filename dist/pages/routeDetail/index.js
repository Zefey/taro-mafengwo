(wx.webpackJsonp=wx.webpackJsonp||[]).push([[18],{"50":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var _=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var o=[],n=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r,i,a,y=o(0),u=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(y),c=o(1);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}o(51);var s=(0,c.connect)(function(t){return{"user":t.user}},function(t){return{}})((function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RouteDetail,y.Component),n(RouteDetail,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0})(RouteDetail.prototype.__proto__||Object.getPrototypeOf(RouteDetail.prototype),"_constructor",this).call(this,t),this.$$refs=new u.default.RefsArray}},{"key":"componentDidMount","value":function componentDidMount(){console.log("this.$router.params",this.$router.params)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(t){console.log(this.props,t)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"_createData","value":function _createData(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,r=(0,y.genCompid)(n+"$compid__17"),i=_(r,2),a=i[0],u=i[1],c=this.$router.params,s=c.title,l=c.contentImg,p=c.tags,f=c.data;return p=p&&p.split(","),f=f&&JSON.parse(f),y.propsManager.set({"title":s,"showLeft":!0},u,a),Object.assign(this.__state,{"anonymousState__temp":"route","$compid__17":u,"contentImg":l,"tags":p,"data":f,"title":s}),this.__state}}]),a=i=RouteDetail,i.$$events=[],i.$$componentPath="pages/routeDetail/index",r=a))||r;function RouteDetail(){var t,e,o;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RouteDetail);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=o=_possibleConstructorReturn(this,(t=RouteDetail.__proto__||Object.getPrototypeOf(RouteDetail)).call.apply(t,[this].concat(r)))).$usedState=["anonymousState__temp","$compid__17","contentImg","tags","data","title"],o.customComponents=["NavBar"],_possibleConstructorReturn(o,e)}e.default=s,Component(o(0).default.createComponent(s,!0))},"51":function(t,e,o){}},[[50,0,1]]]);