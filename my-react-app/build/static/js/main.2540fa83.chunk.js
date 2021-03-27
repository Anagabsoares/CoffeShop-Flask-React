(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(40),s=n.n(a),i=n(3),l=n(5),o=(n(18),n(16),n(0)),d=function(){return Object(o.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(o.jsx)("div",{className:"logo"}),Object(o.jsxs)("p",{children:["Sample project provided by"," ",Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://auth0.com",children:"Auth0"})]})]})},u=function(){return Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},j=n(11),h=function(){return Object(o.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(o.jsx)(j.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Home"}),Object(o.jsx)(j.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Profile"}),Object(o.jsx)(j.b,{to:"/setting-drinks",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Settings"}),Object(o.jsx)(j.b,{to:"/drink-menu",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Drinks Menu"})]})},b=function(){var e=Object(l.b)().loginWithRedirect;return Object(o.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return e()},children:"Log In"})},p=function(){var e=Object(l.b)().logout;return Object(o.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},x=function(){return Object(l.b)().isAuthenticated?Object(o.jsx)(p,{}):Object(o.jsx)(b,{})},m=function(){return Object(o.jsx)("div",{className:"navbar-nav ml-auto",children:Object(o.jsx)(x,{})})},O=function(){return Object(o.jsx)("div",{className:"nav-container mb-3",children:Object(o.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"navbar-brand logo"}),Object(o.jsx)(h,{}),Object(o.jsx)(m,{})]})})})},v=n(6),f=n.n(v),g=n(12),k=n(20),N=n(21),y=n(24),w=n(23),C=n(14),S=n.n(C),T=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(k.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={drinks:[]},e}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;return function(){var t=Object(g.a)(f.a.mark((function t(){var n,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://127.0.0.1:5000/",c=e.props.auth0.getAccessTokenSilently,t.prev=2,t.next=5,c();case 5:return r=t.sent,console.log(r),t.next=9,S.a.get("".concat(n,"drinks-detail"),{headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){console.log(t),e.setState({drinks:t.data.drinks}),console.log(e.state.drinks.map((function(e){return e.recipe})))}));case 9:t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0.res);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){return Object(o.jsx)("ul",{children:this.state.drinks.map((function(e){return Object(o.jsxs)("li",{children:[JSON.stringify(e.recipe)," ",e.id,"  "]})}))})}}]),n}(r.a.Component),A=(Object(l.c)(T),function(){return Object(o.jsx)(c.Fragment,{children:"WELCOME TO THIS CREEPY WEBSITE"})}),I=function(){var e=Object(l.b)().user,t=e.name,n=e.picture,c=e.email;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"row align-items-center profile-header",children:[Object(o.jsx)("div",{className:"col-md-2 mb-3",children:Object(o.jsx)("img",{src:n,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(o.jsxs)("div",{className:"col-md text-center text-md-left",children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{className:"lead text-muted",children:c})]})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("pre",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify(e,null,2)})})]})},E=n(43),D=function(){var e=Object(c.useState)([]),t=Object(E.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://127.0.0.1:5000/","drinks"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.drinks,a=c.map((function(e,t){return Object(o.jsx)("li",{children:e},t)})),r(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),r(e.t0.drink);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"container",children:n&&Object(o.jsx)("div",{className:"row mr-5",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:Object(o.jsx)("th",{scope:"col",children:Object(o.jsx)("button",{type:"button",className:"btn-dark mr-4",onClick:a,children:"Drinks"})})})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row"}),Object(o.jsx)("td",{children:n})]})})]})})})},z=n(22),B=n(17),R=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(e){var c;return Object(k.a)(this,n),(c=t.call(this,e)).state={drinks:[],id:"",title:"",color:"",name:"",parts:""},c.handleChange=c.handleChange.bind(Object(B.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(B.a)(c)),c}return Object(N.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(Object(z.a)({},e.target.name,t))}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"getDrink",value:function(){var e=this,t=function(){var t=Object(g.a)(f.a.mark((function t(){var n,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://127.0.0.1:5000/",c=e.props.auth0.getAccessTokenSilently,t.prev=2,t.next=5,c();case 5:return r=t.sent,t.next=8,S.a.get("".concat(n,"drinks-detail"),{headers:{Authorization:"Bearer ".concat(r)}}).then((function(t){e.setState({drinks:t.data.drinks});e.state.drinks.map((function(e){return e.title}))}));case 8:t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0.res);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}();return t()}},{key:"post",value:function(){var e=this;return function(){var t=Object(g.a)(f.a.mark((function t(){var n,c,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://127.0.0.1:5000/",c=e.props.auth0.getAccessTokenSilently,r={title:e.state.title,recipe:{color:e.state.color,name:e.state.name,parts:e.state.parts}},t.prev=3,t.next=6,c();case 6:return a=t.sent,t.next=9,S.a.post("".concat(n,"/post-drinks"),r,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){console.log(e)}));case 9:t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.error(t.t0.response);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}()()}},{key:"update",value:function(){var e=this;return function(){var t=Object(g.a)(f.a.mark((function t(){var n,c,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://127.0.0.1:5000/",c=e.props.auth0.getAccessTokenSilently,r={title:e.state.title,recipe:{color:e.state.color,name:e.state.name,parts:e.state.parts}},e.state.id,t.prev=4,t.next=7,c();case 7:return a=t.sent,t.next=10,S.a.patch("".concat(n,"/drinks-update/").concat(e.state.id),r,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){console.log(e)}));case 10:t.sent,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.error(t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(){return t.apply(this,arguments)}}()()}},{key:"delete",value:function(){var e=this;return function(){var t=Object(g.a)(f.a.mark((function t(){var n,c,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://127.0.0.1:5000/",c=e.props.auth0.getAccessTokenSilently,r=e.state.id,t.prev=3,t.next=6,c();case 6:return a=t.sent,console.log(a),t.next=10,S.a.delete("".concat(n,"/drinks-delete/").concat(r),{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){console.log(e)}));case 10:t.sent,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.error(t.t0.response);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"form-label",children:"Drink Id"}),Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"eg. 67","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){e.delete()},children:"delete"})]})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{className:"form-label",children:"Title"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"formGroupExampleInput",value:this.state.title,placeholder:"eg. Margarita",name:"title",onChange:this.handleChange})]}),Object(o.jsxs)("form",{className:"row gy-2 gx-3 align-items-center",children:[Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("label",{className:"visually-hidden",children:"Ingredient"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"autoSizingInput",value:this.state.name,placeholder:"eg. tequila",name:"name",onChange:this.handleChange})]}),Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("label",{className:"visually-hidden",children:"Color"}),Object(o.jsx)("div",{className:"input-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",id:"autoSizingInputGroup",value:this.state.color,placeholder:"eg. Blue",name:"color",onChange:this.handleChange})})]}),Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("label",{className:"visually-hidden",children:"Parts"}),Object(o.jsxs)("select",{className:"form-select",id:"autoSizingSelect",value:this.state.parts,placeholder:"parts",name:"parts",onChange:this.handleChange,children:[Object(o.jsx)("option",{selected:!0,children:"Choose..."}),Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-primary mr-2",onClick:function(){e.post()},children:"post"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mr-4",onClick:function(){e.update()},children:"update"})]})})]}),Object(o.jsx)("div",{className:"row mr-5",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:Object(o.jsx)("button",{type:"button",className:"btn-dark mr-4",onClick:function(){e.getDrink()},children:"Drinks Detail"})}),Object(o.jsx)("th",{scope:"col",children:"ID"}),Object(o.jsx)("th",{scope:"col",children:"TITLE"}),Object(o.jsx)("th",{scope:"col",children:"RECIPE"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"drinks"}),Object(o.jsx)("td",{children:this.state.drinks.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("th",{children:[e.id," "]})})}))}),Object(o.jsx)("td",{children:this.state.drinks.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[e.title," "]})},e.id)}))}),Object(o.jsx)("td",{children:this.state.drinks.map((function(e){return Object(o.jsx)("tr",{children:Object(o.jsxs)("td",{children:[" ",JSON.stringify(e.recipe)," "]})},e.id)}))})]})})]})})]})}}]),n}(r.a.Component),L=Object(l.c)(R),P=n(42),J=n(44),M=function(e){var t=e.component,n=Object(J.a)(e,["component"]);return Object(o.jsx)(i.a,Object(P.a)({component:Object(l.d)(t,{onRedirecting:function(){return Object(o.jsx)(u,{})}})},n))},W=(n(77),function(){return Object(l.b)().isLoading?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(o.jsx)(O,{}),Object(o.jsx)("div",{className:"container flex-grow-1",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",exact:!0,component:A}),Object(o.jsx)(M,{path:"/profile",component:I}),Object(o.jsx)(M,{path:"/setting-drinks",component:L}),Object(o.jsx)(M,{path:"/drink-menu",component:D})]})}),Object(o.jsx)(d,{})]})}),F=function(e){var t=e.children,n=Object(i.f)();return Object(o.jsx)(l.a,{domain:"coffeeprojectudacity.us.auth0.com",clientId:"9fwOTeus8k5ZsgF5thPu2icZa3NRhdaT",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},audience:"http://localhost:5000",children:t})};n(78);s.a.render(Object(o.jsx)(j.a,{children:Object(o.jsx)(F,{children:Object(o.jsx)(W,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.2540fa83.chunk.js.map