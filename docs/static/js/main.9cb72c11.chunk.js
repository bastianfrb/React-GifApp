(this["webpackJsonp04-gif-expert"]=this["webpackJsonp04-gif-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){return o(t.target.value)}})})},j=n(10),d=n(6),f=n.n(d),l=n(8),b=function(){var t=Object(l.a)(f.a.mark((function t(e){var n,c,r,a,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.giphy.com/v1/gifs/search","sUTfO7y4PU9wl7g9svwRBkAgGftRMGQW",10,n=encodeURI(e),c="".concat("https://api.giphy.com/v1/gifs/search","?api_key=").concat("sUTfO7y4PU9wl7g9svwRBkAgGftRMGQW","&limit=").concat(10,"&q=").concat(n),t.next=7,fetch(c);case 7:return r=t.sent,t.next=10,r.json();case 10:return a=t.sent,i=a.data,s=i.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsx)("div",{className:"card animate__animated animate__fadeIn",children:Object(c.jsx)("img",{src:n,alt:e})})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{children:"Cargando ..."}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(c.jsx)(p,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=Object(r.useState)(["Monkey"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Gif Expert App"}),Object(c.jsx)(o,{setCategories:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(O,{category:t},t)}))})]})};n(17);i.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9cb72c11.chunk.js.map