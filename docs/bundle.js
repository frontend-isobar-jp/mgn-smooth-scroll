!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";new(function(t){return t&&t.__esModule?t:{default:t}}(n(1)).default)("a",{easing:"easeOutQuint",ignore:".ignore",posFix:60,blank:!0}).ScrollEnd=function(){console.log("ScrollEnd")}},function(t,e,n){"use strict";var o,r;"function"==typeof Symbol&&Symbol.iterator;void 0===(r="function"==typeof(o=function(){function t(t,e){this.selector=t,this.btn=document.querySelectorAll(this.selector),null==e&&(e={}),this.speed=e.speed?e.speed:800,this.easing=e.easing?e.easing:"linear",this.posFix=e.posFix?e.posFix:0,this.ignore=e.ignore?e.ignore:"",this.blank=!!e.blank&&e.blank,this.customAnchor=e.customAnchor?e.customAnchor:"#/",this.moveFlag=!1,this.ScrollEnd=function(){};var n=this;this.btn[0]&&(this.oldBrowser=this.GetAndroidVersion()<4.4||!this.btn[0].classList,this.Init()),this.blank&&window.addEventListener("load",function(){setTimeout(function(){n.AnchorLink()},200)})}t.prototype.Init=function(){for(var t=this,e=0;e<this.btn.length;e++)this.btn[e].addEventListener("click",function(e){for(var n=!1,o=t.ignore.split(","),r=0;r<o.length;r++){var i=o[r].split(".")[1]?o[r].split(".")[1]:o[r].split("#")[1];e.currentTarget.classList?e.currentTarget.classList.contains(i)&&(n=!0):new RegExp("(^| )"+i+"( |$)","gi").test(e.currentTarget.className)&&(n=!0),e.currentTarget.id==i&&(n=!0)}if(!t.moveFlag){var s=e.currentTarget.getAttribute("href");if(s&&""==s.split("#")[0]&&!n){e.preventDefault(),t.moveFlag=!0;var u=s.split("#")[1],l=document.getElementById(u),c=t.GetOffset(l).top;t.SmoothScroll(c)}}})},t.prototype.SmoothScroll=function(t){var n,o,r=this,i=t-this.posFix,s=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,u=i-s,l=s,c=(new Date).getTime(),a=s,f=function(){r.oldBrowser||(n=requestAnimationFrame(o));var t=(new Date).getTime(),f=t-c,d=Math.round(e[r.easing](f,s,Math.abs(u),r.speed));l+=u>0?d-a:-(d-a),window.scroll(0,l),a=d,f>=r.speed&&(r.moveFlag=!1,r.ScrollEnd(),r.oldBrowser?clearInterval(o):cancelAnimationFrame(n),window.scroll(0,i))};this.oldBrowser?o=setInterval(f,33):(o=f)()},t.prototype.GetOffset=function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}},t.prototype.AnchorLink=function(){for(var t=0;t<this.btn.length;t++){for(var e=!1,n=this.ignore.split(","),o=this.btn[t].getAttribute("href"),r=0;r<n.length;r++){var i=n[r].split(".")[1]?n[r].split(".")[1]:n[r].split("#")[1];this.btn[t].classList?this.btn[t].classList.contains(i)&&(e=!0):new RegExp("(^| )"+i+"( |$)","gi").test(this.btn[t].className)&&(e=!0),this.btn[t].id.match(i)&&(e=!0)}if(o&&!e){var s=o.split("#");s.length>1&&""!=s[0]&&this.btn[t].setAttribute("href",o.replace(/#/g,this.customAnchor))}}if(location.href.split(this.customAnchor)[1]){var u=document.getElementById(location.href.split(this.customAnchor)[1]),l=this.GetOffset(u).top;this.SmoothScroll(l)}},t.prototype.GetAndroidVersion=function(){var t=navigator.userAgent;if(t.toLowerCase().indexOf("android")>0&&t.toLowerCase().indexOf("mobile")>0)return parseFloat(t.slice(t.indexOf("Android")+8))};var e={linear:function(t,e,n,o){return n*(t/=o)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutCubic:function(t,e,n,o){return t/=o,n*((t-=1)*t*t+1)+e},easeInOutCubic:function(t,e,n,o){return(t/=o/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,o){return n*(t/=o)*t*t*t+e},easeOutQuart:function(t,e,n,o){return t/=o,-n*((t-=1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,o){return(t/=o/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,o){return n*(t/=o)*t*t*t*t+e},easeOutQuint:function(t,e,n,o){return t/=o,n*((t-=1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,o){return(t/=o/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}};return t})?o.call(e,n,e,t):o)||(t.exports=r)}]);