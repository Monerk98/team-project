parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/header/desktop/wave-mob.png":[["wave-mob.145b00ee.png","jKkL"],"jKkL"],"./../images/header/desktop/wave-mob@2x.png":[["wave-mob@2x.9ab22878.png","ijTK"],"ijTK"],"./../images/header/desktop/wave-tab.png":[["wave-tab.af97d6b3.png","d0L2"],"d0L2"],"./../images/header/desktop/wave-tab@2x.png":[["wave-tab@2x.3cfbbf4f.png","hNJ6"],"hNJ6"],"./../images/header/desktop/wave-desktop.png":[["wave-desktop.ec01e9e8.png","ZJ7U"],"ZJ7U"],"./../images/header/desktop/wave-desktop@2x.png":[["wave-desktop@2x.06ed73e6.png","GTl3"],"GTl3"],"./../images/advantages/student.svg":[["student.2844a7da.svg","ryGu"],"ryGu"],"./../images/advantages/mobile.svg":[["mobile.0ccddf2a.svg","CuwE"],"CuwE"],"./../images/advantages/insurance.svg":[["insurance.9addf68a.svg","UFrZ"],"UFrZ"],"./../images/problems/fire.svg":[["fire.dadc44ba.svg","doOm"],"doOm"],"./../images/our-program/elipse.svg":[["elipse.2d3d8b57.svg","OdND"],"OdND"],"./../images/our-program/mobile/mobile@1x.jpg":[["mobile@1x.406b4ecb.jpg","zuex"],"zuex"],"./../images/our-program/mobile/mobile@2x.jpg":[["mobile@2x.619ca346.jpg","bg3g"],"bg3g"],"./../images/our-program/tablet/tablet@1x.jpg":[["tablet@1x.406b4ecb.jpg","KMWf"],"KMWf"],"./../images/our-program/tablet/tablet@2x.jpg":[["tablet@2x.619ca346.jpg","g1of"],"g1of"],"./../images/our-program/desktop/desktop@1x.jpg":[["desktop@1x.cb8cd186.jpg","KMts"],"KMts"],"./../images/our-program/desktop/desktop@2x.jpg":[["desktop@2x.12396ad4.jpg","xZXW"],"xZXW"],"./../images/about/done.svg":[["done.df09c347.svg","XWxf"],"XWxf"],"./../images/guarantee/fire.svg":[["fire.ebaceee1.svg","T5fR"],"T5fR"],"./../images/contacts/mob.png":[["mob.d9d9f2b3.png","Dnqr"],"Dnqr"],"./../images/contacts/mob@2x.png":[["mob@2x.36d646dd.png","fPE5"],"fPE5"],"./../images/contacts/tab.png":[["tab.0e9aba9e.png","Y708"],"Y708"],"./../images/contacts/tab@2x.png":[["tab@2x.f41482f4.png","qTsF"],"qTsF"],"./../images/contacts/newpc.png":[["newpc.b4ece9be.png","dfCi"],"dfCi"],"./../images/contacts/newpc@2x.png":[["newpc@2x.61d1d796.png","d5jK"],"d5jK"],"./../images/footer/instagram-icon.svg":[["instagram-icon.2d70db02.svg","rHBX"],"rHBX"]}],"Focm":[function(require,module,exports) {
"use strict";function t(){const t=document.querySelectorAll('a[href^="#"]');for(let o of t)o.addEventListener("click",function(t){t.preventDefault();const e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})})}require("./sass/main.scss"),t();var o=$(window).height();$(window).resize(function(){o=$(window).height()});var e=!0,n=!0,r=0,c=$("html, body"),i=$("button.up"),s=0,l=0;$(window).scroll(function(){s=c.scrollTop(),n?i.css({right:"20px"}):s>o/3?i.css({right:"20px"}):i.css({right:"-100px"}),l>s||(n=!1,r=0,e=!0,i.text("Up")),l=s}),i.on("click",function(t){e?(r=c.scrollTop(),c.animate({scrollTop:0},500),e=!1,n=!0,n=!0,t.target.textContent="Down"):(c.animate({scrollTop:r},500),e=!0,n=!0,t.target.textContent="Up")});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/team-project/src.c66c3ff8.js.map