var ef_userid=0,ef_pixel_host="pixel.everesttech.net",ef_js_host="www.everestjs.net",ef_event_type="pageview",ef_transaction_properties="",ef_impression_properties="",ef_pageview_properties="",ef_segment="",ef_search_segment="",ef_transaction_object={},ef_in_floodlight=0,ef_pixel_details_timeout=3E4,ef_register_poll_interval=100,ef_pixel_params={gsurfer:"__EFGSURFER__",google:"__EFGCK__",time:"__EFTIME__",is_fb_cookie_synced:"__EFFB__",throttleCookie:"__EFSYNC__"},ef_replace_fb_elements=1,ef_fb_appid=
"",ef_fb_is_app=0,ef_app_data="",ef_debug=0,ef_allow_3rd_party_pixels=1,__ev_sid=0,ef_impression_types=["impression","impression_served"],ef_expected_tracking_params=["ev_cl","ev_sid"],ef_access_top_url=0,__ef_pixel_details_iframe_added=0,ef_perc_gsurfer_migration=100;function __ef_log(){ef_debug&&console.log.apply(this,__ef_log.arguments)}var __ef_tol=[];function add_ef_transaction_property(){__ef_tol[__ef_tol.length]=ef_transaction_object;ef_transaction_object={}}
function __ef_get_script_src(a){"undefined"==typeof a&&(path="/static/st\\.v2\\.js(#|\\?|\\s*$)",host=ef_js_host.replace(/\./g,"\\."),a=host+path);script_tags=document.getElementsByTagName("script");a=new RegExp("^https?://"+a);for(var b=0;b<script_tags.length;b++){var c=script_tags[b].getAttribute("src");if(c&&c.match(a))return c}return""}var __loc=document.location.toString(),__ref=document.referrer,__url=document.location.href,__script_src=__ef_get_script_src(),__ad_script_src=__ef_get_script_src("[^.]+.everesttech.net/.*/is/u=https?://www.everestads.net/.*/efjs_.*$|https?://[^.]+.everesttech.net/ads/.*$");
function extend_hash(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}
function __parseUri(a,b){for(var c=__parseUri.options,d=c.parser[c.strictMode?"strict":"loose"].exec(a),e={},g=c.key.length;g--;)e[c.key[g]]=d[g]||"";e.queryKey={};e.query.replace(b?c.q.skip_bang_parser:c.q.parser,function(a,b,c){b&&(e.queryKey[b]=c)});e.anchorKey={};e.anchor.replace(b?c.q.skip_bang_parser:c.q.parser,function(a,b,c){b&&(e.anchorKey[b]=c)});e.params={};extend_hash(e.params,e.anchorKey);extend_hash(e.params,e.queryKey);return e}
function __ef_parse_query_string(a){var b={};a.replace(__parseUri.options.q.parser,function(a,d,e){d&&(b[d]=e)});return b}__parseUri.options={strictMode:!1,key:"source protocol authority host port relative path directory file query anchor".split(" "),q:{parser:/(?:^|&)([^&=]*)=?([^&]*)/g,skip_bang_parser:/(?:^|&)([^&=]*)=?((?:!.*$)|(?:[^&]*))/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/(([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?(([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
function __unescape_values(a){var b={};for(prop in a)b[prop]=unescape(a[prop]);return b}function __is_ef_domain(a){return a.match(/((efrontier\.com)|((everesttech|everestads|everestjs)\.net))$/i)}__parsed_loc=__parseUri(__loc,0);__parsed_ref=__parseUri(__ref,0);__parsed_url=__parseUri(__url,0);__parsed_script_src=__parseUri(__script_src,0);__parsed_ad_script_src=__parseUri(__ad_script_src,0);
var __dl=__parsed_loc.host,__ql=__unescape_values(__is_ef_domain(__dl)?__parseUri(__loc,1).params:__parsed_ref.queryKey),__qr=__unescape_values(__parsed_ref.queryKey),__qu=__unescape_values(__parsed_url.params),__qs=__unescape_values(__parsed_script_src.params),__qa=__unescape_values(__parsed_ad_script_src.params),__prot="https:"==document.location.protocol?"https:":"http:";
function __ef_create_script_tag(a){var b=document.createElement("script");b.setAttribute("language","Javascript");b.setAttribute("type","text/javascript");b.setAttribute("src",a);return b}function __ef_create_invisible_iframe(a,b){var c=document.createElement("iframe");void 0!==b&&c.setAttribute("id",b);void 0!==a&&c.setAttribute("src",a);c.setAttribute("height","0");c.setAttribute("width","0");c.setAttribute("frameborder","0");c.style.display="none";return c}
function __ef_create_tracking_pixel(a){var b=new Image(1,1);b.style.display="none";b.src=a;return b}function __ef_add_to_dom(a){__ef_log("EFLOG: Adding element to DOM: (",a.tagName,") ",a);document.body?document.body.appendChild(a):window.addEventListener?window.addEventListener("load",function(){document.body.appendChild(a)},!1):window.attachEvent("onload",function(){document.body.appendChild(a)})}
function __ef_transmit_data(a,b){"complete"==document.readyState||"3006"==String(ef_userid)||"3015"==String(ef_userid)?__ef_transmit_data_actual(a,b):window.addEventListener?window.addEventListener("load",function(){__ef_transmit_data_actual(a,b)},!1):window.attachEvent("onload",function(){__ef_transmit_data_actual(a,b)})}
function __ef_replace_dom_element(a,b,c){__ef_log("EFLOG: Replacing DOM element: (",b.tagName,") ",b," with: (",c.tagName,") ",c," under root: (",a.tagName,") ",a);a.replaceChild(c,b)}function __ef_url_args(a,b,c,d,e){encode_args=e?!1:!0;if(!(a instanceof Object))return a;b||(b=encodeURIComponent);c||(c="&");e=[];for(var g=__ef_get_sorted_attributes(a),h=0;h<g.length;h++){var k=g[h];e[e.length]=d&&!a[k]?k:encode_args?[k,b(a[k])].join("="):[k,a[k]].join("=")}return e.join(c)}
function __ef_serialize_event_args(a){var b=__ef_url_args({ev___loc:__loc,ev___ref:__ref});return b=(a=__ef_url_args(a))?[a,b].join("&"):b}function __ef_serialize_event_args_with_amp(a,b){return __ef_url_args(a,b,"&amp;")}function __ef_serialize_doubleclick(a){return __ef_url_args(a,null,null,1)}
function __ef_construct_url(a,b,c,d,e,g,h,k,f,n){var l="";a&&b&&(l=[a,b].join("//"));l=[l].concat(c).join("/");if(a&&!h&&"https:"==__prot&&"https:"!=a)throw __ef_log("EFERR:Trying to create a "+a+" URL in a https environment"),"Trying to create a "+a+" URL in a https environment";if(b&&!ef_allow_3rd_party_pixels&&-1==__ef_get_array_index([ef_pixel_host,ef_js_host],b))throw __ef_log("EFERR:Trying to add 3rd party url: "+b),"Trying to add 3rd party url: "+b;g||(g=__ef_url_args);k||(k="?");b=a=null;
d&&(a=g(d));n&&(b=g(n,null,null,0,!0));a&&b?l=[l,[b,a].join(f)].join(k):a?l=[l,a].join(k):b&&(l=[l,b].join(k));e&&(l=[l,g(e)].join("#"));return l}function __ef_generate_js_url(a,b){var c=["dl"],c=c.concat(a);c[c.length]=[b,"js"].join(".");c=__ef_construct_url(__prot,ef_js_host,c);return __ef_construct_url(__prot,ef_pixel_host,[ef_userid,"js"],{url:c})}function __cat(a,b){return a+".*(\\?|&)"+b+"=.*"}
var __search_patterns=[__cat("maynard","q"),__cat("google","q"),__cat("yahoo","p"),__cat("msn","q"),__cat("bing","q"),__cat("aol","query"),__cat("aol","encquery"),__cat("lycos","query"),__cat("ask","q"),__cat("altavista","q"),__cat("netscape","query"),__cat("cnn","query"),__cat("looksmart","qt"),__cat("about","terms"),__cat("mamma","query"),__cat("alltheweb","q"),__cat("gigablast","q"),__cat("voila","rdata"),__cat("virgilio","qs"),__cat("live","q"),__cat("baidu","wd"),__cat("alice","qs"),__cat("yandex",
"text"),__cat("najdi","q"),__cat("aol","q"),__cat("club-internet","query"),__cat("mama","query"),__cat("seznam","q"),__cat("search","q"),__cat("wp","szukaj"),__cat("onet","qt"),__cat("netsprint","q"),__cat("google.interia","q"),__cat("szukacz","q"),__cat("yam","k"),__cat("pchome","q"),__cat("kvasir","searchExpr"),__cat("sesam","q"),__cat("ozu","q"),__cat("terra","query"),__cat("nostrum","query"),__cat("mynet","q"),__cat("ekolay","q"),__cat("search.ilse","search_for")];
function __is_search_click(){var a,b;for(a=0;a<__search_patterns.length;a++)if(b=__search_patterns[a],__ref.match(b))return 1;if(void 0!==__ql.ef_id||0!=ef_in_floodlight&&void 0!==__qr.ef_id)if(a=void 0!==__ql.ef_id?__ql.ef_id.split(":"):__qr.ef_id.split(":"),"EF_IDV2"==a[0]){if(6<=a.length&&"s"==a[5])return 1}else if(a=a[a.length-1],1==a.length){if("s"==a)return 1}else return 1;return 0}
function __ef_is_postmessage_supported(){return(window.addEventListener||window.attachEvent)&&window.postMessage}
function ef_fire_pixels(){var a=__ef_get_tracking_params(ef_expected_tracking_params),b={};ef_app_data&&"<app_data>"!=ef_app_data?(a=decodeURIComponent(decodeURIComponent(ef_app_data)),extend_hash(b,__ef_parse_query_string(a))):__is_empty_dictionary(a)||extend_hash(b,a);("pageview"==ef_event_type||"transaction"==ef_event_type&&2504==ef_userid)&&ef_pageview_properties&&extend_hash(b,__ef_parse_query_string(ef_pageview_properties));__ef_is_postmessage_supported()||(b.ev_postmessage="0");("pageview"==
ef_event_type||"transaction"==ef_event_type&&2504==ef_userid||!__is_empty_dictionary(b))&&__ef_transmit_data("pageview",b);if("impression"==ef_event_type)__ef_transmit_data("impression",__ef_parse_query_string(ef_impression_properties));else if("transaction"==ef_event_type)if(ef_transaction_properties)__ef_transmit_data("transaction",__ef_parse_query_string(ef_transaction_properties));else{b={};for(a=0;a<__ef_tol.length;a++)for(var c=__ef_tol[a],d=__ef_get_sorted_attributes(c),e=0;e<d;e++){var g=
d[e];b[g]=c[g]}__ef_transmit_data("transaction",b)}ef_segment&&(__ef_transmit_data("segment javascript",ef_segment),ef_search_segment&&__is_search_click()&&__ef_transmit_data("segment javascript",ef_search_segment));__ef_transmit_data("appnexus cookie matching");__ef_transmit_data("bluekai cookie matching");__ef_transmit_data("openx cookie matching");__ef_transmit_data("rubicon cookie matching");__ef_transmit_data("demdex cookie matching");__ef_transmit_data("fbx cookie matching");__ef_transmit_data("pubmatic cookie matching");
__ef_transmit_data("casale cookie matching")}function __is_empty_dictionary(a){for(var b in a)return!1;return!0}function __ef_get_tracking_params(a){var b=null,c=null;try{ef_access_top_url&&(b=top.location.href,c=__unescape_values(__parseUri(b,0).params))}catch(d){}for(var b=c?c:__qu,c={},e=0;e<a.length;e++)b.hasOwnProperty(a[e])&&(c[a[e]]=b[a[e]]);return c}function isAllowedTraffic(a){return Math.floor(100*Math.random())<a?!0:!1}
function effp(){var a={1180:100,2384:1,3197:100,3219:100,2923:100,2385:100}[ef_userid];"undefined"!=typeof a&&isAllowedTraffic(a)?"complete"==document.readyState?ef_stv3_proxy():window.addEventListener?window.addEventListener("load",ef_stv3_proxy,!1):window.attachEvent("onload",ef_stv3_proxy):(__ef_details(),ef_fire_pixels())}
function ef_stv3_proxy(){add_ef_transaction_property();var a={userid:ef_userid,pixelHost:ef_pixel_host,jsHost:ef_js_host,eventType:ef_event_type,sid:__ev_sid,fbIsApp:ef_fb_is_app,appData:ef_app_data,pageviewProperties:ef_pageview_properties,transactionProperties:ef_transaction_properties,transactionObjectList:__ef_tol,impressionProperties:ef_impression_properties,segment:ef_segment,searchSegment:ef_search_segment,inFloodlight:ef_in_floodlight,debug:ef_debug,allow3rdPartyPixels:ef_allow_3rd_party_pixels,
accessTopUrl:ef_access_top_url},b=function(){EF.init(a);EF.main()};window.EF=window.EF||{};if(window.EF.main)b();else if(window.EF.onloadCallbacks=window.EF.onloadCallbacks||[],window.EF.onloadCallbacks[window.EF.onloadCallbacks.length]=b,!window.EF.jsTagAdded){b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://www.everestjs.net/static/st.v3.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);window.EF.jsTagAdded=1}}
function ef_get_pixel_details(a){}function __ef_EventTarget(){this._listeners={};this._sticky_events={}}
__ef_EventTarget.prototype={constructor:__ef_EventTarget,addListener:function(a,b){if(a in this._sticky_events){var c=this._sticky_events[a];b.call(c.target,c)}else"undefined"==typeof this._listeners[a]&&(this._listeners[a]=[]),this._listeners[a].push(b)},fire:function(a,b){"string"==typeof a&&(a={type:a});a.target||(a.target=this);if(!a.type)throw Error("Event object missing 'type' property.");b&&(this._sticky_events[a.type]=a);if(this._listeners[a.type]instanceof Array)for(var c=this._listeners[a.type],
d=0,e=c.length;d<e;d++)c[d].call(a.target,a)},removeListener:function(a,b){if(this._listeners[a]instanceof Array)for(var c=this._listeners[a],d=0,e=c.length;d<e;d++)if(c[d]===b){c.splice(d,1);break}}};var __ef_events=new __ef_EventTarget,__ef_pixel_details=null,__ef_first_efid=null,__ef_gsurfer_id=null,__ef_efid=null,__ef_like_fb_ref=null;function __ef_get_sorted_attributes(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&(b[b.length]=c);b.sort();return b}
function __ef_get_array_index(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1}function __ef_element_has_attribute(a,b){for(j=0;j<a.attributes.length;j++){var c=a.attributes[j];if(c.specified&&c.name==b)return!0}return!1}function __ef_add_listener(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a)}function __ef_remove_listener(a){window.addEventListener?window.removeEventListener("message",a,!1):window.detachEvent("onmessage",a)}
function array_shallow_copy(a){ret=[];for(var b=0;b<a.length;b++)ret[b]=a[b];return ret}function dict_shallow_copy(a){ret={};for(var b in a)ret[b]=a[b];return ret}function __ef_get_ancestor_nodes(a){for(var b=[];a;a=a.parentNode)b.push(a);return b}
var ef_pixel_policy_permitted={"adx rtb impression":["adx cookie matching","adx segment mapping"],"adx exchange impression":["adx cookie matching","adx segment mapping"],"admeld impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;fbx cookie matching".split(";"),"appnexus impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;demdex cookie matching;fbx cookie matching;casale cookie matching".split(";"),
"rmx impression":["rmx segment mapping","bluekai cookie matching","demdex cookie matching"],"fox impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;demdex cookie matching;fbx cookie matching".split(";"),"max impression":[],"rubicon impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;demdex cookie matching;fbx cookie matching".split(";"),
"openx impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;demdex cookie matching;fbx cookie matching".split(";"),"pubmatic impression":"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;bluekai cookie matching;demdex cookie matching;fbx cookie matching".split(";"),
"casale impression":["adx cookie matching","casale cookie matching"],"fb impression":["fbx cookie matching"],"fb app":["fbx cookie matching"],"tracer tag":[],pageview:"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;demdex cookie matching;fbx cookie matching;casale cookie matching".split(";"),transaction:"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;demdex cookie matching;fbx cookie matching;casale cookie matching".split(";"),
segmentation:"adx cookie matching;adx segment mapping;admeld cookie matching;appnexus cookie matching;rmx segment mapping;fox segment mapping;rubicon cookie matching;openx cookie matching;pubmatic cookie matching;demdex cookie matching;fbx cookie matching;casale cookie matching".split(";"),"yahoo premium pub":[],"cookie matching html":[],"*":"pageview;segment javascript;transaction;impression;ef segment mapping;surfer action".split(";")};
function __ef_check_url_params(a,b){return __qa.hasOwnProperty(a)?-1!=__ef_get_array_index(b,__qa[a]):__qu.hasOwnProperty(a)&&-1!=__ef_get_array_index(b,__qu[a])}function __ef_check_global_sid(a){return-1!=__ef_get_array_index(a,String(__ev_sid))&&-1!=__ef_get_array_index(ef_impression_types,ef_event_type)}
var ef_context_checks={"adx rtb impression":function(){return __ef_check_url_params("ev_rs",["1"])},"adx exchange impression":function(){return __ef_check_global_sid(["5"])},"admeld impression":function(){return __ef_check_url_params("ev_rs",["2"])},"appnexus impression":function(){return __ef_check_url_params("ev_rs",["3"])},"rmx impression":function(){return __ef_check_global_sid(["13"])},"fox impression":function(){return __ef_check_global_sid(["46"])},"max impression":function(){return __ef_check_global_sid(["93"])||
__ef_check_url_params("ev_rs",["4"])},"rubicon impression":function(){return __ef_check_url_params("ev_rs",["5"])},"openx impression":function(){return __ef_check_url_params("ev_rs",["6"])},"pubmatic impression":function(){return __ef_check_url_params("ev_rs",["7"])},"casale impression":function(){return __ef_check_url_params("ev_rs",["10"])},"fb impression":function(){return __ef_check_global_sid(["77"])||__ef_check_url_params("ev_rs",["9"])},"fb app":function(){return ef_fb_is_app},pageview:function(){return"pageview"==
ef_event_type},transaction:function(){return"transaction"==ef_event_type},segmentation:function(){return"segmentation"==ef_event_type},"yahoo premium pub":function(){return __ef_check_url_params("ev_sid",["54"])},"cookie matching html":function(){return"g_u_if_c.html"==__parsed_url.file}};function __ef_get_1x1_png_uri(a){return a?__ef_construct_url(null,null,["1x1"]):__ef_construct_url(__prot,ef_pixel_host,["1x1"])}
var ef_event_handlers={"admeld cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&__ef_pixel_details.hasOwnProperty("exp_time")&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a={admeld_adprovider_id:"566",expiration:__ef_pixel_details.exp_time+"days"};isAllowedTraffic(ef_perc_gsurfer_migration)?a.external_user_id=__ef_pixel_details.gsurfer.replace(/@/g,
"_")+"."+__ef_pixel_details.google:a.external_user_id=__ef_pixel_details.google;var c=__ef_construct_url("http:","tag.admeld.com",["match"],a)}catch(d){return}__ef_fire("img",c)}})},"rubicon cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&__ef_pixel_details.hasOwnProperty("exp_time")&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a=
{v:"11782",nid:"2181",expires:__ef_pixel_details.exp_time};isAllowedTraffic(ef_perc_gsurfer_migration)?a.put=__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google:a.put=__ef_pixel_details.google;var c=__ef_construct_url("https:","pixel.rubiconproject.com",["tap.php"],a)}catch(d){return}__ef_fire("img",c)}})},"openx cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&
__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a={id:"537072980"};isAllowedTraffic(ef_perc_gsurfer_migration)?a.val=__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google:a.val=__ef_pixel_details.google;var c=__ef_construct_url("https:","us-u.openx.net",["w","1.0","sd"],a)}catch(d){return}__ef_fire("img",c)}})},"appnexus cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&
__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a={entity:"51"};isAllowedTraffic(ef_perc_gsurfer_migration)?a.code=__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google:a.code=__ef_pixel_details.google;var c=__ef_construct_url("https:","secure.adnxs.com",["setuid"],a)}catch(d){return}__ef_fire("img",c)}})},"pubmatic cookie matching":function(a){__ef_events.addListener("pixel_details_ready",
function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a={};isAllowedTraffic(ef_perc_gsurfer_migration)?a.piggybackCookie=__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google:a.piggybackCookie=__ef_pixel_details.google;var c=__ef_construct_url("http:","image2.pubmatic.com",["AdServer","Pug"],a,null,null,null,null,"&",{vcode:"bz0yJnR5cGU9MSZjb2RlPTMwNzAmdGw9MTI5NjAw"})}catch(d){return}__ef_fire("img",
c)}})},"bluekai cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a=__ef_construct_url("https:","stags.bluekai.com",["site","4046"],{id:__ef_pixel_details.google+":"+__ef_pixel_details.gsurfer})}catch(c){return}__ef_fire("img",a)}})},"demdex cookie matching":function(a){__ef_events.addListener("pixel_details_ready",
function(){if(__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a=__ef_construct_url("https:","dpm.demdex.net",["ibs"],{dpid:"411",dpuuid:__ef_pixel_details.google+"|"+__ef_pixel_details.gsurfer},null,null,null,":")}catch(c){return}__ef_fire("img",a)}})},"casale cookie matching":function(a){__ef_events.addListener("pixel_details_ready",function(){if(__ef_pixel_details.hasOwnProperty("google")&&
__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a={cm_dsp_id:"71"};isAllowedTraffic(ef_perc_gsurfer_migration)?a.external_user_id=__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google:a.external_user_id=__ef_pixel_details.google;var c=__ef_construct_url("https:","dsum-sec.casalemedia.com",["rum"],a)}catch(d){return}__ef_fire("img",c)}})},"fbx cookie matching":function(a){__ef_events.addListener("pixel_details_ready",
function(){if(__ef_pixel_details.hasOwnProperty("is_fb_cookie_synced")&&0==__ef_pixel_details.is_fb_cookie_synced&&__ef_pixel_details.hasOwnProperty("google")&&__ef_pixel_details.hasOwnProperty("gsurfer")&&__ef_pixel_details.google!=__ef_pixel_details.gsurfer&&"OPTOUT"!=__ef_pixel_details.gsurfer){try{var a=__ef_construct_url("https:","www.facebook.com",["fr","u.php"],{p:"293855774055796",m:__ef_pixel_details.gsurfer.replace(/@/g,"_")+"."+__ef_pixel_details.google,t:"2592000"})}catch(c){return}__ef_fire("img",
a)}})},"adx segment mapping":function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,"www.googleadservices.com",["pagead","conversion",a.se_conversion_id,""],{label:a.segment_id,guid:"ON",script:"0"},null,__ef_serialize_event_args_with_amp)}catch(c){return}__ef_fire("img",b)}})},"ef segment mapping":function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=
__ef_construct_url(__prot,a.pixel_prefix+".everesttech.net",[ef_userid,"s"],{s:a.segment_id,sids:a.pixels_fired})}catch(c){return}__ef_fire("img",b)}})},"rmx segment mapping":function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,"ad.yieldmanager.com",["pixel"],{id:a.segment_id,t:"2"})}catch(c){return}__ef_fire("img",b)}})},"fox segment mapping":function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=
__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,"trgc.opt.fimserve.com",["fp.gif"],{pixelid:a.segment_id,rnd:a.cache_buster})}catch(c){return}__ef_fire("img",b)}})},pageview:function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,ef_pixel_host,[ef_userid,"v"],a,null,__ef_serialize_event_args)}catch(c){return}__ef_fire("img",b)}})},transaction:function(a){__ef_events.addListener("pixel_details_ready",
function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,ef_pixel_host,[ef_userid,"t"],a)}catch(c){return}__ef_fire("img",b)}})},impression:function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,ef_pixel_host,[ef_userid,"i"],a,null,__ef_serialize_event_args)}catch(c){return}__ef_fire("img",b)}})},"segment javascript":function(a){ef_allow_3rd_party_pixels&&__ef_events.addListener("pixel_details_ready",
function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=[ef_userid,a].join("-"),c=__ef_generate_js_url([ef_userid],b)}catch(d){return}__ef_fire("js",c)}})},"surfer action":function(a){__ef_events.addListener("pixel_details_ready",function(){if("OPTOUT"!=__ef_pixel_details.gsurfer){try{var b=__ef_construct_url(__prot,ef_pixel_host,[ef_userid,"a"],a,null)}catch(c){return}__ef_fire("img",b)}})}};
function __ef_fire(a,b){if("img"==a)var c=__ef_create_tracking_pixel(b);else"js"==a?c=__ef_create_script_tag(b):"iframe"==a&&(c=__ef_create_invisible_iframe(b));__ef_add_to_dom(c)}function __ef_transmit_data_actual(a,b){if(__ef_permitted(a))ef_event_handlers[a](b)}function __ef_permitted(a){if(-1!=__ef_get_array_index(ef_pixel_policy_permitted["*"],a))return!0;var b=__ef_get_context();try{return-1!=__ef_get_array_index(ef_pixel_policy_permitted[b],a)}catch(c){return!1}}
function __ef_get_context(){var a=[],b;for(b in ef_context_checks)a[a.length]=b;a.sort();for(var c=0;c<a.length;c++)if(b=ef_context_checks[a[c]],b())return a[c];return"unrecognized context"}function __ef_pixelize_uri(a,b,c,d){a={url:a};!c&&__ef_efid&&(a.efid=__ef_efid);d&&(a.ev_gb=0);return __ef_construct_url(__prot,ef_pixel_host,[b?b:ef_userid,"gr"],a)}
function __ef_details(){"complete"==document.readyState?__ef_details_deferred():window.addEventListener?window.addEventListener("load",function(){__ef_details_deferred()},!1):window.attachEvent("onload",function(){__ef_details_deferred()})}
function __ef_details_deferred(){function a(b){if(-1!=__ef_get_array_index(["http://"+ef_js_host,"https://"+ef_js_host],b.origin)){b=__parseUri(b.data);var c=__ef_get_sorted_attributes(ef_pixel_params);for(attribute_name in b.params){var h=b.params[attribute_name];-1!=__ef_get_array_index(c,attribute_name)&&(null===__ef_pixel_details&&(__ef_pixel_details={}),-1!=__ef_get_array_index(c,attribute_name)&&h!=ef_pixel_params[attribute_name]&&(__ef_pixel_details[attribute_name]=h))}__ef_pixel_details.hasOwnProperty("gsurfer")&&
__ef_pixel_details.hasOwnProperty("google")&&(__ef_pixel_details.exp_time=__ef_pixel_details.gsurfer==__ef_pixel_details.google?"1":"30");__ef_efid=__ef_pixel_details.gsurfer+":"+__ef_pixel_details.time+":f";clearTimeout(d);__ef_remove_listener(a);__ef_events.fire("pixel_details_ready",!0)}}if(!__ef_is_postmessage_supported())__ef_events.fire("get_pixel_details_timeout",!0);else if(!__ef_pixel_details_iframe_added){var b=__ef_permitted("adx cookie matching"),c=__ef_construct_url(__prot,ef_js_host,
["static","pixel_details.html"],null,ef_pixel_params),b=__ef_pixelize_uri(c,"1",1,!b),b=__ef_create_invisible_iframe(b,"__ef_pixel_details"),d=setTimeout("__ef_events.fire('get_pixel_details_timeout', true)",ef_pixel_details_timeout);__ef_add_listener(a);__ef_add_to_dom(b);__ef_pixel_details_iframe_added=1}}function __ef_extract_first_efid(){var a=/^([^\/]+)\/.*$/;if(__qu.hasOwnProperty("fb_ref")){var b=unescape(__qu.fb_ref);a.test(b)&&(__ef_first_efid=b.replace(a,"$1"))}}
function __ef_get_ef_like_fb_ref(){__ef_like_fb_ref=null;null!=__ef_first_efid&&null!=__ef_efid?__ef_like_fb_ref=__ef_first_efid+"/"+__ef_efid.replace(/@/g,"_"):null!=__ef_efid&&(__ef_like_fb_ref=__ef_efid.replace(/@/g,"_")+"/");return __ef_like_fb_ref}
function __ef_register_fb_domload_event(){var a=function(){__ef_events.fire("fb_domload",!0)};__ef_register_fb_onload_poll_id=setInterval(function(){try{FB.Dom.ready(a),clearInterval(__ef_register_fb_onload_poll_id)}catch(b){}},ef_register_poll_interval)}function __ef_map(a,b){for(var c=[],d=0;d<b.length;d++)c[c.length]=a(b[d]);return c}function __ef_any(a){for(var b=0;b<a.length;b++)if(a[b])return!0;return!1}
function __ef_check_fb_tag_name(a,b){try{if(a.tagName.toLowerCase()=="fb:"+b||a.tagName.toLowerCase()==b)return!0}catch(c){}return!1}function __ef_check_div_class(a,b){try{if("div"==a.tagName.toLowerCase()){var c=__ef_get_div_class_list(a);return __ef_any(__ef_map(function(a){return a.toString().toLowerCase()=="fb-"+b},c))}}catch(d){}return!1}function __ef_get_div_class_list(a){var b=__ef_object_values(a.classList);b.length||(a=a.className)&&(b=a.split(/\s+/g));return b}
function __ef_object_values(a){for(var b=[],c=__ef_get_sorted_attributes(a),d=0;d<c.length;d++)b[b.length]=a[c[d]];return b}
function __ef_replace_div_elements(a){var b="fb-"+a;a="fb:ef"+a;for(var c=document.getElementsByTagName("div"),d=[],e=0;e<c.length;e++){var g=__ef_get_div_class_list(c[e]);g&&-1!=__ef_get_array_index(g,b)&&(d[d.length]=c[e])}for(e=0;e<d.length;e++){b=d[e];c=document.createElement(a);for(g=0;g<b.attributes.length;g++){var h=b.attributes[g];if(h.specified&&0==h.name.toLowerCase().indexOf("data-")){var k=b.attributes[g].name.replace(/^data-/i,"");c.setAttribute(k,h.value)}}__ef_replace_dom_element(b.parentNode,
b,c)}}function __ef_replace_xfbml_elements(a){var b="fb:ef"+a,c=document.getElementsByTagName("fb:"+a);c.length||(c=document.getElementsByTagName(a));element_tags_copy=array_shallow_copy(c);for(a=0;a<element_tags_copy.length;a++){for(var c=element_tags_copy[a],d=document.createElement(b),e=0;e<c.attributes.length;e++){var g=c.attributes[e];g.specified&&0!=g.name.search("_")&&"class"!=g.name&&d.setAttribute(g.name,g.value)}__ef_replace_dom_element(c.parentNode,c,d)}}
function __ef_replace_iframe_elements(a){function b(b){return __ef_check_fb_tag_name(b,a)}function c(b){return __ef_check_div_class(b,a)}for(var d="/plugins/"+a+".php",e="fb:ef"+a,g=document.getElementsByTagName("iframe"),g=array_shallow_copy(g),h=0;h<g.length;h++){var k=g[h],f=__ef_get_ancestor_nodes(k);if(__ef_element_has_attribute(k,"src")&&!__ef_any(__ef_map(b,f))&&!__ef_any(__ef_map(c,f))&&(f=k.getAttribute("src"),f=__parseUri(f),"www.facebook.com"==f.host&&f.path==d)){var n=document.createElement(e),
l;for(l in f.params)n.setAttribute(l,f.params[l]);__ef_replace_dom_element(k.parentNode,k,n)}}}function __ef_like_callback(a,b){var c={sid:"45",ev_rs:"3",action:"like",ev_liked:b,href:decodeURIComponent(a)};__ef_like_fb_ref&&(c.ev_fb_ref=__ef_like_fb_ref.replace(/_/g,"@"));__ef_transmit_data("surfer action",c)}function __ef_fb_events_main(){FB.Event.subscribe("edge.create",function(a){__ef_like_callback(a,"1")});FB.Event.subscribe("edge.remove",function(a){__ef_like_callback(a,"0")})}
function __ef_fb_elements_main(){function a(){for(var a=[{ns:"fb",name:"eflike",class_name:"XFBML.EFLike",child:"fb:like",custom_handler:function(a,b){__ef_like_fb_ref=__ef_get_ef_like_fb_ref();null!=__ef_like_fb_ref&&b.setAttribute("ref",__ef_like_fb_ref)}}],b=0;b<a.length;b++)(function(){var c=a[b];FB.subclass(c.class_name,"XFBML.Element",null,{process:function(){if(!this._done){for(var a=document.createElement(c.child),b=0;b<this.dom.attributes.length;b++){var d=this.dom.attributes[b];d.specified&&
0!=d.name.search("_")&&a.setAttribute(d.name,d.value)}c.custom_handler(this,a);this.dom.appendChild(a);this._done=!0;this.fire("render");__ef_log("EFLOG: Rendered element: (",this.dom.tagName,") ",this.dom," to (",a.tagName,") ",a)}}});FB.XFBML.registerTag({xmlns:c.ns,localName:c.name,className:["FB",c.class_name].join(".")})})();FB.XFBML.parse();FB.XFBML.parse()}if(ef_replace_fb_elements)for(var b=["like"],c=0;c<b.length;c++)__ef_replace_xfbml_elements(b[c]),__ef_replace_div_elements(b[c]),__ef_replace_iframe_elements(b[c]);
__ef_events.addListener("pixel_details_ready",a);__ef_events.addListener("get_pixel_details_timeout",a)}function __ef_fb_setup(){ef_fb_appid&&FB.init({appId:ef_fb_appid});__ef_fb_elements_main();__ef_fb_events_main()}function effb(){__ef_transmit_data("pageview","");__ef_extract_first_efid();__ef_register_fb_domload_event();__ef_events.addListener("fb_domload",__ef_fb_setup)}function efsocial(){effb()}
function flash_detect(){var a=0,b=navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0;if(b){var b=b.description.split(" "),c;for(c=0;c<b.length;c++)if(!isNaN(b[c])){8<=parseInt(b[c])&&(a=1);break}}else navigator.userAgent&&0<=navigator.userAgent.indexOf("MSIE")&&(0<=navigator.userAgent.indexOf("Windows 95")||0<=navigator.userAgent.indexOf("Windows 98")||0<=navigator.userAgent.indexOf("Windows NT"))&&(document.write('<script language="VBScript"> \n'),
document.write("on error resume next \n"),document.write('ShockMode = (Isobject(Createobject("ShockwaveFlash.ShockwaveFlash.8")))\n'),document.write("\x3c/script>\n"));return a?!0:!1}
function ef_flash(a,b,c,d,e,g,h,k,f,n,l,r){void 0==f.ev_cu&&void 0==f.ev_cud&&"https:"==__prot&&(a=a.replace(/^https?:/,__prot));var m="",p=0;void 0!==f.ev_cu?m=f.ev_cu:void 0!==f.ev_cud&&(m=f.ev_cud,p=1);__ef_impressionid="";void 0!==f.ev_ii&&(__ef_impressionid=f.ev_ii);__ef_log("CLICK URL: "+m);__ef_log("ev_ii: "+__ef_impressionid);a=a+"&ev_ii="+__ef_impressionid+"&ev_rs="+(void 0!==f.ev_rs?f.ev_rs:"");f=String(f.ev_cb||__ef_get_efuniq_epoch(f.ev_ii));var q=__parseUri(a,0).params;f={cache_buster:f,
campaignid:q.ev_ci,creativeid:q.ev_cri,adid:q.ev_ai};a=__ef_substitute_macros(a,f);m=__ef_substitute_macros(m,f);f.click_thru_url=a;l=__ef_substitute_macros(l,f);f=escape(a);q=a;""!=m&&(f=m+(p?escape(a):escape(escape(a))),q=unescape(m)+(p?a:escape(a)));m=0;if(p=navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]?navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin:0)for(p=p.description.split(" "),a=0;a<p.length;a++){if(!isNaN(p[a])){8<=parseInt(p[a])&&(m=1);break}}else navigator.userAgent&&
0<=navigator.userAgent.indexOf("MSIE")&&(0<=navigator.userAgent.indexOf("Windows 95")||0<=navigator.userAgent.indexOf("Windows 98")||0<=navigator.userAgent.indexOf("Windows NT"))&&(document.write('<script language="VBScript"> \n'),document.write("on error resume next \n"),document.write('ShockMode = (Isobject(Createobject("ShockwaveFlash.ShockwaveFlash.8")))\n'),document.write("\x3c/script>\n"));__ef_creative=m?'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="banner" width="'+d+'" height="'+
e+'"><param name="flashvars" value="'+g+"="+f+'"/><param name="movie" value="'+b+'" /><param name="wmode" value="transparent" /><param name="Autostart" value="true" /><param name="Quality" value="high" /><param name="allowScriptAccess" value="always" /><embed wmode="transparent" src="'+b+'" swLiveConnect="TRUE" width="'+d+'" height="'+e+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" quality="high" allowScriptAccess="always" flashvars="'+
g+"="+f+'"></embed></object>':'<a href="'+q+'" target="_blank"><img src="'+c+'" border="0" width="'+k+'" height="'+h+'" alt="" galleryimg="no" /></a>';document.write(__ef_creative+n+l);ef_event_type="impression_served";__ev_sid=r;effp()}
function ef_img(a,b,c,d,e,g,h,k){void 0==e.ev_cu&&void 0==e.ev_cud&&"https:"==__prot&&(a=a.replace(/^https?:/,__prot));var f="",n=0;void 0!==e.ev_cu?f=e.ev_cu:void 0!==e.ev_cud&&(f=e.ev_cud,n=1);__ef_impressionid="";void 0!==e.ev_ii&&(__ef_impressionid=e.ev_ii);a=a+"&ev_ii="+__ef_impressionid+"&ev_rs="+(void 0!==e.ev_rs?e.ev_rs:"");e=String(e.ev_cb||__ef_get_efuniq_epoch(e.ev_ii));var l=__parseUri(a,0).params;e={cache_buster:e,campaignid:l.ev_ci,creativeid:l.ev_cri,adid:l.ev_ai};a=__ef_substitute_macros(a,
e);f=__ef_substitute_macros(f,e);e.click_thru_url=a;h=__ef_substitute_macros(h,e);e=a;""!=f&&(e=unescape(f)+(n?a:escape(a)));__ef_creative='<a href="'+e+'" target="_blank"><img src="'+b+'" border="0" width="'+c+'" height="'+d+'" alt="" galleryimg="no" /></a>';document.write(__ef_creative+g+h);__ev_sid=k;ef_event_type="impression_served";effp()}
function __ef_get_efuniq_epoch(a){try{for(var b=[],c=0;6>c;c++)b[c]=__ef_get_array_index("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-",a[c]);return b[0]<<26|b[1]<<20|b[2]<<14|b[3]<<8|b[4]<<2|b[5]>>4}catch(d){return Math.round(new Date/1E3)}}
function __ef_substitute_macros(a,b){var c={__CLICK_URL__:b.click_thru_url,__CLICK_URL_ESC__:b.click_thru_url?escape(b.click_thru_url):void 0,__CLICK_URL_ESC_ESC__:b.click_thru_url?escape(escape(b.click_thru_url)):void 0,__CLICK_URL_ESC_ESC_ESC__:b.click_thru_url?escape(escape(escape(b.click_thru_url))):void 0,__CACHEBUSTER__:b.cache_buster,__EFCREATIVEID__:b.creativeid,__EFCAMPAIGNID__:b.campaignid,__EFADID__:b.adid},d;for(d in c)c[d]&&(a=a.replace(new RegExp(d,"g"),c[d]));return a}
function loadifr(a,b){var c=__ef_create_invisible_iframe(a);c.attachEvent?c.attachEvent("onload",function(){b(c)}):c.onload=function(){b(c)};__ef_add_to_dom(c)}
function ef_3rdparty(a,b,c,d,e,g){void 0==d.ev_cu&&void 0==d.ev_cud&&"https:"==__prot&&(a=a.replace(/^https?:/,__prot));var h="",k=0;void 0!==d.ev_cu?h=d.ev_cu:void 0!==d.ev_cud&&(h=d.ev_cud,k=1);__ef_impressionid="";void 0!==d.ev_ii&&(__ef_impressionid=d.ev_ii);d.ev_cb||__ef_get_efuniq_epoch(d.ev_ii);a=a+"&ev_rs="+(void 0!==d.ev_rs?d.ev_rs:"")+"&ev_ii="+__ef_impressionid+"&url=!";d=String(d.ev_cb||__ef_get_efuniq_epoch(d.ev_ii));var f=__parseUri(a,0).params;d={cache_buster:d,campaignid:f.ev_ci,creativeid:f.ev_cri,
adid:f.ev_ai};a=__ef_substitute_macros(a,d);h=__ef_substitute_macros(h,d);d.click_thru_url=a;b=__ef_substitute_macros(b,d);"dart"==e&&"RightMedia"==g||""==h||!k&&(unescape(h),escape(a));document.write(b);document.close();ef_event_type="impression_served";__ev_sid=c;effp()};
