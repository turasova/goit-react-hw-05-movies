"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{247:function(e,t,n){n.d(t,{Hx:function(){return g},NI:function(){return y},Y5:function(){return v},bI:function(){return h},uV:function(){return x},vw:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(294),s=n(686),o=n.n(s),u="https://api.themoviedb.org/3",l="4ede0e32802f72a2a7cd93fc07c87f24";function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u).concat(t,"?api_key=").concat(l),e.next=3,i.Z.get(n);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t,n){var r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u).concat(t,"?api_key=").concat(l,"&query=").concat(n),e.next=3,i.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t,n){var r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u).concat(t,"/").concat(n,"?api_key=").concat(l),e.next=3,i.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t,n){var r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u).concat(t,"/").concat(n,"/credits?api_key=").concat(l),e.next=3,i.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t,n){var r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u).concat(t,"/").concat(n,"/reviews?api_key=").concat(l),e.next=3,i.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){o().Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!")}},639:function(e,t,n){n.d(t,{a:function(){return i}});var r=n(900),a="Loader_loader__+lRPl",c=n(184),i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.Z1,{height:"100",width:"100",color:"#3f51b5",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},469:function(e,t,n){n.d(t,{O:function(){return s}});var r={movieList:"MoviesList_movieList__Tdyiv",movieItem:"MoviesList_movieItem__yAyAJ",filmImages:"MoviesList_filmImages__W0FMq",text:"MoviesList_text__4iZoc",textRanking:"MoviesList_textRanking__LOFtp",ranking:"MoviesList_ranking__ihyaK",infoContainer:"MoviesList_infoContainer__o5sPN"},a=n(689),c=n(87),i=n(184),s=function(e){var t=e.films,n=(0,a.TH)();return(0,i.jsx)("ul",{className:r.movieList,children:t&&t.map((function(e){var t=e.id,a=e.title,s=e.poster_path,o=e.vote_average;return(0,i.jsx)("li",{className:r.movieItem,children:(0,i.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,i.jsx)("div",{className:r.imgContainer,children:(0,i.jsx)("img",{className:r.filmImages,src:s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://c8.alamy.com/compfr/g0xxkx/modele-de-conception-de-l-affiche-de-film-concept-vector-illustration-detaillee-g0xxkx.jpg",alt:a,width:250})}),(0,i.jsxs)("div",{className:r.infoContainer,children:[(0,i.jsx)("h3",{className:r.text,children:a}),(0,i.jsxs)("p",{className:r.textRanking,children:["Ranking:"," ",(0,i.jsx)("span",{className:r.ranking,children:o.toFixed(1)})]})]})]})},t)}))})}},707:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(247),o=n(639),u=n(469),l=n(184),p=function(e){var t=e.className;return(0,l.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"})})},f="SearchBar_searchForm__V6XO6",h="SearchBar_searchFormButton__U7vlA",m="SearchBar_searchFormInput__9ldTo",v=function(e){var t=e.onSubmitSearchBar;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{className:f,onSubmit:t,children:[(0,l.jsx)("button",{type:"submit",className:h,children:(0,l.jsx)(p,{})}),(0,l.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"search",className:m})]})})},d=n(686),x=n.n(d),_=n(791),g=n(87),w=function(){var e,t=(0,_.useState)(!1),n=(0,a.Z)(t,2),c=n[0],p=n[1],f=(0,_.useState)([]),h=(0,a.Z)(f,2),m=h[0],d=h[1],w=(0,g.lr)(),y=(0,a.Z)(w,2),k=y[0],j=y[1],N=null!==(e=k.get("query"))&&void 0!==e?e:"";(0,_.useEffect)((function(){if(!(m.length>0)&&""!==N){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,s.bI)("/search/movie",N);case 4:t=e.sent,n=t.results,console.log(n),d(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,s.NI)();case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[N,m]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{onSubmitSearchBar:function(e){e.preventDefault();var t=e.currentTarget.search.value;if(""===t)return x().Notiflix.Notify.info("Enter your request, please!"),j({}),void d([]);t!==N?(j({query:t}),d([])):x().Notify.info("Enter new request, please!")}}),";",c&&(0,l.jsx)(o.a,{}),(0,l.jsx)(u.O,{films:m})]})}}}]);
//# sourceMappingURL=707.cee059b4.chunk.js.map