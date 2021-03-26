(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo192.34382b39.png"},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cup-of-coffee.271bb6ba.jpeg"},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cvs-health-logo-stacked.c78149f9.png"},36:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/uk-logo.56a78bea.jpeg"},37:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),i=n(16),c=n.n(i),a=(n(22),n(23),n(10)),o=(n(24),n(2)),s=n(0),d=function(e){var t=Object(r.useState)(!1),l=Object(a.a)(t,2),i=l[0],c=l[1],d=Object(o.f)();return Object(s.jsx)("button",{className:"border-0 bg-transparent",children:Object(s.jsx)("img",{className:i?"w-8 h-8 spin":"h-8 w-8",onClick:function(){e.bounce&&c(!i),d.push("/")},onAnimationEnd:function(){return c(!i)},src:n(31).default,alt:"Home Button"})})},m=n(7),u=function(){var e=Object(o.g)(),t=new Map([["/experience",1],["/projects",2],["/about",3]]),n=Object(r.useState)(t.get(e.pathname)),l=Object(a.a)(n,2),i=l[0],c=l[1],u=function(e){var t="m-4 md:ml-8 whitespace-nowrap";return e===i?t+" underline":t};return Object(s.jsx)("nav",{className:"w-full sticky -top-1 bg-white",children:Object(s.jsxs)("ol",{className:"flex list-none justify-between items-center max-w-full md:max-w-2xl lg:max-w-2xl m-auto",children:[Object(s.jsx)("li",{onClick:function(){return c(0)},className:"m-4 flex-shrink-0",children:Object(s.jsx)(d,{bounce:!1})}),Object(s.jsx)("span",{className:"flex ml-auto",children:[{id:1,label:"Experience",link:"experience"},{id:2,label:"Projects",link:"projects"},{id:3,label:"About Me",link:"about"}].map((function(e){return Object(s.jsx)("li",{className:u(e.id),onClick:function(){return c(e.id)},children:Object(s.jsx)(m.b,{to:e.link,children:e.label})},e.label)}))})]})})},j=(n(32),function(){var e=Object(o.f)();return Object(s.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(s.jsx)("img",{className:"rounded shadow-md",src:n(33).default,alt:"macbook and coffee"}),Object(s.jsxs)("div",{className:"md:flex md:flex-col md:items-center",children:[Object(s.jsx)("h1",{className:"text-xl font-semibold mt-6 mb-6 md:ml-auto md:mr-auto",children:"Hey there, I'm Paul \ud83d\udc4b"}),Object(s.jsx)("h1",{className:"text-lg font-normal",children:"I am a software developer dedicated to constant improvement and exploration"})]}),Object(s.jsxs)("button",{className:"flex mt-10 md:ml-auto md:mr-auto",onClick:function(){e.push("/experience")},children:[Object(s.jsx)("span",{children:"Check out my experience"}),Object(s.jsxs)("svg",{className:"arrow-bounce ml-2",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(s.jsx)("polyline",{points:"14 6 20 12 14 18"})]})]})]})}),b=(n(34),function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{className:"m-auto lg:max-w-xl mb-8 mt-8",src:e.imgSrc,alt:e.imgAlt}),Object(s.jsx)("h1",{className:"font-extrabold lg:font-black mt-8 text-2xl mb-4",children:e.cardTitle}),Object(s.jsx)("p",{className:"lg:text-lg",children:e.blurb}),Object(s.jsxs)("ul",{className:"mt-8 grid",children:[Object(s.jsxs)("li",{className:"list-grid",children:[Object(s.jsx)("p",{className:"font-semibold",children:"Role"}),Object(s.jsx)("p",{children:e.role})]}),Object(s.jsxs)("li",{className:"list-grid",children:[Object(s.jsx)("p",{className:"font-semibold",children:"Dates"}),Object(s.jsx)("p",{children:e.dates})]}),Object(s.jsxs)("li",{className:"list-grid",children:[Object(s.jsx)("p",{className:"font-semibold",children:"Technologies"}),Object(s.jsx)("p",{children:e.technologies})]})]}),Object(s.jsx)("div",{className:"flex justify-center",children:Object(s.jsxs)("button",{className:"flex",children:[Object(s.jsx)("span",{children:"Learn More"}),Object(s.jsxs)("svg",{className:"ml-2",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(s.jsx)("polyline",{points:"14 6 20 12 14 18"})]})]})})]})}),x=function(){return Object(s.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(s.jsx)(b,{cardTitle:"CVS Health",imgSrc:n(35).default,imgAlt:"CVS Health Logo",blurb:"I joined CVS Health in 2019 as a full stack engineer working on renovating workflows for PBM by creating modern single page applications.",role:"Software Engineer",dates:"June 2019 - Present",technologies:"Angular, SpringBoot, Typescript, NGRX, AG Grid"}),Object(s.jsx)(b,{cardTitle:"University of Kentucky",imgSrc:n(36).default,imgAlt:"University of Kentucky Logo",blurb:"I graduated from the University of Kentucky in 2019 with a major in computer science and a minor in mathematics. During my time as a student I was able to work on many interesting projects and attend the CatHacks hackathon.",role:"Student",dates:"May 2016 - May 2019",technologies:"Angular, Java, C++, Machine Learning, Javascript"})]})},f=function(){return Object(s.jsx)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:"Projects"})},h=function(){return Object(s.jsx)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:Object(s.jsxs)("div",{className:"md:flex md:flex-col md:items-center",children:[Object(s.jsx)("h1",{className:"text-xl font-semibold mt-6 mb-6 md:ml-auto md:mr-auto",children:"Hey there, I'm Paul \ud83d\udc4b"}),Object(s.jsx)("h1",{className:"text-lg font-normal",children:"I am a software developer dedicated to constant improvement and exploration"})]})})};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=r.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2});function w(e,t){var n=e.title,l=e.titleId,i=O(e,["title","titleId"]);return r.createElement("svg",p({height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,g)}var v=r.forwardRef(w);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var N=r.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),E=r.createElement("rect",{height:12,width:4,x:2,y:9}),S=r.createElement("circle",{cx:4,cy:4,r:2});function I(e,t){var n=e.title,l=e.titleId,i=k(e,["title","titleId"]);return r.createElement("svg",y({fill:"none",height:24,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,N,E,S)}var P=r.forwardRef(I);n.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var A=r.createElement("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),B=r.createElement("line",{x1:12,x2:12,y1:22,y2:15.5}),M=r.createElement("polyline",{points:"22 8.5 12 15.5 2 8.5"}),H=r.createElement("polyline",{points:"2 15.5 12 8.5 22 15.5"}),T=r.createElement("line",{x1:12,x2:12,y1:2,y2:8.5});function R(e,t){var n=e.title,l=e.titleId,i=C(e,["title","titleId"]);return r.createElement("svg",L({fill:"none",height:24,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,A,B,M,H,T)}var W=r.forwardRef(R);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var V=r.createElement("rect",{height:20,rx:5,ry:5,width:20,x:2,y:2}),D=r.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),G=r.createElement("line",{x1:17.5,x2:17.5,y1:6.5,y2:6.5});function K(e,t){var n=e.title,l=e.titleId,i=F(e,["title","titleId"]);return r.createElement("svg",J({fill:"none",height:24,stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),n?r.createElement("title",{id:l},n):null,V,D,G)}var U=r.forwardRef(K),z=(n.p,function(){var e=[{icon:Object(s.jsx)(v,{}),link:"https://github.com/pbarrett21"},{icon:Object(s.jsx)(P,{}),link:"https://www.linkedin.com/in/pbarrett21/"},{icon:Object(s.jsx)(W,{}),link:"https://codepen.io/paulbarrett"},{icon:Object(s.jsx)(U,{}),link:"https://www.instagram.com/paulbarr21/"}];return Object(s.jsx)("footer",{className:"flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto",children:Object(s.jsx)("ol",{className:"flex list-none m-4 justify-between",children:e.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:e.icon})},e.link)}))})})});var X=function(){return Object(s.jsx)("div",{className:"flex flex-col h-screen overflow-auto hide-scroll md:m-auto md:items-start",children:Object(s.jsxs)(m.a,{children:[Object(s.jsxs)("div",{className:"flex flex-col items-center flex-foot w-full",children:[Object(s.jsx)(u,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",children:Object(s.jsx)(j,{})}),Object(s.jsx)(o.a,{exact:!0,path:"/experience",children:Object(s.jsx)(x,{})}),Object(s.jsx)(o.a,{exact:!0,path:"/projects",children:Object(s.jsx)(f,{})}),Object(s.jsx)(o.a,{exact:!0,path:"/about",children:Object(s.jsx)(h,{})})]})]}),Object(s.jsx)(z,{})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,l=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),l(e),i(e),c(e)}))};c.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(X,{})}),document.getElementById("root")),_()}},[[37,1,2]]]);
//# sourceMappingURL=main.ca871d0b.chunk.js.map