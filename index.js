(function () {function j(a){return a&&a.__esModule?{d:a.default}:{d:a}}var e={};var i={};function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var g={};var N,v,O,P,Q=false;function R(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function S(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(r){return e[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}function T(){if(Q)return;Q=true;N={};v=Object.getOwnPropertySymbols;O=Object.prototype.hasOwnProperty;P=Object.prototype.propertyIsEnumerable;N=S()?Object.assign:function(r,e){for(var t,n,o=R(r),a=1;a<arguments.length;a++){for(var $ in t=Object(arguments[a]))O.call(t,$)&&(o[$]=t[$]);if(v){n=v(t);for(var s=0;s<n.length;s++)P.call(t,n[s])&&(o[n[s]]=t[n[s]])}}return o}}var U,k,a,d,V,W,X,Y,Z,_,$,aa,ba,ca,w,t,x,l,y,m,z,A,B,h,r,C,D,da=false;function f(r){for(var $="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)$+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+$+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(r,$,a){this.props=r,this.context=$,this.refs=x,this.updater=a||t}function E(){}function n(r,$,a){this.props=r,this.context=$,this.refs=x,this.updater=a||t}function F(r,$,a){var e,t={},n=null,i=null;if(null!=$)for(e in void 0!==$.ref&&(i=$.ref),void 0!==$.key&&(n=""+$.key),$)z.call($,e)&&!A.hasOwnProperty(e)&&(t[e]=$[e]);var o=arguments.length-2;if(1===o)t.children=a;else if(1<o){for(var u=Array(o),v=0;v<o;v++)u[v]=arguments[v+2];t.children=u}if(r&&r.defaultProps)for(e in o=r.defaultProps)void 0===t[e]&&(t[e]=o[e]);return{$$typeof:d,type:r,key:n,ref:i,props:t,_owner:m.current}}function ea(r,$){return{$$typeof:d,type:r.type,key:$,ref:r.ref,props:r.props,_owner:r._owner}}function o(r){return"object"==typeof r&&null!==r&&r.$$typeof===d}function fa(r){var $={"=":"=0",":":"=2"};return"$"+(""+r).replace(/[=:]/g,function(r){return $[r]})}function G(r,$,a,e){if(h.length){var t=h.pop();return t.result=r,t.keyPrefix=$,t.func=a,t.context=e,t.count=0,t}return{result:r,keyPrefix:$,func:a,context:e,count:0}}function H(r){r.result=null,r.keyPrefix=null,r.func=null,r.context=null,r.count=0,10>h.length&&h.push(r)}function p(r,$,a,e){var t=typeof r;"undefined"!==t&&"boolean"!==t||(r=null);var n=!1;if(null===r)n=!0;else switch(t){case"string":case"number":n=!0;break;case"object":switch(r.$$typeof){case d:case V:n=!0;}}if(n)return a(e,r,""===$?"."+s(r,0):$),1;if(n=0,$=""===$?".":$+":",Array.isArray(r))for(var i=0;i<r.length;i++){var o=$+s(t=r[i],i);n+=p(t,o,a,e)}else if(null===r||"object"!=typeof r?o=null:o="function"==typeof(o=w&&r[w]||r["@@iterator"])?o:null,"function"==typeof o)for(r=o.call(r),i=0;!(t=r.next()).done;)n+=p(t=t.value,o=$+s(t,i++),a,e);else if("object"===t)throw a=""+r,Error(f(31,"[object Object]"===a?"object with keys {"+Object.keys(r).join(", ")+"}":a,""));return n}function q(r,$,a){return null==r?0:p(r,"",$,a)}function s(r,$){return"object"==typeof r&&null!==r&&null!=r.key?fa(r.key):$.toString(36)}function ga(r,$){r.func.call(r.context,$,r.count++)}function ha(r,$,a){var e=r.result,t=r.keyPrefix;r=r.func.call(r.context,$,r.count++),Array.isArray(r)?u(r,e,a,function(r){return r}):null!=r&&(o(r)&&(r=ea(r,t+(!r.key||$&&$.key===r.key?"":(""+r.key).replace(B,"$&/")+"/")+a)),e.push(r))}function u(r,$,a,e,t){var n="";null!=a&&(n=(""+a).replace(B,"$&/")+"/"),q(r,ha,$=G($,n,e,t)),H($)}function b(){var r=y.current;if(null===r)throw Error(f(321));return r}function ia(){if(da)return;da=true;U={};k=(T(),N);a="function"==typeof Symbol&&Symbol.for;d=a?Symbol.for("react.element"):60103;V=a?Symbol.for("react.portal"):60106;W=a?Symbol.for("react.fragment"):60107;X=a?Symbol.for("react.strict_mode"):60108;Y=a?Symbol.for("react.profiler"):60114;Z=a?Symbol.for("react.provider"):60109;_=a?Symbol.for("react.context"):60110;$=a?Symbol.for("react.forward_ref"):60112;aa=a?Symbol.for("react.suspense"):60113;a&&Symbol.for("react.suspense_list");ba=a?Symbol.for("react.memo"):60115;ca=a?Symbol.for("react.lazy"):60116;a&&Symbol.for("react.fundamental"),a&&Symbol.for("react.responder"),a&&Symbol.for("react.scope");w="function"==typeof Symbol&&Symbol.iterator;t={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};x={};c.prototype.isReactComponent={},c.prototype.setState=function(r,$){if("object"!=typeof r&&"function"!=typeof r&&null!=r)throw Error(f(85));this.updater.enqueueSetState(this,r,$,"setState")},c.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")},E.prototype=c.prototype;l=n.prototype=new E;l.constructor=n,k(l,c.prototype),l.isPureReactComponent=!0;y={current:null};m={current:null};z=Object.prototype.hasOwnProperty;A={key:!0,ref:!0,__self:!0,__source:!0};B=/\/+/g;h=[];r={Children:{map:function(r,$,a){if(null==r)return r;var e=[];return u(r,e,null,$,a),e},forEach:function(r,$,a){if(null==r)return r;q(r,ga,$=G(null,null,$,a)),H($)},count:function(r){return q(r,function(){return null},null)},toArray:function(r){var $=[];return u(r,$,null,function(r){return r}),$},only:function(r){if(!o(r))throw Error(f(143));return r}},createRef:function(){return{current:null}},Component:c,PureComponent:n,createContext:function(r,$){return void 0===$&&($=null),(r={$$typeof:_,_calculateChangedBits:$,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:Z,_context:r},r.Consumer=r},forwardRef:function(r){return{$$typeof:$,render:r}},lazy:function(r){return{$$typeof:ca,_ctor:r,_status:-1,_result:null}},memo:function(r,$){return{$$typeof:ba,type:r,compare:void 0===$?null:$}},useCallback:function(r,$){return b().useCallback(r,$)},useContext:function(r,$){return b().useContext(r,$)},useEffect:function(r,$){return b().useEffect(r,$)},useImperativeHandle:function(r,$,a){return b().useImperativeHandle(r,$,a)},useDebugValue:function(){},useLayoutEffect:function(r,$){return b().useLayoutEffect(r,$)},useMemo:function(r,$){return b().useMemo(r,$)},useReducer:function(r,$,a){return b().useReducer(r,$,a)},useRef:function(r){return b().useRef(r)},useState:function(r){return b().useState(r)},Fragment:W,Profiler:Y,StrictMode:X,Suspense:aa,createElement:F,cloneElement:function(r,$,a){if(null==r)throw Error(f(267,r));var e=k({},r.props),t=r.key,n=r.ref,i=r._owner;if(null!=$){if(void 0!==$.ref&&(n=$.ref,i=m.current),void 0!==$.key&&(t=""+$.key),r.type&&r.type.defaultProps)var o=r.type.defaultProps;for(u in $)z.call($,u)&&!A.hasOwnProperty(u)&&(e[u]=void 0===$[u]&&void 0!==o?o[u]:$[u])}var u=arguments.length-2;if(1===u)e.children=a;else if(1<u){o=Array(u);for(var v=0;v<u;v++)o[v]=arguments[v+2];e.children=o}return{$$typeof:d,type:r.type,key:t,ref:n,props:e,_owner:i}},createFactory:function(r){var $=F.bind(null,r);return $.type=r,$},isValidElement:o,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:k}};C={default:r};D=C&&r||C;U=D.default||D}g=(ia(),U);var I=g.createContext({});var ja=i&&i.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();function J(t){var e=t.name;return function(t){var $n8MK$$interop$default=j(g);return function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return ja(n,r),n.prototype.render=function(){var r=this;var $n8MK$$interop$default=j(g);return $n8MK$$interop$default.d.createElement(I.Consumer,null,function(n){var o=n.state,$=n.dispatch;return $n8MK$$interop$default.d.createElement(t,M({},r.props,{value:o[e],onChange:$(e)}))})},n}($n8MK$$interop$default.d.Component)}}i.virtualControl=J;function ka(t){return(ka="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function la(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ma(t,e,r){return e&&L(t.prototype,e),r&&L(t,r),t}function na(t,e){return!e||"object"!==ka(e)&&"function"!=typeof e?oa(t):e}function oa(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pa(t){return(pa=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function qa(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ra(t,e)}function ra(t,e){return(ra=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function sa(t){var e=t.defaultData,r=t.validationScheme;return function(t){return function(i){function o(){var t;return la(this,o),(t=na(this,pa(o).apply(this,arguments))).state={data:e,errors:{}},t.validator=ta(r),t}var $n8MK$$interop$default=j(g);return qa(o,$n8MK$$interop$default.d.Component),ma(o,[{key:"updateControlValue",value:function(t,e){var r=this;this.setState(function(r){var i=r.data,o=r.errors;return{data:Object.assign(Object.assign({},i),K({},t,e)),errors:Object.assign(Object.assign({},o),K({},t,{}))}},function(){return r.props.onChange&&r.props.onChange(r.state)})}},{key:"updateControlState",value:function(t){var e=this;this.setState(function(e){var r=e.errors;return{errors:Object.assign(Object.assign({},r),t)}},function(){return e.props.onChange&&e.props.onChange(e.state)})}},{key:"dispatch",value:function(t){return function(e){this.validator(t,e).then(this.updateControlValue).catch(this.updateControlState)}}},{key:"submit",value:function(){this.props.onSubmit&&this.props.onSubmit(this.state)}},{key:"render",value:function(){var e=this.state,r=this.dispatch,i=this.props,o=this.submit;return $n8MK$$interop$default.d.createElement(I.Provider,{value:{state:e,dispatch:r,submit:o}},$n8MK$$interop$default.d.createElement(t,Object.assign({},i)))}}]),o}()}}function ta(r){return function(r,t){return{}}}e.virtualControl=J,e.virtualForm=sa;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e}else if(typeof define==="function"&&define.amd){define(function(){return e})}})();