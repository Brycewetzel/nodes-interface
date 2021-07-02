(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7],{303:function(t,e,n){"use strict";n.r(e);n(20),n(41),n(50);var o={name:"NodeTable",components:{ExtendedListItem:n(304).default},props:{nodes:{type:Array,required:!0},title:{type:String,default:function(){return""}},breadcrumbs:{type:Array,default:function(){return[]}}},data:function(){return{search:null,expanded:[],tab:null,nf:new Intl.NumberFormat(this.locale,{}),footerProps:{"#items-per-page-all-text":this.$t("nodes.all"),"items-per-page-text":this.$t("nodes.perPage")},chartHeaders:[{text:this.$t("nodes.nodeId.title"),align:"start",sortable:!1,value:"id"},{text:this.$t("nodes.ipAddress.title"),align:"start",sortable:!1,value:"network.remoteAddress"},{text:this.$t("nodes.client.title"),align:"start",sortable:!0,value:"client.name"},{text:this.$t("nodes.version"),sortable:!0,value:"client.release"},{text:this.$t("nodes.forkId.title"),align:"start",sortable:!0,value:"protocols.eth.forkId.tag"},{text:this.$t("nodes.nextFork"),align:"start",sortable:!0,value:"protocols.eth.forkId.nextTag"},{text:this.$t("nodes.head.title"),align:"start",sortable:!0,value:"protocols.eth.head"}]}},computed:{isMobile:function(){return this.$store.state.mobile}},methods:{formatHash:function(t,e,n){return t.substr(0,e)+"..."+t.substr(t.length-n)},formatRelease:function(t){return t.split("-")[0].replace("v","")},formatIpAddress:function(address){return address.split(":")[0]}}},r=n(58),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{tile:""}},[n("v-card-title",[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-server-network")]),t._v("\n    "+t._s(t.title)+"\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("nodes.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-btn",{staticClass:"ml-2",attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("drawers/toggleCharts")}}},[n("v-icon",[t._v("mdi-chart-pie")])],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.chartHeaders,items:t.nodes,expanded:t.expanded,"item-key":"id","show-expand":!t.isMobile,"hide-default-footer":!0,"items-per-page":-1,"loading-text":t.$t("nodes.loading"),"no-data-text":t.$t("nodes.noData"),"no-results-text":t.$t("nodes.noResults"),"footer-props":t.footerProps},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"top",fn:function(e){var o=e.pagination,r=e.options,l=e.updateOptions;return[n("v-data-footer",{staticClass:"bb-1",attrs:{pagination:o,options:r,"items-per-page-text":"$vuetify.dataTable.itemsPerPageText"},on:{"update:options":l},scopedSlots:t._u([t.isMobile?null:{key:"prepend",fn:function(){return[n("v-breadcrumbs",{attrs:{items:t.breadcrumbs}})]},proxy:!0}],null,!0)})]}},{key:"expanded-item",fn:function(e){var o=e.headers,r=e.item;return[n("td",{attrs:{colspan:o.length}},[n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[t._v(t._s(t.$t("nodes.overview")))]),t._v(" "),n("v-tab",[t._v(t._s(t.$t("nodes.raw")))])],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-list",{attrs:{dense:""}},[n("extended-list-item",{attrs:{title:t.$t("nodes.nodeId.title"),tooltip:t.$t("nodes.nodeId.tooltip"),"three-line":""},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.id)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.ipAddress.title"),tooltip:t.$t("nodes.ipAddress.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(t.formatIpAddress(r.network.remoteAddress))+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.client.title"),tooltip:t.$t("nodes.client.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.name)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.enode.title"),tooltip:t.$t("nodes.enode.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.enode)+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.protocols.title"),tooltip:t.$t("nodes.protocols.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.caps.join(", "))+"\n                ")]},proxy:!0},{key:"action",fn:function(){return[n("v-chip",{attrs:{label:""}},[t._v("\n                    "+t._s(r.protocols.eth.version)+"\n                  ")])]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.forkId.title"),tooltip:t.$t("nodes.forkId.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.protocols.eth.forkId.tag)+" ("+t._s(r.protocols.eth.forkId.hash)+")\n                ")]},proxy:!0},{key:"action",fn:function(){return[t._v(" "+t._s(t.$t("nodes.forkId.action1")))]},proxy:!0},{key:"action2",fn:function(){return[t._v("\n                  "+t._s(t.nf.format(r.protocols.eth.forkId.next))+"\n                ")]},proxy:!0}],null,!0)}),t._v(" "),n("extended-list-item",{attrs:{title:t.$t("nodes.head.title"),tooltip:t.$t("nodes.head.tooltip")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n                  "+t._s(r.protocols.eth.head)+"\n                ")]},proxy:!0},{key:"action",fn:function(){return[t._v(t._s(t.$t("nodes.head.action1")))]},proxy:!0},{key:"action2",fn:function(){return[t._v("\n                  "+t._s(t.nf.format(r.protocols.eth.difficulty))+"\n                ")]},proxy:!0}],null,!0)})],1)],1),t._v(" "),n("v-tab-item",[n("pre",{staticClass:"mb-6"},[n("code",{staticStyle:{"overflow-x":"auto"}},[t._v(t._s(r))])])])],1)],1)]}},{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatHash(n.id,10,0))+"\n    ")]}},{key:"item.network.remoteAddress",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatIpAddress(n.network.remoteAddress))+"\n    ")]}},{key:"item.protocols.eth.head",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatHash(n.protocols.eth.head,10,8))+"\n    ")]}},{key:"item.client.release",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatRelease(n.client.release))+"\n    ")]}},{key:"item.protocols.eth.forkId.next",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.nf.format(n.protocols.eth.forkId.next))+"\n    ")]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:function(){return""}},tooltip:{type:String,default:function(){return""}},threeLine:{type:Boolean,default:function(){return!1}}}},r=n(58),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{staticStyle:{"border-bottom":"1px solid #272727"}},[n("v-list-item-action",[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",r,!1),o),[t._v("mdi-information-outline")])]}}])},[t._v(" "),n("span",[t._v("\n        "+t._s(t.tooltip)+"\n      ")])])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.title))]),t._v(" "),n("v-list-item-subtitle",[t._t("subtitle")],2),t._v(" "),t.threeLine?n("v-list-item-subtitle",[t._t("subtitle2")],2):t._e()],1),t._v(" "),n("v-list-item-action",[n("v-list-item-action-text",[t._t("action")],2),t._v(" "),n("v-list-item-action-text",[t._t("action2")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(24),n(16);var o={name:"Client",components:{NodeTable:n(303).default},asyncData:function(t){var e=t.params,n=t.store,o="".concat(e.pathMatch||"index"),r=n.state.nodes.raw.filter((function(t){return t.name===o}));return{client:o,nodes:r}},data:function(){return{}},computed:{darkmode:function(){return this.$vuetify.theme.dark},locale:function(){return this.$i18n.locale},isMobile:function(){return this.$store.state.mobile}}},r=n(58),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"pa-0",attrs:{justify:"center",align:"center"}},[n("v-col",{class:{"pa-2":!0,"pb-12":!0,"pt-12":t.isMobile,"pt-6":!t.isMobile},attrs:{cols:"12"}},[n("node-table",{attrs:{nodes:t.nodes,pagination:!0,title:t.client}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NodeTable:n(303).default})}}]);