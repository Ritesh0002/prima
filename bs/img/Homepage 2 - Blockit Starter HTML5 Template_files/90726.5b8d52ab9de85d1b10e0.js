"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[90726],{192784:(o,r,e)=>{e.r(r),e.d(r,{flushDelegate:()=>t});var l=e(707957);const t=new(e.n(l)())},62802:(o,r,e)=>{o=e.nmd(o),e(638456);var l=e(120780).fetch,t=e(868073).regExpEscape,c=e(226722).TVXWindowEvents,a=e(49437).TVLocalStorage,n=e(707957),i=e(244842),s=e(125226).isFeatureEnabled,{flushDelegate:g}=e(192784),d=e(201089).getLogger("Lib.TVSettings"),u=["s.tradingview.com","betacdn.tradingview.com"],b=(i.enabled("use_localstorage_for_settings"),window.TVSettings=function(){var o=!1,r=null,e=!1;function p(){return!(r||window.is_authenticated)}try{o=!TradingView.onWidget()&&parent&&parent!==window&&!!parent.IS_DEMO_PAGE}catch(o){}if(o){var h={"widgetbar.layout-settings":{widgets:{},settings:{minimized:!0}},notShowMainWizard:!0},f=function(o,r,e){var l=h[o];return null==l?r:l},v=function(){};return{loaded:!1,loadedModel:!1,getValue:f,getJSON:f,getBool:f,getFloat:f,getInt:f,setValue:v,setJSON:v,remove:v,keys:function(){return Object.keys(h)},keysMask:function(){return[]},sync:v,onSync:{subscribe:function(){}}}}var y=12e4;"local"===window.environment&&(y=5e3);var m,F,w,k=TradingView.onWidget()?"tradingview-widget":"tradingview",_=k+".",E={},M=[],x=[/^widgetbar\.widget\.watchlist.+/,/.+quicks$/,/^widgetbar\.layout-settings$/,/^ChartSideToolbarWidget\.visible$/,/^onwidget\.watchlist$/,/^chart\.favoriteDrawings$/,/^chart\.favoriteDrawingsPosition$/,/^chart\.favoriteLibraryIndicators$/,/^loadChartDialog.favorites$/,/^ChartFavoriteDrawingToolbarWidget\.visible/,/^trading\.chart\.proterty$/,/^trading_floating_toolbar\.position$/,/^trading\.orderWidgetMode\./,/^symbolWatermark$/,/^pinereference\.size$/,/^pinereference\.position$/,/^hint\.+/,/^ChartDrawingToolbarWidget\.visible/];function S(o){return _+o}function D(o){return o.substring(_.length)}function B(o,r){var e=E[o];return null==e?r:e}function C(o,r,e){e=e||{};var l=""+r;return E[o]!==l&&(E[o]=l,N(o)),e.forceFlush&&!F&&(F=setTimeout((function(){F=void 0,$()}),10)),b}function A(o,r){return r=r||{},null!=E[o]&&(delete E[o],N(o)),r.forceFlush&&$(),b}function T(){m=void 0,M.length&&$()}function N(o){if(r)null==E[o]?r.removeValue(o):r.setValue(o,E[o]);else if(p())try{null==E[o]?a.removeItem(S(o)):a.setItem(S(o),E[o])}catch(o){}else M.push(o),m||(m=setTimeout(T,y));c.emit("settings",JSON.stringify({key:o,value:E[o]}))}function $(o){if(!e&&!w)if(s("disable_save_settings"))d.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");else if(!i.enabled("widget")&&!p()&&0!==M.length){var r=M;M=[];for(var t={},c=r.length;c--;){var a=r[c],n=E[a];void 0===n&&(n=null),t[a]=n}var g=new FormData;g.append("delta",JSON.stringify(t)),o&&navigator.sendBeacon?navigator.sendBeacon("/savesettings/",g):l("/savesettings/",{method:"POST",credentials:"include",body:g}).then((function(e){if(e.ok||(M=M.concat(r)),[429,503].includes(e.status)){var l=1e3*+e.headers.get("retry-after")||3e5;w=setTimeout((()=>{w=void 0,$(o)}),l)}})).catch((function(){M=M.concat(r)}))}}function I(){
return Object.keys(E)}function L(o){for(var r=0;r<x.length;++r)if(x[r].exec(o))return!0;return!1}function O(o){return o.substring(0,_.length)===_}function P(o){E={};const r=0===Object.keys(o).length;r||function(o){Object.keys(o).forEach((function(r){E[r]=o[r]+""}))}(o),function(o){for(var r=a.length;r--;){var e=a.key(r);e&&O(e)&&(o&&C(D(e),a.getItem(e)),a.removeItem(e))}}(r)}c.on("settings",(function(o){var r=JSON.parse(o);null==r.value?delete E[r.key]:E[r.key]=r.value}));var V=new n;return document.addEventListener("visibilitychange",(function(){"hidden"!==document.visibilityState&&!0!==document.hidden||$()})),window.addEventListener("pagehide",(function(){$(!0)})),window.addEventListener("beforeunload",(function(){$(!0)})),g.subscribe(null,(()=>{$()})),{loaded:!1,loadedModel:!1,getValue:B,getJSON:function(o,r){var e=B(o,void 0);if(null==e)return r;try{return JSON.parse(e)}catch(e){return A(o),r}},getBool:function(o,r){var e=B(o);return null==e?r:!(!e||"false"===e||0==+e)},getFloat:function(o,r,e){var l=B(o,void 0);if(null==l)return r;var t=parseFloat(l);if(!isFinite(t))throw new TypeError('"'+l+'" is not float (key: "'+o+'")');return t},getInt:function(o,r,e){var l=B(o,void 0);if(null==l)return r;var t=parseInt(l,10);if(!isFinite(t))throw new TypeError('"'+l+'" is not int (key: "'+o+'")');return t},setValue:C,setJSON:function(o,r,e){return C(o,JSON.stringify(r),e),b},remove:A,keys:I,keysMask:function(o,r){for(var e=I(),l=[],c=(o=new RegExp("^"+t(o).replace(/\\\*\\\*/gi,".+").replace(/\\\*/gi,"[^.]+")+"$","gi"),e.length-1);c>=0;c--)o.test(e[c])&&l.push(e[c]),o.lastIndex=0;return l},sync:function(o){null!==o?(r?P(r.initialSettings||{}):p()?(function(){if(TradingView.onWidget()&&u.includes(window.location.host))for(var o="tradingview.",r=a.length;r--;){var e=a.key(r);if(0===e.indexOf(o)){var l=e.replace(o,k+".");a.setItem(l,a.getItem(e)),a.removeItem(e)}}}(),function(){E={};for(var o=!i.enabled("save_chart_properties_to_local_storage"),r=a.length;r--;){var e=a.key(r);if(e&&O(e)){var l=e.substring(_.length);o&&!L(l)||(E[l]=a.getItem(e))}}}()):P(o||{}),V.fire()):e=!0},onSync:V,setSettingsAdapter:function(o){r=o}}}());setTimeout((function(){e.e(30362).then(e.bind(e,276141)).then((o=>{o.clearOldSettings()}))}),3e4),o&&o.exports&&(o.exports=b)},777754:(o,r,e)=>{e.r(r),e.d(r,{t:()=>l});e(586463);function l(o,r={},c){if(null===o)return Array.isArray(c)?(c[t(r.count)]||c[0]).format(r.replace||r):"object"==typeof c?l(null,r,c[e.g.language]||c.en):l(c,r);if(c&&o){const e=`${o}${r.context?`_${r.context}`:""}`;if(c[e])return l(null,r,c[e])}return"number"==typeof o?o.toString():"string"!=typeof o?"":(r.plural&&1!=+r.count?r.plural:o).format(r.replace||r)}const t={ca_ES:(o=1)=>+(1!=o),cs:(o=1)=>+(1==o?0:o>=2&&o<=4?1:2),el:(o=1)=>+(1!=o),da_DK:(o=1)=>+(1!=o),en:(o=1)=>+(1!=o),et_EE:(o=1)=>+(1!=o),fa:(o=1)=>0,hu_HU:(o=1)=>0,id_ID:(o=1)=>0,it:(o=1)=>+(1!=o),ms_MY:(o=1)=>0,no:(o=1)=>+(1!=o),nl_NL:(o=1)=>+(1!=o),ro:(o=1)=>+(1==o?0:o%100>19||o%100==0&&0!=o?2:1),sk_SK:(o=1)=>+(1==o?0:o>=2&&o<=4?1:2),sv:(o=1)=>+(1!=o),zh:(o=1)=>0,
zh_TW:(o=1)=>0,de:(o=1)=>+(1!=o),es:(o=1)=>+(1!=o),fr:(o=1)=>+(o>1),he_IL:(o=1)=>+(1==o?0:2==o?1:o>10&&o%10==0?2:3),ko:(o=1)=>0,ja:(o=1)=>0,pl:(o=1)=>+(1==o?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2),pt:(o=1)=>+(1!=o),tr:(o=1)=>+(1!=o),vi:(o=1)=>0,ar:(o=1)=>+(0==o?0:1==o?1:2==o?2:o%100>=3&&o%100<=10?3:o%100>=11&&o%100<=99?4:5),ru:(o=1)=>+(o%10==1&&o%100!=11?0:o%10>=2&&o%10<=4&&(o%100<10||o%100>=20)?1:2),th:(o=1)=>0}[e.g.language]},182436:(o,r,e)=>{e.d(r,{NumericFormatter:()=>c});var l=e(624444),t=e(960521);class c{constructor(o){this._precision=o}format(o){return(void 0!==this._precision?o.toFixed(this._precision):c.formatNoE(o)).replace(".",l.formatterOptions.decimalSign)}parse(o){const r=o.replace(l.formatterOptions.decimalSign,".");let e=parseFloat(r);return this._precision&&(e=+e.toFixed(this._precision)),e}static formatNoE(o){if(!Number.isFinite(o))return String(o);const r=new t.Big(o);return r.lt(1)?r.toFixed():r.toString()}}},541346:(o,r,e)=>{e.d(r,{PercentageFormatter:()=>c});var l=e(624444),t=e(31341);class c extends l.PriceFormatter{constructor(o){super(o),this.type="percentage"}state(){const o=l.PriceFormatter.prototype.state.call(this);return o.percent=!0,o}parse(o){return o=o.replace("%",""),super.parse(o)}format(o,r,e,l,c=!0){const a=super.format(o,r,e,l,!1)+"%";return c?(0,t.forceLTRStr)(a):a}static serialize(o){return o.state()}static deserialize(o){return new c(o.priceScale)}}},624444:(o,r,e)=>{e.d(r,{PriceFormatter:()=>f,formatterOptions:()=>d,numberToStringWithLeadingZero:()=>h});var l=e(777754),t=e(960521),c=e(217504),a=e(389137),n=e(31341),i=e(667353);const s=(0,e(201089).getLogger)("Chart.PriceFormatter"),g=new RegExp(/^(-?)[0-9]+$/),d={decimalSign:".",decimalSignFractional:"'"},u=new Map;const b=new Map;function p(o,r,e,l){let t=0;if(o>0&&r>0){let r=o;for(e&&l&&(r/=l);r>1;)r/=10,t++}return t}function h(o,r){if(!(0,a.isNumber)(o))return"n/a";if(!(0,a.isInteger)(r))throw new TypeError("invalid length");if(r<0||r>24)throw new TypeError("invalid length");if(0===r)return o.toString();return("0000000000000000"+o.toString()).slice(-r)}class f{constructor(o,r,t,n,i,g){if(this.type="price",this._formatterErrors={custom:l.t(null,void 0,e(332061)),fraction:l.t(null,void 0,e(142015)),secondFraction:l.t(null,void 0,e(643247))},r&&!g||(r=1),(0,a.isNumber)(o)&&(0,a.isInteger)(o)||(o=100),o<0)throw new TypeError("invalid base");this._priceScale=o,this._minMove=r,this._minMove2=n,this._variableMinTick=i,this._variableMinTickData=t||void 0===i?void 0:(0,c.makeVariableMinTickData)(NaN,i),t&&void 0!==n&&n>0&&2!==n&&4!==n&&8!==n?s.logDebug("invalid minmove2"):(this._fractional=t,this._fractionalLength=p(this._priceScale,this._minMove,this._fractional,this._minMove2),this._ignoreMinMove=g)}isFractional(){return!!this._fractional}state(){return{fractional:this._fractional,fractionalLength:this._fractionalLength,minMove:this._minMove,minMove2:this._minMove2,priceScale:this._priceScale,variableMinTick:this._variableMinTick,ignoreMinMove:this._ignoreMinMove}}formatChange(o,r,e){
return this._formatImpl(o-r,e,void 0,void 0,void 0,void 0,Math.min(Math.abs(o),Math.abs(r)))}format(o,r,e,l=!0,t=!0,c=!1){return this._formatImpl(o,r,e,l,t,c)}parse(o){return"+"===(o=(o=(0,n.stripLTRMarks)(o)).replace("−","-"))[0]&&(o=o.substring(1)),this._fractional?this._minMove2?this._parseAsDoubleFractional(o):this._parseAsSingleFractional(o):this._parseAsDecimal(o)}hasForexAdditionalPrecision(){return!this._fractional&&10===this._minMove2}static serialize(o){return o.state()}static deserialize(o){return new f(o.priceScale,o.minMove,o.fractional,o.minMove2,o.variableMinTick,o.ignoreMinMove)}_formatImpl(o,r,e,l=!0,a=!0,s=!1,g){const d={price:o,priceScale:this._priceScale,minMove:this._minMove,fractionalLength:this._fractionalLength,tailSize:e,cutFractionalByPrecision:s};let u,b="";return o<0?(b=!1===l?"":"−",d.price=-o):o&&!0===r&&(b="+"),void 0!==this._variableMinTickData&&(Object.assign(d,function(o,r){const e=(0,c.getMinTick)({price:r,minTick:NaN,variableMinTickData:o,shouldCheckForEquality:!0}),l=Math.pow(10,(0,i.numOfDecimalPlaces)(e)),a=(0,t.Big)(e).mul(l).toNumber();return{priceScale:l,minMove:a,fractionalLength:p(l,a)}}(this._variableMinTickData,null!=g?g:d.price)),this._ignoreMinMove&&(d.minMove=1)),u=this._fractional?b+this._formatAsFractional(d.price,d.tailSize):b+this._formatAsDecimal(d),a?(0,n.forceLTRStr)(u):u}_formatAsExponential(o){const r=Math.floor(.75*Math.log10(this._priceScale)),e=o*Math.pow(10,r),l=`e-${r}`,t=Math.log10(this._priceScale)-r;return`${e.toFixed(t).replace(".",d.decimalSign)}${l}`}_formatAsDecimal(o){const{price:r,priceScale:e,minMove:l,fractionalLength:c=0,tailSize:a=0,cutFractionalByPrecision:n}=o;if(e>1e10)return this._formatAsExponential(r);let i;i=this._fractional?Math.pow(10,c):Math.pow(10,a)*e/(n?1:l);const s=1/i;let g;if(i>1)g=Math.floor(r);else{const o=Math.floor(Math.round(r/s)*s);g=0===Math.round((r-o)/s)?o:o+s}let u="";if(i>1){let o=n?new t.Big(r).mul(i).round(void 0,0).minus(new t.Big(g).mul(i)).toNumber():parseFloat((Math.round(r*i)-g*i).toFixed(c));o>=i&&(o-=i,g+=1);const e=n?new t.Big(o).round(c,0).toNumber():parseFloat(o.toFixed(c))*l;u=d.decimalSign+h(e,c+a),u=this._removeEndingZeros(u,a)}return g.toString()+u}_getFractPart(o,r,e){const l=[0,5],t=[0,2,5,7],c=[0,1,2,3,5,6,7,8];return 2===e?void 0===l[o]?-1:l[o]:4===e?void 0===t[o]?-1:t[o]:8===e&&2===r?void 0===c[o]?-1:c[o]:o}_formatAsFractional(o,r){const e=this._priceScale/this._minMove;let l=Math.floor(o),t=r?Math.floor(o*e)-l*e:Math.round(o*e)-l*e;t===e&&(t=0,l+=1);let c="";if(r){let a=(o-l-t/e)*e;a=Math.round(a*Math.pow(10,r)),c=h(a,r),c=this._removeEndingZeros(c,r)}if(!this._fractionalLength)throw new Error("_fractionalLength is not calculated");let a="";if(this._minMove2){const o=t%this._minMove2;t=(t-o)/this._minMove2;const r=h(t,this._fractionalLength),e=this._getFractPart(o,2,this._minMove2);a=r+d.decimalSignFractional+e}else t=this._getFractPart(t,1,this._priceScale),a=h(t*this._minMove,this._fractionalLength);return l.toString()+d.decimalSignFractional+a+c}_removeEndingZeros(o,r){
for(let e=0;e<r&&"0"===o[o.length-1];e++)o=o.substring(0,o.length-1);return o}_parseAsDecimal(o){if(o.includes("e")){if(function(o){let r=u.get(o);return r||(r=new RegExp("^(-?)[0-9]+\\"+o+"[0-9]*e(-?)[0-9]+$"),u.set(o,r)),r}(d.decimalSign).exec(o)){const r=parseFloat(o.replace(d.decimalSign,"."));return{value:r,res:!0,suggest:this.format(r)}}return{error:this._formatterErrors.custom,res:!1}}let r=g.exec(o);if(r){const r=parseFloat(o);return{value:r,res:!0,suggest:this.format(r)}}if(r=function(o){let r=b.get(o);return r||(r=new RegExp("^(-?)[0-9]+\\"+d.decimalSign+"[0-9]*$"),b.set(o,r)),r}(d.decimalSign).exec(o),r){const r=parseFloat(o.replace(d.decimalSign,"."));return{value:r,res:!0,suggest:this.format(r)}}return{error:this._formatterErrors.custom,res:!1}}_patchFractPart(o,r,e){const l={0:0,5:1},t={0:0,2:1,5:2,7:3},c={0:0,1:1,2:2,3:3,5:4,6:5,7:6,8:7};return 2===e?void 0===l[o]?-1:l[o]:4===e?void 0===t[o]?-1:t[o]:8===e&&2===r?void 0===c[o]?-1:c[o]:o}_parseAsSingleFractional(o){let r=g.exec(o);if(r){const r=parseFloat(o);return{value:r,res:!0,suggest:this.format(r)}}if(r=new RegExp("^(-?)([0-9]+)\\"+d.decimalSignFractional+"([0-9]+)$").exec(o),r){const o=!!r[1],e=parseInt(r[2]),l=this._priceScale,t=this._patchFractPart(parseInt(r[3]),1,l);if(t>=l||t<0)return{error:this._formatterErrors.fraction,res:!1};let c=e+t/l;return o&&(c=-c),{value:c,res:!0,suggest:this.format(c)}}return{error:this._formatterErrors.custom,res:!1}}_parseAsDoubleFractional(o){let r=g.exec(o);if(r){const r=parseFloat(o);return{value:r,res:!0,suggest:this.format(r)}}if(r=new RegExp("^(-?)([0-9]+)\\"+d.decimalSignFractional+"([0-9]+)\\"+d.decimalSignFractional+"([0-9]+)$").exec(o),r){const o=!!r[1],e=parseInt(r[2]),l=void 0!==this._minMove2?this._minMove2:NaN,t=this._priceScale/l,c=this._minMove2,a=this._patchFractPart(parseInt(r[3]),1,t),n=this._patchFractPart(parseInt(r[4]),2,c);if(a>=t||a<0)return{error:this._formatterErrors.fraction,res:!1};if(void 0!==c&&n>=c||n<0)return{error:this._formatterErrors.secondFraction,res:!1};let i=void 0!==c?e+a/t+n/(t*c):NaN;return o&&(i=-i),{value:i,res:!0,suggest:this.format(i)}}return{error:this._formatterErrors.custom,res:!1}}}},868073:(o,r,e)=>{function l(o){return o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}e.d(r,{regExpEscape:()=>l})},337779:(o,r,e)=>{function l(o){return o.reduce((function(o,r,e){return~o.indexOf(r)||o.push(r),o}),[])}e.r(r),e.d(r,{uniq:()=>l})},330120:o=>{
o.exports=JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-cold-gray-50":"#F8F9FD","color-cold-gray-100":"#F0F3FA","color-cold-gray-150":"#E0E3EB","color-cold-gray-200":"#D1D4DC","color-cold-gray-250":"#C1C4CD","color-cold-gray-300":"#B2B5BE","color-cold-gray-350":"#A3A6AF","color-cold-gray-400":"#9598A1","color-cold-gray-450":"#868993","color-cold-gray-500":"#787B86","color-cold-gray-550":"#6A6D78","color-cold-gray-600":"#5D606B","color-cold-gray-650":"#50535E","color-cold-gray-700":"#434651","color-cold-gray-750":"#363A45","color-cold-gray-800":"#2A2E39","color-cold-gray-850":"#1E222D","color-cold-gray-900":"#131722","color-cold-gray-950":"#0C0E15","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#FF9100","color-tan-orange-a600":"#CC7014","color-tan-orange-a700":"#8C541C","color-tan-orange-a800":"#593A1B","color-tan-orange-a900":"#33261A","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a700":"#00c853","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#ffd600","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB3","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-50":"#EDE7F6","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a200":"#7C4DFF","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a400":"#2BD9BC","color-minty-green-a700":"#24B29B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a100":"#EA80FC","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-berry-pink-a400":"#f50057","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-deep-blue-600":"#5E35B1","color-forest-green-50":"#DAF2E6","color-forest-green-100":"#ACE5C9","color-forest-green-200":"#70CC9E","color-forest-green-300":"#42BD7F","color-forest-green-400":"#22AB67","color-forest-green-500":"#089950","color-forest-green-600":"#068043","color-forest-green-700":"#056636","color-forest-green-800":"#004D27","color-forest-green-900":"#1A3326","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-aqua-spring":"#ebf9f5","color-army-green":"#3d2c12","color-army-green-2":"#31230d","color-athens-gray-1":"#f2f3f5","color-athens-gray-2":"#f7f8fa","color-athens-gray-3":"#eceff2","color-black-180":"#b4b4b4","color-blue-dianne":"#21384d","color-bluish":"#2185cc","color-bright-gray":"#363c4e","color-brownish-grey":"#8d6e63","color-carnation":"#f04561","color-catskill-white":"#e1ecf2","color-charade":"#2f3241","color-charcoal-grey":"#323337","color-curious-blue":"#299dcd","color-dark-blue-grey":"#123440","color-darkness-blue-grey":"#12213b","color-dark-grey":"#292a2d","color-dark-grey-blue":"#28415a","color-dark-sky-blue":"#37a6ef","color-deep-sea-blue":"#016087","color-ebony-clay":"#262b3e","color-foam":"#d7f0fb","color-gull-gray":"#9db2bd","color-humming-bird":"#d3eef9","color-keppel-1":"#37bc9b","color-keppel-2":"#34b293","color-lavender-blush":"#ffedf0","color-lightish-purple":"#a75ee8","color-loblolly":"#c5cbce","color-manatee":"#878ca8","color-mandy":"#eb4d5c","color-medium-blue":"#2e7bb2","color-milk-chocolate":"#6f2626","color-mirage-1":"#131722","color-mirage-2":"#171b29","color-mirage-3":"#1c2030","color-mischka":"#d6d8e0","color-morning-glory":"#9addcc","color-oslo-gray":"#8b8e95","color-pale":"#fff2cf","color-pale-grey-1":"#f9fafb","color-pale-grey-2":"#e7ebee","color-pale-sky":"#6b7988","color-picton-blue-1":"#3bb3e4","color-puerto-rico":"#3bc2a1","color-purple-brown":"#4e2934","color-purple-brown-2":"#3d2028","color-radical-red":"#ff4a68","color-regent-gray":"#8797a5","color-scooter":"#38acdb","color-silver-tree":"#53b987","color-slate-gray":"#758696","color-sundown":"#ffa4b3","color-sunglow":"#ffca3b","color-tan-hide":"#ff9850","color-trout-1":"#4c525e","color-trout-2":"#4f5966","color-violet-1":"#332738","color-violet-2":"#271d2b","color-white-ice":"#ebf7fc","color-wild-watermelon":"#ff5773","color-readonly-input":"#b4b4b4","color-brand-dark":"#2a2c39","color-seeking-alpha-brand":"#ff7200"}')
},142660:o=>{
o.exports=JSON.parse('{"color-header-bg":"color-white","color-body-bg":"color-white","color-body-secondary-bg":"color-cold-gray-100","color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-550","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-button-background-active":"color-tv-blue-50","color-toolbar-button-background-active-hover":"color-tv-blue-100","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-200","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-toolbar-divider-background":"color-cold-gray-150","color-popup-background":"color-white","color-popup-element-text":"color-cold-gray-900","color-popup-element-text-hover":"color-cold-gray-900","color-popup-element-background-hover":"color-cold-gray-100","color-popup-element-secondary-text":"color-cold-gray-500","color-popup-element-hint-text":"color-cold-gray-400","color-popup-element-text-active":"color-white","color-popup-element-background-active":"color-tv-blue-500","color-popup-element-toolbox-text":"color-cold-gray-500","color-popup-element-toolbox-text-hover":"color-cold-gray-900","color-popup-element-toolbox-text-active-hover":"color-tv-blue-200","color-popup-element-toolbox-background-hover":"color-cold-gray-150","color-popup-element-toolbox-background-active-hover":"color-tv-blue-700","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-500","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-550","color-icons":"color-cold-gray-550","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-550","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-800","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-350","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-700","color-notaccurate-mode-bg":"color-berry-pink-400","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-500","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-500","color-trial-hover":"color-cold-gray-600","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-tan-orange-500","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-boost-button-content-selected":"color-tv-blue-600","color-boost-button-content-hover":"color-cold-gray-900","color-boost-button-bg-hover":"color-cold-gray-150","color-boost-button-border-hover":"color-cold-gray-150","color-boost-button-border-default":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-radical-red","color-legacy-success":"color-keppel-1","color-collapse-tabs-border":"color-athens-gray-3","color-site-widget-hover":"color-athens-gray-1","color-attention":"color-sunglow","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100"}')
}}]);