(this["webpackJsonpheroes-app-alkemy"]=this["webpackJsonpheroes-app-alkemy"]||[]).push([[0],{46:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),s=n.n(r),i=n(19),l=n(3),o=n(1),d=Object(a.createContext)({}),j=function(e){var t=e.children,n=Object(a.useState)(JSON.parse(window.localStorage.getItem("token"))||null),c=Object(l.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){window.localStorage.setItem("token",JSON.stringify(r))}),[r]);return Object(o.jsx)(d.Provider,{value:{userToken:r,logIn:function(e){s(e)},logOut:function(){return s(null)}},children:t})},u=Object(a.createContext)({}),b=function(){return JSON.parse(window.localStorage.getItem("actualTeam"))||[]},h=function(e){var t=e.children,n=Object(a.useState)(b),c=Object(l.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){window.localStorage.setItem("actualTeam",JSON.stringify(r))}),[r]);var i=(null===r||void 0===r?void 0:r.length)>=6,d=function(e){return r.filter((function(t){return t.biography.alignment===e.biography.alignment})).length>=3},j={actualTeam:r,addHero:function(e){return s((function(t){return t.concat(e)}))},errorHandling:function(e){var t=e.biography.alignment;return d(e)?"Your team already has 3 ".concat(t," characters"):i?"Your team is full":"Unknown error"},isAbleToAdd:function(e){return!i&&!d(e)},deleteHero:function(e){return s((function(t){return t.filter((function(t){return t.id!==e}))}))},isHeroPartOfTeam:function(e){return r.some((function(t){return t.id===e}))}};return Object(o.jsx)(u.Provider,{value:j,children:t})},m=n(14),x=n(2),O=function(){var e=Object(a.useContext)(d),t=Object(a.useContext)(u);return Object(i.a)(Object(i.a)({},e),t)},f=function(){var e=O(),t=e.logOut,n=e.userToken,c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=function(){i(!1)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(o.jsxs)("header",{className:"bg-danger ",children:[Object(o.jsxs)("nav",{className:"navbar navbar-expand-md  px-2 navbar-dark ",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsx)("h3",{className:"text-white",children:"Heroes App"})}),n&&Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return i(!s)},children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse ",id:"navbarToggleExternalContent",children:Object(o.jsxs)("div",{className:"navbar-nav",children:[Object(o.jsx)(m.b,{to:"/",className:function(e){return e.isActive?"nav-item nav-link active":"nav-item nav-link"},children:"Actual Team"}),Object(o.jsx)(m.b,{to:"/search",className:"nav-item nav-link",children:"Search"}),Object(o.jsx)("button",{onClick:t,className:"btn nav-item text-white",children:"Log Out"})]})})]})]}),n&&s&&Object(o.jsxs)("div",{className:"navbar-nav text-center",children:[Object(o.jsx)(m.b,{to:"/",onClick:function(){return i(!1)},className:function(e){return e.isActive?"nav-link text-white text-muted fw-bold":"  nav-link text-white "},children:"Actual Team"}),Object(o.jsx)(m.b,{to:"/search",onClick:function(){return i(!1)},className:function(e){return e.isActive?"nav-link text-white text-muted fw-bold":"  nav-link text-white "},children:"Search"}),Object(o.jsx)("button",{onClick:t,className:"btn  nav-link text-white",children:"Log Out"})]})]})},g=(n(46),function(e){var t=e.size,n=void 0===t?"4px":t,a=e.speed,c=void 0===a?"1s":a,r=e.width,s=void 0===r?"36px":r,i=e.height,l=void 0===i?"36px":i,d=e.color;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"loader",style:{borderWidth:n.toString(),width:s.toString(),height:l.toString(),borderLeftColor:d,animationDuration:c.toString()}})})}),v=n(8),p=n.n(v),N=n(17),w=n(18),y=n.n(w),S=function(){var e=Object(N.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"119486017193101",n="https://superheroapi.com/api/".concat("119486017193101","/").concat(t),e.next=4,y()({method:"get",url:n,withCredentials:!1});case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.h)().id,t=void 0===e?"1":e,n=Object(a.useState)(),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return S(t).then((function(e){i.current&&e&&s(e)})),function(){i.current=!1}}),[t]),Object(o.jsx)("section",{style:{minHeight:"80vh"},className:"d-flex w-100 justify-content-center align-items-center ",children:r?Object(o.jsxs)("div",{style:{gap:"2rem"},className:"d-flex flex-column flex-md-row justify-content-center align-items-center",children:[Object(o.jsx)("img",{style:{objectFit:"cover",maxWidth:"100%",maxHeight:"25rem"},src:null===r||void 0===r?void 0:r.image.url,alt:null===r||void 0===r?void 0:r.name}),Object(o.jsxs)("div",{className:"px-4 ",style:{maxWidth:"37.5rem"},children:[Object(o.jsxs)("h2",{className:"text-danger display-4 fw-bold",children:["Hello ",null===r||void 0===r?void 0:r.name]}),Object(o.jsxs)("p",{className:" text-muted",children:[" ",null===r||void 0===r?void 0:r.biography["alter-egos"]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"Secret Identity: "}),null===r||void 0===r?void 0:r.biography["full-name"]]}),Object(o.jsxs)("p",{className:"text-capitalize",children:[Object(o.jsx)("span",{className:"fw-bold",children:"Alignment: "}),null===r||void 0===r?void 0:r.biography.alignment]}),Object(o.jsxs)("p",{style:{maxWidth:"50%"},className:"text-wrap",children:[Object(o.jsx)("span",{className:"fw-bold",children:"Base: "}),null===r||void 0===r?void 0:r.work.base]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"Height: "}),null===r||void 0===r?void 0:r.appearance.height[1]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"Weight: "}),null===r||void 0===r?void 0:r.appearance.weight[1]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"Hair Color: "}),null===r||void 0===r?void 0:r.appearance["hair-color"]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"fw-bold",children:"Eye Color: "}),null===r||void 0===r?void 0:r.appearance["eye-color"]]})]})]}):Object(o.jsx)(g,{size:"1rem",width:"15rem",height:"15rem",color:"red"})})},P=n(15),I=function(e){var t=e.hero,n=O(),a=n.deleteHero,c=n.addHero,r=n.isHeroPartOfTeam,s=n.isAbleToAdd,i=n.errorHandling,l=Object(P.c)(),d=Object(x.g)();return Object(o.jsxs)("div",{className:"mt-2 d-flex justify-content-around",children:[r(t.id)?Object(o.jsx)("button",{onClick:function(){a(t.id),l.info("".concat(t.name," has been successfully removed!"))},className:"btn btn-danger",children:"Remove"}):Object(o.jsx)("button",{onClick:function(){s(t)?(c(t),l.success("".concat(t.name," has been successfully added!"))):l.error(i(t))},className:"btn btn-primary",children:"Add"}),Object(o.jsx)("button",{onClick:function(){return d("/hero/".concat(t.id))},className:"btn btn-success",children:"Details"})]})},T=function(e){var t=e.value;return Object(o.jsx)("div",{style:{maxWidth:"100%",height:".5rem"},className:" progress flex-grow-1 mx-2  ",children:Object(o.jsx)("div",{title:t,className:"progress-bar-animated progress-bar text-black progress-bar-striped bg-danger",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100})})},C=function(e){var t=e.stats,n=Object.entries(t);return Object(o.jsx)("div",{className:"stats",children:null===n||void 0===n?void 0:n.map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1],c=parseInt(a)?a:"0";return Object(o.jsxs)("div",{style:{fontSize:".8rem"},className:"d-flex align-items-center ",children:[Object(o.jsx)("span",{className:"",children:c}),Object(o.jsx)(T,{value:c}),Object(o.jsx)("span",{className:"  text-capitalize ",children:n})]},n)}))})},E=function(e){var t=e.hero,n=t.name,a=t.image,c=t.powerstats;return Object(o.jsx)("div",{className:"my-2",children:Object(o.jsxs)("article",{style:{maxWidth:200},className:"card d-flex",children:[Object(o.jsx)("img",{className:" img-thumbnail",style:{objectFit:"cover",height:"15rem",width:"15rem"},src:null===a||void 0===a?void 0:a.url,alt:n}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h4",{className:"card-title",children:n}),Object(o.jsx)(C,{stats:c}),Object(o.jsx)(I,{hero:t})]})]})})},A=function(e){var t=e.actualTeam;return Object(o.jsx)("div",{style:{gap:"1rem"},className:" justify-content-center d-flex flex-wrap m-auto",children:null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(E,{hero:e},e.id)}))})},H=n(23),L=n(40),M=function(e){var t={intelligence:"0",strength:"0",speed:"0",durability:"0",power:"0",combat:"0"};return e.forEach((function(e){Object.keys(t).forEach((function(n){var a,c;t[n]=(a=t[n],c=e[n],(parseInt(a)+(parseInt(c)||0)).toString())}))})),t},W=function(e){var t,n=e.actualTeam,c=e.updateSpeciality,r=Object(a.useState)({intelligence:"0",strength:"0",speed:"0",durability:"0",power:"0",combat:"0"}),s=Object(l.a)(r,2),i=s[0],d=s[1],j=Object(a.useState)({height:0,weight:0}),u=Object(l.a)(j,2),b=u[0],h=u[1],m=Object(a.useCallback)((function(){var e=n.map((function(e){return null===e||void 0===e?void 0:e.powerstats})),t=M(e),a=Math.max.apply(Math,Object(L.a)(Object.values(t).map((function(e){return parseInt(e)}))));Object.keys(t).forEach((function(e){t[e]===a.toString()&&c(e)})),n.length&&a||c("None"),d(t)}),[n,c]),x=Object(a.useCallback)((function(){var e,t={height:0,weight:0},a=null===n||void 0===n?void 0:n.map((function(e){var t=e.appearance;return{height:parseInt(t.height[1]),weight:parseInt(t.weight[1])}})),c=Object(H.a)(a);try{for(c.s();!(e=c.n()).done;){var r=e.value;t={height:t.height+r.height,weight:t.weight+r.weight}}}catch(s){c.e(s)}finally{c.f()}t={height:Math.round(t.height/a.length)||0,weight:Math.round(t.weight/a.length)||0},h(t)}),[n]);return Object(a.useEffect)((function(){m(),x()}),[n,x,m]),Object(o.jsxs)("div",{className:"bg-danger my-4 border border-2 border-danger rounded p-4 text-white",children:[Object(o.jsx)("h2",{children:"TEAM STADISTICS"}),Object(o.jsxs)("div",{className:"d-flex flex-wrap  ",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{className:"m-2",children:"POWERSTATS"}),Object(o.jsx)("div",{className:"d-flex flex-wrap justify-content-center m-2",children:null===(t=Object.entries(i))||void 0===t?void 0:t.map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1],c=parseInt(a)?a:"0";return Object(o.jsxs)("div",{className:"m-2",children:[Object(o.jsx)("h4",{className:"text-capitalize fw-bold",children:n}),Object(o.jsx)("h4",{className:"fw-light",children:c})]},n)}))})]}),Object(o.jsxs)("div",{className:"m-auto",children:[Object(o.jsx)("h4",{children:"PHYSICAL"}),Object(o.jsxs)("div",{className:"d-flex flex-wrap  justify-content-between ",children:[Object(o.jsxs)("div",{className:"m-2",children:[Object(o.jsx)("h4",{className:"fw-bold ",children:"Height"}),Object(o.jsx)("h4",{className:"fw-light",children:b.height+"cm"})]}),Object(o.jsxs)("div",{className:"m-2",children:[Object(o.jsx)("h4",{className:"fw-bold ",children:"Weight"}),Object(o.jsx)("h4",{className:"fw-light",children:b.weight+"kg"})]})]})]})]})]})},z=function(){var e=Object(x.g)(),t=O().actualTeam,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(o.jsxs)("section",{className:"container text-center my-3",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"text-danger fw-bold",children:"ACTUAL TEAM"}),Object(o.jsxs)("h6",{className:"text-danger fw-bold text-uppercase",children:["TEAM SPECIALITY: ",r]})]}),Object(o.jsx)("div",{style:{minHeight:300,border:"5px dashed #444"},className:"d-flex  justify-content-center align-items-center my-4",children:t.length>0?Object(o.jsx)(A,{actualTeam:t}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"display-3 fw-bold",children:"TEAM EMPTY"}),Object(o.jsx)("button",{onClick:function(){return e("/search")},className:"btn btn-primary fw-bold",children:"Search New Heroes"})]})}),Object(o.jsx)(W,{actualTeam:t,updateSpeciality:function(e){s(e)}})]})},R=n(11),_=function(){var e=Object(N.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("http://challenge-react.alkemy.org/",t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=O().logIn,s=Object(x.g)(),i=Object(P.c)();return Object(o.jsxs)("div",{className:"bg-danger vh-100 w-100 text-white d-flex justify-content-md-evenly justify-content-center align-items-center flex-column flex-md-row",children:[Object(o.jsxs)("article",{className:"text-center  mb-2",children:[Object(o.jsx)("h1",{className:"fw-bold",children:"Welcome to my Heroes App"}),Object(o.jsx)("h3",{className:"fw-light",children:"Please Log In"})]}),Object(o.jsx)(R.c,{initialValues:{email:"",password:""},validate:function(e){var t={},n=!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email);return e.email?n&&(t.email="Invalid email address"):t.email="Required",e.password?e.password.length>16?t.password="Password too long":e.password.length<2&&(t.password="Password too short"):t.password="Required",t},onSubmit:function(e){_(e).then((function(e){var t=e.token;t&&(r(t),c(!1),s("/"))})).catch((function(e){console.error(e),i.error("LogIn error, please see the console for more info "),c(!0)}))},children:function(e){var t=e.errors,a=e.touched;return Object(o.jsxs)(R.b,{className:"p-4 bg-white text-black rounded",children:[Object(o.jsx)("h3",{className:"mb-4",children:"Log In"}),Object(o.jsxs)("div",{className:"form-group mb-4",children:[Object(o.jsx)("label",{htmlFor:"email",className:"mb-2",children:"Email"}),Object(o.jsx)(R.a,{id:"email",name:"email",className:"form-control",placeholder:"jane@acme.com",type:"email"}),t.email&&a.email&&Object(o.jsx)("span",{className:"text-danger",children:t.email})]}),Object(o.jsxs)("div",{className:"form-group mb-4",children:[Object(o.jsx)("label",{htmlFor:"password",className:"mb-2",children:"Password"}),Object(o.jsx)(R.a,{type:"password",id:"password",className:"form-control",name:"password",placeholder:"*****"}),t.password&&a.password&&Object(o.jsx)("span",{className:"text-danger",children:t.password})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-success",children:"Log In"}),n&&Object(o.jsx)("span",{className:"text-danger",children:"Wrong User"})]})]})}})]})},Y=function(e){var t=e.hero,n=t.image.url,a=t.name;return Object(o.jsxs)("article",{className:"card col-sm-6 m-2 py-2",style:{width:"12.5rem"},children:[Object(o.jsx)("img",{className:"card-img-top img-fluid",src:n,style:{maxHeight:"14rem"},alt:a}),Object(o.jsxs)("div",{className:"card-body d-flex flex-column justify-content-between",children:[Object(o.jsx)("h4",{className:"card-title my-3 text-center",children:a}),Object(o.jsx)(I,{hero:t})]})]})},F=function(e){var t=e.goPrevPage,n=e.goNextPage,a=e.pageNumber,c=e.amountOfPages;return Object(o.jsxs)("div",{style:{paddingRight:20},className:"d-flex justify-content-between w-100",children:[Object(o.jsx)("button",{onClick:t,className:"btn btn-dark",children:"Previous"}),Object(o.jsxs)("h3",{className:"fw-bold ",children:[a," of ",c]}),Object(o.jsx)("button",{onClick:n,className:"btn btn-dark",children:"Next"})]})},q=function(e){var t=e.filtered,n=e.goPrevPage,a=e.goNextPage,c=e.pageNumber,r=e.amountOfPages,s=(null===t||void 0===t?void 0:t.length)>0;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("section",{className:"row justify-content-center m-2",children:null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(Y,{hero:e},e.id)}))}),s&&Object(o.jsx)(F,{goNextPage:a,goPrevPage:n,pageNumber:c,amountOfPages:r})]})},D=function(){var e=Object(N.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"119486017193101",n="https://superheroapi.com/api/".concat("119486017193101","/search/").concat(t),e.next=4,y()({method:"get",url:n,withCredentials:!1});case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],d=s[1],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)({curIndex:0,nxtIndex:t,pageNumber:1}),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(e),o=Object(l.a)(i,2),d=o[0],j=o[1],u=r.curIndex,b=r.nxtIndex,h=r.pageNumber,m=Math.ceil(e.length/t),x=h*t>e.length?e.length:h*t;Object(a.useEffect)((function(){s({curIndex:0,nxtIndex:t,pageNumber:1})}),[e,t]);var O=function(){u+t<e.length&&(s({curIndex:u+t,nxtIndex:b+t,pageNumber:h+1}),window.scroll(0,0))},f=function(){u>0&&(s({curIndex:u-t,nxtIndex:b-t,pageNumber:h-1}),window.scroll(0,0))};return Object(a.useEffect)((function(){var t=e.slice(u,b);j(t)}),[e,h,u,b,t]),{filtered:d,amountOfElements:x,pageNumber:h,goNextPage:O,goPrevPage:f,amountOfPages:m}}(n,10),u=j.filtered,b=j.goPrevPage,h=j.goNextPage,m=j.pageNumber,x=j.amountOfPages,O=function(e){return e?"":"Input Required"};return Object(o.jsxs)("div",{children:[Object(o.jsx)(R.c,{onSubmit:function(e){d(!0),c([]),D(e.search_input).then((function(e){e?(d(!1),c(e)):d(!1)})).catch((function(e){return console.error(e)}))},initialValues:{search_input:""},children:function(e){var t=e.errors,n=e.touched;return Object(o.jsxs)(R.b,{className:"text-center",children:[Object(o.jsx)("h2",{className:"py-3",children:"Search your Heroes"}),Object(o.jsxs)("div",{className:"form-group d-flex mx-2",children:[Object(o.jsx)(R.a,{placeholder:"Search your hero",id:"search_input",name:"search_input",className:"form-control",validate:O}),Object(o.jsx)("button",{className:"btn btn-success mx-2",children:"Search"})]}),t.search_input&&n.search_input&&Object(o.jsx)("span",{className:"text-danger fs-2 px-2",children:t.search_input})]})}}),Object(o.jsx)("div",{className:"container mt-4",children:i?Object(o.jsx)(g,{size:"1rem",width:"15rem",height:"15rem",color:"red"}):(null===u||void 0===u?void 0:u.length)>0?Object(o.jsx)(q,{filtered:u,pageNumber:m,amountOfPages:x,goNextPage:h,goPrevPage:b}):Object(o.jsx)("h2",{className:"text-center text-danger display-2",children:"No Search Results"})})]})},Z=function(e){var t=e.children;return O().userToken?t:Object(o.jsx)(x.a,{to:"/login"})},B=function(e){var t=e.children;return O().userToken?Object(o.jsx)(x.a,{to:"/"}):t},V=function(){return Object(o.jsxs)(m.a,{children:[Object(o.jsx)(f,{}),Object(o.jsxs)(x.d,{children:[Object(o.jsx)(x.b,{path:"/login",element:Object(o.jsx)(B,{children:Object(o.jsx)(J,{})})}),Object(o.jsx)(x.b,{path:"/search",element:Object(o.jsx)(Z,{children:Object(o.jsx)(U,{})})}),Object(o.jsx)(x.b,{path:"/hero/:id",element:Object(o.jsx)(Z,{children:Object(o.jsx)(k,{})})}),Object(o.jsx)(x.b,{path:"/",element:Object(o.jsx)(Z,{children:Object(o.jsx)(z,{})})}),Object(o.jsx)(x.b,{path:"*",element:Object(o.jsx)(x.a,{to:"/"})})]})]})},$=n(39);var G=function(){var e={timeout:5e3,position:P.b.TOP_CENTER};return Object(o.jsx)(j,{children:Object(o.jsx)(h,{children:Object(o.jsx)(P.a,Object(i.a)(Object(i.a)({template:$.a},e),{},{children:Object(o.jsx)(V,{})}))})})};n(71);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(G,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8b1e47d8.chunk.js.map