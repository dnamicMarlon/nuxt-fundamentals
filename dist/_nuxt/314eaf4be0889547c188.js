(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(t,e,o){var content=o(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("1c93b39a",content,!0,{sourceMap:!1})},152:function(t,e,o){var content=o(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("be6b29ac",content,!0,{sourceMap:!1})},155:function(t,e,o){"use strict";var n=o(151);o.n(n).a},156:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},157:function(t,e,o){"use strict";var n=o(152);o.n(n).a},158:function(t,e,o){(t.exports=o(24)(!1)).push([t.i,".container[data-v-0dc1278c]{display:flex;justify-content:center;align-items:center;text-align:center}.title[data-v-0dc1278c]{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;letter-spacing:1px}.subtitle[data-v-0dc1278c]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px}.links[data-v-0dc1278c]{padding-top:15px}",""])},159:function(t,e,o){"use strict";o.r(e);o(155);var n=o(14),r={components:{Logo:Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports},head:function(){return{title:"Home Page",meta:[{name:"twitter:title",content:"Nuxt Fundamentals"},{name:"twitter:description",content:"Nuxt Fundamentals course"},{name:"twitter:image",content:"https://www.elveflow.com/wp-content/uploads/2015/10/NASA-logo.png"},{name:"twitter:card",content:"summary_large_image"}]}},computed:{posts:function(){return this.$store.state.posts.all}}},l=(o(157),Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container"},[o("div",[o("logo"),t._v(" "),o("h1",{staticClass:"title"},[t._v("\n      nuxt-fundamentals\n    ")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("\n      My gnarly Nuxt.js project\n    ")]),t._v(" "),o("div",{staticClass:"links"},t._l(t.posts,function(e){return o("nuxt-link",{key:"post.id",staticClass:"button--grey",attrs:{to:{name:"posts-id",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),1)],1)])},[],!1,null,"0dc1278c",null));e.default=l.exports}}]);