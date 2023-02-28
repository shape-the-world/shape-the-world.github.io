"use strict";(self.webpackChunkshape_the_world=self.webpackChunkshape_the_world||[]).push([[261],{1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_3J9K",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},261:(e,t,n)=>{n.d(t,{Z:()=>ge});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(3018);const s="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_3WsW",d="announcementBarClose_38nx",h="announcementBarContent_3EUC",f="announcementBarCloseable_3myR";const b=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:u,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:m}),dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var g=n(7462),v=n(1875),E=n(2263);const p={toggle:"toggle_71bT"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},Z=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1)}))}));function w(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),{isClient:o}=(0,E.Z)();return a.createElement(Z,(0,g.Z)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(_,{icon:r,style:l})}},e))}var y=n(5350),N=n(7898);const C=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var I=n(3783),S=n(4201),D=n(5537);const T=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,g.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},x="toggle_3Zt9",B="navbarHideable_2qcr",A="navbarHidden_3yey",M="right";function U(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function P(e){let{sidebarShown:t,toggleSidebar:n}=e;L(t);const l=U(),s=R(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&a.createElement(w,{checked:s.isDarkTheme,onChange:s.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(S.Z,(0,g.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const H=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,I.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),{navbarRef:o,isNavbarVisible:s}=C(e),i=U(),m=i.some((e=>"search"===e.type)),{leftItems:u,rightItems:d}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??M))),rightItems:e.filter((e=>"right"===(e.position??M)))}}(i);return a.createElement("nav",{ref:o,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[B]:e,[A]:e&&!s})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},i?.length>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(T,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),u.map(((e,t)=>a.createElement(S.Z,(0,g.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},d.map(((e,t)=>a.createElement(S.Z,(0,g.Z)({},e,{key:t})))),!l.disabled&&a.createElement(w,{className:x,checked:l.isDarkTheme,onChange:l.toggle}),!m&&a.createElement(v.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(P,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(6742),W=n(4996),z=n(3919);const $="footerLogoLink_MyFc";var O=n(8465),F=n(8617);function G(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,W.Z)(t),s=(0,W.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,g.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,z.Z)(n)?a.createElement("span",null,r,a.createElement(F.Z,null)):r)}const q=e=>{let{sources:t,alt:n}=e;return a.createElement(O.Z,{className:"footer__logo",alt:n,sources:t})};const J=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,W.Z)(l.src),dark:(0,W.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(G,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:$},a.createElement(q,{alt:l.alt,sources:o})):a.createElement(q,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var K=n(412);const Q=(0,c.WA)("theme"),Y="light",X="dark",j=e=>e===X?X:Y,ee=e=>{(0,c.WA)("theme").set(j(e))},te=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>K.Z.canUseDOM?j(document.documentElement.getAttribute("data-theme")):j(e))(e)),o=(0,a.useCallback)((()=>{l(Y),ee(Y)}),[]),s=(0,a.useCallback)((()=>{l(X),ee(X)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",j(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=Q.get();null!==e&&l(j(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?X:Y)}))}),[]),{isDarkTheme:r===X,setLightTheme:o,setDarkTheme:s}};var ne=n(2924);const ae=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=te();return a.createElement(ne.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},re="docusaurus.tab.",le=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(re)){const n=t.substring(re.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},oe=(0,a.createContext)(void 0);const ce=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=le();return a.createElement(oe.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function se(e){let{children:t}=e;return a.createElement(ae,null,a.createElement(c.pl,null,a.createElement(ce,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var ie=n(9105);function me(e){let{locale:t,version:n,tag:r}=e;return a.createElement(ie.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var ue=n(1217);function de(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.Z)(),n=(0,c.l5)();return a.createElement(ie.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.Z)(),r=function(){const{siteConfig:{url:e}}=(0,E.Z)(),{pathname:t}=(0,l.TH)();return e+(0,W.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(ie.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function fe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:l,localeConfigs:o}}=(0,E.Z)(),{title:s,description:i,image:m,keywords:u,searchMetadatas:d}=e,h=(0,W.Z)(t),f=(0,c.pe)(s),b=l,v=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(ie.Z,null,a.createElement("html",{lang:b,dir:v}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),m||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(ue.Z,{description:i,keywords:u,image:m}),a.createElement(he,null),a.createElement(de,null),a.createElement(me,(0,g.Z)({tag:c.HX,locale:l},d)),a.createElement(ie.Z,null,n.map(((e,t)=>a.createElement("meta",(0,g.Z)({key:`metadata_${t}`},e))))))}const be=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ge=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return be(),a.createElement(se,null,a.createElement(fe,e),a.createElement(m,null),a.createElement(b,null),a.createElement(H,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(J,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:m}=(0,s.Z)(),{imageClassName:u,titleClassName:d,...h}=e,f=(0,c.Z)(i.href||"/"),b={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(o.Z,{key:m,className:u,sources:b,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>m,Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919);function m(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:u,activeClassName:d="navbar__link--active",prependBaseUrlToHref:h,...f}=e;const b=(0,c.Z)(l),g=(0,c.Z)(t),v=(0,c.Z)(m,{forcePrependBaseUrl:!0}),E=u&&m&&!(0,i.Z)(m),p="dropdown__link--active"===d;return r.createElement(o.Z,(0,a.Z)({},m?{href:h?v:m}:{isNavLink:!0,activeClassName:d,to:b,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}:null},f),E?r.createElement("span",null,u,r.createElement(s.Z,p&&{width:12,height:12})):u)}function u(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(m,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function d(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const h=function(e){let{mobile:t=!1,position:n,...a}=e;const l=t?d:u;return r.createElement(l,a)}},6400:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(3018),i=n(8780);function m(e){let{docId:t,activeSidebarClassName:n,label:m,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.Iw)(u),{preferredVersion:b}=(0,s.J)(u),g=(0,o.yW)(u),v=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,i.uniq)([h,b,g].filter(Boolean)),t);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[n]:f&&f.sidebar===v.sidebar}),label:m??v.id,to:v.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(3018);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function m(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:m,dropdownItemsBefore:u,dropdownItemsAfter:d,...h}=e;const f=(0,c.Iw)(n),b=(0,c.gB)(n),g=(0,c.yW)(n),{preferredVersion:v,savePreferredVersionName:E}=(0,s.J)(n);const p=function(){const e=b.map((e=>{const t=f?.alternateDocVersions[e.name]||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{E(e.name)}}}));return[...u,...e,...d]}(),k=f.activeVersion??v??g,_=t&&p?"Versions":k.label,Z=t&&p?void 0:i(k).path;return p.length<=1?r.createElement(l.Z,(0,a.Z)({},h,{mobile:t,label:_,to:Z,isActive:m?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},h,{mobile:t,label:_,to:Z,items:p,isActive:m?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(3018);function s(e){let{label:t,to:n,docsPluginId:s,...i}=e;const m=(0,o.zu)(s),{preferredVersion:u}=(0,c.J)(s),d=(0,o.yW)(s),h=m??u??d,f=t??h.label,b=n??(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return r.createElement(l.Z,(0,a.Z)({},i,{label:f,to:b}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(3018),c=n(5525),s=n(4201);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:n,className:o,...i}=e;const m=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,h]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":d})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",o)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!d))}}),i.children??i.label),r.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))))))}function u(e){let{items:t,className:n,position:m,...u}=e;const d=(0,o.be)(),h=i(t,d),{collapsed:f,toggleCollapsed:b,setCollapsed:g}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&g(!h)}),[d,h]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),b()}}),u.children??u.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?u:m;return r.createElement(a,n)}},4201:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(3018);function m(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...m}=e;const{i18n:{currentLocale:u,locales:d,localeConfigs:h}}=(0,s.Z)(),f=(0,i.l5)();function b(e){return h[e].label}const g=[...n,...d.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],v=t?"Languages":b(u);return a.createElement(l.Z,(0,o.Z)({},m,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,v)),items:g}))}var u=n(1875);function d(e){let{mobile:t}=e;return t?null:a.createElement(u.Z,null)}const h={default:()=>r.Z,localeDropdown:()=>m,search:()=>d,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};function f(e){let{type:t,...n}=e;const r=(e=>{const t=h[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(r,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2263),c=n(5350);const s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},i=e=>{const{isClient:t}=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);