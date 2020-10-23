!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=8)}([function(t,n,e){var r=e(4),o=e(5),i=e(6),u=e(7);t.exports=function(t){return r(t)||o(t)||i(t)||u()}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},function(t,n,e){var r=e(3);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),i=e(1),u=e.n(i),a=e(2),c=e.n(a),l=function(){function t(){u()(this,t)}return c()(t,null,[{key:"normalize",value:function(n){return t.scale(n,1/t.length(n))}},{key:"rotate",value:function(t,n){var e=Math.cos(n),r=Math.sin(n);return[t[0]*e-t[1]*r,t[1]*e+t[0]*r]}},{key:"dot",value:function(t,n){return t[0]*n[0]+t[1]*n[1]}},{key:"cross",value:function(t,n){return t[0]*n[1]-t[1]*n[0]}},{key:"add",value:function(t,n){return[t[0]+n[0],t[1]+n[1]]}},{key:"sub",value:function(t,n){return[t[0]-n[0],t[1]-n[1]]}},{key:"projection",value:function(n,e){var r=t.dot(n,e)/t.dot(e,e);return[e[0]*r,e[1]*r]}},{key:"length",value:function(n){return Math.sqrt(t.dot(n,n))}},{key:"scale",value:function(t,n){return[t[0]*n,t[1]*n]}},{key:"collisionCalc",value:function(n,e,r,o){return t.scale(t.add(t.scale(n,r-o),t.scale(e,2*o)),1/(r+o))}},{key:"getAngle",value:function(t){return Math.atan2(t[1],t[0])}}]),t}(),f=function(){function t(){u()(this,t)}return c()(t,null,[{key:"set",value:function(t,n,e){return t[0]=n,t[1]=e,t}},{key:"add",value:function(t,n){return t[0]+=n[0],t[1]+=n[1],t}},{key:"sub",value:function(t,n){return t[0]-=n[0],t[1]-=n[1],t}},{key:"scale",value:function(t,n){return t[0]*=n,t[1]*=n,t}}]),t}(),s=function(){function t(){u()(this,t)}return c()(t,null,[{key:"toPosRate",value:function(t,n,e){return[t[0]*(1-e)+n[0]*e,t[1]*(1-e)+n[1]*e]}},{key:"cross",value:function(t,n,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}},{key:"getCenter",value:function(t,n){return[.5*(t[0]+n[0]),.5*(t[1]+n[1])]}},{key:"getVector",value:function(t,n){return[n[0]-t[0],n[1]-t[1]]}},{key:"addVector",value:function(t,n){return[t[0]+n[0],t[1]+n[1]]}},{key:"distance",value:function(n,e){return l.length(t.getVector(n,e))}}]),t}();function v(t,n,e,r){var o=l.cross(n,r);if(0===o)return null;var i=s.getVector(t,e);return{t0:l.cross(i,r)/o,t1:l.cross(i,n)/o}}var p=function(t,n,e){var r=v(t,n,e.point,e.vector);if(r)return s.addVector(t,l.scale(n,r.t0))};function d(){var t=w.flatMap((function(t,n){return t.points.length>2?t.points.map((function(t,n,e){return{point:t,vector:s.getVector(t,e[(n+1)%e.length])}})):t.points.length>1?{point:t.points[0],vector:s.getVector(t.points[0],t.points[1])}:void 0})),n=function(t){for(var n=[],e=0;e<t.length-1;e++)for(var r=e+1;r<t.length;r++){var o=v(t[e].point,t[e].vector,t[r].point,t[r].vector);o&&o.t0>0&&o.t0<1&&o.t1>0&&o.t1<1&&n.push(s.addVector(t[e].point,l.scale(t[e].vector,o.t0)))}return n}(t),e=[].concat(o()(w.flatMap((function(t){return t.points}))),o()(n)).filter((function(n){var e=s.getVector(k,n);return function(t,n,e){var r=l.length(n);return!e.some((function(e){var o=v(t,n,e.point,e.vector);if(o&&o.t0>0&&o.t1>=0&&o.t1<=1){var i=o.t0*l.length(n);return i<r&&Math.abs(i-r)>1e-7}}))}(k,e,t)})),r=e.map((function(t,n){return{angle:l.getAngle(s.getVector(k,t)),index:n}}));r.sort((function(t,n){return t.angle-n.angle})),x=r.flatMap((function(n,r,o){var i=e[n.index],u=e[o[(r+1)%o.length].index],a=s.toPosRate(i,u,.5),c=s.getVector(k,a),f=function(t,n,e){var r=1/0,o=-1,i=null;return e.forEach((function(e,u){var a=v(t,n,e.point,e.vector);if(a&&a.t0>=0&&a.t1>=0&&a.t1<=1){var c=a.t0*l.length(n);c<r&&(r=c,o=u,i=a)}})),{index:o,intersectionData:i}}(k,c,t);return-1!=f.index&&f.intersectionData.t0>1+1e-7?[p(k,s.getVector(k,i),t[f.index]),p(k,s.getVector(k,u),t[f.index])]:[i,u]}))}function y(t,n,e,r){e&&(t.beginPath(),n.forEach((function(n,e){t[0===e?"moveTo":"lineTo"].apply(t,o()(n))})),t.closePath(),t[r+"Style"]=e,t[r]())}var g,h,m=document.getElementById("canvas"),b=m.getContext("2d"),k=[300,300],x=[],w=[];w.push({points:[[0,0],[600,0],[600,600],[0,600]],color:"",type:"stroke"}),g=window.innerWidth,h=window.innerHeight;for(var M=0;M<100;M++){var V=[g*Math.random(),h*Math.random()],j=2*Math.PI*Math.random(),O=20+20*Math.random();w.push({points:[V,s.addVector(V,l.scale([Math.cos(j),Math.sin(j)],O))],color:"#999999",type:"stroke"})}var P=function(t){g=m.width=window.innerWidth,h=m.height=window.innerHeight,f.set(w[0].points[0],0,0),f.set(w[0].points[1],g,0),f.set(w[0].points[2],g,h),f.set(w[0].points[3],0,h)};window.addEventListener("mousemove",(function(t){f.set(k,t.pageX,t.pageY)})),window.addEventListener("resize",P),P(),function t(){requestAnimationFrame(t),b.clearRect(0,0,g,h),d(),b.lineJoin="round",b.lineCap="round",b.save(),y(b,x,"#ff0","fill"),b.restore(),b.save(),b.lineWidth=2,w.forEach((function(t){y(b,t.points,t.color,t.type)})),b.restore()}()}]);