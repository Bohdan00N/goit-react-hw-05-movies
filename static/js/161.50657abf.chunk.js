"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[161],{684:function(t,e,r){r.d(e,{Hg:function(){return s},Ku:function(){return f},Pg:function(){return o},W_:function(){return l},z1:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d178e473a587fbce7658ca70e872c0b4"}}),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/movie/day",{params:e});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:e});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e),{params:r});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"),{params:r});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e,r){var n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews"),{params:r});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},568:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(87),a=r(689),u="findFilm_listFilmsItem__IUGs8",c=r(184),s=function(t){var e=t.film,r=null;try{""!==(r=e.original_title.toLowerCase())&&void 0!==r||(r=e.name)}catch(n){console.log(n)}return(0,c.jsx)("li",{className:u,id:e.id,children:r})},i="findFilmList_listFilms__E55Aa",o="findFilmList_listFilmsTitle__wPiWl",f=function(t){var e=t.path,r=t.title,u=t.listFilms,f=(0,a.TH)();return console.log(u),(0,c.jsxs)("ul",{className:i,children:[(0,c.jsx)("h1",{className:o,children:r}),u.map((function(t){return(0,c.jsx)(n.rU,{to:"/".concat(e).concat(t.id),state:{from:f},children:(0,c.jsx)(s,{film:t},t.id)},t.id)}))]})}},161:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i="searchForm_searchForm__GOgD+",o="searchForm_searchFormInput__wzVvy",f="searchForm_searchFormButton__ER03x",l=r(184),p=function(t){var e=t.onSubmit,r=(0,s.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,l.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),e(u),c("")},children:[(0,l.jsx)("input",{onChange:function(t){c(t.target.value)},name:"searchQuery",className:o,value:u,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Write a query"}),(0,l.jsx)("button",{type:"submit",className:f,children:"Search"})]})},m=r(686),h=r(87),v=r(684),d=r(568),x=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],i=(0,h.lr)(),o=(0,a.Z)(i,2),f=o[0],x=o[1],_=f.get("query");(0,s.useEffect)((function(){if(_){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.z1)({query:_});case 3:e=t.sent,r=e.results,u(r),0===r.length&&""!==_&&m.Notify.failure("Sorry, there are no films matching your search query. Please try again."),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}}),[_]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{onSubmit:function(t){x({query:t}),u([])}}),(0,l.jsx)(d.Z,{title:"",path:"movies/",listFilms:r,query:_})]})}}}]);
//# sourceMappingURL=161.50657abf.chunk.js.map