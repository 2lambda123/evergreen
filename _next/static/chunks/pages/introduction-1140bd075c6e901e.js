(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{10150:function(t,e,n){"use strict";function i(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function r(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function o(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return r(n.overflowY,e)||r(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function l(t,e,n,i,r,o,l,c){return o<t&&l>e||o>t&&l<e?0:o<=t&&c<=n||l>=e&&c>=n?o-t-i:l>e&&c<n||o<t&&c>n?l-e+r:0}function c(t,e){var n=window,r=e.scrollMode,c=e.block,s=e.inline,u=e.boundary,d=e.skipOverflowHiddenElements,a="function"==typeof u?u:function(t){return t!==u};if(!i(t))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,h=[],p=t;i(p)&&a(p);){if((p=p.parentElement)===f){h.push(p);break}null!=p&&p===document.body&&o(p)&&!o(document.documentElement)||null!=p&&o(p,d)&&h.push(p)}for(var m=n.visualViewport?n.visualViewport.width:innerWidth,g=n.visualViewport?n.visualViewport.height:innerHeight,x=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,w=t.getBoundingClientRect(),Z=w.height,b=w.width,y=w.top,j=w.right,E=w.bottom,W=w.left,k="start"===c||"nearest"===c?y:"end"===c?E:y+Z/2,H="center"===s?W+b/2:"end"===s?j:W,_=[],C=0;C<h.length;C++){var I=h[C],T=I.getBoundingClientRect(),B=T.height,M=T.width,O=T.top,D=T.right,L=T.bottom,P=T.left;if("if-needed"===r&&y>=0&&W>=0&&E<=g&&j<=m&&y>=O&&E<=L&&W>=P&&j<=D)return _;var S=getComputedStyle(I),V=parseInt(S.borderLeftWidth,10),X=parseInt(S.borderTopWidth,10),N=parseInt(S.borderRightWidth,10),R=parseInt(S.borderBottomWidth,10),Y=0,G=0,z="offsetWidth"in I?I.offsetWidth-I.clientWidth-V-N:0,q="offsetHeight"in I?I.offsetHeight-I.clientHeight-X-R:0;if(f===I)Y="start"===c?k:"end"===c?k-g:"nearest"===c?l(v,v+g,g,X,R,v+k,v+k+Z,Z):k-g/2,G="start"===s?H:"center"===s?H-m/2:"end"===s?H-m:l(x,x+m,m,V,N,x+H,x+H+b,b),Y=Math.max(0,Y+v),G=Math.max(0,G+x);else{Y="start"===c?k-O-X:"end"===c?k-L+R+q:"nearest"===c?l(O,L,B,X,R+q,k,k+Z,Z):k-(O+B/2)+q/2,G="start"===s?H-P-V:"center"===s?H-(P+M/2)+z/2:"end"===s?H-D+N+z:l(P,D,M,V,N+z,H,H+b,b);var A=I.scrollLeft,F=I.scrollTop;k+=F-(Y=Math.max(0,Math.min(F+Y,I.scrollHeight-B+q))),H+=A-(G=Math.max(0,Math.min(A+G,I.scrollWidth-M+z)))}_.push({el:I,top:Y,left:G})}return _}n.d(e,{Z:function(){return c}})},98766:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction",function(){return n(45676)}])},66149:function(t,e,n){"use strict";var i=n(85893),r=(n(67294),n(11163)),o=n(36811),l=n(36448),c=n(77117),s=n(70979),u=n(71898),d=n(47341),a=n(95176),f=n(21608);e.Z=function(t){var e=t.description,n=t.githubLink,h=t.tabs,p=t.title,m=(0,r.useRouter)();return(0,i.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"flex-start",children:[(0,i.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",marginBottom:(0,l.Z)(4),children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(c.Z,{size:900,marginBottom:(0,l.Z)(1),children:p}),e&&(0,i.jsx)(s.Z,{children:e})]}),(0,i.jsx)(o.Z,{children:n&&(0,i.jsx)(u.ZP,{is:d.Z,href:n,appearance:"default",target:"_blank",children:"Open in GitHub"})})]}),h&&(0,i.jsx)(a.Z,{width:"100%",borderBottom:"1px solid #efefef",marginBottom:(0,l.Z)(2),paddingTop:(0,l.Z)(1),children:h.map((function(t,e){var n=t.label,r=t.to;return(0,i.jsx)(f.Z,{appearance:"primary",isSelected:m.asPath===r,onSelect:function(){return m.push(r)},children:n},e)}))})]})}},80413:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(85893),r=n(67294),o=n(36811),l=n(36448),c=n(77117),s=n(95176),u=n(21608),d="undefined"!==typeof document?r.useLayoutEffect:r.useEffect,a=n(13727),f=n(41664),h=function(t){var e=t.title,n=t.items,r=t.selectedItem,h=t.routePrefix;return d((function(){var t=document.querySelector('[aria-selected="true"]');t&&(0,a.Z)(t,{scrollMode:"if-needed"})}),[r]),(0,i.jsxs)(o.Z,{display:"flex",position:"sticky",top:64,flexDirection:"column",overflowY:"auto",maxHeight:"calc(100vh - 64px)",paddingY:(0,l.Z)(5),paddingX:(0,l.Z)(3),children:[(0,i.jsx)(c.Z,{size:200,textTransform:"uppercase",marginBottom:(0,l.Z)(2),marginLeft:(0,l.Z)(2),children:e}),(0,i.jsx)(s.Z,{children:n.map((function(t){return(0,i.jsx)(f.default,{href:"/".concat(h,"/").concat(t.id),passHref:!0,children:(0,i.jsx)(u.Z,{is:"a",alignItems:"flex-start",direction:"vertical",isSelected:!!r&&t.id===r.id,children:t.name})},t.id)}))})]})}},45676:function(t,e,n){"use strict";n.r(e);var i=n(85893),r=(n(67294),n(36811)),o=n(36448),l=n(96094),c=n(66149),s=n(80413),u=n(91631);e.default=function(){return(0,i.jsx)(l.Z,{title:"Introduction",children:(0,i.jsxs)(r.Z,{width:"100%",display:"grid",gridTemplateColumns:"236px 1fr",children:[(0,i.jsx)(s.Z,{title:"Introduction",items:u.Z.introduction.items,routePrefix:"introduction"}),(0,i.jsxs)(r.Z,{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:(0,o.Z)(5),maxWidth:(0,o.Z)(143),children:[(0,i.jsx)(c.Z,{title:"Introduction",description:u.Z.introduction.description}),(0,i.jsx)(r.Z,{width:"100%",display:"grid",gridColumnGap:"24px",gridRowGap:"32px"})]})]})})}},13727:function(t,e,n){"use strict";var i=n(10150);function r(t){return t===Object(t)&&0!==Object.keys(t).length}e.Z=function(t,e){var n=!t.ownerDocument.documentElement.contains(t);if(r(e)&&"function"===typeof e.behavior)return e.behavior(n?[]:(0,i.Z)(t,e));if(!n){var o=function(t){return!1===t?{block:"end",inline:"nearest"}:r(t)?t:{block:"start",inline:"nearest"}}(e);return function(t,e){void 0===e&&(e="auto");var n="scrollBehavior"in document.body.style;t.forEach((function(t){var i=t.el,r=t.top,o=t.left;i.scroll&&n?i.scroll({top:r,left:o,behavior:e}):(i.scrollTop=r,i.scrollLeft=o)}))}((0,i.Z)(t,o),o.behavior)}}}},function(t){t.O(0,[423,294,828,774,888,179],(function(){return e=98766,t(t.s=e);var e}));var e=t.O();_N_E=e}]);