window.hjSiteSettings = window.hjSiteSettings || {"site_id":3169877,"r":0.09275662946428573,"rec_value":4.096e-6,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console":false,"session_capture_console_consent":false,"anonymize_digits":false,"anonymize_emails":true,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[{"id":413330,"created_epoch_time":1666878085,"effective_show_branding":false,"skin":"light","background":"#086DD7","position":"middle_right","content":{"initial":"Help us improve by sharing your feedback.","emotion":"Was this page useful?","thankyou":"Thank you for sharing your feedback with us.","email":"Enter your email if you're happy for us to contact you about your feedback."},"language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"always","auto_screenshot":true,"targeting_percentage":100,"targeting":[{"component":"url","match_operation":"contains","pattern":"/","negate":false,"name":null,"rule_type":null},{"component":"device","match_operation":"exact","pattern":"phone","negate":false,"name":null,"rule_type":null},{"component":"device","match_operation":"exact","pattern":"tablet","negate":false,"name":null,"rule_type":null},{"component":"device","match_operation":"exact","pattern":"desktop","negate":false,"name":null,"rule_type":null}],"ask_for_consent":false,"emotion_style":"star","active_seasonal_emotion_style":null,"show_legal":false,"widget_label":"Give feedback","display_type":"button","parent_element_selector":null}],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"google_optimize":{"tag_recordings":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false}},"features":["feedback.embeddable_widget","client_script.metrics","error_reporting","heatmap.continuous.manual_retaker","settings.billing_v2","feedback.widgetV2","survey.image_question","ingestion.http.page_content","processing.separate_processing_service","client_script.safe_date"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=220)}({220:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var o,a=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;n(this,e),this.send=t,this.batchSize=r,this.flushInterval=i,this.buffer=[],this.flushTimer=null}var t,r,o;return t=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&i(t.prototype,r),o&&i(t,o),e}();function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,f=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},h={version:2,metricsUrl:(null===(o=window._hjSettings)||void 0===o?void 0:o.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{flag:"client_script.metrics",sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1},buffer:{bufferSize:40,flushInterval:2e3}},d={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},g=function(e,t,r){d.loggedMetrics[e]=u(u({},d.loggedMetrics[e]),{},c({},t,r||{}))},b=function(e){return e&&(e.task||e.reason||e.module)||"value"},p=function(e,t){var r=b(t),n=d.loggedMetrics[e],i=n&&n[r]||{};return{tagName:r,start:i.start,total:i.total}},v=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return d.isDebugEnabled?u(u(u({},r),e.extraTags),d.genericTags):r},m=function(e){if(!l)return!1;var t=d.isMetricsEnabled||d.isDebugEnabled;return e?t&&e.flush:t},w=function(e){var t=!1,r="v=".concat(h.version),n=d.isDebugEnabled?"".concat(h.metricsUrl,"?").concat(r,"&debug=true"):"".concat(h.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var o=new XMLHttpRequest;o.open("POST",n),o.timeout=1e4,o.send(i)}catch(e){}h.browser.hasDebug&&console.debug("New metric/log: ",e)},j={getState:function(){return u({},d)},start:function(){try{h.browser={hasPerformance:f(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),i=h.features,o=i.debug,s=i.metrics;d.genericTags={site_id:r},d.isDebugEnabled=n.has(o.flag)&&Math.random()<=o.sampling,d.isMetricsEnabled=n.has(s.flag)&&Math.random()<=s.sampling,l=new a(w,h.buffer.bufferSize,h.buffer.flushInterval)}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){d.loggedMetrics={}},stop:function(){d.isDebugEnabled=!1,d.isMetricsEnabled=!1,d.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,i=t.extraTags;try{var o=b(n),a=d.loggedMetrics[e],s=0;if(r)s=(a&&a[o]||0)+(r.value||1),d.loggedMetrics[e]=u(u({},a),{},c({},o,(null==r?void 0:r.flush)?0:s));else s=1;if(m(r)){var f={name:e,type:"count",value:s,tags:v({tag:n,extraTags:i})};l.add(f)}}catch(e){}},time:function(){try{if(!h.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=j.time(),n=p(e,t),i=n.start,o=n.tagName;if(i)return;return g(e,o,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,i=t.extraTags;try{var o=j.time();if(!o)return;var a,s=p(e,r),u=s.start,c=s.tagName,f=s.total;if(n){var h=n.start&&o-n.start;a=h?(f||0)+h:f;var d=n.flush?void 0:{total:a};g(e,c,d)}else a=u?o-u:void 0,g(e,c);if(a&&m(n)){var b={name:e,type:"distribution",value:Math.round(a),tags:v({tag:r,extraTags:i})};l.add(b)}return o}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=j,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),i=new RegExp(n,"i"),o=window.navigator||{userAgent:"unknown"},a=o.userAgent?o.userAgent:"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var s="http:"===window.location.protocol,u=Boolean(window._hjSettings.preview);if(s&&!u)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var l=window.document,f=l.head||l.getElementsByTagName("head")[0];hj.scriptDomain=e;var h=l.createElement("script");h.async=1,h.src=hj.scriptDomain+t,h.charset="utf-8",f.appendChild(h),c.revision="824c3a85cdeb",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.7e9fb8427bad85b32ea1.js","3169877"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.96d72a7fe2acef6f201d.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.1d68af35364c67d76b34.js"},SURVEY_ISOLATED:{js:"survey-isolated.8b5a21468351087d79cc.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.5e509d01ceff6b159b03.js"},SURVEY_INVITATION:{js:"survey-invitation.de08a27f60f8f9795b06.js"},NOTIFICATION:{js:"notification.91f72ba740a3f85b81e5.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.22b8904bc63bc1676d16.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.8565c4f6bd109164b3b7.js"},SENTRY:{js:"sentry.0e5dadd9b6b1a6ca4d1e.js"}}}});
