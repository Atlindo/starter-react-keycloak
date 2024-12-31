"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[839],{872:function(t,e,n){n(2791);var o=n(2279),i=n(6112),a=n(5033),r=n(184),c=function(t){return(0,r.jsx)(o.Z,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,r.jsx)("div",{className:"ellipsis-dropdown",children:(0,r.jsx)(a.Z,{})})})};c.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,r.jsx)(i.Z,{})},e.Z=c},9839:function(t,e,n){n.r(e),n.d(e,{Page:function(){return gt},default:function(){return pt}});var o=n(1413),i=n(9439),a=n(2791),r=n(5140),c=n(1046),l=n(4942),s=n(1418),d=n.n(s),u=n(6211),m=n(4466),b=n(1113),f=n(1929),v=n(9841),g=n(7521),p=n(8101),h=n(6355),Z=n(6428),x=new v.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),y=new v.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),j=new v.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),C=new v.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),w=new v.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),O=new v.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),S=function(t){var e=t.fontHeight,n=t.lineWidth,o=t.marginXS,i=t.colorBorderBg,a=e,r=n,c=t.colorTextLightSolid,l=t.colorError,s=t.colorErrorHover;return(0,h.IX)(t,{badgeFontHeight:a,badgeShadowSize:r,badgeTextColor:c,badgeColor:l,badgeColorHover:s,badgeShadowColor:i,badgeProcessingDuration:"1.2s",badgeRibbonOffset:o,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},N=function(t){var e=t.fontSize,n=t.lineHeight,o=t.fontSizeSM,i=t.lineWidth;return{indicatorZIndex:"auto",indicatorHeight:Math.round(e*n)-2*i,indicatorHeightSM:e,dotSize:o/2,textFontSize:o,textFontSizeSM:o,textFontWeight:"normal",statusSize:o/2}},k=(0,Z.I$)("Badge",(function(t){return function(t){var e,n,o,i,a,r=t.componentCls,c=t.iconCls,s=t.antCls,d=t.badgeShadowSize,u=t.textFontSize,m=t.textFontSizeSM,b=t.statusSize,f=t.dotSize,h=t.textFontWeight,Z=t.indicatorHeight,S=t.indicatorHeightSM,N=t.marginXS,k=t.calc,E="".concat(s,"-scroll-number"),I=(0,p.Z)(t,(function(t,e){var n,o=e.darkColor;return(0,l.Z)({},"&".concat(r," ").concat(r,"-color-").concat(t),(n={background:o},(0,l.Z)(n,"&:not(".concat(r,"-count)"),{color:o}),(0,l.Z)(n,"a:hover &",{background:o}),n))}));return(0,l.Z)({},r,Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(t)),(n={position:"relative",display:"inline-block",width:"fit-content",lineHeight:1},(0,l.Z)(n,"".concat(r,"-count"),{display:"inline-flex",justifyContent:"center",zIndex:t.indicatorZIndex,minWidth:Z,height:Z,color:t.badgeTextColor,fontWeight:h,fontSize:u,lineHeight:(0,v.bf)(Z),whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:k(Z).div(2).equal(),boxShadow:"0 0 0 ".concat((0,v.bf)(d)," ").concat(t.badgeShadowColor),transition:"background ".concat(t.motionDurationMid),a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}}),(0,l.Z)(n,"".concat(r,"-count-sm"),{minWidth:S,height:S,fontSize:m,lineHeight:(0,v.bf)(S),borderRadius:k(S).div(2).equal()}),(0,l.Z)(n,"".concat(r,"-multiple-words"),{padding:"0 ".concat((0,v.bf)(t.paddingXS)),bdi:{unicodeBidi:"plaintext"}}),(0,l.Z)(n,"".concat(r,"-dot"),{zIndex:t.indicatorZIndex,width:f,minWidth:f,height:f,background:t.badgeColor,borderRadius:"100%",boxShadow:"0 0 0 ".concat((0,v.bf)(d)," ").concat(t.badgeShadowColor)}),(0,l.Z)(n,"".concat(r,"-count, ").concat(r,"-dot, ").concat(E,"-custom-component"),(0,l.Z)({position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%"},"&".concat(c,"-spin"),{animationName:O,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"})),(0,l.Z)(n,"&".concat(r,"-status"),(e={lineHeight:"inherit",verticalAlign:"baseline"},(0,l.Z)(e,"".concat(r,"-status-dot"),{position:"relative",top:-1,display:"inline-block",width:b,height:b,verticalAlign:"middle",borderRadius:"50%"}),(0,l.Z)(e,"".concat(r,"-status-success"),{backgroundColor:t.colorSuccess}),(0,l.Z)(e,"".concat(r,"-status-processing"),{overflow:"visible",color:t.colorInfo,backgroundColor:t.colorInfo,borderColor:"currentcolor","&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:d,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:x,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}}),(0,l.Z)(e,"".concat(r,"-status-default"),{backgroundColor:t.colorTextPlaceholder}),(0,l.Z)(e,"".concat(r,"-status-error"),{backgroundColor:t.colorError}),(0,l.Z)(e,"".concat(r,"-status-warning"),{backgroundColor:t.colorWarning}),(0,l.Z)(e,"".concat(r,"-status-text"),{marginInlineStart:N,color:t.colorText,fontSize:t.fontSize}),e)),n)),I),(a={},(0,l.Z)(a,"".concat(r,"-zoom-appear, ").concat(r,"-zoom-enter"),{animationName:y,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"}),(0,l.Z)(a,"".concat(r,"-zoom-leave"),{animationName:j,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"}),(0,l.Z)(a,"&".concat(r,"-not-a-wrapper"),(o={},(0,l.Z)(o,"".concat(r,"-zoom-appear, ").concat(r,"-zoom-enter"),{animationName:C,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack}),(0,l.Z)(o,"".concat(r,"-zoom-leave"),{animationName:w,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack}),(0,l.Z)(o,"&:not(".concat(r,"-status)"),{verticalAlign:"middle"}),(0,l.Z)(o,"".concat(E,"-custom-component, ").concat(r,"-count"),{transform:"none"}),(0,l.Z)(o,"".concat(E,"-custom-component, ").concat(E),{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}),o)),(0,l.Z)(a,E,(i={overflow:"hidden",transition:"all ".concat(t.motionDurationMid," ").concat(t.motionEaseOutBack)},(0,l.Z)(i,"".concat(E,"-only"),(0,l.Z)({position:"relative",display:"inline-block",height:Z,transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseOutBack),WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"},"> p".concat(E,"-only-unit"),{height:Z,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"})),(0,l.Z)(i,"".concat(E,"-symbol"),{verticalAlign:"top"}),i)),(0,l.Z)(a,"&-rtl",(0,l.Z)({direction:"rtl"},"".concat(r,"-count, ").concat(r,"-dot, ").concat(E,"-custom-component"),{transform:"translate(-50%, -50%)"})),a)))}(S(t))}),N),E=(0,Z.I$)(["Badge","Ribbon"],(function(t){return function(t){var e,n,o,i=t.antCls,a=t.badgeFontHeight,r=t.marginXS,c=t.badgeRibbonOffset,s=t.calc,d="".concat(i,"-ribbon"),u="".concat(i,"-ribbon-wrapper"),m=(0,p.Z)(t,(function(t,e){var n=e.darkColor;return(0,l.Z)({},"&".concat(d,"-color-").concat(t),{background:n,color:n})}));return o={},(0,l.Z)(o,u,{position:"relative"}),(0,l.Z)(o,d,Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(t)),(e={position:"absolute",top:r,padding:"0 ".concat((0,v.bf)(t.paddingXS)),color:t.colorPrimary,lineHeight:(0,v.bf)(a),whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM},(0,l.Z)(e,"".concat(d,"-text"),{color:t.badgeTextColor}),(0,l.Z)(e,"".concat(d,"-corner"),{position:"absolute",top:"100%",width:c,height:c,color:"currentcolor",border:"".concat((0,v.bf)(s(c).div(2).equal())," solid"),transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}),e)),m),(n={},(0,l.Z)(n,"&".concat(d,"-placement-end"),(0,l.Z)({insetInlineEnd:s(c).mul(-1).equal(),borderEndEndRadius:0},"".concat(d,"-corner"),{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"})),(0,l.Z)(n,"&".concat(d,"-placement-start"),(0,l.Z)({insetInlineStart:s(c).mul(-1).equal(),borderEndStartRadius:0},"".concat(d,"-corner"),{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"})),(0,l.Z)(n,"&-rtl",{direction:"rtl"}),n))),o}(S(t))}),N);var I=function(t){var e,n=t.className,o=t.prefixCls,r=t.style,c=t.color,s=t.children,u=t.text,b=t.placement,v=void 0===b?"end":b,g=t.rootClassName,p=a.useContext(f.E_),h=p.getPrefixCls,Z=p.direction,x=h("ribbon",o),y="".concat(x,"-wrapper"),j=E(x,y),C=(0,i.Z)(j,3),w=C[0],O=C[1],S=C[2],N=(0,m.o2)(c,!1),k=d()(x,"".concat(x,"-placement-").concat(v),(e={},(0,l.Z)(e,"".concat(x,"-rtl"),"rtl"===Z),(0,l.Z)(e,"".concat(x,"-color-").concat(c),N),e),n),I={},z={};return c&&!N&&(I.background=c,z.color=c),w(a.createElement("div",{className:d()(y,g,O,S)},s,a.createElement("div",{className:d()(k,O),style:Object.assign(Object.assign({},I),r)},a.createElement("span",{className:"".concat(x,"-text")},u),a.createElement("div",{className:"".concat(x,"-corner"),style:z}))))},z=function(t){var e,n=t.prefixCls,o=t.value,i=t.current,r=t.offset,c=void 0===r?0:r;return c&&(e={position:"absolute",top:"".concat(c,"00%"),left:0}),a.createElement("span",{style:e,className:d()("".concat(n,"-only-unit"),{current:i})},o)};function T(t,e,n){for(var o=t,i=0;(o+10)%10!==e;)o+=n,i+=n;return i}var R=function(t){var e,n,o=t.prefixCls,r=t.count,c=t.value,l=Number(c),s=Math.abs(r),d=a.useState(l),u=(0,i.Z)(d,2),m=u[0],b=u[1],f=a.useState(s),v=(0,i.Z)(f,2),g=v[0],p=v[1],h=function(){b(l),p(s)};if(a.useEffect((function(){var t=setTimeout(h,1e3);return function(){return clearTimeout(t)}}),[l]),m===l||Number.isNaN(l)||Number.isNaN(m))e=[a.createElement(z,Object.assign({},t,{key:l,current:!0}))],n={transition:"none"};else{e=[];for(var Z=l+10,x=[],y=l;y<=Z;y+=1)x.push(y);var j=g<s?1:-1,C=x.findIndex((function(t){return t%10===m}));e=(j<0?x.slice(0,C+1):x.slice(C)).map((function(e,n){var o=e%10;return a.createElement(z,Object.assign({},t,{key:e,value:o,offset:j<0?n-C:n,current:n===C}))})),n={transform:"translateY(".concat(-T(m,l,j),"00%)")}}return a.createElement("span",{className:"".concat(o,"-only"),style:n,onTransitionEnd:h},e)},F=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n},H=a.forwardRef((function(t,e){var n=t.prefixCls,o=t.count,i=t.className,r=t.motionClassName,c=t.style,l=t.title,s=t.show,u=t.component,m=void 0===u?"sup":u,v=t.children,g=F(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),p=(0,a.useContext(f.E_).getPrefixCls)("scroll-number",n),h=Object.assign(Object.assign({},g),{"data-show":s,style:c,className:d()(p,i,r),title:l}),Z=o;if(o&&Number(o)%1===0){var x=String(o).split("");Z=a.createElement("bdi",null,x.map((function(t,e){return a.createElement(R,{prefixCls:p,count:Number(o),value:t,key:x.length-e})})))}return(null===c||void 0===c?void 0:c.borderColor)&&(h.style=Object.assign(Object.assign({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),v?(0,b.Tm)(v,(function(t){return{className:d()("".concat(p,"-custom-component"),null===t||void 0===t?void 0:t.className,r)}})):a.createElement(m,Object.assign({},h,{ref:e}),Z)})),B=H,P=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n},M=a.forwardRef((function(t,e){var n,o,r,c,s,v,g,p=t.prefixCls,h=t.scrollNumberPrefixCls,Z=t.children,x=t.status,y=t.text,j=t.color,C=t.count,w=void 0===C?null:C,O=t.overflowCount,S=void 0===O?99:O,N=t.dot,E=void 0!==N&&N,I=t.size,z=void 0===I?"default":I,T=t.title,R=t.offset,F=t.style,H=t.className,M=t.rootClassName,D=t.classNames,W=t.styles,A=t.showZero,L=void 0!==A&&A,V=P(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),q=a.useContext(f.E_),X=q.getPrefixCls,Y=q.direction,_=q.badge,$=X("badge",p),U=k($),G=(0,i.Z)(U,3),J=G[0],K=G[1],Q=G[2],tt=w>S?"".concat(S,"+"):w,et="0"===tt||0===tt,nt=(null!==x&&void 0!==x||null!==j&&void 0!==j)&&(null===w||et&&!L),ot=E&&!et,it=ot?"":tt,at=(0,a.useMemo)((function(){return(null===it||void 0===it||""===it||et&&!L)&&!ot}),[it,et,L,ot]),rt=(0,a.useRef)(w);at||(rt.current=w);var ct=rt.current,lt=(0,a.useRef)(it);at||(lt.current=it);var st=lt.current,dt=(0,a.useRef)(ot);at||(dt.current=ot);var ut=(0,a.useMemo)((function(){if(!R)return Object.assign(Object.assign({},null===_||void 0===_?void 0:_.style),F);var t={marginTop:R[1]};return"rtl"===Y?t.left=parseInt(R[0],10):t.right=-parseInt(R[0],10),Object.assign(Object.assign(Object.assign({},t),null===_||void 0===_?void 0:_.style),F)}),[Y,R,F,null===_||void 0===_?void 0:_.style]),mt=null!==T&&void 0!==T?T:"string"===typeof ct||"number"===typeof ct?ct:void 0,bt=at||!y?null:a.createElement("span",{className:"".concat($,"-status-text")},y),ft=ct&&"object"===typeof ct?(0,b.Tm)(ct,(function(t){return{style:Object.assign(Object.assign({},ut),t.style)}})):void 0,vt=(0,m.o2)(j,!1),gt=d()(null===D||void 0===D?void 0:D.indicator,null===(r=null===_||void 0===_?void 0:_.classNames)||void 0===r?void 0:r.indicator,(n={},(0,l.Z)(n,"".concat($,"-status-dot"),nt),(0,l.Z)(n,"".concat($,"-status-").concat(x),!!x),(0,l.Z)(n,"".concat($,"-color-").concat(j),vt),n)),pt={};j&&!vt&&(pt.color=j,pt.background=j);var ht=d()($,(o={},(0,l.Z)(o,"".concat($,"-status"),nt),(0,l.Z)(o,"".concat($,"-not-a-wrapper"),!Z),(0,l.Z)(o,"".concat($,"-rtl"),"rtl"===Y),o),H,M,null===_||void 0===_?void 0:_.className,null===(c=null===_||void 0===_?void 0:_.classNames)||void 0===c?void 0:c.root,null===D||void 0===D?void 0:D.root,K,Q);if(!Z&&nt){var Zt=ut.color;return J(a.createElement("span",Object.assign({},V,{className:ht,style:Object.assign(Object.assign(Object.assign({},null===W||void 0===W?void 0:W.root),null===(s=null===_||void 0===_?void 0:_.styles)||void 0===s?void 0:s.root),ut)}),a.createElement("span",{className:gt,style:Object.assign(Object.assign(Object.assign({},null===W||void 0===W?void 0:W.indicator),null===(v=null===_||void 0===_?void 0:_.styles)||void 0===v?void 0:v.indicator),pt)}),y&&a.createElement("span",{style:{color:Zt},className:"".concat($,"-status-text")},y)))}return J(a.createElement("span",Object.assign({ref:e},V,{className:ht,style:Object.assign(Object.assign({},null===(g=null===_||void 0===_?void 0:_.styles)||void 0===g?void 0:g.root),null===W||void 0===W?void 0:W.root)}),Z,a.createElement(u.ZP,{visible:!at,motionName:"".concat($,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(t){var e,n,o,i=t.className,r=X("scroll-number",h),c=dt.current,s=d()(null===D||void 0===D?void 0:D.indicator,null===(n=null===_||void 0===_?void 0:_.classNames)||void 0===n?void 0:n.indicator,(e={},(0,l.Z)(e,"".concat($,"-dot"),c),(0,l.Z)(e,"".concat($,"-count"),!c),(0,l.Z)(e,"".concat($,"-count-sm"),"small"===z),(0,l.Z)(e,"".concat($,"-multiple-words"),!c&&st&&st.toString().length>1),(0,l.Z)(e,"".concat($,"-status-").concat(x),!!x),(0,l.Z)(e,"".concat($,"-color-").concat(j),vt),e)),u=Object.assign(Object.assign(Object.assign({},null===W||void 0===W?void 0:W.indicator),null===(o=null===_||void 0===_?void 0:_.styles)||void 0===o?void 0:o.indicator),ut);return j&&!vt&&((u=u||{}).background=j),a.createElement(B,{prefixCls:r,show:!at,motionClassName:i,className:s,count:st,title:mt,style:u,key:"scrollNumber"},ft)})),bt))})),D=M;D.Ribbon=I;var W=D,A=n(952),L=n(1306),V=n(6112),q=n(7128),X=n(6473),Y=n(4520),_=n(3342),$=n(678),U=n(6106),G=n(914),J=n(4260),K=n(8448),Q=n(5323),tt=n(732),et=n(4215),nt=n(1752),ot=n(7462),it={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"},at=n(4291),rt=function(t,e){return a.createElement(at.Z,(0,ot.Z)({},t,{ref:e,icon:it}))};var ct=a.forwardRef(rt),lt=n(2426),st=n.n(lt),dt=n(7689),ut=n(1087),mt=n(872),bt=n(7391),ft=n(9305),vt=n(184),gt=function(){var t,e=(0,dt.s0)(),n=r.Z.useForm(),l=(0,i.Z)(n,1)[0],s=(0,a.useState)(!0),d=(0,i.Z)(s,2),u=d[0],m=d[1],b=(0,a.useState)([]),f=(0,i.Z)(b,2),v=f[0],g=f[1],p=(0,a.useState)(["id"]),h=((0,i.Z)(p,1)[0],(0,a.useState)({page:1,limit:10})),Z=(0,i.Z)(h,2),x=Z[0],y=Z[1],j=(0,a.useState)({page:null===x||void 0===x?void 0:x.page,limit:null===x||void 0===x?void 0:x.limit,total:0}),C=(0,i.Z)(j,2),w=C[0],O=C[1],S=(0,a.useState)(null),N=(0,i.Z)(S,2),k=N[0],E=N[1];function I(){l.validateFields().then((function(t){console.log({values:t})}))}var z=[{visible:!0,key:"no",width:"70px",title:"No.",dataIndex:"id",render:function(t,e,n){return(null===w||void 0===w?void 0:w.page)>1?(n+1)*(null===x||void 0===x?void 0:x.limit):n+1}},{visible:!0,width:"180px",key:"username",title:"Username",dataIndex:"username",render:function(t,e){return(0,vt.jsx)(ut.OL,{to:[ft.sH,"users",null===e||void 0===e?void 0:e.id].join("/"),children:t})}},{visible:!0,width:"220px",fixed:"left",key:"email",title:"Email",dataIndex:"email"},{visible:!0,width:"220px",key:"firstName",title:"First Name",dataIndex:"firstName"},{visible:!0,width:"220px",key:"lastName",title:"Last Name",dataIndex:"lastName"},{visible:!0,key:"requiredActions",width:"200px",title:"Required Action",dataIndex:"requiredActions",render:function(t){return Array.isArray(t)&&t.length>0?(0,vt.jsx)("div",{children:t.length>1?(0,vt.jsx)(c.Z,{children:t.slice(0,1).map((function(e){return(0,vt.jsx)(W,{count:t.slice(1).length,showZero:!1,children:(0,vt.jsx)(A.Z,{color:"cyan",className:"mb-1",children:e})})}))}):t.map((function(t){return(0,vt.jsx)(A.Z,{color:"cyan",className:"mb-1",children:t})}))}):null}},{width:"160px",visible:!0,key:"emailVerified",title:"Verified",dataIndex:"emailVerified",render:function(t){return(0,vt.jsx)(L.Z,{checked:t,disabled:!0})}},{width:"160px",visible:!0,key:"totp",title:"TOTP",dataIndex:"totp",render:function(t){return(0,vt.jsx)(L.Z,{checked:t,disabled:!0})}},{width:"160px",visible:!0,key:"enabled",title:"Enabled",dataIndex:"enabled",render:function(t){return(0,vt.jsx)(L.Z,{checked:t,disabled:!0})}},{visible:!0,width:"200px",key:"createdTimestamp",title:"Created At",dataIndex:"createdTimestamp",render:function(t){return st()(t).isValid()?st()(t).format("DD/MM/YYYY HH:mm A"):"-"}},{fixed:"right",visible:!0,width:"100px",title:"Action",render:function(t){return(0,vt.jsx)(mt.Z,{placement:"left",menu:(0,vt.jsx)(V.Z,{children:(null===t||void 0===t?void 0:t.id)===k?(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsx)(V.Z.Item,{icon:(0,vt.jsx)(Q.Z,{}),onClick:I,children:"Save"},"save"),(0,vt.jsx)(V.Z.Item,{icon:(0,vt.jsx)(tt.Z,{}),danger:!0,onClick:function(){E(null)},children:"Cancel"},"close")]}):(0,vt.jsxs)(vt.Fragment,{children:[(0,vt.jsx)(V.Z.Item,{onClick:function(){e([ft.sH,"users",null===t||void 0===t?void 0:t.id].join("/"))},icon:(0,vt.jsx)(et.Z,{}),children:"Detail"}),(0,vt.jsx)(q.Z,{className:"m-0"}),(0,vt.jsx)(V.Z.Item,{onClick:function(){return e=t,l.setFieldsValue((0,o.Z)((0,o.Z)({},e),{},{createdTimestamp:st()(null===e||void 0===e?void 0:e.createdTimestamp)})),void E(null===e||void 0===e?void 0:e.id);var e},icon:(0,vt.jsx)(nt.Z,{}),children:"Amend Account"}),(0,vt.jsx)(V.Z.Item,{onClick:function(){e([ft.sH,"users",null===t||void 0===t?void 0:t.id,"amend","access"].join("/"))},icon:(0,vt.jsx)(nt.Z,{}),children:"Access"})]})})})}}];return(0,a.useEffect)((function(){m(!0),new bt.Z({url:"/api/v1/user",config:{params:x}}).get().then((function(t){var e;console.log({response:t}),O((function(e){return(0,o.Z)((0,o.Z)({},e),null===t||void 0===t?void 0:t.pagination)})),m(!1),g(null!==(e=null===t||void 0===t?void 0:t.data)&&void 0!==e?e:[])})).catch((function(t){m(!1),g([])}))}),[x]),(0,vt.jsxs)(X.Z,{children:[(0,vt.jsxs)(Y.Z,{justify:"space-between",className:"mb-4",children:[(0,vt.jsxs)(c.Z,{children:[(0,vt.jsx)(_.Z,{placeholder:"Input your name"}),(0,vt.jsx)(_.Z,{placeholder:"Input your name"})]}),(0,vt.jsx)("div",{children:(0,vt.jsx)($.ZP,{icon:(0,vt.jsx)(ct,{}),type:"primary",children:"Filter"})})]}),(0,vt.jsx)(r.Z,{form:l,component:!1,children:(0,vt.jsxs)(U.Z,{gutter:[24,24],children:[(0,vt.jsx)(G.Z,{xs:24,children:(0,vt.jsx)(J.Z,{bordered:!0,scroll:{x:1980},rowClassName:"editable-row",loading:u,columns:z,dataSource:v,pagination:!1})}),(0,vt.jsx)(G.Z,{xs:24,children:(0,vt.jsx)(K.Z,{onChange:function(t,e){y((function(n){return(0,o.Z)((0,o.Z)({},n),{},{page:t,limit:e})}))},simple:!0,total:null!==(t=null===w||void 0===w?void 0:w.total)&&void 0!==t?t:0})})]})})]})},pt=gt},1752:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(7462),i=n(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},r=n(4291),c=function(t,e){return i.createElement(r.Z,(0,o.Z)({},t,{ref:e,icon:a}))};var l=i.forwardRef(c)}}]);
//# sourceMappingURL=839.df34b925.chunk.js.map