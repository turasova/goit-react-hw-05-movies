"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{247:function(e,t,r){r.d(t,{NI:function(){return x},Y5:function(){return v},bI:function(){return h},vw:function(){return p}});var n=r(861),a=r(757),c=r.n(a),o=r(294),i=r(686),s=r.n(i),u="https://api.themoviedb.org/3",l="4ede0e32802f72a2a7cd93fc07c87f24";function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u).concat(t,"?api_key=").concat(l),e.next=3,o.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t,r){var n,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"?api_key=").concat(l,"&query=").concat(r),e.next=3,o.Z.get(n);case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t,r){var n,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"/").concat(r,"?api_key=").concat(l),e.next=3,o.Z.get(n);case 3:return a=e.sent,i=a.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){s().Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!")}},639:function(e,t,r){r.d(t,{a:function(){return o}});var n=r(900),a="Loader_loader__+lRPl",c=r(184),o=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.Z1,{height:"100",width:"100",color:"#3f51b5",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},406:function(e,t,r){r.d(t,{O:function(){return u}});var n=r(689),a=r(87),c="MovieItem_movieItem__BIwE0",o=r(184),i=function(e){var t=e.id,r=e.title,i=e.overview,s=e.poster_path,u=(0,n.TH)();return(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:u},children:[(0,o.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg",alt:r,width:250}),(0,o.jsx)("h3",{children:r}),(0,o.jsx)("p",{children:i})]})},t)},s="MoviesList_movieList__Tdyiv",u=function(e){var t=e.films;return(0,o.jsx)("ul",{className:s,children:t&&t.map((function(e){var t=e.id,r=e.title,n=e.overview,a=e.poster_path;return(0,o.jsx)(i,{title:r,overview:n,poster_path:a},t)}))})}},707:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(861),a=r(439),c=r(757),o=r.n(c),i=r(247),s=r(639),u=r(406),l=r(184),p=function(e){var t=e.className;return(0,l.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"})})},f="SearchBar_searchForm__V6XO6",h="SearchBar_searchFormButton__U7vlA",m="SearchBar_searchFormInput__9ldTo",v=r(9),d=function(e){var t=e.onSubmitSearchBar;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.h,{}),(0,l.jsxs)("form",{className:f,onSubmit:t,children:[(0,l.jsx)("button",{type:"submit",className:h,children:(0,l.jsx)(p,{})}),(0,l.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"search",className:m})]})]})},x=r(686),w=r.n(x),_=r(791),g=r(87),y=function(){var e,t=(0,_.useState)(!1),r=(0,a.Z)(t,2),c=r[0],p=r[1],f=(0,_.useState)([]),h=(0,a.Z)(f,2),m=h[0],v=h[1],x=(0,g.lr)(),y=(0,a.Z)(x,2),j=y[0],b=y[1],k=null!==(e=j.get("query"))&&void 0!==e?e:"";(0,_.useEffect)((function(){if(!(m.length>0)&&""!==k){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,i.bI)("/search/movie",k);case 4:t=e.sent,r=t.results,console.log(r),v(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,i.NI)();case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[k,m]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{onSubmitSearchBar:function(e){e.preventDefault();var t=e.currentTarget.search.value;if(""===t)return w().Notiflix.Notify.info("Enter your request, please!"),b({}),void v([]);t!==k?(b({query:t}),v([])):w().Notify.info("Enter new request, please!")}}),";",c&&(0,l.jsx)(s.a,{}),(0,l.jsx)(u.O,{films:m})]})}}}]);
//# sourceMappingURL=707.73a34712.chunk.js.map