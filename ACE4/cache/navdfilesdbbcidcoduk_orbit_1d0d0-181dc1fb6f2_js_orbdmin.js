define("orb/lib/_anim",function(){"use strict";function e(e,t,n,r){return e/=r,-n*e*(e-2)+t}var t={},n=["transition","WebkitTransition","MozTransition","msTransition","OTransition"],r=function(){for(var e=document.createElement("div").style,t=n.length;t--;)if(n[t]in e)return n[t];return!1}();return t.animate=r?function(e,t){e.style[r]="height "+t.duration+"ms",e.style.height=t.height+"px"}:function(t,n){var r,o=parseFloat(t.offsetHeight),a=n.height,i=n.duration,s=t.style,l=10,c=(new Date).getTime();clearTimeout(t.orbAnimTimer),r=function(){var n=(new Date).getTime()-c,u=e(n,o,a-o,i);return n>i?void(s.height=a+"px"):(s.height=u+"px",void(t.orbAnimTimer=setTimeout(r,l)))},t.orbAnimTimer=setTimeout(r,0)},t}),define("orb/lib/_attr",function(){"use strict";return{getAttr:function(e,t){var n,r;return e.attributes[t]?e.attributes[t].specified?e.attributes[t].value:"":e.getAttributeNode?(n=e.getAttributeNode(t,0),null===n?"":n.value):(r=e.getAttribute(t,2),null===r?"":r)},setAttr:function(e,t,n){e.setAttribute(t,""+n)}}}),define("orb/lib/_classy",function(){"use strict";var e={};return e.addClass=function(t,n){var r,o;if("[object Array]"===Object.prototype.toString.call(n))for(r=0,o=n.length;o>r;r++)e.addClass(t,n[r]);if(t.nodeName)e.hasClass(t,n)||(t.className+=(t.className?" ":"")+n);else if(t.length)for(r=0,o=t.length;o>r;r++)e.addClass(t[r],n)},e.removeClass=function(t,n){var r,o;if("[object Array]"===Object.prototype.toString.call(n))for(r=0,o=n.length;o>r;r++)e.removeClass(t,n[r]);if(t.nodeName)t.className=t.className.replace(new RegExp("(^| )"+n+"( |$)","g")," ").replace(/(^ | $)/g,"").replace(/ {2}/g," ");else if(t.length)for(r=0,o=t.length;o>r;r++)e.removeClass(t[r],n)},e.hasClass=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},e}),define("orb/lib/_dom",function(){"use strict";return{remove:function(e){e.parentNode.removeChild(e)}}}),define("orb/lib/_event",function(){"use strict";var e={};return document.addEventListener?e.addEvent=function(t,n,r){if(t&&(t.nodeName||t===window))t.addEventListener(n,r,!1);else if(t&&t.length)for(var o=0,a=t.length;a>o;o++)e.addEvent(t[o],n,r)}:e.addEvent=function(t,n,r){if(t&&(t.nodeName||t===window))t.attachEvent("on"+n,function(e){return e=e||window.event||{},e.srcElement&&"undefined"==typeof e.target&&(e.target=e.srcElement),r.call(t,e)});else if(t&&t.length)for(var o=0,a=t.length;a>o;o++)e.addEvent(t[o],n,r)},e.mixin=function(e){e.__events={},e.event=function(t){var n;return n="undefined"!=typeof e.__events[t]?e.__events[t]:e.__events[t]=[],{add:function(e){n.push(e)},fire:function(e){e=e||{};for(var t=0,r=n.length;r>t;t++)n[t](e)}}}},e}),define("orb/lib/_nut",[],function(){var e={exports:{}};return function(t){"undefined"!=typeof e?e.exports=t:this.nut=t}(function(){var e=document,t="firstChild",n="nextSibling",r="getElementsByClassName",o="length",a=function(t,n){var r=e.getElementById(t);return r?[r]:[]},i=function(e,r){var a,s=r[t],l=[];if(s)do 1==s.nodeType&&(s.className&&s.className.match("\\b"+e+"\\b")&&l.push(s),(a=i(e,s))[o]&&(l=l.concat(a)));while(s=s[n]);return l},s=function(e,t){return t[r]?t[r](e):i(e,t)},l=function(e,t){return t.getElementsByTagName(e)};return function(t,n){n||(n=e),"object"==typeof n&&n.pop&&(n=n[0]);var r,i,c,u,d,f,h,b,v,m,p,g=[];for(t=t.split(","),v=-1;c=t[++v];)t[v]=c.split(/\s+/);for(d=t[o];d;){for(r=[n],f=-1,h=t[--d][o];++f<h;)if(c=t[d][f]){for("#"==c.charAt(0)?(c=c.substr(1),p=a):"."==c.charAt(0)?(c=c.substr(1),p=s):p=l,i=[],b=-1;r[++b];)for(u=p(c,r[b]),v=-1,m=u[o];++v<m;)i.push(u[v]);r=i}g=g.concat(r)}return g}}()),e.exports}),define("orb/lib/_ready",[],function(){"use strict";function e(){for(;n.length;)n.shift().call(null)}function t(e,t){var n=!0,o=e.document,a=o.documentElement,i=o.addEventListener,s=i?"addEventListener":"attachEvent",l=i?"removeEventListener":"detachEvent",c=i?"":"on",u=function(n){"readystatechange"===n.type&&"interactive"!=o.readyState||(("load"===n.type?e:o)[l](c+n.type,u,!1),!r.isReady&&(r.isReady=!0)&&t.call(e,n.type||n))},d=function(){try{a.doScroll("left")}catch(e){return void setTimeout(d,50)}u("poll")};if("complete"===o.readyState)r.isReady=!0,t.call(e,"lazy");else{if(!i&&a.doScroll){try{n=!e.frameElement}catch(f){}n&&d()}o[s](c+"DOMContentLoaded",u,!1),o[s](c+"readystatechange",u,!1),e[s](c+"load",u,!1)}}var n=[],r=function(e){r.isReady?e():n.push(e)};return r.isReady=!1,t(window,e),r}),define("orb/lib/_str",function(e){"use strict";var t={htmlEntities:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},trimHtml:function(e,t){var n="",r=0;return e.replace(/(<.+?>|&.+?;|[^<&]+)/g,function(e){switch(e.charAt(0)){case"<":e=r>=t&&/\/>/.test(e)?"":e,r+=0;break;case"&":e=r>=t?"":e,r+=1;break;default:e=e.substr(0,t-r),r+=e.length}n+=e}),n=n.replace(/\s+(<[^>]+>)$/,"$1").replace(/<(\w+)><\/\1>/g,"").replace(/\s+$/,""),n+=e!==n?"&hellip;":""}};return t}),define("orb/lib/_template",function(){"use strict";function e(n,r){n=n.replace(/(^\s*<!\[CDATA\[|\]\]>\s*$)/g,"");var o="#"===n.charAt(0)?t[n]=t[n]||e(document.getElementById(n.slice(1)).innerHTML):new Function("obj","var p=[],esc=function(v){return (''+v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\"/g, '&quot;');},print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return r?o(r):o}var t={};return e}),define("orb/lib/_$",["orb/lib/_nut","orb/lib/_ready","orb/lib/_anim","orb/lib/_dom","orb/lib/_event","orb/lib/_classy","orb/lib/_attr","orb/lib/_str","orb/lib/_script","orb/lib/_template"],function(e,t,n,r,o,a,i,s,l,c){"use strict";var u=e,d=u("#orb-banner")[0],f=u("#orb-header")[0];return u.anim=n.animate,u.ready=t,u.remove=r.remove,u.addEvent=o.addEvent,u.addClass=a.addClass,u.removeClass=a.removeClass,u.hasClass=a.hasClass,u.getAttr=i.getAttr,u.setAttr=i.setAttr,u.str=s,u.script=l,u.template=c,u.client={old_ie:u.hasClass(d,"orb-old-ie"),ie8:u.hasClass(d,"orb-ie8"),ie7:u.hasClass(d,"orb-ie7"),ie6:u.hasClass(d,"orb-ie6")},u.config={fixed:u.hasClass(f,"orb-fixed-width")||u.client.old_ie,rtl:"rtl"===u.getAttr(f,"dir")},u.fig={isUk:function(){return!0}},u.addCSS=function(e){if("string"!=typeof e||""===e)return!1;try{var t=document.createElement("style");return t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t),!0}catch(n){return!1}},u.addHTML=function(e,t){return e&&e.tagName&&""!==t?(e.innerHTML=t,!0):!1},u}),define("orb/_map",["orb/lib/_$"],function(e){"use strict";return function(){var t=e("#orb-js-script")[0],n=e.getAttr(t,"data-assetpath"),r={};r["orb/async/_suggestions"]=n+"js/async/_suggestions.min",require({paths:r})}}),define("orb/features/masthead/_drawer",["orb/lib/_$","orb/lib/_event"],function(e,t){"use strict";var n=function(e){t.mixin(this),this.content=e,this._currentPanel=null,this.panels={},this.panelName=null};return n.prototype.addPanel=function(e){return this.panels[e.name]=e,e.drawer=this,this},n.prototype.getPanel=function(e){return e?this.panels[e]:this._currentPanel},n.prototype.resize=function(t){if(this._currentPanel&&this._currentPanel.name===t){var n=this.panels[t].content.offsetHeight+"px";e("#orb-panels")[0].style.height=n}},n.prototype.showPanel=function(e){var t=this._currentPanel;null===t?(this.panelName=e,this.event("onActivate").fire({}),this._currentPanel=this.panels[e],this._currentPanel.publishState("shown")):t&&t.name===e?this.hidePanel():(this.deactivatedPanelName=this._currentPanel.name,this._currentPanel.publishState("hidden"),this.panelName=e,this._currentPanel=this.panels[e],this.event("onSwapContents").fire({}),this._currentPanel.publishState("shown"))},n.prototype.hidePanel=function(){var e=this._currentPanel;null!==e&&(this.event("onDeactivate").fire({}),e.publishState("hidden"),this.panelName=null,this._currentPanel=null)},n.prototype.activate=function(){this._currentPanel&&this.showPanel(this._currentPanel.name)},n.prototype.deactivate=function(){this.hidePanel()},n.prototype.getCurrentPanel=function(){return this._currentPanel},n.Panel=function(e,n,r){this.name=e,n&&(this.control=n.control,this.content=n.content),this.publishState=function(e){"function"==typeof this.stateChangeCallback&&this.stateChangeCallback.call(null,e)},"function"==typeof r&&(this.stateChangeCallback=r),t.mixin(this)},n}),define("orb/features/masthead/_layoutprimarynav",["orb/lib/_$","orb/lib/_event","orb/api","orb/features/masthead/_linkmanager"],function(e,t,n,r){"use strict";function o(){function t(){var e,t,n,r;e=o.event("beforeLayout"),t=o.event("afterLayout"),n={links:g.links},r=h.offsetTop,e.fire(n),g.showAll(),g.hideToFit(function(e){return d.offsetTop!==r||u.offsetTop!==r?!0:void 0},p),t.fire(n)}function a(){e.addClass(h,m)}function i(){e.removeClass(h,m),n.trigger("layout",{width:h.offsetWidth,height:h.offsetHeight})}function s(){window.innerWidth!==y&&(y=window.innerWidth,a(),s.throttle&&clearTimeout(s.throttle),s.throttle=setTimeout(function(){t(),i()},100))}function l(){function t(e){g.hasVisible()?r.firstChild.data=i:r.firstChild.data=s}function n(e){var t,n,o,l=r.getAttribute("style");a.style.width="auto",r.style.textIndent="0",r.firstChild.data=i,t=a.offsetWidth,r.firstChild.data=s,n=a.offsetWidth,o=Math.max(t,n),a.style.width=o+"px",r.setAttribute("style",l)}var r=e("#orb-nav-more a")[0],a=r.parentNode,i=r.firstChild.data,s=e.getAttr(r,"data-alt");o.event("beforeLayout").add(n),o.event("afterLayout").add(t)}function c(){function t(){s.style.width=s.offsetWidth+l()-3+"px"}function n(e){t()}var r={isNull:!0,offsetLeft:-1,offsetWidth:0},a=e(".orb-nav-search")[0]||r,i=e("#orb-nav-links")[0]||r,s=e("#orb-nav-more")[0]||r,l=(e(".orb-nav-id")[0]||r,0);l=e.config.rtl?e.client.ie6||e.client.ie7?function(){return a.offsetLeft+s.offsetLeft+1}:function(){return s.offsetLeft-(a.offsetLeft+a.offsetWidth)}:function(){return a.offsetLeft-i.offsetLeft-i.offsetWidth},o.event("afterLayout").add(n)}var u=e(".orb-nav-search")[0],d=e("#orb-nav-more")[0],f=e("#orb-header")[0],h=e(".orb-nav-pri-container")[0],b="orb-nav-dyn",v="orb-nav-empty",m="orb-nav-lock",p=2,g=null,y=0;e.config.fixed||(e.addEvent(window,"resize",s),e.addEvent(window,"orientationchange",function(){setTimeout(s,100)})),g=new r(e(".orb-nav-links li").slice(0,-1)),l(),c();var k={uk:e.fig.isUk()},_=k.uk?e.getAttr(f,"data-max-d"):e.getAttr(f,"data-max-w");e.addClass(f,"orb-location-"+(k.uk?"d":"w")),g.setLocation(k.uk?"d":"w"),""!==_&&g.applyMaximum(_),a(),e.addClass(f,b),e.removeClass(f,v),t(),i()}return t.mixin(o),o}),define("orb/features/masthead/_linkmanager",["orb/lib/_$"],function(e){"use strict";var t,n="orb-nav-hide",r=function(e){var t=this;if("undefined"!=typeof t.links)for(var n=0,r=t.links.length;r>n;n++)e(t.links[n],n)};return t=function(e){this.links=[];for(var t=0,n=e.length;n>t;t++){this.links[t]=e[t];var r=(this.links[t].innerText||this.links[t].textContent).trim();this.links[t].linktrack={nav_link:r}}},t.prototype.reindexLinks=function(){var e=[];r.call(this,function(t){t&&e.push(t)}),this.links=e},t.prototype.setLocation=function(t){var n="w"===t?"d":"w",o=this;r.call(this,function(t,r){e.hasClass(t,"orb-"+n)&&o.removeLink(r)}),this.reindexLinks()},t.prototype.removeLink=function(t){e.remove(this.links[t]),delete this.links[t]},t.prototype.showAll=function(){r.call(this,function(t){e.removeClass(t,n)})},t.prototype.hideToFit=function(t,r){for(var o=!1,a=this.links.length;a--;)if(o||t())e.addClass(this.links[a],n);else{if(!(r-1>a))break;o=!0,a++}},t.prototype.applyMaximum=function(e){var t=this;r.call(this,function(n,r){r>=e&&t.removeLink(r)}),t.reindexLinks()},t.prototype.hasVisible=function(){return this.links[0]&&-1===this.links[0].className.indexOf(n)},t}),define("orb/features/_moreDrawer",["orb/lib/_$","orb/nav","orb/features/masthead/_layoutprimarynav"],function(e,t,n){function r(){var t='<div class="orb-panel-content b-g-p b-r orb-nav-sec"><h2 id="orb-panel-more-title"></h2><ul>'+e("#orb-aside .orb-footer-primary-links ul")[0].innerHTML+"</ul></div>";l.innerHTML=t}function o(){for(var n=e(".orb-nav-links li"),r=e("#orb-panel-more li"),o=e(".orb-panel-content ."+s),a="orb-panel-hide",i=0,l=t.getMastheadDrawer(),c=0,u=n.length;u-1>c&&-1===n[c].className.indexOf("orb-nav-hide");c++)i++;for(var d=0,f=r.length;f>d;d++)i>d?e.addClass(r[d],a):e.removeClass(r[d],a);o.length&&e.removeClass(o[0],s),i<r.length?e.addClass(r[i],s):i==r.length&&l.getCurrentPanel()===morePanel&&l.hidePanel(),e("#orb-panel-more-title")[0].innerHTML=e("#orb-nav-more a")[0].innerHTML}function a(){t.addDrawer("more",i,l),r(),o(),n.event("afterLayout").add(o),require(["istats-1"],function(t){t.track("internal",{region:l,linkLocation:"blq-nav-more-orbit"}),t.addNoTrack(e("a",i)[0])})}var i=e("#orb-nav-more")[0],s="orb-first-visible",l=document.createElement("div");return l.setAttribute("id","orb-panel-more"),e.addClass(l,"orb-panel"),a}),define("orb/features/footer/_desktopmobilelink",["orb/lib/_$"],function(e){"use strict";var t=function(){var t,n,r=e(".orb-nav-mobile a")[0],o=e(".orb-nav-desktop a")[0],a=525600;o?(t=o,n="d"):r&&(t=r,n="m"),t&&(e.hasClass(t.parentNode,"orb-alt-switch")&&(t.href=""+window.location),e.addEvent(t,"click",function(){e.setCookie("ckps_d",n,a)}))};return t}),define("orb/features/_configuresearch",["orb/lib/_$"],function(e){"use strict";var t=function(){var t=null;e.ready(function(){var n=e("#orb-search-q")[0],r=e(".orb-nav-search input, .orb-nav-search button");n&&r.length?(e.addEvent(r,"focus",function(e){clearTimeout(t)}),window.orb&&0===(""+window.orb.lang).indexOf("en")&&(e.setAttr(n,"autocomplete","off"),e.addEvent([n],"keydown",function(e){"undefined"==typeof n.suggestions&&(n.suggestions="initialising",require(["orb/async/_suggestions"],function(e){n.suggestions=new e(n)}))})),e.addEvent(r,"blur",function(e){t=setTimeout(function(){},220)})):console.warn("Cannot configure Search: Search DOM elements missing.")})};return t}),define("orb/features/_cookieprompt",["orb/cookies","orb/lib/_script","orb/nav"],function(e,t,n){function r(e){var t=e.replace(/<<bbcBaseUrl>>/g,window.orb.bbcBaseUrl);document.getElementById("cookiePrompt").innerHTML=t}function o(){var n=window.orb.staticHost+"/cookie-prompt/"+window.orb.lang+".js";t.jsonp(n,r,{callbackName:"cookiePrompt"}),e._setPolicy(e.readPolicy())}function a(){if(e.cookiesEnabled()&&!e.isCookiePolicySet()){var t=window.orb.staticHost+"/css/bbccookies.min.css";n.loadCss(t,o)}}return a}),define("orb/features/_drawerManager",["orb/lib/_$","orb/features/masthead/_layoutprimarynav","orb/features/masthead/_drawer"],function(e,t,n){"use strict";function r(){function o(){var t=e("#orb-panel-template")[0];t&&(v=t.innerHTML,t.parentNode.removeChild(t))}function a(e){for(var t=1,n=e.firstChild;n;){if(n.nodeType===t)return n;n=n.nextSibling}return null}function i(e){var t;for("undefined"==typeof e.length&&(e=[e]),t=e.length;t--;){if(document.activeElement&&document.activeElement===e[t])return!0;if(document.focusNode&&document.focusNode===e[t])return!0}return!1}function s(t){return"more"===t?'<h2 id="orb-panel-more-title"></h2><ul>'+e("#orb-aside .orb-footer-primary-links ul")[0].innerHTML+"</ul>":""}function l(e,t){require(["istats-1"],function(n){n.log(t,"panel-"+e)})}function c(t){var n,r,o=t.control;t&&(clearTimeout(w),o&&e.addClass(o,g),C.content.style.height="0",t.content.style.display="block",n=t.content.offsetHeight,"mouse"===m.navMode?(e.anim(C.content,{height:n,duration:y}),e.setAttr(t.content,"tabindex","-1"),t.content.focus()):(e.anim(C.content,{height:n,duration:0}),r=e("."+_+" a",t.content)[0]||e("."+_+" a",t.content)[0]||e(".orb-focus-target",t.content)[0],r&&r.focus()),e.setAttr(C.content,"aria-expanded","true"),e.addClass(C.content,k),setTimeout(function(){l(t.name,"open")},"mouse"===m.navMode?y:0))}function u(t){var n=t.control;t&&(clearTimeout(w),"mouse"===m.navMode?e.anim(C.content,{height:0,duration:y}):e.anim(C.content,{height:0,duration:0}),w=setTimeout(function(){t.content.style.display="none",e.removeClass(C.content,k),e.setAttr(C.content,"aria-expanded","false"),n&&e.removeClass(n,g),l(t.name,"close")},"mouse"===m.navMode?y:0))}function d(t,n){var r,o=t.control,a=n.control;t.content.style.display="none",n.content.style.display="block",r=n.content.offsetHeight,"mouse"===m.navMode?(e.anim(C.content,{height:r,duration:y}),e.setAttr(n.content,"tabindex","-1"),n.content.focus()):(e.anim(C.content,{height:r,duration:0}),e("."+_+" a",n.content)[0].focus()),e.removeClass(o,g),e.addClass(a,g),l(t.name,"close"),l(n.name,"open")}function f(){e.addEvent(m,"mousemove",function(e){m.navMode="mouse"}),e.addEvent(m,"mousedown",function(e){m.navMode="mouse"}),e.addEvent(m,"keydown",function(e){m.navMode="keyboard"})}function h(t){e.hasClass(C.content,k)&&(C.content.style.height=t.content.offsetHeight/E(C.content)+"em")}function b(){var e=C.getCurrentPanel();null!==e&&h(e)}var v,m=e("#orb-header")[0],p=e("#orb-panels")[0],g="orb-nav-focus-on",y=400,k="orb-panel-active",_="orb-first-visible",w=null,C=new n(p),E=function(){return window.getComputedStyle?function(e){return e=e||document.body,window.getComputedStyle(e).fontSize.replace("px","")}:function(e){var t,n;return e=e||document.body,t=document.createElement("div"),t.style.margin="0px",t.style.padding="0px",t.style.border="none",t.style.height="1em",e.appendChild(t),n=t.offsetHeight,e.removeChild(t),n}}();r.initPanelDom=function(t,n){var r,o,i=e.template(v),l=document.createElement("div");return r=i({panelcontent:s(t),panelname:t}),l.innerHTML=r,l=a(l).cloneNode(!0),n.appendChild(l),e.addClass(e(".orb-panel-content")[0],"orb-nav-sec"),o=e("#"+l.getAttribute("aria-labelledby"))[0],o&&e.setAttr(o,"aria-controls",l.id),{control:o,content:l}},r.addPanelEvents=function(t){var n=t.name;e.addEvent(t.control,"click",function(e){return t.event("beforeshow").fire(e),C.showPanel(n),t.event("show").fire(e),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}),e.addEvent(m,"keydown",function(r){var o,a="number"==typeof r.which?r.which:r.keyCode;27===a&&(i(t.control)||i(e("a",t.content)))&&(C.hidePanel(n),o=e("a",t.control)[0],o.focus())})},r.getMastheadDrawer=function(){return C},e.ready(function(){o(),m.drawer=C,C.event("onActivate").add(function(){var e=C.getPanel(C.panelName);c(e)}),C.event("onDeactivate").add(function(){var e=C.getPanel();u(e)}),C.event("onSwapContents").add(function(){var e=C.panels[C.deactivatedPanelName],t=C.getPanel();d(e,t)}),b(),f(),t.event("afterLayout").add(b)})}return r}),define("orb/features/_footer",["orb/lib/_$","orb/features/footer/_desktopmobilelink","orb/features/masthead/_linkmanager"],function(e,t,n){"use strict";function r(){var r=e.fig.isUk()?"d":"w",o="orb-location-"+r,a=e("#orb-footer")[0],i=new n(e("#orb-footer li"));i.setLocation(r),e.addClass(a,o),t()}return r}),define("orb/features/_istatstracking",["orb/lib/_$"],function(e){"use strict";return function(){require(["istats-1"],function(t){e.ready(function(){t.track("internal",{region:e(".orb-nav-blocks")[0],linkLocation:"blq-mast-home-orbit"}),t.track("internal",{region:e("#orb-nav-links"),linkLocation:"blq-nav-main-orbit"}),t.track("internal",{region:e("#orb-aside"),linkLocation:"blq-foot-orbit"}),t.track("internal",{region:e("#orb-footer"),linkLocation:"blq-foot-orbit"}),t.track("external",{region:e("body")[0]}),t.track("download",{region:e("body")[0]}),e(".orb-nav-blocks")[0].linktrack={nav_link:"Homepage"}})})}}),define("orb/features/_searchhint",["orb/lib/_$"],function(e){"use strict";return function(){var t="placeholder"in document.createElement("input");if(!t){var n=e("#orb-search-q")[0],r=e("#orb-search-form")[0],o=e.getAttr(n,"placeholder");e.ready(function(){e.addEvent(n,"focusout",function(e){""===n.value&&(n.value=o)}),e.addEvent(n,"focusin",function(e){n.value===o&&(n.value="")}),e.addEvent(r,"submit",function(e){n.value===o&&(n.value="")}),n.value||document.activeElement===n||(n.value=o)})}}}),define("orb/features/_skiplinks",["orb/lib/_$"],function(e){"use strict";return function(){e.ready(function(){var t=e(".orb-skip-links")[0],n=function(t){var n=t.target||t.srcElement,r=n.getAttribute("href").match(/^(#.+)/),o=(r?e(r[1]):[])[0];o&&(null!==o.tabIndex&&-1!==o.tabIndex||(o.tabIndex=-1),o.focus())};e.addEvent(t,"click",n)})}}),define("orb/nav",["orb/lib/_$","orb/features/_drawerManager","orb/features/masthead/_drawer","orb/features/masthead/_layoutprimarynav"],function(e,t,n,r){"use strict";var o={loadCss:function(e,t){var n=document.createElement("link");if(n.type="text/css",n.rel="stylesheet",n.href=e,"function"==typeof t){var r=document.createElement("img");r.onerror=function(){t&&t(n)},r.src=e}document.getElementsByTagName("head")[0].appendChild(n)},addDrawer:function(r,o,a,i){var s=e("#orb-panels")[0];s.appendChild(a);var l=new n.Panel(r,{control:o,content:a},i);t.getMastheadDrawer().addPanel(l),t.addPanelEvents(l)},getDrawerState:function(e){var n=t.getMastheadDrawer(),r=n.getCurrentPanel();return null===r||r.name!=e?"hidden":"shown"},updateDrawerHeight:function(e){var n=t.getMastheadDrawer();n.resize(e)},getMastheadDrawer:function(){return t.getMastheadDrawer()},refresh:function(){r()}};return o}),require(["orb/_map","orb/features/_skiplinks","orb/features/_footer","orb/features/masthead/_layoutprimarynav","orb/features/_drawerManager","orb/features/_moreDrawer","orb/features/_searchhint","orb/features/_configuresearch","orb/features/_cookieprompt","orb/features/_istatstracking"],function(){"use strict";for(var e=0,t=arguments.length;t>e;e++)arguments[e]()});