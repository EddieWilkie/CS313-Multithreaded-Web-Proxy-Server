"undefined"===typeof LimelightPlayerUtil&&("undefined"===typeof JSON&&(this.JSON={},function(){function A(d){return 10>d?"0"+d:d}function F(d){B.lastIndex=0;return B.test(d)?'"'+d.replace(B,function(d){var k=G[d];return"string"===typeof k?k:"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+d+'"'}function C(d,r){var k,n,t,D,q=p,m,g=r[d];g&&("object"===typeof g&&"function"===typeof g.toJSON)&&(g=g.toJSON(d));"function"===typeof w&&(g=w.call(r,d,g));switch(typeof g){case "string":return F(g);case "number":return isFinite(g)?String(g):"null";case "boolean":case "null":return String(g);case "object":if(!g)return"null";p+=x;m=[];if("[object Array]"===Object.prototype.toString.apply(g)){D=g.length;for(k=0;k<D;k+=1)m[k]=C(k,g)||"null";t=0===m.length?"[]":p?"[\n"+p+m.join(",\n"+p)+"\n"+q+"]":"["+m.join(",")+"]";p=q;return t}if(w&&"object"===typeof w)for(D=w.length,k=0;k<D;k+=1)n=w[k],"string"===typeof n&&(t=C(n,g))&&m.push(F(n)+(p?": ":":")+t);else for(n in g)Object.hasOwnProperty.call(g,n)&&(t=C(n,g))&&m.push(F(n)+(p?": ":":")+t);t=0===m.length?"{}":p?"{\n"+p+m.join(",\n"+p)+"\n"+q+"}":"{"+m.join(",")+"}";p=q;return t}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+A(this.getUTCMonth()+1)+"-"+A(this.getUTCDate())+"T"+A(this.getUTCHours())+":"+A(this.getUTCMinutes())+":"+A(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var E=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,B=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p,x,G={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},w;"function"!==typeof JSON.stringify&&(JSON.stringify=function(d,r,k){var n;x=p="";if("number"===typeof k)for(n=0;n<k;n+=1)x+=" ";else"string"===typeof k&&(x=k);if((w=r)&&"function"!==typeof r&&("object"!==typeof r||"number"!==typeof r.length))throw Error("JSON.stringify");return C("",{"":d})});"function"!==typeof JSON.parse&&(JSON.parse=function(d,p){function k(d,n){var q,m,g=d[n];if(g&&"object"===typeof g)for(q in g)Object.hasOwnProperty.call(g,q)&&(m=k(g,q),void 0!==m?g[q]=m:delete g[q]);return p.call(d,n,g)}var n;d=String(d);E.lastIndex=0;E.test(d)&&(d=d.replace(E,function(d){return"\\u"+("0000"+d.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(d.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return n=eval("("+d+")"),"function"===typeof p?k({"":n},""):n;throw new SyntaxError("JSON.parse");})}()),LimelightPlayerUtil=function(){function A(a,f,l,b,e){g(a,function(c){var u={service:{}};a.playlistService&&(u.service.playlistService=a.playlistService);a.metricsCollectionService&&(u.service.metricsCollectionService=a.metricsCollectionService);a.cuePointService&&(u.service.cuePointService=a.cuePointService);a.beaconingService&&(u.service.beaconingService=a.beaconingService);return LimelightPlayer=DelvePlayer=c=c.createPlayer(f,l,b,e,u)})}function F(a,f,l,b){l.postStartSessionEvent();x(b,a,f,D,l,function(a,c){var f=c.mediaList[0],H=document.createElement("TABLE");H.style="border-style:none";var s=H.appendChild(document.createElement("TR")).appendChild(document.createElement("TD")).appendChild(document.createElement("A"));s.href="#";s.appendChild(document.createElement("IMG")).src=encodeURI(f.thumbnailImageUrl);var h=H.appendChild(document.createElement("TR")).appendChild(document.createElement("TD"));h.style="text-align:center";h=h.appendChild(document.createElement("A"));h.href="#";h.appendChild(document.createTextNode("Click to play"));var v=function(){l.postPlayStateEvent(y.PLAY,0,function(){window.location=f.mobileUrls[0].mobileUrl});return!1};s.onclick=v;h.onclick=v;b(H)})}function C(a,f,l,b,e,c){x(c,a,b,m.htmlCodec,e,function(a,b){e.postStartSessionEvent();var s=b.mediaList[0],h=document.createElement("VIDEO");h.src=encodeURI(s.mobileUrls[0].mobileUrl);h.width=f;h.height=l;h.poster=encodeURI(s.previewImageUrl);h.controls=!0;h.addEventListener("click",h.play);h.addEventListener("play",function(){e.postPlayStateEvent(y.PLAY,Math.round(1E3*h.currentTime));e.startHeartbeat({quality:a,getPosition:function(){return Math.round(1E3*h.currentTime)},isPlaying:function(){return!h.paused}})});h.addEventListener("pause",function(){h.ended||e.postPlayStateEvent(y.PAUSE,Math.round(1E3*h.currentTime));e.stopHeartbeat()});h.addEventListener("ended",function(){e.postEvent(y.MEDIA_COMPLETE);e.stopHeartbeat()});var v=0;h.addEventListener("timeupdate",function(){var a=h.currentTime;if(h.seeking&&a!==v){var c=Math.round(1E3*v),f=Math.round(1E3*a);c!==f&&e.postEvent(y.SEEK,{offsetBefore:c,offsetAfter:f,heatmapDisplayed:!1,spectrumType:"",spectrumColor:0,relatedConcepts:""})}v=a});c(h)})}function E(a){a=a||{};a.wmode=a.wmode||"window";a.id=a.id||"limelight_player_"+Math.floor(1E9*Math.random());a.resources=a.resources||{};a.resources.beaconingService=a.resources.beaconingService||k;a.resources.cuePointService=a.resources.cuePointService||r;a.resources.metricsCollectionService=a.resources.metricsCollectionService||d;a.resources.playlistService=a.resources.playlistService||w;a.resources.htmlPlayerLocation=a.resources.htmlPlayerLocation||m.loadingProtocol+n;a.resources.playerIframeLocation=a.resources.playerIframeLocation||m.loadingProtocol+t;return a}function B(a,f,l,b,e,c,u,d,s){var h=y.create(f.metricsCollectionService,b,s);switch(s){case "iframe":return M(f,u,e,c,b,h,a);case "html":return A(f,u,e,c,null!==l?l:b);case "video":C(f,e,c,b,h,a);break;case "link":F(f,b,h,a);break;case "install-flash":m.Flash.canUpgrade?(f=!0===m.Flash.isActiveX?"ActiveX":"PlugIn",document.title=document.title.slice(0,47)+" - Flash Player Installation",p(a,"http://assets.delvenetworks.com/player/playerProductInstall.swf","MMredirectURL="+window.location+"&MMplayerType="+f+"&MMdoctitle="+document.title,e,c,u,d)):a('<table width="'+e+'" height="'+c+'" bgcolor="black" style="background-color:black; margin-left:auto; margin-right:auto"><tr><td align="center" style="text-align:center; vertical-align:middle"><a href="http://www.adobe.com/go/getflash/" style="text-decoration:underline; color:white"><span style="font-size:12px; color:white">You need to have the latest version of Adobe Flash Player to view this content.<br/>Please click here to continue.</span></a></td></tr></table>')}return null}function p(a,f,l,b,e,c,u){var d="",s;if("string"===typeof l)d=l;else if("object"===typeof l)for(s in l)d+=encodeURIComponent(s)+"="+encodeURIComponent(l[s])+"&";a('<object type="application/x-shockwave-flash" id="'+c+'" name="'+c+'" width="'+b+'" height="'+e+'" data="'+f+'"><param name="movie" value="'+f+'"/><param name="wmode" value="'+u+'"/><param name="allowScriptAccess" value="always"/><param name="allowFullScreen" value="true"/><param name="flashVars" value="'+d+'"/></object>');return document.getElementById(c)}function x(a,f,l,b,e,c){function d(c,f){a('<table width="'+width+'" height="'+height+'" bgcolor="black" style="background-color:black; margin-left:auto; margin-right:auto"><tr><td align="center" style="text-align:center; vertical-align:middle">'+(f?'<a href="'+f+'" style="text-decoration:underline; color:white">':"")+'<span style="font-size:12px; color:white">'+c+"</span>"+(f?"</a>":"")+"</td></tr></table>")}var g;l.mediaId?g=f.playlistService+"/media/"+l.mediaId+"/getMobilePlaylistByMediaId?platform="+b:l.channelId?g=f.playlistService+"/channel/"+l.channelId+"/getFirstAvailableMobilePlaylistByChannelId?platform="+b:l.channelListId&&(g=f.playlistService+"/channel_list/"+l.channelListId+"/getFirstAvailableMobilePlaylistByChannelListId?platform="+b);N(g,function(a){a&&a.mediaList&&a.mediaList[0]?(a.id&&e.setChannelId(a.id),a.mediaList[0].mediaId&&e.setMediaId(a.mediaList[0].mediaId),0<a.mediaList[0].mobileUrls.length?c(b,a):d("Video Not Available For This Device")):d("Video Not Available")})}function G(a){function f(a){return("object"===typeof a||"function"===typeof a)&&a.nodeType}if("undefined"===typeof a)return function(a){f(a)?document.body.appendChild(a):document.write(a)};"string"===typeof a&&(a=document.getElementById(a));if(f(a)){if("OBJECT"===a.nodeName){var l=a.parentNode,b=a.nextSibling,e=!1;return function(c){var d=document.createElement("DIV");f(c)?d.appendChild(c):d.innerHTML=c;e||(l.replaceChild(d.firstChild,a),e=!0);for(;d.firstChild;)l.insertBefore(d.firstChild,b)}}return function(c){f(c)?a.appendChild(c):a.innerHTML+=c}}return null}var w="//production-ps.lvp.llnw.net/r/PlaylistService",d="//production-mcs.lvp.llnw.net/r/MetricsCollectionService",r="//cps.lvp.llnw.net/r/CuePointService",k="//production-eqbc.lvp.llnw.net",n="//videoplatform.limelight.com/player/html-player.js",t="//assets.delvenetworks.com/player/resources/iframe.html",D="Mobile3gp",q=navigator,m=function(){var a=q.userAgent.toLowerCase(),f=q.platform.toLowerCase(),l=/blackberry/.test(a);/playbook/.test(a);var b=/msie/.test(a),e=/msie\s\d\d/.test(a),c=/iemobile|wpdesktop/.test(a),d=/ipad/.test(a),g=/silk/.test(a),s=/linux/.test(f?f:a),f=/opera mobi|opera tablet/.test(a),h=/fennec/.test(a),v=/symbian|series60/.test(a),I=/nintendo wiiu/.test(a),m=/iphone|ipad|ipod/.test(a)&&!(b||c),k=/android \d+\x2E\d+/.test(a)&&!(b||c),n=/android [2-9]+\x2E\d+/.test(a)&&!(b||c),p=/mobile/.test(a)||k,l=k||m||g||l||v||f||h||I||c||p,c=[0,0,0];if(m&&(a=a.match(/os (.*) like mac os x/))&&1<a.length){var c=[],a=a[1].split("_"),z;for(z in a)c.push(parseInt(a[z]));for(;3>c.length;)c.push(0)}z=function(){var a=document.createElement("VIDEO");return a.canPlayType?a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'):""}();n=(n||g||m)&&!h;g=function(){var a=document.createElement("VIDEO");return a.canPlayType?a.canPlayType("application/vnd.apple.mpegurl"):""}();h="probably"===g||m?"HttpLiveStreaming":"MobileH264";a=function(){var a=function(){var a=null;if("undefined"!==typeof q.plugins&&"object"==typeof q.plugins["Shockwave Flash"]){if((a=q.plugins["Shockwave Flash"].description)&&("undefined"===typeof q.mimeTypes||!q.mimeTypes["application/x-shockwave-flash"]||q.mimeTypes["application/x-shockwave-flash"].enabledPlugin))return a=a.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),[parseInt(a.replace(/^(.*)\..*$/,"$1"),10),parseInt(a.replace(/^.*\.(.*)\s.*$/,"$1"),10),/[a-zA-Z]/.test(a)?parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0]}else if("undefined"!==typeof window.ActiveXObject)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(c&&(a=c.GetVariable("$version")))return a=a.split(" ")[1].split(","),[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}catch(f){}return[0,0,0]}();return function(c,f,b){return a[0]>c||a[0]==c&&(a[1]>f||a[1]==f&&a[2]>=b)}}();b={canUpgrade:!s&&a(6,0,65),isActiveX:b,hasMinRequiredFlashVersion:a(10,2,0)};d=b.hasMinRequiredFlashVersion&&!k?"flash":l?"probably"===z||n?f||m&&!d&&5>c[0]?"video":"html":"link":"install-flash";"install-flash"===d&&(e&&"assets.delvenetworks.com"!==window.location.host)&&(d="iframe");return{Metrics:{H264:z,HLS:g},embedMode:d,htmlCodec:h,Flash:b,loadingProtocol:"https:"===document.location.protocol?"https:":"http:"}}(),g=function(){var a=[];return function(f,d){if(void 0!==LimelightPlayerUtil.Player)d(LimelightPlayerUtil.Player);else if(a.push(d),void 0===LimelightPlayerUtil.playerLoadedCallback){var b=document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("SCRIPT");e.type="text/javascript";e.src=f.htmlPlayerLocation;e.charset="utf-8";LimelightPlayerUtil.playerLoadedCallback=function(c){LimelightPlayerUtil.Player=c;delete LimelightPlayerUtil.playerLoadedCallback;b&&b.removeChild(e);a.forEach(function(a){a(c)});a=[]};e.onerror=function(){a.forEach(function(a){a(null)});a=[]};b.insertBefore(e,b.firstChild)}}}(),M=function(){var a=[];return function(f,d,b,e,c,g,m){function k(a){var c={},f;for(f in a)c[f]="object"===typeof a[f]&&a[f]?k(a[f]):a[f];return c}var h=document.createElement("IFRAME");h.id=d;h.width=b;h.height=e;h.src=f.playerIframeLocation;h.style.border="none";m(h);var v=document.getElementById(d).contentWindow,I={},n={},p={},q=0,K={},z=0,t=1,r=null,J=null,L=void 0;window.addEventListener("message",function(d){var b,e=d.data.state;e&&(e.channelList&&(I=e.channelList),e.channel&&(n=e.channel),e.media&&(p=e.media),e.index&&(q=e.index),e.playState&&(K=e.playState),e.position&&(z=e.position),e.volume&&(t=e.volume),e.quality&&(r=e.quality),e.actualQuality&&(J=e.actualQuality),e.customEvents&&(L=e.customEvents));switch(d.data.type){case "event":"function"===typeof limelightPlayerCallback?limelightPlayerCallback(d.data.id,d.data.eventName,d.data.data):"function"===typeof delvePlayerCallback&&delvePlayerCallback(d.data.id,d.data.eventName,d.data.data);break;case "init":v.postMessage({type:"init",embed:"../embed.js",flashVars:c,resourceLocations:f},"*");break;case "api":b={};for(var l in d.data.funcs){var e=d.data.funcs[l],g=function(a){return function(){v.postMessage({type:"func",name:a,args:Array.prototype.slice.call(arguments)},"*")}}(e);b[e]=g}b.registerPlayer=function(){};b.getPlayers=function(){return a};b.doGetActualQuality=function(){return J?J.name:null};b.doGetQuality=function(){return r?r.name:null};b.doGetQualityDetails=function(){return k({actual:J,selected:r})};b.doGetCurrentIndex=function(){return q};b.doGetCurrentMedia=function(){return k(p)};b.doGetCurrentChannel=function(){return k(n)};b.doGetCurrentChannelList=function(){return k(I)};b.doGetCurrentPlayState=function(){return k(K)};b.doGetCustomEvents=function(){return k(L)};b.doGetPlayheadPositionInMilliseconds=function(){return z};b.doSetVolume=function(){var a=b.doSetVolume;return function(b){b||(b=0);if("number"===typeof b)return 0>b&&(b=0),1<b&&(b=1),t=b,a(b)}}();b.doGetVolume=function(){return t};delete b.doGetChannels;delete b.doGetChannelMedia;b.getPlayer=function(){return b};b.getPlayerNodeByIdOrName=function(a){var b=document.getElementById(a);return b&&b.doPlay?b:(a=document.getElementsByName(a))&&null!=a.length?a[0]:null};LimelightPlayer=DelvePlayer=b;for(var m in b)h[m]=b[m];a.push(b)}})}}(),y=function(){function a(a){var b=document.cookie.indexOf(a+"="),c=b+a.length+1;if(!b&&a!=document.cookie.substring(0,a.length)||-1==b)return null;a=document.cookie.indexOf(";",c);-1==a&&(a=document.cookie.length);return unescape(document.cookie.substring(c,a))}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)}).toUpperCase()}function d(a,b){if(void 0!==a){var c=!1;return function(){c||(c=!0,a.apply(b||this,arguments))}}}var b=f(),e={H264:m.Metrics.H264,HLS:m.Metrics.HLS},c=q.userAgent,g=q.platform,k=function(){var b=a("Limelight_Embed_Code_UserId");return function(){if(!b){var a=b=f(),c=365,e=new Date;e.setTime(e.getTime());c&&(c*=864E5);e=new Date(e.getTime()+c);document.cookie="Limelight_Embed_Code_UserId="+escape(a)+(c?";expires="+e.toGMTString():"")+""}return b}}(),n=function(){var a=+new Date;return function(){return new Date-a}}(),h=function(){var a=0;return function(b,c,e){var f="_limelight_embed_ajax_"+a++,d=document.createElement("IFRAME");d.id=f;d.name=f;d.style.cssText="display:none;width:0px;height:0px;";(document.getElementsByTagName("body")[0]||document.documentElement).appendChild(d);var h=document.createElement("FORM");h.setAttribute("target",f);h.setAttribute("method","POST");h.setAttribute("action",b);for(field in c)b=document.createElement("INPUT"),b.setAttribute("type","hidden"),b.setAttribute("name",field),b.setAttribute("value",JSON.stringify(c[field])),h.appendChild(b);d.appendChild(h);d.onload=function(){void 0!==e&&e();setTimeout(function(){d.parentNode.removeChild(d)},0)};h.submit()}}();return{HEARTBEAT:"Heartbeat",MEDIA_COMPLETE:"MediaComplete",PLAY:"Play",PAUSE:"Pause",SEEK:"Seek",START_SESSION:"StartSession",create:function(a,f,m){var p={},q=null;e.embedMode=m;var r={postEvent:function(c,e,d){var g={channelListId:p.channelListId||f.channelListId,channelId:p.channelId||f.channelId,mediaId:p.mediaId||f.mediaId,millisecondsElapsed:n()},l;for(l in g)void 0===g[l]&&(g[l]="");for(l in e)g[l]=void 0===e[l]?"":e[l];h(a+"/recordMetricsEvent",{sourceInstanceId:b,source:"Limelight Embed Code",sourceVersion:1,eventType:c,data:g},d)},postStartSessionEvent:function(){this.postEvent(y.START_SESSION,{adConfigurationChannelId:f.adConfigurationChannelId,htmlCapabilities:JSON.stringify(e),pageURL:window.location.href,platform:g,playerProviderId:"Delve Networks",userAgent:c,userId:k(),version:"1.6.1"})},postPlayStateEvent:function(a,b,c){var e=d(c);this.postEvent(a,{positionInMilliseconds:b},e);void 0!==c&&setTimeout(e,1E3)},setChannelListId:function(a){p.channelListId=a},setChannelId:function(a){p.channelId=a},setMediaId:function(a){p.mediaId=a},startHeartbeat:function(a){null!==q&&clearInterval(q);q=setInterval(function(){a.isPlaying()&&r.postEvent(y.HEARTBEAT,{droppedFrames:0,droppedFramesRatio:"",selectedMediaQuality:a.quality,positionInMilliseconds:a.getPosition(),maxBytesPerSecond:"",currentBitrate:""})},3E4)},stopHeartbeat:function(){null!==q&&clearInterval(q);q=null}};return r}}}(),N=function(){var a=0;return function(f,d){var b="_"+a++;f+="&jsonp=LimelightPlayerUtil.jsonpCallback."+b;var e=document.getElementsByTagName("head")[0]||document.documentElement,c=document.createElement("SCRIPT");c.type="text/javascript";c.src=f;c.charset="utf-8";LimelightPlayerUtil.jsonpCallback[b]=function(a){delete LimelightPlayerUtil.jsonpCallback[b];d(a);e&&e.removeChild(c)};c.onerror=function(){d(null)};e.insertBefore(c,e.firstChild)}}();return{jsonpCallback:[],initEmbed:function(a,f){f=f||{};var d=document.getElementById(a);if(null===d)return console&&(console.error&&"function"===typeof console.error)&&console.error("No such element: "+a),null;var b=d.width,e=d.height,c=d.firstChild;f.id=a;for(var g="",k={};null!==c;){if("PARAM"===c.nodeName)switch(c.name){case "flashVars":for(var g=c.value,k={},p=g.split("&"),h=0;h<p.length;h++){var n=p[h],q=n.indexOf("=");-1===q?k[decodeURIComponent(n)]="true":k[decodeURIComponent(n.substring(0,q))]=decodeURIComponent(n.substring(q+1))}break;case "wmode":f.wmode=c.value}c=c.nextSibling}f=E(f);c=f.embedMode||m.embedMode;return"flash"!==c?(d=G(d),B(d,f.resources,g,k,b,e,f.id,f.wmode,c)):d},embedPlayer:function(a,d,g,b,e){e=G(e);b=E(b);var c=b.embedMode||m.embedMode;return"flash"===c?p(e,m.loadingProtocol+"//assets.delvenetworks.com/player/fp10loader.swf",a,d,g,b.id,b.wmode):B(e,b.resources,null,a,d,g,b.id,b.wmode,c)}}}());