"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[261],{5203:function(n,e,t){var o,i=t(168),r=t(4236),a=t(6443),l=t(2858),c=function(n){return"dark"===n},d=(0,r.Z)("div")(o||(o=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  line-height: 1.5;\n  cursor: pointer;\n  padding: 0 1rem;\n  color: ",";\n\n  @media "," {\n    padding: 0 0.75rem;\n  }\n\n  .ant-badge {\n    color: ",";\n  }\n\n  .nav-icon {\n    font-size: 1.25rem;\n  }\n\n  &:hover,\n  &.ant-dropdown-open,\n  &.ant-popover-open {\n    > * {\n      color: ",";\n    }\n\n    .profile-text {\n      color: ",";\n    }\n  }\n"])),(function(n){return c(n.mode)?a.wx.GRAY:(0,l.m4)(a.wx.WHITE,.85)}),a.qk.MOBILE,(function(n){return c(n.mode)?a.wx.GRAY:(0,l.m4)(a.wx.WHITE,.85)}),(function(n){return c(n.mode)?l.wE.colorPrimary:a.wx.WHITE}),(function(n){return c(n.mode)?a.wx.GRAY:a.wx.WHITE}));e.Z=d},5326:function(n,e,t){var o,i=t(168),r=(t(2791),t(2279)),a=t(9367),l=t(364),c=t(7962),d=t(9529),s=t(8999),u=t(8345),p=t(8470),f=t(4721),m=t(4236),v=t(6443),g=t(3425),x=t(7689),h=t(5203),y=t(7019),j=t(9305),Z=t(184),b=m.Z.div((function(){return{fontSize:v.um.LG}})),w=m.Z.div((function(){return{display:"flex",alignItems:"center"}})),C=(0,m.Z)("div")(o||(o=(0,i.Z)(["\n  padding-left: ",";\n\n  @media "," {\n    display: none;\n  }\n"])),v.x1[2],v.qk.MOBILE),k=m.Z.div((function(){return{fontWeight:v.m5.SEMIBOLD}})),O=m.Z.span((function(){return{opacity:.8}})),E=function(n){var e=(0,g.Eh)().keycloak,t=(0,x.TH)(),o=(0,l.I0)();return(0,Z.jsx)("div",{onClick:function(){console.log([window.location.origin,t.pathname].join(""),"window.location.origin"),o((0,f.w7)()),e.logout({logoutMethod:"GET",redirectUri:[window.location.origin,t.pathname].join("")}).then((function(n){localStorage.removeItem(y.gU),console.log({response:n})})).catch((function(n){console.log({err:n})}))},children:(0,Z.jsxs)(p.Z,{alignItems:"center",gap:v.x1[2],children:[(0,Z.jsx)(b,{children:(0,Z.jsx)(c.Z,{})}),(0,Z.jsx)("span",{children:n.label})]})})},P=function(n){var e=(0,g.Eh)().keycloak;return(0,Z.jsx)("div",{onClick:function(){var t;n.hasOwnProperty("onClick")?n.onClick():e.login({action:null!==(t=null===n||void 0===n?void 0:n.action)&&void 0!==t?t:null})},children:(0,Z.jsxs)(p.Z,{alignItems:"center",gap:v.x1[2],children:[(0,Z.jsx)(b,{children:null===n||void 0===n?void 0:n.icon}),(0,Z.jsx)("span",{children:n.label})]})})};e.Z=function(n){var e=n.mode,t=(0,g.Eh)(),o=t.keycloak,i=t.initialized,c=(0,x.s0)(),p=(0,l.v9)((function(n){var e=n.auth;return null===e||void 0===e?void 0:e.user})),f=[{key:"Update Profile",label:(0,Z.jsx)(P,{icon:(0,Z.jsx)(d.Z,{}),action:"UPDATE_PROFILE",label:"Edit Profile"})},{key:"Change Password",label:(0,Z.jsx)(P,{icon:(0,Z.jsx)(s.Z,{}),action:"UPDATE_PASSWORD",label:"Change Password"})},{key:"",label:(0,Z.jsx)(P,{onClick:function(){c("".concat(j.sH,"/devices"))},icon:(0,Z.jsx)(u.Z,{}),action:null,label:"Device"})},{type:"divider"},{danger:!0,key:"Sign Out",label:(0,Z.jsx)(E,{label:"Sign Out"})}];return i&&(null===o||void 0===o?void 0:o.authenticated)&&(0,Z.jsx)(r.Z,{placement:"bottomRight",menu:{items:f?[].concat(f):[]},trigger:["click"],children:(0,Z.jsx)(h.Z,{mode:e,children:(0,Z.jsxs)(w,{children:[(0,Z.jsx)(a.C,{src:"/img/avatars/thumb-1.jpg"}),(0,Z.jsxs)(C,{className:"profile-text",children:[(0,Z.jsx)(k,{children:null===p||void 0===p?void 0:p.name}),(0,Z.jsx)(O,{children:null===p||void 0===p?void 0:p.email})]})]})})})}},8470:function(n,e,t){var o=t(1413),i=t(4236).Z.div((function(n){var e=n.justifyContent,t=n.alignItems,i=n.flexDirection,r=n.gap,a=n.padding,l=n.margin,c={display:"flex",justifyContent:e,alignItems:t,gap:"number"===typeof r?"".concat(r,"px"):r};return i&&(c.flexDirection=i),a&&(c.padding=a),l&&(c.margin=l),(0,o.Z)({},c)}));e.Z=i},9345:function(n,e,t){t.d(e,{Z:function(){return i}});t(2791);var o=t(184);function i(n){return(0,o.jsx)("div",{className:["mx-auto ".concat(null!==n&&void 0!==n&&n.fluid?"max-w-[1280px] w-full":"container"),null===n||void 0===n?void 0:n.className].join(" "),children:null===n||void 0===n?void 0:n.children})}},8265:function(n,e,t){t.r(e);var o=t(2791),i=t(364),r=t(1790),a=t(4520),l=t(2939),c=t(678),d=t(3425),s=t(7689),u=t(9345),p=(t(4721),t(7019),t(5326)),f=t(184),m=function(){var n=(0,d.Eh)(),e=n.keycloak,t=n.initialized;(0,s.TH)(),(0,i.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(r.Z.Header,{className:"border-b fixed top-0 !w-full",children:(0,f.jsx)(u.Z,{className:"!h-full",fluid:!0,children:(0,f.jsxs)(a.Z,{align:"center",className:"!h-full",justify:"space-between",children:[(0,f.jsx)(l.Z.Title,{level:1,className:"!text-3xl !m-0",children:"YUYUID"}),t?(0,f.jsx)(a.Z,{align:"center",gap:10,children:null!==e&&void 0!==e&&e.authenticated?(0,f.jsx)(p.Z,{mode:"dark"}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(c.ZP,{onClick:function(){e.login({action:"login_require"})},type:"primary",shape:"round",children:"Sign in"})})}):null]})})}),(0,f.jsx)(r.Z,{className:"!-full",children:(0,f.jsx)(r.Z.Content,{className:"!min-h-screen !pt-[80px]",children:(0,f.jsx)(u.Z,{fluid:!0,children:"haha"})})})]})})};e.default=(0,i.$j)((function(){return{}}),{})((0,o.memo)(m))},7924:function(n,e,t){t.d(e,{Z:function(){return o}});var o=function(n){return n?"function"===typeof n?n():n:null}},9152:function(n,e,t){t.d(e,{aV:function(){return p}});var o=t(9439),i=t(2791),r=t(1418),a=t.n(r),l=t(6904),c=t(7924),d=t(1929),s=t(969),u=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]])}return t},p=function(n){var e=n.title,t=n.content,o=n.prefixCls;return e||t?i.createElement(i.Fragment,null,e&&i.createElement("div",{className:"".concat(o,"-title")},e),t&&i.createElement("div",{className:"".concat(o,"-inner-content")},t)):null},f=function(n){var e=n.hashId,t=n.prefixCls,o=n.className,r=n.style,d=n.placement,s=void 0===d?"top":d,u=n.title,f=n.content,m=n.children,v=(0,c.Z)(u),g=(0,c.Z)(f),x=a()(e,t,"".concat(t,"-pure"),"".concat(t,"-placement-").concat(s),o);return i.createElement("div",{className:x,style:r},i.createElement("div",{className:"".concat(t,"-arrow")}),i.createElement(l.G,Object.assign({},n,{className:e,prefixCls:t}),m||i.createElement(p,{prefixCls:t,title:v,content:g})))};e.ZP=function(n){var e=n.prefixCls,t=n.className,r=u(n,["prefixCls","className"]),l=(0,i.useContext(d.E_).getPrefixCls)("popover",e),c=(0,s.Z)(l),p=(0,o.Z)(c,3),m=p[0],v=p[1],g=p[2];return m(i.createElement(f,Object.assign({},r,{prefixCls:l,hashId:v,className:a()(t,g)})))}},9228:function(n,e,t){var o=t(9439),i=t(2791),r=t(1418),a=t.n(r),l=t(5179),c=t(1354),d=t(7924),s=t(9464),u=t(1113),p=t(1929),f=t(1431),m=t(9152),v=t(969),g=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]])}return t},x=i.forwardRef((function(n,e){var t,r,x=n.prefixCls,h=n.title,y=n.content,j=n.overlayClassName,Z=n.placement,b=void 0===Z?"top":Z,w=n.trigger,C=void 0===w?"hover":w,k=n.children,O=n.mouseEnterDelay,E=void 0===O?.1:O,P=n.mouseLeaveDelay,I=void 0===P?.1:P,S=n.onOpenChange,N=n.overlayStyle,W=void 0===N?{}:N,B=g(n,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),D=i.useContext(p.E_).getPrefixCls,T=D("popover",x),z=(0,v.Z)(T),R=(0,o.Z)(z,3),H=R[0],M=R[1],L=R[2],_=D(),A=a()(j,M,L),G=(0,l.Z)(!1,{value:null!==(t=n.open)&&void 0!==t?t:n.visible,defaultValue:null!==(r=n.defaultOpen)&&void 0!==r?r:n.defaultVisible}),U=(0,o.Z)(G,2),V=U[0],Y=U[1],F=function(n,e){Y(n,!0),null===S||void 0===S||S(n,e)},q=(0,d.Z)(h),K=(0,d.Z)(y);return H(i.createElement(f.Z,Object.assign({placement:b,trigger:C,mouseEnterDelay:E,mouseLeaveDelay:I,overlayStyle:W},B,{prefixCls:T,overlayClassName:A,ref:e,open:V,onOpenChange:function(n){F(n)},overlay:q||K?i.createElement(m.aV,{prefixCls:T,title:q,content:K}):null,transitionName:(0,s.m)(_,"zoom-big",B.transitionName),"data-popover-inject":!0}),(0,u.Tm)(k,{onKeyDown:function(n){var e,t;i.isValidElement(k)&&(null===(t=null===k||void 0===k?void 0:(e=k.props).onKeyDown)||void 0===t||t.call(e,n)),function(n){n.keyCode===c.Z.ESC&&F(!1,n)}(n)}})))}));x._InternalPanelDoNotUseOrYouWillBeFired=m.ZP,e.Z=x},969:function(n,e,t){var o=t(4942),i=t(7521),r=t(278),a=t(8686),l=t(4487),c=t(8876),d=t(6428),s=t(6355),u=function(n){var e,t=n.componentCls,r=n.popoverColor,l=n.titleMinWidth,c=n.fontWeightStrong,d=n.innerPadding,s=n.boxShadowSecondary,u=n.colorTextHeading,p=n.borderRadiusLG,f=n.zIndexPopup,m=n.titleMarginBottom,v=n.colorBgElevated,g=n.popoverBg,x=n.titleBorderBottom,h=n.innerContentPadding,y=n.titlePadding;return[(0,o.Z)({},t,Object.assign(Object.assign({},(0,i.Wf)(n)),(e={position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":v,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"}},(0,o.Z)(e,"".concat(t,"-content"),{position:"relative"}),(0,o.Z)(e,"".concat(t,"-inner"),{backgroundColor:g,backgroundClip:"padding-box",borderRadius:p,boxShadow:s,padding:d}),(0,o.Z)(e,"".concat(t,"-title"),{minWidth:l,marginBottom:m,color:u,fontWeight:c,borderBottom:x,padding:y}),(0,o.Z)(e,"".concat(t,"-inner-content"),{color:r,padding:h}),e))),(0,a.ZP)(n,"var(--antd-arrow-background-color)"),(0,o.Z)({},"".concat(t,"-pure"),(0,o.Z)({position:"relative",maxWidth:"none",margin:n.sizePopupArrow,display:"inline-block"},"".concat(t,"-content"),{display:"inline-block"}))]},p=function(n){var e=n.componentCls;return(0,o.Z)({},e,c.i.map((function(t){var i,r=n["".concat(t,"6")];return(0,o.Z)({},"&".concat(e,"-").concat(t),(i={"--antd-arrow-background-color":r},(0,o.Z)(i,"".concat(e,"-inner"),{backgroundColor:r}),(0,o.Z)(i,"".concat(e,"-arrow"),{background:"transparent"}),i))})))};e.Z=(0,d.I$)("Popover",(function(n){var e=n.colorBgElevated,t=n.colorText,o=(0,s.IX)(n,{popoverBg:e,popoverColor:t});return[u(o),p(o),(0,r._y)(o,"zoom-big")]}),(function(n){var e=n.lineWidth,t=n.controlHeight,o=n.fontHeight,i=n.padding,r=n.wireframe,c=n.zIndexPopupBase,d=n.borderRadiusLG,s=n.marginXS,u=n.lineType,p=n.colorSplit,f=n.paddingSM,m=t-o,v=m/2,g=m/2-e,x=i;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:c+30},(0,l.w)(n)),(0,a.wZ)({contentRadius:d,limitVerticalRadius:!0})),{innerPadding:r?0:12,titleMarginBottom:r?0:s,titlePadding:r?"".concat(v,"px ").concat(x,"px ").concat(g,"px"):0,titleBorderBottom:r?"".concat(e,"px ").concat(u," ").concat(p):"none",innerContentPadding:r?"".concat(f,"px ").concat(x,"px"):0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
//# sourceMappingURL=261.929e5454.chunk.js.map