(this.webpackJsonpmy_robots=this.webpackJsonpmy_robots||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(7),s=n(5),l=n(14),u=(n(12),n(1)),h=n(2),d=n(4),f=n(3);n(26);var p=function(e){var t=e.name,n=e.id,r=e.email;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:"https://robohash.org/".concat(n,"?set=set3"),alt:"kitty"}),o.a.createElement("h2",{className:"card__header"},t),o.a.createElement("p",{className:"card_mail"},r))};var b=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(p,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))};n(27);var m=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"searchfield"},o.a.createElement("input",{"aria-label":"Search Robots",className:"searchfield__input",type:"search",placeholder:"Search robots!",onChange:t}))},v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Errooooor"):this.props.children}}]),n}(r.Component),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"RoboSearch"))}}]),n}(r.Component),g=(n(28),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}));return a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"mainblock"},o.a.createElement(E,null),o.a.createElement(m,{searchChange:n}),o.a.createElement(v,null,o.a.createElement(b,{robots:c})))}}]),n}(r.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(g),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R={searchField:""},w={isPending:!1,robots:[],error:""},j=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(s.d)(j,Object(s.a)(l.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:C},o.a.createElement(y,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboSearch",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RoboSearch","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.d946e5dc.chunk.js.map