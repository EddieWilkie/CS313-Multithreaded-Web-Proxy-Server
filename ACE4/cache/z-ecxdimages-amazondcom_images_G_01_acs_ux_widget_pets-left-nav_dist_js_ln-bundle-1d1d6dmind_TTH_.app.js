var ACSUX=window.ACSUX||{};ACSUX.ln||(ACSUX.ln=function(a,b){function c(a,b,c){var d;if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toGMTString()}else d="";b instanceof Array&&(b=b.join(",")),document.cookie=a+"="+b+d+"; path=/"}function d(a){for(var b=document.cookie.split(/\;\s?/g),c={},d=0;d<b.length;d++){var e=b[d],f=e.split(/\=/);c[f.shift()]=f.join("=")}return value=c[a],null==value||void 0==value||0==value.length?[]:value.split(",")}var e=a,f="#"+b,g=e(f),h=g.data("acscookiename"),j=d(h);for(0===j.length&&(j=[1],c(h,j,1e4)),i=0;i<j.length;i++){var k=j[i]-1,l=g.find(".acs-ln-nav-section:eq("+k+")");l.addClass("acs-ln-nav-expanded").css("max-height",999),l.find(".a-icon").addClass("a-icon-section-collapse")}g.find(".acs-ln-nav-section").length==g.find(".acs-ln-nav-expanded").length&&g.find(".acs-ln-expand-all").addClass("acs-ln-clicked"),g.find(".acs-ln-header").click(function(){var a,b=parseInt(e(this).css("height").replace("px","")),f=parseInt(e(this).siblings().css("height").replace("px","")),g=b+f+22+"px",i=e(this).parent().index().toString();if(e(this).parent().hasClass("acs-ln-nav-expanded")){e(this).parent().removeClass("acs-ln-nav-expanded"),e(this).parent().css("max-height",45),e(this).find(".a-icon-section-collapse").removeClass("a-icon-section-collapse"),a=d(h);var j=a.indexOf(i);-1!==j&&(a.splice(j,1),c(h,a,1e4))}else e(this).parent().addClass("acs-ln-nav-expanded"),e(this).parent().css("max-height",g),e(this).parent().find(".a-icon").addClass("a-icon-section-collapse"),a=d(h),-1===a.indexOf(i)&&(a.push(i),c(h,a,1e4))}),g.find(".acs-ln-expand-all").click(function(){var a=999;if(e(this).hasClass("acs-ln-clicked"))g.find(".acs-ln-nav-section").removeClass("acs-ln-nav-expanded"),g.find(".acs-ln-nav-section").css("max-height",45),g.find(".acs-ln-nav-section").find(".a-icon").removeClass("a-icon-section-collapse"),e(this).removeClass("acs-ln-clicked"),c(h,[0],1e4);else{g.find(".acs-ln-nav-section").addClass("acs-ln-nav-expanded"),g.find(".acs-ln-nav-section").css("max-height",a),g.find(".acs-ln-nav-section").find(".a-icon").addClass("a-icon-section-collapse"),e(this).addClass("acs-ln-clicked");for(var b=g.find(".acs-ln-nav-section").length,d=[];b>=1;)d.push(b--);c(h,d,1e4)}})});