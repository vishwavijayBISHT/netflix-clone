(this["webpackJsonpnetfilx-clone"]=this["webpackJsonpnetfilx-clone"]||[]).push([[0],{16:function(e,t,a){e.exports=a(44)},21:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),i=(a(21),a(22),a(3)),l=a.n(i),s=a(4),u=a(2),m=a(15),f=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"});a(41);var d=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(a);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},m.map((function(e){return c.a.createElement("img",{key:e.id,className:"row__post ".concat(r&&"row__postlarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))))},p="502bb190ecac9adb7f3a8881dc2ce1cf",h={fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTrending:"/discover/tv?api_key=".concat(p,"&language=en-US"),fetchTop:"/discover/tv?api_key=".concat(p,"&language=en-US"),fetchAction:"/discover/tv?api_key=".concat(p,"&with_genres=28"),fetchComedy:"/discover/tv?api_key=".concat(p,"&with_genres=35"),fetchHorror:"/discover/tv?api_key=".concat(p,"&with_genres=27"),fetchRomance:"/discover/tv?api_key=".concat(p,"&with_genres=10749"),fetchDocu:"/discover/tv?api_key=".concat(p,"&with_genres=99")};a(42);var v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(h.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url( "https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner_content"},c.a.createElement("h1",null,(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"but"},"Play"),c.a.createElement("button",{className:"but"},"My List")),c.a.createElement("div",{className:"dis"},null===a||void 0===a?void 0:a.overview)),c.a.createElement("div",{className:"fade"}))};a(43);var g=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"black")},c.a.createElement("img",{className:"logo",src:"https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png",alt:"netflix logo text emblem"}),c.a.createElement("img",{className:"logo2",src:"https://www.freepnglogos.com/uploads/hacker-png/hacker-user-icons-18.png"}))};var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(v,null),c.a.createElement(d,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(d,{title:"Trending Now",fetchUrl:h.fetchTrending}),c.a.createElement(d,{title:"Top Rated",fetchUrl:h.fetchTop}),c.a.createElement(d,{title:"Action",fetchUrl:h.fetchAction}),c.a.createElement(d,{title:"Comedy",fetchUrl:h.fetchComedy}),c.a.createElement(d,{title:"Horror",fetchUrl:h.fetchHorror}),c.a.createElement(d,{title:"Romentic",fetchUrl:h.fetchRomance}),c.a.createElement(d,{title:"Documetries",fetchUrl:h.fetchDocu}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b2bb3bcf.chunk.js.map