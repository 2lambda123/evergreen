(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{27847:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/[id]/props",function(){return t(15916)}])},1264:function(e,n,t){"use strict";var r=t(85893),i=(t(67294),t(36811)),s=t(77117),a=t(36448),c=t(57743),u=t(95489),o=t(94693),l=t(70979),d=t(92657),p=function(e){switch(e.name){case"enum":return e.value.map((function(e){return e.value})).join(" | ");case"union":return e.value.map((function(e){return p(e)})).join(" | ");case"custom":return e.raw;default:return e.name}},h=["Property","Type","Description"];n.Z=function(e){var n=e.data,t=n.displayName,Z=n.props;return(0,r.jsxs)(i.Z,{width:"100%",maxWidth:1152,children:[(0,r.jsx)(s.Z,{marginY:(0,a.Z)(2),size:800,children:t}),Z?(0,r.jsxs)(c.Z,{width:"100%",children:[(0,r.jsx)(c.Z.Head,{children:h.map((function(e){return(0,r.jsx)(c.Z.TextHeaderCell,{children:e},e)}))}),(0,r.jsx)(c.Z.Body,{children:Object.keys(Z).map((function(e){var n=Z[e],t=n.type,s=n.required,h=n.description;return(0,r.jsxs)(c.Z.Row,{minHeight:64,height:"unset",paddingY:(0,a.Z)(2),children:[(0,r.jsx)(c.Z.Cell,{children:(0,r.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(d.Z,{children:e}),s&&(0,r.jsx)(u.Z,{marginLeft:(0,a.Z)(2),children:"Required"})]})}),(0,r.jsx)(c.Z.Cell,{children:(0,r.jsx)(o.Z,{children:p(t)})}),(0,r.jsx)(c.Z.Cell,{children:(0,r.jsx)(l.Z,{children:h})})]},e)}))})]}):(0,r.jsx)(o.Z,{color:"muted",children:"There are no props to show."})]})}},15916:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l}});var r=t(85893),i=(t(67294),t(11163)),s=t(66149),a=t(1264),c=t(36811),u=t(36448),o=t(45733),l=!0;n.default=function(e){var n=e.componentProps,t=e.pattern,l=e.patterns,d=(0,i.useRouter)().query.id;if(!t)return null;var p=t.name,h=t.description,Z=t.github;return(0,r.jsx)(o.Z,{navItems:l,selectedNavItem:t,navPrefix:"patterns",navTitle:"Patterns",pageTitle:"".concat(p," Documentation"),pageHeader:(0,r.jsx)(s.Z,{title:p,description:h,githubLink:Z,tabs:[{label:"Details",to:"/patterns/".concat(d)},{label:"Properties",to:"/patterns/".concat(d,"/props")}]}),children:n.map((function(e,t){return(0,r.jsx)(c.Z,{marginBottom:t!==n.length-1?(0,u.Z)(5):void 0,children:(0,r.jsx)(a.Z,{data:e})},t)}))})}}},function(e){e.O(0,[681,423,294,638,903,114,774,888,179],(function(){return n=27847,e(e.s=n);var n}));var n=e.O();_N_E=n}]);