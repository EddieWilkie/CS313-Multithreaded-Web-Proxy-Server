var ACSUX=window.ACSUX||{};ACSUX.shwcs||(ACSUX.shwcs=function(a,b){function c(a,b){var c={message:a,onloadRan:h,config:i,slides:j,numberOfSlides:k,$wrap:l,wrapWidth:m,fallbackWrap:n,fallbackImage:o,mainWrap:p,imageGroup:q,imageWrapInner:r,imageWidth:s,imageHeight:t,sideMargin:u,imageOffset:v,imageOffsetCalc:w,currentSlide:x,windowResizeTimeout:y,firstSlide:z,secondSlide:A,lastSlide:B,secondToLastSlide:C,prairieDogSize:D,arrowOverlayWidth:E,rotateInterval:F,autoRotate:G,imageGroupWidth:H,fallbackImageWidth:I,numberOfTimesRotated:J,hoverTimeout:K};b&&(c.customLogParams=b)}function d(){if(c("Start initialization"),clearInterval(Q),n.addClass("acs-shwcs-loading-fallback-hidden"),p.removeClass("acs-shwcs-hidden"),e(),p.hasClass("acs-shwcs-autorotate")){var a=!1;G.start()}p.hover(function(){clearTimeout(K),K=setTimeout(function(){a=!0,p.hasClass("acs-shwcs-autorotate")&&G.pause()},250)},function(){clearTimeout(K),a&&(a=!1,p.hasClass("acs-shwcs-autorotate")&&G.start())}),N=(new Date).getTime();var b=N-O;c("End initialization",{startTime:O,endTime:N,timeToLoad:b})}function e(){m=l.width(),I=o.width(),s=Math.floor(m>I+112?I:m-112),t=Math.floor(o.height()),D=Math.floor((m-s)/2),v=Math.floor(s+1.5*u-D),w=0-v-(s+u),p.hasClass("acs-shwcs-image-wrap-hide-prairiedog")&&(s=I,s>m&&(s=m),p.css({maxWidth:s}),v=s,w=0-v-s,u=0,E=48),H=s*k+u*k,j.each(function(a,b){L(b).find("img").width();L(b).find("img").attr("src",L(b).find("img").data("src")),L(b).css({width:s,height:t,marginRight:u/2,marginLeft:u/2}),L(b).find("img").css({marginLeft:0-I/2})}),q.css({width:H,height:t}),r.css({height:t}),1===x?q.css({left:w}):q.css({left:w-(x-1)*(s+u)}),l.find(".acs-shwcs-arrow").css({width:E||D-u})}function f(){q.stop(!0,!0),x--;var a=Math.ceil(q.position().left)+(s+u),b=w+2*(s+u)-(s+u),d=0-v-(s+u)*(j.length-4);c("slideLeft()",{newLeft:a,firstSlidePosition:b,loopPosition:d,imageGroupPositionLeft:Math.ceil(q.position().left),firstSlidePositionMinusTwenty:b-20,newLeftMinusTwenty:a-20}),q.animate({left:a},i.animationSpeed,i.easing,function(){(a===b||b+20>a&&a+20>b)&&(x=j.length-4,q.css({left:d}))})}function g(){q.stop(!0,!0),x++;var a=Math.ceil(q.position().left)-(s+u),b=w+2*(s+u)-(s+u)*(j.length-2);c("slideRight()",{newLeft:a,lastSlidePosition:b,imageGroupPositionLeft:Math.ceil(q.position().left),lastSlidePositionMinusTwenty:b-20,newLeftMinusTwenty:a-20}),q.animate({left:a},i.animationSpeed,i.easing,function(){(a===b||a>b-20&&b>a-20)&&(x=1,q.css({left:w}))})}var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=a,M="#"+b;i={sideMargin:6,autoRotateTime:5e3,animationSpeed:220,easing:"easeInOutSine"},l=L(M),m=l.width(),n=l.find(".acs-shwcs-loading-fallback"),o=n.find("img"),p=l.find(".acs-shwcs-image-wrap"),q=l.find(".acs-shwcs-imagegroup-wrap"),r=l.find(".acs-shwcs-image-wrap-inner"),u=i.sideMargin,x=1,z=q.find("div:first"),A=z.next(),B=q.find("div:last"),C=B.prev(),z.clone().appendTo(q),A.clone().appendTo(q),B.clone().prependTo(q),C.clone().prependTo(q),j=q.find(".acs-shwcs-image-single"),k=j.length,J=0,G={start:function(){c("Start rotation"),clearInterval(F),F=setInterval(function(){J++,l.isOnScreen(0,0)&&g()},i.autoRotateTime)},pause:function(){c("Pause rotation"),clearInterval(F)}},L.easing.easeInOutSine=function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},function(a){a.fn.isOnScreen=function(b,c){(null===b||"undefined"==typeof b)&&(b=1),(null===c||"undefined"==typeof c)&&(c=1);var d=a(window),e={top:d.scrollTop(),left:d.scrollLeft()};e.right=e.left+d.width(),e.bottom=e.top+d.height();var f=this.outerHeight(),g=this.outerWidth();if(!g||!f)return!1;var h=this.offset();h.right=h.left+g,h.bottom=h.top+f;var i=!(e.right<h.left||e.left>h.right||e.bottom<h.top||e.top>h.bottom);if(!i)return!1;var j={top:Math.min(1,(h.bottom-e.top)/f),bottom:Math.min(1,(e.bottom-h.top)/f),left:Math.min(1,(h.right-e.left)/g),right:Math.min(1,(e.right-h.left)/g)};return j.left*j.right>=b&&j.top*j.bottom>=c}}(a);var N,O=(new Date).getTime(),P=!1,Q=setInterval(function(){o.height()<30||P===!0||(P=!0,d())},10);L(window).resize(function(){clearTimeout(y),y=setTimeout(e,250)}),l.find(".acs-shwcs-arrow-left").click(function(){f()}),l.find(".acs-shwcs-arrow-right").click(function(){g()})});