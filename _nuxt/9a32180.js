(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,13,17],{432:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1eb89c8e",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";n.r(e);var r=n(27),o=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(435),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},435:function(t,e,n){"use strict";n(432)},436:function(t,e,n){var r=n(53)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},438:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("44c56abe",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";n.r(e);var r=n(27),o=Object(r.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools"}}}}),l=n(14),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",[n("div",{staticClass:"space-x-2"},[n("span",{staticClass:"text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("span",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))])]),t._v(" "),n("span",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(143).default})},440:function(t,e,n){"use strict";n(438)},441:function(t,e,n){var r=n(53)(!1);r.push([t.i,".link-grid[data-v-f0bf2a10]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}",""]),t.exports=r},442:function(t,e,n){"use strict";n.r(e);var r=n(483),o=n(481),l=n(27),c=Object(l.b)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.date),n=Object(l.a)((function(){return t.tlEvent.resources||t.tlEvent.forms||t.tlEvent.meetings}));return{format:r.a,isPast:o.a,eventDate:e,hasResources:n}}}),f=n(14),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastEvent,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.tlEvent.date}}):t._e(),t._v(" "),n("header",{staticClass:"mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),n("h2",{staticClass:"text-2xl font-bold text-center"},[t._v(t._s(t.tlEvent.name))]),t._v(" "),n("p",{staticClass:"text-lg text-center"},[t._v("\n        "+t._s(t.isPast(t.eventDate)?"Took":"Takes")+" place on\n        "+t._s(t.format(new Date(t.eventDate),"MMMM do, 'at' h:mm aaaa"))+"\n      ")])]),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.$md.render(t.tlEvent.description))}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[t.tlEvent.meetings?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.meetings,title:"Meeting Rooms"}}):t._e(),t._v(" "),t.tlEvent.forms?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.resources?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.resources,title:"Other Resources"}}):t._e()],1):t.isCurrentEvent?n("aside",[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n        Links and other resources will be posted soon!\n      ")])]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Stamp:n(443).default,TIcon:n(143).default,EventListItemResourceList:n(444).default,WrapperContentBox:n(433).default})},443:function(t,e,n){"use strict";n.r(e);var r=n(27),o=n(446),l=Object(r.b)({props:{date:{type:Date,default:new Date}},setup:function(t){return{isFutureDate:Object(r.a)((function(){return Object(o.a)(t.date)}))}}}),c=n(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.isFutureDate?"text-blue-600 bg-white":"text-white bg-blue-600"},[t.isFutureDate?n("span",{},[t._v("Next")]):n("span",{},[t._v("Live!")])])}),[],!1,null,null,null);e.default=component.exports},444:function(t,e,n){"use strict";n.r(e);var r=n(27),o=Object(r.b)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),l=(n(440),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,"f0bf2a10",null);e.default=component.exports;installComponents(component,{ResourceListItem:n(439).default})},446:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(431),o=n(430);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}}}]);