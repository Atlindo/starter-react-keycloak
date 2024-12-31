"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[253],{5203:function(n,e,t){var r,i=t(168),o=t(4236),a=t(6443),c=t(2858),s=function(n){return"dark"===n},l=(0,o.Z)("div")(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  line-height: 1.5;\n  cursor: pointer;\n  padding: 0 1rem;\n  color: ",";\n\n  @media "," {\n    padding: 0 0.75rem;\n  }\n\n  .ant-badge {\n    color: ",";\n  }\n\n  .nav-icon {\n    font-size: 1.25rem;\n  }\n\n  &:hover,\n  &.ant-dropdown-open,\n  &.ant-popover-open {\n    > * {\n      color: ",";\n    }\n\n    .profile-text {\n      color: ",";\n    }\n  }\n"])),(function(n){return s(n.mode)?a.wx.GRAY:(0,c.m4)(a.wx.WHITE,.85)}),a.qk.MOBILE,(function(n){return s(n.mode)?a.wx.GRAY:(0,c.m4)(a.wx.WHITE,.85)}),(function(n){return s(n.mode)?c.wE.colorPrimary:a.wx.WHITE}),(function(n){return s(n.mode)?a.wx.GRAY:a.wx.WHITE}));e.Z=l},5326:function(n,e,t){var r,i=t(168),o=(t(2791),t(2279)),a=t(9367),c=t(364),s=t(7962),l=t(9529),u=t(8999),d=t(8345),h=t(8470),p=t(4721),m=t(4236),v=t(6443),f=t(3425),g=t(7689),b=t(5203),x=t(7019),k=t(9305),y=t(184),T=m.Z.div((function(){return{fontSize:v.um.LG}})),Z=m.Z.div((function(){return{display:"flex",alignItems:"center"}})),E=(0,m.Z)("div")(r||(r=(0,i.Z)(["\n  padding-left: ",";\n\n  @media "," {\n    display: none;\n  }\n"])),v.x1[2],v.qk.MOBILE),j=m.Z.div((function(){return{fontWeight:v.m5.SEMIBOLD}})),C=m.Z.span((function(){return{opacity:.8}})),H=function(n){var e=(0,f.Eh)().keycloak,t=(0,g.TH)(),r=(0,c.I0)();return(0,y.jsx)("div",{onClick:function(){console.log([window.location.origin,t.pathname].join(""),"window.location.origin"),r((0,p.w7)()),e.logout({logoutMethod:"GET",redirectUri:[window.location.origin,t.pathname].join("")}).then((function(n){localStorage.removeItem(x.gU),console.log({response:n})})).catch((function(n){console.log({err:n})}))},children:(0,y.jsxs)(h.Z,{alignItems:"center",gap:v.x1[2],children:[(0,y.jsx)(T,{children:(0,y.jsx)(s.Z,{})}),(0,y.jsx)("span",{children:n.label})]})})},I=function(n){var e=(0,f.Eh)().keycloak;return(0,y.jsx)("div",{onClick:function(){var t;n.hasOwnProperty("onClick")?n.onClick():e.login({action:null!==(t=null===n||void 0===n?void 0:n.action)&&void 0!==t?t:null})},children:(0,y.jsxs)(h.Z,{alignItems:"center",gap:v.x1[2],children:[(0,y.jsx)(T,{children:null===n||void 0===n?void 0:n.icon}),(0,y.jsx)("span",{children:n.label})]})})};e.Z=function(n){var e=n.mode,t=(0,f.Eh)(),r=t.keycloak,i=t.initialized,s=(0,g.s0)(),h=(0,c.v9)((function(n){var e=n.auth;return null===e||void 0===e?void 0:e.user})),p=[{key:"Update Profile",label:(0,y.jsx)(I,{icon:(0,y.jsx)(l.Z,{}),action:"UPDATE_PROFILE",label:"Edit Profile"})},{key:"Change Password",label:(0,y.jsx)(I,{icon:(0,y.jsx)(u.Z,{}),action:"UPDATE_PASSWORD",label:"Change Password"})},{key:"",label:(0,y.jsx)(I,{onClick:function(){s("".concat(k.sH,"/devices"))},icon:(0,y.jsx)(d.Z,{}),action:null,label:"Device"})},{type:"divider"},{danger:!0,key:"Sign Out",label:(0,y.jsx)(H,{label:"Sign Out"})}];return i&&(null===r||void 0===r?void 0:r.authenticated)&&(0,y.jsx)(o.Z,{placement:"bottomRight",menu:{items:p?[].concat(p):[]},trigger:["click"],children:(0,y.jsx)(b.Z,{mode:e,children:(0,y.jsxs)(Z,{children:[(0,y.jsx)(a.C,{src:"/img/avatars/thumb-1.jpg"}),(0,y.jsxs)(E,{className:"profile-text",children:[(0,y.jsx)(j,{children:null===h||void 0===h?void 0:h.name}),(0,y.jsx)(C,{children:null===h||void 0===h?void 0:h.email})]})]})})})}},8470:function(n,e,t){var r=t(1413),i=t(4236).Z.div((function(n){var e=n.justifyContent,t=n.alignItems,i=n.flexDirection,o=n.gap,a=n.padding,c=n.margin,s={display:"flex",justifyContent:e,alignItems:t,gap:"number"===typeof o?"".concat(o,"px"):o};return i&&(s.flexDirection=i),a&&(s.padding=a),c&&(s.margin=c),(0,r.Z)({},s)}));e.Z=i},1253:function(n,e,t){t.r(e),t.d(e,{AppLayout:function(){return Rn},default:function(){return Gn}});var r,i,o=t(168),a=t(2791),c=t(364),s=t(7689),l=t(1413),u=t(1790),d=t(6443),h=t(3889),p=t(2554),m=t(1087),v=t(3110),f=t(6112),g=t(8134),b=t(6200),x=t(3660),k=t(9771),y=t(9966),T=t(2414),Z=t(9529),E=t(8999),j=t(8345),C=t(9305),H=[{key:"dashboards",path:"".concat(C.sH,"/"),title:"sidenav.dashboard",icon:g.Z,breadcrumb:!1,submenu:[]},{key:"users",path:"".concat(C.sH,"/"),title:"sidenav.dashboard.users",breadcrumb:!0,isGroupTitle:!0,roles:["admin","super"],submenu:[{key:"users.index",path:"".concat(C.sH,"/users"),title:"sidenav.dashboard.users.default",icon:b.Z,breadcrumb:!0,isGroupTitle:!1,submenu:[]},{key:"users.roles.index",path:"".concat(C.sH,"/users/role"),title:"sidenav.dashboard.users.roles",icon:b.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]},{key:"users.group.index",path:"".concat(C.sH,"/users/group"),title:"sidenav.dashboard.users.group",icon:b.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]}]},{key:"keycloak",path:"".concat(C.sH,"/keycloak"),title:"sidenav.dashboard.keycloak",breadcrumb:!1,isGroupTitle:!0,roles:["admin","super"],submenu:[{roles:["admin"],key:"keycloak.client",path:"".concat(C.sH,"/keycloak/clients"),title:"sidenav.dashboard.keycloak.client",icon:x.Z,breadcrumb:!1,submenu:[]},{roles:["admin"],key:"keycloak.groups",path:"".concat(C.sH,"/keycloak/groups"),title:"sidenav.dashboard.keycloak.groups",icon:b.Z,breadcrumb:!0,submenu:[]},{key:"keycloak.realms",path:"".concat(C.sH,"/keycloak/realm"),title:"sidenav.dashboard.keycloak.realm",icon:k.Z,breadcrumb:!1,submenu:[]},{key:"keycloak.general",path:"".concat(C.sH,"/keycloak/general"),title:"sidenav.dashboard.keycloak.general",icon:k.Z,breadcrumb:!1,submenu:[{key:"keycloak.general.general-information",path:"".concat(C.sH,"/keycloak/general/general-information"),title:"sidenav.dashboard.keycloak.general.general-information",icon:y.Z,breadcrumb:!1,submenu:[]},{key:"keycloak.general.identify-provider",path:"".concat(C.sH,"/keycloak/general/identify-provider"),title:"sidenav.dashboard.keycloak.general.identify-provider",icon:k.Z,breadcrumb:!1,submenu:[]}]}]},{key:"settings",path:"".concat(C.sH,"/settings"),title:"sidenav.dashboard.setting",breadcrumb:!1,isGroupTitle:!0,submenu:[{key:"settings.index",path:"".concat(C.sH,"/settings"),title:"sidenav.dashboard.setting.index",icon:T.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]},{key:"settings.account",path:"".concat(C.sH,"/settings/account"),title:"sidenav.dashboard.setting.account",icon:Z.Z,breadcrumb:!1,submenu:[{key:"settings.account.change-password",path:"".concat(C.sH,"/settings/account"),title:"sidenav.dashboard.setting.account.change-password",icon:E.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]},{key:"settings.account.edit-profile",path:"".concat(C.sH,"/settings/account/edit-profile"),title:"sidenav.dashboard.setting.account.edit-profile",icon:Z.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]}]},{key:"settings.devices",path:"".concat(C.sH,"/devices"),title:"sidenav.dashboard.setting.devices",icon:j.Z,breadcrumb:!1,isGroupTitle:!1,submenu:[]}]}],I=[].concat(H),N=t(5671),_=t(3144),w=function(){function n(){(0,N.Z)(this,n)}return(0,_.Z)(n,null,[{key:"getNameInitial",value:function(n){var e=n.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(n,e){if(n.path===e)return n;var t;for(var r in n)if(n.hasOwnProperty(r)&&"object"===typeof n[r]&&(t=this.getRouteInfo(n[r],e)))return t;return t}},{key:"getColorContrast",value:function(n){if(!n)return"dark";var e=parseInt(i(n).substring(0,2),16),t=function(n){return parseInt(i(n).substring(2,4),16)}(n),r=function(n){return parseInt(i(n).substring(4,6),16)}(n);function i(n){return"#"===n.charAt(0)?n.substring(1,7):n}return(299*e+587*t+114*r)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(n,e){var t=parseInt(n.substring(1,3),16),r=parseInt(n.substring(3,5),16),i=parseInt(n.substring(5,7),16);t=parseInt(t*(100+e)/100),r=(r=parseInt(r*(100+e)/100))<255?r:255,i=(i=parseInt(i*(100+e)/100))<255?i:255;var o=1===(t=t<255?t:255).toString(16).length?"0".concat(t.toString(16)):t.toString(16),a=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),c=1===i.toString(16).length?"0".concat(i.toString(16)):i.toString(16);return"#".concat(o).concat(a).concat(c)}},{key:"rgbaToHex",value:function(n){var e=function(n){return n.replace(/^\s+|\s+$/gm,"")},t=n.substring(n.indexOf("(")).split(","),r=parseInt(e(t[0].substring(1)),10),i=parseInt(e(t[1]),10),o=parseInt(e(t[2]),10),a=parseFloat(e(t[3].substring(0,t[3].length-1))).toFixed(2),c=[r.toString(16),i.toString(16),o.toString(16),Math.round(255*a).toString(16).substring(0,2)];return c.forEach((function(n,e){1===n.length&&(c[e]="0".concat(n))})),"#".concat(c.join(""))}},{key:"getSignNum",value:function(n,e,t){return n>0?e:n<0?t:null}},{key:"antdTableSorter",value:function(n,e,t){return"number"===typeof n[t]&&"number"===typeof e[t]?n[t]-e[t]:"string"===typeof n[t]&&"string"===typeof e[t]?(n=n[t].toLowerCase())>(e=e[t].toLowerCase())?-1:e>n?1:0:void 0}},{key:"filterArray",value:function(n,e,t){var r=n;return n&&(r=n.filter((function(n){return n[e]===t}))),r}},{key:"deleteArrayRow",value:function(n,e,t){var r=n;return n&&(r=n.filter((function(n){return n[e]!==t}))),r}},{key:"wildCardSearch",value:function(n,e){return n=n.filter((function(n){return function(n){for(var t in n)if(null!=n[t]&&-1!==n[t].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0}(n)}))}},{key:"getBreakPoint",value:function(n){var e=[];for(var t in n){if(n.hasOwnProperty(t))n[t]&&e.push(t)}return e}}]),n}(),O=t(2868),A=(t(763),t(3425)),R=t(136),G=t(9388),D=t(184),S=function(n){(0,R.Z)(t,n);var e=(0,G.Z)(t);function t(){return(0,N.Z)(this,t),e.apply(this,arguments)}return(0,_.Z)(t,[{key:"render",value:function(){var n=this.props,e=n.type,t=n.className;return(0,D.jsx)(D.Fragment,{children:a.createElement(e,{className:t})})}}]),t}(a.Component),L=S,P=t(3168),B=function(n){var e=n.id,t=n.fallback,r=(0,(0,P.$)().t)(e,t);return(0,D.jsx)(D.Fragment,{children:r})},U=v.ZP.useBreakpoint,F=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?(0,D.jsx)(B,{id:n}):n.toString()},M=function(n){var e=[],t="";if(n)for(var r=n.split("-"),i=0;i<r.length;i++){var o=r[i];t=0===i?o:"".concat(t,"-").concat(o),e.push(t)}return e},V=function(n){var e=n.title,t=n.icon,r=n.path,i=(0,c.I0)(),o=!w.getBreakPoint(U()).includes("lg");return(0,D.jsxs)(D.Fragment,{children:[t&&(0,D.jsx)(L,{type:t}),(0,D.jsx)("span",{children:F(e)}),r&&(0,D.jsx)(m.rU,{onClick:function(){o&&i((0,O.Ri)(!1))},to:r})]})},W=function n(e){return e.map((function(e){return(0,l.Z)((0,l.Z)({key:e.key,label:(0,D.jsx)(V,(0,l.Z)({title:e.title},e.isGroupTitle?{}:{path:e.path,icon:e.icon}))},e.isGroupTitle?{type:"group"}:{}),e.submenu.length>0?{children:n(e.submenu)}:{})}))},X=function n(e){return e.map((function(e){return(0,l.Z)({key:e.key,label:(0,D.jsx)(V,(0,l.Z)({title:e.title,icon:e.icon},e.isGroupTitle?{}:{path:e.path}))},e.submenu.length>0?{children:n(e.submenu)}:{})}))},z=function(n){var e=(0,A.Eh)().keycloak,t=n.routeInfo,r=n.hideGroupTitle,i=n.sideNavTheme,o=void 0===i?d.Vs:i,c=(0,a.useMemo)((function(){return W(I.filter((function(n){return"undefined"===typeof(null===n||void 0===n?void 0:n.roles)||(!(Array.isArray(n.roles)&&n.roles.length>0)||n.roles.some((function(n){return e.hasResourceRole(n)||e.hasRealmRole(n)})))})))}),[]);return(0,D.jsx)(f.Z,{mode:"inline",theme:o===d.Vs?"light":"dark",style:{height:"100%",borderInlineEnd:0},defaultSelectedKeys:[null===t||void 0===t?void 0:t.key],defaultOpenKeys:M(null===t||void 0===t?void 0:t.key),className:r?"hide-group-title":"",items:c})},Y=function(){var n=(0,c.v9)((function(n){return n.theme.topNavColor})),e=(0,a.useMemo)((function(){return X(I)}),[]);return(0,D.jsx)(f.Z,{mode:"horizontal",style:{backgroundColor:n},items:e})},K=function(n){return n.type===d.aJ?(0,D.jsx)(z,(0,l.Z)({},n)):(0,D.jsx)(Y,(0,l.Z)({},n))},$=t(4923),q=u.Z.Sider,J=(0,c.$j)((function(n){var e=n.theme;return{navCollapsed:e.navCollapsed,sideNavTheme:e.sideNavTheme,currentTheme:e.currentTheme}}))((function(n){var e=n.navCollapsed,t=n.routeInfo,i=n.hideGroupTitle,a=n.currentTheme,s=(0,c.v9)((function(n){return n.theme.sideNavTheme})),u={sideNavTheme:s,routeInfo:t,hideGroupTitle:i};return(0,$.tZ)(q,{css:(0,p.iv)(r||(r=(0,o.Z)(["\n        height: calc(100vh - ","px);\n        position: fixed !important;\n        top: ","px;\n        box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.15);\n        z-index: 999;\n        direction: ltr;\n        ","\n        ","\n        ","\n      "])),d.hv.HEADER_HEIGHT,d.hv.HEADER_HEIGHT,"light"===a&&s!==d.LN?"background-color: ".concat(d.wx.WHITE," !important;"):"background-color: ".concat(d.hv.SIDE_NAV_DARK_BG_COLOR," !important;"),"dark"===a&&s!==d.LN?"background-color: ".concat(d.VH.BG_COLOR," !important"):"","dark"===a&&s===d.LN?"background-color: ".concat(d.hv.SIDE_NAV_DARK_BG_COLOR," !important"):""),className:"side-nav ".concat(s===d.LN?"side-nav-dark":""),width:d.Ng,collapsed:e,children:(0,$.tZ)(h.$B,{autoHide:!0,children:(0,$.tZ)(K,(0,l.Z)({type:d.aJ},u))})})})),Q=t(4236),nn=(0,Q.Z)("div")(i||(i=(0,o.Z)(["\n  height: ","px;\n  background-color: ",";\n  position: fixed;\n  top: ","px;\n  width: 100%;\n  z-index: @zindex-modal;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n\n  .top-nav-wrapper {\n    max-width: ","px;\n    margin-left: auto;\n    margin-right: auto;\n\n    .ant-menu-horizontal {\n      line-height: ","px;\n      border-bottom: 0;\n    }\n  }\n\n  ","\n\n  ","\n"])),d.hv.HEADER_HEIGHT,(function(n){return n.backgroundColor?n.backgroundColor:"#001529"}),d.hv.HEADER_HEIGHT,d.hv.CONTENT_MAX_WIDTH,d.hv.HEADER_HEIGHT,(function(n){return"light"===n.mode?"\n\t\t.ant-menu {\n\t\t\tcolor: ".concat(d.Cj,";\n\n\t\t\t.ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), \n\t\t\t.ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected),\n\t\t\t.ant-menu-submenu-selected >.ant-menu-submenu-title {\n\t\t\t\tcolor: rgba(255, 255, 255, 0.75)\n\t\t\t}\n\t\t}\n    "):""}),(function(n){return"dark"===n.mode?"\n\t\t.ant-menu {\n\t\t\tcolor: ".concat(d.pF,";\n\n\t\t\t.ant-menu-item:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected), \n\t\t\t.ant-menu-submenu-title:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected),\n\t\t\t.ant-menu-submenu-selected >.ant-menu-submenu-title {\n\t\t\t\tcolor: rgba(0, 0, 0, 0.75)\n\t\t\t}\n\t\t}\n    "):""})),en=(0,c.$j)((function(n){return{topNavColor:n.theme.topNavColor}}))((function(n){var e=n.topNavColor,t={topNavColor:e};return(0,D.jsx)(nn,{mode:w.getColorContrast(e),backgroundColor:e,children:(0,D.jsx)("div",{className:"top-nav-wrapper",children:(0,D.jsx)(K,(0,l.Z)({type:d.XA},t))})})})),tn=t(8937),rn=t(9992),on=t(8470),an=t(9372),cn=Q.Z.div((function(){return{height:d.hv.HEADER_HEIGHT,display:"flex",alignItems:"center",padding:"0 1rem",backgroundColor:"transparent",transition:"all .2s ease"}})),sn=v.ZP.useBreakpoint,ln=function(n){var e=n.mobileLogo,t=n.logoType,r=!w.getBreakPoint(sn()).includes("lg"),i=(0,c.v9)((function(n){return n.theme.navCollapsed})),o=(0,c.v9)((function(n){return n.theme.navType}));return(0,D.jsx)(cn,{className:r&&!e?"d-none":"logo",style:{width:"".concat(function(){var n=o===d.XA;return r&&!e?0:n?"auto":"".concat(i?d.OK:d.Ng,"px")}())},children:(0,D.jsx)("img",{src:"light"===t?i?"/img/logo-sm-white.png":"/img/logo-white.png":i?"/img/logo-sm.png":"/img/logo.png",alt:"".concat(C.iC," logo")})})},un=function(n){var e=n.routeInfo,t=n.hideGroupTitle,r=(0,c.I0)(),i=(0,c.v9)((function(n){return n.theme.currentTheme})),o=(0,c.v9)((function(n){return n.theme.mobileNav})),a={routeInfo:e,hideGroupTitle:t},s=function(){r((0,O.Ri)(!1))};return(0,D.jsx)(rn.Z,{placement:"left",closable:!1,onClose:s,open:o,bodyStyle:{padding:5},width:300,children:(0,D.jsxs)(on.Z,{flexDirection:"column",className:"h-100",children:[(0,D.jsxs)(on.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,D.jsx)(ln,{logoType:"dark"===i?"light":"dark",mobileLogo:!0}),(0,D.jsx)("div",{className:"px-3",onClick:function(){return s()},children:(0,D.jsx)(an.Z,{})})]}),(0,D.jsx)("div",{className:"h-100",children:(0,D.jsx)(h.$B,{autoHide:!0,children:(0,D.jsx)(K,(0,l.Z)({type:d.aJ},a))})})]})})},dn=t(9439),hn=t(3621),pn=t(5797),mn=t(5326),vn=Q.Z.div((function(n){var e=n.headerNavColor,t=n.isDarkTheme;return{position:"fixed",width:"100%",left:0,zIndex:1e3,display:"flex",flex:"0 0 auto",height:d.hv.HEADER_HEIGHT,lineHeight:"".concat(d.hv.HEADER_HEIGHT,"px"),backgroundColor:e,boxShadow:t?"0 1px 8px -1px rgb(0 0 0 / 75%)":"0 1px 4px -1px rgb(0 0 0 / 15%)"}})),fn=Q.Z.div((function(n){var e=n.isNavTop;return(0,l.Z)({width:"100%",display:"flex"},e?{maxWidth:e,margin:"auto"}:{})})),gn=Q.Z.div((function(n){var e=n.navWidth;return{display:"flex",justifyContent:"space-between",position:"relative",transition:"all .2s ease",width:"calc(100% - ".concat(e,")")}})),bn=Q.Z.div((function(n){var e=n.left,t=n.right;return e?{display:"flex"}:t?{marginLeft:"auto",padding:"0 1rem",display:"flex"}:{}})),xn=t(5203),kn=function(n){var e=n.isMobile,t=(0,a.useState)(!1),r=(0,dn.Z)(t,2),i=(r[0],r[1]),o=(0,c.I0)(),s=(0,c.v9)((function(n){return n.theme.navCollapsed})),l=(0,c.v9)((function(n){return n.theme.mobileNav})),u=(0,c.v9)((function(n){return n.theme.navType})),h=(0,c.v9)((function(n){return n.theme.headerNavColor})),p=(0,c.v9)((function(n){return n.theme.currentTheme})),m=u===d.XA,v="dark"===p,f=(0,a.useMemo)((function(){return h?w.getColorContrast(h):w.getColorContrast(v?"#000000":"#ffffff")}),[v,h]),g=v?d.hv.HEADER_BG_DEFAULT_COLOR_DARK:d.hv.HEADER_BG_DEFAULT_COLOR_LIGHT;return(0,a.useEffect)((function(){e||i(!1)})),(0,$.tZ)(vn,{isDarkTheme:v,headerNavColor:h||g,children:(0,$.BX)(fn,{isNavTop:m,children:[(0,$.tZ)(ln,{logoType:f}),(0,$.BX)(gn,{navWidth:m||e?"0px":"".concat(s?d.OK:d.Ng,"px"),children:[(0,$.tZ)(bn,{left:!0,children:m&&!e?null:(0,$.tZ)(xn.Z,{onClick:function(){o(e?(0,O.Ri)(!l):(0,O.EV)(!s))},mode:f,children:(0,$.tZ)("div",{className:"d-flex align-items-center",children:s||e?(0,$.tZ)(hn.Z,{className:"nav-icon"}):(0,$.tZ)(pn.Z,{className:"nav-icon"})})})}),(0,$.tZ)(bn,{right:!0,children:(0,$.tZ)(mn.Z,{mode:f})})]})]})})},yn=t(1630),Tn={"/app":(0,D.jsx)(B,{id:"home"})};I.forEach((function(n,e){var t=function(n){return Tn[n.path]=(0,D.jsx)(B,{id:n.title})};t(n),n.submenu&&n.submenu.forEach((function(n){t(n),n.submenu&&n.submenu.forEach((function(n){t(n)}))}))}));var Zn,En,jn,Cn=function(n){var e=(0,s.TH)().pathname.split("/").filter((function(n){return n})),t=e.map((function(n,t){var r="/".concat(e.slice(0,t+1).join("/"));return{title:(0,D.jsx)(m.rU,{to:r,children:Tn[r]})}}));return(0,D.jsx)(yn.Z,{items:t})},Hn=function(n){(0,R.Z)(t,n);var e=(0,G.Z)(t);function t(){return(0,N.Z)(this,t),e.apply(this,arguments)}return(0,_.Z)(t,[{key:"render",value:function(){return(0,D.jsx)(Cn,{})}}]),t}(a.Component),In=Hn,Nn=function(n){var e=n.title;return n.display?(0,$.BX)("div",{css:(0,p.iv)(Zn||(Zn=(0,o.Z)(["\n        align-items: center;\n        margin-bottom: 1rem;\n\n        @media "," {\n          display: flex;\n        }\n      "])),d.qk.LAPTOP_ABOVE),children:[(0,$.tZ)("h3",{className:"mb-0 mr-3 font-weight-semibold",children:(0,$.tZ)(B,{id:e||"home"})}),(0,$.tZ)(In,{})]}):null};function _n(){var n=(0,c.v9)((function(n){return n.theme.currentTheme}));return(0,$.BX)("footer",{css:(0,p.iv)(En||(En=(0,o.Z)(["\n        height: ","px;\n        display: flex;\n        margin: 0 ","px;\n        align-items: center;\n        border-top: 1px solid ",";\n        justify-content: space-between;\n\n        @media "," {\n          justify-content: center;\n          flex-direction: column;\n        }\n      "])),d.hv.FOOTER_HEIGHT,d.hv.LAYOUT_CONTENT_GUTTER,"dark"===n?d.VH.BORDER_BASE_COLOR:d.T5.BASE_COLOR,d.qk.MOBILE),children:[(0,$.BX)("span",{children:["Copyright \xa9 ","".concat((new Date).getFullYear())," ",(0,$.tZ)("span",{className:"font-weight-semibold",children:"".concat(C.iC)})," ","All rights reserved."]}),(0,$.BX)("div",{children:[(0,$.tZ)("a",{className:"text-gray",href:"/#",onClick:function(n){return n.preventDefault()},children:"Term & Conditions"}),(0,$.tZ)("span",{className:"mx-2 text-muted",children:" | "}),(0,$.tZ)("a",{className:"text-gray",href:"/#",onClick:function(n){return n.preventDefault()},children:"Privacy & Policy"})]})]})}var wn=u.Z.Content,On=v.ZP.useBreakpoint,An=(0,Q.Z)("div")(jn||(jn=(0,o.Z)(["\n  padding: ","px;\n  margin-top: ","px;\n  min-height: calc(100vh - ","px);\n  position: relative;\n\n  ","\n\n  @media "," {\n    padding: ","px;\n  }\n"])),d.hv.LAYOUT_CONTENT_GUTTER,d.hv.HEADER_HEIGHT,d.hv.CONTENT_HEIGHT_OFFSET,(function(n){return n.isNavTop?"\n        max-width: ".concat(d.hv.CONTENT_MAX_WIDTH,"px;\n        margin-left: auto;\n        margin-right: auto;\n        width: 100%;\n\n        @media ").concat(d.qk.DESKTOP," { \n            margin-top: ").concat(d.hv.HEADER_HEIGHT+d.hv.TOP_NAV_HEIGHT,"px;\n            min-height: calc(100vh - ").concat(d.hv.CONTENT_HEIGHT_OFFSET,"px - ").concat(d.hv.TOP_NAV_HEIGHT,"px);\n        }\n    "):""}),d.qk.MOBILE,d.hv.LAYOUT_CONTENT_GUTTER_SM),Rn=function(n){var e=n.navCollapsed,t=n.navType,r=n.direction,i=n.children,o=(0,s.TH)(),c=w.getRouteInfo(I,o.pathname),l=w.getBreakPoint(On()),h=0!==l.length&&!l.includes("lg"),p=t===d.hv.NAV_TYPE_SIDE,m=t===d.hv.NAV_TYPE_TOP,v=function(){return m||h?0:e?d.hv.SIDE_NAV_COLLAPSED_WIDTH:d.hv.SIDE_NAV_WIDTH};return(0,D.jsxs)(u.Z,{children:[(0,D.jsx)(kn,{isMobile:h}),m&&!h?(0,D.jsx)(en,{routeInfo:c}):null,(0,D.jsxs)(u.Z,{children:[p&&!h?(0,D.jsx)(J,{routeInfo:c}):null,(0,D.jsxs)(u.Z,{style:r===d.hv.DIR_LTR?{paddingLeft:v()}:r===d.hv.DIR_RTL?{paddingRight:v()}:{paddingLeft:v()},children:[(0,D.jsxs)(An,{isNavTop:m,children:[(0,D.jsx)(Nn,{display:null===c||void 0===c?void 0:c.breadcrumb,title:null===c||void 0===c?void 0:c.title}),(0,D.jsx)(wn,{className:"h-100",children:(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(tn.Z,{cover:"content"}),children:i})})]}),(0,D.jsx)(_n,{})]})]}),h&&(0,D.jsx)(un,{routeInfo:c})]})},Gn=(0,c.$j)((function(n){var e=n.theme;return{navCollapsed:e.navCollapsed,navType:e.navType,locale:e.locale}}))(a.memo(Rn))}}]);
//# sourceMappingURL=253.d7c0aead.chunk.js.map