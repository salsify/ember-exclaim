/*! For license information please see chunk.525.7753a867c8d1a74b9cc6.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[525],{141:(e,t,n)=>{e=n.nmd(e),function(){var e=function(){return this}()
e||"undefined"==typeof window||(e=window)
var t=function(e,n,i){"string"==typeof e?(2==arguments.length&&(i=n),t.modules[e]||(t.payloads[e]=i,t.modules[e]=null)):t.original?t.original.apply(this,arguments):(console.error("dropping module because define wasn't a string."),console.trace())}
t.modules={},t.payloads={}
var n,i,o=function(e,t,n){if("string"==typeof t){var i=a(e,t)
if(null!=i)return n&&n(),i}else if("[object Array]"===Object.prototype.toString.call(t)){for(var o=[],s=0,l=t.length;s<l;++s){var c=a(e,t[s])
if(null==c&&r.original)return
o.push(c)}return n&&n.apply(null,o)||!0}},r=function(e,t){var n=o("",e,t)
return null==n&&r.original?r.original.apply(this,arguments):n},s=function(e,t){if(-1!==t.indexOf("!")){var n=t.split("!")
return s(e,n[0])+"!"+s(e,n[1])}if("."==t.charAt(0))for(t=e.split("/").slice(0,-1).join("/")+"/"+t;-1!==t.indexOf(".")&&i!=t;){var i=t
t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}return t},a=function(e,n){n=s(e,n)
var i=t.modules[n]
if(!i){if("function"==typeof(i=t.payloads[n])){var r={},a={id:n,uri:"",exports:r,packaged:!0}
r=i((function(e,t){return o(n,e,t)}),r,a)||a.exports,t.modules[n]=r,delete t.payloads[n]}i=t.modules[n]=r||i}return i}
i=e,(n="ace")&&(e[n]||(e[n]={}),i=e[n]),i.define&&i.define.packaged||(t.original=i.define,i.define=t,i.define.packaged=!0),i.require&&i.require.packaged||(r.original=i.require,i.require=r,i.require.packaged=!0)}(),ace.define("ace/lib/es6-shim",["require","exports","module"],(function(e,t,n){function i(e,t,n){Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}String.prototype.startsWith||i(String.prototype,"startsWith",(function(e,t){return t=t||0,this.lastIndexOf(e,t)===t})),String.prototype.endsWith||i(String.prototype,"endsWith",(function(e,t){var n=this;(void 0===t||t>n.length)&&(t=n.length),t-=e.length
var i=n.indexOf(e,t)
return-1!==i&&i===t})),String.prototype.repeat||i(String.prototype,"repeat",(function(e){for(var t="",n=this;e>0;)1&e&&(t+=n),(e>>=1)&&(n+=n)
return t})),String.prototype.includes||i(String.prototype,"includes",(function(e,t){return-1!=this.indexOf(e,t)})),Object.assign||(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n]
null!=i&&Object.keys(i).forEach((function(e){t[e]=i[e]}))}return t}),Object.values||(Object.values=function(e){return Object.keys(e).map((function(t){return e[t]}))}),Array.prototype.find||i(Array.prototype,"find",(function(e){for(var t=this.length,n=arguments[1],i=0;i<t;i++){var o=this[i]
if(e.call(n,o,i,this))return o}})),Array.prototype.findIndex||i(Array.prototype,"findIndex",(function(e){for(var t=this.length,n=arguments[1],i=0;i<t;i++){var o=this[i]
if(e.call(n,o,i,this))return i}})),Array.prototype.includes||i(Array.prototype,"includes",(function(e,t){return-1!=this.indexOf(e,t)})),Array.prototype.fill||i(Array.prototype,"fill",(function(e){for(var t=this,n=t.length>>>0,i=arguments[1]>>0,o=i<0?Math.max(n+i,0):Math.min(i,n),r=arguments[2],s=void 0===r?n:r>>0,a=s<0?Math.max(n+s,0):Math.min(s,n);o<a;)t[o]=e,o++
return t})),Array.of||i(Array,"of",(function(){return Array.prototype.slice.call(arguments)}))})),ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/es6-shim"],(function(e,t,n){"use strict"
e("./es6-shim")})),ace.define("ace/lib/lang",["require","exports","module"],(function(e,t,n){"use strict"
t.last=function(e){return e[e.length-1]},t.stringReverse=function(e){return e.split("").reverse().join("")},t.stringRepeat=function(e,t){for(var n="";t>0;)1&t&&(n+=e),(t>>=1)&&(e+=e)
return n}
var i=/^\s\s*/,o=/\s\s*$/
t.stringTrimLeft=function(e){return e.replace(i,"")},t.stringTrimRight=function(e){return e.replace(o,"")},t.copyObject=function(e){var t={}
for(var n in e)t[n]=e[n]
return t},t.copyArray=function(e){for(var t=[],n=0,i=e.length;n<i;n++)e[n]&&"object"==typeof e[n]?t[n]=this.copyObject(e[n]):t[n]=e[n]
return t},t.deepCopy=function e(t){if("object"!=typeof t||!t)return t
var n
if(Array.isArray(t)){n=[]
for(var i=0;i<t.length;i++)n[i]=e(t[i])
return n}if("[object Object]"!==Object.prototype.toString.call(t))return t
for(var i in n={},t)n[i]=e(t[i])
return n},t.arrayToMap=function(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=1
return t},t.createMap=function(e){var t=Object.create(null)
for(var n in e)t[n]=e[n]
return t},t.arrayRemove=function(e,t){for(var n=0;n<=e.length;n++)t===e[n]&&e.splice(n,1)},t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},t.escapeHTML=function(e){return(""+e).replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")},t.getMatchOffsets=function(e,t){var n=[]
return e.replace(t,(function(e){n.push({offset:arguments[arguments.length-2],length:e.length})})),n},t.deferredCall=function(e){var t=null,n=function(){t=null,e()},i=function(e){return i.cancel(),t=setTimeout(n,e||0),i}
return i.schedule=i,i.call=function(){return this.cancel(),e(),i},i.cancel=function(){return clearTimeout(t),t=null,i},i.isPending=function(){return t},i},t.delayedCall=function(e,t){var n=null,i=function(){n=null,e()},o=function(e){null==n&&(n=setTimeout(i,e||t))}
return o.delay=function(e){n&&clearTimeout(n),n=setTimeout(i,e||t)},o.schedule=o,o.call=function(){this.cancel(),e()},o.cancel=function(){n&&clearTimeout(n),n=null},o.isPending=function(){return n},o}})),ace.define("ace/lib/useragent",["require","exports","module"],(function(e,t,n){"use strict"
t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},t.getOS=function(){return t.isMac?t.OS.MAC:t.isLinux?t.OS.LINUX:t.OS.WINDOWS}
var i="object"==typeof navigator?navigator:{},o=(/mac|win|linux/i.exec(i.platform)||["other"])[0].toLowerCase(),r=i.userAgent||"",s=i.appName||""
t.isWin="win"==o,t.isMac="mac"==o,t.isLinux="linux"==o,t.isIE="Microsoft Internet Explorer"==s||s.indexOf("MSAppHost")>=0?parseFloat((r.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]):parseFloat((r.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/)||[])[1]),t.isOldIE=t.isIE&&t.isIE<9,t.isGecko=t.isMozilla=r.match(/ Gecko\/\d+/),t.isOpera="object"==typeof opera&&"[object Opera]"==Object.prototype.toString.call(window.opera),t.isWebKit=parseFloat(r.split("WebKit/")[1])||void 0,t.isChrome=parseFloat(r.split(" Chrome/")[1])||void 0,t.isEdge=parseFloat(r.split(" Edge/")[1])||void 0,t.isAIR=r.indexOf("AdobeAIR")>=0,t.isAndroid=r.indexOf("Android")>=0,t.isChromeOS=r.indexOf(" CrOS ")>=0,t.isIOS=/iPad|iPhone|iPod/.test(r)&&!window.MSStream,t.isIOS&&(t.isMac=!0),t.isMobile=t.isIOS||t.isAndroid})),ace.define("ace/lib/dom",["require","exports","module","ace/lib/useragent"],(function(e,t,n){"use strict"
var i,o=e("./useragent")
t.buildDom=function e(t,n,i){if("string"==typeof t&&t){var o=document.createTextNode(t)
return n&&n.appendChild(o),o}if(!Array.isArray(t))return t&&t.appendChild&&n&&n.appendChild(t),t
if("string"!=typeof t[0]||!t[0]){for(var r=[],s=0;s<t.length;s++){var a=e(t[s],n,i)
a&&r.push(a)}return r}var l=document.createElement(t[0]),c=t[1],h=1
for(c&&"object"==typeof c&&!Array.isArray(c)&&(h=2),s=h;s<t.length;s++)e(t[s],l,i)
return 2==h&&Object.keys(c).forEach((function(e){var t=c[e]
"class"===e?l.className=Array.isArray(t)?t.join(" "):t:"function"==typeof t||"value"==e||"$"==e[0]?l[e]=t:"ref"===e?i&&(i[t]=l):"style"===e?"string"==typeof t&&(l.style.cssText=t):null!=t&&l.setAttribute(e,t)})),n&&n.appendChild(l),l},t.getDocumentHead=function(e){return e||(e=document),e.head||e.getElementsByTagName("head")[0]||e.documentElement},t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||"http://www.w3.org/1999/xhtml",e):document.createElement(e)},t.removeChildren=function(e){e.innerHTML=""},t.createTextNode=function(e,t){return(t?t.ownerDocument:document).createTextNode(e)},t.createFragment=function(e){return(e?e.ownerDocument:document).createDocumentFragment()},t.hasCssClass=function(e,t){return-1!==(e.className+"").split(/\s+/g).indexOf(t)},t.addCssClass=function(e,n){t.hasCssClass(e,n)||(e.className+=" "+n)},t.removeCssClass=function(e,t){for(var n=e.className.split(/\s+/g);;){var i=n.indexOf(t)
if(-1==i)break
n.splice(i,1)}e.className=n.join(" ")},t.toggleCssClass=function(e,t){for(var n=e.className.split(/\s+/g),i=!0;;){var o=n.indexOf(t)
if(-1==o)break
i=!1,n.splice(o,1)}return i&&n.push(t),e.className=n.join(" "),i},t.setCssClass=function(e,n,i){i?t.addCssClass(e,n):t.removeCssClass(e,n)},t.hasCssString=function(e,t){var n,i=0
if(n=(t=t||document).querySelectorAll("style"))for(;i<n.length;)if(n[i++].id===e)return!0},t.removeElementById=function(e,t){(t=t||document).getElementById(e)&&t.getElementById(e).remove()}
var r=[]
function s(){var e=r
r=null,e&&e.forEach((function(e){a(e[0],e[1])}))}function a(e,n,o){if("undefined"!=typeof document){if(r)if(o)s()
else if(!1===o)return r.push([e,n])
if(!i){var a=o
o&&o.getRootNode&&(a=o.getRootNode())&&a!=o||(a=document)
var l=a.ownerDocument||a
if(n&&t.hasCssString(n,a))return null
n&&(e+="\n/*# sourceURL=ace/css/"+n+" */")
var c=t.createElement("style")
c.appendChild(l.createTextNode(e)),n&&(c.id=n),a==l&&(a=t.getDocumentHead(l)),a.insertBefore(c,a.firstChild)}}}if(t.useStrictCSP=function(e){i=e,0==e?s():r||(r=[])},t.importCssString=a,t.importCssStylsheet=function(e,n){t.buildDom(["link",{rel:"stylesheet",href:e}],t.getDocumentHead(n))},t.scrollbarWidth=function(e){var n=t.createElement("ace_inner")
n.style.width="100%",n.style.minWidth="0px",n.style.height="200px",n.style.display="block"
var i=t.createElement("ace_outer"),o=i.style
o.position="absolute",o.left="-10000px",o.overflow="hidden",o.width="200px",o.minWidth="0px",o.height="150px",o.display="block",i.appendChild(n)
var r=e&&e.documentElement||document&&document.documentElement
if(!r)return 0
r.appendChild(i)
var s=n.offsetWidth
o.overflow="scroll"
var a=n.offsetWidth
return s===a&&(a=i.clientWidth),r.removeChild(i),s-a},t.computedStyle=function(e,t){return window.getComputedStyle(e,"")||{}},t.setStyle=function(e,t,n){e[t]!==n&&(e[t]=n)},t.HAS_CSS_ANIMATION=!1,t.HAS_CSS_TRANSFORMS=!1,t.HI_DPI=!o.isWin||"undefined"!=typeof window&&window.devicePixelRatio>=1.5,o.isChromeOS&&(t.HI_DPI=!1),"undefined"!=typeof document){var l=document.createElement("div")
t.HI_DPI&&void 0!==l.style.transform&&(t.HAS_CSS_TRANSFORMS=!0),o.isEdge||void 0===l.style.animationName||(t.HAS_CSS_ANIMATION=!0),l=null}t.HAS_CSS_TRANSFORMS?t.translate=function(e,t,n){e.style.transform="translate("+Math.round(t)+"px, "+Math.round(n)+"px)"}:t.translate=function(e,t,n){e.style.top=Math.round(n)+"px",e.style.left=Math.round(t)+"px"}})),ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("./dom")
t.get=function(e,t){var n=new XMLHttpRequest
n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&t(n.responseText)},n.send(null)},t.loadScript=function(e,t){var n=i.getDocumentHead(),o=document.createElement("script")
o.src=e,n.appendChild(o),o.onload=o.onreadystatechange=function(e,n){!n&&o.readyState&&"loaded"!=o.readyState&&"complete"!=o.readyState||(o=o.onload=o.onreadystatechange=null,n||t())}},t.qualifyURL=function(e){var t=document.createElement("a")
return t.href=e,t.href}})),ace.define("ace/lib/oop",["require","exports","module"],(function(e,t,n){"use strict"
t.inherits=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},t.mixin=function(e,t){for(var n in t)e[n]=t[n]
return e},t.implement=function(e,n){t.mixin(e,n)}})),ace.define("ace/lib/event_emitter",["require","exports","module"],(function(e,t,n){"use strict"
var i={},o=function(){this.propagationStopped=!0},r=function(){this.defaultPrevented=!0}
i._emit=i._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={})
var n=this._eventRegistry[e]||[],i=this._defaultHandlers[e]
if(n.length||i){"object"==typeof t&&t||(t={}),t.type||(t.type=e),t.stopPropagation||(t.stopPropagation=o),t.preventDefault||(t.preventDefault=r),n=n.slice()
for(var s=0;s<n.length&&(n[s](t,this),!t.propagationStopped);s++);return i&&!t.defaultPrevented?i(t,this):void 0}},i._signal=function(e,t){var n=(this._eventRegistry||{})[e]
if(n){n=n.slice()
for(var i=0;i<n.length;i++)n[i](t,this)}},i.once=function(e,t){var n=this
if(this.on(e,(function i(){n.off(e,i),t.apply(null,arguments)})),!t)return new Promise((function(e){t=e}))},i.setDefaultHandler=function(e,t){var n=this._defaultHandlers
if(n||(n=this._defaultHandlers={_disabled_:{}}),n[e]){var i=n[e],o=n._disabled_[e]
o||(n._disabled_[e]=o=[]),o.push(i)
var r=o.indexOf(t);-1!=r&&o.splice(r,1)}n[e]=t},i.removeDefaultHandler=function(e,t){var n=this._defaultHandlers
if(n){var i=n._disabled_[e]
if(n[e]==t)i&&this.setDefaultHandler(e,i.pop())
else if(i){var o=i.indexOf(t);-1!=o&&i.splice(o,1)}}},i.on=i.addEventListener=function(e,t,n){this._eventRegistry=this._eventRegistry||{}
var i=this._eventRegistry[e]
return i||(i=this._eventRegistry[e]=[]),-1==i.indexOf(t)&&i[n?"unshift":"push"](t),t},i.off=i.removeListener=i.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{}
var n=this._eventRegistry[e]
if(n){var i=n.indexOf(t);-1!==i&&n.splice(i,1)}},i.removeAllListeners=function(e){e||(this._eventRegistry=this._defaultHandlers=void 0),this._eventRegistry&&(this._eventRegistry[e]=void 0),this._defaultHandlers&&(this._defaultHandlers[e]=void 0)},t.EventEmitter=i})),ace.define("ace/lib/app_config",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,n){var i,o=e("./oop"),r=e("./event_emitter").EventEmitter,s={setOptions:function(e){Object.keys(e).forEach((function(t){this.setOption(t,e[t])}),this)},getOptions:function(e){var t={}
if(e)Array.isArray(e)||(t=e,e=Object.keys(t))
else{var n=this.$options
e=Object.keys(n).filter((function(e){return!n[e].hidden}))}return e.forEach((function(e){t[e]=this.getOption(e)}),this),t},setOption:function(e,t){if(this["$"+e]!==t){var n=this.$options[e]
if(!n)return a('misspelled option "'+e+'"')
if(n.forwardTo)return this[n.forwardTo]&&this[n.forwardTo].setOption(e,t)
n.handlesSet||(this["$"+e]=t),n&&n.set&&n.set.call(this,t)}},getOption:function(e){var t=this.$options[e]
return t?t.forwardTo?this[t.forwardTo]&&this[t.forwardTo].getOption(e):t&&t.get?t.get.call(this):this["$"+e]:a('misspelled option "'+e+'"')}}
function a(e){"undefined"!=typeof console&&console.warn&&console.warn.apply(console,arguments)}var l=function(){function e(){this.$defaultOptions={}}return e.prototype.defineOptions=function(e,t,n){return e.$options||(this.$defaultOptions[t]=e.$options={}),Object.keys(n).forEach((function(t){var i=n[t]
"string"==typeof i&&(i={forwardTo:i}),i.name||(i.name=t),e.$options[i.name]=i,"initialValue"in i&&(e["$"+i.name]=i.initialValue)})),o.implement(e,s),this},e.prototype.resetOptions=function(e){Object.keys(e.$options).forEach((function(t){var n=e.$options[t]
"value"in n&&e.setOption(t,n.value)}))},e.prototype.setDefaultValue=function(e,t,n){if(!e){for(e in this.$defaultOptions)if(this.$defaultOptions[e][t])break
if(!this.$defaultOptions[e][t])return!1}var i=this.$defaultOptions[e]||(this.$defaultOptions[e]={})
i[t]&&(i.forwardTo?this.setDefaultValue(i.forwardTo,t,n):i[t].value=n)},e.prototype.setDefaultValues=function(e,t){Object.keys(t).forEach((function(n){this.setDefaultValue(e,n,t[n])}),this)},e.prototype.setMessages=function(e){i=e},e.prototype.nls=function(e,t){i&&!i[e]&&a("No message found for '"+e+"' in the provided messages, falling back to default English message.")
var n=i&&i[e]||e
return t&&(n=n.replace(/\$(\$|[\d]+)/g,(function(e,n){return"$"==n?"$":t[n]}))),n},e}()
l.prototype.warn=a,l.prototype.reportError=function(e,t){var n=new Error(e)
n.data=t,"object"==typeof console&&console.error&&console.error(n),setTimeout((function(){throw n}))},o.implement(l.prototype,r),t.AppConfig=l})),ace.define("ace/theme/textmate-css",["require","exports","module"],(function(e,t,n){n.exports='.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-tm .ace_cursor {\n  color: black;\n}\n        \n.ace-tm .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_storage,\n.ace-tm .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_support.ace_type,\n.ace-tm .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-tm .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px white;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-tm .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'})),ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],(function(e,t,n){"use strict"
t.isDark=!1,t.cssClass="ace-tm",t.cssText=e("./textmate-css"),t.$id="ace/theme/textmate",e("../lib/dom").importCssString(t.cssText,t.cssClass,!1)})),ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/net","ace/lib/dom","ace/lib/app_config","ace/theme/textmate"],(function(e,t,n){var i=e("./lib/lang"),o=e("./lib/net"),r=e("./lib/dom"),s=e("./lib/app_config").AppConfig
n.exports=t=new s
var a,l={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{},loadWorkerFromBlob:!0,sharedPopups:!1,useStrictCSP:null}
t.get=function(e){if(!l.hasOwnProperty(e))throw new Error("Unknown config key: "+e)
return l[e]},t.set=function(e,t){if(l.hasOwnProperty(e))l[e]=t
else if(0==this.setDefaultValue("",e,t))throw new Error("Unknown config key: "+e)
"useStrictCSP"==e&&r.useStrictCSP(t)},t.all=function(){return i.copyObject(l)},t.$modes={},t.moduleUrl=function(e,t){if(l.$moduleUrls[e])return l.$moduleUrls[e]
var n=e.split("/"),i="snippets"==(t=t||n[n.length-2]||"")?"/":"-",o=n[n.length-1]
if("worker"==t&&"-"==i){var r=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g")
o=o.replace(r,"")}(!o||o==t)&&n.length>1&&(o=n[n.length-2])
var s=l[t+"Path"]
return null==s?s=l.basePath:"/"==i&&(t=i=""),s&&"/"!=s.slice(-1)&&(s+="/"),s+t+i+o+this.get("suffix")},t.setModuleUrl=function(e,t){return l.$moduleUrls[e]=t},t.setLoader=function(e){a=e},t.dynamicModules=Object.create(null),t.$loading={},t.$loaded={},t.loadModule=function(n,i){var r,s
Array.isArray(n)&&(s=n[0],n=n[1])
var l=function(r){if(r&&!t.$loading[n])return i&&i(r)
if(t.$loading[n]||(t.$loading[n]=[]),t.$loading[n].push(i),!(t.$loading[n].length>1)){var l=function(){!function(t,n){"ace/theme/textmate"===t||"./theme/textmate"===t?n(0,e("./theme/textmate")):a?a(t,n):console.error("loader is not configured")}(n,(function(e,i){i&&(t.$loaded[n]=i),t._emit("load.module",{name:n,module:i})
var o=t.$loading[n]
t.$loading[n]=null,o.forEach((function(e){e&&e(i)}))}))}
if(!t.get("packaged"))return l()
o.loadScript(t.moduleUrl(n,s),l),c()}}
if(t.dynamicModules[n])t.dynamicModules[n]().then((function(e){e.default?l(e.default):l(e)}))
else{try{r=this.$require(n)}catch(e){}l(r||t.$loaded[n])}},t.$require=function(e){if("function"==typeof n.require)return n.require(e)},t.setModuleLoader=function(e,n){t.dynamicModules[e]=n}
var c=function(){l.basePath||l.workerPath||l.modePath||l.themePath||Object.keys(l.$moduleUrls).length||(console.error("Unable to infer path to ace from script src,","use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes","or with webpack use ace/webpack-resolver"),c=function(){})}
t.version="1.23.1"})),ace.define("ace/loader_build",["require","exports","module","ace/lib/fixoldbrowsers","ace/config"],(function(e,t,i){"use strict"
e("./lib/fixoldbrowsers")
var o=e("./config")
o.setLoader((function(t,n){e([t],(function(e){n(null,e)}))}))
var r=function(){return this||"undefined"!=typeof window&&window}()
function s(t){if(r&&r.document){o.set("packaged",t||e.packaged||i.packaged||r.define&&n.amdD.packaged)
var s={},a="",l=document.currentScript||document._currentScript,c=l&&l.ownerDocument||document
l&&l.src&&(a=l.src.split(/[?#]/)[0].split("/").slice(0,-1).join("/")||"")
for(var h,u=c.getElementsByTagName("script"),d=0;d<u.length;d++){var g=u[d],p=g.src||g.getAttribute("src")
if(p){for(var f=g.attributes,m=0,v=f.length;m<v;m++){var w=f[m]
0===w.name.indexOf("data-ace-")&&(s[(h=w.name.replace(/^data-ace-/,""),h.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=w.value)}var y=p.match(/^(.*)\/ace([\-.]\w+)?\.js(\?|$)/)
y&&(a=y[1])}}for(var b in a&&(s.base=s.base||a,s.packaged=!0),s.basePath=s.base,s.workerPath=s.workerPath||s.base,s.modePath=s.modePath||s.base,s.themePath=s.themePath||s.base,delete s.base,s)void 0!==s[b]&&o.set(b,s[b])}}i.exports=function(t){o.init=s,o.$require=e,t.require=e,t.define=n.amdD},s(!0)})),ace.define("ace/range",["require","exports","module"],(function(e,t,n){"use strict"
var i=function(){function e(e,t,n,i){this.start={row:e,column:t},this.end={row:n,column:i}}return e.prototype.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column},e.prototype.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},e.prototype.contains=function(e,t){return 0==this.compare(e,t)},e.prototype.compareRange=function(e){var t,n=e.end,i=e.start
return 1==(t=this.compare(n.row,n.column))?1==(t=this.compare(i.row,i.column))?2:0==t?1:0:-1==t?-2:-1==(t=this.compare(i.row,i.column))?-1:1==t?42:0},e.prototype.comparePoint=function(e){return this.compare(e.row,e.column)},e.prototype.containsRange=function(e){return 0==this.comparePoint(e.start)&&0==this.comparePoint(e.end)},e.prototype.intersects=function(e){var t=this.compareRange(e)
return-1==t||0==t||1==t},e.prototype.isEnd=function(e,t){return this.end.row==e&&this.end.column==t},e.prototype.isStart=function(e,t){return this.start.row==e&&this.start.column==t},e.prototype.setStart=function(e,t){"object"==typeof e?(this.start.column=e.column,this.start.row=e.row):(this.start.row=e,this.start.column=t)},e.prototype.setEnd=function(e,t){"object"==typeof e?(this.end.column=e.column,this.end.row=e.row):(this.end.row=e,this.end.column=t)},e.prototype.inside=function(e,t){return 0==this.compare(e,t)&&!this.isEnd(e,t)&&!this.isStart(e,t)},e.prototype.insideStart=function(e,t){return 0==this.compare(e,t)&&!this.isEnd(e,t)},e.prototype.insideEnd=function(e,t){return 0==this.compare(e,t)&&!this.isStart(e,t)},e.prototype.compare=function(e,t){return this.isMultiLine()||e!==this.start.row?e<this.start.row?-1:e>this.end.row?1:this.start.row===e?t>=this.start.column?0:-1:this.end.row===e?t<=this.end.column?0:1:0:t<this.start.column?-1:t>this.end.column?1:0},e.prototype.compareStart=function(e,t){return this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},e.prototype.compareEnd=function(e,t){return this.end.row==e&&this.end.column==t?1:this.compare(e,t)},e.prototype.compareInside=function(e,t){return this.end.row==e&&this.end.column==t?1:this.start.row==e&&this.start.column==t?-1:this.compare(e,t)},e.prototype.clipRows=function(t,n){if(this.end.row>n)var i={row:n+1,column:0}
else this.end.row<t&&(i={row:t,column:0})
if(this.start.row>n)var o={row:n+1,column:0}
else this.start.row<t&&(o={row:t,column:0})
return e.fromPoints(o||this.start,i||this.end)},e.prototype.extend=function(t,n){var i=this.compare(t,n)
if(0==i)return this
if(-1==i)var o={row:t,column:n}
else var r={row:t,column:n}
return e.fromPoints(o||this.start,r||this.end)},e.prototype.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},e.prototype.isMultiLine=function(){return this.start.row!==this.end.row},e.prototype.clone=function(){return e.fromPoints(this.start,this.end)},e.prototype.collapseRows=function(){return 0==this.end.column?new e(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new e(this.start.row,0,this.end.row,0)},e.prototype.toScreenRange=function(t){var n=t.documentToScreenPosition(this.start),i=t.documentToScreenPosition(this.end)
return new e(n.row,n.column,i.row,i.column)},e.prototype.moveBy=function(e,t){this.start.row+=e,this.start.column+=t,this.end.row+=e,this.end.column+=t},e}()
i.fromPoints=function(e,t){return new i(e.row,e.column,t.row,t.column)},i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},i.comparePoints=function(e,t){return e.row-t.row||e.column-t.column},t.Range=i})),ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],(function(e,t,n){"use strict"
var i=e("./oop"),o=function(){var e,t,n={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta",91:"MetaLeft",92:"MetaRight",93:"ContextMenu"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,super:8,meta:8,command:8,cmd:8,control:1},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*"}}
for(t in n.PRINTABLE_KEYS[173]="-",n.FUNCTION_KEYS)e=n.FUNCTION_KEYS[t].toLowerCase(),n[e]=parseInt(t,10)
for(t in n.PRINTABLE_KEYS)e=n.PRINTABLE_KEYS[t].toLowerCase(),n[e]=parseInt(t,10)
return i.mixin(n,n.MODIFIER_KEYS),i.mixin(n,n.PRINTABLE_KEYS),i.mixin(n,n.FUNCTION_KEYS),n.enter=n.return,n.escape=n.esc,n.del=n.delete,function(){for(var e=["cmd","ctrl","alt","shift"],t=Math.pow(2,e.length);t--;)n.KEY_MODS[t]=e.filter((function(e){return t&n.KEY_MODS[e]})).join("-")+"-"}(),n.KEY_MODS[0]="",n.KEY_MODS[-1]="input-",n}()
i.mixin(t,o),t.default=t,t.keyCodeToString=function(e){var t=o[e]
return"string"!=typeof t&&(t=String.fromCharCode(e)),t.toLowerCase()}})),ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent"],(function(e,t,n){"use strict"
var i,o=e("./keys"),r=e("./useragent"),s=null,a=0
function l(){return null==i&&function(){i=!1
try{document.createComment("").addEventListener("test",(function(){}),{get passive(){i={passive:!1}}})}catch(e){}}(),i}function c(e,t,n){this.elem=e,this.type=t,this.callback=n}c.prototype.destroy=function(){u(this.elem,this.type,this.callback),this.elem=this.type=this.callback=void 0}
var h=t.addListener=function(e,t,n,i){e.addEventListener(t,n,l()),i&&i.$toDestroy.push(new c(e,t,n))},u=t.removeListener=function(e,t,n){e.removeEventListener(t,n,l())}
t.stopEvent=function(e){return t.stopPropagation(e),t.preventDefault(e),!1},t.stopPropagation=function(e){e.stopPropagation&&e.stopPropagation()},t.preventDefault=function(e){e.preventDefault&&e.preventDefault()},t.getButton=function(e){return"dblclick"==e.type?0:"contextmenu"==e.type||r.isMac&&e.ctrlKey&&!e.altKey&&!e.shiftKey?2:e.button},t.capture=function(e,t,n){var i=e&&e.ownerDocument||document
function o(e){t&&t(e),n&&n(e),u(i,"mousemove",t),u(i,"mouseup",o),u(i,"dragstart",o)}return h(i,"mousemove",t),h(i,"mouseup",o),h(i,"dragstart",o),o},t.addMouseWheelListener=function(e,t,n){h(e,"wheel",(function(e){var n=e.deltaX||0,i=e.deltaY||0
switch(e.deltaMode){case e.DOM_DELTA_PIXEL:e.wheelX=.15*n,e.wheelY=.15*i
break
case e.DOM_DELTA_LINE:e.wheelX=15*n,e.wheelY=15*i
break
case e.DOM_DELTA_PAGE:e.wheelX=150*n,e.wheelY=150*i}t(e)}),n)},t.addMultiMouseDownListener=function(e,n,i,o,s){var a,l,c,u=0,d={2:"dblclick",3:"tripleclick",4:"quadclick"}
function g(e){if(0!==t.getButton(e)?u=0:e.detail>1?++u>4&&(u=1):u=1,r.isIE){var s=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-l)>5
c&&!s||(u=1),c&&clearTimeout(c),c=setTimeout((function(){c=null}),n[u-1]||600),1==u&&(a=e.clientX,l=e.clientY)}if(e._clicks=u,i[o]("mousedown",e),u>4)u=0
else if(u>1)return i[o](d[u],e)}Array.isArray(e)||(e=[e]),e.forEach((function(e){h(e,"mousedown",g,s)}))}
var d=function(e){return 0|(e.ctrlKey?1:0)|(e.altKey?2:0)|(e.shiftKey?4:0)|(e.metaKey?8:0)}
function g(e,t,n){var i=d(t)
if(!r.isMac&&s){if(t.getModifierState&&(t.getModifierState("OS")||t.getModifierState("Win"))&&(i|=8),s.altGr){if(3==(3&i))return
s.altGr=0}if(18===n||17===n){var l="location"in t?t.location:t.keyLocation
17===n&&1===l?1==s[n]&&(a=t.timeStamp):18===n&&3===i&&2===l&&t.timeStamp-a<50&&(s.altGr=!0)}}if(n in o.MODIFIER_KEYS&&(n=-1),i||13!==n||3!==(l="location"in t?t.location:t.keyLocation)||(e(t,i,-n),!t.defaultPrevented)){if(r.isChromeOS&&8&i){if(e(t,i,n),t.defaultPrevented)return
i&=-9}return!!(i||n in o.FUNCTION_KEYS||n in o.PRINTABLE_KEYS)&&e(t,i,n)}}function p(){s=Object.create(null)}if(t.getModifierString=function(e){return o.KEY_MODS[d(e)]},t.addCommandKeyListener=function(e,n,i){if(r.isOldGecko||r.isOpera&&!("KeyboardEvent"in window)){var o=null
h(e,"keydown",(function(e){o=e.keyCode}),i),h(e,"keypress",(function(e){return g(n,e,o)}),i)}else{var a=null
h(e,"keydown",(function(e){s[e.keyCode]=(s[e.keyCode]||0)+1
var t=g(n,e,e.keyCode)
return a=e.defaultPrevented,t}),i),h(e,"keypress",(function(e){a&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&(t.stopEvent(e),a=null)}),i),h(e,"keyup",(function(e){s[e.keyCode]=null}),i),s||(p(),h(window,"focus",p))}},"object"==typeof window&&window.postMessage&&!r.isOldIE){var f=1
t.nextTick=function(e,n){n=n||window
var i="zero-timeout-message-"+f++,o=function(r){r.data==i&&(t.stopPropagation(r),u(n,"message",o),e())}
h(n,"message",o),n.postMessage(i,"*")}}t.$idleBlocked=!1,t.onIdle=function(e,n){return setTimeout((function n(){t.$idleBlocked?setTimeout(n,100):e()}),n)},t.$idleBlockId=null,t.blockIdle=function(e){t.$idleBlockId&&clearTimeout(t.$idleBlockId),t.$idleBlocked=!0,t.$idleBlockId=setTimeout((function(){t.$idleBlocked=!1}),e||100)},t.nextFrame="object"==typeof window&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame),t.nextFrame?t.nextFrame=t.nextFrame.bind(window):t.nextFrame=function(e){setTimeout(e,17)}})),ace.define("ace/clipboard",["require","exports","module"],(function(e,t,n){"use strict"
var i
n.exports={lineMode:!1,pasteCancelled:function(){return!!(i&&i>Date.now()-50)||(i=!1)},cancel:function(){i=Date.now()}}})),ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/config","ace/lib/useragent","ace/lib/dom","ace/lib/lang","ace/clipboard","ace/lib/keys"],(function(e,t,n){"use strict"
var i=e("../lib/event"),o=e("../config").nls,r=e("../lib/useragent"),s=e("../lib/dom"),a=e("../lib/lang"),l=e("../clipboard"),c=r.isChrome<18,h=r.isIE,u=r.isChrome>63,d=400,g=e("../lib/keys"),p=g.KEY_MODS,f=r.isIOS,m=f?/\s/:/\n/,v=r.isMobile
t.TextInput=function(e,t){var n=s.createElement("textarea")
n.className="ace_text-input",n.setAttribute("wrap","off"),n.setAttribute("autocorrect","off"),n.setAttribute("autocapitalize","off"),n.setAttribute("spellcheck",!1),n.style.opacity="0",e.insertBefore(n,e.firstChild)
var w=!1,y=!1,b=!1,$=!1,C=""
v||(n.style.fontSize="1px")
var S=!1,A=!1,x="",k=0,L=0,M=0
try{var R=document.activeElement===n}catch(e){}this.setAriaOptions=function(e){e.activeDescendant?(n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-autocomplete",e.inline?"both":"list"),n.setAttribute("aria-activedescendant",e.activeDescendant)):(n.setAttribute("aria-haspopup","false"),n.setAttribute("aria-autocomplete","both"),n.removeAttribute("aria-activedescendant")),e.role&&n.setAttribute("role",e.role)},this.setAriaLabel=function(){if(t.session&&t.renderer.enableKeyboardAccessibility){var e=t.session.selection.cursor.row
n.setAttribute("aria-roledescription",o("editor")),n.setAttribute("aria-label",o("Cursor at row $0",[e+1]))}else n.removeAttribute("aria-roledescription"),n.removeAttribute("aria-label")},this.setAriaOptions({role:"textbox"}),this.setAriaLabel(),i.addListener(n,"blur",(function(e){A||(t.onBlur(e),R=!1,v&&!f&&document.removeEventListener("selectionchange",E))}),t),i.addListener(n,"focus",(function(e){if(!A){if(R=!0,r.isEdge)try{if(!document.hasFocus())return}catch(e){}t.onFocus(e),r.isEdge?setTimeout(T):T(),v&&!f&&document.addEventListener("selectionchange",E)}}),t),this.$focusScroll=!1,this.focus=function(){if(this.setAriaLabel(),C||u||"browser"==this.$focusScroll)return n.focus({preventScroll:!0})
var e=n.style.top
n.style.position="fixed",n.style.top="0px"
try{var t=0!=n.getBoundingClientRect().top}catch(e){return}var i=[]
if(t)for(var o=n.parentElement;o&&1==o.nodeType;)i.push(o),o.setAttribute("ace_nocontext",!0),o=!o.parentElement&&o.getRootNode?o.getRootNode().host:o.parentElement
n.focus({preventScroll:!0}),t&&i.forEach((function(e){e.removeAttribute("ace_nocontext")})),setTimeout((function(){n.style.position="","0px"==n.style.top&&(n.style.top=e)}),0)},this.blur=function(){n.blur()},this.isFocused=function(){return R},t.on("beforeEndOperation",(function(){var e=t.curOp,i=e&&e.command&&e.command.name
if("insertstring"!=i){var o=i&&(e.docChanged||e.selectionChanged)
b&&o&&(x=n.value="",z()),T()}}))
var T=f?function(e){if(R&&(!w||e)&&!$){e||(e="")
var i="\n ab"+e+"cde fg\n"
i!=n.value&&(n.value=x=i)
var o=4+(e.length||(t.selection.isEmpty()?0:1))
4==k&&L==o||n.setSelectionRange(4,o),k=4,L=o}}:function(){if(!b&&!$&&(R||I)){b=!0
var e=0,i=0,o=""
if(t.session){var r=t.selection,s=r.getRange(),a=r.cursor.row
if(e=s.start.column,i=s.end.column,o=t.session.getLine(a),s.start.row!=a){var l=t.session.getLine(a-1)
e=s.start.row<a-1?0:e,i+=l.length+1,o=l+"\n"+o}else if(s.end.row!=a){var c=t.session.getLine(a+1)
i=s.end.row>a+1?c.length:i,i+=o.length+1,o=o+"\n"+c}else v&&a>0&&(o="\n"+o,i+=1,e+=1)
o.length>d&&(e<d&&i<d?o=o.slice(0,d):(o="\n",e==i?e=i=0:(e=0,i=1)))}var h=o+"\n\n"
if(h!=x&&(n.value=x=h,k=L=h.length),I&&(k=n.selectionStart,L=n.selectionEnd),L!=i||k!=e||n.selectionEnd!=L)try{n.setSelectionRange(e,i),k=e,L=i}catch(e){}b=!1}}
function E(e){if(n&&n.parentNode||document.removeEventListener("selectionchange",E),!b&&n.selectionStart===n.selectionEnd){var i=n.selectionStart-k,o=L-k
i>0?i=Math.max(i-o,1):0===i&&o&&(i=-1)
for(var r=Math.abs(i),s=i>0?g.right:g.left,a=0;a<r;a++)t.onCommandKey({},0,s)}}this.resetSelection=T,R&&t.onFocus()
var _=null
this.setInputHandler=function(e){_=e},this.getInputHandler=function(){return _}
var I=!1,O=function(e,i){if(I&&(I=!1),y)return T(),e&&t.onPaste(e),y=!1,""
for(var o=n.selectionStart,s=n.selectionEnd,a=k,l=x.length-L,c=e,h=e.length-o,u=e.length-s,d=0;a>0&&x[d]==e[d];)d++,a--
for(c=c.slice(d),d=1;l>0&&x.length-d>k-1&&x[x.length-d]==e[e.length-d];)d++,l--
h-=d-1,u-=d-1
var g=c.length-d+1
if(g<0&&(a=-g,g=0),c=c.slice(0,g),!(i||c||h||a||l||u))return""
$=!0
var p=!1
return r.isAndroid&&". "==c&&(c="  ",p=!0),c&&!a&&!l&&!h&&!u||S?t.onTextInput(c):t.onTextInput(c,{extendLeft:a,extendRight:l,restoreStart:h,restoreEnd:u}),$=!1,x=e,k=o,L=s,M=u,p?"\n":c},D=function(e){if(b)return P()
if(e&&e.inputType){if("historyUndo"==e.inputType)return t.execCommand("undo")
if("historyRedo"==e.inputType)return t.execCommand("redo")}var i=n.value,o=O(i,!0);(i.length>500||m.test(o)||v&&k<1&&k==L)&&T()},F=function(e,t,n){var i=e.clipboardData||window.clipboardData
if(i&&!c){var o=h||n?"Text":"text/plain"
try{return t?!1!==i.setData(o,t):i.getData(o)}catch(e){if(!n)return F(e,t,!0)}}},W=function(e,o){var r=t.getCopyText()
if(!r)return i.preventDefault(e)
F(e,r)?(f&&(T(r),w=r,setTimeout((function(){w=!1}),10)),o?t.onCut():t.onCopy(),i.preventDefault(e)):(w=!0,n.value=r,n.select(),setTimeout((function(){w=!1,T(),o?t.onCut():t.onCopy()})))},N=function(e){W(e,!0)},H=function(e){W(e,!1)},B=function(e){var o=F(e)
l.pasteCancelled()||("string"==typeof o?(o&&t.onPaste(o,e),r.isIE&&setTimeout(T),i.preventDefault(e)):(n.value="",y=!0))}
i.addCommandKeyListener(n,t.onCommandKey.bind(t),t),i.addListener(n,"select",(function(e){b||(w?w=!1:function(e){return 0===e.selectionStart&&e.selectionEnd>=x.length&&e.value===x&&x&&e.selectionEnd!==L}(n)?(t.selectAll(),T()):v&&n.selectionStart!=k&&T())}),t),i.addListener(n,"input",D,t),i.addListener(n,"cut",N,t),i.addListener(n,"copy",H,t),i.addListener(n,"paste",B,t),"oncut"in n&&"oncopy"in n&&"onpaste"in n||i.addListener(e,"keydown",(function(e){if((!r.isMac||e.metaKey)&&e.ctrlKey)switch(e.keyCode){case 67:H(e)
break
case 86:B(e)
break
case 88:N(e)}}),t)
var P=function(){if(b&&t.onCompositionUpdate&&!t.$readOnly){if(S)return V()
if(b.useTextareaForIME)t.onCompositionUpdate(n.value)
else{var e=n.value
O(e),b.markerRange&&(b.context&&(b.markerRange.start.column=b.selectionStart=b.context.compositionStartOffset),b.markerRange.end.column=b.markerRange.start.column+L-b.selectionStart+M)}}},z=function(e){t.onCompositionEnd&&!t.$readOnly&&(b=!1,t.onCompositionEnd(),t.off("mousedown",V),e&&D())}
function V(){A=!0,n.blur(),n.focus(),A=!1}var U,G=a.delayedCall(P,50).schedule.bind(null,null)
function j(){clearTimeout(U),U=setTimeout((function(){C&&(n.style.cssText=C,C=""),t.renderer.$isMousePressed=!1,t.renderer.$keepTextAreaAtCursor&&t.renderer.$moveTextAreaToCursor()}),0)}i.addListener(n,"compositionstart",(function(e){if(!b&&t.onCompositionStart&&!t.$readOnly&&(b={},!S)){e.data&&(b.useTextareaForIME=!1),setTimeout(P,0),t._signal("compositionStart"),t.on("mousedown",V)
var i=t.getSelectionRange()
i.end.row=i.start.row,i.end.column=i.start.column,b.markerRange=i,b.selectionStart=k,t.onCompositionStart(b),b.useTextareaForIME?(x=n.value="",k=0,L=0):(n.msGetInputContext&&(b.context=n.msGetInputContext()),n.getInputContext&&(b.context=n.getInputContext()))}}),t),i.addListener(n,"compositionupdate",P,t),i.addListener(n,"keyup",(function(e){27==e.keyCode&&n.value.length<n.selectionStart&&(b||(x=n.value),k=L=-1,T()),G()}),t),i.addListener(n,"keydown",G,t),i.addListener(n,"compositionend",z,t),this.getElement=function(){return n},this.setCommandMode=function(e){S=e,n.readOnly=!1},this.setReadOnly=function(e){S||(n.readOnly=e)},this.setCopyWithEmptySelection=function(e){},this.onContextMenu=function(e){I=!0,T(),t._emit("nativecontextmenu",{target:t,domEvent:e}),this.moveToMouse(e,!0)},this.moveToMouse=function(e,o){C||(C=n.style.cssText),n.style.cssText=(o?"z-index:100000;":"")+(r.isIE?"opacity:0.1;":"")+"text-indent: -"+(k+L)*t.renderer.characterWidth*.5+"px;"
var a=t.container.getBoundingClientRect(),l=s.computedStyle(t.container),c=a.top+(parseInt(l.borderTopWidth)||0),h=a.left+(parseInt(a.borderLeftWidth)||0),u=a.bottom-c-n.clientHeight-2,d=function(e){s.translate(n,e.clientX-h-2,Math.min(e.clientY-c-2,u))}
d(e),"mousedown"==e.type&&(t.renderer.$isMousePressed=!0,clearTimeout(U),r.isWin&&i.capture(t.container,d,j))},this.onContextMenuClose=j
var K=function(e){t.textInput.onContextMenu(e),j()}
i.addListener(n,"mouseup",K,t),i.addListener(n,"mousedown",(function(e){e.preventDefault(),j()}),t),i.addListener(t.renderer.scroller,"contextmenu",K,t),i.addListener(n,"contextmenu",K,t),f&&function(e,t,n){var i=null,o=!1
n.addEventListener("keydown",(function(e){i&&clearTimeout(i),o=!0}),!0),n.addEventListener("keyup",(function(e){i=setTimeout((function(){o=!1}),100)}),!0)
var r=function(e){if(document.activeElement===n&&!(o||b||t.$mouseHandler.isMousePressed||w)){var i=n.selectionStart,r=n.selectionEnd,s=null,a=0
if(0==i?s=g.up:1==i?s=g.home:r>L&&"\n"==x[r]?s=g.end:i<k&&" "==x[i-1]?(s=g.left,a=p.option):i<k||i==k&&L!=k&&i==r?s=g.left:r>L&&x.slice(0,r).split("\n").length>2?s=g.down:r>L&&" "==x[r-1]?(s=g.right,a=p.option):(r>L||r==L&&L!=k&&i==r)&&(s=g.right),i!==r&&(a|=p.shift),s){if(!t.onCommandKey({},a,s)&&t.commands){s=g.keyCodeToString(s)
var l=t.commands.findKeyCommand(a,s)
l&&t.execCommand(l)}k=i,L=r,T("")}}}
document.addEventListener("selectionchange",r),t.on("destroy",(function(){document.removeEventListener("selectionchange",r)}))}(0,t,n),this.destroy=function(){n.parentElement&&n.parentElement.removeChild(n)}},t.$setUserAgentForTests=function(e,t){v=e,f=t}})),ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/useragent"],(function(e,t,n){"use strict"
var i=e("../lib/useragent"),o=function(){function e(e){e.$clickSelection=null
var t=e.editor
t.setDefaultHandler("mousedown",this.onMouseDown.bind(e)),t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e)),t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e)),t.setDefaultHandler("quadclick",this.onQuadClick.bind(e)),t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e)),["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"].forEach((function(t){e[t]=this[t]}),this),e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange"),e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}return e.prototype.onMouseDown=function(e){var t=e.inSelection(),n=e.getDocumentPosition()
this.mousedownEvent=e
var o=this.editor,r=e.getButton()
return 0!==r?((o.getSelectionRange().isEmpty()||1==r)&&o.selection.moveToPosition(n),void(2==r&&(o.textInput.onContextMenu(e.domEvent),i.isMozilla||e.preventDefault()))):(this.mousedownEvent.time=Date.now(),!t||o.isFocused()||(o.focus(),!this.$focusTimeout||this.$clickSelection||o.inMultiSelectMode)?(this.captureMouse(e),this.startSelect(n,e.domEvent._clicks>1),e.preventDefault()):(this.setState("focusWait"),void this.captureMouse(e)))},e.prototype.startSelect=function(e,t){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y)
var n=this.editor
this.mousedownEvent&&(this.mousedownEvent.getShiftKey()?n.selection.selectToPosition(e):t||n.selection.moveToPosition(e),t||this.select(),n.setStyle("ace_selecting"),this.setState("select"))},e.prototype.select=function(){var e,t=this.editor,n=t.renderer.screenToTextCoordinates(this.x,this.y)
if(this.$clickSelection){var i=this.$clickSelection.comparePoint(n)
if(-1==i)e=this.$clickSelection.end
else if(1==i)e=this.$clickSelection.start
else{var o=r(this.$clickSelection,n)
n=o.cursor,e=o.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(n),t.renderer.scrollCursorIntoView()},e.prototype.extendSelectionBy=function(e){var t,n=this.editor,i=n.renderer.screenToTextCoordinates(this.x,this.y),o=n.selection[e](i.row,i.column)
if(this.$clickSelection){var s=this.$clickSelection.comparePoint(o.start),a=this.$clickSelection.comparePoint(o.end)
if(-1==s&&a<=0)t=this.$clickSelection.end,o.end.row==i.row&&o.end.column==i.column||(i=o.start)
else if(1==a&&s>=0)t=this.$clickSelection.start,o.start.row==i.row&&o.start.column==i.column||(i=o.end)
else if(-1==s&&1==a)i=o.end,t=o.start
else{var l=r(this.$clickSelection,i)
i=l.cursor,t=l.anchor}n.selection.setSelectionAnchor(t.row,t.column)}n.selection.selectToPosition(i),n.renderer.scrollCursorIntoView()},e.prototype.selectByLinesEnd=function(){this.$clickSelection=null,this.editor.unsetStyle("ace_selecting")},e.prototype.focusWait=function(){var e,t,n,i,o=(e=this.mousedownEvent.x,t=this.mousedownEvent.y,n=this.x,i=this.y,Math.sqrt(Math.pow(n-e,2)+Math.pow(i-t,2))),r=Date.now();(o>0||r-this.mousedownEvent.time>this.$focusTimeout)&&this.startSelect(this.mousedownEvent.getDocumentPosition())},e.prototype.onDoubleClick=function(e){var t=e.getDocumentPosition(),n=this.editor,i=n.session.getBracketRange(t)
i?(i.isEmpty()&&(i.start.column--,i.end.column++),this.setState("select")):(i=n.selection.getWordRange(t.row,t.column),this.setState("selectByWords")),this.$clickSelection=i,this.select()},e.prototype.onTripleClick=function(e){var t=e.getDocumentPosition(),n=this.editor
this.setState("selectByLines")
var i=n.getSelectionRange()
i.isMultiLine()&&i.contains(t.row,t.column)?(this.$clickSelection=n.selection.getLineRange(i.start.row),this.$clickSelection.end=n.selection.getLineRange(i.end.row).end):this.$clickSelection=n.selection.getLineRange(t.row),this.select()},e.prototype.onQuadClick=function(e){var t=this.editor
t.selectAll(),this.$clickSelection=t.getSelectionRange(),this.setState("selectAll")},e.prototype.onMouseWheel=function(e){if(!e.getAccelKey()){e.getShiftKey()&&e.wheelY&&!e.wheelX&&(e.wheelX=e.wheelY,e.wheelY=0)
var t=this.editor
this.$lastScroll||(this.$lastScroll={t:0,vx:0,vy:0,allowed:0})
var n=this.$lastScroll,i=e.domEvent.timeStamp,o=i-n.t,r=o?e.wheelX/o:n.vx,s=o?e.wheelY/o:n.vy
o<550&&(r=(r+n.vx)/2,s=(s+n.vy)/2)
var a=Math.abs(r/s),l=!1
return a>=1&&t.renderer.isScrollableBy(e.wheelX*e.speed,0)&&(l=!0),a<=1&&t.renderer.isScrollableBy(0,e.wheelY*e.speed)&&(l=!0),l?n.allowed=i:i-n.allowed<550&&(Math.abs(r)<=1.5*Math.abs(n.vx)&&Math.abs(s)<=1.5*Math.abs(n.vy)?(l=!0,n.allowed=i):n.allowed=0),n.t=i,n.vx=r,n.vy=s,l?(t.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed),e.stop()):void 0}},e}()
function r(e,t){if(e.start.row==e.end.row)var n=2*t.column-e.start.column-e.end.column
else n=e.start.row!=e.end.row-1||e.start.column||e.end.column?2*t.row-e.start.row-e.end.row:t.column-4
return n<0?{cursor:e.start,anchor:e.end}:{cursor:e.end,anchor:e.start}}o.prototype.selectEnd=o.prototype.selectByLinesEnd,o.prototype.selectAllEnd=o.prototype.selectByLinesEnd,o.prototype.selectByWordsEnd=o.prototype.selectByLinesEnd,t.DefaultHandlers=o})),ace.define("ace/tooltip",["require","exports","module","ace/lib/dom","ace/range"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},s=e("./lib/dom"),a=e("./range").Range,l="ace_tooltip",c=function(){function e(e){this.isOpen=!1,this.$element=null,this.$parentNode=e}return e.prototype.$init=function(){return this.$element=s.createElement("div"),this.$element.className=l,this.$element.style.display="none",this.$parentNode.appendChild(this.$element),this.$element},e.prototype.getElement=function(){return this.$element||this.$init()},e.prototype.setText=function(e){this.getElement().textContent=e},e.prototype.setHtml=function(e){this.getElement().innerHTML=e},e.prototype.setPosition=function(e,t){this.getElement().style.left=e+"px",this.getElement().style.top=t+"px"},e.prototype.setClassName=function(e){s.addCssClass(this.getElement(),e)},e.prototype.setTheme=function(e){this.$element.className=l+" "+(e.isDark?"ace_dark ":"")+(e.cssClass||"")},e.prototype.show=function(e,t,n){null!=e&&this.setText(e),null!=t&&null!=n&&this.setPosition(t,n),this.isOpen||(this.getElement().style.display="block",this.isOpen=!0)},e.prototype.hide=function(){this.isOpen&&(this.getElement().style.display="none",this.getElement().className=l,this.isOpen=!1)},e.prototype.getHeight=function(){return this.getElement().offsetHeight},e.prototype.getWidth=function(){return this.getElement().offsetWidth},e.prototype.destroy=function(){this.isOpen=!1,this.$element&&this.$element.parentNode&&this.$element.parentNode.removeChild(this.$element)},e}(),h=new(function(){function e(){this.popups=[]}return e.prototype.addPopup=function(e){this.popups.push(e),this.updatePopups()},e.prototype.removePopup=function(e){var t=this.popups.indexOf(e);-1!==t&&(this.popups.splice(t,1),this.updatePopups())},e.prototype.updatePopups=function(){var e,t,n,i
this.popups.sort((function(e,t){return t.priority-e.priority}))
var o=[]
try{for(var s=r(this.popups),a=s.next();!a.done;a=s.next()){var l=a.value,c=!0
try{for(var h=(n=void 0,r(o)),u=h.next();!u.done;u=h.next()){var d=u.value
if(this.doPopupsOverlap(d,l)){c=!1
break}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}c?o.push(l):l.hide()}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}},e.prototype.doPopupsOverlap=function(e,t){var n=e.getElement().getBoundingClientRect(),i=t.getElement().getBoundingClientRect()
return n.left<i.right&&n.right>i.left&&n.top<i.bottom&&n.bottom>i.top},e}())
t.popupManager=h,t.Tooltip=c
var u=function(e){function t(t){void 0===t&&(t=document.body)
var n=e.call(this,t)||this
n.timeout=void 0,n.lastT=0,n.idleTime=350,n.lastEvent=void 0,n.onMouseOut=n.onMouseOut.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.waitForHover=n.waitForHover.bind(n),n.hide=n.hide.bind(n)
var i=n.getElement()
return i.style.whiteSpace="pre-wrap",i.style.pointerEvents="auto",i.addEventListener("mouseout",n.onMouseOut),i.tabIndex=-1,i.addEventListener("blur",function(){i.contains(document.activeElement)||this.hide()}.bind(n)),n}return o(t,e),t.prototype.addToEditor=function(e){e.on("mousemove",this.onMouseMove),e.on("mousedown",this.hide),e.renderer.getMouseEventTarget().addEventListener("mouseout",this.onMouseOut,!0)},t.prototype.removeFromEditor=function(e){e.off("mousemove",this.onMouseMove),e.off("mousedown",this.hide),e.renderer.getMouseEventTarget().removeEventListener("mouseout",this.onMouseOut,!0),this.timeout&&(clearTimeout(this.timeout),this.timeout=null)},t.prototype.onMouseMove=function(e,t){this.lastEvent=e,this.lastT=Date.now()
var n=t.$mouseHandler.isMousePressed
if(this.isOpen){var i=this.lastEvent&&this.lastEvent.getDocumentPosition()
this.range&&this.range.contains(i.row,i.column)&&!n&&!this.isOutsideOfText(this.lastEvent)||this.hide()}this.timeout||n||(this.lastEvent=e,this.timeout=setTimeout(this.waitForHover,this.idleTime))},t.prototype.waitForHover=function(){this.timeout&&clearTimeout(this.timeout)
var e=Date.now()-this.lastT
this.idleTime-e>10?this.timeout=setTimeout(this.waitForHover,this.idleTime-e):(this.timeout=null,this.lastEvent&&!this.isOutsideOfText(this.lastEvent)&&this.$gatherData(this.lastEvent,this.lastEvent.editor))},t.prototype.isOutsideOfText=function(e){var t=e.editor,n=e.getDocumentPosition(),i=t.session.getLine(n.row)
if(n.column==i.length){var o=t.renderer.pixelToScreenCoordinates(e.clientX,e.clientY),r=t.session.documentToScreenPosition(n.row,n.column)
if(r.column!=o.column||r.row!=o.row)return!0}return!1},t.prototype.setDataProvider=function(e){this.$gatherData=e},t.prototype.showForRange=function(e,t,n,i){if(!(i&&i!=this.lastEvent||this.isOpen&&document.activeElement==this.getElement())){var o=e.renderer
this.isOpen||(h.addPopup(this),this.$registerCloseEvents(),this.setTheme(o.theme)),this.isOpen=!0,this.addMarker(t,e.session),this.range=a.fromPoints(t.start,t.end)
var r=this.getElement()
r.innerHTML="",r.appendChild(n),r.style.display="block"
var s=o.textToScreenCoordinates(t.start.row,t.start.column),l=e.getCursorPosition(),c=r.clientHeight,u=o.scroller.getBoundingClientRect(),d=!0
this.row>l.row?d=!0:this.row<l.row&&(d=!1),s.pageY-c+o.lineHeight<u.top?d=!0:s.pageY+c>u.bottom&&(d=!1),d?s.pageY+=o.lineHeight:s.pageY-=c,r.style.maxWidth=u.width-(s.pageX-u.left)+"px",this.setPosition(s.pageX,s.pageY)}},t.prototype.addMarker=function(e,t){this.marker&&this.$markerSession.removeMarker(this.marker),this.$markerSession=t,this.marker=t&&t.addMarker(e,"ace_highlight-marker","text")},t.prototype.hide=function(e){(e||document.activeElement!=this.getElement())&&(e&&e.target&&("keydown"!=e.type||e.ctrlKey||e.metaKey)&&this.$element.contains(e.target)||(this.lastEvent=null,this.timeout&&clearTimeout(this.timeout),this.timeout=null,this.addMarker(null),this.isOpen&&(this.$removeCloseEvents(),this.getElement().style.display="none",this.isOpen=!1,h.removePopup(this))))},t.prototype.$registerCloseEvents=function(){window.addEventListener("keydown",this.hide,!0),window.addEventListener("mousewheel",this.hide,!0),window.addEventListener("mousedown",this.hide,!0)},t.prototype.$removeCloseEvents=function(){window.removeEventListener("keydown",this.hide,!0),window.removeEventListener("mousewheel",this.hide,!0),window.removeEventListener("mousedown",this.hide,!0)},t.prototype.onMouseOut=function(e){this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.lastEvent=null,this.isOpen&&e.relatedTarget&&e.relatedTarget!=this.getElement()&&(e&&e.currentTarget.contains(e.relatedTarget)||e.relatedTarget.classList.contains("ace_content")||this.hide())},t}(c)
t.HoverTooltip=u})),ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/tooltip","ace/config"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},s=e("../lib/dom"),a=e("../lib/event"),l=e("../tooltip").Tooltip,c=e("../config").nls
t.GutterHandler=function(e){var t,n,i=e.editor,o=i.renderer.$gutterLayer,r=new h(i)
function l(){t&&(t=clearTimeout(t)),r.isOpen&&(r.hideTooltip(),i.off("mousewheel",l))}function c(e){r.setPosition(e.x,e.y)}e.editor.setDefaultHandler("guttermousedown",(function(t){if(i.isFocused()&&0==t.getButton()&&"foldWidgets"!=o.getRegion(t)){var n=t.getDocumentPosition().row,r=i.session.selection
if(t.getShiftKey())r.selectTo(n,0)
else{if(2==t.domEvent.detail)return i.selectAll(),t.preventDefault()
e.$clickSelection=i.selection.getLineRange(n)}return e.setState("selectByLines"),e.captureMouse(t),t.preventDefault()}})),e.editor.setDefaultHandler("guttermousemove",(function(a){var h=a.domEvent.target||a.domEvent.srcElement
if(s.hasCssClass(h,"ace_fold-widget"))return l()
r.isOpen&&e.$tooltipFollowsMouse&&c(a),n=a,t||(t=setTimeout((function(){t=null,n&&!e.isMousePressed?function(){var t=n.getDocumentPosition().row
if(t==i.session.getLength()){var s=i.renderer.pixelToScreenCoordinates(0,n.y).row,a=n.$pos
if(s>i.session.documentToScreenRow(a.row,a.column))return l()}if(r.showTooltip(t),r.isOpen)if(i.on("mousewheel",l),e.$tooltipFollowsMouse)c(n)
else{var h=o.$lines.cells[t].element.querySelector("[class*=ace_icon]").getBoundingClientRect(),u=r.getElement().style
u.left=h.right+"px",u.top=h.bottom+"px"}}():l()}),50))})),a.addListener(i.renderer.$gutter,"mouseout",(function(e){n=null,r.isOpen&&!t&&(t=setTimeout((function(){t=null,l()}),50))}),i),i.on("changeSession",l),i.on("input",l)}
var h=function(e){function t(t){var n=e.call(this,t.container)||this
return n.editor=t,n}return o(t,e),t.prototype.setPosition=function(e,t){var n=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,o=this.getWidth(),r=this.getHeight();(e+=15)+o>n&&(e-=e+o-n),(t+=15)+r>i&&(t-=20+r),l.prototype.setPosition.call(this,e,t)},Object.defineProperty(t,"annotationLabels",{get:function(){return{error:{singular:c("error"),plural:c("errors")},warning:{singular:c("warning"),plural:c("warnings")},info:{singular:c("information message"),plural:c("information messages")}}},enumerable:!1,configurable:!0}),t.prototype.showTooltip=function(e){var n,i=this.editor.renderer.$gutterLayer,o=i.$annotations[e]
n=o?{text:Array.from(o.text),type:Array.from(o.type)}:{text:[],type:[]}
var r=i.session.getFoldLine(e)
if(r&&i.$showFoldedAnnotations){for(var s,a={error:[],warning:[],info:[]},l=e+1;l<=r.end.row;l++)if(i.$annotations[l])for(var c=0;c<i.$annotations[l].text.length;c++){var h=i.$annotations[l].type[c]
a[h].push(i.$annotations[l].text[c]),"error"!==h?"warning"!==h||(s="warning_fold"):s="error_fold"}if("error_fold"===s||"warning_fold"===s){var u="".concat(t.annotationsToSummaryString(a)," in folded code.")
n.text.push(u),n.type.push(s)}}if(0===n.text.length)return this.hide()
var d={error:[],warning:[],info:[]},g=i.$useSvgGutterIcons?"ace_icon_svg":"ace_icon"
for(l=0;l<n.text.length;l++){var p="<span class='ace_".concat(n.type[l]," ").concat(g,"' aria-label='").concat(t.annotationLabels[n.type[l].replace("_fold","")].singular,"' role=img> </span> ").concat(n.text[l])
d[n.type[l].replace("_fold","")].push(p)}var f=[].concat(d.error,d.warning,d.info).join("<br>")
this.setHtml(f),this.$element.setAttribute("aria-live","polite"),this.isOpen||(this.setTheme(this.editor.renderer.theme),this.setClassName("ace_gutter-tooltip")),this.show(),this.editor._signal("showGutterTooltip",this)},t.prototype.hideTooltip=function(){this.$element.removeAttribute("aria-live"),this.hide(),this.editor._signal("hideGutterTooltip",this)},t.annotationsToSummaryString=function(e){var n,i,o=[]
try{for(var s=r(["error","warning","info"]),a=s.next();!a.done;a=s.next()){var l=a.value
if(e[l].length){var c=1===e[l].length?t.annotationLabels[l].singular:t.annotationLabels[l].plural
o.push("".concat(e[l].length," ").concat(c))}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return o.join(", ")},t}(l)
t.GutterTooltip=h})),ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],(function(e,t,n){"use strict"
var i=e("../lib/event"),o=e("../lib/useragent"),r=function(){function e(e,t){this.domEvent=e,this.editor=t,this.x=this.clientX=e.clientX,this.y=this.clientY=e.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1}return e.prototype.stopPropagation=function(){i.stopPropagation(this.domEvent),this.propagationStopped=!0},e.prototype.preventDefault=function(){i.preventDefault(this.domEvent),this.defaultPrevented=!0},e.prototype.stop=function(){this.stopPropagation(),this.preventDefault()},e.prototype.getDocumentPosition=function(){return this.$pos||(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY)),this.$pos},e.prototype.inSelection=function(){if(null!==this.$inSelection)return this.$inSelection
var e=this.editor.getSelectionRange()
if(e.isEmpty())this.$inSelection=!1
else{var t=this.getDocumentPosition()
this.$inSelection=e.contains(t.row,t.column)}return this.$inSelection},e.prototype.getButton=function(){return i.getButton(this.domEvent)},e.prototype.getShiftKey=function(){return this.domEvent.shiftKey},e.prototype.getAccelKey=function(){return o.isMac?this.domEvent.metaKey:this.domEvent.ctrlKey},e}()
t.MouseEvent=r})),ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],(function(e,t,n){"use strict"
var i=e("../lib/dom"),o=e("../lib/event"),r=e("../lib/useragent")
function s(e){var t=e.editor,n=i.createElement("div")
n.style.cssText="top:-100px;position:absolute;z-index:2147483647;opacity:0.5",n.textContent=" ",["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"].forEach((function(t){e[t]=this[t]}),this),t.on("mousedown",this.onMouseDown.bind(e))
var s,l,c,h,u,d,g,p,f,m,v,w=t.container,y=0
function b(){var e=d;(function(e,n){var i=Date.now(),o=!n||e.row!=n.row,r=!n||e.column!=n.column
!m||o||r?(t.moveCursorToPosition(e),m=i,v={x:l,y:c}):a(v.x,v.y,l,c)>5?m=null:i-m>=200&&(t.renderer.scrollCursorIntoView(),m=null)})(d=t.renderer.screenToTextCoordinates(l,c),e),function(e,n){var i=Date.now(),o=t.renderer.layerConfig.lineHeight,r=t.renderer.layerConfig.characterWidth,s=t.renderer.scroller.getBoundingClientRect(),a={x:{left:l-s.left,right:s.right-l},y:{top:c-s.top,bottom:s.bottom-c}},h=Math.min(a.x.left,a.x.right),u=Math.min(a.y.top,a.y.bottom),d={row:e.row,column:e.column}
h/r<=2&&(d.column+=a.x.left<a.x.right?-3:2),u/o<=1&&(d.row+=a.y.top<a.y.bottom?-1:1)
var g=e.row!=d.row,p=e.column!=d.column,m=!n||e.row!=n.row
g||p&&!m?f?i-f>=200&&t.renderer.scrollCursorIntoView(d):f=i:f=null}(d,e)}function $(){u=t.selection.toOrientedRange(),s=t.session.addMarker(u,"ace_selection",t.getSelectionStyle()),t.clearSelection(),t.isFocused()&&t.renderer.$cursorLayer.setBlinking(!1),clearInterval(h),b(),h=setInterval(b,20),y=0,o.addListener(document,"mousemove",A)}function C(){clearInterval(h),t.session.removeMarker(s),s=null,t.selection.fromOrientedRange(u),t.isFocused()&&!p&&t.$resetCursorStyle(),u=null,d=null,y=0,f=null,m=null,o.removeListener(document,"mousemove",A)}this.onDragStart=function(e){if(this.cancelDrag||!w.draggable){var i=this
return setTimeout((function(){i.startSelect(),i.captureMouse(e)}),0),e.preventDefault()}u=t.getSelectionRange()
var o=e.dataTransfer
o.effectAllowed=t.getReadOnly()?"copy":"copyMove",t.container.appendChild(n),o.setDragImage&&o.setDragImage(n,0,0),setTimeout((function(){t.container.removeChild(n)})),o.clearData(),o.setData("Text",t.session.getTextRange()),p=!0,this.setState("drag")},this.onDragEnd=function(e){if(w.draggable=!1,p=!1,this.setState(null),!t.getReadOnly()){var n=e.dataTransfer.dropEffect
g||"move"!=n||t.session.remove(t.getSelectionRange()),t.$resetCursorStyle()}this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle("")},this.onDragEnter=function(e){if(!t.getReadOnly()&&x(e.dataTransfer))return l=e.clientX,c=e.clientY,s||$(),y++,e.dataTransfer.dropEffect=g=k(e),o.preventDefault(e)},this.onDragOver=function(e){if(!t.getReadOnly()&&x(e.dataTransfer))return l=e.clientX,c=e.clientY,s||($(),y++),null!==S&&(S=null),e.dataTransfer.dropEffect=g=k(e),o.preventDefault(e)},this.onDragLeave=function(e){if(--y<=0&&s)return C(),g=null,o.preventDefault(e)},this.onDrop=function(e){if(d){var n=e.dataTransfer
if(p)switch(g){case"move":u=u.contains(d.row,d.column)?{start:d,end:d}:t.moveText(u,d)
break
case"copy":u=t.moveText(u,d,!0)}else{var i=n.getData("Text")
u={start:d,end:t.session.insert(d,i)},t.focus(),g=null}return C(),o.preventDefault(e)}},o.addListener(w,"dragstart",this.onDragStart.bind(e),t),o.addListener(w,"dragend",this.onDragEnd.bind(e),t),o.addListener(w,"dragenter",this.onDragEnter.bind(e),t),o.addListener(w,"dragover",this.onDragOver.bind(e),t),o.addListener(w,"dragleave",this.onDragLeave.bind(e),t),o.addListener(w,"drop",this.onDrop.bind(e),t)
var S=null
function A(){null==S&&(S=setTimeout((function(){null!=S&&s&&C()}),20))}function x(e){var t=e.types
return!t||Array.prototype.some.call(t,(function(e){return"text/plain"==e||"Text"==e}))}function k(e){var t=["copy","copymove","all","uninitialized"],n=r.isMac?e.altKey:e.ctrlKey,i="uninitialized"
try{i=e.dataTransfer.effectAllowed.toLowerCase()}catch(e){}var o="none"
return n&&t.indexOf(i)>=0?o="copy":["move","copymove","linkmove","all","uninitialized"].indexOf(i)>=0?o="move":t.indexOf(i)>=0&&(o="copy"),o}}function a(e,t,n,i){return Math.sqrt(Math.pow(n-e,2)+Math.pow(i-t,2))}(function(){this.dragWait=function(){Date.now()-this.mousedownEvent.time>this.editor.getDragDelay()&&this.startDrag()},this.dragWaitEnd=function(){this.editor.container.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()),this.selectEnd()},this.dragReadyEnd=function(e){this.editor.$resetCursorStyle(),this.editor.unsetStyle("ace_dragging"),this.editor.renderer.setCursorStyle(""),this.dragWaitEnd()},this.startDrag=function(){this.cancelDrag=!1
var e=this.editor
e.container.draggable=!0,e.renderer.$cursorLayer.setBlinking(!1),e.setStyle("ace_dragging")
var t=r.isWin?"default":"move"
e.renderer.setCursorStyle(t),this.setState("dragReady")},this.onMouseDrag=function(e){var t=this.editor.container
r.isIE&&"dragReady"==this.state&&a(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)>3&&t.dragDrop(),"dragWait"===this.state&&a(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)>0&&(t.draggable=!1,this.startSelect(this.mousedownEvent.getDocumentPosition()))},this.onMouseDown=function(e){if(this.$dragEnabled){this.mousedownEvent=e
var t=this.editor,n=e.inSelection(),i=e.getButton()
if(1===(e.domEvent.detail||1)&&0===i&&n){if(e.editor.inMultiSelectMode&&(e.getAccelKey()||e.getShiftKey()))return
this.mousedownEvent.time=Date.now()
var o=e.domEvent.target||e.domEvent.srcElement
"unselectable"in o&&(o.unselectable="on"),t.getDragDelay()?(r.isWebKit&&(this.cancelDrag=!0,t.container.draggable=!0),this.setState("dragWait")):this.startDrag(),this.captureMouse(e,this.onMouseDrag.bind(this)),e.defaultPrevented=!0}}}}).call(s.prototype),t.DragdropHandler=s})),ace.define("ace/mouse/touch_handler",["require","exports","module","ace/mouse/mouse_event","ace/lib/event","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("./mouse_event").MouseEvent,o=e("../lib/event"),r=e("../lib/dom")
t.addTouchListeners=function(e,t){var n,s,a,l,c,h,u,d,g,p="scroll",f=0,m=0,v=0,w=0
function y(){var e,n,i
g||(e=window.navigator&&window.navigator.clipboard,n=!1,i=function(i){var o,s,a=i.target.getAttribute("action")
if("more"==a||!n)return n=!n,o=t.getCopyText(),s=t.session.getUndoManager().hasUndo(),void g.replaceChild(r.buildDom(n?["span",!o&&["span",{class:"ace_mobile-button",action:"selectall"},"Select All"],o&&["span",{class:"ace_mobile-button",action:"copy"},"Copy"],o&&["span",{class:"ace_mobile-button",action:"cut"},"Cut"],e&&["span",{class:"ace_mobile-button",action:"paste"},"Paste"],s&&["span",{class:"ace_mobile-button",action:"undo"},"Undo"],["span",{class:"ace_mobile-button",action:"find"},"Find"],["span",{class:"ace_mobile-button",action:"openCommandPallete"},"Palette"]]:["span"]),g.firstChild)
"paste"==a?e.readText().then((function(e){t.execCommand(a,e)})):a&&("cut"!=a&&"copy"!=a||(e?e.writeText(t.getCopyText()):document.execCommand("copy")),t.execCommand(a)),g.firstChild.style.display="none",n=!1,"openCommandPallete"!=a&&t.focus()},g=r.buildDom(["div",{class:"ace_mobile-menu",ontouchstart:function(e){p="menu",e.stopPropagation(),e.preventDefault(),t.textInput.focus()},ontouchend:function(e){e.stopPropagation(),e.preventDefault(),i(e)},onclick:i},["span"],["span",{class:"ace_mobile-button",action:"more"},"..."]],t.container))
var o=t.selection.cursor,s=t.renderer.textToScreenCoordinates(o.row,o.column),a=t.renderer.textToScreenCoordinates(0,0).pageX,l=t.renderer.scrollLeft,c=t.container.getBoundingClientRect()
g.style.top=s.pageY-c.top-3+"px",s.pageX-c.left<c.width-70?(g.style.left="",g.style.right="10px"):(g.style.right="",g.style.left=a+l-c.left+"px"),g.style.display="",g.firstChild.style.display="none",t.on("input",b)}function b(e){g&&(g.style.display="none"),t.off("input",b)}function $(){c=null,clearTimeout(c)
var e=t.selection.getRange(),n=e.contains(u.row,u.column)
!e.isEmpty()&&n||(t.selection.moveToPosition(u),t.selection.selectWord()),p="wait",y()}o.addListener(e,"contextmenu",(function(e){d&&t.textInput.getElement().focus()}),t),o.addListener(e,"touchstart",(function(e){var o=e.touches
if(c||o.length>1)return clearTimeout(c),c=null,a=-1,void(p="zoom")
d=t.$mouseHandler.isMousePressed=!0
var r=t.renderer.layerConfig.lineHeight,h=t.renderer.layerConfig.lineHeight,g=e.timeStamp
l=g
var y=o[0],b=y.clientX,C=y.clientY
Math.abs(n-b)+Math.abs(s-C)>r&&(a=-1),n=e.clientX=b,s=e.clientY=C,v=w=0
var S=new i(e,t)
if(u=S.getDocumentPosition(),g-a<500&&1==o.length&&!f)m++,e.preventDefault(),e.button=0,function(){c=null,clearTimeout(c),t.selection.moveToPosition(u)
var e=m>=2?t.selection.getLineRange(u.row):t.session.getBracketRange(u)
e&&!e.isEmpty()?t.selection.setRange(e):t.selection.selectWord(),p="wait"}()
else{m=0
var A=t.selection.cursor,x=t.selection.isEmpty()?A:t.selection.anchor,k=t.renderer.$cursorLayer.getPixelPosition(A,!0),L=t.renderer.$cursorLayer.getPixelPosition(x,!0),M=t.renderer.scroller.getBoundingClientRect(),R=t.renderer.layerConfig.offset,T=t.renderer.scrollLeft,E=function(e,t){return(e/=h)*e+(t=t/r-.75)*t}
if(e.clientX<M.left)return void(p="zoom")
var _=E(e.clientX-M.left-k.left+T,e.clientY-M.top-k.top+R),I=E(e.clientX-M.left-L.left+T,e.clientY-M.top-L.top+R)
_<3.5&&I<3.5&&(p=_>I?"cursor":"anchor"),p=I<3.5?"anchor":_<3.5?"cursor":"scroll",c=setTimeout($,450)}a=g}),t),o.addListener(e,"touchend",(function(e){d=t.$mouseHandler.isMousePressed=!1,h&&clearInterval(h),"zoom"==p?(p="",f=0):c?(t.selection.moveToPosition(u),f=0,y()):"scroll"==p?(f+=60,h=setInterval((function(){f--<=0&&(clearInterval(h),h=null),Math.abs(v)<.01&&(v=0),Math.abs(w)<.01&&(w=0),f<20&&(v*=.9),f<20&&(w*=.9)
var e=t.session.getScrollTop()
t.renderer.scrollBy(10*v,10*w),e==t.session.getScrollTop()&&(f=0)}),10),b()):y(),clearTimeout(c),c=null}),t),o.addListener(e,"touchmove",(function(e){c&&(clearTimeout(c),c=null)
var o=e.touches
if(!(o.length>1||"zoom"==p)){var r=o[0],a=n-r.clientX,h=s-r.clientY
if("wait"==p){if(!(a*a+h*h>4))return e.preventDefault()
p="cursor"}n=r.clientX,s=r.clientY,e.clientX=r.clientX,e.clientY=r.clientY
var u=e.timeStamp,d=u-l
if(l=u,"scroll"==p){var g=new i(e,t)
g.speed=1,g.wheelX=a,g.wheelY=h,10*Math.abs(a)<Math.abs(h)&&(a=0),10*Math.abs(h)<Math.abs(a)&&(h=0),0!=d&&(v=a/d,w=h/d),t._emit("mousewheel",g),g.propagationStopped||(v=w=0)}else{var f=new i(e,t).getDocumentPosition()
"cursor"==p?t.selection.moveCursorToPosition(f):"anchor"==p&&t.selection.setSelectionAnchor(f.row,f.column),t.renderer.scrollCursorIntoView(f),e.preventDefault()}}}),t)}})),ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/mouse/touch_handler","ace/config"],(function(e,t,n){"use strict"
var i=e("../lib/event"),o=e("../lib/useragent"),r=e("./default_handlers").DefaultHandlers,s=e("./default_gutter_handler").GutterHandler,a=e("./mouse_event").MouseEvent,l=e("./dragdrop_handler").DragdropHandler,c=e("./touch_handler").addTouchListeners,h=e("../config"),u=function(){function e(e){var t=this
this.editor=e,new r(this),new s(this),new l(this)
var n=function(t){(!document.hasFocus||!document.hasFocus()||!e.isFocused()&&document.activeElement==(e.textInput&&e.textInput.getElement()))&&window.focus(),e.focus(),setTimeout((function(){e.isFocused()||e.focus()}))},a=e.renderer.getMouseEventTarget()
i.addListener(a,"click",this.onMouseEvent.bind(this,"click"),e),i.addListener(a,"mousemove",this.onMouseMove.bind(this,"mousemove"),e),i.addMultiMouseDownListener([a,e.renderer.scrollBarV&&e.renderer.scrollBarV.inner,e.renderer.scrollBarH&&e.renderer.scrollBarH.inner,e.textInput&&e.textInput.getElement()].filter(Boolean),[400,300,250],this,"onMouseEvent",e),i.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"),e),c(e.container,e)
var h=e.renderer.$gutter
i.addListener(h,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"),e),i.addListener(h,"click",this.onMouseEvent.bind(this,"gutterclick"),e),i.addListener(h,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"),e),i.addListener(h,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"),e),i.addListener(a,"mousedown",n,e),i.addListener(h,"mousedown",n,e),o.isIE&&e.renderer.scrollBarV&&(i.addListener(e.renderer.scrollBarV.element,"mousedown",n,e),i.addListener(e.renderer.scrollBarH.element,"mousedown",n,e)),e.on("mousemove",(function(n){if(!t.state&&!t.$dragDelay&&t.$dragEnabled){var i=e.renderer.screenToTextCoordinates(n.x,n.y),o=e.session.selection.getRange(),r=e.renderer
!o.isEmpty()&&o.insideStart(i.row,i.column)?r.setCursorStyle("default"):r.setCursorStyle("")}}),e)}return e.prototype.onMouseEvent=function(e,t){this.editor.session&&this.editor._emit(e,new a(t,this.editor))},e.prototype.onMouseMove=function(e,t){var n=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove
n&&n.length&&this.editor._emit(e,new a(t,this.editor))},e.prototype.onMouseWheel=function(e,t){var n=new a(t,this.editor)
n.speed=2*this.$scrollSpeed,n.wheelX=t.wheelX,n.wheelY=t.wheelY,this.editor._emit(e,n)},e.prototype.setState=function(e){this.state=e},e.prototype.captureMouse=function(e,t){this.x=e.x,this.y=e.y,this.isMousePressed=!0
var n=this.editor,r=this.editor.renderer
r.$isMousePressed=!0
var s=this,l=function(e){if(e){if(o.isWebKit&&!e.which&&s.releaseMouse)return s.releaseMouse()
s.x=e.clientX,s.y=e.clientY,t&&t(e),s.mouseEvent=new a(e,s.editor),s.$mouseMoved=!0}},c=function(e){n.off("beforeEndOperation",u),clearInterval(d),n.session&&h(),s[s.state+"End"]&&s[s.state+"End"](e),s.state="",s.isMousePressed=r.$isMousePressed=!1,r.$keepTextAreaAtCursor&&r.$moveTextAreaToCursor(),s.$onCaptureMouseMove=s.releaseMouse=null,e&&s.onMouseEvent("mouseup",e),n.endOperation()},h=function(){s[s.state]&&s[s.state](),s.$mouseMoved=!1}
if(o.isOldIE&&"dblclick"==e.domEvent.type)return setTimeout((function(){c(e)}))
var u=function(e){s.releaseMouse&&n.curOp.command.name&&n.curOp.selectionChanged&&(s[s.state+"End"]&&s[s.state+"End"](),s.state="",s.releaseMouse())}
n.on("beforeEndOperation",u),n.startOperation({command:{name:"mouse"}}),s.$onCaptureMouseMove=l,s.releaseMouse=i.capture(this.editor.container,l,c)
var d=setInterval(h,20)},e.prototype.cancelContextMenu=function(){var e=function(t){t&&t.domEvent&&"contextmenu"!=t.domEvent.type||(this.editor.off("nativecontextmenu",e),t&&t.domEvent&&i.stopEvent(t.domEvent))}.bind(this)
setTimeout(e,10),this.editor.on("nativecontextmenu",e)},e.prototype.destroy=function(){this.releaseMouse&&this.releaseMouse()},e}()
u.prototype.releaseMouse=null,h.defineOptions(u.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:o.isMac?150:0},dragEnabled:{initialValue:!0},focusTimeout:{initialValue:0},tooltipFollowsMouse:{initialValue:!0}}),t.MouseHandler=u})),ace.define("ace/mouse/fold_handler",["require","exports","module","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("../lib/dom")
t.FoldHandler=function(e){e.on("click",(function(t){var n=t.getDocumentPosition(),o=e.session,r=o.getFoldAt(n.row,n.column,1)
r&&(t.getAccelKey()?o.removeFold(r):o.expandFold(r),t.stop())
var s=t.domEvent&&t.domEvent.target
s&&i.hasCssClass(s,"ace_inline_button")&&i.hasCssClass(s,"ace_toggle_wrap")&&(o.setOption("wrap",!o.getUseWrapMode()),e.renderer.scrollCursorIntoView())})),e.on("gutterclick",(function(t){if("foldWidgets"==e.renderer.$gutterLayer.getRegion(t)){var n=t.getDocumentPosition().row,i=e.session
i.foldWidgets&&i.foldWidgets[n]&&e.session.onFoldWidgetClick(n,t),e.isFocused()||e.focus(),t.stop()}})),e.on("gutterdblclick",(function(t){if("foldWidgets"==e.renderer.$gutterLayer.getRegion(t)){var n=t.getDocumentPosition().row,i=e.session,o=i.getParentFoldRangeData(n,!0),r=o.range||o.firstRange
if(r){n=r.start.row
var s=i.getFoldAt(n,i.getLine(n).length,1)
s?i.removeFold(s):(i.addFold("...",r),e.renderer.scrollCursorIntoView({row:r.start.row,column:0}))}t.stop()}}))}})),ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],(function(e,t,n){"use strict"
var i=e("../lib/keys"),o=e("../lib/event"),r=function(){function e(e){this.$editor=e,this.$data={editor:e},this.$handlers=[],this.setDefaultHandler(e.commands)}return e.prototype.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=e,this.addKeyboardHandler(e,0)},e.prototype.setKeyboardHandler=function(e){var t=this.$handlers
if(t[t.length-1]!=e){for(;t[t.length-1]&&t[t.length-1]!=this.$defaultHandler;)this.removeKeyboardHandler(t[t.length-1])
this.addKeyboardHandler(e,1)}},e.prototype.addKeyboardHandler=function(e,t){if(e){"function"!=typeof e||e.handleKeyboard||(e.handleKeyboard=e)
var n=this.$handlers.indexOf(e);-1!=n&&this.$handlers.splice(n,1),null==t?this.$handlers.push(e):this.$handlers.splice(t,0,e),-1==n&&e.attach&&e.attach(this.$editor)}},e.prototype.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e)
return-1!=t&&(this.$handlers.splice(t,1),e.detach&&e.detach(this.$editor),!0)},e.prototype.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},e.prototype.getStatusText=function(){var e=this.$data,t=e.editor
return this.$handlers.map((function(n){return n.getStatusText&&n.getStatusText(t,e)||""})).filter(Boolean).join(" ")},e.prototype.$callKeyboardHandlers=function(e,t,n,i){for(var r,s=!1,a=this.$editor.commands,l=this.$handlers.length;l--&&!((r=this.$handlers[l].handleKeyboard(this.$data,e,t,n,i))&&r.command&&((s="null"==r.command||a.exec(r.command,this.$editor,r.args,i))&&i&&-1!=e&&1!=r.passEvent&&1!=r.command.passEvent&&o.stopEvent(i),s)););return s||-1!=e||(r={command:"insertstring"},s=a.exec("insertstring",this.$editor,t)),s&&this.$editor._signal&&this.$editor._signal("keyboardActivity",r),s},e.prototype.onCommandKey=function(e,t,n){var o=i.keyCodeToString(n)
return this.$callKeyboardHandlers(t,o,n,e)},e.prototype.onTextInput=function(e){return this.$callKeyboardHandlers(-1,e)},e}()
t.KeyBinding=r})),ace.define("ace/lib/bidiutil",["require","exports","module"],(function(e,t,n){"use strict"
var i=0,o=0,r=!1,s=!1,a=!1,l=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],c=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],h=11,u=18,d=[u,u,u,u,u,u,u,u,u,6,5,6,8,5,u,u,u,u,u,u,u,u,u,u,u,u,u,u,5,5,5,6,8,4,4,h,h,h,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,u,u,u,u,u,u,5,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,9,4,h,h,h,h,4,4,4,4,0,4,4,u,4,4,h,h,2,2,4,0,4,4,4,2,0,4,4,4,4,4],g=[8,8,8,8,8,8,8,8,8,8,8,u,u,u,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,h,h,h,h,h,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8]
function p(e,t,n){if(!(o<e))if(1!=e||1!=i||s)for(var r,a,l,c,h=n.length,u=0;u<h;){if(t[u]>=e){for(r=u+1;r<h&&t[r]>=e;)r++
for(a=u,l=r-1;a<l;a++,l--)c=n[a],n[a]=n[l],n[l]=c
u=r}u++}else n.reverse()}function f(e,t,n,o){var l,c,d,g,p=t[o]
switch(p){case 0:case 1:r=!1
case 4:case 3:return p
case 2:return r?3:2
case 7:return r=!0,1
case 8:return 4
case 9:return o<1||o+1>=t.length||2!=(l=n[o-1])&&3!=l||2!=(c=t[o+1])&&3!=c?4:(r&&(c=3),c==l?c:4)
case 10:return 2==(l=o>0?n[o-1]:5)&&o+1<t.length&&2==t[o+1]?2:4
case h:if(o>0&&2==n[o-1])return 2
if(r)return 4
for(g=o+1,d=t.length;g<d&&t[g]==h;)g++
return g<d&&2==t[g]?2:4
case 12:for(d=t.length,g=o+1;g<d&&12==t[g];)g++
if(g<d){var f=e[o],m=f>=1425&&f<=2303||64286==f
if(l=t[g],m&&(1==l||7==l))return 1}return o<1||5==(l=t[o-1])?4:n[o-1]
case 5:return r=!1,s=!0,i
case 6:return a=!0,4
case 13:case 14:case 16:case 17:case 15:r=!1
case u:return 4}}function m(e){var t=e.charCodeAt(0),n=t>>8
return 0==n?t>191?0:d[t]:5==n?/[\u0591-\u05f4]/.test(e)?1:0:6==n?/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)?12:/[\u0660-\u0669\u066b-\u066c]/.test(e)?3:1642==t?h:/[\u06f0-\u06f9]/.test(e)?2:7:32==n&&t<=8287?g[255&t]:254==n&&t>=65136?7:4}t.L=0,t.R=1,t.EN=2,t.ON_R=3,t.AN=4,t.R_H=5,t.B=6,t.RLE=7,t.DOT="·",t.doBidiReorder=function(e,n,h){if(e.length<2)return{}
var d=e.split(""),g=new Array(d.length),v=new Array(d.length),w=[]
i=h?1:0,function(e,t,n,h){var u=i?c:l,d=null,g=null,p=null,v=0,w=null,y=-1,b=null,$=null,C=[]
if(!h)for(b=0,h=[];b<n;b++)h[b]=m(e[b])
for(o=i,r=!1,s=!1,a=!1,$=0;$<n;$++){if(d=v,C[$]=g=f(e,h,C,$),w=240&(v=u[d][g]),v&=15,t[$]=p=u[v][5],w>0)if(16==w){for(b=y;b<$;b++)t[b]=1
y=-1}else y=-1
if(u[v][6])-1==y&&(y=$)
else if(y>-1){for(b=y;b<$;b++)t[b]=p
y=-1}5==h[$]&&(t[$]=0),o|=p}if(a)for(b=0;b<n;b++)if(6==h[b]){t[b]=i
for(var S=b-1;S>=0&&8==h[S];S--)t[S]=i}}(d,w,d.length,n)
for(var y=0;y<g.length;g[y]=y,y++);for(p(2,w,g),p(1,w,g),y=0;y<g.length-1;y++)3===n[y]?w[y]=t.AN:1===w[y]&&(n[y]>7&&n[y]<13||4===n[y]||n[y]===u)?w[y]=t.ON_R:y>0&&"ل"===d[y-1]&&/\u0622|\u0623|\u0625|\u0627/.test(d[y])&&(w[y-1]=w[y]=t.R_H,y++)
for(d[d.length-1]===t.DOT&&(w[d.length-1]=t.B),"‫"===d[0]&&(w[0]=t.RLE),y=0;y<g.length;y++)v[y]=w[g[y]]
return{logicalFromVisual:g,bidiLevels:v}},t.hasBidiCharacters=function(e,t){for(var n=!1,i=0;i<e.length;i++)t[i]=m(e.charAt(i)),n||1!=t[i]&&7!=t[i]&&3!=t[i]||(n=!0)
return n},t.getVisualFromLogicalIdx=function(e,t){for(var n=0;n<t.logicalFromVisual.length;n++)if(t.logicalFromVisual[n]==e)return n
return 0}})),ace.define("ace/bidihandler",["require","exports","module","ace/lib/bidiutil","ace/lib/lang"],(function(e,t,n){"use strict"
var i=e("./lib/bidiutil"),o=e("./lib/lang"),r=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,s=function(){function e(e){this.session=e,this.bidiMap={},this.currentRow=null,this.bidiUtil=i,this.charWidths=[],this.EOL="¬",this.showInvisibles=!0,this.isRtlDir=!1,this.$isRtl=!1,this.line="",this.wrapIndent=0,this.EOF="¶",this.RLE="‫",this.contentWidth=0,this.fontMetrics=null,this.rtlLineOffset=0,this.wrapOffset=0,this.isMoveLeftOperation=!1,this.seenBidi=r.test(e.getValue())}return e.prototype.isBidiRow=function(e,t,n){return!!this.seenBidi&&(e!==this.currentRow&&(this.currentRow=e,this.updateRowLine(t,n),this.updateBidiMap()),this.bidiMap.bidiLevels)},e.prototype.onChange=function(e){this.seenBidi?this.currentRow=null:"insert"==e.action&&r.test(e.lines.join("\n"))&&(this.seenBidi=!0,this.currentRow=null)},e.prototype.getDocumentRow=function(){var e=0,t=this.session.$screenRowCache
if(t.length){var n=this.session.$getRowCacheIndex(t,this.currentRow)
n>=0&&(e=this.session.$docRowCache[n])}return e},e.prototype.getSplitIndex=function(){var e=0,t=this.session.$screenRowCache
if(t.length)for(var n,i=this.session.$getRowCacheIndex(t,this.currentRow);this.currentRow-e>0&&(n=this.session.$getRowCacheIndex(t,this.currentRow-e-1))===i;)i=n,e++
else e=this.currentRow
return e},e.prototype.updateRowLine=function(e,t){void 0===e&&(e=this.getDocumentRow())
var n=e===this.session.getLength()-1?this.EOF:this.EOL
if(this.wrapIndent=0,this.line=this.session.getLine(e),this.isRtlDir=this.$isRtl||this.line.charAt(0)===this.RLE,this.session.$useWrapMode){var r=this.session.$wrapData[e]
r&&(void 0===t&&(t=this.getSplitIndex()),t>0&&r.length?(this.wrapIndent=r.indent,this.wrapOffset=this.wrapIndent*this.charWidths[i.L],this.line=t<r.length?this.line.substring(r[t-1],r[t]):this.line.substring(r[r.length-1])):this.line=this.line.substring(0,r[t]),t==r.length&&(this.line+=this.showInvisibles?n:i.DOT))}else this.line+=this.showInvisibles?n:i.DOT
var s,a=this.session,l=0
this.line=this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g,(function(e,t){return"\t"===e||a.isFullWidth(e.charCodeAt(0))?(s="\t"===e?a.getScreenTabSize(t+l):2,l+=s-1,o.stringRepeat(i.DOT,s)):e})),this.isRtlDir&&(this.fontMetrics.$main.textContent=this.line.charAt(this.line.length-1)==i.DOT?this.line.substr(0,this.line.length-1):this.line,this.rtlLineOffset=this.contentWidth-this.fontMetrics.$main.getBoundingClientRect().width)},e.prototype.updateBidiMap=function(){var e=[]
i.hasBidiCharacters(this.line,e)||this.isRtlDir?this.bidiMap=i.doBidiReorder(this.line,e,this.isRtlDir):this.bidiMap={}},e.prototype.markAsDirty=function(){this.currentRow=null},e.prototype.updateCharacterWidths=function(e){if(this.characterWidth!==e.$characterSize.width){this.fontMetrics=e
var t=this.characterWidth=e.$characterSize.width,n=e.$measureCharWidth("ה")
this.charWidths[i.L]=this.charWidths[i.EN]=this.charWidths[i.ON_R]=t,this.charWidths[i.R]=this.charWidths[i.AN]=n,this.charWidths[i.R_H]=.45*n,this.charWidths[i.B]=this.charWidths[i.RLE]=0,this.currentRow=null}},e.prototype.setShowInvisibles=function(e){this.showInvisibles=e,this.currentRow=null},e.prototype.setEolChar=function(e){this.EOL=e},e.prototype.setContentWidth=function(e){this.contentWidth=e},e.prototype.isRtlLine=function(e){return!!this.$isRtl||(null!=e?this.session.getLine(e).charAt(0)==this.RLE:this.isRtlDir)},e.prototype.setRtlDirection=function(e,t){for(var n=e.getCursorPosition(),i=e.selection.getSelectionAnchor().row;i<=n.row;i++)t||e.session.getLine(i).charAt(0)!==e.session.$bidiHandler.RLE?t&&e.session.getLine(i).charAt(0)!==e.session.$bidiHandler.RLE&&e.session.doc.insert({column:0,row:i},e.session.$bidiHandler.RLE):e.session.doc.removeInLine(i,0,1)},e.prototype.getPosLeft=function(e){e-=this.wrapIndent
var t=this.line.charAt(0)===this.RLE?1:0,n=e>t?this.session.getOverwrite()?e:e-1:t,o=i.getVisualFromLogicalIdx(n,this.bidiMap),r=this.bidiMap.bidiLevels,s=0
!this.session.getOverwrite()&&e<=t&&r[o]%2!=0&&o++
for(var a=0;a<o;a++)s+=this.charWidths[r[a]]
return!this.session.getOverwrite()&&e>t&&r[o]%2==0&&(s+=this.charWidths[r[o]]),this.wrapIndent&&(s+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset),this.isRtlDir&&(s+=this.rtlLineOffset),s},e.prototype.getSelections=function(e,t){var n,i=this.bidiMap,o=i.bidiLevels,r=[],s=0,a=Math.min(e,t)-this.wrapIndent,l=Math.max(e,t)-this.wrapIndent,c=!1,h=!1,u=0
this.wrapIndent&&(s+=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset)
for(var d,g=0;g<o.length;g++)d=i.logicalFromVisual[g],n=o[g],(c=d>=a&&d<l)&&!h?u=s:!c&&h&&r.push({left:u,width:s-u}),s+=this.charWidths[n],h=c
if(c&&g===o.length&&r.push({left:u,width:s-u}),this.isRtlDir)for(var p=0;p<r.length;p++)r[p].left+=this.rtlLineOffset
return r},e.prototype.offsetToCol=function(e){this.isRtlDir&&(e-=this.rtlLineOffset)
var t=0,n=(e=Math.max(e,0),0),i=0,o=this.bidiMap.bidiLevels,r=this.charWidths[o[i]]
for(this.wrapIndent&&(e-=this.isRtlDir?-1*this.wrapOffset:this.wrapOffset);e>n+r/2;){if(n+=r,i===o.length-1){r=0
break}r=this.charWidths[o[++i]]}return i>0&&o[i-1]%2!=0&&o[i]%2==0?(e<n&&i--,t=this.bidiMap.logicalFromVisual[i]):i>0&&o[i-1]%2==0&&o[i]%2!=0?t=1+(e>n?this.bidiMap.logicalFromVisual[i]:this.bidiMap.logicalFromVisual[i-1]):this.isRtlDir&&i===o.length-1&&0===r&&o[i-1]%2==0||!this.isRtlDir&&0===i&&o[i]%2!=0?t=1+this.bidiMap.logicalFromVisual[i]:(i>0&&o[i-1]%2!=0&&0!==r&&i--,t=this.bidiMap.logicalFromVisual[i]),0===t&&this.isRtlDir&&t++,t+this.wrapIndent},e}()
t.BidiHandler=s})),ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./lib/lang"),r=e("./lib/event_emitter").EventEmitter,s=e("./range").Range,a=function(e){this.session=e,this.doc=e.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1
var t=this
this.cursor.on("change",(function(e){t.$cursorChanged=!0,t.$silent||t._emit("changeCursor"),t.$isEmpty||t.$silent||t._emit("changeSelection"),t.$keepDesiredColumnOnChange||e.old.column==e.value.column||(t.$desiredColumn=null)})),this.anchor.on("change",(function(){t.$anchorChanged=!0,t.$isEmpty||t.$silent||t._emit("changeSelection")}))};(function(){i.implement(this,r),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return!this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setAnchor=function(e,t){this.$isEmpty=!1,this.anchor.setPosition(e,t)},this.setSelectionAnchor=this.setAnchor,this.getAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionAnchor=this.getAnchor,this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var e=this.anchor,t=this.lead
return e.row>t.row||e.row==t.row&&e.column>t.column},this.getRange=function(){var e=this.anchor,t=this.lead
return this.$isEmpty?s.fromPoints(t,t):this.isBackwards()?s.fromPoints(t,e):s.fromPoints(e,t)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE)},this.setRange=this.setSelectionRange=function(e,t){var n=t?e.end:e.start,i=t?e.start:e.end
this.$setSelection(n.row,n.column,i.row,i.column)},this.$setSelection=function(e,t,n,i){if(!this.$silent){var o=this.$isEmpty,r=this.inMultiSelectMode
this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(e,t),this.cursor.setPosition(n,i),this.$isEmpty=!s.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||o!=this.$isEmpty||r)&&this._emit("changeSelection")}},this.$moveSelection=function(e){var t=this.lead
this.$isEmpty&&this.setSelectionAnchor(t.row,t.column),e.call(this)},this.selectTo=function(e,t){this.$moveSelection((function(){this.moveCursorTo(e,t)}))},this.selectToPosition=function(e){this.$moveSelection((function(){this.moveCursorToPosition(e)}))},this.moveTo=function(e,t){this.clearSelection(),this.moveCursorTo(e,t)},this.moveToPosition=function(e){this.clearSelection(),this.moveCursorToPosition(e)},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(e,t){if(void 0===t){var n=e||this.lead
e=n.row,t=n.column}return this.session.getWordRange(e,t)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var e=this.getCursor(),t=this.session.getAWordRange(e.row,e.column)
this.setSelectionRange(t)},this.getLineRange=function(e,t){var n,i="number"==typeof e?e:this.lead.row,o=this.session.getFoldLine(i)
return o?(i=o.start.row,n=o.end.row):n=i,!0===t?new s(i,0,n,this.session.getLine(n).length):new s(i,0,n+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.wouldMoveIntoSoftTab=function(e,t,n){var i=e.column,o=e.column+t
return n<0&&(i=e.column-t,o=e.column),this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(i,o).split(" ").length-1==t},this.moveCursorLeft=function(){var e,t=this.lead.getPosition()
if(e=this.session.getFoldAt(t.row,t.column,-1))this.moveCursorTo(e.start.row,e.start.column)
else if(0===t.column)t.row>0&&this.moveCursorTo(t.row-1,this.doc.getLine(t.row-1).length)
else{var n=this.session.getTabSize()
this.wouldMoveIntoSoftTab(t,n,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-n):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var e,t=this.lead.getPosition()
if(e=this.session.getFoldAt(t.row,t.column,1))this.moveCursorTo(e.end.row,e.end.column)
else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0)
else{var n=this.session.getTabSize()
t=this.lead,this.wouldMoveIntoSoftTab(t,n,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,n):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var e=this.lead.row,t=this.lead.column,n=this.session.documentToScreenRow(e,t),i=this.session.screenToDocumentPosition(n,0),o=this.session.getDisplayLine(e,null,i.row,i.column).match(/^\s*/)
o[0].length==t||this.session.$useEmacsStyleLineStart||(i.column+=o[0].length),this.moveCursorToPosition(i)},this.moveCursorLineEnd=function(){var e=this.lead,t=this.session.getDocumentLastRowColumnPosition(e.row,e.column)
if(this.lead.column==t.column){var n=this.session.getLine(t.row)
if(t.column==n.length){var i=n.search(/\s+$/)
i>0&&(t.column=i)}}this.moveCursorTo(t.row,t.column)},this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1,t=this.doc.getLine(e).length
this.moveCursorTo(e,t)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),i=n.substring(t)
this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0
var o=this.session.getFoldAt(e,t,1)
if(o)this.moveCursorTo(o.end.row,o.end.column)
else{if(this.session.nonTokenRe.exec(i)&&(t+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,i=n.substring(t)),t>=n.length)return this.moveCursorTo(e,n.length),this.moveCursorRight(),void(e<this.doc.getLength()-1&&this.moveCursorWordRight())
this.session.tokenRe.exec(i)&&(t+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,t)}},this.moveCursorLongWordLeft=function(){var e,t=this.lead.row,n=this.lead.column
if(e=this.session.getFoldAt(t,n,-1))this.moveCursorTo(e.start.row,e.start.column)
else{var i=this.session.getFoldStringAt(t,n,-1)
null==i&&(i=this.doc.getLine(t).substring(0,n))
var r=o.stringReverse(i)
if(this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(r)&&(n-=this.session.nonTokenRe.lastIndex,r=r.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0),n<=0)return this.moveCursorTo(t,0),this.moveCursorLeft(),void(t>0&&this.moveCursorWordLeft())
this.session.tokenRe.exec(r)&&(n-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(t,n)}},this.$shortWordEndIndex=function(e){var t,n=0,i=/\s/,o=this.session.tokenRe
if(o.lastIndex=0,this.session.tokenRe.exec(e))n=this.session.tokenRe.lastIndex
else{for(;(t=e[n])&&i.test(t);)n++
if(n<1)for(o.lastIndex=0;(t=e[n])&&!o.test(t);)if(o.lastIndex=0,n++,i.test(t)){if(n>2){n--
break}for(;(t=e[n])&&i.test(t);)n++
if(n>2)break}}return o.lastIndex=0,n},this.moveCursorShortWordRight=function(){var e=this.lead.row,t=this.lead.column,n=this.doc.getLine(e),i=n.substring(t),o=this.session.getFoldAt(e,t,1)
if(o)return this.moveCursorTo(o.end.row,o.end.column)
if(t==n.length){var r=this.doc.getLength()
do{e++,i=this.doc.getLine(e)}while(e<r&&/^\s*$/.test(i));/^\s+/.test(i)||(i=""),t=0}var s=this.$shortWordEndIndex(i)
this.moveCursorTo(e,t+s)},this.moveCursorShortWordLeft=function(){var e,t=this.lead.row,n=this.lead.column
if(e=this.session.getFoldAt(t,n,-1))return this.moveCursorTo(e.start.row,e.start.column)
var i=this.session.getLine(t).substring(0,n)
if(0===n){do{t--,i=this.doc.getLine(t)}while(t>0&&/^\s*$/.test(i))
n=i.length,/\s+$/.test(i)||(i="")}var r=o.stringReverse(i),s=this.$shortWordEndIndex(r)
return this.moveCursorTo(t,n-s)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(e,t){var n,i=this.session.documentToScreenPosition(this.lead.row,this.lead.column)
if(0===t&&(0!==e&&(this.session.$bidiHandler.isBidiRow(i.row,this.lead.row)?(n=this.session.$bidiHandler.getPosLeft(i.column),i.column=Math.round(n/this.session.$bidiHandler.charWidths[0])):n=i.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?i.column=this.$desiredColumn:this.$desiredColumn=i.column),0!=e&&this.session.lineWidgets&&this.session.lineWidgets[this.lead.row]){var o=this.session.lineWidgets[this.lead.row]
e<0?e-=o.rowsAbove||0:e>0&&(e+=o.rowCount-(o.rowsAbove||0))}var r=this.session.screenToDocumentPosition(i.row+e,i.column,n)
0!==e&&0===t&&r.row===this.lead.row&&(r.column,this.lead.column),this.moveCursorTo(r.row,r.column+t,0===t)},this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)},this.moveCursorTo=function(e,t,n){var i=this.session.getFoldAt(e,t,1)
i&&(e=i.start.row,t=i.start.column),this.$keepDesiredColumnOnChange=!0
var o=this.session.getLine(e);/[\uDC00-\uDFFF]/.test(o.charAt(t))&&o.charAt(t-1)&&(this.lead.row==e&&this.lead.column==t+1?t-=1:t+=1),this.lead.setPosition(e,t),this.$keepDesiredColumnOnChange=!1,n||(this.$desiredColumn=null)},this.moveCursorToScreen=function(e,t,n){var i=this.session.screenToDocumentPosition(e,t)
this.moveCursorTo(i.row,i.column,n)},this.detach=function(){this.lead.detach(),this.anchor.detach()},this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start),this.$desiredColumn=e.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(e){var t=this.getRange()
return e?(e.start.column=t.start.column,e.start.row=t.start.row,e.end.column=t.end.column,e.end.row=t.end.row):e=t,e.cursor=this.isBackwards()?e.start:e.end,e.desiredColumn=this.$desiredColumn,e},this.getRangeOfMovements=function(e){var t=this.getCursor()
try{e(this)
var n=this.getCursor()
return s.fromPoints(t,n)}catch(e){return s.fromPoints(t,t)}finally{this.moveCursorToPosition(t)}},this.toJSON=function(){if(this.rangeCount)var e=this.ranges.map((function(e){var t=e.clone()
return t.isBackwards=e.cursor==e.start,t}))
else(e=this.getRange()).isBackwards=this.isBackwards()
return e},this.fromJSON=function(e){if(null==e.start){if(this.rangeList&&e.length>1){this.toSingleRange(e[0])
for(var t=e.length;t--;){var n=s.fromPoints(e[t].start,e[t].end)
e[t].isBackwards&&(n.cursor=n.start),this.addRange(n,!0)}return}e=e[0]}this.rangeList&&this.toSingleRange(e),this.setSelectionRange(e,e.isBackwards)},this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return!1
if(!e.length||!this.ranges)return this.getRange().isEqual(e)
for(var t=this.ranges.length;t--;)if(!this.ranges[t].isEqual(e[t]))return!1
return!0}}).call(a.prototype),t.Selection=a})),ace.define("ace/tokenizer",["require","exports","module","ace/config"],(function(e,t,n){"use strict"
var i=e("./config"),o=2e3,r=function(){function e(e){for(var t in this.states=e,this.regExps={},this.matchMappings={},this.states){for(var n=this.states[t],i=[],o=0,r=this.matchMappings[t]={defaultToken:"text"},s="g",a=[],l=0;l<n.length;l++){var c=n[l]
if(c.defaultToken&&(r.defaultToken=c.defaultToken),c.caseInsensitive&&-1===s.indexOf("i")&&(s+="i"),c.unicode&&-1===s.indexOf("u")&&(s+="u"),null!=c.regex){c.regex instanceof RegExp&&(c.regex=c.regex.toString().slice(1,-1))
var h=c.regex,u=new RegExp("(?:("+h+")|(.))").exec("a").length-2
Array.isArray(c.token)?1==c.token.length||1==u?c.token=c.token[0]:u-1!=c.token.length?(this.reportError("number of classes and regexp groups doesn't match",{rule:c,groupCount:u-1}),c.token=c.token[0]):(c.tokenArray=c.token,c.token=null,c.onMatch=this.$arrayTokens):"function"!=typeof c.token||c.onMatch||(c.onMatch=u>1?this.$applyToken:c.token),u>1&&(/\\\d/.test(c.regex)?h=c.regex.replace(/\\([0-9]+)/g,(function(e,t){return"\\"+(parseInt(t,10)+o+1)})):(u=1,h=this.removeCapturingGroups(c.regex)),c.splitRegex||"string"==typeof c.token||a.push(c)),r[o]=l,o+=u,i.push(h),c.onMatch||(c.onMatch=null)}}i.length||(r[0]=0,i.push("$")),a.forEach((function(e){e.splitRegex=this.createSplitterRegexp(e.regex,s)}),this),this.regExps[t]=new RegExp("("+i.join(")|(")+")|($)",s)}}return e.prototype.$setMaxTokenCount=function(e){o=0|e},e.prototype.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1),n=this.token.apply(this,t)
if("string"==typeof n)return[{type:n,value:e}]
for(var i=[],o=0,r=n.length;o<r;o++)t[o]&&(i[i.length]={type:n[o],value:t[o]})
return i},e.prototype.$arrayTokens=function(e){if(!e)return[]
var t=this.splitRegex.exec(e)
if(!t)return"text"
for(var n=[],i=this.tokenArray,o=0,r=i.length;o<r;o++)t[o+1]&&(n[n.length]={type:i[o],value:t[o+1]})
return n},e.prototype.removeCapturingGroups=function(e){return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,(function(e,t){return t?"(?:":e}))},e.prototype.createSplitterRegexp=function(e,t){if(-1!=e.indexOf("(?=")){var n=0,i=!1,o={}
e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,(function(e,t,r,s,a,l){return i?i="]"!=a:a?i=!0:s?(n==o.stack&&(o.end=l+1,o.stack=-1),n--):r&&(n++,1!=r.length&&(o.stack=n,o.start=l)),e})),null!=o.end&&/^\)*$/.test(e.substr(o.end))&&(e=e.substring(0,o.start)+e.substr(o.end))}return"^"!=e.charAt(0)&&(e="^"+e),"$"!=e.charAt(e.length-1)&&(e+="$"),new RegExp(e,(t||"").replace("g",""))},e.prototype.getLineTokens=function(e,t){if(t&&"string"!=typeof t){var n=t.slice(0)
"#tmp"===(t=n[0])&&(n.shift(),t=n.shift())}else n=[]
var i=t||"start",r=this.states[i]
r||(i="start",r=this.states[i])
var s=this.matchMappings[i],a=this.regExps[i]
a.lastIndex=0
for(var l,c=[],h=0,u=0,d={type:null,value:""};l=a.exec(e);){var g=s.defaultToken,p=null,f=l[0],m=a.lastIndex
if(m-f.length>h){var v=e.substring(h,m-f.length)
d.type==g?d.value+=v:(d.type&&c.push(d),d={type:g,value:v})}for(var w=0;w<l.length-2;w++)if(void 0!==l[w+1]){g=(p=r[s[w]]).onMatch?p.onMatch(f,i,n,e):p.token,p.next&&(i="string"==typeof p.next?p.next:p.next(i,n),(r=this.states[i])||(this.reportError("state doesn't exist",i),i="start",r=this.states[i]),s=this.matchMappings[i],h=m,(a=this.regExps[i]).lastIndex=m),p.consumeLineEnd&&(h=m)
break}if(f)if("string"==typeof g)p&&!1===p.merge||d.type!==g?(d.type&&c.push(d),d={type:g,value:f}):d.value+=f
else if(g)for(d.type&&c.push(d),d={type:null,value:""},w=0;w<g.length;w++)c.push(g[w])
if(h==e.length)break
if(h=m,u++>o){for(u>2*e.length&&this.reportError("infinite loop with in ace tokenizer",{startState:t,line:e});h<e.length;)d.type&&c.push(d),d={value:e.substring(h,h+=500),type:"overflow"}
i="start",n=[]
break}}return d.type&&c.push(d),n.length>1&&n[0]!==i&&n.unshift("#tmp",i),{tokens:c,state:n.length?n:i}},e}()
r.prototype.reportError=i.reportError,t.Tokenizer=r})),ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],(function(e,t,n){"use strict"
var i=e("../lib/lang"),o=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(t)for(var n in e){for(var i=e[n],o=0;o<i.length;o++){var r=i[o];(r.next||r.onMatch)&&("string"==typeof r.next&&0!==r.next.indexOf(t)&&(r.next=t+r.next),r.nextState&&0!==r.nextState.indexOf(t)&&(r.nextState=t+r.nextState))}this.$rules[t+n]=i}else for(var n in e)this.$rules[n]=e[n]},this.getRules=function(){return this.$rules},this.embedRules=function(e,t,n,o,r){var s="function"==typeof e?(new e).getRules():e
if(o)for(var a=0;a<o.length;a++)o[a]=t+o[a]
else for(var l in o=[],s)o.push(t+l)
if(this.addRules(s,t),n){var c=Array.prototype[r?"push":"unshift"]
for(a=0;a<o.length;a++)c.apply(this.$rules[o[a]],i.deepCopy(n))}this.$embeds||(this.$embeds=[]),this.$embeds.push(t)},this.getEmbeds=function(){return this.$embeds}
var e=function(e,t){return("start"!=e||t.length)&&t.unshift(this.nextState,e),this.nextState},t=function(e,t){return t.shift(),t.shift()||"start"}
this.normalizeRules=function(){var n=0,i=this.$rules
Object.keys(i).forEach((function o(r){var s=i[r]
s.processed=!0
for(var a=0;a<s.length;a++){var l=s[a],c=null
Array.isArray(l)&&(c=l,l={}),!l.regex&&l.start&&(l.regex=l.start,l.next||(l.next=[]),l.next.push({defaultToken:l.token},{token:l.token+".end",regex:l.end||l.start,next:"pop"}),l.token=l.token+".start",l.push=!0)
var h=l.next||l.push
if(h&&Array.isArray(h)){var u=l.stateName
u||("string"!=typeof(u=l.token)&&(u=u[0]||""),i[u]&&(u+=n++)),i[u]=h,l.next=u,o(u)}else"pop"==h&&(l.next=t)
if(l.push&&(l.nextState=l.next||l.push,l.next=e,delete l.push),l.rules)for(var d in l.rules)i[d]?i[d].push&&i[d].push.apply(i[d],l.rules[d]):i[d]=l.rules[d]
var g="string"==typeof l?l:l.include
if(g&&("$self"===g&&(g="start"),c=Array.isArray(g)?g.map((function(e){return i[e]})):i[g]),c){var p=[a,1].concat(c)
l.noEscape&&(p=p.filter((function(e){return!e.next}))),s.splice.apply(s,p),a--}l.keywordMap&&(l.token=this.createKeywordMapper(l.keywordMap,l.defaultToken||"text",l.caseInsensitive),delete l.defaultToken)}}),this)},this.createKeywordMapper=function(e,t,n,i){var o=Object.create(null)
return this.$keywordList=[],Object.keys(e).forEach((function(t){for(var r=e[t].split(i||"|"),s=r.length;s--;){var a=r[s]
this.$keywordList.push(a),n&&(a=a.toLowerCase()),o[a]=t}}),this),e=null,n?function(e){return o[e.toLowerCase()]||t}:function(e){return o[e]||t}},this.getKeywords=function(){return this.$keywords}}).call(o.prototype),t.TextHighlightRules=o})),ace.define("ace/mode/behaviour",["require","exports","module"],(function(e,t,n){"use strict"
var i=function(){this.$behaviours={}};(function(){this.add=function(e,t,n){switch(void 0){case this.$behaviours:this.$behaviours={}
case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=n},this.addBehaviours=function(e){for(var t in e)for(var n in e[t])this.add(t,n,e[t][n])},this.remove=function(e){this.$behaviours&&this.$behaviours[e]&&delete this.$behaviours[e]},this.inherit=function(e,t){if("function"==typeof e)var n=(new e).getBehaviours(t)
else n=e.getBehaviours(t)
this.addBehaviours(n)},this.getBehaviours=function(e){if(e){for(var t={},n=0;n<e.length;n++)this.$behaviours[e[n]]&&(t[e[n]]=this.$behaviours[e[n]])
return t}return this.$behaviours}}).call(i.prototype),t.Behaviour=i})),ace.define("ace/token_iterator",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=e("./range").Range,o=function(){function e(e,t,n){this.$session=e,this.$row=t,this.$rowTokens=e.getTokens(t)
var i=e.getTokenAt(t,n)
this.$tokenIndex=i?i.index:-1}return e.prototype.stepBackward=function(){for(this.$tokenIndex-=1;this.$tokenIndex<0;){if(this.$row-=1,this.$row<0)return this.$row=0,null
this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},e.prototype.stepForward=function(){var e
for(this.$tokenIndex+=1;this.$tokenIndex>=this.$rowTokens.length;){if(this.$row+=1,e||(e=this.$session.getLength()),this.$row>=e)return this.$row=e-1,null
this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},e.prototype.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},e.prototype.getCurrentTokenRow=function(){return this.$row},e.prototype.getCurrentTokenColumn=function(){var e=this.$rowTokens,t=this.$tokenIndex,n=e[t].start
if(void 0!==n)return n
for(n=0;t>0;)n+=e[t-=1].value.length
return n},e.prototype.getCurrentTokenPosition=function(){return{row:this.$row,column:this.getCurrentTokenColumn()}},e.prototype.getCurrentTokenRange=function(){var e=this.$rowTokens[this.$tokenIndex],t=this.getCurrentTokenColumn()
return new i(this.$row,t,this.$row,t+e.value.length)},e}()
t.TokenIterator=o})),ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,n){"use strict"
var i,o=e("../../lib/oop"),r=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,a=e("../../lib/lang"),l=["text","paren.rparen","rparen","paren","punctuation.operator"],c=["text","paren.rparen","rparen","paren","punctuation.operator","comment"],h={},u={'"':'"',"'":"'"},d=function(e){var t=-1
if(e.multiSelect&&(t=e.selection.index,h.rangeCount!=e.multiSelect.rangeCount&&(h={rangeCount:e.multiSelect.rangeCount})),h[t])return i=h[t]
i=h[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},g=function(e,t,n,i){var o=e.end.row-e.start.row
return{text:n+t+i,selection:[0,e.start.column+1,o,e.end.column+(o?0:1)]}},p=function(e){e=e||{},this.add("braces","insertion",(function(t,n,o,r,s){var l=o.getCursorPosition(),c=r.doc.getLine(l.row)
if("{"==s){d(o)
var h=o.getSelectionRange(),u=r.doc.getTextRange(h)
if(""!==u&&"{"!==u&&o.getWrapBehavioursEnabled())return g(h,u,"{","}")
if(p.isSaneInsertion(o,r))return/[\]\}\)]/.test(c[l.column])||o.inMultiSelectMode||e.braces?(p.recordAutoInsert(o,r,"}"),{text:"{}",selection:[1,1]}):(p.recordMaybeInsert(o,r,"{"),{text:"{",selection:[1,1]})}else if("}"==s){if(d(o),"}"==c.substring(l.column,l.column+1)&&null!==r.$findOpeningBracket("}",{column:l.column+1,row:l.row})&&p.isAutoInsertedClosing(l,c,s))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else{if("\n"==s||"\r\n"==s){d(o)
var f=""
if(p.isMaybeInsertedClosing(l,c)&&(f=a.stringRepeat("}",i.maybeInsertedBrackets),p.clearMaybeInsertedClosing()),"}"===c.substring(l.column,l.column+1)){var m=r.findMatchingBracket({row:l.row,column:l.column+1},"}")
if(!m)return null
var v=this.$getIndent(r.getLine(m.row))}else{if(!f)return void p.clearMaybeInsertedClosing()
v=this.$getIndent(c)}var w=v+r.getTabString()
return{text:"\n"+w+"\n"+v+f,selection:[1,w.length,1,w.length]}}p.clearMaybeInsertedClosing()}})),this.add("braces","deletion",(function(e,t,n,o,r){var s=o.doc.getTextRange(r)
if(!r.isMultiLine()&&"{"==s){if(d(n),"}"==o.doc.getLine(r.start.row).substring(r.end.column,r.end.column+1))return r.end.column++,r
i.maybeInsertedBrackets--}})),this.add("parens","insertion",(function(e,t,n,i,o){if("("==o){d(n)
var r=n.getSelectionRange(),s=i.doc.getTextRange(r)
if(""!==s&&n.getWrapBehavioursEnabled())return g(r,s,"(",")")
if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,")"),{text:"()",selection:[1,1]}}else if(")"==o){d(n)
var a=n.getCursorPosition(),l=i.doc.getLine(a.row)
if(")"==l.substring(a.column,a.column+1)&&null!==i.$findOpeningBracket(")",{column:a.column+1,row:a.row})&&p.isAutoInsertedClosing(a,l,o))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,n,i,o){var r=i.doc.getTextRange(o)
if(!o.isMultiLine()&&"("==r&&(d(n),")"==i.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("brackets","insertion",(function(e,t,n,i,o){if("["==o){d(n)
var r=n.getSelectionRange(),s=i.doc.getTextRange(r)
if(""!==s&&n.getWrapBehavioursEnabled())return g(r,s,"[","]")
if(p.isSaneInsertion(n,i))return p.recordAutoInsert(n,i,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){d(n)
var a=n.getCursorPosition(),l=i.doc.getLine(a.row)
if("]"==l.substring(a.column,a.column+1)&&null!==i.$findOpeningBracket("]",{column:a.column+1,row:a.row})&&p.isAutoInsertedClosing(a,l,o))return p.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,n,i,o){var r=i.doc.getTextRange(o)
if(!o.isMultiLine()&&"["==r&&(d(n),"]"==i.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("string_dquotes","insertion",(function(e,t,n,i,o){var r=i.$mode.$quotes||u
if(1==o.length&&r[o]){if(this.lineCommentStart&&-1!=this.lineCommentStart.indexOf(o))return
d(n)
var s=o,a=n.getSelectionRange(),l=i.doc.getTextRange(a)
if(!(""===l||1==l.length&&r[l])&&n.getWrapBehavioursEnabled())return g(a,l,s,s)
if(!l){var c=n.getCursorPosition(),h=i.doc.getLine(c.row),p=h.substring(c.column-1,c.column),f=h.substring(c.column,c.column+1),m=i.getTokenAt(c.row,c.column),v=i.getTokenAt(c.row,c.column+1)
if("\\"==p&&m&&/escape/.test(m.type))return null
var w,y=m&&/string|escape/.test(m.type),b=!v||/string|escape/.test(v.type)
if(f==s)(w=y!==b)&&/string\.end/.test(v.type)&&(w=!1)
else{if(y&&!b)return null
if(y&&b)return null
var $=i.$mode.tokenRe
$.lastIndex=0
var C=$.test(p)
$.lastIndex=0
var S=$.test(f),A=i.$mode.$pairQuotesAfter
if(!(A&&A[s]&&A[s].test(p))&&C||S)return null
if(f&&!/[\s;,.})\]\\]/.test(f))return null
var x=h[c.column-2]
if(p==s&&(x==s||$.test(x)))return null
w=!0}return{text:w?s+s:"",selection:[1,1]}}}})),this.add("string_dquotes","deletion",(function(e,t,n,i,o){var r=i.$mode.$quotes||u,s=i.doc.getTextRange(o)
if(!o.isMultiLine()&&r.hasOwnProperty(s)&&(d(n),i.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==s))return o.end.column++,o})),!1!==e.closeDocComment&&this.add("doc comment end","insertion",(function(e,t,n,i,o){if("doc-start"===e&&("\n"===o||"\r\n"===o)&&n.selection.isEmpty()){var r=n.getCursorPosition(),s=i.doc.getLine(r.row),a=i.doc.getLine(r.row+1),l=this.$getIndent(s)
if(/\s*\*/.test(a))return/^\s*\*/.test(s)?{text:o+l+"* ",selection:[1,3+l.length,1,3+l.length]}:{text:o+l+" * ",selection:[1,3+l.length,1,3+l.length]}
if(/\/\*\*/.test(s.substring(0,r.column)))return{text:o+l+" * "+o+" "+l+"*/",selection:[1,4+l.length,1,4+l.length]}}}))}
p.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),i=new s(t,n.row,n.column)
if(!this.$matchTokenType(i.getCurrentToken()||"text",l)){if(/[)}\]]/.test(e.session.getLine(n.row)[n.column]))return!0
var o=new s(t,n.row,n.column+1)
if(!this.$matchTokenType(o.getCurrentToken()||"text",l))return!1}return i.stepForward(),i.getCurrentTokenRow()!==n.row||this.$matchTokenType(i.getCurrentToken()||"text",c)},p.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},p.recordAutoInsert=function(e,t,n){var o=e.getCursorPosition(),r=t.doc.getLine(o.row)
this.isAutoInsertedClosing(o,r,i.autoInsertedLineEnd[0])||(i.autoInsertedBrackets=0),i.autoInsertedRow=o.row,i.autoInsertedLineEnd=n+r.substr(o.column),i.autoInsertedBrackets++},p.recordMaybeInsert=function(e,t,n){var o=e.getCursorPosition(),r=t.doc.getLine(o.row)
this.isMaybeInsertedClosing(o,r)||(i.maybeInsertedBrackets=0),i.maybeInsertedRow=o.row,i.maybeInsertedLineStart=r.substr(0,o.column)+n,i.maybeInsertedLineEnd=r.substr(o.column),i.maybeInsertedBrackets++},p.isAutoInsertedClosing=function(e,t,n){return i.autoInsertedBrackets>0&&e.row===i.autoInsertedRow&&n===i.autoInsertedLineEnd[0]&&t.substr(e.column)===i.autoInsertedLineEnd},p.isMaybeInsertedClosing=function(e,t){return i.maybeInsertedBrackets>0&&e.row===i.maybeInsertedRow&&t.substr(e.column)===i.maybeInsertedLineEnd&&t.substr(0,e.column)==i.maybeInsertedLineStart},p.popAutoInsertedClosing=function(){i.autoInsertedLineEnd=i.autoInsertedLineEnd.substr(1),i.autoInsertedBrackets--},p.clearMaybeInsertedClosing=function(){i&&(i.maybeInsertedBrackets=0,i.maybeInsertedRow=-1)},o.inherits(p,r),t.CstyleBehaviour=p})),ace.define("ace/unicode",["require","exports","module"],(function(e,t,n){"use strict"
for(var i=[48,9,8,25,5,0,2,25,48,0,11,0,5,0,6,22,2,30,2,457,5,11,15,4,8,0,2,0,18,116,2,1,3,3,9,0,2,2,2,0,2,19,2,82,2,138,2,4,3,155,12,37,3,0,8,38,10,44,2,0,2,1,2,1,2,0,9,26,6,2,30,10,7,61,2,9,5,101,2,7,3,9,2,18,3,0,17,58,3,100,15,53,5,0,6,45,211,57,3,18,2,5,3,11,3,9,2,1,7,6,2,2,2,7,3,1,3,21,2,6,2,0,4,3,3,8,3,1,3,3,9,0,5,1,2,4,3,11,16,2,2,5,5,1,3,21,2,6,2,1,2,1,2,1,3,0,2,4,5,1,3,2,4,0,8,3,2,0,8,15,12,2,2,8,2,2,2,21,2,6,2,1,2,4,3,9,2,2,2,2,3,0,16,3,3,9,18,2,2,7,3,1,3,21,2,6,2,1,2,4,3,8,3,1,3,2,9,1,5,1,2,4,3,9,2,0,17,1,2,5,4,2,2,3,4,1,2,0,2,1,4,1,4,2,4,11,5,4,4,2,2,3,3,0,7,0,15,9,18,2,2,7,2,2,2,22,2,9,2,4,4,7,2,2,2,3,8,1,2,1,7,3,3,9,19,1,2,7,2,2,2,22,2,9,2,4,3,8,2,2,2,3,8,1,8,0,2,3,3,9,19,1,2,7,2,2,2,22,2,15,4,7,2,2,2,3,10,0,9,3,3,9,11,5,3,1,2,17,4,23,2,8,2,0,3,6,4,0,5,5,2,0,2,7,19,1,14,57,6,14,2,9,40,1,2,0,3,1,2,0,3,0,7,3,2,6,2,2,2,0,2,0,3,1,2,12,2,2,3,4,2,0,2,5,3,9,3,1,35,0,24,1,7,9,12,0,2,0,2,0,5,9,2,35,5,19,2,5,5,7,2,35,10,0,58,73,7,77,3,37,11,42,2,0,4,328,2,3,3,6,2,0,2,3,3,40,2,3,3,32,2,3,3,6,2,0,2,3,3,14,2,56,2,3,3,66,5,0,33,15,17,84,13,619,3,16,2,25,6,74,22,12,2,6,12,20,12,19,13,12,2,2,2,1,13,51,3,29,4,0,5,1,3,9,34,2,3,9,7,87,9,42,6,69,11,28,4,11,5,11,11,39,3,4,12,43,5,25,7,10,38,27,5,62,2,28,3,10,7,9,14,0,89,75,5,9,18,8,13,42,4,11,71,55,9,9,4,48,83,2,2,30,14,230,23,280,3,5,3,37,3,5,3,7,2,0,2,0,2,0,2,30,3,52,2,6,2,0,4,2,2,6,4,3,3,5,5,12,6,2,2,6,67,1,20,0,29,0,14,0,17,4,60,12,5,0,4,11,18,0,5,0,3,9,2,0,4,4,7,0,2,0,2,0,2,3,2,10,3,3,6,4,5,0,53,1,2684,46,2,46,2,132,7,6,15,37,11,53,10,0,17,22,10,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,31,48,0,470,1,36,5,2,4,6,1,5,85,3,1,3,2,2,89,2,3,6,40,4,93,18,23,57,15,513,6581,75,20939,53,1164,68,45,3,268,4,27,21,31,3,13,13,1,2,24,9,69,11,1,38,8,3,102,3,1,111,44,25,51,13,68,12,9,7,23,4,0,5,45,3,35,13,28,4,64,15,10,39,54,10,13,3,9,7,22,4,1,5,66,25,2,227,42,2,1,3,9,7,11171,13,22,5,48,8453,301,3,61,3,105,39,6,13,4,6,11,2,12,2,4,2,0,2,1,2,1,2,107,34,362,19,63,3,53,41,11,5,15,17,6,13,1,25,2,33,4,2,134,20,9,8,25,5,0,2,25,12,88,4,5,3,5,3,5,3,2],o=0,r=[],s=0;s<i.length;s+=2)r.push(o+=i[s]),i[s+1]&&r.push(45,o+=i[s+1])
t.wordChars=String.fromCharCode.apply(null,r)})),ace.define("ace/mode/text",["require","exports","module","ace/config","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour/cstyle","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],(function(e,t,n){"use strict"
var i=e("../config"),o=e("../tokenizer").Tokenizer,r=e("./text_highlight_rules").TextHighlightRules,s=e("./behaviour/cstyle").CstyleBehaviour,a=e("../unicode"),l=e("../lib/lang"),c=e("../token_iterator").TokenIterator,h=e("../range").Range,u=function(){this.HighlightRules=r};(function(){this.$defaultBehaviour=new s,this.tokenRe=new RegExp("^["+a.wordChars+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+a.wordChars+"\\$_]|\\s])+","g"),this.getTokenizer=function(){return this.$tokenizer||(this.$highlightRules=this.$highlightRules||new this.HighlightRules(this.$highlightRuleConfig),this.$tokenizer=new o(this.$highlightRules.getRules())),this.$tokenizer},this.lineCommentStart="",this.blockComment="",this.toggleCommentLines=function(e,t,n,i){var o=t.doc,r=!0,s=!0,a=1/0,c=t.getTabSize(),h=!1
if(this.lineCommentStart){Array.isArray(this.lineCommentStart)?(f=this.lineCommentStart.map(l.escapeRegExp).join("|"),g=this.lineCommentStart[0]):(f=l.escapeRegExp(this.lineCommentStart),g=this.lineCommentStart),f=new RegExp("^(\\s*)(?:"+f+") ?"),h=t.getUseSoftTabs(),w=function(e,t){var n=e.match(f)
if(n){var i=n[1].length,r=n[0].length
d(e,i,r)||" "!=n[0][r-1]||r--,o.removeInLine(t,i,r)}}
var u=g+" ",d=(v=function(e,t){r&&!/\S/.test(e)||(d(e,a,a)?o.insertInLine({row:t,column:a},u):o.insertInLine({row:t,column:a},g))},y=function(e,t){return f.test(e)},function(e,t,n){for(var i=0;t--&&" "==e.charAt(t);)i++
if(i%c!=0)return!1
for(i=0;" "==e.charAt(n++);)i++
return c>2?i%c!=c-1:i%c==0})}else{if(!this.blockComment)return!1
var g=this.blockComment.start,p=this.blockComment.end,f=new RegExp("^(\\s*)(?:"+l.escapeRegExp(g)+")"),m=new RegExp("(?:"+l.escapeRegExp(p)+")\\s*$"),v=function(e,t){y(e,t)||r&&!/\S/.test(e)||(o.insertInLine({row:t,column:e.length},p),o.insertInLine({row:t,column:a},g))},w=function(e,t){var n;(n=e.match(m))&&o.removeInLine(t,e.length-n[0].length,e.length),(n=e.match(f))&&o.removeInLine(t,n[1].length,n[0].length)},y=function(e,n){if(f.test(e))return!0
for(var i=t.getTokens(n),o=0;o<i.length;o++)if("comment"===i[o].type)return!0}}function b(e){for(var t=n;t<=i;t++)e(o.getLine(t),t)}var $=1/0
b((function(e,t){var n=e.search(/\S/);-1!==n?(n<a&&(a=n),s&&!y(e,t)&&(s=!1)):$>e.length&&($=e.length)})),a==1/0&&(a=$,r=!1,s=!1),h&&a%c!=0&&(a=Math.floor(a/c)*c),b(s?w:v)},this.toggleBlockComment=function(e,t,n,i){var o=this.blockComment
if(o){!o.start&&o[0]&&(o=o[0])
var r,s,a=(f=new c(t,i.row,i.column)).getCurrentToken(),l=(t.selection,t.selection.toOrientedRange())
if(a&&/comment/.test(a.type)){for(var u,d;a&&/comment/.test(a.type);){if(-1!=(m=a.value.indexOf(o.start))){var g=f.getCurrentTokenRow(),p=f.getCurrentTokenColumn()+m
u=new h(g,p,g,p+o.start.length)
break}a=f.stepBackward()}var f
for(a=(f=new c(t,i.row,i.column)).getCurrentToken();a&&/comment/.test(a.type);){var m
if(-1!=(m=a.value.indexOf(o.end))){g=f.getCurrentTokenRow(),p=f.getCurrentTokenColumn()+m,d=new h(g,p,g,p+o.end.length)
break}a=f.stepForward()}d&&t.remove(d),u&&(t.remove(u),r=u.start.row,s=-o.start.length)}else s=o.start.length,r=n.start.row,t.insert(n.end,o.end),t.insert(n.start,o.start)
l.start.row==r&&(l.start.column+=s),l.end.row==r&&(l.end.column+=s),t.selection.fromOrientedRange(l)}},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1},this.autoOutdent=function(e,t,n){},this.$getIndent=function(e){return e.match(/^\s*/)[0]},this.createWorker=function(e){return null},this.createModeDelegates=function(e){for(var t in this.$embeds=[],this.$modes={},e)if(e[t]){var n=e[t],o=n.prototype.$id,r=i.$modes[o]
r||(i.$modes[o]=r=new n),i.$modes[t]||(i.$modes[t]=r),this.$embeds.push(t),this.$modes[t]=r}var s=["toggleBlockComment","toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"]
for(t=0;t<s.length;t++)!function(e){var n=s[t],i=e[n]
e[s[t]]=function(){return this.$delegator(n,arguments,i)}}(this)},this.$delegator=function(e,t,n){var i=t[0]||"start"
if("string"!=typeof i){if(Array.isArray(i[2])){var o=i[2][i[2].length-1]
if(s=this.$modes[o])return s[e].apply(s,[i[1]].concat([].slice.call(t,1)))}i=i[0]||"start"}for(var r=0;r<this.$embeds.length;r++)if(this.$modes[this.$embeds[r]]){var s,a=i.split(this.$embeds[r])
if(!a[0]&&a[1])return t[0]=a[1],(s=this.$modes[this.$embeds[r]])[e].apply(s,t)}var l=n.apply(this,t)
return n?l:void 0},this.transformAction=function(e,t,n,i,o){if(this.$behaviour){var r=this.$behaviour.getBehaviours()
for(var s in r)if(r[s][t]){var a=r[s][t].apply(this,arguments)
if(a)return a}}},this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules,n=[]
for(var i in t)for(var o=t[i],r=0,s=o.length;r<s;r++)if("string"==typeof o[r].token)/keyword|support|storage/.test(o[r].token)&&n.push(o[r].regex)
else if("object"==typeof o[r].token)for(var a=0,l=o[r].token.length;a<l;a++)/keyword|support|storage/.test(o[r].token[a])&&(i=o[r].regex.match(/\(.+?\)/g)[a],n.push(i.substr(1,i.length-2)))
this.completionKeywords=n}return e?n.concat(this.$keywordList||[]):this.$keywordList},this.$createKeywordList=function(){return this.$highlightRules||this.getTokenizer(),this.$keywordList=this.$highlightRules.$keywordList||[]},this.getCompletions=function(e,t,n,i){return(this.$keywordList||this.$createKeywordList()).map((function(e){return{name:e,value:e,score:0,meta:"keyword"}}))},this.$id="ace/mode/text"}).call(u.prototype),t.Mode=u})),ace.define("ace/apply_delta",["require","exports","module"],(function(e,t,n){"use strict"
t.applyDelta=function(e,t,n){var i=t.start.row,o=t.start.column,r=e[i]||""
switch(t.action){case"insert":if(1===t.lines.length)e[i]=r.substring(0,o)+t.lines[0]+r.substring(o)
else{var s=[i,1].concat(t.lines)
e.splice.apply(e,s),e[i]=r.substring(0,o)+e[i],e[i+t.lines.length-1]+=r.substring(o)}break
case"remove":var a=t.end.column,l=t.end.row
i===l?e[i]=r.substring(0,o)+r.substring(a):e.splice(i,l-i+1,r.substring(0,o)+e[l].substring(a))}}})),ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./lib/event_emitter").EventEmitter,r=function(){function e(e,t,n){this.$onChange=this.onChange.bind(this),this.attach(e),void 0===n?this.setPosition(t.row,t.column):this.setPosition(t,n)}return e.prototype.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},e.prototype.getDocument=function(){return this.document},e.prototype.onChange=function(e){if(!(e.start.row==e.end.row&&e.start.row!=this.row||e.start.row>this.row)){var t=function(e,t,n){var i="insert"==e.action,o=(i?1:-1)*(e.end.row-e.start.row),r=(i?1:-1)*(e.end.column-e.start.column),a=e.start,l=i?a:e.end
return s(t,a,n)?{row:t.row,column:t.column}:s(l,t,!n)?{row:t.row+o,column:t.column+(t.row==l.row?r:0)}:{row:a.row,column:a.column}}(e,{row:this.row,column:this.column},this.$insertRight)
this.setPosition(t.row,t.column,!0)}},e.prototype.setPosition=function(e,t,n){var i
if(i=n?{row:e,column:t}:this.$clipPositionToDocument(e,t),this.row!=i.row||this.column!=i.column){var o={row:this.row,column:this.column}
this.row=i.row,this.column=i.column,this._signal("change",{old:o,value:i})}},e.prototype.detach=function(){this.document.off("change",this.$onChange)},e.prototype.attach=function(e){this.document=e||this.document,this.document.on("change",this.$onChange)},e.prototype.$clipPositionToDocument=function(e,t){var n={}
return e>=this.document.getLength()?(n.row=Math.max(0,this.document.getLength()-1),n.column=this.document.getLine(n.row).length):e<0?(n.row=0,n.column=0):(n.row=e,n.column=Math.min(this.document.getLine(n.row).length,Math.max(0,t))),t<0&&(n.column=0),n},e}()
function s(e,t,n){var i=n?e.column<=t.column:e.column<t.column
return e.row<t.row||e.row==t.row&&i}r.prototype.$insertRight=!1,i.implement(r.prototype,o),t.Anchor=r})),ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./apply_delta").applyDelta,r=e("./lib/event_emitter").EventEmitter,s=e("./range").Range,a=e("./anchor").Anchor,l=function(){function e(e){this.$lines=[""],0===e.length?this.$lines=[""]:Array.isArray(e)?this.insertMergedLines({row:0,column:0},e):this.insert({row:0,column:0},e)}return e.prototype.setValue=function(e){var t=this.getLength()-1
this.remove(new s(0,0,t,this.getLine(t).length)),this.insert({row:0,column:0},e||"")},e.prototype.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},e.prototype.createAnchor=function(e,t){return new a(this,e,t)},e.prototype.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m)
this.$autoNewLine=t?t[1]:"\n",this._signal("changeNewLineMode")},e.prototype.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n"
case"unix":return"\n"
default:return this.$autoNewLine||"\n"}},e.prototype.setNewLineMode=function(e){this.$newLineMode!==e&&(this.$newLineMode=e,this._signal("changeNewLineMode"))},e.prototype.getNewLineMode=function(){return this.$newLineMode},e.prototype.isNewLine=function(e){return"\r\n"==e||"\r"==e||"\n"==e},e.prototype.getLine=function(e){return this.$lines[e]||""},e.prototype.getLines=function(e,t){return this.$lines.slice(e,t+1)},e.prototype.getAllLines=function(){return this.getLines(0,this.getLength())},e.prototype.getLength=function(){return this.$lines.length},e.prototype.getTextRange=function(e){return this.getLinesForRange(e).join(this.getNewLineCharacter())},e.prototype.getLinesForRange=function(e){var t
if(e.start.row===e.end.row)t=[this.getLine(e.start.row).substring(e.start.column,e.end.column)]
else{(t=this.getLines(e.start.row,e.end.row))[0]=(t[0]||"").substring(e.start.column)
var n=t.length-1
e.end.row-e.start.row==n&&(t[n]=t[n].substring(0,e.end.column))}return t},e.prototype.insertLines=function(e,t){return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),this.insertFullLines(e,t)},e.prototype.removeLines=function(e,t){return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),this.removeFullLines(e,t)},e.prototype.insertNewLine=function(e){return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),this.insertMergedLines(e,["",""])},e.prototype.insert=function(e,t){return this.getLength()<=1&&this.$detectNewLine(t),this.insertMergedLines(e,this.$split(t))},e.prototype.insertInLine=function(e,t){var n=this.clippedPos(e.row,e.column),i=this.pos(e.row,e.column+t.length)
return this.applyDelta({start:n,end:i,action:"insert",lines:[t]},!0),this.clonePos(i)},e.prototype.clippedPos=function(e,t){var n=this.getLength()
void 0===e?e=n:e<0?e=0:e>=n&&(e=n-1,t=void 0)
var i=this.getLine(e)
return null==t&&(t=i.length),{row:e,column:t=Math.min(Math.max(t,0),i.length)}},e.prototype.clonePos=function(e){return{row:e.row,column:e.column}},e.prototype.pos=function(e,t){return{row:e,column:t}},e.prototype.$clipPosition=function(e){var t=this.getLength()
return e.row>=t?(e.row=Math.max(0,t-1),e.column=this.getLine(t-1).length):(e.row=Math.max(0,e.row),e.column=Math.min(Math.max(e.column,0),this.getLine(e.row).length)),e},e.prototype.insertFullLines=function(e,t){var n=0;(e=Math.min(Math.max(e,0),this.getLength()))<this.getLength()?(t=t.concat([""]),n=0):(t=[""].concat(t),e--,n=this.$lines[e].length),this.insertMergedLines({row:e,column:n},t)},e.prototype.insertMergedLines=function(e,t){var n=this.clippedPos(e.row,e.column),i={row:n.row+t.length-1,column:(1==t.length?n.column:0)+t[t.length-1].length}
return this.applyDelta({start:n,end:i,action:"insert",lines:t}),this.clonePos(i)},e.prototype.remove=function(e){var t=this.clippedPos(e.start.row,e.start.column),n=this.clippedPos(e.end.row,e.end.column)
return this.applyDelta({start:t,end:n,action:"remove",lines:this.getLinesForRange({start:t,end:n})}),this.clonePos(t)},e.prototype.removeInLine=function(e,t,n){var i=this.clippedPos(e,t),o=this.clippedPos(e,n)
return this.applyDelta({start:i,end:o,action:"remove",lines:this.getLinesForRange({start:i,end:o})},!0),this.clonePos(i)},e.prototype.removeFullLines=function(e,t){e=Math.min(Math.max(0,e),this.getLength()-1)
var n=(t=Math.min(Math.max(0,t),this.getLength()-1))==this.getLength()-1&&e>0,i=t<this.getLength()-1,o=n?e-1:e,r=n?this.getLine(o).length:0,a=i?t+1:t,l=i?0:this.getLine(a).length,c=new s(o,r,a,l),h=this.$lines.slice(e,t+1)
return this.applyDelta({start:c.start,end:c.end,action:"remove",lines:this.getLinesForRange(c)}),h},e.prototype.removeNewLine=function(e){e<this.getLength()-1&&e>=0&&this.applyDelta({start:this.pos(e,this.getLine(e).length),end:this.pos(e+1,0),action:"remove",lines:["",""]})},e.prototype.replace=function(e,t){return e instanceof s||(e=s.fromPoints(e.start,e.end)),0===t.length&&e.isEmpty()?e.start:t==this.getTextRange(e)?e.end:(this.remove(e),t?this.insert(e.start,t):e.start)},e.prototype.applyDeltas=function(e){for(var t=0;t<e.length;t++)this.applyDelta(e[t])},e.prototype.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--)this.revertDelta(e[t])},e.prototype.applyDelta=function(e,t){var n="insert"==e.action;(n?e.lines.length<=1&&!e.lines[0]:!s.comparePoints(e.start,e.end))||(n&&e.lines.length>2e4?this.$splitAndapplyLargeDelta(e,2e4):(o(this.$lines,e,t),this._signal("change",e)))},e.prototype.$safeApplyDelta=function(e){var t=this.$lines.length;("remove"==e.action&&e.start.row<t&&e.end.row<t||"insert"==e.action&&e.start.row<=t)&&this.applyDelta(e)},e.prototype.$splitAndapplyLargeDelta=function(e,t){for(var n=e.lines,i=n.length-t+1,o=e.start.row,r=e.start.column,s=0,a=0;s<i;s=a){a+=t-1
var l=n.slice(s,a)
l.push(""),this.applyDelta({start:this.pos(o+s,r),end:this.pos(o+a,r=0),action:e.action,lines:l},!0)}e.lines=n.slice(s),e.start.row=o+s,e.start.column=r,this.applyDelta(e,!0)},e.prototype.revertDelta=function(e){this.$safeApplyDelta({start:this.clonePos(e.start),end:this.clonePos(e.end),action:"insert"==e.action?"remove":"insert",lines:e.lines.slice()})},e.prototype.indexToPosition=function(e,t){for(var n=this.$lines||this.getAllLines(),i=this.getNewLineCharacter().length,o=t||0,r=n.length;o<r;o++)if((e-=n[o].length+i)<0)return{row:o,column:e+n[o].length+i}
return{row:r-1,column:e+n[r-1].length+i}},e.prototype.positionToIndex=function(e,t){for(var n=this.$lines||this.getAllLines(),i=this.getNewLineCharacter().length,o=0,r=Math.min(e.row,n.length),s=t||0;s<r;++s)o+=n[s].length+i
return o+e.column},e.prototype.$split=function(e){return e.split(/\r\n|\r|\n/)},e}()
l.prototype.$autoNewLine="",l.prototype.$newLineMode="auto",i.implement(l.prototype,r),t.Document=l})),ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./lib/event_emitter").EventEmitter,r=function(){function e(e,t){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=e
var n=this
this.$worker=function(){if(n.running){for(var e=new Date,t=n.currentLine,i=-1,o=n.doc,r=t;n.lines[t];)t++
var s=o.getLength(),a=0
for(n.running=!1;t<s;){n.$tokenizeRow(t),i=t
do{t++}while(n.lines[t])
if(++a%5==0&&new Date-e>20){n.running=setTimeout(n.$worker,20)
break}}n.currentLine=t,-1==i&&(i=t),r<=i&&n.fireUpdateEvent(r,i)}}}return e.prototype.setTokenizer=function(e){this.tokenizer=e,this.lines=[],this.states=[],this.start(0)},e.prototype.setDocument=function(e){this.doc=e,this.lines=[],this.states=[],this.stop()},e.prototype.fireUpdateEvent=function(e,t){var n={first:e,last:t}
this._signal("update",{data:n})},e.prototype.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},e.prototype.scheduleStart=function(){this.running||(this.running=setTimeout(this.$worker,700))},e.prototype.$updateOnChange=function(e){var t=e.start.row,n=e.end.row-t
if(0===n)this.lines[t]=null
else if("remove"==e.action)this.lines.splice(t,n+1,null),this.states.splice(t,n+1,null)
else{var i=Array(n+1)
i.unshift(t,1),this.lines.splice.apply(this.lines,i),this.states.splice.apply(this.states,i)}this.currentLine=Math.min(t,this.currentLine,this.doc.getLength()),this.stop()},e.prototype.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},e.prototype.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)},e.prototype.getState=function(e){return this.currentLine==e&&this.$tokenizeRow(e),this.states[e]||"start"},e.prototype.$tokenizeRow=function(e){var t=this.doc.getLine(e),n=this.states[e-1],i=this.tokenizer.getLineTokens(t,n,e)
return this.states[e]+""!=i.state+""?(this.states[e]=i.state,this.lines[e+1]=null,this.currentLine>e+1&&(this.currentLine=e+1)):this.currentLine==e&&(this.currentLine=e+1),this.lines[e]=i.tokens},e.prototype.cleanup=function(){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.removeAllListeners()},e}()
i.implement(r.prototype,o),t.BackgroundTokenizer=r})),ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/range"],(function(e,t,n){"use strict"
var i=e("./lib/lang"),o=e("./range").Range,r=function(){function e(e,t,n){void 0===n&&(n="text"),this.setRegexp(e),this.clazz=t,this.type=n}return e.prototype.setRegexp=function(e){this.regExp+""!=e+""&&(this.regExp=e,this.cache=[])},e.prototype.update=function(e,t,n,r){if(this.regExp)for(var s=r.firstRow,a=r.lastRow,l={},c=s;c<=a;c++){var h=this.cache[c]
null==h&&((h=i.getMatchOffsets(n.getLine(c),this.regExp)).length>this.MAX_RANGES&&(h=h.slice(0,this.MAX_RANGES)),h=h.map((function(e){return new o(c,e.offset,c,e.offset+e.length)})),this.cache[c]=h.length?h:"")
for(var u=h.length;u--;){var d=h[u].toScreenRange(n),g=d.toString()
l[g]||(l[g]=!0,t.drawSingleLineMarker(e,d,this.clazz,r))}}},e}()
r.prototype.MAX_RANGES=500,t.SearchHighlight=r})),ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=e("../range").Range,o=function(){function e(e,t){this.foldData=e,Array.isArray(t)?this.folds=t:t=this.folds=[t]
var n=t[t.length-1]
this.range=new i(t[0].start.row,t[0].start.column,n.end.row,n.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach((function(e){e.setFoldLine(this)}),this)}return e.prototype.shiftRow=function(e){this.start.row+=e,this.end.row+=e,this.folds.forEach((function(t){t.start.row+=e,t.end.row+=e}))},e.prototype.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow)throw new Error("Can't add a fold to this FoldLine as it has no connection")
this.folds.push(e),this.folds.sort((function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)})),this.range.compareEnd(e.start.row,e.start.column)>0?(this.end.row=e.end.row,this.end.column=e.end.column):this.range.compareStart(e.end.row,e.end.column)<0&&(this.start.row=e.start.row,this.start.column=e.start.column)}else if(e.start.row==this.end.row)this.folds.push(e),this.end.row=e.end.row,this.end.column=e.end.column
else{if(e.end.row!=this.start.row)throw new Error("Trying to add fold to FoldRow that doesn't have a matching row")
this.folds.unshift(e),this.start.row=e.start.row,this.start.column=e.start.column}e.foldLine=this},e.prototype.containsRow=function(e){return e>=this.start.row&&e<=this.end.row},e.prototype.walk=function(e,t,n){var i,o,r=0,s=this.folds,a=!0
null==t&&(t=this.end.row,n=this.end.column)
for(var l=0;l<s.length;l++){if(-1==(o=(i=s[l]).range.compareStart(t,n)))return void e(null,t,n,r,a)
if(!e(null,i.start.row,i.start.column,r,a)&&e(i.placeholder,i.start.row,i.start.column,r)||0===o)return
a=!i.sameRow,r=i.end.column}e(null,t,n,r,a)},e.prototype.getNextFoldTo=function(e,t){for(var n,i,o=0;o<this.folds.length;o++){if(-1==(i=(n=this.folds[o]).range.compareEnd(e,t)))return{fold:n,kind:"after"}
if(0===i)return{fold:n,kind:"inside"}}return null},e.prototype.addRemoveChars=function(e,t,n){var i,o,r=this.getNextFoldTo(e,t)
if(r)if(i=r.fold,"inside"==r.kind&&i.start.column!=t&&i.start.row!=e)window.console&&window.console.log(e,t,i)
else if(i.start.row==e){var s=(o=this.folds).indexOf(i)
for(0===s&&(this.start.column+=n);s<o.length;s++){if((i=o[s]).start.column+=n,!i.sameRow)return
i.end.column+=n}this.end.column+=n}},e.prototype.split=function(t,n){var i=this.getNextFoldTo(t,n)
if(!i||"inside"==i.kind)return null
var o=i.fold,r=this.folds,s=this.foldData,a=r.indexOf(o),l=r[a-1]
this.end.row=l.end.row,this.end.column=l.end.column
var c=new e(s,r=r.splice(a,r.length-a))
return s.splice(s.indexOf(this)+1,0,c),c},e.prototype.merge=function(e){for(var t=e.folds,n=0;n<t.length;n++)this.addFold(t[n])
var i=this.foldData
i.splice(i.indexOf(e),1)},e.prototype.toString=function(){var e=[this.range.toString()+": ["]
return this.folds.forEach((function(t){e.push("  "+t.toString())})),e.push("]"),e.join("\n")},e.prototype.idxToPosition=function(e){for(var t=0,n=0;n<this.folds.length;n++){var i=this.folds[n]
if((e-=i.start.column-t)<0)return{row:i.start.row,column:i.start.column+e}
if((e-=i.placeholder.length)<0)return i.start
t=i.end.column}return{row:this.end.row,column:this.end.column+e}},e}()
t.FoldLine=o})),ace.define("ace/range_list",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=e("./range").Range.comparePoints,o=function(){function e(){this.ranges=[],this.$bias=1}return e.prototype.pointIndex=function(e,t,n){for(var o=this.ranges,r=n||0;r<o.length;r++){var s=o[r],a=i(e,s.end)
if(!(a>0)){var l=i(e,s.start)
return 0===a?t&&0!==l?-r-2:r:l>0||0===l&&!t?r:-r-1}}return-r-1},e.prototype.add=function(e){var t=!e.isEmpty(),n=this.pointIndex(e.start,t)
n<0&&(n=-n-1)
var i=this.pointIndex(e.end,t,n)
return i<0?i=-i-1:i++,this.ranges.splice(n,i-n,e)},e.prototype.addList=function(e){for(var t=[],n=e.length;n--;)t.push.apply(t,this.add(e[n]))
return t},e.prototype.substractPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges.splice(t,1)},e.prototype.merge=function(){for(var e,t=[],n=this.ranges,o=(n=n.sort((function(e,t){return i(e.start,t.start)})))[0],r=1;r<n.length;r++){e=o,o=n[r]
var s=i(e.end,o.start)
s<0||(0!=s||e.isEmpty()||o.isEmpty())&&(i(e.end,o.end)<0&&(e.end.row=o.end.row,e.end.column=o.end.column),n.splice(r,1),t.push(o),o=e,r--)}return this.ranges=n,t},e.prototype.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0},e.prototype.containsPoint=function(e){return this.pointIndex(e)>=0},e.prototype.rangeAtPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges[t]},e.prototype.clipRows=function(e,t){var n=this.ranges
if(n[0].start.row>t||n[n.length-1].start.row<e)return[]
var i=this.pointIndex({row:e,column:0})
i<0&&(i=-i-1)
var o=this.pointIndex({row:t,column:0},i)
o<0&&(o=-o-1)
for(var r=[],s=i;s<o;s++)r.push(n[s])
return r},e.prototype.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},e.prototype.attach=function(e){this.session&&this.detach(),this.session=e,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},e.prototype.detach=function(){this.session&&(this.session.removeListener("change",this.onChange),this.session=null)},e.prototype.$onChange=function(e){for(var t=e.start,n=e.end,i=t.row,o=n.row,r=this.ranges,s=0,a=r.length;s<a&&!((h=r[s]).end.row>=i);s++);if("insert"==e.action){for(var l=o-i,c=-t.column+n.column;s<a&&!((h=r[s]).start.row>i);s++)if(h.start.row==i&&h.start.column>=t.column&&(h.start.column==t.column&&this.$bias<=0||(h.start.column+=c,h.start.row+=l)),h.end.row==i&&h.end.column>=t.column){if(h.end.column==t.column&&this.$bias<0)continue
h.end.column==t.column&&c>0&&s<a-1&&h.end.column>h.start.column&&h.end.column==r[s+1].start.column&&(h.end.column-=c),h.end.column+=c,h.end.row+=l}}else for(l=i-o,c=t.column-n.column;s<a&&!((h=r[s]).start.row>o);s++)h.end.row<o&&(i<h.end.row||i==h.end.row&&t.column<h.end.column)?(h.end.row=i,h.end.column=t.column):h.end.row==o?h.end.column<=n.column?(l||h.end.column>t.column)&&(h.end.column=t.column,h.end.row=t.row):(h.end.column+=c,h.end.row+=l):h.end.row>o&&(h.end.row+=l),h.start.row<o&&(i<h.start.row||i==h.start.row&&t.column<h.start.column)?(h.start.row=i,h.start.column=t.column):h.start.row==o?h.start.column<=n.column?(l||h.start.column>t.column)&&(h.start.column=t.column,h.start.row=t.row):(h.start.column+=c,h.start.row+=l):h.start.row>o&&(h.start.row+=l)
if(0!=l&&s<a)for(;s<a;s++){var h;(h=r[s]).start.row+=l,h.end.row+=l}},e}()
o.prototype.comparePoints=i,t.RangeList=o})),ace.define("ace/edit_session/fold",["require","exports","module","ace/range_list"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=function(e){function t(t,n){var i=e.call(this)||this
return i.foldLine=null,i.placeholder=n,i.range=t,i.start=t.start,i.end=t.end,i.sameRow=t.start.row==t.end.row,i.subFolds=i.ranges=[],i}return o(t,e),t.prototype.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},t.prototype.setFoldLine=function(e){this.foldLine=e,this.subFolds.forEach((function(t){t.setFoldLine(e)}))},t.prototype.clone=function(){var e=new t(this.range.clone(),this.placeholder)
return this.subFolds.forEach((function(t){e.subFolds.push(t.clone())})),e.collapseChildren=this.collapseChildren,e},t.prototype.addSubFold=function(e){if(!this.range.isEqual(e)){var t,n
t=e,n=this.start,s(t.start,n),s(t.end,n)
for(var i=e.start.row,o=e.start.column,r=0,a=-1;r<this.subFolds.length&&1==(a=this.subFolds[r].range.compare(i,o));r++);var l=this.subFolds[r],c=0
if(0==a){if(l.range.containsRange(e))return l.addSubFold(e)
c=1}i=e.range.end.row,o=e.range.end.column
var h=r
for(a=-1;h<this.subFolds.length&&1==(a=this.subFolds[h].range.compare(i,o));h++);0==a&&h++
for(var u=this.subFolds.splice(r,h-r,e),d=0==a?u.length-1:u.length,g=c;g<d;g++)e.addSubFold(u[g])
return e.setFoldLine(this.foldLine),e}},t.prototype.restoreRange=function(e){return function(e,t){a(e.start,t),a(e.end,t)}(e,this.start)},t}(e("../range_list").RangeList)
function s(e,t){e.row-=t.row,0==e.row&&(e.column-=t.column)}function a(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row}t.Fold=r})),ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator","ace/mouse/mouse_event"],(function(e,t,n){"use strict"
var i=e("../range").Range,o=e("./fold_line").FoldLine,r=e("./fold").Fold,s=e("../token_iterator").TokenIterator,a=e("../mouse/mouse_event").MouseEvent
t.Folding=function(){this.getFoldAt=function(e,t,n){var i=this.getFoldLine(e)
if(!i)return null
for(var o=i.folds,r=0;r<o.length;r++){var s=o[r].range
if(s.contains(e,t)){if(1==n&&s.isEnd(e,t)&&!s.isEmpty())continue
if(-1==n&&s.isStart(e,t)&&!s.isEmpty())continue
return o[r]}}},this.getFoldsInRange=function(e){var t=e.start,n=e.end,i=this.$foldData,o=[]
t.column+=1,n.column-=1
for(var r=0;r<i.length;r++){var s=i[r].range.compareRange(e)
if(2!=s){if(-2==s)break
for(var a=i[r].folds,l=0;l<a.length;l++){var c=a[l]
if(-2==(s=c.range.compareRange(e)))break
if(2!=s){if(42==s)break
o.push(c)}}}}return t.column-=1,n.column+=1,o},this.getFoldsInRangeList=function(e){if(Array.isArray(e)){var t=[]
e.forEach((function(e){t=t.concat(this.getFoldsInRange(e))}),this)}else t=this.getFoldsInRange(e)
return t},this.getAllFolds=function(){for(var e=[],t=this.$foldData,n=0;n<t.length;n++)for(var i=0;i<t[n].folds.length;i++)e.push(t[n].folds[i])
return e},this.getFoldStringAt=function(e,t,n,i){if(!(i=i||this.getFoldLine(e)))return null
for(var o,r,s={end:{column:0}},a=0;a<i.folds.length;a++){var l=(r=i.folds[a]).range.compareEnd(e,t)
if(-1==l){o=this.getLine(r.start.row).substring(s.end.column,r.start.column)
break}if(0===l)return null
s=r}return o||(o=this.getLine(r.start.row).substring(s.end.column)),-1==n?o.substring(0,t-s.end.column):1==n?o.substring(t-s.end.column):o},this.getFoldLine=function(e,t){var n=this.$foldData,i=0
for(t&&(i=n.indexOf(t)),-1==i&&(i=0);i<n.length;i++){var o=n[i]
if(o.start.row<=e&&o.end.row>=e)return o
if(o.end.row>e)return null}return null},this.getNextFoldLine=function(e,t){var n=this.$foldData,i=0
for(t&&(i=n.indexOf(t)),-1==i&&(i=0);i<n.length;i++){var o=n[i]
if(o.end.row>=e)return o}return null},this.getFoldedRowCount=function(e,t){for(var n=this.$foldData,i=t-e+1,o=0;o<n.length;o++){var r=n[o],s=r.end.row,a=r.start.row
if(s>=t){a<t&&(a>=e?i-=t-a:i=0)
break}s>=e&&(i-=a>=e?s-a:s-e+1)}return i},this.$addFoldLine=function(e){return this.$foldData.push(e),this.$foldData.sort((function(e,t){return e.start.row-t.start.row})),e},this.addFold=function(e,t){var n,i=this.$foldData,s=!1
e instanceof r?n=e:(n=new r(t,e)).collapseChildren=t.collapseChildren,this.$clipRangeToDocument(n.range)
var a=n.start.row,l=n.start.column,c=n.end.row,h=n.end.column,u=this.getFoldAt(a,l,1),d=this.getFoldAt(c,h,-1)
if(u&&d==u)return u.addSubFold(n)
u&&!u.range.isStart(a,l)&&this.removeFold(u),d&&!d.range.isEnd(c,h)&&this.removeFold(d)
var g=this.getFoldsInRange(n.range)
g.length>0&&(this.removeFolds(g),n.collapseChildren||g.forEach((function(e){n.addSubFold(e)})))
for(var p=0;p<i.length;p++){var f=i[p]
if(c==f.start.row){f.addFold(n),s=!0
break}if(a==f.end.row){if(f.addFold(n),s=!0,!n.sameRow){var m=i[p+1]
if(m&&m.start.row==c){f.merge(m)
break}}break}if(c<=f.start.row)break}return s||(f=this.$addFoldLine(new o(this.$foldData,n))),this.$useWrapMode?this.$updateWrapData(f.start.row,f.start.row):this.$updateRowLengthCache(f.start.row,f.start.row),this.$modified=!0,this._signal("changeFold",{data:n,action:"add"}),n},this.addFolds=function(e){e.forEach((function(e){this.addFold(e)}),this)},this.removeFold=function(e){var t=e.foldLine,n=t.start.row,i=t.end.row,o=this.$foldData,r=t.folds
if(1==r.length)o.splice(o.indexOf(t),1)
else if(t.range.isEnd(e.end.row,e.end.column))r.pop(),t.end.row=r[r.length-1].end.row,t.end.column=r[r.length-1].end.column
else if(t.range.isStart(e.start.row,e.start.column))r.shift(),t.start.row=r[0].start.row,t.start.column=r[0].start.column
else if(e.sameRow)r.splice(r.indexOf(e),1)
else{var s=t.split(e.start.row,e.start.column);(r=s.folds).shift(),s.start.row=r[0].start.row,s.start.column=r[0].start.column}this.$updating||(this.$useWrapMode?this.$updateWrapData(n,i):this.$updateRowLengthCache(n,i)),this.$modified=!0,this._signal("changeFold",{data:e,action:"remove"})},this.removeFolds=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n])
t.forEach((function(e){this.removeFold(e)}),this),this.$modified=!0},this.expandFold=function(e){this.removeFold(e),e.subFolds.forEach((function(t){e.restoreRange(t),this.addFold(t)}),this),e.collapseChildren>0&&this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1),e.subFolds=[]},this.expandFolds=function(e){e.forEach((function(e){this.expandFold(e)}),this)},this.unfold=function(e,t){var n,o
if(null==e)n=new i(0,0,this.getLength(),0),null==t&&(t=!0)
else if("number"==typeof e)n=new i(e,0,e,this.getLine(e).length)
else if("row"in e)n=i.fromPoints(e,e)
else{if(Array.isArray(e))return o=[],e.forEach((function(e){o=o.concat(this.unfold(e))}),this),o
n=e}for(var r=o=this.getFoldsInRangeList(n);1==o.length&&i.comparePoints(o[0].start,n.start)<0&&i.comparePoints(o[0].end,n.end)>0;)this.expandFolds(o),o=this.getFoldsInRangeList(n)
if(0!=t?this.removeFolds(o):this.expandFolds(o),r.length)return r},this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)},this.getRowFoldEnd=function(e,t){var n=this.getFoldLine(e,t)
return n?n.end.row:e},this.getRowFoldStart=function(e,t){var n=this.getFoldLine(e,t)
return n?n.start.row:e},this.getFoldDisplayLine=function(e,t,n,i,o){null==i&&(i=e.start.row),null==o&&(o=0),null==t&&(t=e.end.row),null==n&&(n=this.getLine(t).length)
var r=this.doc,s=""
return e.walk((function(e,t,n,a){if(!(t<i)){if(t==i){if(n<o)return
a=Math.max(o,a)}s+=null!=e?e:r.getLine(t).substring(a,n)}}),t,n),s},this.getDisplayLine=function(e,t,n,i){var o,r=this.getFoldLine(e)
return r?this.getFoldDisplayLine(r,e,t,n,i):(o=this.doc.getLine(e)).substring(i||0,t||o.length)},this.$cloneFoldData=function(){var e=[]
return e=this.$foldData.map((function(t){var n=t.folds.map((function(e){return e.clone()}))
return new o(e,n)}))},this.toggleFold=function(e){var t,n,i=this.selection.getRange()
if(i.isEmpty()){var o=i.start
if(t=this.getFoldAt(o.row,o.column))return void this.expandFold(t);(n=this.findMatchingBracket(o))?1==i.comparePoint(n)?i.end=n:(i.start=n,i.start.column++,i.end.column--):(n=this.findMatchingBracket({row:o.row,column:o.column+1}))?(1==i.comparePoint(n)?i.end=n:i.start=n,i.start.column++):i=this.getCommentFoldRange(o.row,o.column)||i}else{var r=this.getFoldsInRange(i)
if(e&&r.length)return void this.expandFolds(r)
1==r.length&&(t=r[0])}if(t||(t=this.getFoldAt(i.start.row,i.start.column)),t&&t.range.toString()==i.toString())this.expandFold(t)
else{var s="..."
if(!i.isMultiLine()){if((s=this.getTextRange(i)).length<4)return
s=s.trim().substring(0,2)+".."}this.addFold(s,i)}},this.getCommentFoldRange=function(e,t,n){var o=new s(this,e,t),r=o.getCurrentToken(),a=r&&r.type
if(r&&/^comment|string/.test(a)){"comment"==(a=a.match(/comment|string/)[0])&&(a+="|doc-start|\\.doc")
var l=new RegExp(a),c=new i
if(1!=n){do{r=o.stepBackward()}while(r&&l.test(r.type)&&!/^comment.end/.test(r.type))
r=o.stepForward()}if(c.start.row=o.getCurrentTokenRow(),c.start.column=o.getCurrentTokenColumn()+(/^comment.start/.test(r.type)?r.value.length:2),o=new s(this,e,t),-1!=n){var h=-1
do{if(r=o.stepForward(),-1==h){var u=this.getState(o.$row)
l.test(u)||(h=o.$row)}else if(o.$row>h)break}while(r&&l.test(r.type)&&!/^comment.start/.test(r.type))
r=o.stepBackward()}else r=o.getCurrentToken()
return c.end.row=o.getCurrentTokenRow(),c.end.column=o.getCurrentTokenColumn(),/^comment.end/.test(r.type)||(c.end.column+=r.value.length-2),c}},this.foldAll=function(e,t,n,i){null==n&&(n=1e5)
var o=this.foldWidgets
if(o){t=t||this.getLength()
for(var r=e=e||0;r<t;r++)if(null==o[r]&&(o[r]=this.getFoldWidget(r)),"start"==o[r]&&(!i||i(r))){var s=this.getFoldWidgetRange(r)
s&&s.isMultiLine()&&s.end.row<=t&&s.start.row>=e&&(r=s.end.row,s.collapseChildren=n,this.addFold("...",s))}}},this.foldToLevel=function(e){for(this.foldAll();e-- >0;)this.unfold(null,!1)},this.foldAllComments=function(){var e=this
this.foldAll(null,null,null,(function(t){for(var n=e.getTokens(t),i=0;i<n.length;i++){var o=n[i]
if("text"!=o.type||!/^\s+$/.test(o.value))return!!/comment/.test(o.type)}}))},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]")
if(this.$foldStyle!=e){this.$foldStyle=e,"manual"==e&&this.unfold()
var t=this.$foldMode
this.$setFolding(null),this.$setFolding(t)}},this.$setFolding=function(e){this.$foldMode!=e&&(this.$foldMode=e,this.off("change",this.$updateFoldWidgets),this.off("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets),this._signal("changeAnnotation"),e&&"manual"!=this.$foldStyle?(this.foldWidgets=[],this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle),this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.$tokenizerUpdateFoldWidgets=this.tokenizerUpdateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets),this.on("tokenizerUpdate",this.$tokenizerUpdateFoldWidgets)):this.foldWidgets=null)},this.getParentFoldRangeData=function(e,t){var n=this.foldWidgets
if(!n||t&&n[e])return{}
for(var i,o=e-1;o>=0;){var r=n[o]
if(null==r&&(r=n[o]=this.getFoldWidget(o)),"start"==r){var s=this.getFoldWidgetRange(o)
if(i||(i=s),s&&s.end.row>=e)break}o--}return{range:-1!==o&&s,firstRange:i}},this.onFoldWidgetClick=function(e,t){t instanceof a&&(t=t.domEvent)
var n={children:t.shiftKey,all:t.ctrlKey||t.metaKey,siblings:t.altKey}
if(!this.$toggleFoldWidget(e,n)){var i=t.target||t.srcElement
i&&/ace_fold-widget/.test(i.className)&&(i.className+=" ace_invalid")}},this.$toggleFoldWidget=function(e,t){if(this.getFoldWidget){var n=this.getFoldWidget(e),i=this.getLine(e),o="end"===n?-1:1,r=this.getFoldAt(e,-1===o?0:i.length,o)
if(r)return t.children||t.all?this.removeFold(r):this.expandFold(r),r
var s=this.getFoldWidgetRange(e,!0)
if(s&&!s.isMultiLine()&&(r=this.getFoldAt(s.start.row,s.start.column,1))&&s.isEqual(r.range))return this.removeFold(r),r
if(t.siblings){var a=this.getParentFoldRangeData(e)
if(a.range)var l=a.range.start.row+1,c=a.range.end.row
this.foldAll(l,c,t.all?1e4:0)}else t.children?(c=s?s.end.row:this.getLength(),this.foldAll(e+1,c,t.all?1e4:0)):s&&(t.all&&(s.collapseChildren=1e4),this.addFold("...",s))
return s}},this.toggleFoldWidget=function(e){var t=this.selection.getCursor().row
t=this.getRowFoldStart(t)
var n=this.$toggleFoldWidget(t,{})
if(!n){var i=this.getParentFoldRangeData(t,!0)
if(n=i.range||i.firstRange){t=n.start.row
var o=this.getFoldAt(t,this.getLine(t).length,1)
o?this.removeFold(o):this.addFold("...",n)}}},this.updateFoldWidgets=function(e){var t=e.start.row,n=e.end.row-t
if(0===n)this.foldWidgets[t]=null
else if("remove"==e.action)this.foldWidgets.splice(t,n+1,null)
else{var i=Array(n+1)
i.unshift(t,1),this.foldWidgets.splice.apply(this.foldWidgets,i)}},this.tokenizerUpdateFoldWidgets=function(e){var t=e.data
t.first!=t.last&&this.foldWidgets.length>t.first&&this.foldWidgets.splice(t.first,this.foldWidgets.length)}}})),ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],(function(e,t,n){"use strict"
var i=e("../token_iterator").TokenIterator,o=e("../range").Range
t.BracketMatch=function(){this.findMatchingBracket=function(e,t){if(0==e.column)return null
var n=t||this.getLine(e.row).charAt(e.column-1)
if(""==n)return null
var i=n.match(/([\(\[\{])|([\)\]\}])/)
return i?i[1]?this.$findClosingBracket(i[1],e):this.$findOpeningBracket(i[2],e):null},this.getBracketRange=function(e){var t,n=this.getLine(e.row),i=!0,r=n.charAt(e.column-1),s=r&&r.match(/([\(\[\{])|([\)\]\}])/)
if(s||(r=n.charAt(e.column),e={row:e.row,column:e.column+1},s=r&&r.match(/([\(\[\{])|([\)\]\}])/),i=!1),!s)return null
if(s[1]){if(!(a=this.$findClosingBracket(s[1],e)))return null
t=o.fromPoints(e,a),i||(t.end.column++,t.start.column--),t.cursor=t.end}else{var a
if(!(a=this.$findOpeningBracket(s[2],e)))return null
t=o.fromPoints(a,e),i||(t.start.column++,t.end.column--),t.cursor=t.start}return t},this.getMatchingBracketRanges=function(e,t){var n=this.getLine(e.row),i=/([\(\[\{])|([\)\]\}])/,r=!t&&n.charAt(e.column-1),s=r&&r.match(i)
if(s||(r=(void 0===t||t)&&n.charAt(e.column),e={row:e.row,column:e.column+1},s=r&&r.match(i)),!s)return null
var a=new o(e.row,e.column-1,e.row,e.column),l=s[1]?this.$findClosingBracket(s[1],e):this.$findOpeningBracket(s[2],e)
return l?[a,new o(l.row,l.column,l.row,l.column+1)]:[a]},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{","<":">",">":"<"},this.$findOpeningBracket=function(e,t,n){var o=this.$brackets[e],r=1,s=new i(this,t.row,t.column),a=s.getCurrentToken()
if(a||(a=s.stepForward()),a){n||(n=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("rparen",".paren").replace(/\b(?:end)\b/,"(?:start|begin|end)").replace(/-close\b/,"-(close|open)")+")+"))
for(var l=t.column-s.getCurrentTokenColumn()-2,c=a.value;;){for(;l>=0;){var h=c.charAt(l)
if(h==o){if(0==(r-=1))return{row:s.getCurrentTokenRow(),column:l+s.getCurrentTokenColumn()}}else h==e&&(r+=1)
l-=1}do{a=s.stepBackward()}while(a&&!n.test(a.type))
if(null==a)break
l=(c=a.value).length-1}return null}},this.$findClosingBracket=function(e,t,n){var o=this.$brackets[e],r=1,s=new i(this,t.row,t.column),a=s.getCurrentToken()
if(a||(a=s.stepForward()),a){n||(n=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("lparen",".paren").replace(/\b(?:start|begin)\b/,"(?:start|begin|end)").replace(/-open\b/,"-(close|open)")+")+"))
for(var l=t.column-s.getCurrentTokenColumn();;){for(var c=a.value,h=c.length;l<h;){var u=c.charAt(l)
if(u==o){if(0==(r-=1))return{row:s.getCurrentTokenRow(),column:l+s.getCurrentTokenColumn()}}else u==e&&(r+=1)
l+=1}do{a=s.stepForward()}while(a&&!n.test(a.type))
if(null==a)break
l=0}return null}},this.getMatchingTags=function(e){var t=new i(this,e.row,e.column),n=this.$findTagName(t)
if(n)return"<"===t.stepBackward().value?this.$findClosingTag(t,n):this.$findOpeningTag(t,n)},this.$findTagName=function(e){var t=e.getCurrentToken(),n=!1,i=!1
if(t&&-1===t.type.indexOf("tag-name"))do{(t=i?e.stepBackward():e.stepForward())&&("/>"===t.value?i=!0:-1!==t.type.indexOf("tag-name")&&(n=!0))}while(t&&!n)
return t},this.$findClosingTag=function(e,t){var n,i=t.value,r=t.value,s=0,a=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
t=e.stepForward()
var l=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length),c=!1
do{if(n=t,t=e.stepForward()){if(">"===t.value&&!c){var h=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
c=!0}if(-1!==t.type.indexOf("tag-name")){if(r===(i=t.value))if("<"===n.value)s++
else if("</"===n.value&&--s<0){e.stepBackward()
var u=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2)
t=e.stepForward()
var d=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length)
if(!(t=e.stepForward())||">"!==t.value)return
var g=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}else r===i&&"/>"===t.value&&--s<0&&(g=d=u=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+2),h=new o(l.end.row,l.end.column,l.end.row,l.end.column+1))}}while(t&&s>=0)
if(a&&h&&u&&g&&l&&d)return{openTag:new o(a.start.row,a.start.column,h.end.row,h.end.column),closeTag:new o(u.start.row,u.start.column,g.end.row,g.end.column),openTagName:l,closeTagName:d}},this.$findOpeningTag=function(e,t){var n=e.getCurrentToken(),i=t.value,r=0,s=e.getCurrentTokenRow(),a=e.getCurrentTokenColumn(),l=a+2,c=new o(s,a,s,l)
e.stepForward()
var h=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+t.value.length)
if((t=e.stepForward())&&">"===t.value){var u=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
e.stepBackward(),e.stepBackward()
do{if(t=n,s=e.getCurrentTokenRow(),l=(a=e.getCurrentTokenColumn())+t.value.length,n=e.stepBackward(),t)if(-1!==t.type.indexOf("tag-name")){if(i===t.value)if("<"===n.value){if(++r>0){var d=new o(s,a,s,l),g=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)
do{t=e.stepForward()}while(t&&">"!==t.value)
var p=new o(e.getCurrentTokenRow(),e.getCurrentTokenColumn(),e.getCurrentTokenRow(),e.getCurrentTokenColumn()+1)}}else"</"===n.value&&r--}else if("/>"===t.value){for(var f=0,m=n;m;){if(-1!==m.type.indexOf("tag-name")&&m.value===i){r--
break}if("<"===m.value)break
m=e.stepBackward(),f++}for(var v=0;v<f;v++)e.stepForward()}}while(n&&r<=0)
return g&&p&&c&&u&&d&&h?{openTag:new o(g.start.row,g.start.column,p.end.row,p.end.column),closeTag:new o(c.start.row,c.start.column,u.end.row,u.end.column),openTagName:d,closeTagName:h}:void 0}}}})),ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/bidihandler","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./lib/lang"),r=e("./bidihandler").BidiHandler,s=e("./config"),a=e("./lib/event_emitter").EventEmitter,l=e("./selection").Selection,c=e("./mode/text").Mode,h=e("./range").Range,u=e("./document").Document,d=e("./background_tokenizer").BackgroundTokenizer,g=e("./search_highlight").SearchHighlight,p=function(){function e(t,n){this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$undoSelect=!0,this.$foldData=[],this.id="session"+ ++e.$uid,this.$foldData.toString=function(){return this.join("\n")},this.bgTokenizer=new d((new c).getTokenizer(),this)
var i=this
this.bgTokenizer.on("update",(function(e){i._signal("tokenizerUpdate",e)})),this.on("changeFold",this.onChangeFold.bind(this)),this.$onChange=this.onChange.bind(this),"object"==typeof t&&t.getLine||(t=new u(t)),this.setDocument(t),this.selection=new l(this),this.$bidiHandler=new r(this),s.resetOptions(this),this.setMode(n),s._signal("session",this),this.destroyed=!1}return e.prototype.setDocument=function(e){this.doc&&this.doc.off("change",this.$onChange),this.doc=e,e.on("change",this.$onChange,!0),this.bgTokenizer.setDocument(this.getDocument()),this.resetCaches()},e.prototype.getDocument=function(){return this.doc},e.prototype.$resetRowCache=function(e){if(!e)return this.$docRowCache=[],void(this.$screenRowCache=[])
var t=this.$docRowCache.length,n=this.$getRowCacheIndex(this.$docRowCache,e)+1
t>n&&(this.$docRowCache.splice(n,t),this.$screenRowCache.splice(n,t))},e.prototype.$getRowCacheIndex=function(e,t){for(var n=0,i=e.length-1;n<=i;){var o=n+i>>1,r=e[o]
if(t>r)n=o+1
else{if(!(t<r))return o
i=o-1}}return n-1},e.prototype.resetCaches=function(){this.$modified=!0,this.$wrapData=[],this.$rowLengthCache=[],this.$resetRowCache(0),this.destroyed||this.bgTokenizer.start(0)},e.prototype.onChangeFold=function(e){var t=e.data
this.$resetRowCache(t.start.row)},e.prototype.onChange=function(e){this.$modified=!0,this.$bidiHandler.onChange(e),this.$resetRowCache(e.start.row)
var t=this.$updateInternalDataOnChange(e)
!this.$fromUndo&&this.$undoManager&&(t&&t.length&&(this.$undoManager.add({action:"removeFolds",folds:t},this.mergeUndoDeltas),this.mergeUndoDeltas=!0),this.$undoManager.add(e,this.mergeUndoDeltas),this.mergeUndoDeltas=!0,this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(e),this._signal("change",e)},e.prototype.setValue=function(e){this.doc.setValue(e),this.selection.moveTo(0,0),this.$resetRowCache(0),this.setUndoManager(this.$undoManager),this.getUndoManager().reset()},e.prototype.toString=function(){return this.doc.getValue()},e.prototype.getSelection=function(){return this.selection},e.prototype.getState=function(e){return this.bgTokenizer.getState(e)},e.prototype.getTokens=function(e){return this.bgTokenizer.getTokens(e)},e.prototype.getTokenAt=function(e,t){var n,i=this.bgTokenizer.getTokens(e),o=0
if(null==t){var r=i.length-1
o=this.getLine(e).length}else for(r=0;r<i.length&&!((o+=i[r].value.length)>=t);r++);return(n=i[r])?(n.index=r,n.start=o-n.value.length,n):null},e.prototype.setUndoManager=function(e){if(this.$undoManager=e,this.$informUndoManager&&this.$informUndoManager.cancel(),e){var t=this
e.addSession(this),this.$syncInformUndoManager=function(){t.$informUndoManager.cancel(),t.mergeUndoDeltas=!1},this.$informUndoManager=o.delayedCall(this.$syncInformUndoManager)}else this.$syncInformUndoManager=function(){}},e.prototype.markUndoGroup=function(){this.$syncInformUndoManager&&this.$syncInformUndoManager()},e.prototype.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},e.prototype.getTabString=function(){return this.getUseSoftTabs()?o.stringRepeat(" ",this.getTabSize()):"\t"},e.prototype.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)},e.prototype.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs},e.prototype.setTabSize=function(e){this.setOption("tabSize",e)},e.prototype.getTabSize=function(){return this.$tabSize},e.prototype.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize==0},e.prototype.setNavigateWithinSoftTabs=function(e){this.setOption("navigateWithinSoftTabs",e)},e.prototype.getNavigateWithinSoftTabs=function(){return this.$navigateWithinSoftTabs},e.prototype.setOverwrite=function(e){this.setOption("overwrite",e)},e.prototype.getOverwrite=function(){return this.$overwrite},e.prototype.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},e.prototype.addGutterDecoration=function(e,t){this.$decorations[e]||(this.$decorations[e]=""),this.$decorations[e]+=" "+t,this._signal("changeBreakpoint",{})},e.prototype.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,""),this._signal("changeBreakpoint",{})},e.prototype.getBreakpoints=function(){return this.$breakpoints},e.prototype.setBreakpoints=function(e){this.$breakpoints=[]
for(var t=0;t<e.length;t++)this.$breakpoints[e[t]]="ace_breakpoint"
this._signal("changeBreakpoint",{})},e.prototype.clearBreakpoints=function(){this.$breakpoints=[],this._signal("changeBreakpoint",{})},e.prototype.setBreakpoint=function(e,t){void 0===t&&(t="ace_breakpoint"),t?this.$breakpoints[e]=t:delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},e.prototype.clearBreakpoint=function(e){delete this.$breakpoints[e],this._signal("changeBreakpoint",{})},e.prototype.addMarker=function(e,t,n,i){var o=this.$markerId++,r={range:e,type:n||"line",renderer:"function"==typeof n?n:null,clazz:t,inFront:!!i,id:o}
return i?(this.$frontMarkers[o]=r,this._signal("changeFrontMarker")):(this.$backMarkers[o]=r,this._signal("changeBackMarker")),o},e.prototype.addDynamicMarker=function(e,t){if(e.update){var n=this.$markerId++
return e.id=n,e.inFront=!!t,t?(this.$frontMarkers[n]=e,this._signal("changeFrontMarker")):(this.$backMarkers[n]=e,this._signal("changeBackMarker")),e}},e.prototype.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e]
t&&(delete(t.inFront?this.$frontMarkers:this.$backMarkers)[e],this._signal(t.inFront?"changeFrontMarker":"changeBackMarker"))},e.prototype.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers},e.prototype.highlight=function(e){if(!this.$searchHighlight){var t=new g(null,"ace_selected-word","text")
this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)},e.prototype.highlightLines=function(e,t,n,i){"number"!=typeof t&&(n=t,t=e),n||(n="ace_step")
var o=new h(e,0,t,1/0)
return o.id=this.addMarker(o,n,"fullLine",i),o},e.prototype.setAnnotations=function(e){this.$annotations=e,this._signal("changeAnnotation",{})},e.prototype.getAnnotations=function(){return this.$annotations||[]},e.prototype.clearAnnotations=function(){this.setAnnotations([])},e.prototype.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m)
this.$autoNewLine=t?t[1]:"\n"},e.prototype.getWordRange=function(e,t){var n=this.getLine(e),i=!1
if(t>0&&(i=!!n.charAt(t-1).match(this.tokenRe)),i||(i=!!n.charAt(t).match(this.tokenRe)),i)var o=this.tokenRe
else o=/^\s+$/.test(n.slice(t-1,t+1))?/\s/:this.nonTokenRe
var r=t
if(r>0){do{r--}while(r>=0&&n.charAt(r).match(o))
r++}for(var s=t;s<n.length&&n.charAt(s).match(o);)s++
return new h(e,r,e,s)},e.prototype.getAWordRange=function(e,t){for(var n=this.getWordRange(e,t),i=this.getLine(n.end.row);i.charAt(n.end.column).match(/[ \t]/);)n.end.column+=1
return n},e.prototype.setNewLineMode=function(e){this.doc.setNewLineMode(e)},e.prototype.getNewLineMode=function(){return this.doc.getNewLineMode()},e.prototype.setUseWorker=function(e){this.setOption("useWorker",e)},e.prototype.getUseWorker=function(){return this.$useWorker},e.prototype.onReloadTokenizer=function(e){var t=e.data
this.bgTokenizer.start(t.first),this._signal("tokenizerUpdate",e)},e.prototype.setMode=function(e,t){if(e&&"object"==typeof e){if(e.getTokenizer)return this.$onChangeMode(e)
var n=e,i=n.path}else i=e||"ace/mode/text"
if(this.$modes["ace/mode/text"]||(this.$modes["ace/mode/text"]=new c),this.$modes[i]&&!n)return this.$onChangeMode(this.$modes[i]),void(t&&t())
this.$modeId=i,s.loadModule(["mode",i],function(e){if(this.$modeId!==i)return t&&t()
this.$modes[i]&&!n?this.$onChangeMode(this.$modes[i]):e&&e.Mode&&(e=new e.Mode(n),n||(this.$modes[i]=e,e.$id=i),this.$onChangeMode(e)),t&&t()}.bind(this)),this.$mode||this.$onChangeMode(this.$modes["ace/mode/text"],!0)},e.prototype.$onChangeMode=function(e,t){if(t||(this.$modeId=e.$id),this.$mode!==e){var n=this.$mode
this.$mode=e,this.$stopWorker(),this.$useWorker&&this.$startWorker()
var i=e.getTokenizer()
if(void 0!==i.on){var o=this.onReloadTokenizer.bind(this)
i.on("update",o)}this.bgTokenizer.setTokenizer(i),this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=e.tokenRe,this.nonTokenRe=e.nonTokenRe,t||(e.attachToSession&&e.attachToSession(this),this.$options.wrapMethod.set.call(this,this.$wrapMethod),this.$setFolding(e.foldingRules),this.bgTokenizer.start(0),this._emit("changeMode",{oldMode:n,mode:e}))}},e.prototype.$stopWorker=function(){this.$worker&&(this.$worker.terminate(),this.$worker=null)},e.prototype.$startWorker=function(){try{this.$worker=this.$mode.createWorker(this)}catch(e){s.warn("Could not load worker",e),this.$worker=null}},e.prototype.getMode=function(){return this.$mode},e.prototype.setScrollTop=function(e){this.$scrollTop===e||isNaN(e)||(this.$scrollTop=e,this._signal("changeScrollTop",e))},e.prototype.getScrollTop=function(){return this.$scrollTop},e.prototype.setScrollLeft=function(e){this.$scrollLeft===e||isNaN(e)||(this.$scrollLeft=e,this._signal("changeScrollLeft",e))},e.prototype.getScrollLeft=function(){return this.$scrollLeft},e.prototype.getScreenWidth=function(){return this.$computeWidth(),this.lineWidgets?Math.max(this.getLineWidgetMaxWidth(),this.screenWidth):this.screenWidth},e.prototype.getLineWidgetMaxWidth=function(){if(null!=this.lineWidgetsWidth)return this.lineWidgetsWidth
var e=0
return this.lineWidgets.forEach((function(t){t&&t.screenWidth>e&&(e=t.screenWidth)})),this.lineWidgetWidth=e},e.prototype.$computeWidth=function(e){if(this.$modified||e){if(this.$modified=!1,this.$useWrapMode)return this.screenWidth=this.$wrapLimit
for(var t=this.doc.getAllLines(),n=this.$rowLengthCache,i=0,o=0,r=this.$foldData[o],s=r?r.start.row:1/0,a=t.length,l=0;l<a;l++){if(l>s){if((l=r.end.row+1)>=a)break
s=(r=this.$foldData[o++])?r.start.row:1/0}null==n[l]&&(n[l]=this.$getStringScreenWidth(t[l])[0]),n[l]>i&&(i=n[l])}this.screenWidth=i}},e.prototype.getLine=function(e){return this.doc.getLine(e)},e.prototype.getLines=function(e,t){return this.doc.getLines(e,t)},e.prototype.getLength=function(){return this.doc.getLength()},e.prototype.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())},e.prototype.insert=function(e,t){return this.doc.insert(e,t)},e.prototype.remove=function(e){return this.doc.remove(e)},e.prototype.removeFullLines=function(e,t){return this.doc.removeFullLines(e,t)},e.prototype.undoChanges=function(e,t){if(e.length){this.$fromUndo=!0
for(var n=e.length-1;-1!=n;n--){var i=e[n]
"insert"==i.action||"remove"==i.action?this.doc.revertDelta(i):i.folds&&this.addFolds(i.folds)}!t&&this.$undoSelect&&(e.selectionBefore?this.selection.fromJSON(e.selectionBefore):this.selection.setRange(this.$getUndoSelection(e,!0))),this.$fromUndo=!1}},e.prototype.redoChanges=function(e,t){if(e.length){this.$fromUndo=!0
for(var n=0;n<e.length;n++){var i=e[n]
"insert"!=i.action&&"remove"!=i.action||this.doc.$safeApplyDelta(i)}!t&&this.$undoSelect&&(e.selectionAfter?this.selection.fromJSON(e.selectionAfter):this.selection.setRange(this.$getUndoSelection(e,!1))),this.$fromUndo=!1}},e.prototype.setUndoSelect=function(e){this.$undoSelect=e},e.prototype.$getUndoSelection=function(e,t){function n(e){return t?"insert"!==e.action:"insert"===e.action}for(var i,o,r=0;r<e.length;r++){var s=e[r]
s.start&&(i?n(s)?(o=s.start,-1==i.compare(o.row,o.column)&&i.setStart(o),o=s.end,1==i.compare(o.row,o.column)&&i.setEnd(o)):(o=s.start,-1==i.compare(o.row,o.column)&&(i=h.fromPoints(s.start,s.start))):i=n(s)?h.fromPoints(s.start,s.end):h.fromPoints(s.start,s.start))}return i},e.prototype.replace=function(e,t){return this.doc.replace(e,t)},e.prototype.moveText=function(e,t,n){var i=this.getTextRange(e),o=this.getFoldsInRange(e),r=h.fromPoints(t,t)
if(!n){this.remove(e)
var s=e.start.row-e.end.row;(c=s?-e.end.column:e.start.column-e.end.column)&&(r.start.row==e.end.row&&r.start.column>e.end.column&&(r.start.column+=c),r.end.row==e.end.row&&r.end.column>e.end.column&&(r.end.column+=c)),s&&r.start.row>=e.end.row&&(r.start.row+=s,r.end.row+=s)}if(r.end=this.insert(r.start,i),o.length){var a=e.start,l=r.start,c=(s=l.row-a.row,l.column-a.column)
this.addFolds(o.map((function(e){return(e=e.clone()).start.row==a.row&&(e.start.column+=c),e.end.row==a.row&&(e.end.column+=c),e.start.row+=s,e.end.row+=s,e})))}return r},e.prototype.indentRows=function(e,t,n){n=n.replace(/\t/g,this.getTabString())
for(var i=e;i<=t;i++)this.doc.insertInLine({row:i,column:0},n)},e.prototype.outdentRows=function(e){for(var t=e.collapseRows(),n=new h(0,0,0,0),i=this.getTabSize(),o=t.start.row;o<=t.end.row;++o){var r=this.getLine(o)
n.start.row=o,n.end.row=o
for(var s=0;s<i&&" "==r.charAt(s);++s);s<i&&"\t"==r.charAt(s)?(n.start.column=s,n.end.column=s+1):(n.start.column=0,n.end.column=s),this.remove(n)}},e.prototype.$moveLines=function(e,t,n){if(e=this.getRowFoldStart(e),t=this.getRowFoldEnd(t),n<0){if((o=this.getRowFoldStart(e+n))<0)return 0
var i=o-e}else if(n>0){var o
if((o=this.getRowFoldEnd(t+n))>this.doc.getLength()-1)return 0
i=o-t}else e=this.$clipRowToDocument(e),i=(t=this.$clipRowToDocument(t))-e+1
var r=new h(e,0,t,Number.MAX_VALUE),s=this.getFoldsInRange(r).map((function(e){return(e=e.clone()).start.row+=i,e.end.row+=i,e})),a=0==n?this.doc.getLines(e,t):this.doc.removeFullLines(e,t)
return this.doc.insertFullLines(e+i,a),s.length&&this.addFolds(s),i},e.prototype.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)},e.prototype.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)},e.prototype.duplicateLines=function(e,t){return this.$moveLines(e,t,0)},e.prototype.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))},e.prototype.$clipColumnToRow=function(e,t){return t<0?0:Math.min(this.doc.getLine(e).length,t)},e.prototype.$clipPositionToDocument=function(e,t){if(t=Math.max(0,t),e<0)e=0,t=0
else{var n=this.doc.getLength()
e>=n?(e=n-1,t=this.doc.getLine(n-1).length):t=Math.min(this.doc.getLine(e).length,t)}return{row:e,column:t}},e.prototype.$clipRangeToDocument=function(e){e.start.row<0?(e.start.row=0,e.start.column=0):e.start.column=this.$clipColumnToRow(e.start.row,e.start.column)
var t=this.doc.getLength()-1
return e.end.row>t?(e.end.row=t,e.end.column=this.doc.getLine(t).length):e.end.column=this.$clipColumnToRow(e.end.row,e.end.column),e},e.prototype.setUseWrapMode=function(e){if(e!=this.$useWrapMode){if(this.$useWrapMode=e,this.$modified=!0,this.$resetRowCache(0),e){var t=this.getLength()
this.$wrapData=Array(t),this.$updateWrapData(0,t-1)}this._signal("changeWrapMode")}},e.prototype.getUseWrapMode=function(){return this.$useWrapMode},e.prototype.setWrapLimitRange=function(e,t){this.$wrapLimitRange.min===e&&this.$wrapLimitRange.max===t||(this.$wrapLimitRange={min:e,max:t},this.$modified=!0,this.$bidiHandler.markAsDirty(),this.$useWrapMode&&this._signal("changeWrapMode"))},e.prototype.adjustWrapLimit=function(e,t){var n=this.$wrapLimitRange
n.max<0&&(n={min:t,max:t})
var i=this.$constrainWrapLimit(e,n.min,n.max)
return i!=this.$wrapLimit&&i>1&&(this.$wrapLimit=i,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._signal("changeWrapLimit")),!0)},e.prototype.$constrainWrapLimit=function(e,t,n){return t&&(e=Math.max(t,e)),n&&(e=Math.min(n,e)),e},e.prototype.getWrapLimit=function(){return this.$wrapLimit},e.prototype.setWrapLimit=function(e){this.setWrapLimitRange(e,e)},e.prototype.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},e.prototype.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode,n=e.action,i=e.start,o=e.end,r=i.row,s=o.row,a=s-r,l=null
if(this.$updating=!0,0!=a)if("remove"===n){this[t?"$wrapData":"$rowLengthCache"].splice(r,a)
var c=this.$foldData
l=this.getFoldsInRange(e),this.removeFolds(l)
var h=0
if(f=this.getFoldLine(o.row)){f.addRemoveChars(o.row,o.column,i.column-o.column),f.shiftRow(-a)
var u=this.getFoldLine(r)
u&&u!==f&&(u.merge(f),f=u),h=c.indexOf(f)+1}for(;h<c.length;h++)(f=c[h]).start.row>=o.row&&f.shiftRow(-a)
s=r}else{var d=Array(a)
d.unshift(r,0)
var g=t?this.$wrapData:this.$rowLengthCache
if(g.splice.apply(g,d),c=this.$foldData,h=0,f=this.getFoldLine(r)){var p=f.range.compareInside(i.row,i.column)
0==p?(f=f.split(i.row,i.column))&&(f.shiftRow(a),f.addRemoveChars(s,0,o.column-i.column)):-1==p&&(f.addRemoveChars(r,0,o.column-i.column),f.shiftRow(a)),h=c.indexOf(f)+1}for(;h<c.length;h++){var f;(f=c[h]).start.row>=r&&f.shiftRow(a)}}else a=Math.abs(e.start.column-e.end.column),"remove"===n&&(l=this.getFoldsInRange(e),this.removeFolds(l),a=-a),(f=this.getFoldLine(r))&&f.addRemoveChars(r,i.column,a)
return t&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),this.$updating=!1,t?this.$updateWrapData(r,s):this.$updateRowLengthCache(r,s),l},e.prototype.$updateRowLengthCache=function(e,t,n){this.$rowLengthCache[e]=null,this.$rowLengthCache[t]=null},e.prototype.$updateWrapData=function(e,t){var n,i,o=this.doc.getAllLines(),r=this.getTabSize(),s=this.$wrapData,a=this.$wrapLimit,l=e
for(t=Math.min(t,o.length-1);l<=t;)(i=this.getFoldLine(l,i))?(n=[],i.walk(function(e,t,i,r){var s
if(null!=e){(s=this.$getDisplayTokens(e,n.length))[0]=v
for(var a=1;a<s.length;a++)s[a]=w}else s=this.$getDisplayTokens(o[t].substring(r,i),n.length)
n=n.concat(s)}.bind(this),i.end.row,o[i.end.row].length+1),s[i.start.row]=this.$computeWrapSplits(n,a,r),l=i.end.row+1):(n=this.$getDisplayTokens(o[l]),s[l]=this.$computeWrapSplits(n,a,r),l++)},e.prototype.$computeWrapSplits=function(e,t,n){if(0==e.length)return[]
var i=[],o=e.length,r=0,s=0,a=this.$wrapAsCode,l=this.$indentedSoftWrap,c=t<=Math.max(2*n,8)||!1===l?0:Math.floor(t/2)
function h(t){for(var o=t-r,h=r;h<t;h++){var d=e[h]
12!==d&&2!==d||(o-=1)}i.length||(u=function(){var t=0
if(0===c)return t
if(l)for(var i=0;i<e.length;i++){var o=e[i]
if(o==b)t+=1
else{if(o!=$){if(o==C)continue
break}t+=n}}return a&&!1!==l&&(t+=n),Math.min(t,c)}(),i.indent=u),s+=o,i.push(s),r=t}for(var u=0;o-r>t-u;){var d=r+t-u
if(e[d-1]>=b&&e[d]>=b)h(d)
else if(e[d]!=v&&e[d]!=w){for(var g=Math.max(d-(t-(t>>2)),r-1);d>g&&e[d]<v;)d--
if(a){for(;d>g&&e[d]<v;)d--
for(;d>g&&e[d]==y;)d--}else for(;d>g&&e[d]<b;)d--
d>g?h(++d):(e[d=r+t]==m&&d--,h(d-u))}else{for(;d!=r-1&&e[d]!=v;d--);if(d>r){h(d)
continue}for(d=r+t;d<e.length&&e[d]==w;d++);if(d==e.length)break
h(d)}}return i},e.prototype.$getDisplayTokens=function(e,t){var n,i=[]
t=t||0
for(var o=0;o<e.length;o++){var r=e.charCodeAt(o)
if(9==r){n=this.getScreenTabSize(i.length+t),i.push($)
for(var s=1;s<n;s++)i.push(C)}else 32==r?i.push(b):r>39&&r<48||r>57&&r<64?i.push(y):r>=4352&&S(r)?i.push(f,m):i.push(f)}return i},e.prototype.$getStringScreenWidth=function(e,t,n){if(0==t)return[0,0]
var i,o
for(null==t&&(t=1/0),n=n||0,o=0;o<e.length&&(9==(i=e.charCodeAt(o))?n+=this.getScreenTabSize(n):i>=4352&&S(i)?n+=2:n+=1,!(n>t));o++);return[n,o]},e.prototype.getRowLength=function(e){var t=1
return this.lineWidgets&&(t+=this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0),this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+t:t},e.prototype.getRowLineCount=function(e){return this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+1:1},e.prototype.getRowWrapIndent=function(e){if(this.$useWrapMode){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE),n=this.$wrapData[t.row]
return n.length&&n[0]<t.column?n.indent:0}return 0},e.prototype.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE)
return this.documentToScreenColumn(t.row,t.column)},e.prototype.getDocumentLastRowColumn=function(e,t){var n=this.documentToScreenRow(e,t)
return this.getScreenLastRowColumn(n)},e.prototype.getDocumentLastRowColumnPosition=function(e,t){var n=this.documentToScreenRow(e,t)
return this.screenToDocumentPosition(n,Number.MAX_VALUE/10)},e.prototype.getRowSplitData=function(e){return this.$useWrapMode?this.$wrapData[e]:void 0},e.prototype.getScreenTabSize=function(e){return this.$tabSize-(e%this.$tabSize|0)},e.prototype.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row},e.prototype.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column},e.prototype.screenToDocumentPosition=function(e,t,n){if(e<0)return{row:0,column:0}
var i,o,r=0,s=0,a=0,l=0,c=this.$screenRowCache,h=this.$getRowCacheIndex(c,e),u=c.length
if(u&&h>=0){a=c[h],r=this.$docRowCache[h]
var d=e>c[u-1]}else d=!u
for(var g=this.getLength()-1,p=this.getNextFoldLine(r),f=p?p.start.row:1/0;a<=e&&!(a+(l=this.getRowLength(r))>e||r>=g);)a+=l,++r>f&&(r=p.end.row+1,f=(p=this.getNextFoldLine(r,p))?p.start.row:1/0),d&&(this.$docRowCache.push(r),this.$screenRowCache.push(a))
if(p&&p.start.row<=r)i=this.getFoldDisplayLine(p),r=p.start.row
else{if(a+l<=e||r>g)return{row:g,column:this.getLine(g).length}
i=this.getLine(r),p=null}var m=0,v=Math.floor(e-a)
if(this.$useWrapMode){var w=this.$wrapData[r]
w&&(o=w[v],v>0&&w.length&&(m=w.indent,s=w[v-1]||w[w.length-1],i=i.substring(s)))}return void 0!==n&&this.$bidiHandler.isBidiRow(a+v,r,v)&&(t=this.$bidiHandler.offsetToCol(n)),s+=this.$getStringScreenWidth(i,t-m)[1],this.$useWrapMode&&s>=o&&(s=o-1),p?p.idxToPosition(s):{row:r,column:s}},e.prototype.documentToScreenPosition=function(e,t){if(void 0===t)var n=this.$clipPositionToDocument(e.row,e.column)
else n=this.$clipPositionToDocument(e,t)
e=n.row,t=n.column
var i,o=0,r=null;(i=this.getFoldAt(e,t,1))&&(e=i.start.row,t=i.start.column)
var s,a=0,l=this.$docRowCache,c=this.$getRowCacheIndex(l,e),h=l.length
if(h&&c>=0){a=l[c],o=this.$screenRowCache[c]
var u=e>l[h-1]}else u=!h
for(var d=this.getNextFoldLine(a),g=d?d.start.row:1/0;a<e;){if(a>=g){if((s=d.end.row+1)>e)break
g=(d=this.getNextFoldLine(s,d))?d.start.row:1/0}else s=a+1
o+=this.getRowLength(a),a=s,u&&(this.$docRowCache.push(a),this.$screenRowCache.push(o))}var p=""
d&&a>=g?(p=this.getFoldDisplayLine(d,e,t),r=d.start.row):(p=this.getLine(e).substring(0,t),r=e)
var f=0
if(this.$useWrapMode){var m=this.$wrapData[r]
if(m){for(var v=0;p.length>=m[v];)o++,v++
p=p.substring(m[v-1]||0,p.length),f=v>0?m.indent:0}}return this.lineWidgets&&this.lineWidgets[a]&&this.lineWidgets[a].rowsAbove&&(o+=this.lineWidgets[a].rowsAbove),{row:o,column:f+this.$getStringScreenWidth(p)[0]}},e.prototype.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column},e.prototype.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row},e.prototype.getScreenLength=function(){var e=0,t=null
if(this.$useWrapMode)for(var n=this.$wrapData.length,i=0,o=(a=0,(t=this.$foldData[a++])?t.start.row:1/0);i<n;){var r=this.$wrapData[i]
e+=r?r.length+1:1,++i>o&&(i=t.end.row+1,o=(t=this.$foldData[a++])?t.start.row:1/0)}else{e=this.getLength()
for(var s=this.$foldData,a=0;a<s.length;a++)e-=(t=s[a]).end.row-t.start.row}return this.lineWidgets&&(e+=this.$getWidgetScreenLength()),e},e.prototype.$setFontMetrics=function(e){this.$enableVarChar&&(this.$getStringScreenWidth=function(t,n,i){if(0===n)return[0,0]
var o,r
for(n||(n=1/0),i=i||0,r=0;r<t.length&&!((i+="\t"===(o=t.charAt(r))?this.getScreenTabSize(i):e.getCharacterWidth(o))>n);r++);return[i,r]})},e.prototype.destroy=function(){this.destroyed||(this.bgTokenizer.setDocument(null),this.bgTokenizer.cleanup(),this.destroyed=!0),this.$stopWorker(),this.removeAllListeners(),this.doc&&this.doc.off("change",this.$onChange),this.selection.detach()},e}()
p.$uid=0,p.prototype.$modes=s.$modes,p.prototype.getValue=p.prototype.toString,p.prototype.$defaultUndoManager={undo:function(){},redo:function(){},hasUndo:function(){},hasRedo:function(){},reset:function(){},add:function(){},addSelection:function(){},startNewGroup:function(){},addSession:function(){}},p.prototype.$overwrite=!1,p.prototype.$mode=null,p.prototype.$modeId=null,p.prototype.$scrollTop=0,p.prototype.$scrollLeft=0,p.prototype.$wrapLimit=80,p.prototype.$useWrapMode=!1,p.prototype.$wrapLimitRange={min:null,max:null},p.prototype.lineWidgets=null,p.prototype.isFullWidth=S,i.implement(p.prototype,a)
var f=1,m=2,v=3,w=4,y=9,b=10,$=11,C=12
function S(e){return!(e<4352)&&(e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510)}e("./edit_session/folding").Folding.call(p.prototype),e("./edit_session/bracket_match").BracketMatch.call(p.prototype),s.defineOptions(p.prototype,"session",{wrap:{set:function(e){if(e&&"off"!=e?"free"==e?e=!0:"printMargin"==e?e=-1:"string"==typeof e&&(e=parseInt(e,10)||!1):e=!1,this.$wrap!=e)if(this.$wrap=e,e){var t="number"==typeof e?e:null
this.setWrapLimitRange(t,t),this.setUseWrapMode(!0)}else this.setUseWrapMode(!1)},get:function(){return this.getUseWrapMode()?-1==this.$wrap?"printMargin":this.getWrapLimitRange().min?this.$wrap:"free":"off"},handlesSet:!0},wrapMethod:{set:function(e){(e="auto"==e?"text"!=this.$mode.type:"text"!=e)!=this.$wrapAsCode&&(this.$wrapAsCode=e,this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0)))},initialValue:"auto"},indentedSoftWrap:{set:function(){this.$useWrapMode&&(this.$useWrapMode=!1,this.setUseWrapMode(!0))},initialValue:!0},firstLineNumber:{set:function(){this._signal("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e,this.$stopWorker(),e&&this.$startWorker()},initialValue:!0},useSoftTabs:{initialValue:!0},tabSize:{set:function(e){(e=parseInt(e))>0&&this.$tabSize!==e&&(this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=e,this._signal("changeTabSize"))},initialValue:4,handlesSet:!0},navigateWithinSoftTabs:{initialValue:!1},foldStyle:{set:function(e){this.setFoldStyle(e)},handlesSet:!0},overwrite:{set:function(e){this._signal("changeOverwrite")},initialValue:!1},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:!0},mode:{set:function(e){this.setMode(e)},get:function(){return this.$modeId},handlesSet:!0}}),t.EditSession=p})),ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],(function(e,t,n){"use strict"
var i=e("./lib/lang"),o=e("./lib/oop"),r=e("./range").Range,s=function(){function e(){this.$options={}}return e.prototype.set=function(e){return o.mixin(this.$options,e),this},e.prototype.getOptions=function(){return i.copyObject(this.$options)},e.prototype.setOptions=function(e){this.$options=e},e.prototype.find=function(e){var t=this.$options,n=this.$matchIterator(e,t)
if(!n)return!1
var i=null
return n.forEach((function(e,n,o,s){return i=new r(e,n,o,s),!(n==s&&t.start&&t.start.start&&0!=t.skipCurrent&&i.isEqual(t.start)&&(i=null,1))})),i},e.prototype.findAll=function(e){var t=this.$options
if(!t.needle)return[]
this.$assembleRegExp(t)
var n=t.range,o=n?e.getLines(n.start.row,n.end.row):e.doc.getAllLines(),s=[],a=t.re
if(t.$isMultiLine){var l,c=a.length,h=o.length-c
e:for(var u=a.offset||0;u<=h;u++){for(var d=0;d<c;d++)if(-1==o[u+d].search(a[d]))continue e
var g=o[u],p=o[u+c-1],f=g.length-g.match(a[0])[0].length,m=p.match(a[c-1])[0].length
l&&l.end.row===u&&l.end.column>f||(s.push(l=new r(u,f,u+c-1,m)),c>2&&(u=u+c-2))}}else for(var v=0;v<o.length;v++){var w=i.getMatchOffsets(o[v],a)
for(d=0;d<w.length;d++){var y=w[d]
s.push(new r(v,y.offset,v,y.offset+y.length))}}if(n){var b=n.start.column,$=n.end.column
for(v=0,d=s.length-1;v<d&&s[v].start.column<b&&0==s[v].start.row;)v++
for(var C=n.end.row-n.start.row;v<d&&s[d].end.column>$&&s[d].end.row==C;)d--
for(s=s.slice(v,d+1),v=0,d=s.length;v<d;v++)s[v].start.row+=n.start.row,s[v].end.row+=n.start.row}return s},e.prototype.replace=function(e,t){var n=this.$options,i=this.$assembleRegExp(n)
if(n.$isMultiLine)return t
if(i){var o=i.exec(e)
if(!o||o[0].length!=e.length)return null
if(t=e.replace(i,t),n.preserveCase){t=t.split("")
for(var r=Math.min(e.length,e.length);r--;){var s=e[r]
s&&s.toLowerCase()!=s?t[r]=t[r].toUpperCase():t[r]=t[r].toLowerCase()}t=t.join("")}return t}},e.prototype.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle
var n=e.needle
if(!e.needle)return e.re=!1
e.regExp||(n=i.escapeRegExp(n)),e.wholeWord&&(n=function(e,t){function n(e){return/\w/.test(e)||t.regExp?"\\b":""}return n(e[0])+e+n(e[e.length-1])}(n,e))
var o=e.caseSensitive?"gm":"gmi"
if(e.$isMultiLine=!t&&/[\n\r]/.test(n),e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(n,o)
try{var r=new RegExp(n,o)}catch(e){r=!1}return e.re=r},e.prototype.$assembleMultilineRegExp=function(e,t){for(var n=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),i=[],o=0;o<n.length;o++)try{i.push(new RegExp(n[o],t))}catch(e){return!1}return i},e.prototype.$matchIterator=function(e,t){var n=this.$assembleRegExp(t)
if(!n)return!1
var i=1==t.backwards,o=0!=t.skipCurrent,r=t.range,s=t.start
s||(s=r?r[i?"end":"start"]:e.selection.getRange()),s.start&&(s=s[o!=i?"end":"start"])
var a=r?r.start.row:0,l=r?r.end.row:e.getLength()-1
if(i)var c=function(e){var n=s.row
if(!u(n,s.column,e)){for(n--;n>=a;n--)if(u(n,Number.MAX_VALUE,e))return
if(0!=t.wrap)for(n=l,a=s.row;n>=a;n--)if(u(n,Number.MAX_VALUE,e))return}}
else c=function(e){var n=s.row
if(!u(n,s.column,e)){for(n+=1;n<=l;n++)if(u(n,0,e))return
if(0!=t.wrap)for(n=a,l=s.row;n<=l;n++)if(u(n,0,e))return}}
if(t.$isMultiLine)var h=n.length,u=function(t,o,r){var s=i?t-h+1:t
if(!(s<0||s+h>e.getLength())){var a=e.getLine(s),l=a.search(n[0])
if(!(!i&&l<o||-1===l)){for(var c=1;c<h;c++)if(-1==(a=e.getLine(s+c)).search(n[c]))return
var u=a.match(n[h-1])[0].length
if(!(i&&u>o))return!!r(s,l,s+h-1,u)||void 0}}}
else u=i?function(t,i,o){var r,s=e.getLine(t),a=[],l=0
for(n.lastIndex=0;r=n.exec(s);){var c=r[0].length
if(l=r.index,!c){if(l>=s.length)break
n.lastIndex=l+=1}if(r.index+c>i)break
a.push(r.index,c)}for(var h=a.length-1;h>=0;h-=2){var u=a[h-1]
if(o(t,u,t,u+(c=a[h])))return!0}}:function(t,i,o){var r,s,a=e.getLine(t)
for(n.lastIndex=i;s=n.exec(a);){var l=s[0].length
if(o(t,r=s.index,t,r+l))return!0
if(!l&&(n.lastIndex=r+=1,r>=a.length))return!1}}
return{forEach:c}},e}()
t.Search=s})),ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=e("../lib/keys"),s=e("../lib/useragent"),a=r.KEY_MODS,l=function(){function e(e,t){this.$init(e,t,!1)}return e.prototype.$init=function(e,t,n){this.platform=t||(s.isMac?"mac":"win"),this.commands={},this.commandKeyBinding={},this.addCommands(e),this.$singleCommand=n},e.prototype.addCommand=function(e){this.commands[e.name]&&this.removeCommand(e),this.commands[e.name]=e,e.bindKey&&this._buildKeyHash(e)},e.prototype.removeCommand=function(e,t){var n=e&&("string"==typeof e?e:e.name)
e=this.commands[n],t||delete this.commands[n]
var i=this.commandKeyBinding
for(var o in i){var r=i[o]
if(r==e)delete i[o]
else if(Array.isArray(r)){var s=r.indexOf(e);-1!=s&&(r.splice(s,1),1==r.length&&(i[o]=r[0]))}}},e.prototype.bindKey=function(e,t,n){if("object"==typeof e&&e&&(null==n&&(n=e.position),e=e[this.platform]),e)return"function"==typeof t?this.addCommand({exec:t,bindKey:e,name:t.name||e}):void e.split("|").forEach((function(e){var i=""
if(-1!=e.indexOf(" ")){var o=e.split(/\s+/)
e=o.pop(),o.forEach((function(e){var t=this.parseKeys(e),n=a[t.hashId]+t.key
i+=(i?" ":"")+n,this._addCommandToBinding(i,"chainKeys")}),this),i+=" "}var r=this.parseKeys(e),s=a[r.hashId]+r.key
this._addCommandToBinding(i+s,t,n)}),this)},e.prototype._addCommandToBinding=function(e,t,n){var i,o=this.commandKeyBinding
if(t)if(!o[e]||this.$singleCommand)o[e]=t
else{Array.isArray(o[e])?-1!=(i=o[e].indexOf(t))&&o[e].splice(i,1):o[e]=[o[e]],"number"!=typeof n&&(n=c(t))
var r=o[e]
for(i=0;i<r.length&&!(c(r[i])>n);i++);r.splice(i,0,t)}else delete o[e]},e.prototype.addCommands=function(e){e&&Object.keys(e).forEach((function(t){var n=e[t]
if(n){if("string"==typeof n)return this.bindKey(n,t)
"function"==typeof n&&(n={exec:n}),"object"==typeof n&&(n.name||(n.name=t),this.addCommand(n))}}),this)},e.prototype.removeCommands=function(e){Object.keys(e).forEach((function(t){this.removeCommand(e[t])}),this)},e.prototype.bindKeys=function(e){Object.keys(e).forEach((function(t){this.bindKey(t,e[t])}),this)},e.prototype._buildKeyHash=function(e){this.bindKey(e.bindKey,e)},e.prototype.parseKeys=function(e){var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function(e){return e})),n=t.pop(),i=r[n]
if(r.FUNCTION_KEYS[i])n=r.FUNCTION_KEYS[i].toLowerCase()
else{if(!t.length)return{key:n,hashId:-1}
if(1==t.length&&"shift"==t[0])return{key:n.toUpperCase(),hashId:-1}}for(var o=0,s=t.length;s--;){var a=r.KEY_MODS[t[s]]
if(null==a)return"undefined"!=typeof console&&console.error("invalid modifier "+t[s]+" in "+e),!1
o|=a}return{key:n,hashId:o}},e.prototype.findKeyCommand=function(e,t){var n=a[e]+t
return this.commandKeyBinding[n]},e.prototype.handleKeyboard=function(e,t,n,i){if(!(i<0)){var o=a[t]+n,r=this.commandKeyBinding[o]
return e.$keyChain&&(e.$keyChain+=" "+o,r=this.commandKeyBinding[e.$keyChain]||r),!r||"chainKeys"!=r&&"chainKeys"!=r[r.length-1]?(e.$keyChain&&(t&&4!=t||1!=n.length?(-1==t||i>0)&&(e.$keyChain=""):e.$keyChain=e.$keyChain.slice(0,-o.length-1)),{command:r}):(e.$keyChain=e.$keyChain||o,{command:"null"})}},e.prototype.getStatusText=function(e,t){return t.$keyChain||""},e}()
function c(e){return"object"==typeof e&&e.bindKey&&e.bindKey.position||(e.isDefault?-100:0)}var h=function(e){function t(t,n){var i=e.call(this,t,n)||this
return i.$singleCommand=!0,i}return o(t,e),t}(l)
h.call=function(e,t,n){l.prototype.$init.call(e,t,n,!0)},l.call=function(e,t,n){l.prototype.$init.call(e,t,n,!1)},t.HashHandler=h,t.MultiHashHandler=l})),ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=e("../lib/oop"),s=e("../keyboard/hash_handler").MultiHashHandler,a=e("../lib/event_emitter").EventEmitter,l=function(e){function t(t,n){var i=e.call(this,n,t)||this
return i.byName=i.commands,i.setDefaultHandler("exec",(function(e){return e.args?e.command.exec(e.editor,e.args,e.event,!1):e.command.exec(e.editor,{},e.event,!0)})),i}return o(t,e),t.prototype.exec=function(e,t,n){if(Array.isArray(e)){for(var i=e.length;i--;)if(this.exec(e[i],t,n))return!0
return!1}if("string"==typeof e&&(e=this.commands[e]),!e)return!1
if(t&&t.$readOnly&&!e.readOnly)return!1
if(0!=this.$checkCommandState&&e.isAvailable&&!e.isAvailable(t))return!1
var o={editor:t,command:e,args:n}
return o.returnValue=this._emit("exec",o),this._signal("afterExec",o),!1!==o.returnValue},t.prototype.toggleRecording=function(e){if(!this.$inReplay)return e&&e._emit("changeStatus"),this.recording?(this.macro.pop(),this.off("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},t.prototype.replay=function(e){if(!this.$inReplay&&this.macro){if(this.recording)return this.toggleRecording(e)
try{this.$inReplay=!0,this.macro.forEach((function(t){"string"==typeof t?this.exec(t,e):this.exec(t[0],e,t[1])}),this)}finally{this.$inReplay=!1}}},t.prototype.trimMacro=function(e){return e.map((function(e){return"string"!=typeof e[0]&&(e[0]=e[0].name),e[1]||(e=e[0]),e}))},t}(s)
r.implement(l.prototype,a),t.CommandManager=l})),ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config","ace/range"],(function(e,t,n){"use strict"
var i=e("../lib/lang"),o=e("../config"),r=e("../range").Range
function s(e,t){return{win:e,mac:t}}t.commands=[{name:"showSettingsMenu",description:"Show settings menu",bindKey:s("Ctrl-,","Command-,"),exec:function(e){o.loadModule("ace/ext/settings_menu",(function(t){t.init(e),e.showSettingsMenu()}))},readOnly:!0},{name:"goToNextError",description:"Go to next error",bindKey:s("Alt-E","F4"),exec:function(e){o.loadModule("ace/ext/error_marker",(function(t){t.showErrorMarker(e,1)}))},scrollIntoView:"animate",readOnly:!0},{name:"goToPreviousError",description:"Go to previous error",bindKey:s("Alt-Shift-E","Shift-F4"),exec:function(e){o.loadModule("ace/ext/error_marker",(function(t){t.showErrorMarker(e,-1)}))},scrollIntoView:"animate",readOnly:!0},{name:"selectall",description:"Select all",bindKey:s("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:!0},{name:"centerselection",description:"Center selection",bindKey:s(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:!0},{name:"gotoline",description:"Go to line...",bindKey:s("Ctrl-L","Command-L"),exec:function(e,t){"number"!=typeof t||isNaN(t)||e.gotoLine(t),e.prompt({$type:"gotoLine"})},readOnly:!0},{name:"fold",bindKey:s("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(!1)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"unfold",bindKey:s("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleFoldWidget",description:"Toggle fold widget",bindKey:s("F2","F2"),exec:function(e){e.session.toggleFoldWidget()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"toggleParentFoldWidget",description:"Toggle parent fold widget",bindKey:s("Alt-F2","Alt-F2"),exec:function(e){e.session.toggleFoldWidget(!0)},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"foldall",description:"Fold all",bindKey:s(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAll()},scrollIntoView:"center",readOnly:!0},{name:"foldAllComments",description:"Fold all comments",bindKey:s(null,"Ctrl-Command-Option-0"),exec:function(e){e.session.foldAllComments()},scrollIntoView:"center",readOnly:!0},{name:"foldOther",description:"Fold other",bindKey:s("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll(),e.session.unfold(e.selection.getAllRanges())},scrollIntoView:"center",readOnly:!0},{name:"unfoldall",description:"Unfold all",bindKey:s("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},scrollIntoView:"center",readOnly:!0},{name:"findnext",description:"Find next",bindKey:s("Ctrl-K","Command-G"),exec:function(e){e.findNext()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"findprevious",description:"Find previous",bindKey:s("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},multiSelectAction:"forEach",scrollIntoView:"center",readOnly:!0},{name:"selectOrFindNext",description:"Select or find next",bindKey:s("Alt-K","Ctrl-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findNext()},readOnly:!0},{name:"selectOrFindPrevious",description:"Select or find previous",bindKey:s("Alt-Shift-K","Ctrl-Shift-G"),exec:function(e){e.selection.isEmpty()?e.selection.selectWord():e.findPrevious()},readOnly:!0},{name:"find",description:"Find",bindKey:s("Ctrl-F","Command-F"),exec:function(e){o.loadModule("ace/ext/searchbox",(function(t){t.Search(e)}))},readOnly:!0},{name:"overwrite",description:"Overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:!0},{name:"selecttostart",description:"Select to start",bindKey:s("Ctrl-Shift-Home","Command-Shift-Home|Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotostart",description:"Go to start",bindKey:s("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectup",description:"Select up",bindKey:s("Shift-Up","Shift-Up|Ctrl-Shift-P"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golineup",description:"Go line up",bindKey:s("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttoend",description:"Select to end",bindKey:s("Ctrl-Shift-End","Command-Shift-End|Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"gotoend",description:"Go to end",bindKey:s("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0,scrollIntoView:"animate",aceCommandGroup:"fileJump"},{name:"selectdown",description:"Select down",bindKey:s("Shift-Down","Shift-Down|Ctrl-Shift-N"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"golinedown",description:"Go line down",bindKey:s("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordleft",description:"Select word left",bindKey:s("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordleft",description:"Go to word left",bindKey:s("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolinestart",description:"Select to line start",bindKey:s("Alt-Shift-Left","Command-Shift-Left|Ctrl-Shift-A"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolinestart",description:"Go to line start",bindKey:s("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectleft",description:"Select left",bindKey:s("Shift-Left","Shift-Left|Ctrl-Shift-B"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoleft",description:"Go to left",bindKey:s("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectwordright",description:"Select word right",bindKey:s("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotowordright",description:"Go to word right",bindKey:s("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selecttolineend",description:"Select to line end",bindKey:s("Alt-Shift-Right","Command-Shift-Right|Shift-End|Ctrl-Shift-E"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotolineend",description:"Go to line end",bindKey:s("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectright",description:"Select right",bindKey:s("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"gotoright",description:"Go to right",bindKey:s("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectpagedown",description:"Select page down",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:!0},{name:"pagedown",description:"Page down",bindKey:s(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:!0},{name:"gotopagedown",description:"Go to page down",bindKey:s("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:!0},{name:"selectpageup",description:"Select page up",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:!0},{name:"pageup",description:"Page up",bindKey:s(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:!0},{name:"gotopageup",description:"Go to page up",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:!0},{name:"scrollup",description:"Scroll up",bindKey:s("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",description:"Scroll down",bindKey:s("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",description:"Select line start",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"selectlineend",description:"Select line end",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"togglerecording",description:"Toggle recording",bindKey:s("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:!0},{name:"replaymacro",description:"Replay macro",bindKey:s("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:!0},{name:"jumptomatching",description:"Jump to matching",bindKey:s("Ctrl-\\|Ctrl-P","Command-\\"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"selecttomatching",description:"Select to matching",bindKey:s("Ctrl-Shift-\\|Ctrl-Shift-P","Command-Shift-\\"),exec:function(e){e.jumpToMatching(!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"expandToMatching",description:"Expand to matching",bindKey:s("Ctrl-Shift-M","Ctrl-Shift-M"),exec:function(e){e.jumpToMatching(!0,!0)},multiSelectAction:"forEach",scrollIntoView:"animate",readOnly:!0},{name:"passKeysToBrowser",description:"Pass keys to browser",bindKey:s(null,null),exec:function(){},passEvent:!0,readOnly:!0},{name:"copy",description:"Copy",exec:function(e){},readOnly:!0},{name:"cut",description:"Cut",exec:function(e){var t=e.$copyWithEmptySelection&&e.selection.isEmpty()?e.selection.getLineRange():e.selection.getRange()
e._emit("cut",t),t.isEmpty()||e.session.remove(t),e.clearSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"paste",description:"Paste",exec:function(e,t){e.$handlePaste(t)},scrollIntoView:"cursor"},{name:"removeline",description:"Remove line",bindKey:s("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},scrollIntoView:"cursor",multiSelectAction:"forEachLine"},{name:"duplicateSelection",description:"Duplicate selection",bindKey:s("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"sortlines",description:"Sort lines",bindKey:s("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},scrollIntoView:"selection",multiSelectAction:"forEachLine"},{name:"togglecomment",description:"Toggle comment",bindKey:s("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"toggleBlockComment",description:"Toggle block comment",bindKey:s("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"modifyNumberUp",description:"Modify number up",bindKey:s("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"modifyNumberDown",description:"Modify number down",bindKey:s("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},scrollIntoView:"cursor",multiSelectAction:"forEach"},{name:"replace",description:"Replace",bindKey:s("Ctrl-H","Command-Option-F"),exec:function(e){o.loadModule("ace/ext/searchbox",(function(t){t.Search(e,!0)}))}},{name:"undo",description:"Undo",bindKey:s("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",description:"Redo",bindKey:s("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",description:"Copy lines up",bindKey:s("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()},scrollIntoView:"cursor"},{name:"movelinesup",description:"Move lines up",bindKey:s("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()},scrollIntoView:"cursor"},{name:"copylinesdown",description:"Copy lines down",bindKey:s("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()},scrollIntoView:"cursor"},{name:"movelinesdown",description:"Move lines down",bindKey:s("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()},scrollIntoView:"cursor"},{name:"del",description:"Delete",bindKey:s("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"backspace",description:"Backspace",bindKey:s("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"cut_or_delete",description:"Cut or delete",bindKey:s("Shift-Delete",null),exec:function(e){if(!e.selection.isEmpty())return!1
e.remove("left")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestart",description:"Remove to line start",bindKey:s("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineend",description:"Remove to line end",bindKey:s("Alt-Delete","Ctrl-K|Command-Delete"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolinestarthard",description:"Remove to line start hard",bindKey:s("Ctrl-Shift-Backspace",null),exec:function(e){var t=e.selection.getRange()
t.start.column=0,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removetolineendhard",description:"Remove to line end hard",bindKey:s("Ctrl-Shift-Delete",null),exec:function(e){var t=e.selection.getRange()
t.end.column=Number.MAX_VALUE,e.session.remove(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordleft",description:"Remove word left",bindKey:s("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"removewordright",description:"Remove word right",bindKey:s("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"outdent",description:"Outdent",bindKey:s("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"indent",description:"Indent",bindKey:s("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach",scrollIntoView:"selectionPart"},{name:"blockoutdent",description:"Block outdent",bindKey:s("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"blockindent",description:"Block indent",bindKey:s("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine",scrollIntoView:"selectionPart"},{name:"insertstring",description:"Insert string",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"inserttext",description:"Insert text",exec:function(e,t){e.insert(i.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"splitline",description:"Split line",bindKey:s(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"transposeletters",description:"Transpose letters",bindKey:s("Alt-Shift-X","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)},scrollIntoView:"cursor"},{name:"touppercase",description:"To uppercase",bindKey:s("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"tolowercase",description:"To lowercase",bindKey:s("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"autoindent",description:"Auto Indent",bindKey:s(null,null),exec:function(e){e.autoIndent()},multiSelectAction:"forEachLine",scrollIntoView:"animate"},{name:"expandtoline",description:"Expand to line",bindKey:s("Ctrl-Shift-L","Command-Shift-L"),exec:function(e){var t=e.selection.getRange()
t.start.column=t.end.column=0,t.end.row++,e.selection.setRange(t,!1)},multiSelectAction:"forEach",scrollIntoView:"cursor",readOnly:!0},{name:"openlink",bindKey:s("Ctrl+F3","F3"),exec:function(e){e.openLink()}},{name:"joinlines",description:"Join lines",bindKey:s(null,null),exec:function(e){for(var t=e.selection.isBackwards(),n=t?e.selection.getSelectionLead():e.selection.getSelectionAnchor(),o=t?e.selection.getSelectionAnchor():e.selection.getSelectionLead(),s=e.session.doc.getLine(n.row).length,a=e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/," ").length,l=e.session.doc.getLine(n.row),c=n.row+1;c<=o.row+1;c++){var h=i.stringTrimLeft(i.stringTrimRight(e.session.doc.getLine(c)))
0!==h.length&&(h=" "+h),l+=h}o.row+1<e.session.doc.getLength()-1&&(l+=e.session.doc.getNewLineCharacter()),e.clearSelection(),e.session.doc.replace(new r(n.row,0,o.row+2,0),l),a>0?(e.selection.moveCursorTo(n.row,n.column),e.selection.selectTo(n.row,n.column+a)):(s=e.session.doc.getLine(n.row).length>s?s+1:s,e.selection.moveCursorTo(n.row,s))},multiSelectAction:"forEach",readOnly:!0},{name:"invertSelection",description:"Invert selection",bindKey:s(null,null),exec:function(e){var t=e.session.doc.getLength()-1,n=e.session.doc.getLine(t).length,i=e.selection.rangeList.ranges,o=[]
i.length<1&&(i=[e.selection.getRange()])
for(var s=0;s<i.length;s++)s==i.length-1&&(i[s].end.row===t&&i[s].end.column===n||o.push(new r(i[s].end.row,i[s].end.column,t,n))),0===s?0===i[s].start.row&&0===i[s].start.column||o.push(new r(0,0,i[s].start.row,i[s].start.column)):o.push(new r(i[s-1].end.row,i[s-1].end.column,i[s].start.row,i[s].start.column))
for(e.exitMultiSelectMode(),e.clearSelection(),s=0;s<o.length;s++)e.selection.addRange(o[s],!1)},readOnly:!0,scrollIntoView:"none"},{name:"addLineAfter",description:"Add new line after the current line",exec:function(e){e.selection.clearSelection(),e.navigateLineEnd(),e.insert("\n")},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"addLineBefore",description:"Add new line before the current line",exec:function(e){e.selection.clearSelection()
var t=e.getCursorPosition()
e.selection.moveTo(t.row-1,Number.MAX_VALUE),e.insert("\n"),0===t.row&&e.navigateUp()},multiSelectAction:"forEach",scrollIntoView:"cursor"},{name:"openCommandPallete",description:"Open command palette",bindKey:s("F1","F1"),exec:function(e){e.prompt({$type:"commands"})},readOnly:!0},{name:"modeSelect",description:"Change language mode...",bindKey:s(null,null),exec:function(e){e.prompt({$type:"modes"})},readOnly:!0}]
for(var a=1;a<9;a++)t.commands.push({name:"foldToLevel"+a,description:"Fold To Level "+a,level:a,exec:function(e){e.session.foldToLevel(this.level)},scrollIntoView:"center",readOnly:!0})})),ace.define("ace/line_widgets",["require","exports","module","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("./lib/dom"),o=function(){function e(e){this.session=e,this.session.widgetManager=this,this.session.getRowLength=this.getRowLength,this.session.$getWidgetScreenLength=this.$getWidgetScreenLength,this.updateOnChange=this.updateOnChange.bind(this),this.renderWidgets=this.renderWidgets.bind(this),this.measureWidgets=this.measureWidgets.bind(this),this.session._changedWidgets=[],this.$onChangeEditor=this.$onChangeEditor.bind(this),this.session.on("change",this.updateOnChange),this.session.on("changeFold",this.updateOnFold),this.session.on("changeEditor",this.$onChangeEditor)}return e.prototype.getRowLength=function(e){var t
return t=this.lineWidgets&&this.lineWidgets[e]&&this.lineWidgets[e].rowCount||0,this.$useWrapMode&&this.$wrapData[e]?this.$wrapData[e].length+1+t:1+t},e.prototype.$getWidgetScreenLength=function(){var e=0
return this.lineWidgets.forEach((function(t){t&&t.rowCount&&!t.hidden&&(e+=t.rowCount)})),e},e.prototype.$onChangeEditor=function(e){this.attach(e.editor)},e.prototype.attach=function(e){e&&e.widgetManager&&e.widgetManager!=this&&e.widgetManager.detach(),this.editor!=e&&(this.detach(),this.editor=e,e&&(e.widgetManager=this,e.renderer.on("beforeRender",this.measureWidgets),e.renderer.on("afterRender",this.renderWidgets)))},e.prototype.detach=function(e){var t=this.editor
if(t){this.editor=null,t.widgetManager=null,t.renderer.off("beforeRender",this.measureWidgets),t.renderer.off("afterRender",this.renderWidgets)
var n=this.session.lineWidgets
n&&n.forEach((function(e){e&&e.el&&e.el.parentNode&&(e._inDocument=!1,e.el.parentNode.removeChild(e.el))}))}},e.prototype.updateOnFold=function(e,t){var n=t.lineWidgets
if(n&&e.action){for(var i=e.data,o=i.start.row,r=i.end.row,s="add"==e.action,a=o+1;a<r;a++)n[a]&&(n[a].hidden=s)
n[r]&&(s?n[o]?n[r].hidden=s:n[o]=n[r]:(n[o]==n[r]&&(n[o]=void 0),n[r].hidden=s))}},e.prototype.updateOnChange=function(e){var t=this.session.lineWidgets
if(t){var n=e.start.row,i=e.end.row-n
if(0===i);else if("remove"==e.action){var o=t.splice(n+1,i)
!t[n]&&o[o.length-1]&&(t[n]=o.pop()),o.forEach((function(e){e&&this.removeLineWidget(e)}),this),this.$updateRows()}else{var r=new Array(i)
t[n]&&null!=t[n].column&&e.start.column>t[n].column&&n++,r.unshift(n,0),t.splice.apply(t,r),this.$updateRows()}}},e.prototype.$updateRows=function(){var e=this.session.lineWidgets
if(e){var t=!0
e.forEach((function(e,n){if(e)for(t=!1,e.row=n;e.$oldWidget;)e.$oldWidget.row=n,e=e.$oldWidget})),t&&(this.session.lineWidgets=null)}},e.prototype.$registerLineWidget=function(e){this.session.lineWidgets||(this.session.lineWidgets=new Array(this.session.getLength()))
var t=this.session.lineWidgets[e.row]
return t&&(e.$oldWidget=t,t.el&&t.el.parentNode&&(t.el.parentNode.removeChild(t.el),t._inDocument=!1)),this.session.lineWidgets[e.row]=e,e},e.prototype.addLineWidget=function(e){if(this.$registerLineWidget(e),e.session=this.session,!this.editor)return e
var t=this.editor.renderer
e.html&&!e.el&&(e.el=i.createElement("div"),e.el.innerHTML=e.html),e.text&&!e.el&&(e.el=i.createElement("div"),e.el.textContent=e.text),e.el&&(i.addCssClass(e.el,"ace_lineWidgetContainer"),e.className&&i.addCssClass(e.el,e.className),e.el.style.position="absolute",e.el.style.zIndex=5,t.container.appendChild(e.el),e._inDocument=!0,e.coverGutter||(e.el.style.zIndex=3),null==e.pixelHeight&&(e.pixelHeight=e.el.offsetHeight)),null==e.rowCount&&(e.rowCount=e.pixelHeight/t.layerConfig.lineHeight)
var n=this.session.getFoldAt(e.row,0)
if(e.$fold=n,n){var o=this.session.lineWidgets
e.row!=n.end.row||o[n.start.row]?e.hidden=!0:o[n.start.row]=e}return this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows(),this.renderWidgets(null,t),this.onWidgetChanged(e),e},e.prototype.removeLineWidget=function(e){if(e._inDocument=!1,e.session=null,e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el),e.editor&&e.editor.destroy)try{e.editor.destroy()}catch(e){}if(this.session.lineWidgets){var t=this.session.lineWidgets[e.row]
if(t==e)this.session.lineWidgets[e.row]=e.$oldWidget,e.$oldWidget&&this.onWidgetChanged(e.$oldWidget)
else for(;t;){if(t.$oldWidget==e){t.$oldWidget=e.$oldWidget
break}t=t.$oldWidget}}this.session._emit("changeFold",{data:{start:{row:e.row}}}),this.$updateRows()},e.prototype.getWidgetsAtRow=function(e){for(var t=this.session.lineWidgets,n=t&&t[e],i=[];n;)i.push(n),n=n.$oldWidget
return i},e.prototype.onWidgetChanged=function(e){this.session._changedWidgets.push(e),this.editor&&this.editor.renderer.updateFull()},e.prototype.measureWidgets=function(e,t){var n=this.session._changedWidgets,i=t.layerConfig
if(n&&n.length){for(var o=1/0,r=0;r<n.length;r++){var s=n[r]
if(s&&s.el&&s.session==this.session){if(!s._inDocument){if(this.session.lineWidgets[s.row]!=s)continue
s._inDocument=!0,t.container.appendChild(s.el)}s.h=s.el.offsetHeight,s.fixedWidth||(s.w=s.el.offsetWidth,s.screenWidth=Math.ceil(s.w/i.characterWidth))
var a=s.h/i.lineHeight
s.coverLine&&(a-=this.session.getRowLineCount(s.row))<0&&(a=0),s.rowCount!=a&&(s.rowCount=a,s.row<o&&(o=s.row))}}o!=1/0&&(this.session._emit("changeFold",{data:{start:{row:o}}}),this.session.lineWidgetWidth=null),this.session._changedWidgets=[]}},e.prototype.renderWidgets=function(e,t){var n=t.layerConfig,i=this.session.lineWidgets
if(i){for(var o=Math.min(this.firstRow,n.firstRow),r=Math.max(this.lastRow,n.lastRow,i.length);o>0&&!i[o];)o--
this.firstRow=n.firstRow,this.lastRow=n.lastRow,t.$cursorLayer.config=n
for(var s=o;s<=r;s++){var a=i[s]
if(a&&a.el)if(a.hidden)a.el.style.top=-100-(a.pixelHeight||0)+"px"
else{a._inDocument||(a._inDocument=!0,t.container.appendChild(a.el))
var l=t.$cursorLayer.getPixelPosition({row:s,column:0},!0).top
a.coverLine||(l+=n.lineHeight*this.session.getRowLineCount(a.row)),a.el.style.top=l-n.offset+"px"
var c=a.coverGutter?0:t.gutterWidth
a.fixedWidth||(c-=t.scrollLeft),a.el.style.left=c+"px",a.fullWidth&&a.screenWidth&&(a.el.style.minWidth=n.width+2*n.padding+"px"),a.fixedWidth?a.el.style.right=t.scrollBar.getWidth()+"px":a.el.style.right=""}}}},e}()
t.LineWidgets=o})),ace.define("ace/keyboard/gutter_handler",["require","exports","module","ace/lib/keys","ace/mouse/default_gutter_handler"],(function(e,t,n){"use strict"
var i=e("../lib/keys"),o=e("../mouse/default_gutter_handler").GutterTooltip,r=function(){function e(e){this.editor=e,this.gutterLayer=e.renderer.$gutterLayer,this.element=e.renderer.$gutter,this.lines=e.renderer.$gutterLayer.$lines,this.activeRowIndex=null,this.activeLane=null,this.annotationTooltip=new o(this.editor)}return e.prototype.addListener=function(){this.element.addEventListener("keydown",this.$onGutterKeyDown.bind(this)),this.element.addEventListener("focusout",this.$blurGutter.bind(this)),this.editor.on("mousewheel",this.$blurGutter.bind(this))},e.prototype.removeListener=function(){this.element.removeEventListener("keydown",this.$onGutterKeyDown.bind(this)),this.element.removeEventListener("focusout",this.$blurGutter.bind(this)),this.editor.off("mousewheel",this.$blurGutter.bind(this))},e.prototype.$onGutterKeyDown=function(e){if(this.annotationTooltip.isOpen)return e.preventDefault(),void(e.keyCode===i.escape&&this.annotationTooltip.hideTooltip())
if(e.target===this.element){if(e.keyCode!=i.enter)return
e.preventDefault()
var t=this.editor.getCursorPosition().row
return this.editor.isRowVisible(t)||this.editor.scrollToLine(t,!0,!0),void setTimeout(function(){var e=this.$rowToRowIndex(this.gutterLayer.$cursorCell.row),t=this.$findNearestFoldWidget(e),n=this.$findNearestAnnotation(e)
if(null!==t||null!==n)return null===t&&null!==n?(this.activeRowIndex=n,this.activeLane="annotation",void this.$focusAnnotation(this.activeRowIndex)):null!==t&&null===n?(this.activeRowIndex=t,this.activeLane="fold",void this.$focusFoldWidget(this.activeRowIndex)):Math.abs(n-e)<Math.abs(t-e)?(this.activeRowIndex=n,this.activeLane="annotation",void this.$focusAnnotation(this.activeRowIndex)):(this.activeRowIndex=t,this.activeLane="fold",void this.$focusFoldWidget(this.activeRowIndex))}.bind(this),10)}this.$handleGutterKeyboardInteraction(e),setTimeout(function(){this.editor._signal("gutterkeydown",new s(e,this))}.bind(this),10)},e.prototype.$handleGutterKeyboardInteraction=function(e){if(e.keyCode!==i.tab){if(e.keyCode===i.escape)return e.preventDefault(),this.$blurGutter(),this.element.focus(),void(this.lane=null)
if(e.keyCode!==i.up)if(e.keyCode!==i.down){if(e.keyCode===i.left)return e.preventDefault(),void this.$switchLane("annotation")
if(e.keyCode===i.right)return e.preventDefault(),void this.$switchLane("fold")
if(e.keyCode!==i.enter&&e.keyCode!==i.space);else switch(e.preventDefault(),this.activeLane){case"fold":if("start"===this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)]){var t=this.$rowIndexToRow(this.activeRowIndex)
this.editor.session.onFoldWidgetClick(this.$rowIndexToRow(this.activeRowIndex),e),setTimeout(function(){this.$rowIndexToRow(this.activeRowIndex)!==t&&(this.$blurFoldWidget(this.activeRowIndex),this.activeRowIndex=this.$rowToRowIndex(t),this.$focusFoldWidget(this.activeRowIndex))}.bind(this),10)
break}if("end"===this.gutterLayer.session.foldWidgets[this.$rowIndexToRow(this.activeRowIndex)])break
return
case"annotation":var n=this.lines.cells[this.activeRowIndex].element.childNodes[2].getBoundingClientRect(),o=this.annotationTooltip.getElement().style
o.left=n.right+"px",o.top=n.bottom+"px",this.annotationTooltip.showTooltip(this.$rowIndexToRow(this.activeRowIndex))}}else switch(e.preventDefault(),this.activeLane){case"fold":this.$moveFoldWidgetDown()
break
case"annotation":this.$moveAnnotationDown()}else switch(e.preventDefault(),this.activeLane){case"fold":this.$moveFoldWidgetUp()
break
case"annotation":this.$moveAnnotationUp()}}else e.preventDefault()},e.prototype.$blurGutter=function(){if(null!==this.activeRowIndex)switch(this.activeLane){case"fold":this.$blurFoldWidget(this.activeRowIndex)
break
case"annotation":this.$blurAnnotation(this.activeRowIndex)}this.annotationTooltip.isOpen&&this.annotationTooltip.hideTooltip()},e.prototype.$isFoldWidgetVisible=function(e){var t=this.editor.isRowFullyVisible(this.$rowIndexToRow(e)),n="none"!==this.$getFoldWidget(e).style.display
return t&&n},e.prototype.$isAnnotationVisible=function(e){var t=this.editor.isRowFullyVisible(this.$rowIndexToRow(e)),n="none"!==this.$getAnnotation(e).style.display
return t&&n},e.prototype.$getFoldWidget=function(e){return this.lines.get(e).element.childNodes[1]},e.prototype.$getAnnotation=function(e){return this.lines.get(e).element.childNodes[2]},e.prototype.$findNearestFoldWidget=function(e){if(this.$isFoldWidgetVisible(e))return e
for(var t=0;e-t>0||e+t<this.lines.getLength()-1;){if(e-++t>=0&&this.$isFoldWidgetVisible(e-t))return e-t
if(e+t<=this.lines.getLength()-1&&this.$isFoldWidgetVisible(e+t))return e+t}return null},e.prototype.$findNearestAnnotation=function(e){if(this.$isAnnotationVisible(e))return e
for(var t=0;e-t>0||e+t<this.lines.getLength()-1;){if(e-++t>=0&&this.$isAnnotationVisible(e-t))return e-t
if(e+t<=this.lines.getLength()-1&&this.$isAnnotationVisible(e+t))return e+t}return null},e.prototype.$focusFoldWidget=function(e){if(null!=e){var t=this.$getFoldWidget(e)
t.classList.add(this.editor.renderer.keyboardFocusClassName),t.focus()}},e.prototype.$focusAnnotation=function(e){if(null!=e){var t=this.$getAnnotation(e)
t.classList.add(this.editor.renderer.keyboardFocusClassName),t.focus()}},e.prototype.$blurFoldWidget=function(e){var t=this.$getFoldWidget(e)
t.classList.remove(this.editor.renderer.keyboardFocusClassName),t.blur()},e.prototype.$blurAnnotation=function(e){var t=this.$getAnnotation(e)
t.classList.remove(this.editor.renderer.keyboardFocusClassName),t.blur()},e.prototype.$moveFoldWidgetUp=function(){for(var e=this.activeRowIndex;e>0;)if(e--,this.$isFoldWidgetVisible(e))return this.$blurFoldWidget(this.activeRowIndex),this.activeRowIndex=e,void this.$focusFoldWidget(this.activeRowIndex)},e.prototype.$moveFoldWidgetDown=function(){for(var e=this.activeRowIndex;e<this.lines.getLength()-1;)if(e++,this.$isFoldWidgetVisible(e))return this.$blurFoldWidget(this.activeRowIndex),this.activeRowIndex=e,void this.$focusFoldWidget(this.activeRowIndex)},e.prototype.$moveAnnotationUp=function(){for(var e=this.activeRowIndex;e>0;)if(e--,this.$isAnnotationVisible(e))return this.$blurAnnotation(this.activeRowIndex),this.activeRowIndex=e,void this.$focusAnnotation(this.activeRowIndex)},e.prototype.$moveAnnotationDown=function(){for(var e=this.activeRowIndex;e<this.lines.getLength()-1;)if(e++,this.$isAnnotationVisible(e))return this.$blurAnnotation(this.activeRowIndex),this.activeRowIndex=e,void this.$focusAnnotation(this.activeRowIndex)},e.prototype.$switchLane=function(e){switch(e){case"annotation":if("annotation"===this.activeLane)break
var t=this.$findNearestAnnotation(this.activeRowIndex)
if(null==t)break
this.activeLane="annotation",this.$blurFoldWidget(this.activeRowIndex),this.activeRowIndex=t,this.$focusAnnotation(this.activeRowIndex)
break
case"fold":if("fold"===this.activeLane)break
var n=this.$findNearestFoldWidget(this.activeRowIndex)
if(null==n)break
this.activeLane="fold",this.$blurAnnotation(this.activeRowIndex),this.activeRowIndex=n,this.$focusFoldWidget(this.activeRowIndex)}},e.prototype.$rowIndexToRow=function(e){var t=this.lines.get(e)
return t?t.row:null},e.prototype.$rowToRowIndex=function(e){for(var t=0;t<this.lines.getLength();t++)if(this.lines.get(t).row==e)return t
return null},e}()
t.GutterKeyboardHandler=r
var s=function(){function e(e,t){this.gutterKeyboardHandler=t,this.domEvent=e}return e.prototype.getKey=function(){return i.keyCodeToString(this.domEvent.keyCode)},e.prototype.getRow=function(){return this.gutterKeyboardHandler.$rowIndexToRow(this.gutterKeyboardHandler.activeRowIndex)},e.prototype.isInAnnotationLane=function(){return"annotation"===this.gutterKeyboardHandler.activeLane},e.prototype.isInFoldLane=function(){return"fold"===this.gutterKeyboardHandler.activeLane},e}()
t.GutterKeyboardEvent=s})),ace.define("ace/editor",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config","ace/token_iterator","ace/line_widgets","ace/keyboard/gutter_handler","ace/config","ace/clipboard","ace/lib/keys"],(function(e,t,n){"use strict"
var i=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=e("./lib/oop"),r=e("./lib/dom"),s=e("./lib/lang"),a=e("./lib/useragent"),l=e("./keyboard/textinput").TextInput,c=e("./mouse/mouse_handler").MouseHandler,h=e("./mouse/fold_handler").FoldHandler,u=e("./keyboard/keybinding").KeyBinding,d=e("./edit_session").EditSession,g=e("./search").Search,p=e("./range").Range,f=e("./lib/event_emitter").EventEmitter,m=e("./commands/command_manager").CommandManager,v=e("./commands/default_commands").commands,w=e("./config"),y=e("./token_iterator").TokenIterator,b=e("./line_widgets").LineWidgets,$=e("./keyboard/gutter_handler").GutterKeyboardHandler,C=e("./config").nls,S=e("./clipboard"),A=e("./lib/keys"),x=function(){function e(t,n,i){this.$toDestroy=[]
var o=t.getContainerElement()
this.container=o,this.renderer=t,this.id="editor"+ ++e.$uid,this.commands=new m(a.isMac?"mac":"win",v),"object"==typeof document&&(this.textInput=new l(t.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.$mouseHandler=new c(this),new h(this)),this.keyBinding=new u(this),this.$search=(new g).set({wrap:!0}),this.$historyTracker=this.$historyTracker.bind(this),this.commands.on("exec",this.$historyTracker),this.$initOperationListeners(),this._$emitInputEvent=s.delayedCall(function(){this._signal("input",{}),this.session&&!this.session.destroyed&&this.session.bgTokenizer.scheduleStart()}.bind(this)),this.on("change",(function(e,t){t._$emitInputEvent.schedule(31)})),this.setSession(n||i&&i.session||new d("")),w.resetOptions(this),i&&this.setOptions(i),w._signal("editor",this)}return e.prototype.$initOperationListeners=function(){this.commands.on("exec",this.startOperation.bind(this),!0),this.commands.on("afterExec",this.endOperation.bind(this),!0),this.$opResetTimer=s.delayedCall(this.endOperation.bind(this,!0)),this.on("change",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.docChanged=!0}.bind(this),!0),this.on("changeSelection",function(){this.curOp||(this.startOperation(),this.curOp.selectionBefore=this.$lastSel),this.curOp.selectionChanged=!0}.bind(this),!0)},e.prototype.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return
this.prevOp=this.curOp}e||(this.previousCommand=null,e={}),this.$opResetTimer.schedule(),this.curOp=this.session.curOp={command:e.command||{},args:e.args,scrollTop:this.renderer.scrollTop},this.curOp.selectionBefore=this.selection.toJSON()},e.prototype.endOperation=function(e){if(this.curOp&&this.session){if(e&&!1===e.returnValue||!this.session)return this.curOp=null
if(1==e&&this.curOp.command&&"mouse"==this.curOp.command.name)return
if(this._signal("beforeEndOperation"),!this.curOp)return
var t=this.curOp.command,n=t&&t.scrollIntoView
if(n){switch(n){case"center-animate":n="animate"
case"center":this.renderer.scrollCursorIntoView(null,.5)
break
case"animate":case"cursor":this.renderer.scrollCursorIntoView()
break
case"selectionPart":var i=this.selection.getRange(),o=this.renderer.layerConfig;(i.start.row>=o.lastRow||i.end.row<=o.firstRow)&&this.renderer.scrollSelectionIntoView(this.selection.anchor,this.selection.lead)}"animate"==n&&this.renderer.animateScrolling(this.curOp.scrollTop)}var r=this.selection.toJSON()
this.curOp.selectionAfter=r,this.$lastSel=this.selection.toJSON(),this.session.getUndoManager().addSelection(r),this.prevOp=this.curOp,this.curOp=null}},e.prototype.$historyTracker=function(e){if(this.$mergeUndoDeltas){var t=this.prevOp,n=this.$mergeableCommands,i=t.command&&e.command.name==t.command.name
if("insertstring"==e.command.name){var o=e.args
void 0===this.mergeNextCommand&&(this.mergeNextCommand=!0),i=i&&this.mergeNextCommand&&(!/\s/.test(o)||/\s/.test(t.args)),this.mergeNextCommand=!0}else i=i&&-1!==n.indexOf(e.command.name)
"always"!=this.$mergeUndoDeltas&&Date.now()-this.sequenceStartTime>2e3&&(i=!1),i?this.session.mergeUndoDeltas=!0:-1!==n.indexOf(e.command.name)&&(this.sequenceStartTime=Date.now())}},e.prototype.setKeyboardHandler=function(e,t){if(e&&"string"==typeof e&&"ace"!=e){this.$keybindingId=e
var n=this
w.loadModule(["keybinding",e],(function(i){n.$keybindingId==e&&n.keyBinding.setKeyboardHandler(i&&i.handler),t&&t()}))}else this.$keybindingId=null,this.keyBinding.setKeyboardHandler(e),t&&t()},e.prototype.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},e.prototype.setSession=function(e){if(this.session!=e){this.curOp&&this.endOperation(),this.curOp={}
var t=this.session
if(t){this.session.off("change",this.$onDocumentChange),this.session.off("changeMode",this.$onChangeMode),this.session.off("tokenizerUpdate",this.$onTokenizerUpdate),this.session.off("changeTabSize",this.$onChangeTabSize),this.session.off("changeWrapLimit",this.$onChangeWrapLimit),this.session.off("changeWrapMode",this.$onChangeWrapMode),this.session.off("changeFold",this.$onChangeFold),this.session.off("changeFrontMarker",this.$onChangeFrontMarker),this.session.off("changeBackMarker",this.$onChangeBackMarker),this.session.off("changeBreakpoint",this.$onChangeBreakpoint),this.session.off("changeAnnotation",this.$onChangeAnnotation),this.session.off("changeOverwrite",this.$onCursorChange),this.session.off("changeScrollTop",this.$onScrollTopChange),this.session.off("changeScrollLeft",this.$onScrollLeftChange)
var n=this.session.getSelection()
n.off("changeCursor",this.$onCursorChange),n.off("changeSelection",this.$onSelectionChange)}this.session=e,e?(this.$onDocumentChange=this.onDocumentChange.bind(this),e.on("change",this.$onDocumentChange),this.renderer.setSession(e),this.$onChangeMode=this.onChangeMode.bind(this),e.on("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),e.on("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),e.on("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),e.on("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),e.on("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),e.on("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.on("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.on("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.on("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.on("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.on("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.on("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.on("changeScrollLeft",this.$onScrollLeftChange),this.selection=e.getSelection(),this.selection.on("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.on("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.onCursorChange(),this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull()):(this.selection=null,this.renderer.setSession(e)),this._signal("changeSession",{session:e,oldSession:t}),this.curOp=null,t&&t._signal("changeEditor",{oldEditor:this}),e&&e._signal("changeEditor",{editor:this}),e&&!e.destroyed&&e.bgTokenizer.scheduleStart()}},e.prototype.getSession=function(){return this.session},e.prototype.setValue=function(e,t){return this.session.doc.setValue(e),t?1==t?this.navigateFileEnd():-1==t&&this.navigateFileStart():this.selectAll(),e},e.prototype.getValue=function(){return this.session.getValue()},e.prototype.getSelection=function(){return this.selection},e.prototype.resize=function(e){this.renderer.onResize(e)},e.prototype.setTheme=function(e,t){this.renderer.setTheme(e,t)},e.prototype.getTheme=function(){return this.renderer.getTheme()},e.prototype.setStyle=function(e){this.renderer.setStyle(e)},e.prototype.unsetStyle=function(e){this.renderer.unsetStyle(e)},e.prototype.getFontSize=function(){return this.getOption("fontSize")||r.computedStyle(this.container).fontSize},e.prototype.setFontSize=function(e){this.setOption("fontSize",e)},e.prototype.$highlightBrackets=function(){if(!this.$highlightPending){var e=this
this.$highlightPending=!0,setTimeout((function(){e.$highlightPending=!1
var t=e.session
if(t&&!t.destroyed){t.$bracketHighlight&&(t.$bracketHighlight.markerIds.forEach((function(e){t.removeMarker(e)})),t.$bracketHighlight=null)
var n=e.getCursorPosition(),i=e.getKeyboardHandler(),o=i&&i.$getDirectionForHighlight&&i.$getDirectionForHighlight(e),r=t.getMatchingBracketRanges(n,o)
if(!r){var s=new y(t,n.row,n.column).getCurrentToken()
if(s&&/\b(?:tag-open|tag-name)/.test(s.type)){var a=t.getMatchingTags(n)
a&&(r=[a.openTagName,a.closeTagName])}}if(!r&&t.$mode.getMatching&&(r=t.$mode.getMatching(e.session)),r){var l="ace_bracket"
Array.isArray(r)?1==r.length&&(l="ace_error_bracket"):r=[r],2==r.length&&(0==p.comparePoints(r[0].end,r[1].start)?r=[p.fromPoints(r[0].start,r[1].end)]:0==p.comparePoints(r[0].start,r[1].end)&&(r=[p.fromPoints(r[1].start,r[0].end)])),t.$bracketHighlight={ranges:r,markerIds:r.map((function(e){return t.addMarker(e,l,"text")}))},e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide()}else e.getHighlightIndentGuides()&&e.renderer.$textLayer.$highlightIndentGuide()}}),50)}},e.prototype.focus=function(){this.textInput.focus()},e.prototype.isFocused=function(){return this.textInput.isFocused()},e.prototype.blur=function(){this.textInput.blur()},e.prototype.onFocus=function(e){this.$isFocused||(this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus",e))},e.prototype.onBlur=function(e){this.$isFocused&&(this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur",e))},e.prototype.$cursorChange=function(){this.renderer.updateCursor(),this.$highlightBrackets(),this.$updateHighlightActiveLine()},e.prototype.onDocumentChange=function(e){var t=this.session.$useWrapMode,n=e.start.row==e.end.row?e.end.row:1/0
this.renderer.updateLines(e.start.row,n,t),this._signal("change",e),this.$cursorChange()},e.prototype.onTokenizerUpdate=function(e){var t=e.data
this.renderer.updateLines(t.first,t.last)},e.prototype.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},e.prototype.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},e.prototype.onCursorChange=function(){this.$cursorChange(),this._signal("changeSelection")},e.prototype.$updateHighlightActiveLine=function(){var e,t=this.getSession()
if(this.$highlightActiveLine&&("line"==this.$selectionStyle&&this.selection.isMultiLine()||(e=this.getCursorPosition()),this.renderer.theme&&this.renderer.theme.$selectionColorConflict&&!this.selection.isEmpty()&&(e=!1),!this.renderer.$maxLines||1!==this.session.getLength()||this.renderer.$minLines>1||(e=!1)),t.$highlightLineMarker&&!e)t.removeMarker(t.$highlightLineMarker.id),t.$highlightLineMarker=null
else if(!t.$highlightLineMarker&&e){var n=new p(e.row,e.column,e.row,1/0)
n.id=t.addMarker(n,"ace_active-line","screenLine"),t.$highlightLineMarker=n}else e&&(t.$highlightLineMarker.start.row=e.row,t.$highlightLineMarker.end.row=e.row,t.$highlightLineMarker.start.column=e.column,t._signal("changeBackMarker"))},e.prototype.onSelectionChange=function(e){var t=this.session
if(t.$selectionMarker&&t.removeMarker(t.$selectionMarker),t.$selectionMarker=null,this.selection.isEmpty())this.$updateHighlightActiveLine()
else{var n=this.selection.getRange(),i=this.getSelectionStyle()
t.$selectionMarker=t.addMarker(n,"ace_selection",i)}var o=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp()
this.session.highlight(o),this._signal("changeSelection")},e.prototype.$getSelectionHighLightRegexp=function(){var e=this.session,t=this.getSelectionRange()
if(!t.isEmpty()&&!t.isMultiLine()){var n=t.start.column,i=t.end.column,o=e.getLine(t.start.row),r=o.substring(n,i)
if(!(r.length>5e3)&&/[\w\d]/.test(r)){var s=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:r}),a=o.substring(n-1,i+1)
if(s.test(a))return s}}},e.prototype.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},e.prototype.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},e.prototype.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},e.prototype.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},e.prototype.onChangeMode=function(e){this.renderer.updateText(),this._emit("changeMode",e)},e.prototype.onChangeWrapLimit=function(){this.renderer.updateFull()},e.prototype.onChangeWrapMode=function(){this.renderer.onResize(!0)},e.prototype.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},e.prototype.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())},e.prototype.getCopyText=function(){var e=this.getSelectedText(),t=this.session.doc.getNewLineCharacter(),n=!1
if(!e&&this.$copyWithEmptySelection){n=!0
for(var i=this.selection.getAllRanges(),o=0;o<i.length;o++){var r=i[o]
o&&i[o-1].start.row==r.start.row||(e+=this.session.getLine(r.start.row)+t)}}var s={text:e}
return this._signal("copy",s),S.lineMode=!!n&&s.text,s.text},e.prototype.onCopy=function(){this.commands.exec("copy",this)},e.prototype.onCut=function(){this.commands.exec("cut",this)},e.prototype.onPaste=function(e,t){var n={text:e,event:t}
this.commands.exec("paste",this,n)},e.prototype.$handlePaste=function(e){"string"==typeof e&&(e={text:e}),this._signal("paste",e)
var t=e.text,n=t===S.lineMode,i=this.session
if(!this.inMultiSelectMode||this.inVirtualSelectionMode)n?i.insert({row:this.selection.lead.row,column:0},t):this.insert(t)
else if(n)this.selection.rangeList.ranges.forEach((function(e){i.insert({row:e.start.row,column:0},t)}))
else{var o=t.split(/\r\n|\r|\n/),r=this.selection.rangeList.ranges,s=!(2!=o.length||o[0]&&o[1])
if(o.length!=r.length||s)return this.commands.exec("insertstring",this,t)
for(var a=r.length;a--;){var l=r[a]
l.isEmpty()||i.remove(l),i.insert(l.start,o[a])}}},e.prototype.execCommand=function(e,t){return this.commands.exec(e,this,t)},e.prototype.insert=function(e,t){var n=this.session,i=n.getMode(),o=this.getCursorPosition()
if(this.getBehavioursEnabled()&&!t){var r=i.transformAction(n.getState(o.row),"insertion",this,n,e)
r&&(e!==r.text&&(this.inVirtualSelectionMode||(this.session.mergeUndoDeltas=!1,this.mergeNextCommand=!1)),e=r.text)}if("\t"==e&&(e=this.session.getTabString()),this.selection.isEmpty())this.session.getOverwrite()&&-1==e.indexOf("\n")&&((s=new p.fromPoints(o,o)).end.column+=e.length,this.session.remove(s))
else{var s=this.getSelectionRange()
o=this.session.remove(s),this.clearSelection()}if("\n"==e||"\r\n"==e){var a=n.getLine(o.row)
if(o.column>a.search(/\S|$/)){var l=a.substr(o.column).search(/\S|$/)
n.doc.removeInLine(o.row,o.column,o.column+l)}}this.clearSelection()
var c=o.column,h=n.getState(o.row),u=(a=n.getLine(o.row),i.checkOutdent(h,a,e))
if(n.insert(o,e),r&&r.selection&&(2==r.selection.length?this.selection.setSelectionRange(new p(o.row,c+r.selection[0],o.row,c+r.selection[1])):this.selection.setSelectionRange(new p(o.row+r.selection[0],r.selection[1],o.row+r.selection[2],r.selection[3]))),this.$enableAutoIndent){if(n.getDocument().isNewLine(e)){var d=i.getNextLineIndent(h,a.slice(0,o.column),n.getTabString())
n.insert({row:o.row+1,column:0},d)}u&&i.autoOutdent(h,n,o.row)}},e.prototype.autoIndent=function(){var e,t,n=this.session,i=n.getMode()
if(this.selection.isEmpty())e=0,t=n.doc.getLength()-1
else{var o=this.getSelectionRange()
e=o.start.row,t=o.end.row}for(var r,s,a,l="",c="",h="",u=n.getTabString(),d=e;d<=t;d++)d>0&&(l=n.getState(d-1),c=n.getLine(d-1),h=i.getNextLineIndent(l,c,u)),r=n.getLine(d),h!==(s=i.$getIndent(r))&&(s.length>0&&(a=new p(d,0,d,s.length),n.remove(a)),h.length>0&&n.insert({row:d,column:0},h)),i.autoOutdent(l,n,d)},e.prototype.onTextInput=function(e,t){if(!t)return this.keyBinding.onTextInput(e)
this.startOperation({command:{name:"insertstring"}})
var n=this.applyComposition.bind(this,e,t)
this.selection.rangeCount?this.forEachSelection(n):n(),this.endOperation()},e.prototype.applyComposition=function(e,t){var n;(t.extendLeft||t.extendRight)&&((n=this.selection.getRange()).start.column-=t.extendLeft,n.end.column+=t.extendRight,n.start.column<0&&(n.start.row--,n.start.column+=this.session.getLine(n.start.row).length+1),this.selection.setRange(n),e||n.isEmpty()||this.remove()),!e&&this.selection.isEmpty()||this.insert(e,!0),(t.restoreStart||t.restoreEnd)&&((n=this.selection.getRange()).start.column-=t.restoreStart,n.end.column-=t.restoreEnd,this.selection.setRange(n))},e.prototype.onCommandKey=function(e,t,n){return this.keyBinding.onCommandKey(e,t,n)},e.prototype.setOverwrite=function(e){this.session.setOverwrite(e)},e.prototype.getOverwrite=function(){return this.session.getOverwrite()},e.prototype.toggleOverwrite=function(){this.session.toggleOverwrite()},e.prototype.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)},e.prototype.getScrollSpeed=function(){return this.getOption("scrollSpeed")},e.prototype.setDragDelay=function(e){this.setOption("dragDelay",e)},e.prototype.getDragDelay=function(){return this.getOption("dragDelay")},e.prototype.setSelectionStyle=function(e){this.setOption("selectionStyle",e)},e.prototype.getSelectionStyle=function(){return this.getOption("selectionStyle")},e.prototype.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)},e.prototype.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")},e.prototype.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},e.prototype.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},e.prototype.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)},e.prototype.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},e.prototype.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)},e.prototype.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},e.prototype.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)},e.prototype.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},e.prototype.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)},e.prototype.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},e.prototype.setHighlightIndentGuides=function(e){this.renderer.setHighlightIndentGuides(e)},e.prototype.getHighlightIndentGuides=function(){return this.renderer.getHighlightIndentGuides()},e.prototype.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)},e.prototype.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},e.prototype.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)},e.prototype.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},e.prototype.setReadOnly=function(e){this.setOption("readOnly",e)},e.prototype.getReadOnly=function(){return this.getOption("readOnly")},e.prototype.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)},e.prototype.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")},e.prototype.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)},e.prototype.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")},e.prototype.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)},e.prototype.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")},e.prototype.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},e.prototype.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},e.prototype.remove=function(e){this.selection.isEmpty()&&("left"==e?this.selection.selectLeft():this.selection.selectRight())
var t=this.getSelectionRange()
if(this.getBehavioursEnabled()){var n=this.session,i=n.getState(t.start.row),o=n.getMode().transformAction(i,"deletion",this,n,t)
if(0===t.end.column){var r=n.getTextRange(t)
if("\n"==r[r.length-1]){var s=n.getLine(t.end.row);/^\s+$/.test(s)&&(t.end.column=s.length)}}o&&(t=o)}this.session.remove(t),this.clearSelection()},e.prototype.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},e.prototype.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},e.prototype.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.selection.isEmpty()&&this.selection.selectLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},e.prototype.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd()
var e=this.getSelectionRange()
e.start.column==e.end.column&&e.start.row==e.end.row&&(e.end.column=0,e.end.row++),this.session.remove(e),this.clearSelection()},e.prototype.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection())
var e=this.getCursorPosition()
this.insert("\n"),this.moveCursorToPosition(e)},e.prototype.setGhostText=function(e,t){this.session.widgetManager||(this.session.widgetManager=new b(this.session),this.session.widgetManager.attach(this)),this.renderer.setGhostText(e,t)},e.prototype.removeGhostText=function(){this.session.widgetManager&&this.renderer.removeGhostText()},e.prototype.transposeLetters=function(){if(this.selection.isEmpty()){var e=this.getCursorPosition(),t=e.column
if(0!==t){var n,i,o=this.session.getLine(e.row)
t<o.length?(n=o.charAt(t)+o.charAt(t-1),i=new p(e.row,t-1,e.row,t+1)):(n=o.charAt(t-1)+o.charAt(t-2),i=new p(e.row,t-2,e.row,t)),this.session.replace(i,n),this.session.selection.moveToPosition(i.end)}}},e.prototype.toLowerCase=function(){var e=this.getSelectionRange()
this.selection.isEmpty()&&this.selection.selectWord()
var t=this.getSelectionRange(),n=this.session.getTextRange(t)
this.session.replace(t,n.toLowerCase()),this.selection.setSelectionRange(e)},e.prototype.toUpperCase=function(){var e=this.getSelectionRange()
this.selection.isEmpty()&&this.selection.selectWord()
var t=this.getSelectionRange(),n=this.session.getTextRange(t)
this.session.replace(t,n.toUpperCase()),this.selection.setSelectionRange(e)},e.prototype.indent=function(){var e=this.session,t=this.getSelectionRange()
if(!(t.start.row<t.end.row)){if(t.start.column<t.end.column){var n=e.getTextRange(t)
if(!/^\s+$/.test(n))return h=this.$getSelectedRows(),void e.indentRows(h.first,h.last,"\t")}var i=e.getLine(t.start.row),o=t.start,r=e.getTabSize(),a=e.documentToScreenColumn(o.row,o.column)
if(this.session.getUseSoftTabs())var l=r-a%r,c=s.stringRepeat(" ",l)
else{for(l=a%r;" "==i[t.start.column-1]&&l;)t.start.column--,l--
this.selection.setSelectionRange(t),c="\t"}return this.insert(c)}var h=this.$getSelectedRows()
e.indentRows(h.first,h.last,"\t")},e.prototype.blockIndent=function(){var e=this.$getSelectedRows()
this.session.indentRows(e.first,e.last,"\t")},e.prototype.blockOutdent=function(){var e=this.session.getSelection()
this.session.outdentRows(e.getRange())},e.prototype.sortLines=function(){for(var e=this.$getSelectedRows(),t=this.session,n=[],i=e.first;i<=e.last;i++)n.push(t.getLine(i))
n.sort((function(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}))
var o=new p(0,0,0,0)
for(i=e.first;i<=e.last;i++){var r=t.getLine(i)
o.start.row=i,o.end.row=i,o.end.column=r.length,t.replace(o,n[i-e.first])}},e.prototype.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row),t=this.$getSelectedRows()
this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)},e.prototype.toggleBlockComment=function(){var e=this.getCursorPosition(),t=this.session.getState(e.row),n=this.getSelectionRange()
this.session.getMode().toggleBlockComment(t,this.session,n,e)},e.prototype.getNumberAt=function(e,t){var n=/[\-]?[0-9]+(?:\.[0-9]+)?/g
n.lastIndex=0
for(var i=this.session.getLine(e);n.lastIndex<t;){var o=n.exec(i)
if(o.index<=t&&o.index+o[0].length>=t)return{value:o[0],start:o.index,end:o.index+o[0].length}}return null},e.prototype.modifyNumber=function(e){var t=this.selection.getCursor().row,n=this.selection.getCursor().column,i=new p(t,n-1,t,n),o=this.session.getTextRange(i)
if(!isNaN(parseFloat(o))&&isFinite(o)){var r=this.getNumberAt(t,n)
if(r){var s=r.value.indexOf(".")>=0?r.start+r.value.indexOf(".")+1:r.end,a=r.start+r.value.length-s,l=parseFloat(r.value)
l*=Math.pow(10,a),s!==r.end&&n<s?e*=Math.pow(10,r.end-n-1):e*=Math.pow(10,r.end-n),l+=e
var c=(l/=Math.pow(10,a)).toFixed(a),h=new p(t,r.start,t,r.end)
this.session.replace(h,c),this.moveCursorTo(t,Math.max(r.start+1,n+c.length-r.value.length))}}else this.toggleWord()},e.prototype.toggleWord=function(){var e=this.selection.getCursor().row,t=this.selection.getCursor().column
this.selection.selectWord()
var n=this.getSelectedText(),i=this.selection.getWordRange().start.column,o=n.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g,"$1 ").split(/\s/),r=t-i-1
r<0&&(r=0)
var a=0,l=0,c=this
n.match(/[A-Za-z0-9_]+/)&&o.forEach((function(t,o){l=a+t.length,r>=a&&r<=l&&(n=t,c.selection.clearSelection(),c.moveCursorTo(e,a+i),c.selection.selectTo(e,l+i)),a=l}))
for(var h,u=this.$toggleWordPairs,d=0;d<u.length;d++)for(var g=u[d],p=0;p<=1;p++){var f=+!p,m=n.match(new RegExp("^\\s?_?("+s.escapeRegExp(g[p])+")\\s?$","i"))
m&&n.match(new RegExp("([_]|^|\\s)("+s.escapeRegExp(m[1])+")($|\\s)","g"))&&(h=n.replace(new RegExp(s.escapeRegExp(g[p]),"i"),(function(e){var t=g[f]
return e.toUpperCase()==e?t=t.toUpperCase():e.charAt(0).toUpperCase()==e.charAt(0)&&(t=t.substr(0,0)+g[f].charAt(0).toUpperCase()+t.substr(1)),t})),this.insert(h),h="")}},e.prototype.findLinkAt=function(e,t){var n,o,r=this.session.getLine(e).split(/((?:https?|ftp):\/\/[\S]+)/),s=t
s<0&&(s=0)
var a,l=0,c=0
try{for(var h=i(r),u=h.next();!u.done;u=h.next()){var d=u.value
if(c=l+d.length,s>=l&&s<=c&&d.match(/((?:https?|ftp):\/\/[\S]+)/)){a=d.replace(/[\s:.,'";}\]]+$/,"")
break}l=c}}catch(e){n={error:e}}finally{try{u&&!u.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}return a},e.prototype.openLink=function(){var e=this.selection.getCursor(),t=this.findLinkAt(e.row,e.column)
return t&&window.open(t,"_blank"),null!=t},e.prototype.removeLines=function(){var e=this.$getSelectedRows()
this.session.removeFullLines(e.first,e.last),this.clearSelection()},e.prototype.duplicateSelection=function(){var e=this.selection,t=this.session,n=e.getRange(),i=e.isBackwards()
if(n.isEmpty()){var o=n.start.row
t.duplicateLines(o,o)}else{var r=i?n.start:n.end,s=t.insert(r,t.getTextRange(n),!1)
n.start=r,n.end=s,e.setSelectionRange(n,i)}},e.prototype.moveLinesDown=function(){this.$moveLines(1,!1)},e.prototype.moveLinesUp=function(){this.$moveLines(-1,!1)},e.prototype.moveText=function(e,t,n){return this.session.moveText(e,t,n)},e.prototype.copyLinesUp=function(){this.$moveLines(-1,!0)},e.prototype.copyLinesDown=function(){this.$moveLines(1,!0)},e.prototype.$moveLines=function(e,t){var n,i,o=this.selection
if(!o.inMultiSelectMode||this.inVirtualSelectionMode){var r=o.toOrientedRange()
n=this.$getSelectedRows(r),i=this.session.$moveLines(n.first,n.last,t?0:e),t&&-1==e&&(i=0),r.moveBy(i,0),o.fromOrientedRange(r)}else{var s=o.rangeList.ranges
o.rangeList.detach(this.session),this.inVirtualSelectionMode=!0
for(var a=0,l=0,c=s.length,h=0;h<c;h++){var u=h
s[h].moveBy(a,0)
for(var d=(n=this.$getSelectedRows(s[h])).first,g=n.last;++h<c;){l&&s[h].moveBy(l,0)
var p=this.$getSelectedRows(s[h])
if(t&&p.first!=g)break
if(!t&&p.first>g+1)break
g=p.last}for(h--,a=this.session.$moveLines(d,g,t?0:e),t&&-1==e&&(u=h+1);u<=h;)s[u].moveBy(a,0),u++
t||(a=0),l+=a}o.fromOrientedRange(o.ranges[0]),o.rangeList.attach(this.session),this.inVirtualSelectionMode=!1}},e.prototype.$getSelectedRows=function(e){return e=(e||this.getSelectionRange()).collapseRows(),{first:this.session.getRowFoldStart(e.start.row),last:this.session.getRowFoldEnd(e.end.row)}},e.prototype.onCompositionStart=function(e){this.renderer.showComposition(e)},e.prototype.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)},e.prototype.onCompositionEnd=function(){this.renderer.hideComposition()},e.prototype.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},e.prototype.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},e.prototype.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()},e.prototype.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()},e.prototype.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},e.prototype.$moveByPage=function(e,t){var n=this.renderer,i=this.renderer.layerConfig,o=e*Math.floor(i.height/i.lineHeight)
!0===t?this.selection.$moveSelection((function(){this.moveCursorBy(o,0)})):!1===t&&(this.selection.moveCursorBy(o,0),this.selection.clearSelection())
var r=n.scrollTop
n.scrollBy(0,o*i.lineHeight),null!=t&&n.scrollCursorIntoView(null,.5),n.animateScrolling(r)},e.prototype.selectPageDown=function(){this.$moveByPage(1,!0)},e.prototype.selectPageUp=function(){this.$moveByPage(-1,!0)},e.prototype.gotoPageDown=function(){this.$moveByPage(1,!1)},e.prototype.gotoPageUp=function(){this.$moveByPage(-1,!1)},e.prototype.scrollPageDown=function(){this.$moveByPage(1)},e.prototype.scrollPageUp=function(){this.$moveByPage(-1)},e.prototype.scrollToRow=function(e){this.renderer.scrollToRow(e)},e.prototype.scrollToLine=function(e,t,n,i){this.renderer.scrollToLine(e,t,n,i)},e.prototype.centerSelection=function(){var e=this.getSelectionRange(),t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)}
this.renderer.alignCursor(t,.5)},e.prototype.getCursorPosition=function(){return this.selection.getCursor()},e.prototype.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},e.prototype.getSelectionRange=function(){return this.selection.getRange()},e.prototype.selectAll=function(){this.selection.selectAll()},e.prototype.clearSelection=function(){this.selection.clearSelection()},e.prototype.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)},e.prototype.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)},e.prototype.jumpToMatching=function(e,t){var n=this.getCursorPosition(),i=new y(this.session,n.row,n.column),o=i.getCurrentToken(),r=0
o&&-1!==o.type.indexOf("tag-name")&&(o=i.stepBackward())
var s=o||i.stepForward()
if(s){var a,l,c=!1,h={},u=n.column-s.start,d={")":"(","(":"(","]":"[","[":"[","{":"{","}":"{"}
do{if(s.value.match(/[{}()\[\]]/g)){for(;u<s.value.length&&!c;u++)if(d[s.value[u]])switch(l=d[s.value[u]]+"."+s.type.replace("rparen","lparen"),isNaN(h[l])&&(h[l]=0),s.value[u]){case"(":case"[":case"{":h[l]++
break
case")":case"]":case"}":h[l]--,-1===h[l]&&(a="bracket",c=!0)}}else-1!==s.type.indexOf("tag-name")&&(isNaN(h[s.value])&&(h[s.value]=0),"<"===o.value&&r>1?h[s.value]++:"</"===o.value&&h[s.value]--,-1===h[s.value]&&(a="tag",c=!0))
c||(o=s,r++,s=i.stepForward(),u=0)}while(s&&!c)
if(a){var g,f
if("bracket"===a)(g=this.session.getBracketRange(n))||(f=(g=new p(i.getCurrentTokenRow(),i.getCurrentTokenColumn()+u-1,i.getCurrentTokenRow(),i.getCurrentTokenColumn()+u-1)).start,(t||f.row===n.row&&Math.abs(f.column-n.column)<2)&&(g=this.session.getBracketRange(f)))
else if("tag"===a){if(!s||-1===s.type.indexOf("tag-name"))return
if(0===(g=new p(i.getCurrentTokenRow(),i.getCurrentTokenColumn()-2,i.getCurrentTokenRow(),i.getCurrentTokenColumn()-2)).compare(n.row,n.column)){var m=this.session.getMatchingTags(n)
m&&(m.openTag.contains(n.row,n.column)?f=(g=m.closeTag).start:(g=m.openTag,f=m.closeTag.start.row===n.row&&m.closeTag.start.column===n.column?g.end:g.start))}f=f||g.start}(f=g&&g.cursor||f)&&(e?g&&t?this.selection.setRange(g):g&&g.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(f.row,f.column):this.selection.moveTo(f.row,f.column))}}},e.prototype.gotoLine=function(e,t,n){this.selection.clearSelection(),this.session.unfold({row:e-1,column:t||0}),this.exitMultiSelectMode&&this.exitMultiSelectMode(),this.moveCursorTo(e-1,t||0),this.isRowFullyVisible(e-1)||this.scrollToLine(e-1,!0,n)},e.prototype.navigateTo=function(e,t){this.selection.moveTo(e,t)},e.prototype.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(-e||-1,0)},e.prototype.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection(),this.selection.moveCursorBy(e||1,0)},e.prototype.navigateLeft=function(e){if(this.selection.isEmpty())for(e=e||1;e--;)this.selection.moveCursorLeft()
else{var t=this.getSelectionRange().start
this.moveCursorToPosition(t)}this.clearSelection()},e.prototype.navigateRight=function(e){if(this.selection.isEmpty())for(e=e||1;e--;)this.selection.moveCursorRight()
else{var t=this.getSelectionRange().end
this.moveCursorToPosition(t)}this.clearSelection()},e.prototype.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},e.prototype.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},e.prototype.navigateFileEnd=function(){this.selection.moveCursorFileEnd(),this.clearSelection()},e.prototype.navigateFileStart=function(){this.selection.moveCursorFileStart(),this.clearSelection()},e.prototype.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},e.prototype.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},e.prototype.replace=function(e,t){t&&this.$search.set(t)
var n=this.$search.find(this.session),i=0
return n?(this.$tryReplace(n,e)&&(i=1),this.selection.setSelectionRange(n),this.renderer.scrollSelectionIntoView(n.start,n.end),i):i},e.prototype.replaceAll=function(e,t){t&&this.$search.set(t)
var n=this.$search.findAll(this.session),i=0
if(!n.length)return i
var o=this.getSelectionRange()
this.selection.moveTo(0,0)
for(var r=n.length-1;r>=0;--r)this.$tryReplace(n[r],e)&&i++
return this.selection.setSelectionRange(o),i},e.prototype.$tryReplace=function(e,t){var n=this.session.getTextRange(e)
return null!==(t=this.$search.replace(n,t))?(e.end=this.session.replace(e,t),e):null},e.prototype.getLastSearchOptions=function(){return this.$search.getOptions()},e.prototype.find=function(e,t,n){t||(t={}),"string"==typeof e||e instanceof RegExp?t.needle=e:"object"==typeof e&&o.mixin(t,e)
var i=this.selection.getRange()
null==t.needle&&((e=this.session.getTextRange(i)||this.$search.$options.needle)||(i=this.session.getWordRange(i.start.row,i.start.column),e=this.session.getTextRange(i)),this.$search.set({needle:e})),this.$search.set(t),t.start||this.$search.set({start:i})
var r=this.$search.find(this.session)
return t.preventScroll?r:r?(this.revealRange(r,n),r):(t.backwards?i.start=i.end:i.end=i.start,void this.selection.setRange(i))},e.prototype.findNext=function(e,t){this.find({skipCurrent:!0,backwards:!1},e,t)},e.prototype.findPrevious=function(e,t){this.find(e,{skipCurrent:!0,backwards:!0},t)},e.prototype.revealRange=function(e,t){this.session.unfold(e),this.selection.setSelectionRange(e)
var n=this.renderer.scrollTop
this.renderer.scrollSelectionIntoView(e.start,e.end,.5),!1!==t&&this.renderer.animateScrolling(n)},e.prototype.undo=function(){this.session.getUndoManager().undo(this.session),this.renderer.scrollCursorIntoView(null,.5)},e.prototype.redo=function(){this.session.getUndoManager().redo(this.session),this.renderer.scrollCursorIntoView(null,.5)},e.prototype.destroy=function(){this.$toDestroy&&(this.$toDestroy.forEach((function(e){e.destroy()})),this.$toDestroy=null),this.$mouseHandler&&this.$mouseHandler.destroy(),this.renderer.destroy(),this._signal("destroy",this),this.session&&this.session.destroy(),this._$emitInputEvent&&this._$emitInputEvent.cancel(),this.removeAllListeners()},e.prototype.setAutoScrollEditorIntoView=function(e){if(e){var t,n=this,i=!1
this.$scrollAnchor||(this.$scrollAnchor=document.createElement("div"))
var o=this.$scrollAnchor
o.style.cssText="position:absolute",this.container.insertBefore(o,this.container.firstChild)
var r=this.on("changeSelection",(function(){i=!0})),s=this.renderer.on("beforeRender",(function(){i&&(t=n.renderer.container.getBoundingClientRect())})),a=this.renderer.on("afterRender",(function(){if(i&&t&&(n.isFocused()||n.searchBox&&n.searchBox.isFocused())){var e=n.renderer,r=e.$cursorLayer.$pixelPos,s=e.layerConfig,a=r.top-s.offset
null!=(i=r.top>=0&&a+t.top<0||!(r.top<s.height&&r.top+t.top+s.lineHeight>window.innerHeight)&&null)&&(o.style.top=a+"px",o.style.left=r.left+"px",o.style.height=s.lineHeight+"px",o.scrollIntoView(i)),i=t=null}}))
this.setAutoScrollEditorIntoView=function(e){e||(delete this.setAutoScrollEditorIntoView,this.off("changeSelection",r),this.renderer.off("afterRender",a),this.renderer.off("beforeRender",s))}}},e.prototype.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace",t=this.renderer.$cursorLayer
t&&(t.setSmoothBlinking(/smooth/.test(e)),t.isBlinking=!this.$readOnly&&"wide"!=e,r.setCssClass(t.element,"ace_slim-cursors",/slim/.test(e)))},e.prototype.prompt=function(e,t,n){var i=this
w.loadModule("ace/ext/prompt",(function(o){o.prompt(i,e,t,n)}))},e}()
x.$uid=0,x.prototype.curOp=null,x.prototype.prevOp={},x.prototype.$mergeableCommands=["backspace","del","insertstring"],x.prototype.$toggleWordPairs=[["first","last"],["true","false"],["yes","no"],["width","height"],["top","bottom"],["right","left"],["on","off"],["x","y"],["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["in","out"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"],["&&","||"],["==","!="]],o.implement(x.prototype,f),w.defineOptions(x.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange(),this._signal("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:!0},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:!0},readOnly:{set:function(e){this.textInput.setReadOnly(e),this.$resetCursorStyle()},initialValue:!1},copyWithEmptySelection:{set:function(e){this.textInput.setCopyWithEmptySelection(e)},initialValue:!1},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[!1,!0,"always"],initialValue:!0},behavioursEnabled:{initialValue:!0},wrapBehavioursEnabled:{initialValue:!0},enableAutoIndent:{initialValue:!0},autoScrollEditorIntoView:{set:function(e){this.setAutoScrollEditorIntoView(e)}},keyboardHandler:{set:function(e){this.setKeyboardHandler(e)},get:function(){return this.$keybindingId},handlesSet:!0},value:{set:function(e){this.session.setValue(e)},get:function(){return this.getValue()},handlesSet:!0,hidden:!0},session:{set:function(e){this.setSession(e)},get:function(){return this.session},handlesSet:!0,hidden:!0},showLineNumbers:{set:function(e){this.renderer.$gutterLayer.setShowLineNumbers(e),this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER),e&&this.$relativeLineNumbers?k.attach(this):k.detach(this)},initialValue:!0},relativeLineNumbers:{set:function(e){this.$showLineNumbers&&e?k.attach(this):k.detach(this)}},placeholder:{set:function(e){this.$updatePlaceholder||(this.$updatePlaceholder=function(){var e=this.session&&(this.renderer.$composition||this.session.getLength()>1||this.session.getLine(0).length>0)
if(e&&this.renderer.placeholderNode)this.renderer.off("afterRender",this.$updatePlaceholder),r.removeCssClass(this.container,"ace_hasPlaceholder"),this.renderer.placeholderNode.remove(),this.renderer.placeholderNode=null
else if(e||this.renderer.placeholderNode)!e&&this.renderer.placeholderNode&&(this.renderer.placeholderNode.textContent=this.$placeholder||"")
else{this.renderer.on("afterRender",this.$updatePlaceholder),r.addCssClass(this.container,"ace_hasPlaceholder")
var t=r.createElement("div")
t.className="ace_placeholder",t.textContent=this.$placeholder||"",this.renderer.placeholderNode=t,this.renderer.content.appendChild(this.renderer.placeholderNode)}}.bind(this),this.on("input",this.$updatePlaceholder)),this.$updatePlaceholder()}},enableKeyboardAccessibility:{set:function(e){var t,n={name:"blurTextInput",description:"Set focus to the editor content div to allow tabbing through the page",bindKey:"Esc",exec:function(e){e.blur(),e.renderer.scroller.focus()},readOnly:!0},i=function(e){if(e.target==this.renderer.scroller&&e.keyCode===A.enter){e.preventDefault()
var t=this.getCursorPosition().row
this.isRowVisible(t)||this.scrollToLine(t,!0,!0),this.focus()}}
e?(this.renderer.enableKeyboardAccessibility=!0,this.renderer.keyboardFocusClassName="ace_keyboard-focus",this.textInput.getElement().setAttribute("tabindex",-1),this.renderer.scroller.setAttribute("tabindex",0),this.renderer.scroller.setAttribute("role","group"),this.renderer.scroller.setAttribute("aria-roledescription",C("editor")),this.renderer.scroller.classList.add(this.renderer.keyboardFocusClassName),this.renderer.scroller.setAttribute("aria-label",C("Editor content, press Enter to start editing, press Escape to exit")),this.renderer.scroller.addEventListener("keyup",i.bind(this)),this.commands.addCommand(n),this.renderer.$gutter.setAttribute("tabindex",0),this.renderer.$gutter.setAttribute("aria-hidden",!1),this.renderer.$gutter.setAttribute("role","group"),this.renderer.$gutter.setAttribute("aria-roledescription",C("editor")),this.renderer.$gutter.setAttribute("aria-label",C("Editor gutter, press Enter to interact with controls using arrow keys, press Escape to exit")),this.renderer.$gutter.classList.add(this.renderer.keyboardFocusClassName),this.renderer.content.setAttribute("aria-hidden",!0),t||(t=new $(this)),t.addListener()):(this.renderer.enableKeyboardAccessibility=!1,this.textInput.getElement().setAttribute("tabindex",0),this.renderer.scroller.setAttribute("tabindex",-1),this.renderer.scroller.removeAttribute("role"),this.renderer.scroller.removeAttribute("aria-roledescription"),this.renderer.scroller.classList.remove(this.renderer.keyboardFocusClassName),this.renderer.scroller.removeAttribute("aria-label"),this.renderer.scroller.removeEventListener("keyup",i.bind(this)),this.commands.removeCommand(n),this.renderer.content.removeAttribute("aria-hidden"),this.renderer.$gutter.setAttribute("tabindex",-1),this.renderer.$gutter.setAttribute("aria-hidden",!0),this.renderer.$gutter.removeAttribute("role"),this.renderer.$gutter.removeAttribute("aria-roledescription"),this.renderer.$gutter.removeAttribute("aria-label"),this.renderer.$gutter.classList.remove(this.renderer.keyboardFocusClassName),t&&t.removeListener())},initialValue:!1},customScrollbar:"renderer",hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",displayIndentGuides:"renderer",highlightIndentGuides:"renderer",showGutter:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",theme:"renderer",hasCssTransforms:"renderer",maxPixelHeight:"renderer",useTextareaForIME:"renderer",useResizeObserver:"renderer",useSvgGutterIcons:"renderer",showFoldedAnnotations:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimeout:"$mouseHandler",tooltipFollowsMouse:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",navigateWithinSoftTabs:"session",tabSize:"session",wrap:"session",indentedSoftWrap:"session",foldStyle:"session",mode:"session"})
var k={getText:function(e,t){return(Math.abs(e.selection.lead.row-t)||t+1+(t<9?"·":""))+""},getWidth:function(e,t,n){return Math.max(t.toString().length,(n.lastRow+1).toString().length,2)*n.characterWidth},update:function(e,t){t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)},attach:function(e){e.renderer.$gutterLayer.$renderer=this,e.on("changeSelection",this.update),this.update(null,e)},detach:function(e){e.renderer.$gutterLayer.$renderer==this&&(e.renderer.$gutterLayer.$renderer=null),e.off("changeSelection",this.update),this.update(null,e)}}
t.Editor=x})),ace.define("ace/undomanager",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=function(){function e(){this.$maxRev=0,this.$fromUndo=!1,this.$undoDepth=1/0,this.reset()}return e.prototype.addSession=function(e){this.$session=e},e.prototype.add=function(e,t,n){if(!this.$fromUndo&&e!=this.$lastDelta){if(this.$keepRedoStack||(this.$redoStack.length=0),!1===t||!this.lastDeltas){this.lastDeltas=[]
var i=this.$undoStack.length
i>this.$undoDepth-1&&this.$undoStack.splice(0,i-this.$undoDepth+1),this.$undoStack.push(this.lastDeltas),e.id=this.$rev=++this.$maxRev}"remove"!=e.action&&"insert"!=e.action||(this.$lastDelta=e),this.lastDeltas.push(e)}},e.prototype.addSelection=function(e,t){this.selections.push({value:e,rev:t||this.$rev})},e.prototype.startNewGroup=function(){return this.lastDeltas=null,this.$rev},e.prototype.markIgnored=function(e,t){null==t&&(t=this.$rev+1)
for(var n=this.$undoStack,i=n.length;i--;){var o=n[i][0]
if(o.id<=e)break
o.id<t&&(o.ignore=!0)}this.lastDeltas=null},e.prototype.getSelection=function(e,t){for(var n=this.selections,i=n.length;i--;){var o=n[i]
if(o.rev<e)return t&&(o=n[i+1]),o}},e.prototype.getRevision=function(){return this.$rev},e.prototype.getDeltas=function(e,t){null==t&&(t=this.$rev+1)
for(var n=this.$undoStack,i=null,o=0,r=n.length;r--;){var s=n[r][0]
if(s.id<t&&!i&&(i=r+1),s.id<=e){o=r+1
break}}return n.slice(o,i)},e.prototype.getChangedRanges=function(e,t){null==t&&(t=this.$rev+1)},e.prototype.getChangedLines=function(e,t){null==t&&(t=this.$rev+1)},e.prototype.undo=function(e,t){this.lastDeltas=null
var n=this.$undoStack
if(function(e,t){for(var n=t;n--;){var i=e[n]
if(i&&!i[0].ignore){for(;n<t-1;){var o=h(e[n],e[n+1])
e[n]=o[0],e[n+1]=o[1],n++}return!0}}}(n,n.length)){e||(e=this.$session),this.$redoStackBaseRev!==this.$rev&&this.$redoStack.length&&(this.$redoStack=[]),this.$fromUndo=!0
var i=n.pop(),o=null
return i&&(o=e.undoChanges(i,t),this.$redoStack.push(i),this.$syncRev()),this.$fromUndo=!1,o}},e.prototype.redo=function(e,t){if(this.lastDeltas=null,e||(e=this.$session),this.$fromUndo=!0,this.$redoStackBaseRev!=this.$rev){var n=this.getDeltas(this.$redoStackBaseRev,this.$rev+1)
!function(e,t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.length;o++)f(e,i[o])}(this.$redoStack,n),this.$redoStackBaseRev=this.$rev,this.$redoStack.forEach((function(e){e[0].id=++this.$maxRev}),this)}var i=this.$redoStack.pop(),o=null
return i&&(o=e.redoChanges(i,t),this.$undoStack.push(i),this.$syncRev()),this.$fromUndo=!1,o},e.prototype.$syncRev=function(){var e=this.$undoStack,t=e[e.length-1],n=t&&t[0].id||0
this.$redoStackBaseRev=n,this.$rev=n},e.prototype.reset=function(){this.lastDeltas=null,this.$lastDelta=null,this.$undoStack=[],this.$redoStack=[],this.$rev=0,this.mark=0,this.$redoStackBaseRev=this.$rev,this.selections=[]},e.prototype.canUndo=function(){return this.$undoStack.length>0},e.prototype.canRedo=function(){return this.$redoStack.length>0},e.prototype.bookmark=function(e){null==e&&(e=this.$rev),this.mark=e},e.prototype.isAtBookmark=function(){return this.$rev===this.mark},e.prototype.toJSON=function(){},e.prototype.fromJSON=function(){},e.prototype.$prettyPrint=function(e){return e?a(e):a(this.$undoStack)+"\n---\n"+a(this.$redoStack)},e}()
i.prototype.hasUndo=i.prototype.canUndo,i.prototype.hasRedo=i.prototype.canRedo,i.prototype.isClean=i.prototype.isAtBookmark,i.prototype.markClean=i.prototype.bookmark
var o=e("./range").Range,r=o.comparePoints
function s(e){return{row:e.row,column:e.column}}function a(e){if(e=e||this,Array.isArray(e))return e.map(a).join("\n")
var t=""
return e.action?(t="insert"==e.action?"+":"-",t+="["+e.lines+"]"):e.value&&(t=Array.isArray(e.value)?e.value.map(l).join("\n"):l(e.value)),e.start&&(t+=l(e)),(e.id||e.rev)&&(t+="\t("+(e.id||e.rev)+")"),t}function l(e){return e.start.row+":"+e.start.column+"=>"+e.end.row+":"+e.end.column}function c(e,t){var n="insert"==e.action,i="insert"==t.action
if(n&&i)if(r(t.start,e.end)>=0)d(t,e,-1)
else{if(!(r(t.start,e.start)<=0))return null
d(e,t,1)}else if(n&&!i)if(r(t.start,e.end)>=0)d(t,e,-1)
else{if(!(r(t.end,e.start)<=0))return null
d(e,t,-1)}else if(!n&&i)if(r(t.start,e.start)>=0)d(t,e,1)
else{if(!(r(t.start,e.start)<=0))return null
d(e,t,1)}else if(!n&&!i)if(r(t.start,e.start)>=0)d(t,e,1)
else{if(!(r(t.end,e.start)<=0))return null
d(e,t,-1)}return[t,e]}function h(e,t){for(var n=e.length;n--;)for(var i=0;i<t.length;i++)if(!c(e[n],t[i])){for(;n<e.length;){for(;i--;)c(t[i],e[n])
i=t.length,n++}return[e,t]}return e.selectionBefore=t.selectionBefore=e.selectionAfter=t.selectionAfter=null,[t,e]}function u(e,t){var n="insert"==e.action,i="insert"==t.action
if(n&&i)r(e.start,t.start)<0?d(t,e,1):d(e,t,1)
else if(n&&!i)r(e.start,t.end)>=0?d(e,t,-1):(r(e.start,t.start)<=0||d(e,o.fromPoints(t.start,e.start),-1),d(t,e,1))
else if(!n&&i)r(t.start,e.end)>=0?d(t,e,-1):(r(t.start,e.start)<=0||d(t,o.fromPoints(e.start,t.start),-1),d(e,t,1))
else if(!n&&!i)if(r(t.start,e.end)>=0)d(t,e,-1)
else{var s,a
if(!(r(t.end,e.start)<=0))return r(e.start,t.start)<0&&(s=e,e=p(e,t.start)),r(e.end,t.end)>0&&(a=p(e,t.end)),g(t.end,e.start,e.end,-1),a&&!s&&(e.lines=a.lines,e.start=a.start,e.end=a.end,a=e),[t,s,a].filter(Boolean)
d(e,t,-1)}return[t,e]}function d(e,t,n){g(e.start,t.start,t.end,n),g(e.end,t.start,t.end,n)}function g(e,t,n,i){e.row==(1==i?t:n).row&&(e.column+=i*(n.column-t.column)),e.row+=i*(n.row-t.row)}function p(e,t){var n=e.lines,i=e.end
e.end=s(t)
var o=e.end.row-e.start.row,r=n.splice(o,n.length),a=o?t.column:t.column-e.start.column
return n.push(r[0].substring(0,a)),r[0]=r[0].substr(a),{start:s(t),end:i,lines:r,action:e.action}}function f(e,t){t=function(e){return{start:s(e.start),end:s(e.end),action:e.action,lines:e.lines.slice()}}(t)
for(var n=e.length;n--;){for(var i=e[n],o=0;o<i.length;o++){var r=u(i[o],t)
t=r[0],2!=r.length&&(r[2]?(i.splice(o+1,1,r[1],r[2]),o++):r[1]||(i.splice(o,1),o--))}i.length||e.splice(n,1)}return e}o.comparePoints,t.UndoManager=i})),ace.define("ace/layer/lines",["require","exports","module","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("../lib/dom"),o=function(){function e(e,t){this.element=e,this.canvasHeight=t||5e5,this.element.style.height=2*this.canvasHeight+"px",this.cells=[],this.cellCache=[],this.$offsetCoefficient=0}return e.prototype.moveContainer=function(e){i.translate(this.element,0,-e.firstRowScreen*e.lineHeight%this.canvasHeight-e.offset*this.$offsetCoefficient)},e.prototype.pageChanged=function(e,t){return Math.floor(e.firstRowScreen*e.lineHeight/this.canvasHeight)!==Math.floor(t.firstRowScreen*t.lineHeight/this.canvasHeight)},e.prototype.computeLineTop=function(e,t,n){var i=t.firstRowScreen*t.lineHeight,o=Math.floor(i/this.canvasHeight)
return n.documentToScreenRow(e,0)*t.lineHeight-o*this.canvasHeight},e.prototype.computeLineHeight=function(e,t,n){return t.lineHeight*n.getRowLineCount(e)},e.prototype.getLength=function(){return this.cells.length},e.prototype.get=function(e){return this.cells[e]},e.prototype.shift=function(){this.$cacheCell(this.cells.shift())},e.prototype.pop=function(){this.$cacheCell(this.cells.pop())},e.prototype.push=function(e){if(Array.isArray(e)){this.cells.push.apply(this.cells,e)
for(var t=i.createFragment(this.element),n=0;n<e.length;n++)t.appendChild(e[n].element)
this.element.appendChild(t)}else this.cells.push(e),this.element.appendChild(e.element)},e.prototype.unshift=function(e){if(Array.isArray(e)){this.cells.unshift.apply(this.cells,e)
for(var t=i.createFragment(this.element),n=0;n<e.length;n++)t.appendChild(e[n].element)
this.element.firstChild?this.element.insertBefore(t,this.element.firstChild):this.element.appendChild(t)}else this.cells.unshift(e),this.element.insertAdjacentElement("afterbegin",e.element)},e.prototype.last=function(){return this.cells.length?this.cells[this.cells.length-1]:null},e.prototype.$cacheCell=function(e){e&&(e.element.remove(),this.cellCache.push(e))},e.prototype.createCell=function(e,t,n,o){var r=this.cellCache.pop()
if(!r){var s=i.createElement("div")
o&&o(s),this.element.appendChild(s),r={element:s,text:"",row:e}}return r.row=e,r},e}()
t.Lines=o})),ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/layer/lines","ace/config"],(function(e,t,n){"use strict"
var i=e("../lib/dom"),o=e("../lib/oop"),r=e("../lib/lang"),s=e("../lib/event_emitter").EventEmitter,a=e("./lines").Lines,l=e("../config").nls,c=function(){function e(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_gutter-layer",e.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[],this.$updateAnnotations=this.$updateAnnotations.bind(this),this.$lines=new a(this.element),this.$lines.$offsetCoefficient=1}return e.prototype.setSession=function(e){this.session&&this.session.off("change",this.$updateAnnotations),this.session=e,e&&e.on("change",this.$updateAnnotations)},e.prototype.addGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(e,t)},e.prototype.removeGutterDecoration=function(e,t){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(e,t)},e.prototype.setAnnotations=function(e){this.$annotations=[]
for(var t=0;t<e.length;t++){var n=e[t],i=n.row,o=this.$annotations[i]
o||(o=this.$annotations[i]={text:[],type:[]})
var s=n.text,a=n.type
s=s?r.escapeHTML(s):n.html||"",-1===o.text.indexOf(s)&&(o.text.push(s),o.type.push(a))
var l=n.className
l?o.className=l:"error"==a?o.className=" ace_error":"warning"==a&&" ace_error"!=o.className?o.className=" ace_warning":"info"!=a||o.className||(o.className=" ace_info")}},e.prototype.$updateAnnotations=function(e){if(this.$annotations.length){var t=e.start.row,n=e.end.row-t
if(0===n);else if("remove"==e.action)this.$annotations.splice(t,n+1,null)
else{var i=new Array(n+1)
i.unshift(t,1),this.$annotations.splice.apply(this.$annotations,i)}}},e.prototype.update=function(e){this.config=e
var t=this.session,n=e.firstRow,i=Math.min(e.lastRow+e.gutterOffset,t.getLength()-1)
this.oldLastRow=i,this.config=e,this.$lines.moveContainer(e),this.$updateCursorRow()
for(var o=t.getNextFoldLine(n),r=o?o.start.row:1/0,s=null,a=-1,l=n;;){if(l>r&&(l=o.end.row+1,r=(o=t.getNextFoldLine(l,o))?o.start.row:1/0),l>i){for(;this.$lines.getLength()>a+1;)this.$lines.pop()
break}(s=this.$lines.get(++a))?s.row=l:(s=this.$lines.createCell(l,e,this.session,h),this.$lines.push(s)),this.$renderCell(s,e,o,l),l++}this._signal("afterRender"),this.$updateGutterWidth(e)},e.prototype.$updateGutterWidth=function(e){var t=this.session,n=t.gutterRenderer||this.$renderer,i=t.$firstLineNumber,o=this.$lines.last()?this.$lines.last().text:"";(this.$fixedWidth||t.$useWrapMode)&&(o=t.getLength()+i-1)
var r=n?n.getWidth(t,o,e):o.toString().length*e.characterWidth,s=this.$padding||this.$computePadding();(r+=s.left+s.right)===this.gutterWidth||isNaN(r)||(this.gutterWidth=r,this.element.parentNode.style.width=this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._signal("changeGutterWidth",r))},e.prototype.$updateCursorRow=function(){if(this.$highlightGutterLine){var e=this.session.selection.getCursor()
this.$cursorRow!==e.row&&(this.$cursorRow=e.row)}},e.prototype.updateLineHighlight=function(){if(this.$highlightGutterLine){var e=this.session.selection.cursor.row
if(this.$cursorRow=e,!this.$cursorCell||this.$cursorCell.row!=e){this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ",""))
var t=this.$lines.cells
this.$cursorCell=null
for(var n=0;n<t.length;n++){var i=t[n]
if(i.row>=this.$cursorRow){if(i.row>this.$cursorRow){var o=this.session.getFoldLine(this.$cursorRow)
if(!(n>0&&o&&o.start.row==t[n-1].row))break
i=t[n-1]}i.element.className="ace_gutter-active-line "+i.element.className,this.$cursorCell=i
break}}}}},e.prototype.scrollLines=function(e){var t=this.config
if(this.config=e,this.$updateCursorRow(),this.$lines.pageChanged(t,e))return this.update(e)
this.$lines.moveContainer(e)
var n=Math.min(e.lastRow+e.gutterOffset,this.session.getLength()-1),i=this.oldLastRow
if(this.oldLastRow=n,!t||i<e.firstRow)return this.update(e)
if(n<t.firstRow)return this.update(e)
if(t.firstRow<e.firstRow)for(var o=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);o>0;o--)this.$lines.shift()
if(i>n)for(o=this.session.getFoldedRowCount(n+1,i);o>0;o--)this.$lines.pop()
e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLines(e,e.firstRow,t.firstRow-1)),n>i&&this.$lines.push(this.$renderLines(e,i+1,n)),this.updateLineHighlight(),this._signal("afterRender"),this.$updateGutterWidth(e)},e.prototype.$renderLines=function(e,t,n){for(var i=[],o=t,r=this.session.getNextFoldLine(o),s=r?r.start.row:1/0;o>s&&(o=r.end.row+1,s=(r=this.session.getNextFoldLine(o,r))?r.start.row:1/0),!(o>n);){var a=this.$lines.createCell(o,e,this.session,h)
this.$renderCell(a,e,r,o),i.push(a),o++}return i},e.prototype.$renderCell=function(e,t,n,o){var r=e.element,s=this.session,a=r.childNodes[0],c=r.childNodes[1],h=r.childNodes[2],u=h.firstChild,d=s.$firstLineNumber,g=s.$breakpoints,p=s.$decorations,f=s.gutterRenderer||this.$renderer,m=this.$showFoldWidgets&&s.foldWidgets,v=n?n.start.row:Number.MAX_VALUE,w=t.lineHeight+"px",y=this.$useSvgGutterIcons?"ace_gutter-cell_svg-icons ":"ace_gutter-cell ",b=this.$useSvgGutterIcons?"ace_icon_svg":"ace_icon",$=(f?f.getText(s,o):o+d).toString()
if(this.$highlightGutterLine&&(o==this.$cursorRow||n&&o<this.$cursorRow&&o>=v&&this.$cursorRow<=n.end.row)&&(y+="ace_gutter-active-line ",this.$cursorCell!=e&&(this.$cursorCell&&(this.$cursorCell.element.className=this.$cursorCell.element.className.replace("ace_gutter-active-line ","")),this.$cursorCell=e)),g[o]&&(y+=g[o]),p[o]&&(y+=p[o]),this.$annotations[o]&&o!==v&&(y+=this.$annotations[o].className),m){var C=m[o]
null==C&&(C=m[o]=s.getFoldWidget(o))}if(C){var S="ace_fold-widget ace_"+C,A="start"==C&&o==v&&o<n.end.row
if(A){S+=" ace_closed"
for(var x="",k=!1,L=o+1;L<=n.end.row;L++)if(this.$annotations[L]){if(" ace_error"===this.$annotations[L].className){k=!0,x=" ace_error_fold"
break}" ace_warning"!==this.$annotations[L].className||(k=!0,x=" ace_warning_fold")}y+=x}else S+=" ace_open"
c.className!=S&&(c.className=S),i.setStyle(c.style,"height",w),i.setStyle(c.style,"display","inline-block"),c.setAttribute("role","button"),c.setAttribute("tabindex","-1")
var M=s.getFoldWidgetRange(o)
M?c.setAttribute("aria-label",l("Toggle code folding, rows $0 through $1",[M.start.row+1,M.end.row+1])):n?c.setAttribute("aria-label",l("Toggle code folding, rows $0 through $1",[n.start.row+1,n.end.row+1])):c.setAttribute("aria-label",l("Toggle code folding, row $0",[o+1])),A?(c.setAttribute("aria-expanded","false"),c.setAttribute("title",l("Unfold code"))):(c.setAttribute("aria-expanded","true"),c.setAttribute("title",l("Fold code")))}else c&&(i.setStyle(c.style,"display","none"),c.setAttribute("tabindex","0"),c.removeAttribute("role"),c.removeAttribute("aria-label"))
return k&&this.$showFoldedAnnotations?(h.className="ace_gutter_annotation",u.className=b,u.className+=x,i.setStyle(u.style,"height",w),i.setStyle(h.style,"display","block"),i.setStyle(h.style,"height",w),h.setAttribute("aria-label",l("Read annotations row $0",[$])),h.setAttribute("tabindex","-1"),h.setAttribute("role","button")):this.$annotations[o]?(h.className="ace_gutter_annotation",u.className=b,this.$useSvgGutterIcons?u.className+=this.$annotations[o].className:r.classList.add(this.$annotations[o].className.replace(" ","")),i.setStyle(u.style,"height",w),i.setStyle(h.style,"display","block"),i.setStyle(h.style,"height",w),h.setAttribute("aria-label",l("Read annotations row $0",[$])),h.setAttribute("tabindex","-1"),h.setAttribute("role","button")):(i.setStyle(h.style,"display","none"),h.removeAttribute("aria-label"),h.removeAttribute("role"),h.setAttribute("tabindex","0")),$!==a.data&&(a.data=$),r.className!=y&&(r.className=y),i.setStyle(e.element.style,"height",this.$lines.computeLineHeight(o,t,s)+"px"),i.setStyle(e.element.style,"top",this.$lines.computeLineTop(o,t,s)+"px"),e.text=$,"none"===h.style.display&&"none"===c.style.display?e.element.setAttribute("aria-hidden",!0):e.element.setAttribute("aria-hidden",!1),e},e.prototype.setHighlightGutterLine=function(e){this.$highlightGutterLine=e},e.prototype.setShowLineNumbers=function(e){this.$renderer=!e&&{getWidth:function(){return 0},getText:function(){return""}}},e.prototype.getShowLineNumbers=function(){return this.$showLineNumbers},e.prototype.setShowFoldWidgets=function(e){e?i.addCssClass(this.element,"ace_folding-enabled"):i.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=e,this.$padding=null},e.prototype.getShowFoldWidgets=function(){return this.$showFoldWidgets},e.prototype.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0}
var e=i.computedStyle(this.element.firstChild)
return this.$padding={},this.$padding.left=(parseInt(e.borderLeftWidth)||0)+(parseInt(e.paddingLeft)||0)+1,this.$padding.right=(parseInt(e.borderRightWidth)||0)+(parseInt(e.paddingRight)||0),this.$padding},e.prototype.getRegion=function(e){var t=this.$padding||this.$computePadding(),n=this.element.getBoundingClientRect()
return e.x<t.left+n.left?"markers":this.$showFoldWidgets&&e.x>n.right-t.right?"foldWidgets":void 0},e}()
function h(e){var t=document.createTextNode("")
e.appendChild(t)
var n=i.createElement("span")
e.appendChild(n)
var o=i.createElement("span")
e.appendChild(o)
var r=i.createElement("span")
return o.appendChild(r),e}c.prototype.$fixedWidth=!1,c.prototype.$highlightGutterLine=!0,c.prototype.$renderer="",c.prototype.$showLineNumbers=!0,c.prototype.$showFoldWidgets=!0,o.implement(c.prototype,s),t.Gutter=c})),ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("../range").Range,o=e("../lib/dom"),r=function(){function e(e){this.element=o.createElement("div"),this.element.className="ace_layer ace_marker-layer",e.appendChild(this.element)}return e.prototype.setPadding=function(e){this.$padding=e},e.prototype.setSession=function(e){this.session=e},e.prototype.setMarkers=function(e){this.markers=e},e.prototype.elt=function(e,t){var n=-1!=this.i&&this.element.childNodes[this.i]
n?this.i++:(n=document.createElement("div"),this.element.appendChild(n),this.i=-1),n.style.cssText=t,n.className=e},e.prototype.update=function(e){if(e){var t
for(var n in this.config=e,this.i=0,this.markers){var i=this.markers[n]
if(i.range){var o=i.range.clipRows(e.firstRow,e.lastRow)
if(!o.isEmpty())if(o=o.toScreenRange(this.session),i.renderer){var r=this.$getTop(o.start.row,e),s=this.$padding+o.start.column*e.characterWidth
i.renderer(t,o,s,r,e)}else"fullLine"==i.type?this.drawFullLineMarker(t,o,i.clazz,e):"screenLine"==i.type?this.drawScreenLineMarker(t,o,i.clazz,e):o.isMultiLine()?"text"==i.type?this.drawTextMarker(t,o,i.clazz,e):this.drawMultiLineMarker(t,o,i.clazz,e):this.drawSingleLineMarker(t,o,i.clazz+" ace_start ace_br15",e)}else i.update(t,this,this.session,e)}if(-1!=this.i)for(;this.i<this.element.childElementCount;)this.element.removeChild(this.element.lastChild)}},e.prototype.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight},e.prototype.drawTextMarker=function(e,t,n,o,r){for(var s=this.session,a=t.start.row,l=t.end.row,c=a,h=0,u=0,d=s.getScreenLastRowColumn(c),g=new i(c,t.start.column,c,u);c<=l;c++)g.start.row=g.end.row=c,g.start.column=c==a?t.start.column:s.getRowWrapIndent(c),g.end.column=d,h=u,u=d,d=c+1<l?s.getScreenLastRowColumn(c+1):c==l?0:t.end.column,this.drawSingleLineMarker(e,g,n+(c==a?" ace_start":"")+" ace_br"+((c==a||c==a+1&&t.start.column?1:0)|(h<u?2:0)|(u>d?4:0)|(c==l?8:0)),o,c==l?0:1,r)},e.prototype.drawMultiLineMarker=function(e,t,n,i,o){var r=this.$padding,s=i.lineHeight,a=this.$getTop(t.start.row,i),l=r+t.start.column*i.characterWidth
if(o=o||"",this.session.$bidiHandler.isBidiRow(t.start.row)?((c=t.clone()).end.row=c.start.row,c.end.column=this.session.getLine(c.start.row).length,this.drawBidiSingleLineMarker(e,c,n+" ace_br1 ace_start",i,null,o)):this.elt(n+" ace_br1 ace_start","height:"+s+"px;right:0;top:"+a+"px;left:"+l+"px;"+(o||"")),this.session.$bidiHandler.isBidiRow(t.end.row)){var c;(c=t.clone()).start.row=c.end.row,c.start.column=0,this.drawBidiSingleLineMarker(e,c,n+" ace_br12",i,null,o)}else{a=this.$getTop(t.end.row,i)
var h=t.end.column*i.characterWidth
this.elt(n+" ace_br12","height:"+s+"px;width:"+h+"px;top:"+a+"px;left:"+r+"px;"+(o||""))}if(!((s=(t.end.row-t.start.row-1)*i.lineHeight)<=0)){a=this.$getTop(t.start.row+1,i)
var u=(t.start.column?1:0)|(t.end.column?0:8)
this.elt(n+(u?" ace_br"+u:""),"height:"+s+"px;right:0;top:"+a+"px;left:"+r+"px;"+(o||""))}},e.prototype.drawSingleLineMarker=function(e,t,n,i,o,r){if(this.session.$bidiHandler.isBidiRow(t.start.row))return this.drawBidiSingleLineMarker(e,t,n,i,o,r)
var s=i.lineHeight,a=(t.end.column+(o||0)-t.start.column)*i.characterWidth,l=this.$getTop(t.start.row,i),c=this.$padding+t.start.column*i.characterWidth
this.elt(n,"height:"+s+"px;width:"+a+"px;top:"+l+"px;left:"+c+"px;"+(r||""))},e.prototype.drawBidiSingleLineMarker=function(e,t,n,i,o,r){var s=i.lineHeight,a=this.$getTop(t.start.row,i),l=this.$padding
this.session.$bidiHandler.getSelections(t.start.column,t.end.column).forEach((function(e){this.elt(n,"height:"+s+"px;width:"+(e.width+(o||0))+"px;top:"+a+"px;left:"+(l+e.left)+"px;"+(r||""))}),this)},e.prototype.drawFullLineMarker=function(e,t,n,i,o){var r=this.$getTop(t.start.row,i),s=i.lineHeight
t.start.row!=t.end.row&&(s+=this.$getTop(t.end.row,i)-r),this.elt(n,"height:"+s+"px;top:"+r+"px;left:0;right:0;"+(o||""))},e.prototype.drawScreenLineMarker=function(e,t,n,i,o){var r=this.$getTop(t.start.row,i),s=i.lineHeight
this.elt(n,"height:"+s+"px;top:"+r+"px;left:0;right:0;"+(o||""))},e}()
r.prototype.$padding=0,t.Marker=r})),ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/layer/lines","ace/lib/event_emitter","ace/config"],(function(e,t,n){"use strict"
var i=e("../lib/oop"),o=e("../lib/dom"),r=e("../lib/lang"),s=e("./lines").Lines,a=e("../lib/event_emitter").EventEmitter,l=e("../config").nls,c=function(){function e(e){this.dom=o,this.element=this.dom.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$updateEolChar=this.$updateEolChar.bind(this),this.$lines=new s(this.element)}return e.prototype.$updateEolChar=function(){var e=this.session.doc,t="\n"==e.getNewLineCharacter()&&"windows"!=e.getNewLineMode()?this.EOL_CHAR_LF:this.EOL_CHAR_CRLF
if(this.EOL_CHAR!=t)return this.EOL_CHAR=t,!0},e.prototype.setPadding=function(e){this.$padding=e,this.element.style.margin="0 "+e+"px"},e.prototype.getLineHeight=function(){return this.$fontMetrics.$characterSize.height||0},e.prototype.getCharacterWidth=function(){return this.$fontMetrics.$characterSize.width||0},e.prototype.$setFontMetrics=function(e){this.$fontMetrics=e,this.$fontMetrics.on("changeCharacterSize",function(e){this._signal("changeCharacterSize",e)}.bind(this)),this.$pollSizeChanges()},e.prototype.checkForSizeChanges=function(){this.$fontMetrics.checkForSizeChanges()},e.prototype.$pollSizeChanges=function(){return this.$pollSizeChangesTimer=this.$fontMetrics.$pollSizeChanges()},e.prototype.setSession=function(e){this.session=e,e&&this.$computeTabString()},e.prototype.setShowInvisibles=function(e){return this.showInvisibles!=e&&(this.showInvisibles=e,"string"==typeof e?(this.showSpaces=/tab/i.test(e),this.showTabs=/space/i.test(e),this.showEOL=/eol/i.test(e)):this.showSpaces=this.showTabs=this.showEOL=e,this.$computeTabString(),!0)},e.prototype.setDisplayIndentGuides=function(e){return this.displayIndentGuides!=e&&(this.displayIndentGuides=e,this.$computeTabString(),!0)},e.prototype.setHighlightIndentGuides=function(e){return this.$highlightIndentGuides!==e&&(this.$highlightIndentGuides=e,e)},e.prototype.$computeTabString=function(){var e=this.session.getTabSize()
this.tabSize=e
for(var t=this.$tabStrings=[0],n=1;n<e+1;n++)this.showTabs?((i=this.dom.createElement("span")).className="ace_invisible ace_invisible_tab",i.textContent=r.stringRepeat(this.TAB_CHAR,n),t.push(i)):t.push(this.dom.createTextNode(r.stringRepeat(" ",n),this.element))
if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/
var i,o="ace_indent-guide",s=this.showSpaces?" ace_invisible ace_invisible_space":"",a=this.showSpaces?r.stringRepeat(this.SPACE_CHAR,this.tabSize):r.stringRepeat(" ",this.tabSize),l=this.showTabs?" ace_invisible ace_invisible_tab":"",c=this.showTabs?r.stringRepeat(this.TAB_CHAR,this.tabSize):a;(i=this.dom.createElement("span")).className=o+s,i.textContent=a,this.$tabStrings[" "]=i,(i=this.dom.createElement("span")).className=o+l,i.textContent=c,this.$tabStrings["\t"]=i}},e.prototype.updateLines=function(e,t,n){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)return this.update(e)
this.config=e
for(var i=Math.max(t,e.firstRow),o=Math.min(n,e.lastRow),r=this.element.childNodes,s=0,a=e.firstRow;a<i;a++){if(l=this.session.getFoldLine(a)){if(l.containsRow(i)){i=l.start.row
break}a=l.end.row}s++}for(var l,c=!1,h=(a=i,(l=this.session.getNextFoldLine(a))?l.start.row:1/0);a>h&&(a=l.end.row+1,h=(l=this.session.getNextFoldLine(a,l))?l.start.row:1/0),!(a>o);){var u=r[s++]
if(u){this.dom.removeChildren(u),this.$renderLine(u,a,a==h&&l),c&&(u.style.top=this.$lines.computeLineTop(a,e,this.session)+"px")
var d=e.lineHeight*this.session.getRowLength(a)+"px"
u.style.height!=d&&(c=!0,u.style.height=d)}a++}if(c)for(;s<this.$lines.cells.length;){var g=this.$lines.cells[s++]
g.element.style.top=this.$lines.computeLineTop(g.row,e,this.session)+"px"}},e.prototype.scrollLines=function(e){var t=this.config
if(this.config=e,this.$lines.pageChanged(t,e))return this.update(e)
this.$lines.moveContainer(e)
var n=e.lastRow,i=t?t.lastRow:-1
if(!t||i<e.firstRow)return this.update(e)
if(n<t.firstRow)return this.update(e)
if(!t||t.lastRow<e.firstRow)return this.update(e)
if(e.lastRow<t.firstRow)return this.update(e)
if(t.firstRow<e.firstRow)for(var o=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);o>0;o--)this.$lines.shift()
if(t.lastRow>e.lastRow)for(o=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);o>0;o--)this.$lines.pop()
e.firstRow<t.firstRow&&this.$lines.unshift(this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)),e.lastRow>t.lastRow&&this.$lines.push(this.$renderLinesFragment(e,t.lastRow+1,e.lastRow)),this.$highlightIndentGuide()},e.prototype.$renderLinesFragment=function(e,t,n){for(var i=[],r=t,s=this.session.getNextFoldLine(r),a=s?s.start.row:1/0;r>a&&(r=s.end.row+1,a=(s=this.session.getNextFoldLine(r,s))?s.start.row:1/0),!(r>n);){var l=this.$lines.createCell(r,e,this.session),c=l.element
this.dom.removeChildren(c),o.setStyle(c.style,"height",this.$lines.computeLineHeight(r,e,this.session)+"px"),o.setStyle(c.style,"top",this.$lines.computeLineTop(r,e,this.session)+"px"),this.$renderLine(c,r,r==a&&s),this.$useLineGroups()?c.className="ace_line_group":c.className="ace_line",i.push(l),r++}return i},e.prototype.update=function(e){this.$lines.moveContainer(e),this.config=e
for(var t=e.firstRow,n=e.lastRow,i=this.$lines;i.getLength();)i.pop()
i.push(this.$renderLinesFragment(e,t,n))},e.prototype.$renderToken=function(e,t,n,i){for(var o,s=this,a=/(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,c=this.dom.createFragment(this.element),h=0;o=a.exec(i);){var u=o[1],d=o[2],g=o[3],p=o[4],f=o[5]
if(s.showSpaces||!d){var m=h!=o.index?i.slice(h,o.index):""
if(h=o.index+o[0].length,m&&c.appendChild(this.dom.createTextNode(m,this.element)),u){var v=s.session.getScreenTabSize(t+o.index)
c.appendChild(s.$tabStrings[v].cloneNode(!0)),t+=v-1}else d?s.showSpaces?((y=this.dom.createElement("span")).className="ace_invisible ace_invisible_space",y.textContent=r.stringRepeat(s.SPACE_CHAR,d.length),c.appendChild(y)):c.appendChild(this.com.createTextNode(d,this.element)):g?((y=this.dom.createElement("span")).className="ace_invisible ace_invisible_space ace_invalid",y.textContent=r.stringRepeat(s.SPACE_CHAR,g.length),c.appendChild(y)):p?(t+=1,(y=this.dom.createElement("span")).style.width=2*s.config.characterWidth+"px",y.className=s.showSpaces?"ace_cjk ace_invisible ace_invisible_space":"ace_cjk",y.textContent=s.showSpaces?s.SPACE_CHAR:p,c.appendChild(y)):f&&(t+=1,(y=this.dom.createElement("span")).style.width=2*s.config.characterWidth+"px",y.className="ace_cjk",y.textContent=f,c.appendChild(y))}}if(c.appendChild(this.dom.createTextNode(h?i.slice(h):i,this.element)),this.$textToken[n.type])e.appendChild(c)
else{var w="ace_"+n.type.replace(/\./g," ace_"),y=this.dom.createElement("span")
"fold"==n.type&&(y.style.width=n.value.length*this.config.characterWidth+"px",y.setAttribute("title",l("Unfold code"))),y.className=w,y.appendChild(c),e.appendChild(y)}return t+i.length},e.prototype.renderIndentGuide=function(e,t,n){var i=t.search(this.$indentGuideRe)
if(i<=0||i>=n)return t
if(" "==t[0]){for(var o=(i-=i%this.tabSize)/this.tabSize,r=0;r<o;r++)e.appendChild(this.$tabStrings[" "].cloneNode(!0))
return this.$highlightIndentGuide(),t.substr(i)}if("\t"==t[0]){for(r=0;r<i;r++)e.appendChild(this.$tabStrings["\t"].cloneNode(!0))
return this.$highlightIndentGuide(),t.substr(i)}return this.$highlightIndentGuide(),t},e.prototype.$highlightIndentGuide=function(){if(this.$highlightIndentGuides&&this.displayIndentGuides){this.$highlightIndentGuideMarker={indentLevel:void 0,start:void 0,end:void 0,dir:void 0}
var e=this.session.doc.$lines
if(e){var t=this.session.selection.getCursor(),n=/^\s*/.exec(this.session.doc.getLine(t.row))[0].length,i=Math.floor(n/this.tabSize)
if(this.$highlightIndentGuideMarker={indentLevel:i,start:t.row},this.session.$bracketHighlight)for(var o=this.session.$bracketHighlight.ranges,r=0;r<o.length;r++)if(t.row!==o[r].start.row){this.$highlightIndentGuideMarker.end=o[r].start.row,t.row>o[r].start.row?this.$highlightIndentGuideMarker.dir=-1:this.$highlightIndentGuideMarker.dir=1
break}if(!this.$highlightIndentGuideMarker.end&&""!==e[t.row]&&t.column===e[t.row].length)for(this.$highlightIndentGuideMarker.dir=1,r=t.row+1;r<e.length;r++){var s=e[r],a=/^\s*/.exec(s)[0].length
if(""!==s&&(this.$highlightIndentGuideMarker.end=r,a<=n))break}this.$renderHighlightIndentGuide()}}},e.prototype.$clearActiveIndentGuide=function(){for(var e=this.$lines.cells,t=0;t<e.length;t++){var n=e[t].element.childNodes
if(n.length>0)for(var i=0;i<n.length;i++)if(n[i].classList&&n[i].classList.contains("ace_indent-guide-active")){n[i].classList.remove("ace_indent-guide-active")
break}}},e.prototype.$setIndentGuideActive=function(e,t){if(""!==this.session.doc.getLine(e.row)){var n=e.element.childNodes
if(n){var i=n[t-1]
i&&i.classList&&i.classList.contains("ace_indent-guide")&&i.classList.add("ace_indent-guide-active")}}},e.prototype.$renderHighlightIndentGuide=function(){if(this.$lines){var e=this.$lines.cells
this.$clearActiveIndentGuide()
var t=this.$highlightIndentGuideMarker.indentLevel
if(0!==t)if(1===this.$highlightIndentGuideMarker.dir)for(var n=0;n<e.length;n++){var i=e[n]
if(this.$highlightIndentGuideMarker.end&&i.row>=this.$highlightIndentGuideMarker.start+1){if(i.row>=this.$highlightIndentGuideMarker.end)break
this.$setIndentGuideActive(i,t)}}else for(n=e.length-1;n>=0;n--)if(i=e[n],this.$highlightIndentGuideMarker.end&&i.row<this.$highlightIndentGuideMarker.start){if(i.row<=this.$highlightIndentGuideMarker.end)break
this.$setIndentGuideActive(i,t)}}},e.prototype.$createLineElement=function(e){var t=this.dom.createElement("div")
return t.className="ace_line",t.style.height=this.config.lineHeight+"px",t},e.prototype.$renderWrappedLine=function(e,t,n){var i=0,o=0,s=n[0],a=0,l=this.$createLineElement()
e.appendChild(l)
for(var c=0;c<t.length;c++){var h=t[c],u=h.value
if(0==c&&this.displayIndentGuides){if(i=u.length,!(u=this.renderIndentGuide(l,u,s)))continue
i-=u.length}if(i+u.length<s)a=this.$renderToken(l,a,h,u),i+=u.length
else{for(;i+u.length>=s;)a=this.$renderToken(l,a,h,u.substring(0,s-i)),u=u.substring(s-i),i=s,l=this.$createLineElement(),e.appendChild(l),l.appendChild(this.dom.createTextNode(r.stringRepeat(" ",n.indent),this.element)),a=0,s=n[++o]||Number.MAX_VALUE
0!=u.length&&(i+=u.length,a=this.$renderToken(l,a,h,u))}}n[n.length-1]>this.MAX_LINE_LENGTH&&this.$renderOverflowMessage(l,a,null,"",!0)},e.prototype.$renderSimpleLine=function(e,t){for(var n=0,i=0;i<t.length;i++){var o=t[i],r=o.value
if(0!=i||!this.displayIndentGuides||(r=this.renderIndentGuide(e,r))){if(n+r.length>this.MAX_LINE_LENGTH)return this.$renderOverflowMessage(e,n,o,r)
n=this.$renderToken(e,n,o,r)}}},e.prototype.$renderOverflowMessage=function(e,t,n,i,o){n&&this.$renderToken(e,t,n,i.slice(0,this.MAX_LINE_LENGTH-t))
var r=this.dom.createElement("span")
r.className="ace_inline_button ace_keyword ace_toggle_wrap",r.textContent=o?"<hide>":"<click to see more...>",e.appendChild(r)},e.prototype.$renderLine=function(e,t,n){if(n||0==n||(n=this.session.getFoldLine(t)),n)var i=this.$getFoldLineTokens(t,n)
else i=this.session.getTokens(t)
var o=e
if(i.length){var r=this.session.getRowSplitData(t)
r&&r.length?(this.$renderWrappedLine(e,i,r),o=e.lastChild):(o=e,this.$useLineGroups()&&(o=this.$createLineElement(),e.appendChild(o)),this.$renderSimpleLine(o,i))}else this.$useLineGroups()&&(o=this.$createLineElement(),e.appendChild(o))
if(this.showEOL&&o){n&&(t=n.end.row)
var s=this.dom.createElement("span")
s.className="ace_invisible ace_invisible_eol",s.textContent=t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,o.appendChild(s)}},e.prototype.$getFoldLineTokens=function(e,t){var n=this.session,i=[],o=n.getTokens(e)
return t.walk((function(e,t,r,s,a){null!=e?i.push({type:"fold",value:e}):(a&&(o=n.getTokens(t)),o.length&&function(e,t,n){for(var o=0,r=0;r+e[o].value.length<t;)if(r+=e[o].value.length,++o==e.length)return
for(r!=t&&((s=e[o].value.substring(t-r)).length>n-t&&(s=s.substring(0,n-t)),i.push({type:e[o].type,value:s}),r=t+s.length,o+=1);r<n&&o<e.length;){var s;(s=e[o].value).length+r>n?i.push({type:e[o].type,value:s.substring(0,n-r)}):i.push(e[o]),r+=s.length,o+=1}}(o,s,r))}),t.end.row,this.session.getLine(t.end.row).length),i},e.prototype.$useLineGroups=function(){return this.session.getUseWrapMode()},e}()
c.prototype.$textToken={text:!0,rparen:!0,lparen:!0},c.prototype.EOF_CHAR="¶",c.prototype.EOL_CHAR_LF="¬",c.prototype.EOL_CHAR_CRLF="¤",c.prototype.EOL_CHAR=c.prototype.EOL_CHAR_LF,c.prototype.TAB_CHAR="—",c.prototype.SPACE_CHAR="·",c.prototype.$padding=0,c.prototype.MAX_LINE_LENGTH=1e4,c.prototype.showInvisibles=!1,c.prototype.showSpaces=!1,c.prototype.showTabs=!1,c.prototype.showEOL=!1,c.prototype.displayIndentGuides=!0,c.prototype.$highlightIndentGuides=!0,c.prototype.$tabStrings=[],c.prototype.destroy={},c.prototype.onChangeTabSize=c.prototype.$computeTabString,i.implement(c.prototype,a),t.Text=c})),ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],(function(e,t,n){"use strict"
var i=e("../lib/dom"),o=function(){function e(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_cursor-layer",e.appendChild(this.element),this.isVisible=!1,this.isBlinking=!0,this.blinkInterval=1e3,this.smoothBlinking=!1,this.cursors=[],this.cursor=this.addCursor(),i.addCssClass(this.element,"ace_hidden-cursors"),this.$updateCursors=this.$updateOpacity.bind(this)}return e.prototype.$updateOpacity=function(e){for(var t=this.cursors,n=t.length;n--;)i.setStyle(t[n].style,"opacity",e?"":"0")},e.prototype.$startCssAnimation=function(){for(var e=this.cursors,t=e.length;t--;)e[t].style.animationDuration=this.blinkInterval+"ms"
this.$isAnimating=!0,setTimeout(function(){this.$isAnimating&&i.addCssClass(this.element,"ace_animate-blinking")}.bind(this))},e.prototype.$stopCssAnimation=function(){this.$isAnimating=!1,i.removeCssClass(this.element,"ace_animate-blinking")},e.prototype.setPadding=function(e){this.$padding=e},e.prototype.setSession=function(e){this.session=e},e.prototype.setBlinking=function(e){e!=this.isBlinking&&(this.isBlinking=e,this.restartTimer())},e.prototype.setBlinkInterval=function(e){e!=this.blinkInterval&&(this.blinkInterval=e,this.restartTimer())},e.prototype.setSmoothBlinking=function(e){e!=this.smoothBlinking&&(this.smoothBlinking=e,i.setCssClass(this.element,"ace_smooth-blinking",e),this.$updateCursors(!0),this.restartTimer())},e.prototype.addCursor=function(){var e=i.createElement("div")
return e.className="ace_cursor",this.element.appendChild(e),this.cursors.push(e),e},e.prototype.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop()
return e.parentNode.removeChild(e),e}},e.prototype.hideCursor=function(){this.isVisible=!1,i.addCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},e.prototype.showCursor=function(){this.isVisible=!0,i.removeCssClass(this.element,"ace_hidden-cursors"),this.restartTimer()},e.prototype.restartTimer=function(){var e=this.$updateCursors
if(clearInterval(this.intervalId),clearTimeout(this.timeoutId),this.$stopCssAnimation(),this.smoothBlinking&&(this.$isSmoothBlinking=!1,i.removeCssClass(this.element,"ace_smooth-blinking")),e(!0),this.isBlinking&&this.blinkInterval&&this.isVisible)if(this.smoothBlinking&&(this.$isSmoothBlinking=!0,setTimeout(function(){this.$isSmoothBlinking&&i.addCssClass(this.element,"ace_smooth-blinking")}.bind(this))),i.HAS_CSS_ANIMATION)this.$startCssAnimation()
else{var t=function(){this.timeoutId=setTimeout((function(){e(!1)}),.6*this.blinkInterval)}.bind(this)
this.intervalId=setInterval((function(){e(!0),t()}),this.blinkInterval),t()}else this.$stopCssAnimation()},e.prototype.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0}
e||(e=this.session.selection.getCursor())
var n=this.session.documentToScreenPosition(e)
return{left:this.$padding+(this.session.$bidiHandler.isBidiRow(n.row,e.row)?this.session.$bidiHandler.getPosLeft(n.column):n.column*this.config.characterWidth),top:(n.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight}},e.prototype.isCursorInView=function(e,t){return e.top>=0&&e.top<t.maxHeight},e.prototype.update=function(e){this.config=e
var t=this.session.$selectionMarkers,n=0,o=0
void 0!==t&&0!==t.length||(t=[{cursor:null}]),n=0
for(var r=t.length;n<r;n++){var s=this.getPixelPosition(t[n].cursor,!0)
if(!((s.top>e.height+e.offset||s.top<0)&&n>1)){var a=this.cursors[o++]||this.addCursor(),l=a.style
this.drawCursor?this.drawCursor(a,s,e,t[n],this.session):this.isCursorInView(s,e)?(i.setStyle(l,"display","block"),i.translate(a,s.left,s.top),i.setStyle(l,"width",Math.round(e.characterWidth)+"px"),i.setStyle(l,"height",e.lineHeight+"px")):i.setStyle(l,"display","none")}}for(;this.cursors.length>o;)this.removeCursor()
var c=this.session.getOverwrite()
this.$setOverwrite(c),this.$pixelPos=s,this.restartTimer()},e.prototype.$setOverwrite=function(e){e!=this.overwrite&&(this.overwrite=e,e?i.addCssClass(this.element,"ace_overwrite-cursors"):i.removeCssClass(this.element,"ace_overwrite-cursors"))},e.prototype.destroy=function(){clearInterval(this.intervalId),clearTimeout(this.timeoutId)},e}()
o.prototype.$padding=0,o.prototype.drawCursor=null,t.Cursor=o})),ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=e("./lib/oop"),s=e("./lib/dom"),a=e("./lib/event"),l=e("./lib/event_emitter").EventEmitter,c=32768,h=function(){function e(e,t){this.element=s.createElement("div"),this.element.className="ace_scrollbar ace_scrollbar"+t,this.inner=s.createElement("div"),this.inner.className="ace_scrollbar-inner",this.inner.textContent=" ",this.element.appendChild(this.inner),e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,a.addListener(this.element,"scroll",this.onScroll.bind(this)),a.addListener(this.element,"mousedown",a.preventDefault)}return e.prototype.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1},e}()
r.implement(h.prototype,l)
var u=function(e){function t(t,n){var i=e.call(this,t,"-v")||this
return i.scrollTop=0,i.scrollHeight=0,n.$scrollbarWidth=i.width=s.scrollbarWidth(t.ownerDocument),i.inner.style.width=i.element.style.width=(i.width||15)+5+"px",i.$minWidth=0,i}return o(t,e),t.prototype.onScroll=function(){if(!this.skipEvent){if(this.scrollTop=this.element.scrollTop,1!=this.coeff){var e=this.element.clientHeight/this.scrollHeight
this.scrollTop=this.scrollTop*(1-e)/(this.coeff-e)}this._emit("scroll",{data:this.scrollTop})}this.skipEvent=!1},t.prototype.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},t.prototype.setHeight=function(e){this.element.style.height=e+"px"},t.prototype.setScrollHeight=function(e){this.scrollHeight=e,e>c?(this.coeff=c/e,e=c):1!=this.coeff&&(this.coeff=1),this.inner.style.height=e+"px"},t.prototype.setScrollTop=function(e){this.scrollTop!=e&&(this.skipEvent=!0,this.scrollTop=e,this.element.scrollTop=e*this.coeff)},t}(h)
u.prototype.setInnerHeight=u.prototype.setScrollHeight
var d=function(e){function t(t,n){var i=e.call(this,t,"-h")||this
return i.scrollLeft=0,i.height=n.$scrollbarWidth,i.inner.style.height=i.element.style.height=(i.height||15)+5+"px",i}return o(t,e),t.prototype.onScroll=function(){this.skipEvent||(this.scrollLeft=this.element.scrollLeft,this._emit("scroll",{data:this.scrollLeft})),this.skipEvent=!1},t.prototype.getHeight=function(){return this.isVisible?this.height:0},t.prototype.setWidth=function(e){this.element.style.width=e+"px"},t.prototype.setInnerWidth=function(e){this.inner.style.width=e+"px"},t.prototype.setScrollWidth=function(e){this.inner.style.width=e+"px"},t.prototype.setScrollLeft=function(e){this.scrollLeft!=e&&(this.skipEvent=!0,this.scrollLeft=this.element.scrollLeft=e)},t}(h)
t.ScrollBar=u,t.ScrollBarV=u,t.ScrollBarH=d,t.VScrollBar=u,t.HScrollBar=d})),ace.define("ace/scrollbar_custom",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i,o=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=e("./lib/oop"),s=e("./lib/dom"),a=e("./lib/event"),l=e("./lib/event_emitter").EventEmitter
s.importCssString(".ace_editor>.ace_sb-v div, .ace_editor>.ace_sb-h div{\n  position: absolute;\n  background: rgba(128, 128, 128, 0.6);\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n  z-index: 8;\n}\n.ace_editor>.ace_sb-v, .ace_editor>.ace_sb-h {\n  position: absolute;\n  z-index: 6;\n  background: none;\n  overflow: hidden!important;\n}\n.ace_editor>.ace_sb-v {\n  z-index: 6;\n  right: 0;\n  top: 0;\n  width: 12px;\n}\n.ace_editor>.ace_sb-v div {\n  z-index: 8;\n  right: 0;\n  width: 100%;\n}\n.ace_editor>.ace_sb-h {\n  bottom: 0;\n  left: 0;\n  height: 12px;\n}\n.ace_editor>.ace_sb-h div {\n  bottom: 0;\n  height: 100%;\n}\n.ace_editor>.ace_sb_grabbed {\n  z-index: 8;\n  background: #000;\n}","ace_scrollbar.css",!1)
var c=function(){function e(e,t){this.element=s.createElement("div"),this.element.className="ace_sb"+t,this.inner=s.createElement("div"),this.inner.className="",this.element.appendChild(this.inner),this.VScrollWidth=12,this.HScrollHeight=12,e.appendChild(this.element),this.setVisible(!1),this.skipEvent=!1,a.addMultiMouseDownListener(this.element,[500,300,300],this,"onMouseDown")}return e.prototype.setVisible=function(e){this.element.style.display=e?"":"none",this.isVisible=e,this.coeff=1},e}()
r.implement(c.prototype,l)
var h=function(e){function t(t,n){var i=e.call(this,t,"-v")||this
return i.scrollTop=0,i.scrollHeight=0,i.parent=t,i.width=i.VScrollWidth,i.renderer=n,i.inner.style.width=i.element.style.width=(i.width||15)+"px",i.$minWidth=0,i}return o(t,e),t.prototype.onMouseDown=function(e,t){if("mousedown"===e&&0===a.getButton(t)&&2!==t.detail){if(t.target===this.inner){var n=this,i=t.clientY,o=t.clientY,r=this.thumbTop
a.capture(this.inner,(function(e){i=e.clientY}),(function(){clearInterval(s)}))
var s=setInterval((function(){if(void 0!==i){var e=n.scrollTopFromThumbTop(r+i-o)
e!==n.scrollTop&&n._emit("scroll",{data:e})}}),20)
return a.preventDefault(t)}var l=t.clientY-this.element.getBoundingClientRect().top-this.thumbHeight/2
return this._emit("scroll",{data:this.scrollTopFromThumbTop(l)}),a.preventDefault(t)}},t.prototype.getHeight=function(){return this.height},t.prototype.scrollTopFromThumbTop=function(e){var t=e*(this.pageHeight-this.viewHeight)/(this.slideHeight-this.thumbHeight)
return(t>>=0)<0?t=0:t>this.pageHeight-this.viewHeight&&(t=this.pageHeight-this.viewHeight),t},t.prototype.getWidth=function(){return Math.max(this.isVisible?this.width:0,this.$minWidth||0)},t.prototype.setHeight=function(e){this.height=Math.max(0,e),this.slideHeight=this.height,this.viewHeight=this.height,this.setScrollHeight(this.pageHeight,!0)},t.prototype.setScrollHeight=function(e,t){(this.pageHeight!==e||t)&&(this.pageHeight=e,this.thumbHeight=this.slideHeight*this.viewHeight/this.pageHeight,this.thumbHeight>this.slideHeight&&(this.thumbHeight=this.slideHeight),this.thumbHeight<15&&(this.thumbHeight=15),this.inner.style.height=this.thumbHeight+"px",this.scrollTop>this.pageHeight-this.viewHeight&&(this.scrollTop=this.pageHeight-this.viewHeight,this.scrollTop<0&&(this.scrollTop=0),this._emit("scroll",{data:this.scrollTop})))},t.prototype.setScrollTop=function(e){this.scrollTop=e,e<0&&(e=0),this.thumbTop=e*(this.slideHeight-this.thumbHeight)/(this.pageHeight-this.viewHeight),this.inner.style.top=this.thumbTop+"px"},t}(c)
h.prototype.setInnerHeight=h.prototype.setScrollHeight
var u=function(e){function t(t,n){var i=e.call(this,t,"-h")||this
return i.scrollLeft=0,i.scrollWidth=0,i.height=i.HScrollHeight,i.inner.style.height=i.element.style.height=(i.height||12)+"px",i.renderer=n,i}return o(t,e),t.prototype.onMouseDown=function(e,t){if("mousedown"===e&&0===a.getButton(t)&&2!==t.detail){if(t.target===this.inner){var n=this,i=t.clientX,o=t.clientX,r=this.thumbLeft
a.capture(this.inner,(function(e){i=e.clientX}),(function(){clearInterval(s)}))
var s=setInterval((function(){if(void 0!==i){var e=n.scrollLeftFromThumbLeft(r+i-o)
e!==n.scrollLeft&&n._emit("scroll",{data:e})}}),20)
return a.preventDefault(t)}var l=t.clientX-this.element.getBoundingClientRect().left-this.thumbWidth/2
return this._emit("scroll",{data:this.scrollLeftFromThumbLeft(l)}),a.preventDefault(t)}},t.prototype.getHeight=function(){return this.isVisible?this.height:0},t.prototype.scrollLeftFromThumbLeft=function(e){var t=e*(this.pageWidth-this.viewWidth)/(this.slideWidth-this.thumbWidth)
return(t>>=0)<0?t=0:t>this.pageWidth-this.viewWidth&&(t=this.pageWidth-this.viewWidth),t},t.prototype.setWidth=function(e){this.width=Math.max(0,e),this.element.style.width=this.width+"px",this.slideWidth=this.width,this.viewWidth=this.width,this.setScrollWidth(this.pageWidth,!0)},t.prototype.setScrollWidth=function(e,t){(this.pageWidth!==e||t)&&(this.pageWidth=e,this.thumbWidth=this.slideWidth*this.viewWidth/this.pageWidth,this.thumbWidth>this.slideWidth&&(this.thumbWidth=this.slideWidth),this.thumbWidth<15&&(this.thumbWidth=15),this.inner.style.width=this.thumbWidth+"px",this.scrollLeft>this.pageWidth-this.viewWidth&&(this.scrollLeft=this.pageWidth-this.viewWidth,this.scrollLeft<0&&(this.scrollLeft=0),this._emit("scroll",{data:this.scrollLeft})))},t.prototype.setScrollLeft=function(e){this.scrollLeft=e,e<0&&(e=0),this.thumbLeft=e*(this.slideWidth-this.thumbWidth)/(this.pageWidth-this.viewWidth),this.inner.style.left=this.thumbLeft+"px"},t}(c)
u.prototype.setInnerWidth=u.prototype.setScrollWidth,t.ScrollBar=h,t.ScrollBarV=h,t.ScrollBarH=u,t.VScrollBar=h,t.HScrollBar=u})),ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],(function(e,t,n){"use strict"
var i=e("./lib/event"),o=function(){function e(e,t){this.onRender=e,this.pending=!1,this.changes=0,this.$recursionLimit=2,this.window=t||window
var n=this
this._flush=function(e){n.pending=!1
var t=n.changes
if(t&&(i.blockIdle(100),n.changes=0,n.onRender(t)),n.changes){if(n.$recursionLimit--<0)return
n.schedule()}else n.$recursionLimit=2}}return e.prototype.schedule=function(e){this.changes=this.changes|e,this.changes&&!this.pending&&(i.nextFrame(this._flush),this.pending=!0)},e.prototype.clear=function(e){var t=this.changes
return this.changes=0,t},e}()
t.RenderLoop=o})),ace.define("ace/layer/font_metrics",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/lib/useragent","ace/lib/event_emitter"],(function(e,t,n){var i=e("../lib/oop"),o=e("../lib/dom"),r=e("../lib/lang"),s=e("../lib/event"),a=e("../lib/useragent"),l=e("../lib/event_emitter").EventEmitter,c=512,h="function"==typeof ResizeObserver,u=200,d=function(){function e(e){this.el=o.createElement("div"),this.$setMeasureNodeStyles(this.el.style,!0),this.$main=o.createElement("div"),this.$setMeasureNodeStyles(this.$main.style),this.$measureNode=o.createElement("div"),this.$setMeasureNodeStyles(this.$measureNode.style),this.el.appendChild(this.$main),this.el.appendChild(this.$measureNode),e.appendChild(this.el),this.$measureNode.textContent=r.stringRepeat("X",c),this.$characterSize={width:0,height:0},h?this.$addObserver():this.checkForSizeChanges()}return e.prototype.$setMeasureNodeStyles=function(e,t){e.width=e.height="auto",e.left=e.top="0px",e.visibility="hidden",e.position="absolute",e.whiteSpace="pre",a.isIE<8?e["font-family"]="inherit":e.font="inherit",e.overflow=t?"hidden":"visible"},e.prototype.checkForSizeChanges=function(e){if(void 0===e&&(e=this.$measureSizes()),e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold"
var t=this.$measureSizes()
this.$measureNode.style.fontWeight="",this.$characterSize=e,this.charSizes=Object.create(null),this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},e.prototype.$addObserver=function(){var e=this
this.$observer=new window.ResizeObserver((function(t){e.checkForSizeChanges()})),this.$observer.observe(this.$measureNode)},e.prototype.$pollSizeChanges=function(){if(this.$pollSizeChangesTimer||this.$observer)return this.$pollSizeChangesTimer
var e=this
return this.$pollSizeChangesTimer=s.onIdle((function t(){e.checkForSizeChanges(),s.onIdle(t,500)}),500)},e.prototype.setPolling=function(e){e?this.$pollSizeChanges():this.$pollSizeChangesTimer&&(clearInterval(this.$pollSizeChangesTimer),this.$pollSizeChangesTimer=0)},e.prototype.$measureSizes=function(e){var t={height:(e||this.$measureNode).clientHeight,width:(e||this.$measureNode).clientWidth/c}
return 0===t.width||0===t.height?null:t},e.prototype.$measureCharWidth=function(e){return this.$main.textContent=r.stringRepeat(e,c),this.$main.getBoundingClientRect().width/c},e.prototype.getCharacterWidth=function(e){var t=this.charSizes[e]
return void 0===t&&(t=this.charSizes[e]=this.$measureCharWidth(e)/this.$characterSize.width),t},e.prototype.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$observer&&this.$observer.disconnect(),this.el&&this.el.parentNode&&this.el.parentNode.removeChild(this.el)},e.prototype.$getZoom=function(e){return e&&e.parentElement?(window.getComputedStyle(e).zoom||1)*this.$getZoom(e.parentElement):1},e.prototype.$initTransformMeasureNodes=function(){var e=function(e,t){return["div",{style:"position: absolute;top:"+e+"px;left:"+t+"px;"}]}
this.els=o.buildDom([e(0,0),e(u,0),e(0,u),e(u,u)],this.el)},e.prototype.transformCoordinates=function(e,t){function n(e,t,n){var i=e[1]*t[0]-e[0]*t[1]
return[(-t[1]*n[0]+t[0]*n[1])/i,(+e[1]*n[0]-e[0]*n[1])/i]}function i(e,t){return[e[0]-t[0],e[1]-t[1]]}function o(e,t){return[e[0]+t[0],e[1]+t[1]]}function r(e,t){return[e*t[0],e*t[1]]}function s(e){var t=e.getBoundingClientRect()
return[t.left,t.top]}e&&(e=r(1/this.$getZoom(this.el),e)),this.els||this.$initTransformMeasureNodes()
var a=s(this.els[0]),l=s(this.els[1]),c=s(this.els[2]),h=s(this.els[3]),d=n(i(h,l),i(h,c),i(o(l,c),o(h,a))),g=r(1+d[0],i(l,a)),p=r(1+d[1],i(c,a))
if(t){var f=t,m=d[0]*f[0]/u+d[1]*f[1]/u+1,v=o(r(f[0],g),r(f[1],p))
return o(r(1/m/u,v),a)}var w=i(e,a),y=n(i(g,r(d[0],w)),i(p,r(d[1],w)),w)
return r(u,y)},e}()
d.prototype.$characterSize={width:0,height:0},i.implement(d.prototype,l),t.FontMetrics=d})),ace.define("ace/css/editor-css",["require","exports","module"],(function(e,t,n){n.exports='\n.ace_br1 {border-top-left-radius    : 3px;}\n.ace_br2 {border-top-right-radius   : 3px;}\n.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}\n.ace_br4 {border-bottom-right-radius: 3px;}\n.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}\n.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}\n.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}\n.ace_br8 {border-bottom-left-radius : 3px;}\n.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}\n.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}\n.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}\n.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}\n.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}\n\n\n.ace_editor {\n    position: relative;\n    overflow: hidden;\n    padding: 0;\n    font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'Source Code Pro\', \'source-code-pro\', monospace;\n    direction: ltr;\n    text-align: left;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    bottom: 0;\n    background-color: inherit;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: text;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    min-width: 100%;\n    contain: style size layout;\n    font-variant-ligatures: no-common-ligatures;\n}\n\n.ace_keyboard-focus:focus {\n    box-shadow: inset 0 0 0 2px #5E9ED6;\n    outline: none;\n}\n\n.ace_dragging .ace_scroller:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    content: \'\';\n    background: rgba(250, 250, 250, 0.01);\n    z-index: 1000;\n}\n.ace_dragging.ace_dark .ace_scroller:before{\n    background: rgba(0, 0, 0, 0.01);\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    width: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    cursor: default;\n    z-index: 4;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    contain: style size layout;\n}\n\n.ace_gutter-active-line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.ace_scroll-left:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n    pointer-events: none;\n}\n\n.ace_gutter-cell, .ace_gutter-cell_svg-icons {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell_svg-icons .ace_gutter_annotation {\n    margin-left: -14px;\n    float: left;\n}\n\n.ace_gutter-cell .ace_gutter_annotation {\n    margin-left: -19px;\n    float: left;\n}\n\n.ace_gutter-cell.ace_error, .ace_icon.ace_error, .ace_icon.ace_error_fold {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning, .ace_icon.ace_warning, .ace_icon.ace_warning_fold {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info, .ace_icon.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info, .ace_dark .ace_icon.ace_info {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");\n}\n\n.ace_icon_svg.ace_error {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJyZWQiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KPGNpcmNsZSBmaWxsPSJub25lIiBjeD0iOCIgY3k9IjgiIHI9IjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjExIiB5MT0iNSIgeDI9IjUiIHkyPSIxMSIvPgo8bGluZSB4MT0iMTEiIHkxPSIxMSIgeDI9IjUiIHkyPSI1Ii8+CjwvZz4KPC9zdmc+");\n    background-color: crimson;\n}\n.ace_icon_svg.ace_warning {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJkYXJrb3JhbmdlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+Cjxwb2x5Z29uIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHBvaW50cz0iOCAxIDE1IDE1IDEgMTUgOCAxIi8+CjxyZWN0IHg9IjgiIHk9IjEyIiB3aWR0aD0iMC4wMSIgaGVpZ2h0PSIwLjAxIi8+CjxsaW5lIHgxPSI4IiB5MT0iNiIgeDI9IjgiIHkyPSIxMCIvPgo8L2c+Cjwvc3ZnPg==");\n    background-color: darkorange;\n}\n.ace_icon_svg.ace_info {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiI+CjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJibHVlIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+CjxjaXJjbGUgZmlsbD0ibm9uZSIgY3g9IjgiIGN5PSI4IiByPSI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjxwb2x5bGluZSBwb2ludHM9IjggMTEgOCA4Ii8+Cjxwb2x5bGluZSBwb2ludHM9IjkgOCA2IDgiLz4KPGxpbmUgeDE9IjEwIiB5MT0iMTEiIHgyPSI2IiB5Mj0iMTEiLz4KPHJlY3QgeD0iOCIgeT0iNSIgd2lkdGg9IjAuMDEiIGhlaWdodD0iMC4wMSIvPgo8L2c+Cjwvc3ZnPg==");\n    background-color: royalblue;\n}\n\n.ace_icon_svg.ace_error_fold {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0ibSAxOC45Mjk4NTEsNy44Mjk4MDc2IGMgMC4xNDYzNTMsNi4zMzc0NjA0IC02LjMyMzE0Nyw3Ljc3Nzg0NDQgLTcuNDc3OTEyLDcuNzc3ODQ0NCAtMi4xMDcyNzI2LC0wLjEyODc1IDUuMTE3Njc4LDAuMzU2MjQ5IDUuMDUxNjk4LC03Ljg3MDA2MTggLTAuNjA0NjcyLC04LjAwMzk3MzQ5IC03LjA3NzI3MDYsLTcuNTYzMTE4OSAtNC44NTczLC03LjQzMDM5NTU2IDEuNjA2LC0wLjExNTE0MjI1IDYuODk3NDg1LDEuMjYyNTQ1OTYgNy4yODM1MTQsNy41MjI2MTI5NiB6IiBmaWxsPSJjcmltc29uIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibSA4LjExNDc1NjIsMi4wNTI5ODI4IGMgMy4zNDkxNjk4LDAgNi4wNjQxMzI4LDIuNjc2ODYyNyA2LjA2NDEzMjgsNS45Nzg5NTMgMCwzLjMwMjExMjIgLTIuNzE0OTYzLDUuOTc4OTIwMiAtNi4wNjQxMzI4LDUuOTc4OTIwMiAtMy4zNDkxNDczLDAgLTYuMDY0MTc3MiwtMi42NzY4MDggLTYuMDY0MTc3MiwtNS45Nzg5MjAyIDAuMDA1MzksLTMuMjk5ODg2MSAyLjcxNzI2NTYsLTUuOTczNjQwOCA2LjA2NDE3NzIsLTUuOTc4OTUzIHogbSAwLC0xLjczNTgyNzE5IGMgLTQuMzIxNDgzNiwwIC03LjgyNDc0MDM4LDMuNDU0MDE4NDkgLTcuODI0NzQwMzgsNy43MTQ3ODAxOSAwLDQuMjYwNzI4MiAzLjUwMzI1Njc4LDcuNzE0NzQ1MiA3LjgyNDc0MDM4LDcuNzE0NzQ1MiA0LjMyMTQ0OTgsMCA3LjgyNDY5OTgsLTMuNDU0MDE3IDcuODI0Njk5OCwtNy43MTQ3NDUyIDAsLTIuMDQ2MDkxNCAtMC44MjQzOTIsLTQuMDA4MzY3MiAtMi4yOTE3NTYsLTUuNDU1MTc0NiBDIDEyLjE4MDIyNSwxLjEyOTk2NDggMTAuMTkwMDEzLDAuMzE3MTU1NjEgOC4xMTQ3NTYyLDAuMzE3MTU1NjEgWiBNIDYuOTM3NDU2Myw4LjI0MDU5ODUgNC42NzE4Njg1LDEwLjQ4NTg1MiA2LjAwODY4MTQsMTEuODc2NzI4IDguMzE3MDAzNSw5LjYwMDc5MTEgMTAuNjI1MzM3LDExLjg3NjcyOCAxMS45NjIxMzgsMTAuNDg1ODUyIDkuNjk2NTUwOCw4LjI0MDU5ODUgMTEuOTYyMTM4LDYuMDA2ODA2NiAxMC41NzMyNDYsNC42Mzc0MzM1IDguMzE3MDAzNSw2Ljg3MzQyOTcgNi4wNjA3NjA3LDQuNjM3NDMzNSA0LjY3MTg2ODUsNi4wMDY4MDY2IFoiIGZpbGw9ImNyaW1zb24iIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4=");\n    background-color: crimson;\n}\n.ace_icon_svg.ace_warning_fold {\n    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NzY5IDE0LjczMzdMOC42NTE5MiAyLjQ4MzY5QzguMzI5NDYgMS44Mzg3NyA3LjQwOTEzIDEuODM4NzcgNy4wODY2NyAyLjQ4MzY5TDAuOTYxNjY5IDE0LjczMzdDMC42NzA3NzUgMTUuMzE1NSAxLjA5MzgzIDE2IDEuNzQ0MjkgMTZIMTMuOTk0M0MxNC42NDQ4IDE2IDE1LjA2NzggMTUuMzE1NSAxNC43NzY5IDE0LjczMzdaTTMuMTYwMDcgMTQuMjVMNy44NjkyOSA0LjgzMTU2TDEyLjU3ODUgMTQuMjVIMy4xNjAwN1pNOC43NDQyOSAxMS42MjVWMTMuMzc1SDYuOTk0MjlWMTEuNjI1SDguNzQ0MjlaTTYuOTk0MjkgMTAuNzVWNy4yNUg4Ljc0NDI5VjEwLjc1SDYuOTk0MjlaIiBmaWxsPSIjRUM3MjExIi8+CjxwYXRoIGQ9Ik0xMS4xOTkxIDIuOTUyMzhDMTAuODgwOSAyLjMxNDY3IDEwLjM1MzcgMS44MDUyNiA5LjcwNTUgMS41MDlMMTEuMDQxIDEuMDY5NzhDMTEuNjg4MyAwLjk0OTgxNCAxMi4zMzcgMS4yNzI2MyAxMi42MzE3IDEuODYxNDFMMTcuNjEzNiAxMS44MTYxQzE4LjM1MjcgMTMuMjkyOSAxNy41OTM4IDE1LjA4MDQgMTYuMDE4IDE1LjU3NDVDMTYuNDA0NCAxNC40NTA3IDE2LjMyMzEgMTMuMjE4OCAxNS43OTI0IDEyLjE1NTVMMTEuMTk5MSAyLjk1MjM4WiIgZmlsbD0iI0VDNzIxMSIvPgo8L3N2Zz4=");\n    background-color: darkorange;\n}\n\n.ace_scrollbar {\n    contain: strict;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    z-index: 6;\n}\n\n.ace_scrollbar-inner {\n    position: absolute;\n    cursor: text;\n    left: 0;\n    top: 0;\n}\n\n.ace_scrollbar-v{\n    overflow-x: hidden;\n    overflow-y: scroll;\n    top: 0;\n}\n\n.ace_scrollbar-h {\n    overflow-x: scroll;\n    overflow-y: hidden;\n    left: 0;\n}\n\n.ace_print-margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_text-input {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    -moz-appearance: none;\n    appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n    font: inherit;\n    padding: 0 1px;\n    margin: 0 -1px;\n    contain: strict;\n    -ms-user-select: text;\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    user-select: text;\n    /*with `pre-line` chrome inserts &nbsp; instead of space*/\n    white-space: pre!important;\n}\n.ace_text-input.ace_composition {\n    background: transparent;\n    color: inherit;\n    z-index: 1000;\n    opacity: 1;\n}\n.ace_composition_placeholder { color: transparent }\n.ace_composition_marker { \n    border-bottom: 1px solid;\n    position: absolute;\n    border-radius: 0;\n    margin-top: 1px;\n}\n\n[ace_nocontext=true] {\n    transform: none!important;\n    filter: none!important;\n    clip-path: none!important;\n    mask : none!important;\n    contain: none!important;\n    perspective: none!important;\n    mix-blend-mode: initial!important;\n    z-index: auto;\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    /* workaround for chrome bug https://github.com/ajaxorg/ace/issues/2312*/\n    word-wrap: normal;\n    white-space: pre;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter-layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n    height: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer {\n    font: inherit !important;\n    position: absolute;\n    height: 1000000px;\n    width: 1000000px;\n    contain: style size layout;\n}\n\n.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {\n    contain: style size layout;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n\n.ace_hidpi .ace_text-layer,\n.ace_hidpi .ace_gutter-layer,\n.ace_hidpi .ace_content,\n.ace_hidpi .ace_gutter {\n    contain: strict;\n}\n.ace_hidpi .ace_text-layer > .ace_line, \n.ace_hidpi .ace_text-layer > .ace_line_group {\n    contain: strict;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n    box-sizing: border-box;\n    border-left: 2px solid;\n    /* workaround for smooth cursor repaintng whole screen in chrome */\n    transform: translatez(0);\n}\n\n.ace_multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_slim-cursors .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_overwrite-cursors .ace_cursor {\n    border-left-width: 0;\n    border-bottom: 1px solid;\n}\n\n.ace_hidden-cursors .ace_cursor {\n    opacity: 0.2;\n}\n\n.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {\n    opacity: 0;\n}\n\n.ace_smooth-blinking .ace_cursor {\n    transition: opacity 0.18s;\n}\n\n.ace_animate-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: step-end;\n    animation-name: blink-ace-animate;\n    animation-iteration-count: infinite;\n}\n\n.ace_animate-blinking.ace_smooth-blinking .ace_cursor {\n    animation-duration: 1000ms;\n    animation-timing-function: ease-in-out;\n    animation-name: blink-ace-animate-smooth;\n}\n    \n@keyframes blink-ace-animate {\n    from, to { opacity: 1; }\n    60% { opacity: 0; }\n}\n\n@keyframes blink-ace-animate-smooth {\n    from, to { opacity: 1; }\n    45% { opacity: 1; }\n    60% { opacity: 0; }\n    85% { opacity: 0; }\n}\n\n.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_error_bracket {\n    position: absolute;\n    border-bottom: 1px solid #DE5555;\n    border-radius: 0;\n}\n\n.ace_marker-layer .ace_active-line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected-word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),\n        url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");\n}\n\n.ace_tooltip {\n    background-color: #f5f5f5;\n    border: 1px solid gray;\n    border-radius: 1px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n    color: black;\n    max-width: 100%;\n    padding: 3px 4px;\n    position: fixed;\n    z-index: 999999;\n    box-sizing: border-box;\n    cursor: default;\n    white-space: pre;\n    word-wrap: break-word;\n    line-height: normal;\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    pointer-events: none;\n}\n\n.ace_tooltip.ace_dark {\n    background-color: #636363;\n    color: #fff;\n}\n\n.ace_tooltip:focus {\n    outline: 1px solid #5E9ED6;\n}\n\n.ace_icon {\n    display: inline-block;\n    width: 18px;\n    vertical-align: top;\n}\n\n.ace_icon_svg {\n    display: inline-block;\n    width: 12px;\n    vertical-align: top;\n    -webkit-mask-repeat: no-repeat;\n    -webkit-mask-size: 12px;\n    -webkit-mask-position: center;\n}\n\n.ace_folding-enabled > .ace_gutter-cell, .ace_folding-enabled > .ace_gutter-cell_svg-icons {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: none;\n    width: 11px;\n    vertical-align: top;\n\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n    cursor: pointer;\n}\n\n.ace_folding-enabled .ace_fold-widget {\n    display: inline-block;   \n}\n\n.ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");\n}\n\n.ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");\n}\n.ace_dark .ace_fold-widget.ace_end {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget.ace_closed {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n\n.ace_inline_button {\n    border: 1px solid lightgray;\n    display: inline-block;\n    margin: -1px 8px;\n    padding: 0 5px;\n    pointer-events: auto;\n    cursor: pointer;\n}\n.ace_inline_button:hover {\n    border-color: gray;\n    background: rgba(200,200,200,0.2);\n    display: inline-block;\n    pointer-events: auto;\n}\n\n.ace_fold-widget.ace_invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n    transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n    transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n\n.ace_underline {\n    text-decoration: underline;\n}\n\n.ace_bold {\n    font-weight: bold;\n}\n\n.ace_nobold .ace_bold {\n    font-weight: normal;\n}\n\n.ace_italic {\n    font-style: italic;\n}\n\n\n.ace_error-marker {\n    background-color: rgba(255, 0, 0,0.2);\n    position: absolute;\n    z-index: 9;\n}\n\n.ace_highlight-marker {\n    background-color: rgba(255, 255, 0,0.2);\n    position: absolute;\n    z-index: 8;\n}\n\n.ace_mobile-menu {\n    position: absolute;\n    line-height: 1.5;\n    border-radius: 4px;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    background: white;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #dcdcdc;\n    color: black;\n}\n.ace_dark > .ace_mobile-menu {\n    background: #333;\n    color: #ccc;\n    box-shadow: 1px 3px 2px grey;\n    border: 1px solid #444;\n\n}\n.ace_mobile-button {\n    padding: 2px;\n    cursor: pointer;\n    overflow: hidden;\n}\n.ace_mobile-button:hover {\n    background-color: #eee;\n    opacity:1;\n}\n.ace_mobile-button:active {\n    background-color: #ddd;\n}\n\n.ace_placeholder {\n    font-family: arial;\n    transform: scale(0.9);\n    transform-origin: left;\n    white-space: pre;\n    opacity: 0.7;\n    margin: 0 10px;\n}\n\n.ace_ghost_text {\n    opacity: 0.5;\n    font-style: italic;\n    white-space: pre;\n}'})),ace.define("ace/layer/decorators",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter"],(function(e,t,n){"use strict"
var i=e("../lib/dom"),o=e("../lib/oop"),r=e("../lib/event_emitter").EventEmitter,s=function(){function e(e,t){this.canvas=i.createElement("canvas"),this.renderer=t,this.pixelRatio=1,this.maxHeight=t.layerConfig.maxHeight,this.lineHeight=t.layerConfig.lineHeight,this.canvasHeight=e.parent.scrollHeight,this.heightRatio=this.canvasHeight/this.maxHeight,this.canvasWidth=e.width,this.minDecorationHeight=2*this.pixelRatio|0,this.halfMinDecorationHeight=this.minDecorationHeight/2|0,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,this.canvas.style.top="0px",this.canvas.style.right="0px",this.canvas.style.zIndex="7px",this.canvas.style.position="absolute",this.colors={},this.colors.dark={error:"rgba(255, 18, 18, 1)",warning:"rgba(18, 136, 18, 1)",info:"rgba(18, 18, 136, 1)"},this.colors.light={error:"rgb(255,51,51)",warning:"rgb(32,133,72)",info:"rgb(35,68,138)"},e.element.appendChild(this.canvas)}return e.prototype.$updateDecorators=function(e){var t=!0===this.renderer.theme.isDark?this.colors.dark:this.colors.light
e&&(this.maxHeight=e.maxHeight,this.lineHeight=e.lineHeight,this.canvasHeight=e.height,(e.lastRow+1)*this.lineHeight<this.canvasHeight?this.heightRatio=1:this.heightRatio=this.canvasHeight/this.maxHeight)
var n=this.canvas.getContext("2d"),i=this.renderer.session.$annotations
if(n.clearRect(0,0,this.canvas.width,this.canvas.height),i){var o={info:1,warning:2,error:3}
i.forEach((function(e){e.priority=o[e.type]||null})),i=i.sort((function(e,t){return e.priority<t.priority?-1:e.priority>t.priority?1:0}))
for(var r=this.renderer.session.$foldData,s=0;s<i.length;s++){var a=i[s].row,l=this.compensateFoldRows(a,r),c=Math.round((a-l)*this.lineHeight*this.heightRatio),h=Math.round((a-l)*this.lineHeight*this.heightRatio),u=Math.round(((a-l)*this.lineHeight+this.lineHeight)*this.heightRatio)
if(u-h<this.minDecorationHeight){var d=(h+u)/2|0
d<this.halfMinDecorationHeight?d=this.halfMinDecorationHeight:d+this.halfMinDecorationHeight>this.canvasHeight&&(d=this.canvasHeight-this.halfMinDecorationHeight),h=Math.round(d-this.halfMinDecorationHeight),u=Math.round(d+this.halfMinDecorationHeight)}n.fillStyle=t[i[s].type]||null,n.fillRect(0,c,this.canvasWidth,u-h)}}var g=this.renderer.session.selection.getCursor()
g&&(l=this.compensateFoldRows(g.row,r),c=Math.round((g.row-l)*this.lineHeight*this.heightRatio),n.fillStyle="rgba(0, 0, 0, 0.5)",n.fillRect(0,c,this.canvasWidth,2))},e.prototype.compensateFoldRows=function(e,t){var n=0
if(t&&t.length>0)for(var i=0;i<t.length;i++)e>t[i].start.row&&e<t[i].end.row?n+=e-t[i].start.row:e>=t[i].end.row&&(n+=t[i].end.row-t[i].start.row)
return n},e}()
o.implement(s.prototype,r),t.Decorator=s})),ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/scrollbar","ace/scrollbar_custom","ace/scrollbar_custom","ace/renderloop","ace/layer/font_metrics","ace/lib/event_emitter","ace/css/editor-css","ace/layer/decorators","ace/lib/useragent"],(function(e,t,n){"use strict"
var i=e("./lib/oop"),o=e("./lib/dom"),r=e("./lib/lang"),s=e("./config"),a=e("./layer/gutter").Gutter,l=e("./layer/marker").Marker,c=e("./layer/text").Text,h=e("./layer/cursor").Cursor,u=e("./scrollbar").HScrollBar,d=e("./scrollbar").VScrollBar,g=e("./scrollbar_custom").HScrollBar,p=e("./scrollbar_custom").VScrollBar,f=e("./renderloop").RenderLoop,m=e("./layer/font_metrics").FontMetrics,v=e("./lib/event_emitter").EventEmitter,w=e("./css/editor-css"),y=e("./layer/decorators").Decorator,b=e("./lib/useragent")
o.importCssString(w,"ace_editor.css",!1)
var $=function(){function e(e,t){var n=this
this.container=e||o.createElement("div"),o.addCssClass(this.container,"ace_editor"),o.HI_DPI&&o.addCssClass(this.container,"ace_hidpi"),this.setTheme(t),null==s.get("useStrictCSP")&&s.set("useStrictCSP",!1),this.$gutter=o.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.$gutter.setAttribute("aria-hidden",!0),this.scroller=o.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=o.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.$gutterLayer=new a(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this)),this.$markerBack=new l(this.content)
var i=this.$textLayer=new c(this.content)
this.canvas=i.element,this.$markerFront=new l(this.content),this.$cursorLayer=new h(this.content),this.$horizScroll=!1,this.$vScroll=!1,this.scrollBar=this.scrollBarV=new d(this.container,this),this.scrollBarH=new u(this.container,this),this.scrollBarV.on("scroll",(function(e){n.$scrollAnimation||n.session.setScrollTop(e.data-n.scrollMargin.top)})),this.scrollBarH.on("scroll",(function(e){n.$scrollAnimation||n.session.setScrollLeft(e.data-n.scrollMargin.left)})),this.scrollTop=0,this.scrollLeft=0,this.cursorPos={row:0,column:0},this.$fontMetrics=new m(this.container),this.$textLayer.$setFontMetrics(this.$fontMetrics),this.$textLayer.on("changeCharacterSize",(function(e){n.updateCharacterSize(),n.onResize(!0,n.gutterWidth,n.$size.width,n.$size.height),n._signal("changeCharacterSize",e)})),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0,$dirty:!0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1,gutterOffset:1},this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.margin={left:0,right:0,top:0,bottom:0,v:0,h:0},this.$keepTextAreaAtCursor=!b.isIOS,this.$loop=new f(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.updateCharacterSize(),this.setPadding(4),this.$addResizeObserver(),s.resetOptions(this),s._signal("renderer",this)}return e.prototype.updateCharacterSize=function(){this.$textLayer.allowBoldFonts!=this.$allowBoldFonts&&(this.$allowBoldFonts=this.$textLayer.allowBoldFonts,this.setStyle("ace_nobold",!this.$allowBoldFonts)),this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth(),this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight(),this.$updatePrintMargin(),o.setStyle(this.scroller.style,"line-height",this.lineHeight+"px")},e.prototype.setSession=function(e){this.session&&this.session.doc.off("changeNewLineMode",this.onChangeNewLineMode),this.session=e,e&&this.scrollMargin.top&&e.getScrollTop()<=0&&e.setScrollTop(-this.scrollMargin.top),this.$cursorLayer.setSession(e),this.$markerBack.setSession(e),this.$markerFront.setSession(e),this.$gutterLayer.setSession(e),this.$textLayer.setSession(e),e&&(this.$loop.schedule(this.CHANGE_FULL),this.session.$setFontMetrics(this.$fontMetrics),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.onChangeNewLineMode=this.onChangeNewLineMode.bind(this),this.onChangeNewLineMode(),this.session.doc.on("changeNewLineMode",this.onChangeNewLineMode))},e.prototype.updateLines=function(e,t,n){if(void 0===t&&(t=1/0),this.$changedLines?(this.$changedLines.firstRow>e&&(this.$changedLines.firstRow=e),this.$changedLines.lastRow<t&&(this.$changedLines.lastRow=t)):this.$changedLines={firstRow:e,lastRow:t},this.$changedLines.lastRow<this.layerConfig.firstRow){if(!n)return
this.$changedLines.lastRow=this.layerConfig.lastRow}this.$changedLines.firstRow>this.layerConfig.lastRow||this.$loop.schedule(this.CHANGE_LINES)},e.prototype.onChangeNewLineMode=function(){this.$loop.schedule(this.CHANGE_TEXT),this.$textLayer.$updateEolChar(),this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)},e.prototype.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},e.prototype.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},e.prototype.updateFull=function(e){e?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},e.prototype.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},e.prototype.$updateSizeAsync=function(){this.$loop.pending?this.$size.$dirty=!0:this.onResize()},e.prototype.onResize=function(e,t,n,i){if(!(this.resizing>2)){this.resizing>0?this.resizing++:this.resizing=e?1:0
var o=this.container
i||(i=o.clientHeight||o.scrollHeight),n||(n=o.clientWidth||o.scrollWidth)
var r=this.$updateCachedSize(e,t,n,i)
if(this.$resizeTimer&&this.$resizeTimer.cancel(),!this.$size.scrollerHeight||!n&&!i)return this.resizing=0
e&&(this.$gutterLayer.$padding=null),e?this.$renderChanges(r|this.$changes,!0):this.$loop.schedule(r|this.$changes),this.resizing&&(this.resizing=0),this.scrollBarH.scrollLeft=this.scrollBarV.scrollTop=null,this.$customScrollbar&&this.$updateCustomScrollbar(!0)}},e.prototype.$updateCachedSize=function(e,t,n,i){i-=this.$extraHeight||0
var r=0,s=this.$size,a={width:s.width,height:s.height,scrollerHeight:s.scrollerHeight,scrollerWidth:s.scrollerWidth}
if(i&&(e||s.height!=i)&&(s.height=i,r|=this.CHANGE_SIZE,s.scrollerHeight=s.height,this.$horizScroll&&(s.scrollerHeight-=this.scrollBarH.getHeight()),this.scrollBarV.setHeight(s.scrollerHeight),this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px",r|=this.CHANGE_SCROLL),n&&(e||s.width!=n)){r|=this.CHANGE_SIZE,s.width=n,null==t&&(t=this.$showGutter?this.$gutter.offsetWidth:0),this.gutterWidth=t,o.setStyle(this.scrollBarH.element.style,"left",t+"px"),o.setStyle(this.scroller.style,"left",t+this.margin.left+"px"),s.scrollerWidth=Math.max(0,n-t-this.scrollBarV.getWidth()-this.margin.h),o.setStyle(this.$gutter.style,"left",this.margin.left+"px")
var l=this.scrollBarV.getWidth()+"px"
o.setStyle(this.scrollBarH.element.style,"right",l),o.setStyle(this.scroller.style,"right",l),o.setStyle(this.scroller.style,"bottom",this.scrollBarH.getHeight()),this.scrollBarH.setWidth(s.scrollerWidth),(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)&&(r|=this.CHANGE_FULL)}return s.$dirty=!n||!i,r&&this._signal("resize",a),r},e.prototype.onGutterResize=function(e){var t=this.$showGutter?e:0
t!=this.gutterWidth&&(this.$changes|=this.$updateCachedSize(!0,t,this.$size.width,this.$size.height)),this.session.getUseWrapMode()&&this.adjustWrapLimit()||this.$size.$dirty?this.$loop.schedule(this.CHANGE_FULL):this.$computeLayerConfig()},e.prototype.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-2*this.$padding,t=Math.floor(e/this.characterWidth)
return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)},e.prototype.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)},e.prototype.getAnimatedScroll=function(){return this.$animatedScroll},e.prototype.setShowInvisibles=function(e){this.setOption("showInvisibles",e),this.session.$bidiHandler.setShowInvisibles(e)},e.prototype.getShowInvisibles=function(){return this.getOption("showInvisibles")},e.prototype.getDisplayIndentGuide=function(){return this.getOption("displayIndentGuides")},e.prototype.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)},e.prototype.getHighlightIndentGuides=function(){return this.getOption("highlightIndentGuides")},e.prototype.setHighlightIndentGuides=function(e){this.setOption("highlightIndentGuides",e)},e.prototype.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)},e.prototype.getShowPrintMargin=function(){return this.getOption("showPrintMargin")},e.prototype.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)},e.prototype.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")},e.prototype.getShowGutter=function(){return this.getOption("showGutter")},e.prototype.setShowGutter=function(e){return this.setOption("showGutter",e)},e.prototype.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")},e.prototype.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)},e.prototype.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)},e.prototype.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")},e.prototype.$updatePrintMargin=function(){if(this.$showPrintMargin||this.$printMarginEl){if(!this.$printMarginEl){var e=o.createElement("div")
e.className="ace_layer ace_print-margin-layer",this.$printMarginEl=o.createElement("div"),this.$printMarginEl.className="ace_print-margin",e.appendChild(this.$printMarginEl),this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style
t.left=Math.round(this.characterWidth*this.$printMarginColumn+this.$padding)+"px",t.visibility=this.$showPrintMargin?"visible":"hidden",this.session&&-1==this.session.$wrap&&this.adjustWrapLimit()}},e.prototype.getContainerElement=function(){return this.container},e.prototype.getMouseEventTarget=function(){return this.scroller},e.prototype.getTextAreaContainer=function(){return this.container},e.prototype.$moveTextAreaToCursor=function(){if(!this.$isMousePressed){var e=this.textarea.style,t=this.$composition
if(this.$keepTextAreaAtCursor||t){var n=this.$cursorLayer.$pixelPos
if(n){t&&t.markerRange&&(n=this.$cursorLayer.getPixelPosition(t.markerRange.start,!0))
var i=this.layerConfig,r=n.top,s=n.left
r-=i.offset
var a=t&&t.useTextareaForIME||b.isMobile?this.lineHeight:1
if(r<0||r>i.height-a)o.translate(this.textarea,0,0)
else{var l=1,c=this.$size.height-a
if(t)if(t.useTextareaForIME){var h=this.textarea.value
l=this.characterWidth*this.session.$getStringScreenWidth(h)[0]}else r+=this.lineHeight+2
else r+=this.lineHeight;(s-=this.scrollLeft)>this.$size.scrollerWidth-l&&(s=this.$size.scrollerWidth-l),s+=this.gutterWidth+this.margin.left,o.setStyle(e,"height",a+"px"),o.setStyle(e,"width",l+"px"),o.translate(this.textarea,Math.min(s,this.$size.scrollerWidth-l),Math.min(r,c))}}}else o.translate(this.textarea,-100,0)}},e.prototype.getFirstVisibleRow=function(){return this.layerConfig.firstRow},e.prototype.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(0===this.layerConfig.offset?0:1)},e.prototype.getLastFullyVisibleRow=function(){var e=this.layerConfig,t=e.lastRow
return this.session.documentToScreenRow(t,0)*e.lineHeight-this.session.getScrollTop()>e.height-e.lineHeight?t-1:t},e.prototype.getLastVisibleRow=function(){return this.layerConfig.lastRow},e.prototype.setPadding=function(e){this.$padding=e,this.$textLayer.setPadding(e),this.$cursorLayer.setPadding(e),this.$markerFront.setPadding(e),this.$markerBack.setPadding(e),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},e.prototype.setScrollMargin=function(e,t,n,i){var o=this.scrollMargin
o.top=0|e,o.bottom=0|t,o.right=0|i,o.left=0|n,o.v=o.top+o.bottom,o.h=o.left+o.right,o.top&&this.scrollTop<=0&&this.session&&this.session.setScrollTop(-o.top),this.updateFull()},e.prototype.setMargin=function(e,t,n,i){var o=this.margin
o.top=0|e,o.bottom=0|t,o.right=0|i,o.left=0|n,o.v=o.top+o.bottom,o.h=o.left+o.right,this.$updateCachedSize(!0,this.gutterWidth,this.$size.width,this.$size.height),this.updateFull()},e.prototype.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible},e.prototype.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)},e.prototype.getVScrollBarAlwaysVisible=function(){return this.$vScrollBarAlwaysVisible},e.prototype.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e)},e.prototype.$updateScrollBarV=function(){var e=this.layerConfig.maxHeight,t=this.$size.scrollerHeight
!this.$maxLines&&this.$scrollPastEnd&&(e-=(t-this.lineHeight)*this.$scrollPastEnd,this.scrollTop>e-t&&(e=this.scrollTop+t,this.scrollBarV.scrollTop=null)),this.scrollBarV.setScrollHeight(e+this.scrollMargin.v),this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top)},e.prototype.$updateScrollBarH=function(){this.scrollBarH.setScrollWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h),this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left)},e.prototype.freeze=function(){this.$frozen=!0},e.prototype.unfreeze=function(){this.$frozen=!1},e.prototype.$renderChanges=function(e,t){if(this.$changes&&(e|=this.$changes,this.$changes=0),this.session&&this.container.offsetWidth&&!this.$frozen&&(e||t)){if(this.$size.$dirty)return this.$changes|=e,this.onResize(!0)
this.lineHeight||this.$textLayer.checkForSizeChanges(),this._signal("beforeRender",e),this.session&&this.session.$bidiHandler&&this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics)
var n=this.layerConfig
if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL){if(e|=this.$computeLayerConfig()|this.$loop.clear(),n.firstRow!=this.layerConfig.firstRow&&n.firstRowScreen==this.layerConfig.firstRowScreen){var i=this.scrollTop+(n.firstRow-Math.max(this.layerConfig.firstRow,0))*this.lineHeight
i>0&&(this.scrollTop=i,e|=this.CHANGE_SCROLL,e|=this.$computeLayerConfig()|this.$loop.clear())}n=this.layerConfig,this.$updateScrollBarV(),e&this.CHANGE_H_SCROLL&&this.$updateScrollBarH(),o.translate(this.content,-this.scrollLeft,-n.offset)
var r=n.width+2*this.$padding+"px",s=n.minHeight+"px"
o.setStyle(this.content.style,"width",r),o.setStyle(this.content.style,"height",s)}if(e&this.CHANGE_H_SCROLL&&(o.translate(this.content,-this.scrollLeft,-n.offset),this.scroller.className=this.scrollLeft<=0?"ace_scroller ":"ace_scroller ace_scroll-left ",this.enableKeyboardAccessibility&&(this.scroller.className+=this.keyboardFocusClassName)),e&this.CHANGE_FULL)return this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),void this._signal("afterRender",e)
if(e&this.CHANGE_SCROLL)return this.$changedLines=null,e&this.CHANGE_TEXT||e&this.CHANGE_LINES?this.$textLayer.update(n):this.$textLayer.scrollLines(n),this.$showGutter&&(e&this.CHANGE_GUTTER||e&this.CHANGE_LINES?this.$gutterLayer.update(n):this.$gutterLayer.scrollLines(n)),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n),this.$markerBack.update(n),this.$markerFront.update(n),this.$cursorLayer.update(n),this.$moveTextAreaToCursor(),void this._signal("afterRender",e)
e&this.CHANGE_TEXT?(this.$changedLines=null,this.$textLayer.update(n),this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_LINES?((this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER?(this.$showGutter&&this.$gutterLayer.update(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)):e&this.CHANGE_CURSOR&&(this.$highlightGutterLine&&this.$gutterLayer.updateLineHighlight(n),this.$customScrollbar&&this.$scrollDecorator.$updateDecorators(n)),e&this.CHANGE_CURSOR&&(this.$cursorLayer.update(n),this.$moveTextAreaToCursor()),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(n),e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(n),this._signal("afterRender",e)}else this.$changes|=e},e.prototype.$autosize=function(){var e=this.session.getScreenLength()*this.lineHeight,t=this.$maxLines*this.lineHeight,n=Math.min(t,Math.max((this.$minLines||1)*this.lineHeight,e))+this.scrollMargin.v+(this.$extraHeight||0)
this.$horizScroll&&(n+=this.scrollBarH.getHeight()),this.$maxPixelHeight&&n>this.$maxPixelHeight&&(n=this.$maxPixelHeight)
var i=!(n<=2*this.lineHeight)&&e>t
if(n!=this.desiredHeight||this.$size.height!=this.desiredHeight||i!=this.$vScroll){i!=this.$vScroll&&(this.$vScroll=i,this.scrollBarV.setVisible(i))
var o=this.container.clientWidth
this.container.style.height=n+"px",this.$updateCachedSize(!0,this.$gutterWidth,o,n),this.desiredHeight=n,this._signal("autosize")}},e.prototype.$computeLayerConfig=function(){var e=this.session,t=this.$size,n=t.height<=2*this.lineHeight,i=this.session.getScreenLength()*this.lineHeight,o=this.$getLongestLine(),r=!n&&(this.$hScrollBarAlwaysVisible||t.scrollerWidth-o-2*this.$padding<0),s=this.$horizScroll!==r
s&&(this.$horizScroll=r,this.scrollBarH.setVisible(r))
var a=this.$vScroll
this.$maxLines&&this.lineHeight>1&&this.$autosize()
var l=t.scrollerHeight+this.lineHeight,c=!this.$maxLines&&this.$scrollPastEnd?(t.scrollerHeight-this.lineHeight)*this.$scrollPastEnd:0
i+=c
var h=this.scrollMargin
this.session.setScrollTop(Math.max(-h.top,Math.min(this.scrollTop,i-t.scrollerHeight+h.bottom))),this.session.setScrollLeft(Math.max(-h.left,Math.min(this.scrollLeft,o+2*this.$padding-t.scrollerWidth+h.right)))
var u=!n&&(this.$vScrollBarAlwaysVisible||t.scrollerHeight-i+c<0||this.scrollTop>h.top),d=a!==u
d&&(this.$vScroll=u,this.scrollBarV.setVisible(u))
var g,p,f=this.scrollTop%this.lineHeight,m=Math.ceil(l/this.lineHeight)-1,v=Math.max(0,Math.round((this.scrollTop-f)/this.lineHeight)),w=v+m,y=this.lineHeight
v=e.screenToDocumentRow(v,0)
var b=e.getFoldLine(v)
b&&(v=b.start.row),g=e.documentToScreenRow(v,0),p=e.getRowLength(v)*y,w=Math.min(e.screenToDocumentRow(w,0),e.getLength()-1),l=t.scrollerHeight+e.getRowLength(w)*y+p,f=this.scrollTop-g*y
var $=0
return(this.layerConfig.width!=o||s)&&($=this.CHANGE_H_SCROLL),(s||d)&&($|=this.$updateCachedSize(!0,this.gutterWidth,t.width,t.height),this._signal("scrollbarVisibilityChanged"),d&&(o=this.$getLongestLine())),this.layerConfig={width:o,padding:this.$padding,firstRow:v,firstRowScreen:g,lastRow:w,lineHeight:y,characterWidth:this.characterWidth,minHeight:l,maxHeight:i,offset:f,gutterOffset:y?Math.max(0,Math.ceil((f+t.height-t.scrollerHeight)/y)):0,height:this.$size.scrollerHeight},this.session.$bidiHandler&&this.session.$bidiHandler.setContentWidth(o-this.$padding),$},e.prototype.$updateLines=function(){if(this.$changedLines){var e=this.$changedLines.firstRow,t=this.$changedLines.lastRow
this.$changedLines=null
var n=this.layerConfig
if(!(e>n.lastRow+1||t<n.firstRow))return t===1/0?(this.$showGutter&&this.$gutterLayer.update(n),void this.$textLayer.update(n)):(this.$textLayer.updateLines(n,e,t),!0)}},e.prototype.$getLongestLine=function(){var e=this.session.getScreenWidth()
return this.showInvisibles&&!this.session.$useWrapMode&&(e+=1),this.$textLayer&&e>this.$textLayer.MAX_LINE_LENGTH&&(e=this.$textLayer.MAX_LINE_LENGTH+30),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))},e.prototype.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},e.prototype.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},e.prototype.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)},e.prototype.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)},e.prototype.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)},e.prototype.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e),this.$loop.schedule(this.CHANGE_GUTTER)},e.prototype.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},e.prototype.hideCursor=function(){this.$cursorLayer.hideCursor()},e.prototype.showCursor=function(){this.$cursorLayer.showCursor()},e.prototype.scrollSelectionIntoView=function(e,t,n){this.scrollCursorIntoView(e,n),this.scrollCursorIntoView(t,n)},e.prototype.scrollCursorIntoView=function(e,t,n){if(0!==this.$size.scrollerHeight){var i=this.$cursorLayer.getPixelPosition(e),o=i.left,r=i.top,s=n&&n.top||0,a=n&&n.bottom||0
this.$scrollAnimation&&(this.$stopAnimation=!0)
var l=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop
l+s>r?(t&&l+s>r+this.lineHeight&&(r-=t*this.$size.scrollerHeight),0===r&&(r=-this.scrollMargin.top),this.session.setScrollTop(r)):l+this.$size.scrollerHeight-a<r+this.lineHeight&&(t&&l+this.$size.scrollerHeight-a<r-this.lineHeight&&(r+=t*this.$size.scrollerHeight),this.session.setScrollTop(r+this.lineHeight+a-this.$size.scrollerHeight))
var c=this.scrollLeft,h=2*this.layerConfig.characterWidth
o-h<c?((o-=h)<this.$padding+h&&(o=-this.scrollMargin.left),this.session.setScrollLeft(o)):(o+=h,c+this.$size.scrollerWidth<o+this.characterWidth?this.session.setScrollLeft(Math.round(o+this.characterWidth-this.$size.scrollerWidth)):c<=this.$padding&&o-c<this.characterWidth&&this.session.setScrollLeft(0))}},e.prototype.getScrollTop=function(){return this.session.getScrollTop()},e.prototype.getScrollLeft=function(){return this.session.getScrollLeft()},e.prototype.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},e.prototype.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},e.prototype.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)},e.prototype.alignCursor=function(e,t){"number"==typeof e&&(e={row:e,column:0})
var n=this.$cursorLayer.getPixelPosition(e),i=this.$size.scrollerHeight-this.lineHeight,o=n.top-i*(t||0)
return this.session.setScrollTop(o),o},e.prototype.$calcSteps=function(e,t){var n,i,o=0,r=this.STEPS,s=[]
for(o=0;o<r;++o)s.push((n=o/this.STEPS,i=e,(t-e)*(Math.pow(n-1,3)+1)+i))
return s},e.prototype.scrollToLine=function(e,t,n,i){var o=this.$cursorLayer.getPixelPosition({row:e,column:0}).top
t&&(o-=this.$size.scrollerHeight/2)
var r=this.scrollTop
this.session.setScrollTop(o),!1!==n&&this.animateScrolling(r,i)},e.prototype.animateScrolling=function(e,t){var n=this.scrollTop
if(this.$animatedScroll){var i=this
if(e!=n){if(this.$scrollAnimation){var o=this.$scrollAnimation.steps
if(o.length&&(e=o[0])==n)return}var r=i.$calcSteps(e,n)
this.$scrollAnimation={from:e,to:n,steps:r},clearInterval(this.$timer),i.session.setScrollTop(r.shift()),i.session.$scrollTop=n,this.$timer=setInterval((function(){if(!i.$stopAnimation)return i.session?void(r.length?(i.session.setScrollTop(r.shift()),i.session.$scrollTop=n):null!=n?(i.session.$scrollTop=-1,i.session.setScrollTop(n),n=null):s()):clearInterval(i.$timer)
s()}),10)}}function s(){i.$timer=clearInterval(i.$timer),i.$scrollAnimation=null,i.$stopAnimation=!1,t&&t()}},e.prototype.scrollToY=function(e){this.scrollTop!==e&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=e)},e.prototype.scrollToX=function(e){this.scrollLeft!==e&&(this.scrollLeft=e),this.$loop.schedule(this.CHANGE_H_SCROLL)},e.prototype.scrollTo=function(e,t){this.session.setScrollTop(t),this.session.setScrollLeft(e)},e.prototype.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t),e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)},e.prototype.isScrollableBy=function(e,t){return t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top||t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight<-1+this.scrollMargin.bottom||e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left||e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right||void 0},e.prototype.pixelToScreenCoordinates=function(e,t){var n
if(this.$hasCssTransforms){n={top:0,left:0}
var i=this.$fontMetrics.transformCoordinates([e,t])
e=i[1]-this.gutterWidth-this.margin.left,t=i[0]}else n=this.scroller.getBoundingClientRect()
var o=e+this.scrollLeft-n.left-this.$padding,r=o/this.characterWidth,s=Math.floor((t+this.scrollTop-n.top)/this.lineHeight),a=this.$blockCursor?Math.floor(r):Math.round(r)
return{row:s,column:a,side:r-a>0?1:-1,offsetX:o}},e.prototype.screenToTextCoordinates=function(e,t){var n
if(this.$hasCssTransforms){n={top:0,left:0}
var i=this.$fontMetrics.transformCoordinates([e,t])
e=i[1]-this.gutterWidth-this.margin.left,t=i[0]}else n=this.scroller.getBoundingClientRect()
var o=e+this.scrollLeft-n.left-this.$padding,r=o/this.characterWidth,s=this.$blockCursor?Math.floor(r):Math.round(r),a=Math.floor((t+this.scrollTop-n.top)/this.lineHeight)
return this.session.screenToDocumentPosition(a,Math.max(s,0),o)},e.prototype.textToScreenCoordinates=function(e,t){var n=this.scroller.getBoundingClientRect(),i=this.session.documentToScreenPosition(e,t),o=this.$padding+(this.session.$bidiHandler.isBidiRow(i.row,e)?this.session.$bidiHandler.getPosLeft(i.column):Math.round(i.column*this.characterWidth)),r=i.row*this.lineHeight
return{pageX:n.left+o-this.scrollLeft,pageY:n.top+r-this.scrollTop}},e.prototype.visualizeFocus=function(){o.addCssClass(this.container,"ace_focus")},e.prototype.visualizeBlur=function(){o.removeCssClass(this.container,"ace_focus")},e.prototype.showComposition=function(e){this.$composition=e,e.cssText||(e.cssText=this.textarea.style.cssText),null==e.useTextareaForIME&&(e.useTextareaForIME=this.$useTextareaForIME),this.$useTextareaForIME?(o.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor(),this.$cursorLayer.element.style.display="none"):e.markerId=this.session.addMarker(e.markerRange,"ace_composition_marker","text")},e.prototype.setCompositionText=function(e){var t=this.session.selection.cursor
this.addToken(e,"composition_placeholder",t.row,t.column),this.$moveTextAreaToCursor()},e.prototype.hideComposition=function(){if(this.$composition){this.$composition.markerId&&this.session.removeMarker(this.$composition.markerId),o.removeCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText=this.$composition.cssText
var e=this.session.selection.cursor
this.removeExtraToken(e.row,e.column),this.$composition=null,this.$cursorLayer.element.style.display=""}},e.prototype.setGhostText=function(e,t){var n=this.session.selection.cursor,i=t||{row:n.row,column:n.column}
this.removeGhostText()
var o=e.split("\n")
this.addToken(o[0],"ghost_text",i.row,i.column),this.$ghostText={text:e,position:{row:i.row,column:i.column}},o.length>1&&(this.$ghostTextWidget={text:o.slice(1).join("\n"),row:i.row,column:i.column,className:"ace_ghost_text"},this.session.widgetManager.addLineWidget(this.$ghostTextWidget))},e.prototype.removeGhostText=function(){if(this.$ghostText){var e=this.$ghostText.position
this.removeExtraToken(e.row,e.column),this.$ghostTextWidget&&(this.session.widgetManager.removeLineWidget(this.$ghostTextWidget),this.$ghostTextWidget=null),this.$ghostText=null}},e.prototype.addToken=function(e,t,n,i){var o=this.session
o.bgTokenizer.lines[n]=null
var r={type:t,value:e},s=o.getTokens(n)
if(null!=i&&s.length)for(var a=0,l=0;l<s.length;l++){var c=s[l]
if(i<=(a+=c.value.length)){var h=c.value.length-(a-i),u=c.value.slice(0,h),d=c.value.slice(h)
s.splice(l,1,{type:c.type,value:u},r,{type:c.type,value:d})
break}}else s.push(r)
this.updateLines(n,n)},e.prototype.removeExtraToken=function(e,t){this.session.bgTokenizer.lines[e]=null,this.updateLines(e,e)},e.prototype.setTheme=function(e,t){var n=this
if(this.$themeId=e,n._dispatchEvent("themeChange",{theme:e}),e&&"string"!=typeof e)r(e)
else{var i=e||this.$options.theme.initialValue
s.loadModule(["theme",i],r)}function r(i){if(n.$themeId!=e)return t&&t()
if(!i||!i.cssClass)throw new Error("couldn't load module "+e+" or it didn't call define")
i.$id&&(n.$themeId=i.$id),o.importCssString(i.cssText,i.cssClass,n.container),n.theme&&o.removeCssClass(n.container,n.theme.cssClass)
var r="padding"in i?i.padding:"padding"in(n.theme||{})?4:n.$padding
n.$padding&&r!=n.$padding&&n.setPadding(r),n.$theme=i.cssClass,n.theme=i,o.addCssClass(n.container,i.cssClass),o.setCssClass(n.container,"ace_dark",i.isDark),n.$size&&(n.$size.width=0,n.$updateSizeAsync()),n._dispatchEvent("themeLoaded",{theme:i}),t&&t()}},e.prototype.getTheme=function(){return this.$themeId},e.prototype.setStyle=function(e,t){o.setCssClass(this.container,e,!1!==t)},e.prototype.unsetStyle=function(e){o.removeCssClass(this.container,e)},e.prototype.setCursorStyle=function(e){o.setStyle(this.scroller.style,"cursor",e)},e.prototype.setMouseCursor=function(e){o.setStyle(this.scroller.style,"cursor",e)},e.prototype.attachToShadowRoot=function(){o.importCssString(w,"ace_editor.css",this.container)},e.prototype.destroy=function(){this.freeze(),this.$fontMetrics.destroy(),this.$cursorLayer.destroy(),this.removeAllListeners(),this.container.textContent="",this.setOption("useResizeObserver",!1)},e.prototype.$updateCustomScrollbar=function(e){var t=this
this.$horizScroll=this.$vScroll=null,this.scrollBarV.element.remove(),this.scrollBarH.element.remove(),this.$scrollDecorator&&delete this.$scrollDecorator,!0===e?(this.scrollBarV=new p(this.container,this),this.scrollBarH=new g(this.container,this),this.scrollBarV.setHeight(this.$size.scrollerHeight),this.scrollBarH.setWidth(this.$size.scrollerWidth),this.scrollBarV.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)})),this.scrollBarH.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)})),this.$scrollDecorator=new y(this.scrollBarV,this),this.$scrollDecorator.$updateDecorators()):(this.scrollBarV=new d(this.container,this),this.scrollBarH=new u(this.container,this),this.scrollBarV.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollTop(e.data-t.scrollMargin.top)})),this.scrollBarH.addEventListener("scroll",(function(e){t.$scrollAnimation||t.session.setScrollLeft(e.data-t.scrollMargin.left)})))},e.prototype.$addResizeObserver=function(){if(window.ResizeObserver&&!this.$resizeObserver){var e=this
this.$resizeTimer=r.delayedCall((function(){e.destroyed||e.onResize()}),50),this.$resizeObserver=new window.ResizeObserver((function(t){var n=t[0].contentRect.width,i=t[0].contentRect.height
Math.abs(e.$size.width-n)>1||Math.abs(e.$size.height-i)>1?e.$resizeTimer.delay():e.$resizeTimer.cancel()})),this.$resizeObserver.observe(this.container)}},e}()
$.prototype.CHANGE_CURSOR=1,$.prototype.CHANGE_MARKER=2,$.prototype.CHANGE_GUTTER=4,$.prototype.CHANGE_SCROLL=8,$.prototype.CHANGE_LINES=16,$.prototype.CHANGE_TEXT=32,$.prototype.CHANGE_SIZE=64,$.prototype.CHANGE_MARKER_BACK=128,$.prototype.CHANGE_MARKER_FRONT=256,$.prototype.CHANGE_FULL=512,$.prototype.CHANGE_H_SCROLL=1024,$.prototype.$changes=0,$.prototype.$padding=null,$.prototype.$frozen=!1,$.prototype.STEPS=8,i.implement($.prototype,v),s.defineOptions($.prototype,"renderer",{useResizeObserver:{set:function(e){!e&&this.$resizeObserver?(this.$resizeObserver.disconnect(),this.$resizeTimer.cancel(),this.$resizeTimer=this.$resizeObserver=null):e&&!this.$resizeObserver&&this.$addResizeObserver()}},animatedScroll:{initialValue:!1},showInvisibles:{set:function(e){this.$textLayer.setShowInvisibles(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!1},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:!0},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){"number"==typeof e&&(this.$printMarginColumn=e),this.$showPrintMargin=!!e,this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none",this.$loop.schedule(this.CHANGE_FULL),this.onGutterResize()},initialValue:!0},useSvgGutterIcons:{set:function(e){this.$gutterLayer.$useSvgGutterIcons=e},initialValue:!1},showFoldedAnnotations:{set:function(e){this.$gutterLayer.$showFoldedAnnotations=e},initialValue:!1},fadeFoldWidgets:{set:function(e){o.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:!1},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},displayIndentGuides:{set:function(e){this.$textLayer.setDisplayIndentGuides(e)&&this.$loop.schedule(this.CHANGE_TEXT)},initialValue:!0},highlightIndentGuides:{set:function(e){1==this.$textLayer.setHighlightIndentGuides(e)?this.$textLayer.$highlightIndentGuide():this.$textLayer.$clearActiveIndentGuide(this.$textLayer.$lines.cells)},initialValue:!0},highlightGutterLine:{set:function(e){this.$gutterLayer.setHighlightGutterLine(e),this.$loop.schedule(this.CHANGE_GUTTER)},initialValue:!0},hScrollBarAlwaysVisible:{set:function(e){this.$hScrollBarAlwaysVisible&&this.$horizScroll||this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},vScrollBarAlwaysVisible:{set:function(e){this.$vScrollBarAlwaysVisible&&this.$vScroll||this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:!1},fontSize:{set:function(e){"number"==typeof e&&(e+="px"),this.container.style.fontSize=e,this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e,this.updateFontSize()}},maxLines:{set:function(e){this.updateFull()}},minLines:{set:function(e){this.$minLines<562949953421311||(this.$minLines=0),this.updateFull()}},maxPixelHeight:{set:function(e){this.updateFull()},initialValue:0},scrollPastEnd:{set:function(e){e=+e||0,this.$scrollPastEnd!=e&&(this.$scrollPastEnd=e,this.$loop.schedule(this.CHANGE_SCROLL))},initialValue:0,handlesSet:!0},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e,this.$loop.schedule(this.CHANGE_GUTTER)}},customScrollbar:{set:function(e){this.$updateCustomScrollbar(e)},initialValue:!1},theme:{set:function(e){this.setTheme(e)},get:function(){return this.$themeId||this.theme},initialValue:"./theme/textmate",handlesSet:!0},hasCssTransforms:{},useTextareaForIME:{initialValue:!b.isMobile&&!b.isIE}}),t.VirtualRenderer=$})),ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/net","ace/lib/event_emitter","ace/config"],(function(e,t,n){"use strict"
var i=e("../lib/oop"),o=e("../lib/net"),r=e("../lib/event_emitter").EventEmitter,s=e("../config")
function a(e){if("undefined"==typeof Worker)return{postMessage:function(){},terminate:function(){}}
if(s.get("loadWorkerFromBlob")){var t=function(e){var t="importScripts('"+o.qualifyURL(e)+"');"
try{return new Blob([t],{type:"application/javascript"})}catch(e){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder)
return n.append(t),n.getBlob("application/javascript")}}(e),n=(window.URL||window.webkitURL).createObjectURL(t)
return new Worker(n)}return new Worker(e)}var l=function(e){e.postMessage||(e=this.$createWorkerFromOldConfig.apply(this,arguments)),this.$worker=e,this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this),this.changeListener=this.changeListener.bind(this),this.onMessage=this.onMessage.bind(this),this.callbackId=1,this.callbacks={},this.$worker.onmessage=this.onMessage};(function(){i.implement(this,r),this.$createWorkerFromOldConfig=function(t,n,i,o,r){if(e.nameToUrl&&!e.toUrl&&(e.toUrl=e.nameToUrl),s.get("packaged")||!e.toUrl)o=o||s.moduleUrl(n,"worker")
else{var l=this.$normalizePath
o=o||l(e.toUrl("ace/worker/worker.js",null,"_"))
var c={}
t.forEach((function(t){c[t]=l(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))}))}return this.$worker=a(o),r&&this.send("importScripts",r),this.$worker.postMessage({init:!0,tlns:c,module:n,classname:i}),this.$worker},this.onMessage=function(e){var t=e.data
switch(t.type){case"event":this._signal(t.name,{data:t.data})
break
case"call":var n=this.callbacks[t.id]
n&&(n(t.data),delete this.callbacks[t.id])
break
case"error":this.reportError(t.data)
break
case"log":window.console&&console.log&&console.log.apply(console,t.data)}},this.reportError=function(e){window.console&&console.error&&console.error(e)},this.$normalizePath=function(e){return o.qualifyURL(e)},this.terminate=function(){this._signal("terminate",{}),this.deltaQueue=null,this.$worker.terminate(),this.$worker.onerror=function(e){e.preventDefault()},this.$worker=null,this.$doc&&this.$doc.off("change",this.changeListener),this.$doc=null},this.send=function(e,t){this.$worker.postMessage({command:e,args:t})},this.call=function(e,t,n){if(n){var i=this.callbackId++
this.callbacks[i]=n,t.push(i)}this.send(e,t)},this.emit=function(e,t){try{t.data&&t.data.err&&(t.data.err={message:t.data.err.message,stack:t.data.err.stack,code:t.data.err.code}),this.$worker&&this.$worker.postMessage({event:e,data:{data:t.data}})}catch(e){console.error(e.stack)}},this.attachToDocument=function(e){this.$doc&&this.terminate(),this.$doc=e,this.call("setValue",[e.getValue()]),e.on("change",this.changeListener,!0)},this.changeListener=function(e){this.deltaQueue||(this.deltaQueue=[],setTimeout(this.$sendDeltaQueue,0)),"insert"==e.action?this.deltaQueue.push(e.start,e.lines):this.deltaQueue.push(e.start,e.end)},this.$sendDeltaQueue=function(){var e=this.deltaQueue
e&&(this.deltaQueue=null,e.length>50&&e.length>this.$doc.getLength()>>1?this.call("setValue",[this.$doc.getValue()]):this.emit("change",{data:e}))}}).call(l.prototype),t.UIWorkerClient=function(e,t,n){var i=null,o=!1,a=Object.create(r),c=[],h=new l({messageBuffer:c,terminate:function(){},postMessage:function(e){c.push(e),i&&(o?setTimeout(u):u())}})
h.setEmitSync=function(e){o=e}
var u=function(){var e=c.shift()
e.command?i[e.command].apply(i,e.args):e.event&&a._signal(e.event,e.data)}
return a.postMessage=function(e){h.onMessage({data:e})},a.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})},a.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})},s.loadModule(["worker",t],(function(e){for(i=new e[n](a);c.length;)u()})),h},t.WorkerClient=l,t.createWorker=a})),ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],(function(e,t,n){"use strict"
var i=e("./range").Range,o=e("./lib/event_emitter").EventEmitter,r=e("./lib/oop"),s=function(){function e(e,t,n,i,o,r){var s=this
this.length=t,this.session=e,this.doc=e.getDocument(),this.mainClass=o,this.othersClass=r,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate,!0),this.$others=i,this.$onCursorChange=function(){setTimeout((function(){s.onCursorChange()}))},this.$pos=n
var a=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1}
this.$undoStackDepth=a.length,this.setup(),e.selection.on("changeCursor",this.$onCursorChange)}return e.prototype.setup=function(){var e=this,t=this.doc,n=this.session
this.selectionBefore=n.selection.toJSON(),n.selection.inMultiSelectMode&&n.selection.toSingleRange(),this.pos=t.createAnchor(this.$pos.row,this.$pos.column)
var o=this.pos
o.$insertRight=!0,o.detach(),o.markerId=n.addMarker(new i(o.row,o.column,o.row,o.column+this.length),this.mainClass,null,!1),this.others=[],this.$others.forEach((function(n){var i=t.createAnchor(n.row,n.column)
i.$insertRight=!0,i.detach(),e.others.push(i)})),n.setUndoSelect(!1)},e.prototype.showOtherMarkers=function(){if(!this.othersActive){var e=this.session,t=this
this.othersActive=!0,this.others.forEach((function(n){n.markerId=e.addMarker(new i(n.row,n.column,n.row,n.column+t.length),t.othersClass,null,!1)}))}},e.prototype.hideOtherMarkers=function(){if(this.othersActive){this.othersActive=!1
for(var e=0;e<this.others.length;e++)this.session.removeMarker(this.others[e].markerId)}},e.prototype.onUpdate=function(e){if(this.$updating)return this.updateAnchors(e)
var t=e
if(t.start.row===t.end.row&&t.start.row===this.pos.row){this.$updating=!0
var n="insert"===e.action?t.end.column-t.start.column:t.start.column-t.end.column,o=t.start.column>=this.pos.column&&t.start.column<=this.pos.column+this.length+1,r=t.start.column-this.pos.column
if(this.updateAnchors(e),o&&(this.length+=n),o&&!this.session.$fromUndo)if("insert"===e.action)for(var s=this.others.length-1;s>=0;s--){var a={row:(l=this.others[s]).row,column:l.column+r}
this.doc.insertMergedLines(a,e.lines)}else if("remove"===e.action)for(s=this.others.length-1;s>=0;s--){var l
a={row:(l=this.others[s]).row,column:l.column+r},this.doc.remove(new i(a.row,a.column,a.row,a.column-n))}this.$updating=!1,this.updateMarkers()}},e.prototype.updateAnchors=function(e){this.pos.onChange(e)
for(var t=this.others.length;t--;)this.others[t].onChange(e)
this.updateMarkers()},e.prototype.updateMarkers=function(){if(!this.$updating){var e=this,t=this.session,n=function(n,o){t.removeMarker(n.markerId),n.markerId=t.addMarker(new i(n.row,n.column,n.row,n.column+e.length),o,null,!1)}
n(this.pos,this.mainClass)
for(var o=this.others.length;o--;)n(this.others[o],this.othersClass)}},e.prototype.onCursorChange=function(e){if(!this.$updating&&this.session){var t=this.session.selection.getCursor()
t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",e)):(this.hideOtherMarkers(),this._emit("cursorLeave",e))}},e.prototype.detach=function(){this.session.removeMarker(this.pos&&this.pos.markerId),this.hideOtherMarkers(),this.doc.off("change",this.$onUpdate),this.session.selection.off("changeCursor",this.$onCursorChange),this.session.setUndoSelect(!0),this.session=null},e.prototype.cancel=function(){if(-1!==this.$undoStackDepth){for(var e=this.session.getUndoManager(),t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth,n=0;n<t;n++)e.undo(this.session,!0)
this.selectionBefore&&this.session.selection.fromJSON(this.selectionBefore)}},e}()
r.implement(s.prototype,o),t.PlaceHolder=s})),ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event","ace/lib/useragent"],(function(e,t,n){var i=e("../lib/event"),o=e("../lib/useragent")
function r(e,t){return e.row==t.row&&e.column==t.column}t.onMouseDown=function(e){var t=e.domEvent,n=t.altKey,s=t.shiftKey,a=t.ctrlKey,l=e.getAccelKey(),c=e.getButton()
if(a&&o.isMac&&(c=t.button),e.editor.inMultiSelectMode&&2==c)e.editor.textInput.onContextMenu(e.domEvent)
else if(a||n||l){if(0===c){var h,u=e.editor,d=u.selection,g=u.inMultiSelectMode,p=e.getDocumentPosition(),f=d.getCursor(),m=e.inSelection()||d.isEmpty()&&r(p,f),v=e.x,w=e.y,y=u.session,b=u.renderer.pixelToScreenCoordinates(v,w),$=b
if(u.$mouseHandler.$enableJumpToDef)a&&n||l&&n?h=s?"block":"add":n&&u.$blockSelectEnabled&&(h="block")
else if(l&&!n){if(h="add",!g&&s)return}else n&&u.$blockSelectEnabled&&(h="block")
if(h&&o.isMac&&t.ctrlKey&&u.$mouseHandler.cancelContextMenu(),"add"==h){if(!g&&m)return
if(!g){var C=d.toOrientedRange()
u.addSelectionMarker(C)}var S=d.rangeList.rangeAtPoint(p)
u.inVirtualSelectionMode=!0,s&&(S=null,C=d.ranges[0]||C,u.removeSelectionMarker(C)),u.once("mouseup",(function(){var e=d.toOrientedRange()
S&&e.isEmpty()&&r(S.cursor,e.cursor)?d.substractPoint(e.cursor):(s?d.substractPoint(C.cursor):C&&(u.removeSelectionMarker(C),d.addRange(C)),d.addRange(e)),u.inVirtualSelectionMode=!1}))}else if("block"==h){var A
e.stop(),u.inVirtualSelectionMode=!0
var x=[],k=function(){var e=u.renderer.pixelToScreenCoordinates(v,w),t=y.screenToDocumentPosition(e.row,e.column,e.offsetX)
r($,e)&&r(t,d.lead)||($=e,u.selection.moveToPosition(t),u.renderer.scrollCursorIntoView(),u.removeSelectionMarkers(x),x=d.rectangularRangeBlock($,b),u.$mouseHandler.$clickSelection&&1==x.length&&x[0].isEmpty()&&(x[0]=u.$mouseHandler.$clickSelection.clone()),x.forEach(u.addSelectionMarker,u),u.updateSelectionMarkers())}
g&&!l?d.toSingleRange():!g&&l&&(A=d.toOrientedRange(),u.addSelectionMarker(A)),s?b=y.documentToScreenPosition(d.lead):d.moveToPosition(p),$={row:-1,column:-1}
var L=k
i.capture(u.container,(function(e){v=e.clientX,w=e.clientY}),(function(e){k(),clearInterval(M),u.removeSelectionMarkers(x),x.length||(x=[d.toOrientedRange()]),A&&(u.removeSelectionMarker(A),d.toSingleRange(A))
for(var t=0;t<x.length;t++)d.addRange(x[t])
u.inVirtualSelectionMode=!1,u.$mouseHandler.$clickSelection=null}))
var M=setInterval((function(){L()}),20)
return e.preventDefault()}}}else 0===c&&e.editor.inMultiSelectMode&&e.editor.exitMultiSelectMode()}})),ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],(function(e,t,n){t.defaultCommands=[{name:"addCursorAbove",description:"Add cursor above",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelow",description:"Add cursor below",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorAboveSkipCurrent",description:"Add cursor above (skip current)",exec:function(e){e.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},scrollIntoView:"cursor",readOnly:!0},{name:"addCursorBelowSkipCurrent",description:"Add cursor below (skip current)",exec:function(e){e.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreBefore",description:"Select more before",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectMoreAfter",description:"Select more after",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextBefore",description:"Select next before",exec:function(e){e.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},scrollIntoView:"cursor",readOnly:!0},{name:"selectNextAfter",description:"Select next after",exec:function(e){e.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},scrollIntoView:"cursor",readOnly:!0},{name:"toggleSplitSelectionIntoLines",description:"Split selection into lines",exec:function(e){e.multiSelect.rangeCount>1?e.multiSelect.joinSelections():e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readOnly:!0},{name:"splitSelectionIntoLines",description:"Split into lines",exec:function(e){e.multiSelect.splitIntoLines()},readOnly:!0},{name:"alignCursors",description:"Align cursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"},scrollIntoView:"cursor"},{name:"findAll",description:"Find all",exec:function(e){e.findAll()},bindKey:{win:"Ctrl-Alt-K",mac:"Ctrl-Alt-G"},scrollIntoView:"cursor",readOnly:!0}],t.multiSelectCommands=[{name:"singleSelection",description:"Single selection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},scrollIntoView:"cursor",readOnly:!0,isAvailable:function(e){return e&&e.inMultiSelectMode}}]
var i=e("../keyboard/hash_handler").HashHandler
t.keyboardHandler=new i(t.multiSelectCommands)})),ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],(function(e,t,n){var i=e("./range_list").RangeList,o=e("./range").Range,r=e("./selection").Selection,s=e("./mouse/multi_select_handler").onMouseDown,a=e("./lib/event"),l=e("./lib/lang"),c=e("./commands/multi_select_commands")
t.commands=c.defaultCommands.concat(c.multiSelectCommands)
var h=new(0,e("./search").Search),u=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(u.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(e,t){if(e){if(!this.inMultiSelectMode&&0===this.rangeCount){var n=this.toOrientedRange()
if(this.rangeList.add(n),this.rangeList.add(e),2!=this.rangeList.ranges.length)return this.rangeList.removeAll(),t||this.fromOrientedRange(e)
this.rangeList.removeAll(),this.rangeList.add(n),this.$onAddRange(n)}e.cursor||(e.cursor=e.end)
var i=this.rangeList.add(e)
return this.$onAddRange(e),i.length&&this.$onRemoveRange(i),this.rangeCount>1&&!this.inMultiSelectMode&&(this._signal("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),t||this.fromOrientedRange(e)}},this.toSingleRange=function(e){e=e||this.ranges[0]
var t=this.rangeList.removeAll()
t.length&&this.$onRemoveRange(t),e&&this.fromOrientedRange(e)},this.substractPoint=function(e){var t=this.rangeList.substractPoint(e)
if(t)return this.$onRemoveRange(t),t[0]},this.mergeOverlappingRanges=function(){var e=this.rangeList.merge()
e.length&&this.$onRemoveRange(e)},this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(e),this._signal("addRange",{range:e})},this.$onRemoveRange=function(e){if(this.rangeCount=this.rangeList.ranges.length,1==this.rangeCount&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop()
e.push(t),this.rangeCount=0}for(var n=e.length;n--;){var i=this.ranges.indexOf(e[n])
this.ranges.splice(i,1)}this._signal("removeRange",{ranges:e}),0===this.rangeCount&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._signal("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),(t=t||this.ranges[0])&&!t.isEqual(this.getRange())&&this.fromOrientedRange(t)},this.$initRangeList=function(){this.rangeList||(this.rangeList=new i,this.ranges=[],this.rangeCount=0)},this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]},this.splitIntoLines=function(){for(var e=this.ranges.length?this.ranges:[this.getRange()],t=[],n=0;n<e.length;n++){var i=e[n],r=i.start.row,s=i.end.row
if(r===s)t.push(i.clone())
else{for(t.push(new o(r,i.start.column,r,this.session.getLine(r).length));++r<s;)t.push(this.getLineRange(r,!0))
t.push(new o(s,0,s,i.end.column))}0!=n||this.isBackwards()||(t=t.reverse())}for(this.toSingleRange(),n=t.length;n--;)this.addRange(t[n])},this.joinSelections=function(){var e=this.rangeList.ranges,t=e[e.length-1],n=o.fromPoints(e[0].start,t.end)
this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)},this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges,t=e[e.length-1],n=o.fromPoints(e[0].start,t.end)
this.toSingleRange(),this.setSelectionRange(n,t.cursor==t.start)}else{var i=this.session.documentToScreenPosition(this.cursor),r=this.session.documentToScreenPosition(this.anchor)
this.rectangularRangeBlock(i,r).forEach(this.addRange,this)}},this.rectangularRangeBlock=function(e,t,n){var i=[],r=e.column<t.column
if(r)var s=e.column,a=t.column,l=e.offsetX,c=t.offsetX
else s=t.column,a=e.column,l=t.offsetX,c=e.offsetX
var h,u,d,g=e.row<t.row
if(g)var p=e.row,f=t.row
else p=t.row,f=e.row
s<0&&(s=0),p<0&&(p=0),p==f&&(n=!0)
for(var m=p;m<=f;m++){var v=o.fromPoints(this.session.screenToDocumentPosition(m,s,l),this.session.screenToDocumentPosition(m,a,c))
if(v.isEmpty()){if(h&&(d=h,(u=v.end).row==d.row&&u.column==d.column))break
h=v.end}v.cursor=r?v.start:v.end,i.push(v)}if(g&&i.reverse(),!n){for(var w=i.length-1;i[w].isEmpty()&&w>0;)w--
if(w>0)for(var y=0;i[y].isEmpty();)y++
for(var b=w;b>=y;b--)i[b].isEmpty()&&i.splice(b,1)}return i}}.call(r.prototype)
var d=e("./editor").Editor
function g(e){e.$multiselectOnSessionChange||(e.$onAddRange=e.$onAddRange.bind(e),e.$onRemoveRange=e.$onRemoveRange.bind(e),e.$onMultiSelect=e.$onMultiSelect.bind(e),e.$onSingleSelect=e.$onSingleSelect.bind(e),e.$multiselectOnSessionChange=t.onSessionChange.bind(e),e.$checkMultiselectChange=e.$checkMultiselectChange.bind(e),e.$multiselectOnSessionChange(e),e.on("changeSession",e.$multiselectOnSessionChange),e.on("mousedown",s),e.commands.addCommands(c.defaultCommands),function(e){if(e.textInput){var t=e.textInput.getElement(),n=!1
a.addListener(t,"keydown",(function(t){var o=18==t.keyCode&&!(t.ctrlKey||t.shiftKey||t.metaKey)
e.$blockSelectEnabled&&o?n||(e.renderer.setMouseCursor("crosshair"),n=!0):n&&i()}),e),a.addListener(t,"keyup",i,e),a.addListener(t,"blur",i,e)}function i(t){n&&(e.renderer.setMouseCursor(""),n=!1)}}(e))}(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(e){e.cursor||(e.cursor=e.end)
var t=this.getSelectionStyle()
return e.marker=this.session.addMarker(e,"ace_selection",t),this.session.$selectionMarkers.push(e),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,e},this.removeSelectionMarker=function(e){if(e.marker){this.session.removeMarker(e.marker)
var t=this.session.$selectionMarkers.indexOf(e);-1!=t&&this.session.$selectionMarkers.splice(t,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length}},this.removeSelectionMarkers=function(e){for(var t=this.session.$selectionMarkers,n=e.length;n--;){var i=e[n]
if(i.marker){this.session.removeMarker(i.marker)
var o=t.indexOf(i);-1!=o&&t.splice(o,1)}}this.session.selectionMarkerCount=t.length},this.$onAddRange=function(e){this.addSelectionMarker(e.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(e){this.inMultiSelectMode||(this.inMultiSelectMode=!0,this.setStyle("ace_multiselect"),this.keyBinding.addKeyboardHandler(c.keyboardHandler),this.commands.setDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers())},this.$onSingleSelect=function(e){this.session.multiSelect.inVirtualMode||(this.inMultiSelectMode=!1,this.unsetStyle("ace_multiselect"),this.keyBinding.removeKeyboardHandler(c.keyboardHandler),this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers(),this._emit("changeSelection"))},this.$onMultiSelectExec=function(e){var t=e.command,n=e.editor
if(n.multiSelect){if(t.multiSelectAction)"forEach"==t.multiSelectAction?i=n.forEachSelection(t,e.args):"forEachLine"==t.multiSelectAction?i=n.forEachSelection(t,e.args,!0):"single"==t.multiSelectAction?(n.exitMultiSelectMode(),i=t.exec(n,e.args||{})):i=t.multiSelectAction(n,e.args||{})
else{var i=t.exec(n,e.args||{})
n.multiSelect.addRange(n.multiSelect.toOrientedRange()),n.multiSelect.mergeOverlappingRanges()}return i}},this.forEachSelection=function(e,t,n){if(!this.inVirtualSelectionMode){var i,o=n&&n.keepOrder,s=1==n||n&&n.$byLines,a=this.session,l=this.selection,c=l.rangeList,h=(o?l:c).ranges
if(!h.length)return e.exec?e.exec(this,t||{}):e(this,t||{})
var u=l._eventRegistry
l._eventRegistry={}
var d=new r(a)
this.inVirtualSelectionMode=!0
for(var g=h.length;g--;){if(s)for(;g>0&&h[g].start.row==h[g-1].end.row;)g--
d.fromOrientedRange(h[g]),d.index=g,this.selection=a.selection=d
var p=e.exec?e.exec(this,t||{}):e(this,t||{})
i||void 0===p||(i=p),d.toOrientedRange(h[g])}d.detach(),this.selection=a.selection=l,this.inVirtualSelectionMode=!1,l._eventRegistry=u,l.mergeOverlappingRanges(),l.ranges[0]&&l.fromOrientedRange(l.ranges[0])
var f=this.renderer.$scrollAnimation
return this.onCursorChange(),this.onSelectionChange(),f&&f.from==f.to&&this.renderer.animateScrolling(f.from),i}},this.exitMultiSelectMode=function(){this.inMultiSelectMode&&!this.inVirtualSelectionMode&&this.multiSelect.toSingleRange()},this.getSelectedText=function(){var e=""
if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){for(var t=this.multiSelect.rangeList.ranges,n=[],i=0;i<t.length;i++)n.push(this.session.getTextRange(t[i]))
var o=this.session.getDocument().getNewLineCharacter();(e=n.join(o)).length==(n.length-1)*o.length&&(e="")}else this.selection.isEmpty()||(e=this.session.getTextRange(this.getSelectionRange()))
return e},this.$checkMultiselectChange=function(e,t){if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var n=this.multiSelect.ranges[0]
if(this.multiSelect.isEmpty()&&t==this.multiSelect.anchor)return
var i=t==this.multiSelect.anchor?n.cursor==n.start?n.end:n.start:n.cursor
i.row!=t.row||this.session.$clipPositionToDocument(i.row,i.column).column!=t.column?this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()):this.multiSelect.mergeOverlappingRanges()}},this.findAll=function(e,t,n){if((t=t||{}).needle=e||t.needle,null==t.needle){var i=this.selection.isEmpty()?this.selection.getWordRange():this.selection.getRange()
t.needle=this.session.getTextRange(i)}this.$search.set(t)
var o=this.$search.findAll(this.session)
if(!o.length)return 0
var r=this.multiSelect
n||r.toSingleRange(o[0])
for(var s=o.length;s--;)r.addRange(o[s],!0)
return i&&r.rangeList.rangeAtPoint(i.start)&&r.addRange(i,!0),o.length},this.selectMoreLines=function(e,t){var n=this.selection.toOrientedRange(),i=n.cursor==n.end,r=this.session.documentToScreenPosition(n.cursor)
this.selection.$desiredColumn&&(r.column=this.selection.$desiredColumn)
var s,a=this.session.screenToDocumentPosition(r.row+e,r.column)
if(n.isEmpty())c=a
else var l=this.session.documentToScreenPosition(i?n.end:n.start),c=this.session.screenToDocumentPosition(l.row+e,l.column)
if(i?(s=o.fromPoints(a,c)).cursor=s.start:(s=o.fromPoints(c,a)).cursor=s.end,s.desiredColumn=r.column,this.selection.inMultiSelectMode){if(t)var h=n.cursor}else this.selection.addRange(n)
this.selection.addRange(s),h&&this.selection.substractPoint(h)},this.transposeSelections=function(e){for(var t=this.session,n=t.multiSelect,i=n.ranges,o=i.length;o--;)if((a=i[o]).isEmpty()){var r=t.getWordRange(a.start.row,a.start.column)
a.start.row=r.start.row,a.start.column=r.start.column,a.end.row=r.end.row,a.end.column=r.end.column}n.mergeOverlappingRanges()
var s=[]
for(o=i.length;o--;){var a=i[o]
s.unshift(t.getTextRange(a))}for(e<0?s.unshift(s.pop()):s.push(s.shift()),o=i.length;o--;)r=(a=i[o]).clone(),t.replace(a,s[o]),a.start.row=r.start.row,a.start.column=r.start.column
n.fromOrientedRange(n.ranges[0])},this.selectMore=function(e,t,n){var i=this.session,o=i.multiSelect.toOrientedRange()
if(!o.isEmpty()||((o=i.getWordRange(o.start.row,o.start.column)).cursor=-1==e?o.start:o.end,this.multiSelect.addRange(o),!n)){var r=i.getTextRange(o),s=function(e,t,n){return h.$options.wrap=!0,h.$options.needle=t,h.$options.backwards=-1==n,h.find(e)}(i,r,e)
s&&(s.cursor=-1==e?s.start:s.end,this.session.unfold(s),this.multiSelect.addRange(s),this.renderer.scrollCursorIntoView(null,.5)),t&&this.multiSelect.substractPoint(o.cursor)}},this.alignCursors=function(){var e=this.session,t=e.multiSelect,n=t.ranges,i=-1,r=n.filter((function(e){if(e.cursor.row==i)return!0
i=e.cursor.row}))
if(n.length&&r.length!=n.length-1){r.forEach((function(e){t.substractPoint(e.cursor)}))
var s=0,a=1/0,c=n.map((function(t){var n=t.cursor,i=e.getLine(n.row).substr(n.column).search(/\S/g)
return-1==i&&(i=0),n.column>s&&(s=n.column),i<a&&(a=i),i}))
n.forEach((function(t,n){var i=t.cursor,r=s-i.column,h=c[n]-a
r>h?e.insert(i,l.stringRepeat(" ",r-h)):e.remove(new o(i.row,i.column,i.row,i.column-r+h)),t.start.column=t.end.column=s,t.start.row=t.end.row=i.row,t.cursor=t.end})),t.fromOrientedRange(n[0]),this.renderer.updateCursor(),this.renderer.updateBackMarkers()}else{var h=this.selection.getRange(),u=h.start.row,d=h.end.row,g=u==d
if(g){var p,f=this.session.getLength()
do{p=this.session.getLine(d)}while(/[=:]/.test(p)&&++d<f)
do{p=this.session.getLine(u)}while(/[=:]/.test(p)&&--u>0)
u<0&&(u=0),d>=f&&(d=f-1)}var m=this.session.removeFullLines(u,d)
m=this.$reAlignText(m,g),this.session.insert({row:u,column:0},m.join("\n")+"\n"),g||(h.start.column=0,h.end.column=m[m.length-1].length),this.selection.setRange(h)}},this.$reAlignText=function(e,t){var n,i,o,r=!0,s=!0
return e.map((function(e){var t=e.match(/(\s*)(.*?)(\s*)([=:].*)/)
return t?null==n?(n=t[1].length,i=t[2].length,o=t[3].length,t):(n+i+o!=t[1].length+t[2].length+t[3].length&&(s=!1),n!=t[1].length&&(r=!1),n>t[1].length&&(n=t[1].length),i<t[2].length&&(i=t[2].length),o>t[3].length&&(o=t[3].length),t):[e]})).map(t?c:r?s?function(e){return e[2]?a(n+i-e[2].length)+e[2]+a(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}:c:function(e){return e[2]?a(n)+e[2]+a(o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]})
function a(e){return l.stringRepeat(" ",e)}function c(e){return e[2]?a(n)+e[2]+a(i-e[2].length+o)+e[4].replace(/^([=:])\s+/,"$1 "):e[0]}}}).call(d.prototype),t.onSessionChange=function(e){var t=e.session
t&&!t.multiSelect&&(t.$selectionMarkers=[],t.selection.$initRangeList(),t.multiSelect=t.selection),this.multiSelect=t&&t.multiSelect
var n=e.oldSession
n&&(n.multiSelect.off("addRange",this.$onAddRange),n.multiSelect.off("removeRange",this.$onRemoveRange),n.multiSelect.off("multiSelect",this.$onMultiSelect),n.multiSelect.off("singleSelect",this.$onSingleSelect),n.multiSelect.lead.off("change",this.$checkMultiselectChange),n.multiSelect.anchor.off("change",this.$checkMultiselectChange)),t&&(t.multiSelect.on("addRange",this.$onAddRange),t.multiSelect.on("removeRange",this.$onRemoveRange),t.multiSelect.on("multiSelect",this.$onMultiSelect),t.multiSelect.on("singleSelect",this.$onSingleSelect),t.multiSelect.lead.on("change",this.$checkMultiselectChange),t.multiSelect.anchor.on("change",this.$checkMultiselectChange)),t&&this.inMultiSelectMode!=t.selection.inMultiSelectMode&&(t.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},t.MultiSelect=g,e("./config").defineOptions(d.prototype,"editor",{enableMultiselect:{set:function(e){g(this),e?this.on("mousedown",s):this.off("mousedown",s)},value:!0},enableBlockSelect:{set:function(e){this.$blockSelectEnabled=e},value:!0}})})),ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=e("../../range").Range,o=t.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var i=e.getLine(n)
return this.foldingStartMarker.test(i)?"start":"markbeginend"==t&&this.foldingStopMarker&&this.foldingStopMarker.test(i)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,t,n){var o=/\S/,r=e.getLine(t),s=r.search(o)
if(-1!=s){for(var a=n||r.length,l=e.getLength(),c=t,h=t;++t<l;){var u=e.getLine(t).search(o)
if(-1!=u){if(u<=s){var d=e.getTokenAt(t,0)
if(!d||"string"!==d.type)break}h=t}}if(h>c){var g=e.getLine(h).length
return new i(c,a,h,g)}}},this.openingBracketBlock=function(e,t,n,o,r){var s={row:n,column:o+1},a=e.$findClosingBracket(t,s,r)
if(a){var l=e.foldWidgets[a.row]
return null==l&&(l=e.getFoldWidget(a.row)),"start"==l&&a.row>s.row&&(a.row--,a.column=e.getLine(a.row).length),i.fromPoints(s,a)}},this.closingBracketBlock=function(e,t,n,o,r){var s={row:n,column:o},a=e.$findOpeningBracket(t,s)
if(a)return a.column++,s.column--,i.fromPoints(a,s)}}).call(o.prototype)})),ace.define("ace/ext/error_marker",["require","exports","module","ace/line_widgets","ace/lib/dom","ace/range","ace/config"],(function(e,t,n){"use strict"
var i=e("../line_widgets").LineWidgets,o=e("../lib/dom"),r=e("../range").Range,s=e("../config").nls
t.showErrorMarker=function(e,t){var n=e.session
n.widgetManager||(n.widgetManager=new i(n),n.widgetManager.attach(e))
var a=e.getCursorPosition(),l=a.row,c=n.widgetManager.getWidgetsAtRow(l).filter((function(e){return"errorMarker"==e.type}))[0]
c?c.destroy():l-=t
var h,u=function(e,t,n){var i=e.getAnnotations().sort(r.comparePoints)
if(i.length){var o=function(e,t,n){for(var i=0,o=e.length-1;i<=o;){var r=i+o>>1,s=n(t,e[r])
if(s>0)i=r+1
else{if(!(s<0))return r
o=r-1}}return-(i+1)}(i,{row:t,column:-1},r.comparePoints)
o<0&&(o=-o-1),o>=i.length?o=n>0?0:i.length-1:0===o&&n<0&&(o=i.length-1)
var s=i[o]
if(s&&n){if(s.row===t){do{s=i[o+=n]}while(s&&s.row===t)
if(!s)return i.slice()}var a=[]
t=s.row
do{a[n<0?"unshift":"push"](s),s=i[o+=n]}while(s&&s.row==t)
return a.length&&a}}}(n,l,t)
if(u){var d=u[0]
a.column=(d.pos&&"number"!=typeof d.column?d.pos.sc:d.column)||0,a.row=d.row,h=e.renderer.$gutterLayer.$annotations[a.row]}else{if(c)return
h={text:[s("Looks good!")],className:"ace_ok"}}e.session.unfold(a.row),e.selection.moveToPosition(a)
var g={row:a.row,fixedWidth:!0,coverGutter:!0,el:o.createElement("div"),type:"errorMarker"},p=g.el.appendChild(o.createElement("div")),f=g.el.appendChild(o.createElement("div"))
f.className="error_widget_arrow "+h.className
var m=e.renderer.$cursorLayer.getPixelPosition(a).left
f.style.left=m+e.renderer.gutterWidth-5+"px",g.el.className="error_widget_wrapper",p.className="error_widget "+h.className,p.innerHTML=h.text.join("<br>"),p.appendChild(o.createElement("div"))
var v=function(e,t,n){if(0===t&&("esc"===n||"return"===n))return g.destroy(),{command:"null"}}
g.destroy=function(){e.$mouseHandler.isMousePressed||(e.keyBinding.removeKeyboardHandler(v),n.widgetManager.removeLineWidget(g),e.off("changeSelection",g.destroy),e.off("changeSession",g.destroy),e.off("mouseup",g.destroy),e.off("change",g.destroy))},e.keyBinding.addKeyboardHandler(v),e.on("changeSelection",g.destroy),e.on("changeSession",g.destroy),e.on("mouseup",g.destroy),e.on("change",g.destroy),e.session.widgetManager.addLineWidget(g),g.el.onmousedown=e.focus.bind(e),e.renderer.scrollCursorIntoView(null,.5,{bottom:g.el.offsetHeight})},o.importCssString("\n    .error_widget_wrapper {\n        background: inherit;\n        color: inherit;\n        border:none\n    }\n    .error_widget {\n        border-top: solid 2px;\n        border-bottom: solid 2px;\n        margin: 5px 0;\n        padding: 10px 40px;\n        white-space: pre-wrap;\n    }\n    .error_widget.ace_error, .error_widget_arrow.ace_error{\n        border-color: #ff5a5a\n    }\n    .error_widget.ace_warning, .error_widget_arrow.ace_warning{\n        border-color: #F1D817\n    }\n    .error_widget.ace_info, .error_widget_arrow.ace_info{\n        border-color: #5a5a5a\n    }\n    .error_widget.ace_ok, .error_widget_arrow.ace_ok{\n        border-color: #5aaa5a\n    }\n    .error_widget_arrow {\n        position: absolute;\n        border: solid 5px;\n        border-top-color: transparent!important;\n        border-right-color: transparent!important;\n        border-left-color: transparent!important;\n        top: -5px;\n    }\n","error_marker.css",!1)})),ace.define("ace/ace",["require","exports","module","ace/lib/dom","ace/range","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/multi_select","ace/mode/folding/fold_mode","ace/theme/textmate","ace/ext/error_marker","ace/config","ace/loader_build"],(function(e,t,n){"use strict"
e("./loader_build")(t)
var i=e("./lib/dom"),o=e("./range").Range,r=e("./editor").Editor,s=e("./edit_session").EditSession,a=e("./undomanager").UndoManager,l=e("./virtual_renderer").VirtualRenderer
e("./worker/worker_client"),e("./keyboard/hash_handler"),e("./placeholder"),e("./multi_select"),e("./mode/folding/fold_mode"),e("./theme/textmate"),e("./ext/error_marker"),t.config=e("./config"),t.edit=function(e,n){if("string"==typeof e){var o=e
if(!(e=document.getElementById(o)))throw new Error("ace.edit can't find div #"+o)}if(e&&e.env&&e.env.editor instanceof r)return e.env.editor
var s=""
if(e&&/input|textarea/i.test(e.tagName)){var a=e
s=a.value,e=i.createElement("pre"),a.parentNode.replaceChild(e,a)}else e&&(s=e.textContent,e.innerHTML="")
var c=t.createEditSession(s),h=new r(new l(e),c,n),u={document:c,editor:h,onResize:h.resize.bind(h,null)}
return a&&(u.textarea=a),h.on("destroy",(function(){u.editor.container.env=null})),h.container.env=h.env=u,h},t.createEditSession=function(e,t){var n=new s(e,t)
return n.setUndoManager(new a),n},t.Range=o,t.Editor=r,t.EditSession=s,t.UndoManager=a,t.VirtualRenderer=l,t.version=t.config.version})),ace.require(["ace/ace"],(function(t){for(var n in t&&(t.config.init(!0),t.define=ace.define),window.ace||(window.ace=t),t)t.hasOwnProperty(n)&&(window.ace[n]=t[n])
window.ace.default=window.ace,e&&(e.exports=window.ace)}))},624:(e,t,n)=>{e=n.nmd(e),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict"
var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}}
i.inherits(r,o),t.JsonHighlightRules=r})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict"
var i=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/)
if(!n)return 0
var o=n[1].length,r=e.findMatchingBracket({row:t,column:o})
if(!r||r.row==t)return 0
var s=this.$getIndent(e.getLine(r.row))
e.replace(new i(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict"
var i=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))}
i.inherits(s,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var i=e.getLine(n)
if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return""
var o=this._getFoldWidgetBase(e,t,n)
return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(e,t,n,i){var o,r=e.getLine(n)
if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n)
if(o=r.match(this.foldingStartMarker)){var s=o.index
if(o[1])return this.openingBracketBlock(e,o[1],n,s)
var a=e.getCommentFoldRange(n,s+o[0].length,1)
return a&&!a.isMultiLine()&&(i?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}return"markbegin"!==t&&(o=r.match(this.foldingStopMarker))?(s=o.index+o[0].length,o[1]?this.closingBracketBlock(e,o[1],n,s):e.getCommentFoldRange(n,s,-1)):void 0},this.getSectionRange=function(e,t){for(var n=e.getLine(t),i=n.search(/\S/),r=t,s=n.length,a=t+=1,l=e.getLength();++t<l;){var c=(n=e.getLine(t)).search(/\S/)
if(-1!==c){if(i>c)break
var h=this.getFoldWidgetRange(e,"all",t)
if(h){if(h.start.row<=r)break
if(h.isMultiLine())t=h.end.row
else if(i==c)break}a=t}}return new o(r,s,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,n){for(var i=t.search(/\s*$/),r=e.getLength(),s=n,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<r;){t=e.getLine(n)
var c=a.exec(t)
if(c&&(c[1]?l--:l++,!l))break}if(n>s)return new o(s,i,n,t.length)}}.call(s.prototype)})),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],(function(e,t,n){"use strict"
var i=e("../lib/oop"),o=e("./text").Mode,r=e("./json_highlight_rules").JsonHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,a=e("./folding/cstyle").FoldMode,l=e("../worker/worker_client").WorkerClient,c=function(){this.HighlightRules=r,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new a}
i.inherits(c,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var i=this.$getIndent(t)
return"start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(i+=n),i},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new l(["ace"],"ace/mode/json_worker","JsonWorker")
return t.attachToDocument(e.getDocument()),t.on("annotate",(function(t){e.setAnnotations(t.data)})),t.on("terminate",(function(){e.clearAnnotations()})),t},this.$id="ace/mode/json"}.call(c.prototype),t.Mode=c})),ace.require(["ace/mode/json"],(function(t){e&&(e.exports=t)}))},743:(e,t,n)=>{e=n.nmd(e),ace.define("ace/theme/chrome-css",["require","exports","module"],(function(e,t,n){n.exports='.ace-chrome .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n  overflow : hidden;\n}\n\n.ace-chrome .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-chrome {\n  background-color: #FFFFFF;\n  color: black;\n}\n\n.ace-chrome .ace_cursor {\n  color: black;\n}\n\n.ace-chrome .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-chrome .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-chrome .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-chrome .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-chrome .ace_invalid {\n  background-color: rgb(153, 0, 0);\n  color: white;\n}\n\n.ace-chrome .ace_fold {\n}\n\n.ace-chrome .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-chrome .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-chrome .ace_support.ace_type,\n.ace-chrome .ace_support.ace_class\n.ace-chrome .ace_support.ace_other {\n  color: rgb(109, 121, 222);\n}\n\n.ace-chrome .ace_variable.ace_parameter {\n  font-style:italic;\n  color:#FD971F;\n}\n.ace-chrome .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-chrome .ace_comment {\n  color: #236e24;\n}\n\n.ace-chrome .ace_comment.ace_doc {\n  color: #236e24;\n}\n\n.ace-chrome .ace_comment.ace_doc.ace_tag {\n  color: #236e24;\n}\n\n.ace-chrome .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-chrome .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-chrome .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-chrome .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n\n.ace-chrome .ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-chrome .ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-chrome .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-chrome .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-chrome .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-chrome .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-chrome .ace_marker-layer .ace_active-line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-chrome .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-chrome .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-chrome .ace_storage,\n.ace-chrome .ace_keyword,\n.ace-chrome .ace_meta.ace_tag {\n  color: rgb(147, 15, 128);\n}\n\n.ace-chrome .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-chrome .ace_string {\n  color: #1A1AA6;\n}\n\n.ace-chrome .ace_entity.ace_other.ace_attribute-name {\n  color: #994409;\n}\n\n.ace-chrome .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n  \n.ace-chrome .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n'})),ace.define("ace/theme/chrome",["require","exports","module","ace/theme/chrome-css","ace/lib/dom"],(function(e,t,n){t.isDark=!1,t.cssClass="ace-chrome",t.cssText=e("./chrome-css"),e("../lib/dom").importCssString(t.cssText,t.cssClass,!1)})),ace.require(["ace/theme/chrome"],(function(t){e&&(e.exports=t)}))},375:(e,t,n)=>{"use strict"
n.d(t,{RF:()=>h,jR:()=>k,lC:()=>$,fc:()=>C,vs:()=>x})
const i=function(){function e(e){this.parent=e||null,this.storage=Object.create(e&&e.storage||null)}return e.prototype.bind=function(e,t){return e in this.storage?this.storage[e]===t:(this.storage[e]=t,!0)},e.prototype.expose=function(){return Object.create(this.storage)},e.prototype.createProvisionalContext=function(){return new e(this)},e.prototype.commit=function(){var e=this
if(!this.parent)throw new Error("Internal error: unable to apply provisional values from a context with no parent")
Object.keys(this.storage).forEach((function(t){e.parent.storage[t]=e.storage[t]}))},e}()
function o(e){return Array.isArray(e)}function r(e){if(!e||"object"!=typeof e)return!1
var t=Object.getPrototypeOf(e)
return null===t||t===Object.prototype}function s(e){return"function"==typeof e}var a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var i,o,r=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s},c=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]))
return e}
function h(e,t){var n,i
if("string"==typeof e||!e&&!t)return function(e){var t,n=Object.create([(t={},t[d]=e,t)])
return n[u]=e,n}(e)
if(o(e)&&t)return c(e,[(n={},n[d]=t,n)])
if(r(e)&&t)return a({},e,((i={})[u]=t,i))
throw new Error("Invalid target for rest()")}var u="__botanist-object-rest",d="__botanist-array-rest"
function g(e){return o(e)?function(e){var t=function(e){var t=e,n=null,i=t[e.length-1]
return r(i)&&d in i&&(t=t.slice(0,-1),n=i),{items:t,restSigil:n}}(e),n=t.items,i=t.restSigil,s=n.map((function(e){return g(e)}))
return function(e,t){if(!o(e))return!1
var n=i?e.slice(0,s.length):e
return p(t,s,n)?!i||!i[d]||t.bind(i[d],e.slice(s.length)):void 0}}(e):r(e)?function(e){var t=Object.keys(e).filter((function(e){return e!==u})).sort().map((function(t){return g(e[t])}))
return function(n,i){if(!n||"object"!=typeof n)return!1
var o=Object.keys(n),r=o.filter((function(t){return t in e})).sort()
if(o.length!==r.length&&!(u in e))return!1
if(p(i,t,r.map((function(e){return n[e]})))){var s=e[u]
return!s||i.bind(s,function(e,t,n){return n.reduce((function(n,i){return i in e||(n[i]=t[i]),n}),{})}(e,n,o))}}}(e):s(e)?e:function(t){return t===e}}function p(e,t,n){if(t.length!==n.length)return!1
for(var i=e.createProvisionalContext(),o=0,r=t.length;o<r;o++)if(!t[o](n[o],i))return!1
return i.commit(),!0}var f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var i,o,r=n.call(e),s=[]
try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(e){o={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]))
return e}
function v(e,t,n){if(r(e)){var i=Object.getPrototypeOf(e)?{}:Object.create(null)
return Object.keys(e).forEach((function(o){i[o]=v(e[o],t,n)})),b(i,t,n)}return o(e)?b(e.map((function(e){return v(e,t,n)})),t,n):e}function w(e){var t=function(e){return e[y]?e[y].map((function(t){var n=t.match,i=t.transformKey
return{match:n,transform:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return e[i].apply(e,m(t))}}})):o(e)?e:void 0}(e)
if(!o(t))return[e]
for(var n=[],i=0,r=t.length;i<r;i++)n.push.apply(n,m(w(t[i])))
return n}var y="__botanist-rules"
function b(e,t,n){for(var o=new i,r=0,s=t.length;r<s;r++){var a=t[r]
if(a.match(e,o))return a.transform.call(null,o.expose(),n,e)}return e}function $(e){return A(e,(function(e){return o(t=e)||r(t)||s(t)?S:e
var t}))}function C(e){return A(e,(function(e){return e}))}var S=Object.freeze({})
function A(e,t){return function(n,i){var o=t(n)
if(o!==S)return!e||i.bind(e,o)}}function x(e){var t=w(e)
return function(e,n){return v(e,t,n)}}function k(e,t){return t?function(e,t){return{match:g(e),transform:t}}(e,t):function(t,n,i){return function(e,t,n){y in e||(e[y]=[])
var i=g(n)
e[y].push({match:i,transformKey:t})}(t,n,e),i}}},107:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{TemplateTag:()=>l,codeBlock:()=>C,commaLists:()=>y,commaListsAnd:()=>b,commaListsOr:()=>$,html:()=>C,inlineArrayTransformer:()=>f,inlineLists:()=>R,oneLine:()=>A,oneLineCommaLists:()=>k,oneLineCommaListsAnd:()=>M,oneLineCommaListsOr:()=>L,oneLineInlineLists:()=>T,oneLineTrim:()=>x,removeNonPrintingValuesTransformer:()=>w,replaceResultTransformer:()=>u,replaceStringTransformer:()=>g,replaceSubstitutionTransformer:()=>d,safeHtml:()=>S,source:()=>C,splitStringTransformer:()=>m,stripIndent:()=>E,stripIndentTransformer:()=>h,stripIndents:()=>_,trimResultTransformer:()=>c})
var i,o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=(i=["",""],o=["",""],Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}}))),a=function(){function e(){for(var t=this,n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o]
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tag=function(e){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o]
return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,i))))},i.length>0&&Array.isArray(i[0])&&(i=i[0]),this.transformers=i.map((function(e){return"function"==typeof e?e():e})),this.tag}return r(e,[{key:"interimTag",value:function(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o]
return this.tag(s,e.apply(void 0,[t].concat(i)))}},{key:"processSubstitutions",value:function(e,t,n){var i=this.transformSubstitution(e.shift(),t)
return"".concat(t,i,n)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,n){return n.onSubstitution?n.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}()
const l=a,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return{onEndResult:function(t){if(""===e)return t.trim()
if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"")
if("end"===e||"right"===e)return t.replace(/\s*$/,"")
throw new Error("Side not supported: "+e)}}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial"
return{onEndResult:function(t){if("initial"===e){var n=t.match(/^[^\S\n]*(?=\S)/gm),i=n&&Math.min.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(n.map((function(e){return e.length}))))
if(i){var o=new RegExp("^.{"+i+"}","gm")
return t.replace(o,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"")
throw new Error("Unknown type: "+e)}}},u=function(e,t){return{onEndResult:function(n){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.")
return n.replace(e,t)}}},d=function(e,t){return{onSubstitution:function(n,i){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.")
return null==n?n:n.toString().replace(e,t)}}},g=function(e,t){return{onString:function(n){if(null==e||null==t)throw new Error("replaceStringTransformer requires at least 2 arguments.")
return n.replace(e,t)}}}
var p={separator:"",conjunction:"",serial:!1}
const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p
return{onSubstitution:function(t,n){if(Array.isArray(t)){var i=t.length,o=e.separator,r=e.conjunction,s=e.serial,a=n.match(/(\n?[^\S\n]+)$/)
if(t=a?t.join(o+a[1]):t.join(o+" "),r&&i>1){var l=t.lastIndexOf(o)
t=t.slice(0,l)+(s?o:"")+" "+r+t.slice(l+1)}}return t}}},m=function(e){return{onSubstitution:function(t,n){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.")
return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}}
var v=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e}
const w=function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(v):v(e)?e:""}}},y=new l(f({separator:","}),h,c),b=new l(f({separator:",",conjunction:"and"}),h,c),$=new l(f({separator:",",conjunction:"or"}),h,c),C=new l(m("\n"),w,f,h,c),S=new l(m("\n"),f,h,c,d(/&/g,"&amp;"),d(/</g,"&lt;"),d(/>/g,"&gt;"),d(/"/g,"&quot;"),d(/'/g,"&#x27;"),d(/`/g,"&#x60;")),A=new l(u(/(?:\n(?:\s*))+/g," "),c),x=new l(u(/(?:\n\s*)/g,""),c),k=new l(f({separator:","}),u(/(?:\s+)/g," "),c),L=new l(f({separator:",",conjunction:"or"}),u(/(?:\s+)/g," "),c),M=new l(f({separator:",",conjunction:"and"}),u(/(?:\s+)/g," "),c),R=new l(f,h,c),T=new l(f,u(/(?:\s+)/g," "),c),E=new l(h,c),_=new l(h("all"),c)},667:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l})
var i=n(266),o=n(574),r=n(805),s=n.n(r),a=(0,i.createTemplateFactory)({id:"yRwQESAJ",block:'[[[11,"pre"],[17,1],[4,[38,0],null,[["value","update","ready","options"],[[30,2],[30,3],[30,4],[30,5]]]],[12],[13]],["&attrs","@value","@update","@ready","@options"],false,["-ace-editor"]]',moduleName:"/Users/dfreeman/code/ember-exclaim/node_modules/ember-ace/dist/components/ace-editor.js",isStrictMode:!1}),l=(0,o.setComponentTemplate)(a,s()())},241:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>l})
var i=n(141),o=n(773),r=n(831),s=n.n(r),a=n(341)
class l extends(s()){constructor(e,t){var n,i
super(e,t),n=this,(i=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var i=n.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(i="silenceUpdates"))in n?Object.defineProperty(n,i,{value:false,enumerable:!0,configurable:!0,writable:!0}):n[i]=false,(0,a.registerDestructor)(this,(()=>{this.state?.editor.destroy()}))}modify(e,t,n){void 0===this.state?this.instantiateEditor(e,n):this.updateEditor(this.state.editor,n)}instantiateEditor(e,t){let n=(0,i.edit)(e,{value:t.value})
this.updateEditor(n,t),this.rerender(n),n.session.on("change",(()=>{this.silenceUpdates||this.state?.args.update?.(n.getValue())})),t.ready?.(n)}updateEditor(e,t){let n=this.silenceUpdates
try{this.silenceUpdates=!0,e.setOptions(t.options??{}),void 0!==t.value&&e.getValue()!==t.value&&(e.setValue(t.value,-1),this.rerender(e))}finally{this.silenceUpdates=n}this.state={editor:e,args:t}}rerender(e){(0,o.schedule)("afterRender",e.renderer,e.renderer.updateFull,!0)}}},285:(e,t,n)=>{"use strict"
e.exports=n.p+"c850a167ffac01338f2c-7ed590bb0fa1cb921e08f1ec8f3e8aeb.js?resource"}}])
