(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{306:function(t,e,r){"use strict";var o=r(2),n=r(60),c=r(307),l=r(205),d=r(6),f=1..toFixed,h=Math.floor,v=function(t,e,r){return 0===e?r:e%2==1?v(t,e-1,r*t):v(t*t,e/2,r)},_=function(data,t,e){for(var r=-1,o=e;++r<6;)o+=t*data[r],data[r]=o%1e7,o=h(o/1e7)},m=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,r,o,d,f=c(this),h=n(t),data=[0,0,0,0,0,0],w="",y="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(w="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*v(2,69,1))-69)<0?f*v(2,-e,1):f/v(2,e,1),r*=4503599627370496,(e=52-e)>0){for(_(data,0,r),o=h;o>=7;)_(data,1e7,0),o-=7;for(_(data,v(10,o,1),0),o=e-1;o>=23;)m(data,1<<23),o-=23;m(data,1<<o),_(data,1,1),m(data,2),y=x(data)}else _(data,0,r),_(data,1<<-e,0),y=x(data)+l.call("0",h);return y=h>0?w+((d=y.length)<=h?"0."+l.call("0",h-d)+y:y.slice(0,d-h)+"."+y.slice(d-h)):w+y}})},307:function(t,e,r){var o=r(59);t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},324:function(t,e,r){"use strict";r.r(e);r(35),r(14),r(25),r(46),r(34),r(47);var o=r(11),n=r(3);r(24),r(306);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Home",data:function(){return{tab:null,charts:{clients:{chart:{id:"client-chart",width:"100%",type:"pie"},theme:{monochrome:{enabled:!0}},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(t,e){return[e.w.globals.labels[e.seriesIndex],t.toFixed(1)+"%"]}},legend:{show:!1}},forkIds:{chart:{id:"forkId-chart",width:"100%",type:"pie"},theme:{monochrome:{enabled:!0}},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(t,e){return[e.w.globals.labels[e.seriesIndex],t.toFixed(1)+"%"]}},legend:{show:!1}},protocols:{chart:{id:"protocol-chart",width:"100%",type:"pie"},theme:{monochrome:{enabled:!0}},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(t,e){return[e.w.globals.labels[e.seriesIndex],t.toFixed(1)+"%"]}},legend:{show:!1}}}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("nodes/set_nodes");case 2:case"end":return e.stop()}}),e)})))()},computed:{params:function(){return this.$store.state.params},theme:function(){return this.$vuetify.theme.dark?"dark":"light"},isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},totalNodes:function(){return this.$store.state.nodes.raw.length},nodes:function(){return this.$store.state.nodes},clients:function(){return this.$store.state.nodes.clients},forkIds:function(){return this.$store.state.nodes.forkIds},protocols:function(){return this.$store.state.nodes.protocols}},methods:{percent:function(t,e){return(t/e*100).toFixed(1)},getChartOptions:function(t){return l(l({},this.charts[t]),{},{labels:this.$store.state.nodes[t].chart.labels})},getChartSeries:function(t){return this.$store.state.nodes[t].chart.series}}},f=r(58),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"pa-0",attrs:{justify:"center",align:"center","no-gutters":""}},[r("v-col",{staticClass:"text-center py-12",attrs:{cols:"12",md:"8",sm:"12"}},[r("h2",[t._v(t._s(t.$t("home.title")))]),t._v(" "),r("v-card",{staticClass:"mt-4",attrs:{tile:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",{staticStyle:{width:"100%"}},[r("v-card-title",[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-console")]),t._v("\n            "+t._s(t.$t("home.clients"))+"\n          ")],1),t._v(" "),r("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.totalNodes)+" (100%)")])])]),t._v(" "),r("tbody",t._l(t.nodes.clients.table,(function(e,o){return r("tr",{key:o},[r("td",{staticClass:"text-left"},[r("nuxt-link",{attrs:{to:"/client/"+o.toLowerCase()}},[t._v("\n                      "+t._s(o)+"\n                    ")])],1),t._v(" "),r("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(e)+" ("+t._s(t.percent(e,t.totalNodes))+"%)\n                  ")])])})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():r("apexchart",{staticClass:"mt-3",attrs:{width:"320",type:"pie",options:t.getChartOptions("clients"),series:t.getChartSeries("clients")}})],1)]),t._v(" "),r("v-card",{staticClass:"mt-2",attrs:{tile:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",{staticStyle:{width:"100%"}},[r("v-card-title",[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-directions-fork")]),t._v("\n            "+t._s(t.$t("home.forkIds"))+"\n          ")],1),t._v(" "),r("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.totalNodes)+" (100%)")])])]),t._v(" "),r("tbody",t._l(t.forkIds.table,(function(e,o){return r("tr",{key:o},[r("td",{staticClass:"text-left"},[t._v(t._s(o))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(e)+" ("+t._s(t.percent(e,t.totalNodes))+"%)\n                  ")])])})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():r("apexchart",{staticClass:"mt-3",attrs:{width:"320",type:"pie",options:t.getChartOptions("forkIds"),series:t.getChartSeries("forkIds")}})],1)]),t._v(" "),r("v-card",{staticClass:"mt-2",attrs:{tile:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",{staticStyle:{width:"100%"}},[r("v-card-title",[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-handshake")]),t._v("\n            "+t._s(t.$t("home.protocolVersions"))+"\n          ")],1),t._v(" "),r("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),r("th",{staticClass:"text-right"},[t._v(t._s(t.totalNodes)+" (100%)")])])]),t._v(" "),r("tbody",t._l(t.protocols.table,(function(e,o){return r("tr",{key:o},[r("td",{staticClass:"text-left"},[t._v(t._s(o))]),t._v(" "),r("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(e)+" ("+t._s(t.percent(e,t.totalNodes))+"%)\n                  ")])])})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():r("apexchart",{staticClass:"mt-3",attrs:{width:"320",type:"pie",options:t.getChartOptions("protocols"),series:t.getChartSeries("protocols")}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);