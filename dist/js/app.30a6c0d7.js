(function(t){function e(e){for(var o,n,l=e[0],u=e[1],c=e[2],p=0,h=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);a&&a(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,l=1;l<i.length;l++){var u=i[l];0!==s[u]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var o={},s={app:0},r=[];function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=o,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/picture-cut/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var a=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0b54":function(t,e,i){},"19f6":function(t,e,i){t.exports=i.p+"img/2.4f80a077.jpg"},"2a19":function(t,e,i){},"37b4":function(t,e,i){t.exports=i.p+"img/8.7cc1cff8.jpg"},"45a5":function(t,e,i){t.exports=i.p+"img/5.8bace59c.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("1951"),i("450d");var o=i("eedf"),s=i.n(o),r=i("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("PictureWork",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("canvas",{staticStyle:{position:"fixed",left:"100%"},attrs:{id:"canvas-cut",width:"200",height:"200"}}),e("div",{staticClass:"picuurelist"},[e("div",{staticClass:"imgTotalBox"},t._l(t.pictureList,(function(i,o){return e("div",{key:o,staticClass:"imgBox"},[e("img",{staticClass:"img",style:t.basisStyle,attrs:{draggable:"false",src:i.src,alt:"无资源"}}),e("img",{staticClass:"img move_img",style:"position:absolute;z-index:99;left:0px;top:0px;",attrs:{draggable:"false",src:i.src,alt:"无资源"},on:{mousedown:function(e){return t.movedownpicture(i,e)},mousemove:function(e){return t.movepicture(i,e)},mouseup:t.mouseuppicture}})])})),0)]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"ruler",on:{click:t.rulerClick}},t._l(t.rulerPictureList,(function(i,o){return e("div",{key:o,ref:"bottomImg",refInFor:!0,staticClass:"imgBox",style:i.styleWidth,attrs:{id:"bottomImg"},on:{mouseleave:function(e){return t.leaveImg(i,e)},mouseover:function(e){return t.overImg(i)},mousedown:function(e){return t.rulerImgDown(i,o,e)},mousemove:function(e){return t.rulerImgMove(i,e)},mouseup:t.rulerImgUp}},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.isshow,expression:"item.isshow"}],staticClass:"buttonGroup"},[e("el-button",{attrs:{type:"primary",disabled:i.isCut},on:{click:function(e){return t.cutImg(o)}}},[t._v("剪切")]),e("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.deleteImg(o)}}},[t._v("删除")])],1),e("img",{staticClass:"img",attrs:{draggable:"false",src:i.src,alt:"无内容"}})])})),0)])])},c=[],a={name:"pictureWork",data(){const t=[];let e,o,s,r,n,l,u,c=!1,a=!1,p=!0,h="position:absolute;z-index:90;";for(let g=1;g<=8;g++){const e=new Image;e.src=i("96de")("./"+g+".jpg"),e.left="0px",e.top="0px",e.isshow=!1,e.imgWidth=200,e.styleWidth="width:200px;",e.isCut=!1,e.onload=function(){console.log("图片"+g+"已经加载好！")},console.log(e),t.push(e)}let f=[];return{pictureList:t,mousedown:c,isMove:a,basisStyle:h,rulerPictureList:f,x:e,y:o,x1:s,x2:r,y1:n,y2:l,pushImg:p,nowI:u}},methods:{overImg(t){t.isshow=!0,this.$forceUpdate()},leaveImg(t,e){console.log(e),e.offsetY<=-1&&e.offsetY>=-49&&e.offsetX<=199&&e.offsetX>=1||(t.isshow=!1,this.$forceUpdate())},deleteImg(t){this.rulerPictureList.splice(t,1)},cutImg(t){this.rulerPictureList[t].isshow=!1,this.$forceUpdate();var e=document.getElementById("canvas-cut"),i=e.getContext("2d");let o=this.rulerPictureList[t];o.crossOrigin="Anonymous";let s=this;o.onload=function(){let r=s;console.log("要剪切的图片的长宽为:",o.width,o.height),i.drawImage(o,0,0,o.width/2,o.height,0,0,o.imgWidth/2,200);var n=e.toDataURL("image/png");let l=new Image;l.src=n,l.left="0px",l.top="0px",l.isshow=!1,l.imgWidth=o.imgWidth/2,l.styleWidth="width:"+o.imgWidth/2+"px;",l.width=o.width/2,l.height=o.height,l.isCut=!0,l.onload=function(){console.log("要剪切的图片1的长宽为:",l.width,l.height);let s=r;i.drawImage(o,o.width/2,0,o.width/2,o.height,0,0,o.imgWidth/2,200),n=e.toDataURL("image/png");let u=new Image;u.src=n,u.left="0px",u.top="0px",u.isshow=!1,u.imgWidth=o.imgWidth/2,u.width=o.width/2,u.height=o.height,u.isCut=!0,u.styleWidth="width:"+o.imgWidth/2+"px;",u.onload=function(){let e=s.$refs.bottomImg;for(let t of e)t.style.removeProperty("transition"),t.style.zIndex=99;s.rulerPictureList.splice(t,1,l,u),setInterval(()=>{for(let t of e)t.style.transition="all 0.5s ease-out"},500),console.log("裁剪完的：",l.width,u.width)}}}},rulerClick(t){console.log(t)},movepicture(t,e){if(!1===this.mousedown)return;let i=e.target;i.style.left=Number(t.left.split("px")[0])+e.clientX-this.x+"px",i.style.top=Number(t.top.split("px")[0])+e.clientY-this.y+"px",i.style.zIndex=100,!0===this.pushImg&&e.clientX>this.x1&&e.clientX<this.x2&&e.clientY>this.y1&&e.clientY<this.y2&&(console.log(e),this.rulerPictureList.length<4&&this.rulerPictureList.push(t),this.pushImg=!1)},movedownpicture(t,e){let i=e.target;this.x=e.clientX,this.y=e.clientY,t.left=i.style.left,t.top=i.style.top,this.mousedown=!0,this.x1=e.clientX-e.target.offsetParent.offsetLeft-e.offsetX,this.x2=this.x1+949,this.y2=865,this.y1=666},mouseuppicture(t){this.mousedown=!1,this.pushImg=!0;let e=t.target;e.style.left="0px",e.style.top="0px",e.style.zIndex=99},rulerImgDown(t,e,i){i.target.style.removeProperty("transition"),this.nowI=e,this.mousedown=!0,this.isMove=!0,this.x=i.clientX,t.left=i.layerX+"px"},rulerImgMove(t,e){if(e.target.style.removeProperty("transition"),!1===this.mousedown||!1===this.isMove)return;let i=e.target;i.style.zIndex=100,i.style.left=e.clientX-this.x+"px",console.log(t.imgWidth);let o=Math.floor((e.clientX-this.x)/t.imgWidth);if(console.log(o,this.nowI),0!=o&&-1!=o){o<-1?(o=this.nowI-1,console.log(o,this.nowI),this.rulerPictureList.splice(this.nowI,1,...this.rulerPictureList.splice(o,1,this.rulerPictureList[this.nowI]))):o>0&&(o=this.nowI+1,console.log(o,this.nowI),o<this.rulerPictureList.length&&this.rulerPictureList.splice(this.nowI,1,...this.rulerPictureList.splice(o,1,this.rulerPictureList[this.nowI])));let t=this.$refs.bottomImg;for(let e of t)e.isshow=!1,e.style.pointerEvents="none",e.style.transition="all 0.5s ease-out",e.style.zIndex=99,e.style.removeProperty("left");setTimeout(()=>{for(let e of t)e.style.removeProperty("pointer-events")},500),this.mousedown=!1,this.isMove=!1,this.nowI=o,this.$forceUpdate()}},rulerImgUp(t){let e=t.target;this.mousedown=!1,e.style.zIndex=99;let i=this.$refs.bottomImg;console.log(i);for(let o of i)o.isshow=!1,o.style.pointerEvents="none",o.style.transition="all 0.5s ease-out",o.style.removeProperty("left");setTimeout(()=>{for(let t of i)t.style.removeProperty("pointer-events")},500)}},mounted(){document.onselectstart=function(){return!1}}},p=a,h=(i("ece2"),i("2877")),f=Object(h["a"])(p,u,c,!1,null,null,null),g=f.exports,d={name:"App",components:{PictureWork:g}},m=d,y=(i("e403"),Object(h["a"])(m,n,l,!1,null,null,null)),v=y.exports;i("2a19");r["a"].config.productionTip=!1,r["a"].use(s.a),new r["a"]({render:t=>t(v)}).$mount("#app")},7827:function(t,e,i){},"83dc":function(t,e,i){t.exports=i.p+"img/1.93538f41.jpg"},"922d":function(t,e,i){t.exports=i.p+"img/3.a20a0435.jpg"},"96de":function(t,e,i){var o={"./1.jpg":"83dc","./2.jpg":"19f6","./3.jpg":"922d","./4.jpg":"b397","./5.jpg":"45a5","./6.jpg":"c41d","./7.jpg":"f868","./8.jpg":"37b4"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="96de"},b397:function(t,e,i){t.exports=i.p+"img/4.141abe1f.jpg"},c41d:function(t,e,i){t.exports=i.p+"img/6.9691abde.jpg"},e403:function(t,e,i){"use strict";i("0b54")},ece2:function(t,e,i){"use strict";i("7827")},f868:function(t,e,i){t.exports=i.p+"img/7.2b353392.jpg"}});
//# sourceMappingURL=app.30a6c0d7.js.map