(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(7294);let s=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:c=d,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:g,children:x,nonce:b})=>{let[p,w]=(0,r.useState)(()=>f(i,m)),[$,S]=(0,r.useState)(()=>f(i)),k=g?Object.values(g):c,j=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let a=g?g[r]:r,o=t?y():null,i=document.documentElement;if("class"===u?(i.classList.remove(...k),a&&i.classList.add(a)):a?i.setAttribute(u,a):i.removeAttribute(u),l){let e=s.includes(m)?m:null,t=s.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),C=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),E=(0,r.useCallback)(t=>{let r=v(t);S(r),"system"===p&&n&&!e&&j("system")},[p,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{j(null!=e?e:p)},[e,p]);let T=(0,r.useMemo)(()=>({theme:p,setTheme:C,forcedTheme:e,resolvedTheme:"system"===p?$:p,themes:n?[...c,"system"]:c,systemTheme:n?$:void 0}),[p,C,e,$,n,c]);return r.createElement(o.Provider,{value:T},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:i,themes:c,defaultTheme:m,attribute:u,value:g,children:x,attrs:k,nonce:b}),x)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?s.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let a=c?c[e]:e,l=t?e+"|| ''":`'${a}'`,i="";return o&&r&&!t&&s.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||a?`c.add(${l})`:"null":a&&(i+=`d[s](n,${l})`),i},v=e?`!function(){${h}${y(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}${u?"":"else{"+y(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${y(c?"x[e]":"e",!0)}}else{${y(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5021)}])},7495:function(e,t,n){"use strict";n.d(t,{g3:function(){return a}});var r=n(7294);let s=r.createContext(),a=s.Provider;s.Consumer,t.ZP=s},5021:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893);n(3814);var s=n(7495);n(3547),n(7294);var a=()=>(0,r.jsx)("div",{className:"mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6",children:(0,r.jsxs)("div",{className:"max-w-4xl px-4 mx-auto text-gray-800 dark:text-white",children:[(0,r.jsx)("div",{className:"pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"}),(0,r.jsxs)("div",{className:"flex flex-col justify-between lg:flex-row items-center",children:[(0,r.jsx)("p",{children:"Built with Next.js, Tailwind and Vercel"}),(0,r.jsxs)("div",{className:"flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0",children:[(0,r.jsx)("a",{href:"https://github.com/sonjuhy",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"GitHub"}),(0,r.jsx)("a",{href:"https://sonjuhy.tistory.com",className:"transition-colors hover:text-yellow-500",target:"_blank",rel:"noreferrer",children:"Blog"})]})]})]})}),l=n(2010);function o(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(s.g3,{value:{prefix:"https://sonjuhy.github.io/Portfolio"},children:(0,r.jsxs)(l.f,{attribute:"class",enableSystem:!1,children:[(0,r.jsx)(t,{...n}),(0,r.jsx)(a,{})]})})}},3547:function(){},3814:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);