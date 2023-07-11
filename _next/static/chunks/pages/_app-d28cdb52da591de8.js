(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4823)}])},7495:function(e,t,r){"use strict";r.d(t,{g3:function(){return o}});var n=r(7294);let l=n.createContext(),o=l.Provider;l.Consumer,t.ZP=l},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return c}});let l="refresh",o="navigate",a="restore",s="server-patch",i="prefetch",u="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754),l=n._(r(7294)),o=r(4532),a=r(3353),s=r(1410),i=r(9064),u=r(370),c=r(9955),d=r(4224),f=r(508),m=r(1516),h=r(4266),p=r(3991),y=new Set;function v(e,t,r,n,l,o){if(!o&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(y.has(o))return;y.add(o)}let s=o?e.prefetch(t,l):e.prefetch(t,r,n);Promise.resolve(s).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let g=l.default.forwardRef(function(e,t){let r,n;let{href:s,as:y,children:g,prefetch:x=null,passHref:j,replace:_,shallow:w,scroll:k,locale:C,onClick:E,onMouseEnter:T,onTouchStart:O,legacyBehavior:S=!1,...M}=e;r=g,S&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let N=l.default.useContext(c.RouterContext),P=l.default.useContext(d.AppRouterContext),$=null!=N?N:P,A=!N,R=!1!==x,I=null===x?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:L,as:z}=l.default.useMemo(()=>{if(!N){let e=b(s);return{href:e,as:y?b(y):e}}let[e,t]=(0,o.resolveHref)(N,s,!0);return{href:e,as:y?(0,o.resolveHref)(N,y):t||e}},[N,s,y]),H=l.default.useRef(L),K=l.default.useRef(z);S&&(n=l.default.Children.only(r));let U=S?n&&"object"==typeof n&&n.ref:t,[F,V,D]=(0,f.useIntersection)({rootMargin:"200px"}),B=l.default.useCallback(e=>{(K.current!==z||H.current!==L)&&(D(),K.current=z,H.current=L),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[z,U,L,D,F]);l.default.useEffect(()=>{$&&V&&R&&v($,L,z,{locale:C},{kind:I},A)},[z,L,V,C,R,null==N?void 0:N.locale,$,A,I]);let J={ref:B,onClick(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),$&&!e.defaultPrevented&&function(e,t,r,n,o,s,i,u,c,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};c?l.default.startTransition(h):h()}(e,$,L,z,_,w,k,C,A,R)},onMouseEnter(e){S||"function"!=typeof T||T(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&(R||!A)&&v($,L,z,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},A)},onTouchStart(e){S||"function"!=typeof O||O(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&(R||!A)&&v($,L,z,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},A)}};if((0,i.isAbsoluteUrl)(z))J.href=z;else if(!S||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,m.getDomainLocale)(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);J.href=t||(0,h.addBasePath)((0,u.addLocale)(z,e,null==N?void 0:N.defaultLocale))}return S?l.default.cloneElement(n,J):l.default.createElement("a",{...M,...J},r)}),x=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),l=r(29),o="function"==typeof IntersectionObserver,a=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),m=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},s.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,l.requestIdleCallback)(()=>d(!0));return()=>(0,l.cancelIdleCallback)(e)}},[u,r,t,c,f.current]);let h=(0,n.useCallback)(()=>{d(!1)},[]);return[m,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4823:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893);r(3814);var l=r(7495);r(3547);var o=r(1664),a=r.n(o),s=r(7294);let i=["light","dark"],u="(prefers-color-scheme: dark)",c="undefined"==typeof window,d=(0,s.createContext)(void 0),f={setTheme:e=>{},themes:[]},m=()=>{var e;return null!==(e=(0,s.useContext)(d))&&void 0!==e?e:f},h=e=>(0,s.useContext)(d)?s.createElement(s.Fragment,null,e.children):s.createElement(y,e),p=["light","dark"],y=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:l="theme",themes:o=p,defaultTheme:a=r?"system":"light",attribute:c="data-theme",value:f,children:m,nonce:h})=>{let[y,j]=(0,s.useState)(()=>b(l,a)),[_,w]=(0,s.useState)(()=>b(l)),k=f?Object.values(f):o,C=(0,s.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&r&&(l=x());let o=f?f[l]:l,s=t?g():null,u=document.documentElement;if("class"===c?(u.classList.remove(...k),o&&u.classList.add(o)):o?u.setAttribute(c,o):u.removeAttribute(c),n){let e=i.includes(a)?a:null,t=i.includes(l)?l:e;u.style.colorScheme=t}null==s||s()},[]),E=(0,s.useCallback)(e=>{j(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),T=(0,s.useCallback)(t=>{let n=x(t);w(n),"system"===y&&r&&!e&&C("system")},[y,e]);(0,s.useEffect)(()=>{let e=window.matchMedia(u);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,s.useEffect)(()=>{let e=e=>{e.key===l&&E(e.newValue||a)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,s.useEffect)(()=>{C(null!=e?e:y)},[e,y]);let O=(0,s.useMemo)(()=>({theme:y,setTheme:E,forcedTheme:e,resolvedTheme:"system"===y?_:y,themes:r?[...o,"system"]:o,systemTheme:r?_:void 0}),[y,E,e,_,r,o]);return s.createElement(d.Provider,{value:O},s.createElement(v,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:n,storageKey:l,themes:o,defaultTheme:a,attribute:c,value:f,children:m,attrs:k,nonce:h}),m)},v=(0,s.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:l,defaultTheme:o,value:a,attrs:c,nonce:d})=>{let f="system"===o,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=l?i.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,n=!0)=>{let o=a?a[e]:e,s=t?e+"|| ''":`'${o}'`,u="";return l&&n&&!t&&i.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===r?u+=t||o?`c.add(${s})`:"null":o&&(u+=`d[s](n,${s})`),u},y=e?`!function(){${m}${p(e)}}()`:n?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${u}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${f?"":"else{"+p(o,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${h}}catch(t){}}();`;return s.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),b=(e,t)=>{let r;if(!c){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light");var j=()=>{let[e,t]=(0,s.useState)(!1),{theme:r,setTheme:l,resolvedTheme:o}=m();return(0,s.useEffect)(()=>t(!0),[]),(0,n.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:()=>l("dark"===r||"dark"===o?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:e&&("dark"===r||"dark"===o)?(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,n.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})},_=()=>(0,n.jsx)("div",{className:"sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black",children:(0,n.jsxs)("div",{className:"container px-4 mx-auto lg:max-w-4xl flex items-center justify-between",children:[(0,n.jsx)(a(),{href:"/",className:"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white",children:"SonJuHy"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a(),{href:"/",children:"test"}),(0,n.jsx)(a(),{href:"/",children:"test"}),(0,n.jsx)(j,{})]})]})}),w=()=>(0,n.jsx)("div",{className:"mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6",children:(0,n.jsxs)("div",{className:"max-w-4xl px-4 mx-auto text-gray-800 dark:text-white",children:[(0,n.jsx)("div",{className:"pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"}),(0,n.jsxs)("div",{className:"flex flex-col justify-between lg:flex-row items-center",children:[(0,n.jsx)("p",{children:"Built with Next.js, Tailwind and Vercel"}),(0,n.jsxs)("div",{className:"flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0",children:[(0,n.jsx)("a",{href:"https://github.com/sonjuhy",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"GitHub"}),(0,n.jsx)("a",{href:"https://sonjuhy.tistory.com",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"Blog"})]})]})]})});function k(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(l.g3,{value:{prefix:"https://sonjuhy.github.io/Portfolio"},children:(0,n.jsxs)(h,{attribute:"class",enableSystem:!1,children:[(0,n.jsx)(_,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)(w,{})]})})}},3547:function(){},3814:function(){},1664:function(e,t,r){e.exports=r(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);