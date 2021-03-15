(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{447:function(e,t,r){var content=r(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("1f5cc751",content,!0,{sourceMap:!1})},451:function(e,t,r){"use strict";r(447)},452:function(e,t,r){var n=r(53)(!1);n.push([e.i,".form-input{border-radius:.5rem;border-width:1px;margin-top:.5rem;padding:.5rem 1rem;--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,0.06);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);width:100%}.label{font-weight:700}",""]),e.exports=n},455:function(e,t,r){"use strict";r.r(t);r(34),r(28);var n=r(5),o=r(27),l=Object(o.b)({name:"MailchimpForm",data:function(){return{form:{email:"",name:"",consent:!0},errorEmail:!1,errorConsent:!1,loading:!1}},methods:{submit:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var data,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.loading=!0,data={email:e,name:t},n.prev=2,n.next=5,r.$axios.$post("https://a696oel4ti.execute-api.eu-central-1.amazonaws.com/dev/add-to-list",data,{headers:{"Content-Type":"application/json"}});case 5:o=n.sent,console.log("SUCCESS"),console.log(o),r.$emit("success"),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(2),console.log("ERROR"),console.error(n.t0),r.$emit("failure");case 16:return n.prev=16,r.loading=!1,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[2,11,16,19]])})))()},checkForm:function(e){this.errorConsent=!this.form.consent,this.errorEmail=!1,this.form.email&&this.validEmail(this.form.email)||(this.errorEmail=!0),this.errorConsent||this.errorEmail||this.submit(this.form.email,this.form.name),e.preventDefault()},validEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}}}),c=(r(451),r(14)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"mb-8"},[e._v("\n    Stay in the loop and get notifications about upcoming events, workshops,\n    new application dates, partnership opportunities, and more.\n  ")]),e._v(" "),r("div",{staticClass:"w-full md:p-8 md:mx-auto lg:max-w-md"},[r("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.checkForm(t)}}},[r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[r("span",[e._v("Name")]),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Enter your name",disabled:e.loading},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[e._v("Email\n\n          "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-input",class:{"is-danger":e.errorEmail},attrs:{type:"email",placeholder:"Enter your email",disabled:e.loading},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),e.errorEmail?r("p",{staticClass:"text-sm text-pink-600"},[e._v("\n          This email is invalid\n        ")]):e._e()]),e._v(" "),r("div",[r("label",{staticClass:"flex space-x-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.consent,expression:"form.consent"}],staticClass:"mt-2",attrs:{type:"checkbox",disabled:e.loading},domProps:{checked:Array.isArray(e.form.consent)?e._i(e.form.consent,null)>-1:e.form.consent},on:{change:function(t){var r=e.form.consent,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.form,"consent",r.concat([null])):l>-1&&e.$set(e.form,"consent",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.form,"consent",o)}}}),e._v(" "),r("div",[r("span",[e._v("I agree to subscribe to the newsletter and receive emails from\n              TechLabs Berlin. I can unsubscribe at any time.")]),e._v(" "),e.errorConsent?r("p",{staticClass:"text-sm text-pink-600"},[e._v("\n              You need to agree, otherwise we cannot add you to our list.\n            ")]):e._e()])])]),e._v(" "),r("div",{staticClass:"pt-4"},[r("button",{staticClass:"flex items-center justify-center w-full px-4 py-2 space-x-2 font-bold border-2 border-gray-700 rounded-lg md:min-w-md hover:border-pink-600 hover:text-white hover:bg-pink-600 disabled:opacity-75",attrs:{disabled:e.loading},on:{click:e.checkForm}},[e._v("\n          Subscribe\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);