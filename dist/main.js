!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);class r{constructor(t,e,o){const{SYNC:r,ASYNC:n}=t;if(this.SYNC_LIST=[],this.CONCAT_LIST=[],o in r)for(const t of r[o])this.SYNC_LIST.push({TYPE:"SYNC_"+e+"_"+t.TYPE,storeName:t.storeName}),t.opts&&t.opts.concat&&this.CONCAT_LIST.push({TYPE:"CONCAT_"+e+"_"+t.TYPE,storeName:t.storeName});if(n&&o in n){this.ASYNC_LIST=[];for(const t of n[o])this.ASYNC_LIST.push({TYPE:"ASYNC_"+e+"_"+t.TYPE})}}}function n(t){return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase()}class i{constructor({CONSTANT:t}){for(const e of t.SYNC_LIST)this[e.TYPE]=((t,o)=>{const r=e.storeName,i=o[r];if(void 0===i)throw Error("muation cannot find expected key: "+r);"object"!==n(i)?t[r]=i:t[r]=Object.assign(t[r],i)});for(const e of t.CONCAT_LIST)this[e.TYPE]=((t,o)=>{const r=e.storeName,n=o[r];if(!n)throw Error("muation cannot find expected key: "+r);t[r]=t[r].concat(n)})}}e.default=((t,e,o)=>{if(!o)throw Error("Must give a config key");if(!t.SYNC)throw Error("Must give a SYNC Object in config");const n=new r(t,e,o);return{mutations:new i({CONSTANT:n})}})}]);