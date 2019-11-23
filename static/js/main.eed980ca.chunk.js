(this["webpackJsonpbluekiwi-react"]=this["webpackJsonpbluekiwi-react"]||[]).push([[0],{27:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),c=n.n(r),o=(n(32),n(8)),l=n(17),s="992px",u="768px",m="576px",h="450px",d={breakPointXL:" @media (min-width: ".concat("1200px",")"),breakPointLG:" @media (min-width: ".concat(s,")"),breakPointMD:" @media (min-width: ".concat(u,")"),breakPointSM:" @media (min-width: ".concat(m,")"),breakPointxs:" @media (min-width: ".concat(h,")"),breakPointXXS:" @media (max-width: calc(".concat(h," - 1px))")},p="#5645ec",g="UPDATE_HISTORY";var b=Object(o.a)("header",{target:"e2mkyhe0"})({name:"7fcspz",styles:"position:fixed;top:0;left:0;z-index:5;height:80px;width:100vw;.container{position:relative;height:100%;}.content{position:absolute;top:50%;left:0;transform:translateY(-50%);width:100%;padding:0 15px;}"}),f=Object(o.a)("div",{target:"e2mkyhe1"})({name:"1v6lj4c",styles:"width:100%;display:flex;justify-content:space-between;"}),E=Object(o.a)("div",{target:"e2mkyhe2"})({height:"25px",width:"100px",".image":{height:"100%",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundImage:'url("'.concat("/BlueKiwi-React",'/images/bluekiwi-tech-logo.svg")'),cursor:"pointer"}},""),v=Object(o.a)("div",{target:"e2mkyhe3"})(Object(l.a)({".item":{}},d.breakPointXXS,{display:"none"}),""),w=Object(o.a)("div",{target:"e2mkyhe4"})(Object(l.a)({display:"none",position:"relative",height:"20px",width:"20px",cursor:"pointer","&:hover":{".lines":{backgroundColor:p}},".lines":{position:"absolute",left:"0",width:"100%",height:"4px",borderRadius:"2px",backgroundColor:"black",transition:"background-color 0.2s ease"},".line1":{top:"50%",transform:"translateY(-50%)"},".line2":{top:"0"},".line3":{bottom:"0"}},d.breakPointXXS,{display:"block"}),""),y=Object(o.a)("label",{target:"e2mkyhe5"})((function(e){var t=e.targetLocation,n=e.currentPathname;return{fontSize:"14px",fontWeight:"900",margin:"0",textTransform:"uppercase",cursor:"pointer",transition:"color 0.2s ease",color:t&&"/BlueKiwi-React"+t===n?p:"black","&:hover":{color:p},"& + label":{marginLeft:"16px"}}}),""),k=function(e,t){if(t.location.pathname!=="/BlueKiwi-React"+e){t.push("/BlueKiwi-React"+e)}},x=function(e){var t=e.currentHistory,n=e.currentPathname;return i.a.createElement(b,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement(f,null,i.a.createElement(E,null,i.a.createElement("div",{className:"image",onClick:function(){return k("/",t)}})),i.a.createElement(w,null,i.a.createElement("div",{className:"lines line1"}),i.a.createElement("div",{className:"lines line2"}),i.a.createElement("div",{className:"lines line3"})),i.a.createElement(v,null,i.a.createElement("div",{className:"item"},i.a.createElement(y,{onClick:function(){return k("/discover",t)},currentPathname:n,targetLocation:"/discover"},"Discover"),i.a.createElement(y,{onClick:function(){return k("/watch-list",t)},currentPathname:n,targetLocation:"/watch-list"},"Watchlist")))))))},O=n(10),P=Object(O.b)((function(e){return{currentHistory:e.currentHistory,currentPathname:e.currentPathname}}))(x),j=n(24),R=n(9),N=function(){return i.a.createElement("div",null)},S=function(e){e.history,e.location,e.match,e.page;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement("div",null))},L={landingPage:"/BlueKiwi-React/",discoverPage:"/BlueKiwi-React/discover",watchListPage:"/BlueKiwi-React/watch-list"},X=function(e){var t=e.updateHistory,n=L.landingPage,a=L.discoverPage,r=L.watchListPage;return i.a.createElement(j.a,null,i.a.createElement(R.d,null,i.a.createElement(R.b,{exact:!0,path:n,component:function(e){return t(e.history),i.a.createElement(S,Object.assign({},e,{page:"/"}))}}),i.a.createElement(R.b,{path:a,component:function(e){return t(e.history),i.a.createElement(S,Object.assign({},e,{page:"/discover"}))}}),i.a.createElement(R.b,{path:r,component:function(e){return t(e.history),i.a.createElement(S,Object.assign({},e,{page:"/watch-list"}))}}),i.a.createElement(R.a,{to:n,component:function(e){return i.a.createElement(S,Object.assign({},e,{page:"/"}))}})))};var B=Object(O.b)(null,(function(e){return{updateHistory:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))(X),H=function(){return i.a.createElement("div",null)};var _=Object(o.a)("div",{target:"exz4ng60"})({name:"57miot",styles:'*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:"Roboto", sans-serif;letter-spacing:0.5px;}h1, h2, h3, h4, h5, label{font-family:"Nunito", sans-serif;}'}),K=function(){return i.a.createElement(_,null,i.a.createElement(P,null),i.a.createElement(B,null),i.a.createElement(H,null))},z=n(11),C=n(26),D={currentHistory:{},currentPathname:""};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===g?Object.assign({},e,{currentHistory:a,currentPathname:a.location.pathname}):e};var I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,M=Object(z.d)(T,I(Object(z.a)((function(){return function(e){return function(t){return e(t)}}}),C.a)));c.a.render(i.a.createElement(O.a,{store:M},i.a.createElement(K,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.eed980ca.chunk.js.map