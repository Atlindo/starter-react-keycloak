"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[974],{7239:function(n,i,e){var l,t=e(168),o=e(9439),a=e(2791),d=e(364),r=e(2554),s=e(6443),u=e(4923);i.Z=function(n){var i=n.children,e=n.background,c=n.className,v=n.overlap,f=(0,a.useState)(0),h=(0,o.Z)(f,2),m=h[0],p=h[1],x=(0,a.useRef)(null),Z=(0,d.v9)((function(n){return n.theme.navType})),g=(0,d.v9)((function(n){return n.theme.currentTheme}));(0,a.useEffect)((function(){if(Z===s.XA){var n=window.innerWidth,i=x.current.offsetWidth;p((n-i)/2)}}),[Z]);return(0,u.tZ)("div",{ref:x,css:(0,r.iv)(l||(l=(0,t.Z)(["\n        background-color: ",";\n        padding: ","px;\n        margin-top: -","px;\n        margin-left: -","px;\n        margin-right: -","px;\n\n        @media "," {\n          margin-left: -","px;\n          margin-right: -","px;\n        }\n\n        ","\n      "])),"dark"===g?"#2f3a50":s.wx.WHITE,s.hv.LAYOUT_CONTENT_GUTTER,s.hv.LAYOUT_CONTENT_GUTTER,s.hv.LAYOUT_CONTENT_GUTTER,s.hv.LAYOUT_CONTENT_GUTTER,s.qk.MOBILE,s.hv.LAYOUT_CONTENT_GUTTER_SM,s.hv.LAYOUT_CONTENT_GUTTER_SM,v?"margin-bottom: -4.6875rem;":""),className:"page-header-alt ".concat(c||""),style:function(){var n={backgroundImage:e?"url(".concat(e,")"):"none"};return Z===s.XA&&(n.marginRight=-m,n.marginLeft=-m,n.paddingLeft=0,n.paddingRight=0),n}(),children:Z===s.XA?(0,u.tZ)("div",{className:"container",children:i}):(0,u.tZ)(u.HY,{children:i})})}},9345:function(n,i,e){e.d(i,{Z:function(){return t}});e(2791);var l=e(184);function t(n){return(0,l.jsx)("div",{className:["mx-auto ".concat(null!==n&&void 0!==n&&n.fluid?"max-w-[1280px] w-full":"container"),null===n||void 0===n?void 0:n.className].join(" "),children:null===n||void 0===n?void 0:n.children})}},8524:function(n,i,e){e.d(i,{k:function(){return l}});var l={GROUP:"groups",ACCOUNT:"account"}},6640:function(n,i,e){e.d(i,{Z:function(){return v}});var l=e(3144),t=e(5671),o=e(136),a=e(9388),d=e(2184),r=e(7477),s=e(1706),u=d.Z,c=[r.WE.Ok,r.WE.Created,r.WE.Accepted,r.WE.NonAuthoritativeInformation,r.WE.NoContent,r.WE.ResetContent,r.WE.PartialContent,r.WE.MultiStatus,r.WE.AlreadyReported,r.WE.ImUsed],v=function(n){(0,o.Z)(e,n);var i=(0,a.Z)(e);function e(n){var l;return(0,t.Z)(this,e),(l=i.call(this,n)).realm="YUYUID",l.api=d.Z,l.url=n,l}return(0,l.Z)(e)}(function(){function n(i){(0,t.Z)(this,n),this.api=u,this.url=i,this.api=u}return(0,l.Z)(n,[{key:"get",value:function(n){var i=this;return new Promise((function(e,l){u.get(i.url,{params:n,state:localStorage.getItem("is_mock")?"mock":"default"}).then((function(n){if(c.includes(n.status))e(n.data);else{var i,t,o,a,d,u;if(n.status===r.WE.Forbidden)s.Z.dispatch({type:"error/forbidden",payload:null!==(t=null!==(o=null!==(a=null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.error)&&void 0!==a?a:null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.error_description)&&void 0!==o?o:null===n||void 0===n?void 0:n.data)&&void 0!==t?t:null});l(null!==(i=null===n||void 0===n?void 0:n.data)&&void 0!==i?i:n)}})).catch((function(n){l(n)}))}))}},{key:"find",value:function(n){var i=this;return new Promise((function(e,l){i.api.get([i.url,n].join("/"),{state:localStorage.getItem("is_mock")?"mock":"default"}).then((function(n){if(c.includes(n.status))e(n.data);else{var i,t,o,a,d,u;if(n.status===r.WE.Forbidden)s.Z.dispatch({type:"error/forbidden",payload:null!==(t=null!==(o=null!==(a=null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.error)&&void 0!==a?a:null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.error_description)&&void 0!==o?o:null===n||void 0===n?void 0:n.data)&&void 0!==t?t:null});l(null!==(i=null===n||void 0===n?void 0:n.data)&&void 0!==i?i:n)}})).catch((function(n){l(n)}))}))}},{key:"store",value:function(n){var i=this;return new Promise((function(e,l){i.api.post(i.url,n,{params:{state:localStorage.getItem("is_mock")?"mock":"default"}}).then((function(n){if(c.includes(n.status))e(n.data);else{var i,t,o,a,d,u;if(n.status===r.WE.Forbidden)s.Z.dispatch({type:"error/forbidden",payload:null!==(t=null!==(o=null!==(a=null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.error)&&void 0!==a?a:null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.error_description)&&void 0!==o?o:null===n||void 0===n?void 0:n.data)&&void 0!==t?t:null});l(null!==(i=null===n||void 0===n?void 0:n.data)&&void 0!==i?i:n)}})).catch((function(n){l(n)}))}))}},{key:"update",value:function(n,i){var e=this;return new Promise((function(l,t){e.api.post([e.url,n].join("/"),i,{params:{state:localStorage.getItem("is_mock")?"mock":"default"}}).then((function(n){if(c.includes(n.status))l(n.data);else{var i,e,o,a,d,u;if(n.status===r.WE.Forbidden)s.Z.dispatch({type:"error/forbidden",payload:null!==(e=null!==(o=null!==(a=null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.error)&&void 0!==a?a:null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.error_description)&&void 0!==o?o:null===n||void 0===n?void 0:n.data)&&void 0!==e?e:null});t(null!==(i=null===n||void 0===n?void 0:n.data)&&void 0!==i?i:n)}})).catch((function(n){t(n)}))}))}},{key:"delete",value:function(n){var i=this;return new Promise((function(e,l){i.api.delete([i.url,n].join("/"),{params:{state:localStorage.getItem("is_mock")?"mock":"default"}}).then((function(n){if(c.includes(n.status))e(n.data);else{var i,t,o,a,d,u;if(n.status===r.WE.Forbidden)s.Z.dispatch({type:"error/forbidden",payload:null!==(t=null!==(o=null!==(a=null===n||void 0===n||null===(d=n.data)||void 0===d?void 0:d.error)&&void 0!==a?a:null===n||void 0===n||null===(u=n.data)||void 0===u?void 0:u.error_description)&&void 0!==o?o:null===n||void 0===n?void 0:n.data)&&void 0!==t?t:null});l(null!==(i=null===n||void 0===n?void 0:n.data)&&void 0!==i?i:n)}})).catch((function(n){l(n)}))}))}}]),n}())},9974:function(n,i,e){e.r(i),e.d(i,{default:function(){return O}});var l=e(9439),t=e(2791),o=e(364),a=e(3425),d=e(2939),r=e(4520),s=e(952),u=e(7128),c=e(678),v=e(281),f=e(4664),h=e(8345),m=e(7944),p=e(9771),x=e(2426),Z=e.n(x),g=(e(2184),e(7239)),j=e(9345),T=e(8937),y=e(5671),N=e(3144),E=e(136),A=e(9388),k=e(6640),b=e(9682),Y=e(8524),_=function(n){(0,E.Z)(e,n);var i=(0,A.Z)(e);function e(){var n,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,y.Z)(this,e),(n=i.call(this)).realms=b.Z.realm,n.url=null!==l&&void 0!==l?l:"/realms/".concat(n.realm,"/").concat(Y.k.ACCOUNT),n}return(0,N.Z)(e,[{key:"getSessionDevice",value:function(n){var i=this;return this.url=[this.url,"sessions/devices"].join("/"),new Promise((function(e){e(i.get(n))}))}}]),e}(k.Z),w=e(184),C=function(){var n=(0,a.Eh)(),i=n.keycloak,e=n.initialized,o=(0,t.useState)(!1),x=(0,l.Z)(o,2),y=x[0],N=x[1],E=(0,t.useState)([]),A=(0,l.Z)(E,2),k=A[0],b=A[1];return(0,t.useEffect)((function(){null!==i&&void 0!==i&&i.authenticated&&e&&(N(!0),(new _).getSessionDevice({}).then((function(n){b(null!==n&&void 0!==n?n:[]),N(!1)})).catch((function(){N(!1),b([])})))}),[e,i]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(g.Z,{children:(0,w.jsx)(j.Z,{fluid:!0,children:(0,w.jsx)("div",{className:"py-4",children:(0,w.jsx)(d.Z.Title,{level:1,className:"!m-0",children:"Devices"})})})}),(0,w.jsx)(j.Z,{fluid:!0,className:"my-4",children:y?(0,w.jsx)(T.Z,{}):Array.isArray(k)&&k.length>0?(0,w.jsx)("div",{className:"!space-y-6",children:k.map((function(n){return(0,w.jsxs)("div",{className:["w-full bg-white rounded-xl p-4",null!==n&&void 0!==n&&n.current?"!border !border-[--ant-color-primary]":"!border"].join(" "),children:[(0,w.jsxs)("div",{className:"!flex items-center justify-between !gap-4",children:[(0,w.jsxs)(r.Z,{align:"center",gap:10,children:[(0,w.jsx)(h.Z,{className:"!text-2xl"}),(0,w.jsx)(d.Z.Title,{level:3,className:"!m-0",children:null===n||void 0===n?void 0:n.os}),(null===n||void 0===n?void 0:n.current)&&(0,w.jsx)(s.Z,{color:"cyan",children:"Current"})]}),(0,w.jsxs)(r.Z,{align:"center",gap:10,children:[Z()(null===n||void 0===n?void 0:n.lastAccess).isValid()&&(0,w.jsxs)(r.Z,{align:"center",gap:5,children:[(0,w.jsx)(m.Z,{}),(0,w.jsx)(d.Z,{children:Z().unix(null===n||void 0===n?void 0:n.lastAccess).format("DD MMMM YYYY HH:mm A")})]}),(0,w.jsx)(s.Z,{children:null===n||void 0===n?void 0:n.osVersion})]})]}),(0,w.jsx)(u.Z,{}),(0,w.jsxs)("div",{children:[Array.isArray(null===n||void 0===n?void 0:n.sessions)&&(null===n||void 0===n?void 0:n.sessions.length)>0?(0,w.jsx)("div",{className:"!space-y-4",children:null===n||void 0===n?void 0:n.sessions.map((function(n){return(0,w.jsxs)("div",{className:"p-4 !border rounded-xl space-y-4",children:[(0,w.jsxs)(r.Z,{align:"center",justify:"space-between",children:[(0,w.jsxs)(r.Z,{gap:10,align:"center",children:[(0,w.jsx)(p.Z,{className:"!text-2xl"}),(0,w.jsx)(d.Z.Title,{level:4,className:"!m-0",children:null===n||void 0===n?void 0:n.browser})]}),(0,w.jsx)(c.ZP,{type:"primary",children:"Sign Out"})]}),(0,w.jsxs)(v.Z,{children:[(0,w.jsx)(v.Z.Item,{label:"IP Address",span:1,children:null===n||void 0===n?void 0:n.ipAddress}),(0,w.jsx)(v.Z.Item,{label:"Started",span:1,children:(0,w.jsxs)(r.Z,{gap:5,align:"center",children:[(0,w.jsx)(m.Z,{}),(0,w.jsx)("span",{children:Z()(null===n||void 0===n?void 0:n.started).isValid()?Z().unix(null===n||void 0===n?void 0:n.started).format("DD MMM YYYY | HH:mm A"):"-"})]})}),(0,w.jsx)(v.Z.Item,{label:"Last Access",span:1,children:(0,w.jsxs)(r.Z,{gap:5,align:"center",children:[(0,w.jsx)(m.Z,{}),(0,w.jsx)("span",{children:Z()(null===n||void 0===n?void 0:n.lastAccess).isValid()?Z().unix(null===n||void 0===n?void 0:n.lastAccess).format("DD MMM YYYY | HH:mm A"):"-"})]})}),(0,w.jsx)(v.Z.Item,{label:"Expires",span:1,children:(0,w.jsxs)(r.Z,{gap:5,align:"center",children:[(0,w.jsx)(m.Z,{}),(0,w.jsx)("span",{children:Z()(null===n||void 0===n?void 0:n.expires).isValid()?Z().unix(null===n||void 0===n?void 0:n.expires).format("DD MMM YYYY | HH:mm A"):"-"})]})}),Array.isArray(null===n||void 0===n?void 0:n.clients)&&(0,w.jsx)(v.Z.Item,{label:"Clients",span:4,children:(null===n||void 0===n?void 0:n.clients.length)>0?null===n||void 0===n?void 0:n.clients.map((function(n){return null===n||void 0===n?void 0:n.clientName})).join(" | "):"-"})]})]},"session-".concat(null===n||void 0===n?void 0:n.id))}))}):(0,w.jsx)(f.Z,{}),(0,w.jsx)("div",{})]})]},"".concat(null===n||void 0===n?void 0:n.os,"-device"))}))}):(0,w.jsx)(f.Z,{})})]})},O=(0,o.$j)((function(n){return{}}))((0,t.memo)(C))}}]);
//# sourceMappingURL=974.3aaefa09.chunk.js.map