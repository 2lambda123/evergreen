(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{10150:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function i(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function o(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return i(n.overflowY,t)||i(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function c(e,t,n,r,i,o,c,a){return o<e&&c>t||o>e&&c<t?0:o<=e&&a<=n||c>=t&&a>=n?o-e-r:c>t&&a<n||o<e&&a>n?c-t+i:0}function a(e,t){var n=window,i=t.scrollMode,a=t.block,l=t.inline,s=t.boundary,u=t.skipOverflowHiddenElements,d="function"==typeof s?s:function(e){return e!==s};if(!r(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,p=[],h=e;r(h)&&d(h);){if((h=h.parentElement)===f){p.push(h);break}null!=h&&h===document.body&&o(h)&&!o(document.documentElement)||null!=h&&o(h,u)&&p.push(h)}for(var m=n.visualViewport?n.visualViewport.width:innerWidth,v=n.visualViewport?n.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),w=y.height,x=y.width,Z=y.top,j=y.right,O=y.bottom,k=y.left,E="start"===a||"nearest"===a?Z:"end"===a?O:Z+w/2,_="center"===l?k+x/2:"end"===l?j:k,D=[],I=0;I<p.length;I++){var T=p[I],C=T.getBoundingClientRect(),S=C.height,W=C.width,P=C.top,H=C.right,z=C.bottom,B=C.left;if("if-needed"===i&&Z>=0&&k>=0&&O<=v&&j<=m&&Z>=P&&O<=z&&k>=B&&j<=H)return D;var M=getComputedStyle(T),N=parseInt(M.borderLeftWidth,10),R=parseInt(M.borderTopWidth,10),K=parseInt(M.borderRightWidth,10),L=parseInt(M.borderBottomWidth,10),V=0,X=0,Y="offsetWidth"in T?T.offsetWidth-T.clientWidth-N-K:0,A="offsetHeight"in T?T.offsetHeight-T.clientHeight-R-L:0;if(f===T)V="start"===a?E:"end"===a?E-v:"nearest"===a?c(g,g+v,v,R,L,g+E,g+E+w,w):E-v/2,X="start"===l?_:"center"===l?_-m/2:"end"===l?_-m:c(b,b+m,m,N,K,b+_,b+_+x,x),V=Math.max(0,V+g),X=Math.max(0,X+b);else{V="start"===a?E-P-R:"end"===a?E-z+L+A:"nearest"===a?c(P,z,S,R,L+A,E,E+w,w):E-(P+S/2)+A/2,X="start"===l?_-B-N:"center"===l?_-(B+W/2)+Y/2:"end"===l?_-H+K+Y:c(B,H,W,N,K+Y,_,_+x,x);var G=T.scrollLeft,q=T.scrollTop;E+=q-(V=Math.max(0,Math.min(q+V,T.scrollHeight-S+A))),_+=G-(X=Math.max(0,Math.min(G+X,T.scrollWidth-W+Y)))}D.push({el:T,top:V,left:X})}return D}n.d(t,{Z:function(){return a}})},93748:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(67294),i=n(65115),o=n(69662);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=void 0!==t&&t,c=e.onKeyDown,a=e.tabIndex,l=void 0===a?0:a,s=(0,o.d)(c),u=(0,r.useCallback)((function(e){(0,i.Z)(s.current,e),e.defaultPrevented||n||e.metaKey||e.target===e.currentTarget&&("Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||(e.preventDefault(),e.currentTarget.click()))}),[n]);return{tabIndex:n?-1:l,onKeyDown:u}}},69662:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(67294);function i(e){var t=r.useRef(e);return t.current=e,t}},65115:function(e,t,n){"use strict";function r(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}}n.d(t,{Z:function(){return r}})},21608:function(e,t,n){"use strict";var r=n(87462),i=n(4942),o=n(45987),c=n(67294),a=n(45697),l=n.n(a),s=n(21463),u=n(69662),d=n(93748),f=n(65115),p=n(94693),h=["appearance","direction","disabled","is","isSelected","onKeyDown","onSelect","height","className","tabIndex"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(){},g={_active:"&:active",_after:"&:after",_before:"&:before",_current:'&[aria-current="page"],&[aria-selected="true"]',_disabled:'&[aria-disabled="true"]',_focus:"&:focus",_hover:"&:hover"},y=(0,c.memo)((0,c.forwardRef)((function(e,t){var n,i=e.appearance,a=void 0===i?"secondary":i,l=e.direction,m=void 0===l?"horizontal":l,y=e.disabled,w=void 0!==y&&y,x=e.is,Z=void 0===x?"span":x,j=e.isSelected,O=e.onKeyDown,k=void 0===O?b:O,E=e.onSelect,_=void 0===E?b:E,D=e.height,I=void 0===D?28:D,T=e.className,C=e.tabIndex,S=(0,o.Z)(e,h),W=(0,s.m)("Tab",{appearance:a,direction:m},g,function(e){return{alignItems:"center",justifyContent:"horizontal"===e?"center":"flex-start",textDecoration:"none",cursor:"pointer",outline:"none",WebkitFontSmoothing:"antialiased",WebkitAppearance:"none",MozAppearance:"none",display:"horizontal"===e?"inline-flex":"flex",width:"horizontal"===e?"auto":"100%"}}(m)),P=(0,u.d)(e.onClick),H=(0,c.useCallback)((function(e){(0,f.Z)(P.current,e),w||_()}),[w,_]),z=(0,d.h)({disabled:w,onKeyDown:k,tabIndex:C});return w&&(n={"aria-disabled":!0}),n="a"===Z?j?v(v({},n),{},{"aria-current":"page"}):{}:v(v({},n),{},{"aria-selected":j,role:"tab"}),c.createElement(p.Z,(0,r.Z)({className:T,is:Z,size:300,height:I,ref:t,tabIndex:0},W,S,{onClick:H},z,n))})));y.propTypes=v(v({},p.Z.propTypes),{},{onSelect:l().func,isSelected:l().bool,appearance:l().string,direction:l().oneOf(["horizontal","vertical"]),className:l().string}),t.Z=y},95176:function(e,t,n){"use strict";var r=n(87462),i=n(67294),o=n(80079),c=n.n(o),a=(0,i.forwardRef)((function(e,t){return i.createElement(c(),(0,r.Z)({role:"tablist"},e,{ref:t}))}));a.propTypes=c().propTypes,t.Z=a},98766:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction",function(){return n(32091)}])},40475:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(11163)),o=n(36811),c=n(36448),a=n(77117),l=n(70979),s=n(71898),u=n(47341),d=n(95176),f=n(21608);t.Z=function(e){var t=e.description,n=e.githubLink,p=e.tabs,h=e.title,m=(0,i.useRouter)();return(0,r.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"flex-start",children:[(0,r.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",marginBottom:(0,c.Z)(4),children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{size:900,marginBottom:(0,c.Z)(1),children:h}),t&&(0,r.jsx)(l.Z,{children:t})]}),(0,r.jsx)(o.Z,{children:n&&(0,r.jsx)(s.ZP,{is:u.Z,href:n,appearance:"default",target:"_blank",children:"Open in GitHub"})})]}),p&&(0,r.jsx)(d.Z,{width:"100%",borderBottom:"1px solid #efefef",marginBottom:(0,c.Z)(2),paddingTop:(0,c.Z)(1),children:p.map((function(e,t){var n=e.label,i=e.to;return(0,r.jsx)(f.Z,{appearance:"primary",isSelected:m.asPath===i,onSelect:function(){return m.push(i)},children:n},t)}))})]})}},13790:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(67294),o=n(36811),c=n(36448),a=n(77117),l=n(95176),s=n(21608),u="undefined"!==typeof document?i.useLayoutEffect:i.useEffect,d=n(13727),f=n(41664),p=n.n(f),h=function(e){var t=e.title,n=e.items,i=e.selectedItem,f=e.routePrefix;return u((function(){var e=document.querySelector('[aria-selected="true"]');e&&(0,d.Z)(e,{scrollMode:"if-needed"})}),[i]),(0,r.jsxs)(o.Z,{display:"flex",position:"sticky",top:64,flexDirection:"column",overflowY:"auto",maxHeight:"calc(100vh - 64px)",paddingY:(0,c.Z)(5),paddingX:(0,c.Z)(3),children:[(0,r.jsx)(a.Z,{size:200,textTransform:"uppercase",marginBottom:(0,c.Z)(2),marginLeft:(0,c.Z)(2),children:t}),(0,r.jsx)(l.Z,{children:n.map((function(e){return(0,r.jsx)(p(),{href:"/".concat(f,"/").concat(e.id),passHref:!0,children:(0,r.jsx)(s.Z,{is:"a",alignItems:"flex-start",direction:"vertical",isSelected:!!i&&e.id===i.id,children:e.name})},e.id)}))})]})}},32091:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=(n(67294),n(36811)),o=n(36448),c=n(19065),a=n(40475),l=n(13790),s=n(93565);t.default=function(){return(0,r.jsx)(c.Z,{title:"Introduction",children:(0,r.jsxs)(i.Z,{width:"100%",display:"grid",gridTemplateColumns:"236px 1fr",children:[(0,r.jsx)(l.Z,{title:"Introduction",items:s.Z.introduction.items,routePrefix:"introduction"}),(0,r.jsxs)(i.Z,{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:(0,o.Z)(5),maxWidth:(0,o.Z)(143),children:[(0,r.jsx)(a.Z,{title:"Introduction",description:s.Z.introduction.description}),(0,r.jsx)(i.Z,{width:"100%",display:"grid",gridColumnGap:"24px",gridRowGap:"32px"})]})]})})}},13727:function(e,t,n){"use strict";var r=n(10150);function i(e){return e===Object(e)&&0!==Object.keys(e).length}t.Z=function(e,t){var n=!e.ownerDocument.documentElement.contains(e);if(i(t)&&"function"===typeof t.behavior)return t.behavior(n?[]:(0,r.Z)(e,t));if(!n){var o=function(e){return!1===e?{block:"end",inline:"nearest"}:i(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,i=e.top,o=e.left;r.scroll&&n?r.scroll({top:i,left:o,behavior:t}):(r.scrollTop=i,r.scrollLeft=o)}))}((0,r.Z)(e,o),o.behavior)}}}},function(e){e.O(0,[613,693,774,888,179],(function(){return t=98766,e(e.s=t);var t}));var t=e.O();_N_E=t}]);