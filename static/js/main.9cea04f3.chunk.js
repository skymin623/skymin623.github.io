(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(18),i=c(0),s=c.n(i),r=c(17),a=c.n(r),j=(c(80),c(3)),d=(c(81),c(122)),l=c(120),h=c(123),o=c(121),b=c(69),O=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],u=c(1);var x=function(){Object(i.useEffect)((function(){console.log("\uc548\ub155")}));var e=Object(i.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("div",{children:[c,Object(u.jsx)("input",{onChange:function(e){n(e.target.value)}}),Object(u.jsx)("div",{style:{margin:"auto",position:"relative",width:"100%",height:"100%",overflow:"hidden"},dangerouslySetInnerHTML:{__html:'<iframe src="Squid.html" width="100%" height="1600px"></iframe>'}})]})};var p=function(){Object(i.useEffect)((function(){console.log("\uc548\ub155")}),[]);var e=Object(i.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("div",{children:[c,Object(u.jsx)("input",{onChange:function(e){n(e.target.value)}}),Object(u.jsx)("div",{style:{margin:"auto",position:"relative",width:"100%",height:"100%",overflow:"hidden"},dangerouslySetInnerHTML:{__html:'<iframe src="test.html" width="100%" height="1600px"></iframe>'}})]})},v=c(119),f=c(34);var g=function(e){var t=Object(f.d)((function(e){return e})),c=Object(f.c)();return Object(u.jsxs)("div",{children:[Object(u.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(u.jsx)("th",{children:"\uc218\ub7c9"}),Object(u.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(u.jsx)("tbody",{children:t.reducer.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.quan}),Object(u.jsxs)("td",{children:[Object(u.jsxs)(b.a,{variant:"success",onClick:function(){c({type:"\uc218\ub7c9\uc99d\uac00",i:t})},children:[" ","+"," "]}),Object(u.jsxs)(b.a,{variant:"danger",onClick:function(){c({type:"\uc218\ub7c9\uac10\uc18c",i:t})},children:[" ","-"," "]})]})]},t)}))})]}),!0===t.reducer2?Object(u.jsxs)("div",{className:"my-alert2",children:[Object(u.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(u.jsx)("button",{onClick:function(){c({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null,!1===t.reducer2?Object(u.jsx)("button",{onClick:function(){c({type:"alert\ub2eb\uae30"})},children:"\ub2e4\uc2dc \uc5f4\uc5b4\uc918"}):null]})},m=c(54),y=c.n(m),S=c(16),w=c(8),k=(c(105),Object(i.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,134))}))),C=s.a.createContext();function N(e){var t=Object(i.useContext)(C),c=Object(w.f)();return Object(u.jsxs)("div",{className:"col-md-4",onClick:function(){c.push("/detail/"+e.shoes.id)},children:[Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(u.jsxs)("h4",{children:[" ",e.shoes.title," "]}),Object(u.jsxs)("p",{children:[" ",e.shoes.content," & ",e.shoes.price,"\uc6d0 "]}),Object(u.jsxs)("p",{children:[" ",t[e.i]," "]})]})}var L=function(){var e=Object(i.useState)(O),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(i.useState)([]),a=Object(j.a)(r,2),v=(a[0],a[1],Object(i.useState)(!1)),f=Object(j.a)(v,2),m=(f[0],f[1],Object(i.useState)([10,11,12,15,18,20])),L=Object(j.a)(m,2),q=L[0],I=L[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d.a,{bg:"light",expand:"lg",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(d.a.Brand,{href:"/",children:"ShoeShop"}),Object(u.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(h.a,{className:"me-auto",children:[Object(u.jsx)(h.a.Link,{as:S.b,to:"/",children:"Home "}),Object(u.jsx)(h.a.Link,{as:S.b,to:"/detail/0",children:" Detail"}),Object(u.jsx)(h.a.Link,{as:S.b,to:"/squid",children:" Squid "}),Object(u.jsx)(h.a.Link,{as:S.b,to:"/test",children:" test "}),Object(u.jsx)(h.a.Link,{as:S.b,to:"/cart",children:" cart "}),Object(u.jsxs)(o.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(u.jsx)(o.a.Item,{href:"#action/3.1",children:" Action "}),Object(u.jsx)(o.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(o.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(o.a.Divider,{}),Object(u.jsx)(o.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(u.jsxs)(w.c,{children:[Object(u.jsxs)(w.a,{exact:!0,path:"/",children:[Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:" 20% SEASON OFF "}),Object(u.jsx)("p",{className:"title",children:" new shoe oh yeh "}),Object(u.jsxs)("p",{children:[Object(u.jsx)(b.a,{variant:"primary",children:"Primary"})," "]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)(S.b,{to:"/detail/0",children:[Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"}),Object(u.jsxs)("h4",{children:[" ",c[0].title," "]}),Object(u.jsxs)("p",{children:[" ",c[0].content," & ",c[0].price,"\uc6d0 "]})]})}),Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)(S.b,{to:"/detail/1",children:[Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes2.jpg",width:"100%"}),Object(u.jsxs)("h4",{children:[" ",c[1].title," "]}),Object(u.jsxs)("p",{children:[" ",c[1].content," & ",c[1].price,"\uc6d0 "]})]})}),Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsxs)(S.b,{to:"/detail/2",children:[Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes3.jpg",width:"100%"}),Object(u.jsxs)("h4",{children:[" ",c[2].title," "]}),Object(u.jsxs)("p",{children:[" ",c[2].content," & ",c[2].price,"\uc6d0 "]})]})}),Object(u.jsx)(C.Provider,{value:q,children:c.map((function(e,t){return Object(u.jsx)(N,{shoes:e,i:t},t)}))})]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){y.a.post("\uc11c\ubc84URL",{id:"asdfasdf",pw:"123"}).then(),y.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),s([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(u.jsx)(w.a,{path:"/detail/:id",children:Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)("div",{children:"\ub85c\ub529\uc911"}),children:Object(u.jsx)(k,{shoes:c,"\uc7ac\uace0":q,"\uc7ac\uace0\ubcc0\uacbd":I})})}),Object(u.jsx)(w.a,{path:"/squid",children:Object(u.jsx)(x,{})}),Object(u.jsx)(w.a,{path:"/test",children:Object(u.jsx)(p,{})}),Object(u.jsx)(w.a,{path:"/cart",children:Object(u.jsx)(g,{})})]})]})},q=function(e){e&&e instanceof Function&&c.e(5).then(c.bind(null,135)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},I=c(57);var B=[];var F=Object(I.b)(Object(I.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,c=t.i;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var i=e.findIndex((function(e){return e.id===t.payload.id}));if(i>=0){var s=Object(n.a)(e);return s[i].quan++,s}var r=Object(n.a)(e);return r.push(t.payload),r}if("\uc218\ub7c9\uc99d\uac00"===t.type){var a=Object(n.a)(e);return a[c].quan++,a}if("\uc218\ub7c9\uac10\uc18c"===t.type){var j=Object(n.a)(e);return 0===j[c].quan?(alert("\uc218\ub7c9\uc774 0\uc785\ub2c8\ub2e4."),j):(j[c].quan--,j)}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"===t.type?e=!e:e}}));a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(S.a,{children:Object(u.jsx)(f.a,{store:F,children:Object(u.jsx)(L,{})})})}),document.getElementById("root")),q()},80:function(e,t,c){},81:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.9cea04f3.chunk.js.map