(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(20),n(21),n(132),{name:"Search",props:{mobile:{type:Boolean,default:function(){return!1}}},data:function(){return{query:null,search:null,isLoading:!1,articles:[]}},computed:{menu:function(){return{auto:!1,rounded:!0,flat:!0,right:!0,maxHeight:this.mobile?"auto":304,origin:"right top"}}},watch:{search:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return e.articles=[],n.abrupt("return");case 3:return e.isLoading=!0,n.next=6,e.$content(e.$i18n.locale,{deep:!0}).sortBy("createdAt","asc").limit(12).search(t).fetch();case 6:e.articles=n.sent,e.isLoading=!1;case 8:case"end":return n.stop()}}),n)})))()}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-autocomplete",{class:{"mw-300":!t.mobile},attrs:{items:t.articles,"is-loading":t.isLoading,"search-input":t.search,"no-filter":"",clearable:"","hide-details":"","hide-selected":"",flat:"",outlined:!t.mobile,filled:t.mobile,solo:"",attach:"",dense:!t.mobile,rounded:!t.mobile,"prepend-inner-icon":"mdi-magnify","full-width":t.mobile,"allow-overflow":!1,"menu-props":t.menu},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("v-list-item-title",[t._v("\n        "+t._s(t.$t("search.noResults"))+"\n      ")])],1)]},proxy:!0},{key:"selection",fn:function(e){var r=e.attr,o=e.on,c=e.item,l=e.selected;return[n("v-chip",t._g(t._b({staticClass:"white--text",attrs:{"input-value":l,color:"blue-grey"}},"v-chip",r,!1),o),[n("span",{domProps:{textContent:t._s(c.title)}})])]}},{key:"item",fn:function(e){var r=e.item;return[n("v-list-item",{attrs:{flat:"",to:{path:r.path}},on:{click:function(e){return t.$emit("resultClicked")}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(r.title)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(r.description)}})],1)],1)]}}]),model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})}),[],!1,null,null,null);e.default=component.exports},139:function(t,e,n){"use strict";var r=n(3);n(20),n(21),n(56),n(24),n(66),n(44);e.a=function(t){var e=t.app;e.i18n.onLanguageSwitched=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,r){var o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("content/fetch");case 2:o=e.router.history.current.fullPath,s=o.split("/"),e.i18n.locales.filter((function(i){return i.code===s[1]})).length&&e.i18n.locale!==s[1]&&(s[1]=e.i18n.locale,o=s.join("/"),e.router.replace({path:o}));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}},170:function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("6570a8f6",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";n.r(e);var r={props:{side:{type:String,default:function(){return"right"}},id:{type:String,default:function(){return"navigation"}},dark:{type:Boolean,default:function(){return!0}}},data:function(){return{shown:!1,width:256,borderSize:2}},computed:{show:{get:function(){return this.$store.state.drawers[this.id]||!1},set:function(t){this.$store.dispatch("drawers/set_"+this.id,t)}}},mounted:function(){this.setBorderWidth(),this.setEvents()},methods:{setBorderWidth:function(){var t="drawer-"+this.id,i=this.$refs[t].$el.querySelector(".v-navigation-drawer__border");i.style.width=this.borderSize+"px",i.style.cursor="ew-resize"},setEvents:function(){var t="drawer-"+this.id,e=this.borderSize,n=this.$refs[t].$el,r=n.querySelector(".v-navigation-drawer__border"),o=this,c=n.classList.contains("v-navigation-drawer--right")?"right":"left";function l(t){document.body.style.cursor="ew-resize";var e="right"===c?document.body.scrollWidth-t.clientX:t.clientX;n.style.width=e+"px"}r.addEventListener("mousedown",(function(t){t.offsetX<e&&(n.style.transition="initial",document.addEventListener("mousemove",l,!1))}),!1),document.addEventListener("mouseup",(function(){n.style.transition="",o.width=n.style.width,document.body.style.cursor="",document.removeEventListener("mousemove",l,!1)}),!1)}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{ref:"drawer-"+t.id,attrs:{app:"",left:"left"===t.side,right:"left"!=t.side,width:t.width,clipped:"right"===t.side,fixed:"",flat:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},195:function(t){t.exports=JSON.parse('{"a":"1.0.0"}')},197:function(t){t.exports=JSON.parse('{"favicon":"favicon.png","logo":{"dark":"octano-dark.svg","light":"octano-light.svg"},"url":"https://octanolabs.github.io/static","github":"https://github.com/octanolabs/static","theme":{"dark":true,"themes":{"dark":{"primary":"#6fceb7","secondary":"#e76754","accent":"#ff00ff","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#2E2E2E","zebrastripes":"#1E1E1E"},"light":{"primary":"#00ccff","secondary":"#ff00cb","accent":"#f30","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#E1E1E1","zebrastripes":"#F1F1F1"}},"options":{"customProperties":true}},"i18n":{"default":"en","locales":[{"code":"en","name":"English"},{"code":"es","name":"Español"},{"code":"ru","name":"Pусский"},{"code":"zh","name":"中文"}]},"router":{"base":"/static/"}}')},200:function(t,e,n){"use strict";var r=n(3),o=(n(24),n(20),n(192)),c=n(103),l=n(201),d={name:"DefaultLayout",components:{ResizableDrawer:o.default,Search:c.default,SearchMobile:l.default},data:function(){return{fab:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("set_mobile",window.innerWidth<600);case 2:return e.next=4,t.$store.dispatch("content/fetch");case 4:t.$store.state.mobile||(t.$store.dispatch("drawers/set_navigation",!0),t.$store.dispatch("drawers/set_toc",!0));case 5:case"end":return e.stop()}}),e)})))()},computed:{darkmode:{get:function(){return this.$vuetify.theme.dark},set:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},theme:function(){return this.$vuetify.theme.dark?"dark":"light"},params:function(){return this.$store.state.params},avlLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},locale:function(){return this.$i18n.locale},groups:function(){return this.$store.state.content.groups},items:function(){return this.$store.state.content.items},article:function(){return this.$store.state.content.selected.article},isMobile:function(){return this.$store.state.mobile}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{toggleNavDrawer:function(){this.$store.dispatch("drawers/toggleNavigation")},onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo("header",{duration:300,offset:0,easing:"easeInOutCubic"})},onResize:function(){this.$store.dispatch("set_mobile",window.innerWidth<600)}}},f=n(37),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{fixed:"",app:"",flat:t.isMobile,"clipped-right":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleNavDrawer()}}}),t._v(" "),n("v-btn",{attrs:{icon:"",nuxt:"",to:"/"}},[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-spacer"),t._v(" "),t.isMobile?[n("search-mobile")]:[n("search")],t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[n("v-icon",[t._v("mdi-theme-light-dark")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",[t._l(t.avlLocales,(function(e,r){return n("v-list-item",{key:r,on:{click:function(n){return t.$i18n.setLocale(e.code)}}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),t._v(" "),n("v-divider"),t._v(" "),n("v-list-item",{attrs:{href:t.params.github,target:"_blank"}},[n("v-list-item-title",[t._v(t._s(t.$t("helpTranslate")))])],1)],2)],1),t._v(" "),n("v-btn",{attrs:{icon:"",href:t.params.github,target:"_blank"}},[n("v-icon",[t._v("mdi-github")])],1)],2),t._v(" "),n("resizable-drawer",{attrs:{id:"navigation",side:"left"},scopedSlots:t._u([{key:"append",fn:function(){},proxy:!0}])},[n("v-toolbar",[n("v-list",{staticClass:"pa-0",attrs:{dense:""}},[n("v-list-item",[n("v-list-item-avatar",[n("img",{attrs:{src:t.params.logo[t.theme],height:"24",width:"24"}})]),t._v(" "),n("v-list-item-content",{staticClass:"text-right"},[n("h1",{staticStyle:{color:"var(--v-primary-base)"}},[t._v(t._s(t.$t("title")))]),t._v(" "),n("v-list-item-subtitle",{staticStyle:{color:"var(--v-secondary-base)"}},[t._v("\n              "+t._s(t.$t("subtitle"))+"\n            ")])],1)],1)],1)],1),t._v(" "),n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{link:"",to:{path:e.path}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t._v(" "),t._l(t.groups,(function(e,r){return n("v-list-group",{key:r,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[t._v(" "),e.items?t._l(e.items,(function(e,i){return n("v-list-item",{key:i,attrs:{link:"",to:{path:e.path}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})):t._e()],2)}))],2)],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"pb-12"},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{staticClass:"px-2",staticStyle:{"background-color":"var(--v-primary-base)","font-size":"12px","font-weight":"600"},attrs:{padless:"",app:"",fixed:"",height:"22px"}},[n("v-spacer"),t._v(" "),n("span",{staticStyle:{color:"#fff"}},[t._v("\n      handcrafted by "),n("v-icon",{attrs:{color:"#fff",dense:""}},[t._v("mdi-ninja")]),t._v(" using\n      "),n("a",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{href:"https://github.com/octanolabs/static",target:"_blank"}},[t._v("\n        octano static\n      ")])],1),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"mb-5",staticStyle:{"z-index":"5"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},201:function(t,e,n){"use strict";n.r(e);var r={name:"SearchMobile",components:{Search:n(103).default},data:function(){return{dialog:!1}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-magnify")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{color:"primary"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.$t("search.title")))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items")],1),t._v(" "),n("search",{attrs:{mobile:!0},on:{resultClicked:function(e){t.dialog=!1}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,n){n(204),t.exports=n(205)},233:function(t,e,n){"use strict";n(170)},234:function(t,e,n){var r=n(69)(!1);r.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=r},237:function(t,e,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("2530bd9f",content,!0,{sourceMap:!1})},238:function(t,e,n){var r=n(69)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap);"]),r.push([t.i,'::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:var(--v-staticborders-base)!important;z-index:4!important}::-webkit-scrollbar-thumb{background:var(--v-primary-base)!important}.ff-scrollbar-fix{transform:translateZ(0);scrollbar-color:var(--v-primary-base) var(--v-staticborders-base);scrollbar-width:thin}html{overflow-y:auto!important;scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin}a{text-decoration:none!important}.v-application{font-family:"IBM Plex Mono",monospace!important}.nuxt-content>h2{margin-bottom:8px}.nuxt-content>ul{margin-top:20px;margin-bottom:20px}.bg-0{background-color:transparent!important}.no-tt{text-transform:none!important}.v-navigation-drawer__border:hover{background-color:var(--v-primary-base)!important}pre{max-width:100%;overflow-x:auto;background-color:transparent;word-wrap:normal;white-space:pre;transform:translateZ(0);scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin}pre>code{background-color:transparent!important;font-family:"IBM Plex Mono",monospace!important}.v-application pre>code{white-space:pre!important;padding:0!important}.nuxt-content-highlight{position:relative}.filename{position:absolute;right:0;top:0;line-height:1;margin-right:1rem;margin-top:.75rem;color:#fff;z-index:2}pre[class*=language-]{font-family:"IBM Plex Mono",monospace!important}.nuxt-content-highlight{margin-top:20px;margin-bottom:20px}.nuxt-content-highlight>div.code-toolbar>div.toolbar>div.toolbar-item>button{padding:4px;border-radius:4px;border:1px solid #fff!important;color:#fff;position:absolute;right:0;bottom:0;margin-right:1rem;margin-bottom:.75rem;font-family:"IBM Plex Mono",monospace!important}.nuxt-content-highlight>.code-toolbar>div.toolbar>div.toolbar-item>button:hover{border:1px solid var(--v-primary-base)!important;color:var(--v-primary-base)}.code-toolbar{position:relative}.code-toolbar>div.toolbar{position:absolute;right:0;bottom:0}.static-toc-active{color:var(--v-primary-base)!important;border-left:6px solid var(--v-primary-base)}.v-list-item--link:before{background-color:transparent!important}table{width:100%;border-collapse:collapse;margin-bottom:10px}.nuxt-content>h2{margin-top:50px}.mw-300{max-width:300px!important}.static-toc{border-left:6px solid var(--v-staticborders-base)!important}.bt-1{border-top:1px solid var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link,.nuxt-content>h2>a>span.header-link,.nuxt-content>h3>a>span.header-link,.nuxt-content>h4>a>span.header-link,.nuxt-content>h5>a>span.header-link,.nuxt-content>h6>a>span.header-link{color:var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link:hover,.nuxt-content>h2>a>span.header-link:hover,.nuxt-content>h3>a>span.header-link:hover,.nuxt-content>h4>a>span.header-link:hover,.nuxt-content>h5>a>span.header-link:hover,.nuxt-content>h6>a>span.header-link:hover{color:var(--v-primary-base)!important}.nuxt-content>table>tbody>tr>td,.nuxt-content>table>thead>tr>th{border:1px solid var(--v-staticborders-base)!important;padding:6px!important}.nuxt-content>table>tbody>tr:nth-child(odd){background:var(--v-zebrastripes-base)!important}.theme--light.v-toolbar{background-color:#f5f5f5!important}.theme--dark.v-navigation-drawer{background-color:#121212!important}.theme--dark>div.v-card__text>div.nuxt-content-container>.nuxt-content-editor{color:#fff!important}',""]),t.exports=r},243:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var r=n(195),o=function(){return{static:r.a,mobile:!1}},c={SET_MOBILE:function(t,e){t.mobile=e}},l={set_mobile:function(t,e){var n=t.commit;e!==t.state.mobile&&n("SET_MOBILE",e)}}},244:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return v})),n.d(e,"mutations",(function(){return h})),n.d(e,"actions",(function(){return m}));n(25),n(10),n(17),n(31),n(13),n(16),n(32),n(34),n(18);var r=n(5),o=n(3),c=(n(20),n(21),n(44),n(196)),l=n.n(c);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v=function(){return{groups:null,items:null,selected:{article:null,prev:null,next:null,fallback:!1}}},h={SET_CONTENT:function(t,content){t.groups=content.groups,t.items=content.items},SET_SELECTED:function(t,e){t.selected=e}},m={fetch:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,g,c,f,v,i,h,m,_,y,x,w,k;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,o=e.$i18n.locale,n.next=5,e.$content(o,{deep:!0}).where({type:"group"}).sortBy("index").fetch();case 5:g=n.sent,c={},f=d(g);try{for(f.s();!(v=f.n()).done;)i=v.value,h=i.dir.substr(1).replace("/","-"),i.items=[],c[h]=i}catch(t){f.e(t)}finally{f.f()}return n.next=11,e.$content(o,{deep:!0}).where({type:{$ne:"group"}}).sortBy("createdAt").fetch();case 11:m=n.sent,_=[],y=d(m);try{for(y.s();!(x=y.n()).done;)(w=x.value).type||(w.dir!=="/"+o?(k=w.dir.substr(1).replace("/","-"),w.group=k,c[k]&&c[k].items.push(w)):_.push(w))}catch(t){y.e(t)}finally{y.f()}r("SET_CONTENT",{groups:c,items:_}),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),l.a.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})))()},select:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c,path,l,d,f,article,v,h,m,_;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=t.commit,path=e.path,l=e.fallback,o.next=5,n.$content({deep:!0}).where({path:path}).fetch();case 5:if(d=o.sent,f=Object(r.a)(d,1),!(article=f[0])){o.next=19;break}return o.next=11,n.$content(n.$i18n.locale,{deep:!0}).where({type:{$ne:"group"}}).only(["title","slug","path"]).sortBy("createdAt","asc").surround(article.slug).fetch();case 11:return v=o.sent,h=Object(r.a)(v,2),m=h[0],_=h[1],c("SET_SELECTED",{article:article,prev:m,next:_,fallback:l}),o.abrupt("return",article);case 19:return o.abrupt("return",null);case 20:case"end":return o.stop()}}),o)})))()}}},245:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c}));var r=function(){return{navigation:!1,toc:!1}},o={SET_NAVIGATION:function(t,e){t.navigation=e},SET_TOC:function(t,e){t.toc=e}},c={toggleNavigation:function(t){(0,t.commit)("SET_NAVIGATION",!t.state.navigation)},toggleToc:function(t){(0,t.commit)("SET_TOC",!t.state.toc)},set_navigation:function(t,e){(0,t.commit)("SET_NAVIGATION",e)},set_toc:function(t,e){(0,t.commit)("SET_TOC",e)}}},246:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o}));var r=n(197),o=function(){return r}},55:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(233),n(37)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports}},[[203,5,1,6]]]);