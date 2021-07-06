(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,6,7],{304:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:function(){return""}},tooltip:{type:String,default:function(){return""}},threeLine:{type:Boolean,default:function(){return!1}}}},r=n(59),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{staticStyle:{"border-bottom":"1px solid #272727"}},[n("v-list-item-action",[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",r,!1),o),[t._v("mdi-information-outline")])]}}])},[t._v(" "),n("span",[t._v("\n        "+t._s(t.tooltip)+"\n      ")])])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.title))]),t._v(" "),n("v-list-item-subtitle",[t._t("subtitle")],2),t._v(" "),t.threeLine?n("v-list-item-subtitle",[t._t("subtitle2")],2):t._e()],1),t._v(" "),n("v-list-item-action",[n("v-list-item-action-text",[t._t("action")],2),t._v(" "),n("v-list-item-action-text",[t._t("action2")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);n(20),n(42),n(51);var o={name:"NodeTable",components:{ExtendedListItem:n(304).default},props:{nodes:{type:Array,required:!0},title:{type:String,default:function(){return""}},breadcrumbs:{type:Array,default:function(){return[]}}},data:function(){return{search:null,expanded:[],tab:null,nf:new Intl.NumberFormat(this.locale,{})}},computed:{isMobile:function(){return this.$store.state.mobile},chartHeaders:function(){return[{text:this.$t("nodes.nodeId.title"),align:"start",sortable:!1,value:"id"},{text:this.$t("nodes.ipAddress.title"),align:"start",sortable:!1,value:"network.remoteAddress"},{text:this.$t("nodes.country"),align:"start",sortable:!0,value:"ip_info.country_name"},{text:this.$t("nodes.client.title"),align:"start",sortable:!0,value:"client.name"},{text:this.$t("nodes.version"),sortable:!0,value:"client.release"},{text:this.$t("nodes.protocolEth"),sortable:!0,align:"center",value:"protocols.eth.version"},{text:this.$t("nodes.protocolSnap"),align:"center",sortable:!0,value:"protocols.snap.version"},{text:this.$t("nodes.forkId.title"),align:"start",sortable:!0,value:"protocols.eth.forkId.tag"},{text:this.$t("nodes.nextFork"),align:"start",sortable:!0,value:"protocols.eth.forkId.nextTag"}]}},methods:{formatHash:function(t,e,n){return t.substr(0,e)+"..."+t.substr(t.length-n)},formatRelease:function(t){return t.split("-")[0].replace("v","")},formatIpAddress:function(address){return address.split(":")[0]}}},r=n(59),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{tile:""}},[n("v-card-title",[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-server-network")]),t._v("\n    "+t._s(t.title)+"\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("nodes.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-btn",{staticClass:"ml-2",attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("drawers/toggleCharts")}}},[n("v-icon",[t._v("mdi-chart-pie")])],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.chartHeaders,items:t.nodes,expanded:t.expanded,"item-key":"id","show-expand":!t.isMobile,"hide-default-footer":!0,"items-per-page":-1,"loading-text":t.$t("nodes.loading"),"no-data-text":t.$t("nodes.noData"),"no-results-text":t.$t("nodes.noResults")},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"top",fn:function(e){var o=e.pagination,r=e.options,l=e.updateOptions;return[n("v-data-footer",{staticClass:"bb-1",attrs:{pagination:o,options:r,"items-per-page-all-text":t.$t("nodes.all"),"items-per-page-text":t.$t("nodes.perPage")},on:{"update:options":l},scopedSlots:t._u([t.isMobile?null:{key:"prepend",fn:function(){return[n("v-breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0}],null,!0)})]}},{key:"expanded-item",fn:function(e){var o=e.headers,r=e.item;return[n("td",{attrs:{colspan:o.length}},[n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.$t("nodes.overview")))]),t._v(" "),n("v-tab",[t._v(t._s(t.$t("nodes.raw")))])],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-list",{attrs:{dense:""}},[n("extended-list-item",{attrs:{title:t.$t("nodes.nodeId.title"),tooltip:t.$t("nodes.nodeId.tooltip"),"three-line":""},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.id)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.ipAddress.title"),tooltip:t.$t("nodes.ipAddress.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(t.formatIpAddress(r.network.remoteAddress))+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.client.title"),tooltip:t.$t("nodes.client.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.name)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.enode.title"),tooltip:t.$t("nodes.enode.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.enode)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.protocols.title"),tooltip:t.$t("nodes.protocols.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.caps.join(", "))+"\n                ")]},proxy:!0},{key:"action",fn:function(){return[n("v-chip",{attrs:{label:""}},[t._v("\n                    "+t._s(r.protocols.eth.version)+"\n                  ")])]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.forkId.title"),tooltip:t.$t("nodes.forkId.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.protocols.eth.forkId.tag)+" ("+t._s(r.protocols.eth.forkId.hash)+")\n                ")]},proxy:!0},{key:"action",fn:function(){return[t._v(" "+t._s(t.$t("nodes.forkId.action1")))]},proxy:!0},{key:"action2",fn:function(){return[t._v("\n                  "+t._s(t.nf.format(r.protocols.eth.forkId.next))+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.head.title"),tooltip:t.$t("nodes.head.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.protocols.eth.head)+"\n                ")]},proxy:!0},{key:"action",fn:function(){return[t._v(t._s(t.$t("nodes.head.action1")))]},proxy:!0},{key:"action2",fn:function(){return[t._v("\n                  "+t._s(t.nf.format(r.protocols.eth.difficulty))+"\n                ")]},proxy:!0}],null,!0)})],1)],1),t._v(" "),n("v-tab-item",[n("pre",{staticClass:"mb-6"},[n("code",{staticStyle:{"overflow-x":"auto"}},[t._v(t._s(r))])])])],1)],1)]}},{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatHash(n.id,10,0))+"\n    ")]}},{key:"item.network.remoteAddress",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatIpAddress(n.network.remoteAddress))+"\n    ")]}},{key:"item.protocols.eth.head",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatHash(n.protocols.eth.head,10,8))+"\n    ")]}},{key:"item.client.release",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatRelease(n.client.release))+"\n    ")]}},{key:"item.protocols.eth.version",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.protocols.eth?"v"+n.protocols.eth.version:"-")+"\n    ")]}},{key:"item.protocols.snap.version",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.protocols.snap?"v"+n.protocols.snap.version:"-")+"\n    ")]}},{key:"item.protocols.eth.forkId.next",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.nf.format(n.protocols.eth.forkId.next))+"\n    ")]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var o=n(11);n(305),n(306),n(27),n(14),n(26),n(47),n(35),n(48);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"TableChartCard",props:{icon:{type:String,default:function(){return"mdi-console"}},title:{type:String,default:function(){return""}},table:{type:Object,required:!0},labels:{type:Array,default:function(){return[]}},series:{type:Array,default:function(){return[]}},total:{type:Number,required:!0},to:{type:String,default:function(){return null}}},data:function(){return{options:{chart:{id:this.title.toLowerCase()+"-chart",width:"100%",type:"pie"},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(t,e){return[e.w.globals.labels[e.seriesIndex],t.toFixed(1)+"%"]}},legend:{show:!1}}}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"},isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale}},methods:{percent:function(t,e){return(t/e*100).toFixed(1)},getChartOptions:function(){return l(l({},this.options),{},{labels:this.labels})}}},d=n(59),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{tile:""}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",{staticStyle:{width:"100%","max-width":"320px"}},[n("v-card-title",[n("v-icon",{staticClass:"mr-1"},[t._v(t._s(t.icon))]),t._v("\n        "+t._s(t.title)+"\n      ")],1),t._v(" "),n("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),n("th",{staticClass:"text-right"},[t._v(t._s(t.total)+" (100%)")])])]),t._v(" "),n("tbody",t._l(t.table,(function(e,o){return n("tr",{key:o},[t.to?[n("td",{staticClass:"text-left"},[n("nuxt-link",{attrs:{to:"/"+t.to+"/"+o}},[t._v("\n                    "+t._s(o)+"\n                  ")])],1)]:[n("td",{staticClass:"text-left"},[t._v(t._s(o))])],t._v(" "),n("td",{staticClass:"text-right"},[t._v("\n                "+t._s(e)+" ("+t._s(t.percent(e,t.total))+"%)\n              ")])],2)})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():n("apexchart",{staticClass:"my-3",attrs:{width:"256",type:"pie",options:t.getChartOptions(),series:t.series}})],1)])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var o={props:{side:{type:String,default:function(){return"right"}},id:{type:String,default:function(){return"navigation"}},dark:{type:Boolean,default:function(){return!0}}},data:function(){return{shown:!1,width:580,borderSize:2}},computed:{show:{get:function(){return this.$store.state.drawers[this.id]||!1},set:function(t){this.$store.dispatch("drawers/set_"+this.id,t)}}},mounted:function(){this.setBorderWidth(),this.setEvents()},methods:{setBorderWidth:function(){var t="drawer-"+this.id,i=this.$refs[t].$el.querySelector(".v-navigation-drawer__border");i.style.width=this.borderSize+"px",i.style.cursor="ew-resize"},setEvents:function(){var t="drawer-"+this.id,e=this.borderSize,n=this.$refs[t].$el,o=n.querySelector(".v-navigation-drawer__border"),r=this,l=n.classList.contains("v-navigation-drawer--right")?"right":"left";function c(t){document.body.style.cursor="ew-resize";var e="right"===l?document.body.scrollWidth-t.clientX:t.clientX;n.style.width=e+"px"}o.addEventListener("mousedown",(function(t){t.offsetX<e&&(n.style.transition="initial",document.addEventListener("mousemove",c,!1))}),!1),document.addEventListener("mouseup",(function(){n.style.transition="",r.width=n.style.width,document.body.style.cursor="",document.removeEventListener("mousemove",c,!1)}),!1)}}},r=n(59),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{ref:"drawer-"+t.id,attrs:{app:"",left:"left"===t.side,right:"left"!=t.side,width:t.width,clipped:"right"===t.side,fixed:"",flat:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(21),n(328)),l=n(308),c=n(309),d=n(311),f={name:"Home",components:{NodeTable:l.default,TableChartCard:c.default,ResizableDrawer:d.default,WorldMap:r.a},data:function(){return{showMapOverlay:!1,mapOverlayCountry:"",mapOverlayCount:0,breadcrumbs:[{text:"ETC Mainnet",disabled:!0,to:"/"},{text:"Nodes",disabled:!0,to:"/"}]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("nodes/set_nodes");case 2:case"end":return e.stop()}}),e)})))()},computed:{totalNodes:function(){return this.$store.state.nodes.raw.length},nodes:function(){return this.$store.state.nodes},isMobile:function(){return this.$store.state.mobile},darkmode:function(){return this.$vuetify.theme.dark},countryData:function(){return this.$store.state.nodes.countries}},methods:{onMouseEnterMapCountry:function(t){this.countryData[t]&&(this.mapOverlayCountry=t+": ",this.mapOverlayCount=this.countryData[t],this.showMapOverlay=!0)},onMouseLeaveMapCountry:function(){this.showMapOverlay=!1,this.mapOverlayCountry="",this.mapOverlayCount=0}}},v=n(59),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pa-0",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[t.nodes.raw.length>0?n("resizable-drawer",{attrs:{id:"charts",side:"right",dark:t.darkmode}},[t.isMobile?n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("drawers/toggleCharts")}}},[n("v-icon",[t._v("mdi-close")])],1)],1):t._e(),t._v(" "),n("v-card",{staticClass:"mr-1 mb-1 mt-1",staticStyle:{"margin-left":"6px"},attrs:{tile:""}},[t.showMapOverlay?n("v-sheet",{staticClass:"bg-0",staticStyle:{position:"absolute",bottom:"0"},attrs:{"hide-overlay":"",persistent:"",width:"180"}},[n("v-card",{staticClass:"bg-0",attrs:{tile:""}},[n("v-card-text",{attrs:{color:"primary"}},[t._v(t._s(t.mapOverlayCountry)+"\n              "+t._s(t.$tc("map.nodes",t.mapOverlayCount)))])],1)],1):t._e(),t._v(" "),n("world-map",{attrs:{"low-color":"#b1efff","high-color":"#14d0ff","country-data":t.countryData,"default-country-fill-color":"#5a5a5a","country-colors":!1,"show-color-bar":!0,"show-overlay":t.showMapOverlay,"country-stroke-color":"#222"},on:{mouseenter:t.onMouseEnterMapCountry,mouseleave:t.onMouseLeaveMapCountry}})],1),t._v(" "),n("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("home.clients"),table:t.nodes.clients.table,labels:t.nodes.clients.chart.labels,series:t.nodes.clients.chart.series,total:t.totalNodes,icon:"mdi-console"}}),t._v(" "),n("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("home.forkIdCurrent"),table:t.nodes.forks.current.table,labels:t.nodes.forks.current.chart.labels,series:t.nodes.forks.current.chart.series,total:t.totalNodes,icon:"mdi-directions-fork"}}),t._v(" "),n("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("home.forkIdNext"),table:t.nodes.forks.next.table,labels:t.nodes.forks.next.chart.labels,series:t.nodes.forks.next.chart.series,total:t.totalNodes,icon:"mdi-directions-fork"}}),t._v(" "),n("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("nodes.protocolEth"),table:t.nodes.protocols.eth.table,labels:t.nodes.protocols.eth.chart.labels,series:t.nodes.protocols.eth.chart.series,total:t.totalNodes,icon:"mdi-handshake"}}),t._v(" "),n("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("nodes.protocolSnap"),table:t.nodes.protocols.snap.table,labels:t.nodes.protocols.snap.chart.labels,series:t.nodes.protocols.snap.chart.series,total:t.totalNodes,icon:"mdi-handshake"}})],1):t._e(),t._v(" "),n("node-table",{attrs:{nodes:t.nodes.raw,pagination:!0,title:t.$t("home.title"),breadcrumbs:t.breadcrumbs}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableChartCard:n(309).default,NodeTable:n(308).default})}}]);