(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[87038],{2234:e=>{e.exports={}},773343:e=>{e.exports={}},849960:e=>{e.exports={"css-value-copyright-transition-params":".6s 0s cubic-bezier(.4, .01, .22, 1)","css-value-copyright-transition-params-half-time":".3s 0s cubic-bezier(.4, .01, .22, 1)",label:"label-dzbd7lyV",logoWrap:"logoWrap-dzbd7lyV",expandedWithTransition:"expandedWithTransition-dzbd7lyV",expandedByClick:"expandedByClick-dzbd7lyV",start:"start-dzbd7lyV",end:"end-dzbd7lyV",snap:"snap-dzbd7lyV",top:"top-dzbd7lyV",bottom:"bottom-dzbd7lyV",large:"large-dzbd7lyV",expanded:"expanded-dzbd7lyV",label__link:"label__link-dzbd7lyV"}},100943:e=>{e.exports={}},817695:e=>{e.exports={"css-value-ticker-widget-height":"94px","css-value-ticker-widget-min-height":"150px"}},62889:(e,t,i)=>{"use strict";i.d(t,{CopyrightPosition:()=>n,copyrightLabel:()=>l});var n,s=i(497754),r=i(995683),a=i(389137),o=i(849960);function l({svgText:e,icon:t,theme:i,url:l,mode:d,verticalPosition:c=n.Vertical.Bottom,horizontalPosition:_=n.Horizontal.End,snapToEdge:u=!0,isExpanded:h=!1,className:g}){let m;switch(d){case"new":case"with_border":m=(0,a.clone)(i);break;default:m=(0,r.mergeThemes)((0,a.clone)(o),i)}const p=document.createElement("span");let b;l&&(b=document.createElement("a"),b.classList.add(m.label__link),b.href=l,b.target="_blank",b.rel="noopener noreferrer",b.setAttribute("data-target-type","copyright"),p.append(b)),p.className=s(m.label,_===n.Horizontal.Start&&m.start,_===n.Horizontal.End&&m.end,c===n.Vertical.Top&&m.top,c===n.Vertical.Bottom&&m.bottom,u&&m.snap,"large_old"===d&&m.large,h&&m.expanded,g,"js-copyright-label"),p.addEventListener("click",(()=>{function e(){p.classList.remove(m.expandedByClick),p.removeEventListener("mouseleave",e)}p.classList.contains(m.expandedWithTransition)||p.classList.contains(m.expanded)||(p.classList.contains(m.expandedByClick)?l||e():(p.classList.add(m.expandedByClick),p.addEventListener("mouseleave",e)))}));const y=document.createElement("span");y.className=m.logoWrap,y.innerHTML=t;const v=document.createElement("span");return v.className=m.svgTextWrap,v.innerHTML=e,p.append(y,v),[p,m]}!function(e){let t,i;!function(e){e[e.Bottom=0]="Bottom",e[e.Top=1]="Top"}(t=e.Vertical||(e.Vertical={})),function(e){e[e.Start=0]="Start",e[e.End=1]="End"}(i=e.Horizontal||(e.Horizontal={}))}(n||(n={}))},351079:(e,t,i)=>{"use strict";i.d(t,{CopyrightPosition:()=>s.CopyrightPosition,createCopyrightLabel:()=>o});var n=i(497754),s=i(62889),r=i(650401),a=i(952598);function o({isSheriffDisabled:e=!1,...t}){const[i,o]=(0,s.copyrightLabel)(t);return e||(0,r.getWidgetSheriffActions)().then((e=>{i.className=n(i.className,e.includes(a.KnownAction.Expand)&&o.expandedWithTransition)})),i}},650401:(e,t,i)=>{"use strict";i.d(t,{getWidgetSheriffActions:()=>c});var n=i(125226),s=i(120780),r=i(201089),a=i(952598);const o=window.WIDGET_SHERIFF_HOST||"https://www.xstaging-widget.tv",l=(0,r.getLogger)("WidgetSheriff.Widget");let d=null;async function c(){return null===d&&(d=await async function(){if(!(0,
n.isFeatureEnabled)("widget-sheriff"))return Promise.resolve([]);const e=document.location.ancestorOrigins&&document.location.ancestorOrigins.length?document.location.ancestorOrigins[document.location.ancestorOrigins.length-1]:null;if(null===e)return l.logWarn("ancestorOrigin is undefined"),Promise.resolve([]);const t=new URL("/sheriff/api/v1/rules/search",o);t.searchParams.append("origin",e);return(await(0,s.fetch)(t.toJSON()).then((e=>{if(!e.ok)throw new Error("Guard request error occured");return 204===e.status?Promise.resolve({actions:[]}):e.json()})).catch((e=>(l.logWarn(e.message),Promise.resolve({actions:[]}))))).actions.filter((e=>a.widgetSheriffActions.has(e)))}()),Promise.resolve(d)}},952598:(e,t,i)=>{"use strict";var n;i.d(t,{KnownAction:()=>n,widgetSheriffActions:()=>s}),function(e){e.Expand="expand-logo"}(n||(n={}));const s=new Set([n.Expand])},941285:(e,t,i)=>{"use strict";i.d(t,{Spinner:()=>a});i(891382);var n=i(571690),s=i(607436);const r=(0,n.parseHtmlElement)(function(e=""){return`<div class="tv-spinner ${e}" role="progressbar"></div>`}());class a{constructor(e){this._shown=!1,this._el=r.cloneNode(!0),this.setSize(s.spinnerSizeMap[e||s.DEFAULT_SIZE])}spin(e){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=e,void 0!==e&&e.appendChild(this._el)),this._shown=!0,this}stop(e){return e&&void 0!==this._container&&this._container.removeChild(this._el),this._el&&this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this}setStyle(e){return Object.keys(e).forEach((t=>{const i=e[t];void 0!==i&&this._el.style.setProperty(t,i)})),this}style(){return this._el.style}setSize(e){const t=void 0!==e?`tv-spinner--size_${e}`:"";return this._el.className=`tv-spinner ${t} ${this._shown?"tv-spinner--shown":""}`,this}getEl(){return this._el}destroy(){this.stop(),delete this._el,delete this._container}}},125226:(e,t,i)=>{"use strict";var n=i(49437).TVLocalStorage,s=i(707957),r=i(855385);i(638456);var a=new s;TradingView.FeatureToggle={force_prefix:"forcefeaturetoggle.",onChanged:new s,enableFeature:function(e){n.setItem(this.force_prefix+e,"true"),a.fire(e)},disableFeature:function(e){n.setItem(this.force_prefix+e,"false"),a.fire(e)},resetFeature:function(e){n.removeItem(this.force_prefix+e),a.fire(e)},onFeaturesStateChanged:function(){return a}},TradingView.isFeatureEnabled=function(e){var t="featuretoggle_seed";function s(e){try{var i=r(e+function(){if(window.user&&window.user.id)return window.user.id;var e=n.getItem(t);return null!==e||(e=Math.floor(1e6*Math.random()),n.setItem(t,e)),e}());return new DataView(i).getUint32(0,!0)/4294967296}catch(e){return.5}}function o(t){return!("local"!==window.environment||!function(e){
var t=["tick_intervals","broker_FXCM_token_v2","broker_TRADESTATION","broker_TRADOVATE_dev","black_friday_mainpage","black_friday_popup","datawindow","trading-fast-renew-oauth-token","switching_trial_year_to_month_disabled","switching_year_to_month_disabled","default_year_billing_cycle_switcher","marketing-analytics","google-ads","visible_address_fields_by_default","slow-support-warning","hide-trading-floating-toolbar","save-short-streams","details_disable_bid_ask","vat_disabled","pro_plan_upgrades_disabled","pro_plan_downgrades_disabled","disable_recaptcha_on_signup","braintree-trial-implementation","braintree-gopro-in-order-dialog","braintree-apple-pay","braintree-apple-pay-trial","braintree-3ds-enabled","braintree-3ds-enabled-globaly","braintree-3ds-allow-liability-shifted-transactions-only","trial_increased_monthly_discounts","hide_gopro_popup_upgrade_button","tradestation_use_sync_mapper","yandex_metric_enabled","broker_id_session","remove_line_tools_from_content","disable_retry_load_linetools_from_storage","modular_broker_use_sync_mapper","do_not_save_shared_line_tools_to_charts","save_shared_line_tools","chart_storage_with_broker_name","do_not_invalidate_chart_on_changing_line_tools","oanda-european-accounts-warning","mobile_show_bottom_panel","disable_save_settings","desktop_version_notification_enabled","favorites-in-broker-dropdown","streams_stats_profile","enable_toggle_streams_rtmp_url","hide_ecomonic_events","mobile_trading_web","mobile_trading_ios","mobile_trading_android","hide_real_brokers_on_mobile","disable_tradestation_country_block","enable_trading_server_logger","hide_ranges_label_colors","disable_user_specific_encryption","show_checkbox_of_house_rules_to_idea_and_script","minds_widget_enabled","disable_phone_verification_sms","disable_sms_for_particular_countries","no_overlap_mode_enabled","collapse_pane_buttons_when_connected_to_broker","enable_new_execution_style","pushstream_connections_observer","disable_pushstream_connections_for_anonymous_users","use_new_paper_status_mapping","use_staging_verifier","ally_use_new_sso_url","ibkr_use_new_init_session_api","test_minds_connections","enable_eventsource_pushstream_transport","enable_eventsource_pushstream_mobile","ftx_request_server_logger","ibkr_request_server_logger","disallow_concurrent_sessions","check_ibkr_side_maintenance","tradestation_request_server_logger","trading_request_server_logger","hide_tweet_drawingtool","new_error_card_icons","RU_SF_disable","RU_VOR_disable","enable_monaco_editor","enable_new_custom_public_chats","bottom_panel_track_events","vertex-tax-included","enable_place_order_context_in_instant_mode","nyse_agreement","websocket_send_locale","multiple_SoS","enable_edit_order_context_in_instant_mode","show_data_problems_in_help_center","enable_trading_in_replay","chart_storage_hibernation_delay_60min","chart_storage_hibernation_delay_10min","chart_storage_hibernation_delay_5min","widget-sheriff","enable_sign_in_popup_with_evercookie","center_alignment_replay_position","start_replay_right_after_point_selection","nse_attention_popup","switching_raf_toast","show_trading_buttons_in_am","order_type_specific_settings_saving","enable_share_idea_via_twitter","hide_position_trade_value","alerts-restrict-offline-clear-requests","alerts-logos-in-widgets","enable_qty_calculator_in_replay","alerts-log-widget-use-facade","forexcom_session_v2","hide_percent_bottom_toolbar","hide_log_bottom_toolbar","hide_auto_bottom_toolbar","new_idea_publish_page","hide_interval_on_symbol_chart"],i="[A-Z]+[a-zA-Z0-9_]+",n=new RegExp(`broker_${i}_dev`,"g"),s=new RegExp(`hide_${i}_on_ios`,"g"),r=new RegExp(`hide_${i}_on_android`,"g"),a=new RegExp(`hide_${i}_on_mobile_web`,"g")
;return-1===t.indexOf(e)&&-1===e.indexOf("-maintenance")&&!1===n.test(e)&&!1===s.test(e)&&!1===r.test(e)&&!1===a.test(e)}(t))||(!e[t]||-1!==e[t])&&(!!("true"===n.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"true"===user.settings[TradingView.FeatureToggle.force_prefix+t])||!("false"===n.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"false"===user.settings[TradingView.FeatureToggle.force_prefix+t])&&(!!e[t]&&(1===e[t]||s(t)<=e[t])))}return TradingView.onWidget()||Promise.all([i.e(68554),i.e(34604)]).then(i.bind(i,168554)).then((t=>{t.pushStreamMultiplexer.on("featuretoggle",(function(t){var i=o(t.name);e[t.name]=t.state,i!==o(t.name)&&a.fire(t.name)}))})),o}(window.featureToggleState||{}),TradingView.FeatureToggle,t.isFeatureEnabled=TradingView.isFeatureEnabled,TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)},919892:(e,t,i)=>{"use strict";function n(e){return"="+JSON.stringify(s(e))}function s(e){return Object.keys(e).sort().reduce(((t,i)=>("[object Object]"===Object.prototype.toString.call(e[i])?t[i]=s(e[i]):t[i]=e[i],t)),{})}function r(e){return Boolean(e.inputs)||function(e){return Boolean(e.replay)}(e)||e.session||e.adjustment||e["currency-id"]||e["unit-id"]?n(e):e.symbol}i.d(t,{encodeExtendedSymbolOrGetSimpleSymbolString:()=>r})},958067:(e,t,i)=>{"use strict";i.d(t,{dateFormatFunctions:()=>m,getDateFormatWithWeekday:()=>p});var n=i(777754),s=i(39654),r=i(624444);const a={1:()=>n.t(null,void 0,i(795425)),2:()=>n.t(null,void 0,i(835050)),3:()=>n.t(null,void 0,i(651369)),4:()=>n.t(null,void 0,i(442762)),5:()=>n.t(null,{context:"short"},i(227991)),6:()=>n.t(null,void 0,i(715224)),7:()=>n.t(null,void 0,i(6215)),8:()=>n.t(null,void 0,i(38465)),9:()=>n.t(null,void 0,i(757902)),10:()=>n.t(null,void 0,i(73546)),11:()=>n.t(null,void 0,i(671230)),12:()=>n.t(null,void 0,i(92203))},o=(e,t)=>(t?e.getMonth():e.getUTCMonth())+1,l=(e,t)=>t?e.getFullYear():e.getUTCFullYear(),d=e=>e.toLocaleDateString(window.language?(0,s.getIsoLanguageCodeFromLanguage)(window.language):void 0,{weekday:"short",timeZone:"UTC"}),c=(e,t)=>(0,r.numberToStringWithLeadingZero)(((e,t)=>t?e.getDate():e.getUTCDate())(e,t),2),_=(e,t)=>a[o(e,t)](),u=(e,t)=>(0,r.numberToStringWithLeadingZero)(o(e,t),2),h=(e,t)=>(0,r.numberToStringWithLeadingZero)(l(e,t)%100,2),g=(e,t)=>(0,r.numberToStringWithLeadingZero)(l(e,t),4),m={"dd MMM 'yy":(e,t)=>`${c(e,t)} ${_(e,t)} '${h(e,t)}`,"MMM dd, yyyy":(e,t)=>`${_(e,t)} ${c(e,t)}, ${g(e,t)}`,"MMM dd":(e,t)=>`${_(e,t)} ${c(e,t)}`,"dd MMM":(e,t)=>`${c(e,t)} ${_(e,t)}`,"yyyy-MM-dd":(e,t)=>`${g(e,t)}-${u(e,t)}-${c(e,t)}`,"yy-MM-dd":(e,t)=>`${h(e,t)}-${u(e,t)}-${c(e,t)}`,"yy/MM/dd":(e,t)=>`${h(e,t)}/${u(e,t)}/${c(e,t)}`,"yyyy/MM/dd":(e,t)=>`${g(e,t)}/${u(e,t)}/${c(e,t)}`,"dd-MM-yyyy":(e,t)=>`${c(e,t)}-${u(e,t)}-${g(e,t)}`,"dd-MM-yy":(e,t)=>`${c(e,t)}-${u(e,t)}-${h(e,t)}`,"dd/MM/yy":(e,t)=>`${c(e,t)}/${u(e,t)}/${h(e,t)}`,
"dd/MM/yyyy":(e,t)=>`${c(e,t)}/${u(e,t)}/${g(e,t)}`,"MM/dd/yy":(e,t)=>`${u(e,t)}/${c(e,t)}/${h(e,t)}`,"MM/dd/yyyy":(e,t)=>`${u(e,t)}/${c(e,t)}/${g(e,t)}`};function p(e){return"ja"===window.language?(t,i)=>`${m[e](t,i)} (${d(t)})`:(t,i)=>`${d(t)} ${m[e](t,i)}`}Object.keys(m)},223699:(e,t,i)=>{"use strict";i.d(t,{Interval:()=>c,ResolutionKind:()=>r});const n=/^(\d*)([TSHDWMR])$/,s=/^(\d+)$/;var r,a;!function(e){e.Ticks="ticks",e.Seconds="seconds",e.Minutes="minutes",e.Days="days",e.Weeks="weeks",e.Months="months",e.Range="range",e.Invalid="invalid"}(r||(r={})),function(e){e.Hours="hours"}(a||(a={}));const o={};o[r.Ticks]=1e3,o[r.Seconds]=1e3,o[r.Minutes]=60*o[r.Seconds],o[r.Days]=1440*o[r.Minutes],o[r.Weeks]=7*o[r.Days];const l={T:r.Ticks,S:r.Seconds,D:r.Days,W:r.Weeks,M:r.Months,R:r.Range},d=new Set([r.Ticks,r.Seconds,r.Minutes]);class c{constructor(e,t){this._kind=r.Invalid,this._multiplier=0,e!==r.Invalid&&t>0&&(this._kind=e,this._multiplier=t)}kind(){return this._kind}multiplier(){return this._multiplier}isValid(){return this.kind()!==r.Invalid&&this.multiplier()>0}isDWM(){return this.isValid()&&!this.isRange()&&!this.isIntraday()&&!this.isTicks()}isIntraday(){const e=d.has(this.kind());return this.isValid()&&e}isSeconds(){return this.kind()===r.Seconds}isMinutes(){return this.kind()===r.Minutes}isMinuteHours(){return this.kind()===r.Minutes&&((e=this.multiplier())>=60&&!(e%60));var e}isDays(){return this.kind()===r.Days}isWeeks(){return this.kind()===r.Weeks}isMonths(){return this.kind()===r.Months}isRange(){return this.kind()===r.Range}isTicks(){return this.kind()===r.Ticks}isTimeBased(){return!this.isRange()}letter(){return this.isValid()&&this.kind()!==r.Minutes?this.kind()[0].toUpperCase():""}value(){return this.isValid()?this.kind()===r.Minutes?this.multiplier()+"":this.multiplier()+this.letter():""}isEqualTo(e){if(!(e instanceof c))throw new Error("Argument is not an Interval");return!(!this.isValid()||!e.isValid())&&(this.kind()===e.kind()&&this.multiplier()===e.multiplier())}inMilliseconds(e=Date.now()){if(!this.isValid()||this.isRange())return NaN;if(this.isMonths()){const t=new Date(e);t.setUTCMonth(t.getUTCMonth()+(this.multiplier()||1));return+t-e}const t=this.multiplier();return o[this.kind()]*t}static isEqual(e,t){return e===t||c.parse(e).isEqualTo(c.parse(t))}static parseExt(e){e=(e+"").toUpperCase().split(",")[0];let t=n.exec(e);return null!==t?"H"===t[2]?{interval:new c(r.Minutes,60*_(t[1])),guiResolutionKind:a.Hours}:{interval:new c(l[t[2]],_(t[1])),guiResolutionKind:l[t[2]]}:(t=s.exec(e),null!==t?{interval:new c(r.Minutes,_(t[1])),guiResolutionKind:r.Minutes}:{interval:new c(r.Invalid,0),guiResolutionKind:r.Invalid})}static parse(e){return c.parseExt(e).interval}static kind(e){return c.parse(e).kind()}static isValid(e){return c.parse(e).isValid()}static isDWM(e){return c.parse(e).isDWM()}static isIntraday(e){return c.parse(e).isIntraday()}static isSeconds(e){return c.parse(e).isSeconds()}static isMinutes(e){return c.parse(e).isMinutes()}static isMinuteHours(e){return c.parse(e).isMinuteHours()}
static isDays(e){return c.parse(e).isDays()}static isWeeks(e){return c.parse(e).isWeeks()}static isMonths(e){return c.parse(e).isMonths()}static isRange(e){return c.parse(e).isRange()}static isTicks(e){return c.parse(e).isTicks()}static isTimeBased(e){return c.parse(e).isTimeBased()}static normalize(e){const t=c.parse(e);return t.isValid()?t.value():null}}function _(e){return 0===e.length?1:parseInt(e,10)}},178389:(e,t,i)=>{"use strict";i.d(t,{unpackNonSeriesData:()=>r});var n=i(130551),s=i(133822);async function r(e){if(""===e)return null;const t=JSON.parse(e);if(!(0,n.isObject)(t)||"function"==typeof t)throw new Error("Non-object content in the non-series envelope");if((0,n.hasProperty)(t,"indexes_replace"))return{indexes_replace:!0};const r={indexes_replace:!1};if((0,n.hasProperty)(t,"offsets")&&(r.offsets=t.offsets),(0,n.hasProperty)(t,"isUpdate")){if("boolean"!=typeof t.isUpdate)throw new Error('Invalid type of "isUpdate" field');r.isUpdate=t.isUpdate}if((0,n.hasProperty)(t,"data")&&(r.data=t.data),(0,n.hasProperty)(t,"graphicsCmds")&&(r.graphicsCmds=(0,s.validateGraphicsCommands)(t.graphicsCmds)),(0,n.hasProperty)(t,"dataCompressed")||(0,n.hasProperty)(t,"graphicsCmdsCompressed")){const{default:e}=await Promise.all([i.e(93194),i.e(81578)]).then(i.t.bind(i,593194,23));if((0,n.hasProperty)(t,"dataCompressed")){const i=await(new e).loadAsync(t.dataCompressed,{base64:!0});r.data=JSON.parse(await i.file("").async("text"))}if((0,n.hasProperty)(t,"graphicsCmdsCompressed")){const i=await(new e).loadAsync(t.graphicsCmdsCompressed,{base64:!0});r.graphicsCmds=(0,s.validateGraphicsCommands)(JSON.parse(await i.file("").async("text")))}return r}return r}},339315:(e,t,i)=>{"use strict"},444331:(e,t,i)=>{"use strict";i.d(t,{symbolForApi:()=>o});i(777754),i(62802),i(339315),i(223699),i(624444);var n=i(244842),s=i(650151);i(943994),i(541346);const r=n.enabled("pay_attention_to_ticker_not_symbol");n.enabled("uppercase_instrument_names"),n.enabled("charting_library_single_symbol_request"),n.enabled("use_ticker_on_symbol_info_update"),n.enabled("hide_object_tree_and_price_scale_exchange_label");function a(e,t){return null!==e?e.full_name:t}function o(e,t){return r&&e?(0,s.ensureDefined)(e.ticker):a(e,t)}},661841:(e,t,i)=>{"use strict";i(318293),i(730128);function n(e){return{status:"fulfilled",value:e}}function s(e){return{status:"rejected",reason:e}}var r=i(49336),a=i(201089);function o(e,t=[],i){return function(e,t,i,n=[],s){const r=i.slice(1),a=decodeURIComponent(r);let o={};try{""!==a&&(o=JSON.parse(a),void 0!==s&&s(e,o),Object.keys(o).forEach((e=>{n.includes(e)&&delete o[e]})))}catch(e){o={},console.warn("Hash params parsing error! Hash params ignored.")}const l=t.slice(1),d=decodeURIComponent(l);let c={};try{""!==d&&(d.split("&").map((e=>{const t=e.indexOf("=");return[e.slice(0,t),e.slice(t+1)]})).forEach((e=>{const[t,i]=e;n.includes(t)||(c[t]=i)})),void 0!==s&&s(e,c))}catch(e){c={},console.warn("Search query params parsing error! Search query params ignored.")}return Object.assign({},e,o,c)
}(e,location.search,location.hash,t,i)}var l=i(685459),d=i.n(l),c=i(39654),_=i(571690),u=i(331633),h=i(650151),g=i(551238),m=i(16899),p=i(909627),b=i(607546);i(2234);class y extends m.TickerItemAbstract{constructor(e,t,i){super(e,t,i)}_getClass(){return"tv-ticker-item-last"}_getView(){const e=this._getElementClass("header"),t=(this._getElementClass("icon"),this._getElementClass("short-name")),i=this._getElementClass("title"),n=this._getElementClass("body"),s=this._getElementClass("last"),r=this._getElementClass("change-wrapper"),a=(this._getElementClass("change-direction"),this._getElementClass("change-percent")),o=this._getElementClass("change"),l=this._getElementClass("session-status"),d=this._getElementClass("update-mode"),c=this._getElementClass("range");return`<div class="${e}"><div class="js-header-icon"></div><div><div class="${t}"><span class="js-symbol-short-name"></span><span class="${l}"><span class="js-symbol-session-status"></span></span></div><div class="${i} js-symbol-description-name"></div></div></div><div class="${n}"><span class="${s} js-symbol-last apply-overflow-tooltip"></span><span class="${d}"><span class="js-data-mode"></span></span><span class="${r} js-symbol-change-direction">${p}&nbsp<span class="${a} js-symbol-change-pt"></span>&nbsp<span class="${o} js-symbol-change"></span>`+(this._options.symbolRange?`<span class="${c} js-symbol-range"></span>`:"")+"</span></div>"}_getTickerOptions(){return{dontDyePrice:!0,signPositive:!1,signNegative:!1,changeInBrackets:!0,changeDirectionUpClass:`${this._getElementClass("change-wrapper")}--up`,changeDirectionDownClass:`${this._getElementClass("change-wrapper")}--down`,lastGrowingClass:this._options.notHighlightLast?"":`${this._getElementClass("last")}--growing`,lastFallingClass:this._options.notHighlightLast?"":`${this._getElementClass("last")}--falling`,sessionStatusClassSuffix:"--for-ticker-last",dataModeClassSuffix:"--for-ticker-last",showInvalidSymbolStatus:!0,setStateHook:(0,b.getLogoUrlsHook)((e=>{this._renderSymbolLogo(e,"xsmall")})),initedHook:()=>{if(this._options.symbolRange){const e=this._el.querySelector(".js-symbol-range");e&&(e.textContent=this._options.symbolRange)}}}}_renderSymbolLogo(e,t){const i=this._el.querySelector(".js-header-icon");i&&this._setSymbolLogoHtml(i,e,t)}}var v=i(185515),f=i(194058),w=i(777754),k=i(453290);const S=new Map([["1D",w.t(null,void 0,i(963386))],["1M",w.t(null,void 0,i(991502))],["3M",w.t(null,void 0,i(886756))],["12M",w.t(null,void 0,i(111746))],["60M",w.t(null,void 0,i(294895))],["ALL",w.t(null,void 0,i(548942))],["LASTSESSION",w.t(null,void 0,i(963386))]]);var C=i(668616),T=(i(773343),i(100943),i(817695));const x=parseInt(T["css-value-ticker-widget-min-height"]),E=parseInt(T["css-value-ticker-widget-height"]);class M{constructor(e,t,i){this._chart=null,this._ticker=null,this._emitter=new(d()),this._container=e,this._settings=t,this._callbacks=i,this._container.appendChild((0,
_.parseHtml)(`<a class="tv-mini-symbol-overview__link tv-mini-symbol-overview__link--hidden js-link" target="_blank" rel="external noopener">\n\t\t\t${t.chartOnly?"":'<div id="mini-symbol-overview-ticker" class="tv-mini-symbol-overview__ticker"></div>'}\n\t\t\t<div id="mini-symbol-overview-chart" class="tv-mini-symbol-overview__chart ${t.chartOnly?"tv-mini-symbol-overview__chartOnly":""}"></div>\n\t\t</a>`)),this._widgetContainer=(0,h.ensureNotNull)(this._container.querySelector(".js-link")),this._loader=(0,h.ensureNotNull)(this._container.querySelector(".js-loader")),this._initSignals(),this._initWidget()}changeSymbol(e,t){var i,n;this._settings.symbol=e,this._settings.subSession=t,this._initSignals(),this._setContainerLink(),null===(i=this._ticker)||void 0===i||i.changeSymbol(e),null===(n=this._chart)||void 0===n||n.changeSymbol({symbol:e,session:t})}chart(){return this._chart}ticker(){return this._ticker}_initSignals(){let e=!1,t=Boolean(this._settings.chartOnly);const i=()=>e&&t&&this._callbacks.onWidgetReady();this._emitter.on("chart-is-ready",(()=>{e=!0,i()})),this._emitter.on("ticker-is-ready",(()=>{t=!0,i()}))}_initWidget(){const{colorTheme:e,isTransparent:t,height:i,autosize:n}=this._settings,s=i>E?i:E;if(e&&(0,u.setTheme)(e),this._setContainerLink(),this._initTickerWidget(),t?this._container.style.backgroundColor="transparent":this._widgetContainer.classList.add("tv-mini-symbol-overview__link--with-hover"),s>=x||n||this._settings.chartOnly){const e=(0,h.ensureNotNull)(this._container.querySelector("#mini-symbol-overview-chart"));this._initChartWidget(e)}else this._showWidget()}_setContainerLink(){const{symbol:e,largeChartUrl:t}=this._settings,i=o(this._settings),n=(0,v.filterUtmInfo)(i),s=(0,f.makeWidgetSymbolLink)(e,t,n);this._widgetContainer.href=s}_initTickerWidget(){if(this._settings.chartOnly)return;const e=(0,h.ensureNotNull)(this._container.querySelector("#mini-symbol-overview-ticker")),t={proName:this._settings.symbol};var i;this._ticker=new y(t,e,{isEmbedWidget:!0,notHighlightLast:this._settings.notHighlightLast,symbolRange:this._settings.showSymbolRange?(i=this._settings.dateRange||"",S.get((0,k.getActualTimeFrame)(i))||""):void 0}),this._ticker.onComplete.subscribe(null,(()=>this._emitter.emit("ticker-is-ready"))),this._ticker.onError.subscribe(null,(()=>this._callbacks.onNoData()))}_initChartWidget(e){const{dateRange:t,trendLineColor:i,growingTrendLineColor:n,fallingTrendLineColor:s,lineWidth:r,underLineColor:a,underLineBottomColor:o,colorTheme:l,symbol:d,locale:_,noTimeScale:u,scalePosition:h}=this._settings,m="dark"===l,p=g.colorsPalette["color-gull-gray"],b=g.colorsPalette["color-regent-gray"],y={rightPriceScale:{visible:!1,entireTextOnly:!0},leftPriceScale:{visible:!1,entireTextOnly:!0}};switch(h){case"left":{const{leftPriceScale:e}=y;e.visible=!0;break}case"right":{const{rightPriceScale:e}=y;e.visible=!0;break}}const v={timeframe:{visible:!1,value:(0,k.getActualTimeFrame)(t)},chartOptions:{chart:{grid:{horzLines:{visible:!1},vertLines:{visible:!1}},layout:{fontSize:12,textColor:m?b:p},
localization:{locale:(0,c.getIsoLanguageCodeFromLanguage)(_)},timeScale:{visible:!u,minBarSpacing:.1},...y},series:{chartType:"area",priceLineWidth:2,lineColor:i,fallingLineColor:s,growingLineColor:n,lineWidth:null!=r?r:2,topColor:a,bottomColor:o,scaleMargins:{top:.01,bottom:.05}}},onFirstData:()=>{this._showWidget(),this._emitter.emit("chart-is-ready")}};this._chart=new C.LightweightMiniChart(d,e,null,v)}_showWidget(){var e;this._loader.classList.remove("i-loading"),this._widgetContainer.classList.remove("tv-mini-symbol-overview__link--hidden"),null===(e=this._chart)||void 0===e||e.resizeByContainer()}}var $=i(901107);const L=window.initData.hashSettings||{},N="string"==typeof L.frameElementId?L.frameElementId:null;var W,D,R=i(351079);function U(e,t,i){const n={name:e,frameElementId:t,data:i};window.parent.postMessage(n,"*")}!function(e){let t;!function(e){e.SetSymbol="set-symbol",e.SetInterval="set-interval"}(t=e.Names||(e.Names={}))}(W||(W={})),function(e){let t;!function(e){e.SymbolClick="tv-widget-symbol-click",e.WidgetLoad="tv-widget-load",e.WidgetReady="tv-widget-ready",e.ResizeIframe="tv-widget-resize-iframe",e.NoData="tv-widget-no-data"}(t=e.Names||(e.Names={}))}(D||(D={}));const A=(0,a.getLogger)("EmbedWidget.MiniSymbolOverview"),I=window.initData.widgetDefaults;const O=o(I,[],(function(e,t){void 0===t.underLineBottomColor&&void 0!==t.underLineColor&&(t.underLineBottomColor=t.underLineColor)})),P=(0,v.filterUtmInfo)(O);Number.isNaN(Number(O.height))&&(O.height=I.height);const V={onNoData:()=>U(D.Names.NoData,N,void 0),onWidgetReady:async()=>{if(O.considerImagesAtWidgetReady)try{await F()}catch(e){A.logError("Images loading error")}U(D.Names.WidgetReady,N,void 0)}};(0,r.whenDocumentReady)((()=>{const e=(0,h.ensureNotNull)(document.getElementById("mini-symbol-overview")),t=new M(e,O,V);window._exposed_miniSymbolOverviewWidget=t,function(e,t){function i(i){i.data&&i.data.name&&i.data.name===e&&t(i.data.data)}window.addEventListener("message",i,!1)}(W.Names.SetSymbol,(e=>t.changeSymbol(e.symbol,e.session))),(0,$.createEmbedWidgetWrapper)(e,P,{locale:O.locale,customer:window.TradingView.widgetCustomer,isWhiteLabel:window.initData.widgetDefaults.whitelabel,isSheriffDisabled:window.initData.widgetDefaults.isSheriffDisabled,copyrightOptions:{verticalPosition:R.CopyrightPosition.Vertical.Top,mode:"small_old"}}),U(D.Names.WidgetLoad,N,void 0)}));const F=()=>new Promise((async(e,t)=>{const i=[],r=[];var a;(await(a=Array.from(document.images).map(z),Promise.all(Array.from(a,(e=>Promise.resolve(e).then(n,s)))))).forEach((e=>{"rejected"===e.status?i.push(e.reason):r.push(e.value)})),i.length?t(i):e(r)})),z=e=>new Promise(((t,i)=>{if(e.complete)return void t(e);const n=()=>{e.removeEventListener("load",s,!0),e.removeEventListener("error",r,!0)},s=()=>{n(),t(e)},r=e=>{n(),i(e)};e.addEventListener("load",s,!0),e.addEventListener("error",r,!0)}))},246733:(e,t,i)=>{"use strict";i.d(t,{applyAlpha:()=>s,applyTransparency:()=>a,resetTransparency:()=>o});var n=i(724377);function s(e,t){return function(e,t,i){if(t=t||0,
!l(e))return i?(0,n.rgbaToString)((0,n.rgba)((0,n.parseRgb)(e),(0,n.normalizeAlphaComponent)(r(t)))):e;const[s,a,o]=(0,n.parseRgb)(e),d=(0,n.normalizeAlphaComponent)(r(t));return(0,n.rgbaToString)([s,a,o,d])}(e,function(e){return 100*(1-e)}(t))}function r(e){if(e<0||e>100)throw new Error("invalid transparency");return 1-e/100}function a(e,t){if("transparent"===e)return e;const i=(0,n.parseRgba)(e),s=i[3];return(0,n.rgbaToString)((0,n.rgba)(i[0],i[1],i[2],r(t)*s))}function o(e){return"transparent"===e||l(e)?e:(0,n.rgbaToString)((0,n.rgba)((0,n.parseRgb)(e),(0,n.normalizeAlphaComponent)(1)))}function l(e){return 0===e.indexOf("#")}},503344:(e,t,i)=>{"use strict";i.d(t,{makeSymbolPageUrl:()=>u,makeTemplateSymbolUrl:()=>c});var n=i(42398),s=i(258621),r=i(691239),a=(i(889267),i(519073));function o(e){const t={shortName:e.shortName,exchange:e.exchange,proName:e.proName,type:e.type};return e.proName&&e.proName.includes(":")&&([t.exchange,t.shortName]=e.proName.split(":")),t}function l(e,t){const i=encodeURIComponent(t.shortName||""),n=encodeURIComponent(t.exchange||""),s=encodeURIComponent(t.proName||"");return e.replace("{tvexchange}",n).replace("{tvsymbol}",i).replace("{tvprosymbol}",s)}function d(e,t=""){const i=["UKOIL","USOIL","XAGAUD","XAGCAD","XAGCHF","XAGEUR","XAGGBP","XAGHKD","XAGJPY","XAGUSD","XAUAUD","XAUCAD","XAUCHF","XAUEUR","XAUGBP","XAUHKD","XAUJPY","XAUNZD","XAUUSD","XPDUSD","XPTUSD","SPX"];return void 0===e.shortName&&void 0===e.proName?(console.warn("Params missed"),"/"):h(e)?e.exchange?"/symbols/{tvsymbol}/?exchange={tvexchange}":`/symbols/{tvsymbol}/${t}`:e.exchange||e.proName?e.shortName&&i.includes(e.shortName)?`/symbols/{tvsymbol}/${t}`:`/symbols/{tvexchange}-{tvsymbol}/${t}`:`/symbols/{tvsymbol}/${t}`}function c(e,t){let i=e;if(!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)){let n="tvprosymbol";void 0===t.proName&&(n="tvsymbol"),i=`${e}?tvwidgetsymbol={${n}}`}const n=l(i,o(t));if(!(0,r.isSafeUrl)(n))throw new Error(`The symbol URL ${n} is not allowed.`);return n}function _(e,t,i,r){const a=(window.locale_domains?(0,s.determineBaseUrl)(window.locale_domains,r):window.location.origin)+l(e,o(t));return i?(0,n.addUtmToUrl)(a,i):a}function u(e,t,i,n){return _(d(e,n),e,t,i)}function h(e){const{type:t="",typespecs:i=[]}=e,n="forex"===t,s=(0,a.hasCryptoTypespec)(t,i);return n||s||(0,a.isCommodity)(t,i)}},603517:(e,t,i)=>{"use strict";i.d(t,{miniTimeFrameOptions:()=>s});var n=i(208817);const s=(0,n.getMiniTimeFrameOptions)();(0,n.getMediumTimeFrameOptions)()},571690:(e,t,i)=>{"use strict";i.d(t,{parseHtml:()=>s,parseHtmlElement:()=>r});const n=new WeakMap;function s(e,t){let i,s;return i=null==t?document.documentElement:9===t.nodeType?t.documentElement:t,n&&(s=n.get(i)),s||(s=i.ownerDocument.createRange(),s.selectNodeContents(i),n&&n.set(i,s)),s.createContextualFragment(e)}function r(e,t){const i=s(e,t),n=i.firstElementChild;return null!==n&&i.removeChild(n),n}},909627:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8"><path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="m1 6 5-4 5 4"/></svg>'}},e=>{e.O(0,[29610,1203,8410,4015,21391,89842,92483,39855,50293,37124,67103,8545,29515,52648,22854,38348,83701,58829,44002,97024,69403,67467,98038,51683,36179,90726,19881,15681],(()=>{return t=661841,e(e.s=t);var t}));e.O()}]);