(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo192.34382b39.png"},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cup-of-coffee.271bb6ba.jpeg"},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cvs-health-logo-stacked.c78149f9.png"},37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/uk-logo.56a78bea.jpeg"},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),l=n(16),s=n.n(l),a=(n(22),n(23),n(10)),c=(n(24),n(2)),o=n(0),u=function(e){var t=Object(i.useState)(!1),r=Object(a.a)(t,2),l=r[0],s=r[1],u=Object(c.f)();return Object(o.jsx)("button",{className:"border-0 bg-transparent",children:Object(o.jsx)("img",{className:l?"w-8 h-8 spin":"h-8 w-8",onClick:function(){e.bounce&&s(!l),u.push("/")},onAnimationEnd:function(){return s(!l)},src:n(31).default,alt:"Home Button"})})},m=n(7),d=(n(32),function(){var e=Object(c.g)(),t=Object(c.f)(),n=new Map([["/",0],["/experience",1],["/projects",2],["/about",3]]),r=Object(i.useState)(n.get(e.pathname)),l=Object(a.a)(r,2),s=l[0],d=l[1],j=function(e){var t="m-4 md:ml-8 whitespace-nowrap";return e===s?t+" selected-tab":t};return Object(i.useEffect)((function(){var e=t.listen((function(e){d(n.get(e.pathname))}));return function(){e()}})),void 0!==s?Object(o.jsx)("nav",{className:"w-full sticky -top-1 bg-white",children:Object(o.jsxs)("ol",{className:"flex list-none justify-between items-center max-w-full md:max-w-2xl lg:max-w-2xl m-auto",children:[Object(o.jsx)("li",{onClick:function(){return d(0)},className:"m-4 flex-shrink-0",children:Object(o.jsx)(u,{bounce:!1})}),Object(o.jsx)("span",{className:"flex ml-auto",children:[{id:1,label:"Experience",link:"experience"},{id:2,label:"Projects",link:"projects"},{id:3,label:"About Me",link:"about"}].map((function(e){return Object(o.jsx)("li",{className:j(e.id),onClick:function(){return d(e.id)},children:Object(o.jsx)(m.b,{to:e.link,children:e.label})},e.label)}))})]})}):Object(o.jsx)("nav",{className:"w-full sticky -top-1 bg-white",children:Object(o.jsx)("ol",{className:"flex list-none max-w-full md:max-w-2xl lg:max-w-2xl m-auto",children:Object(o.jsx)("li",{className:"m-4 flex",children:Object(o.jsxs)(m.b,{className:"flex",to:"/experience",children:[Object(o.jsxs)("svg",{className:"mr-2 transform rotate-180",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(o.jsx)("polyline",{points:"14 6 20 12 14 18"})]}),Object(o.jsx)("span",{children:"Go Back"})]})})})})}),j=(n(33),function(){var e=Object(c.f)();return Object(o.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(o.jsx)("img",{className:"rounded shadow-md",src:n(34).default,alt:"macbook and coffee"}),Object(o.jsxs)("div",{className:"md:flex md:flex-col md:items-center",children:[Object(o.jsx)("h1",{className:"text-xl font-semibold mt-6 mb-6 md:ml-auto md:mr-auto",children:"Hey there, I'm Paul \ud83d\udc4b"}),Object(o.jsx)("h1",{className:"text-lg font-normal",children:"I am a software developer dedicated to constant improvement and exploration"})]}),Object(o.jsxs)("button",{className:"flex mt-10 md:ml-auto md:mr-auto",onClick:function(){e.push("/experience")},children:[Object(o.jsx)("span",{children:"Check out my experience"}),Object(o.jsxs)("svg",{className:"arrow-bounce ml-2",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(o.jsx)("polyline",{points:"14 6 20 12 14 18"})]})]})]})}),b=(n(35),function(e){var t=Object(c.f)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"m-auto lg:max-w-xl mb-8 mt-8",src:e.imgSrc,alt:e.imgAlt}),Object(o.jsx)("h1",{className:"font-extrabold lg:font-black mt-8 text-2xl mb-4",children:e.cardTitle}),Object(o.jsx)("p",{className:"lg:text-lg",children:e.blurb}),Object(o.jsxs)("ul",{className:"mt-8 grid",children:[Object(o.jsxs)("li",{className:"list-grid",children:[Object(o.jsx)("p",{className:"font-semibold",children:"Role"}),Object(o.jsx)("p",{children:e.role})]}),Object(o.jsxs)("li",{className:"list-grid",children:[Object(o.jsx)("p",{className:"font-semibold",children:"Dates"}),Object(o.jsx)("p",{children:e.dates})]}),Object(o.jsxs)("li",{className:"list-grid",children:[Object(o.jsx)("p",{className:"font-semibold",children:"Technologies"}),Object(o.jsx)("p",{children:e.technologies})]})]}),Object(o.jsx)("div",{className:"flex justify-center",children:Object(o.jsxs)("button",{className:"flex",onClick:function(){t.push(e.learnMorePath)},children:[Object(o.jsx)("span",{children:"Learn More"}),Object(o.jsxs)("svg",{className:"ml-2",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(o.jsx)("polyline",{points:"14 6 20 12 14 18"})]})]})})]})}),x=function(){return Object(o.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(o.jsx)(b,{cardTitle:"CVS Health",imgSrc:n(36).default,imgAlt:"CVS Health Logo",blurb:"I joined CVS Health in 2019 as a full stack engineer working on renovating workflows for PBM by creating modern single page applications.",role:"Software Engineer",dates:"June 2019 - Present",learnMorePath:"/cvs",technologies:"Angular, SpringBoot, Typescript, NGRX, AG Grid"}),Object(o.jsx)(b,{cardTitle:"University of Kentucky",imgSrc:n(37).default,imgAlt:"University of Kentucky Logo",blurb:"I graduated from the University of Kentucky in 2019 with a major in computer science and a minor in mathematics. During my time as a student I was able to work on many interesting projects and attend the CatHacks hackathon.",role:"Student",dates:"May 2016 - May 2019",learnMorePath:"/uk",technologies:"Angular, Java, C++, Machine Learning, Javascript"})]})},h=function(){return Object(o.jsx)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:"Projects"})},p=(n(38),function(){return Object(o.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(o.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Career"}),Object(o.jsx)("p",{className:"text-lg font-normal ml-8",children:"I am a software developer with over 2 years of professional experience. I have been immersed in an agile development environment and have been fortunate to work with fantastic teammates on many interesting projects while using modern technologies. I have enjoyed being able to participate and contribute in the planning of new products and then to create and bring that vision to life."}),Object(o.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Education"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"text-lg font-medium ml-8",children:"B.S. in Computer Science with Minor in Mathematics"}),Object(o.jsx)("p",{className:"text-lg font-normal ml-8",children:"University of Kentucky, 2015 - 2019"})]}),Object(o.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Hobbies and Interests"}),Object(o.jsx)("p",{className:"text-lg font-normal ml-8",children:"I have many hobbies and interests outside of my professional life!"}),Object(o.jsxs)("ul",{className:"pt-4 pl-16",children:[Object(o.jsx)("li",{children:"Mountain Biking \ud83d\udeb4"}),Object(o.jsx)("li",{children:"Hiking \ud83c\udf32"}),Object(o.jsx)("li",{children:"Photography \ud83d\udcf7"}),Object(o.jsx)("li",{children:"Paddleboarding \ud83c\udfc4\u200d\u2642\ufe0f"}),Object(o.jsx)("li",{children:"Cats \ud83d\udc08"})]}),Object(o.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Links"}),Object(o.jsx)("p",{className:"text-lg font-normal ml-8",children:"Here are some useful or relevant links:"}),Object(o.jsxs)("ul",{className:"pt-4 pl-16",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"underline hover:text-green-600",href:"https://github.com/pbarrett21/tools-and-gadgets/blob/main/README.md",rel:"noreferrer",target:"_blank",children:"Tools I use \ud83d\udee0"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"underline hover:text-green-600",href:"https://github.com/pbarrett21",rel:"noreferrer",target:"_blank",children:"Github"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"underline hover:text-green-600",href:"https://www.linkedin.com/in/pbarrett21/",rel:"noreferrer",target:"_blank",children:"LinkedIn"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"underline hover:text-green-600",href:"https://codepen.io/paulbarrett",rel:"noreferrer",target:"_blank",children:"CodePen"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"underline hover:text-green-600",href:"https://www.instagram.com/paulbarr21/",rel:"noreferrer",target:"_blank",children:"Instagram"})})]}),Object(o.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Resume"}),Object(o.jsxs)("p",{className:"text-lg font-normal ml-8",children:["Feel free to take a look at my",Object(o.jsx)("a",{className:"font-medium underline ml-1 hover:text-green-600",href:"https://drive.google.com/file/d/1S6ykXqenu7QUbQdcJkXWTPL9j2sHRam7/view?usp=sharing",rel:"noreferrer",target:"_blank",children:"resume"})]})]})});function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=i.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2});function v(e,t){var n=e.title,r=e.titleId,l=g(e,["title","titleId"]);return i.createElement("svg",f({height:24,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,O)}var w=i.forwardRef(v);n.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N=i.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),P=i.createElement("rect",{height:12,width:4,x:2,y:9}),I=i.createElement("circle",{cx:4,cy:4,r:2});function E(e,t){var n=e.title,r=e.titleId,l=k(e,["title","titleId"]);return i.createElement("svg",y({fill:"none",height:24,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,N,P,I)}var q=i.forwardRef(E);n.p;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=i.createElement("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),A=i.createElement("line",{x1:12,x2:12,y1:22,y2:15.5}),M=i.createElement("polyline",{points:"22 8.5 12 15.5 2 8.5"}),B=i.createElement("polyline",{points:"2 15.5 12 8.5 22 15.5"}),V=i.createElement("line",{x1:12,x2:12,y1:2,y2:8.5});function H(e,t){var n=e.title,r=e.titleId,l=C(e,["title","titleId"]);return i.createElement("svg",S({fill:"none",height:24,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,L,A,M,B,V)}var R=i.forwardRef(H);n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W=i.createElement("rect",{height:20,rx:5,ry:5,width:20,x:2,y:2}),_=i.createElement("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),D=i.createElement("line",{x1:17.5,x2:17.5,y1:6.5,y2:6.5});function J(e,t){var n=e.title,r=e.titleId,l=U(e,["title","titleId"]);return i.createElement("svg",T({fill:"none",height:24,stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:24,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),n?i.createElement("title",{id:r},n):null,W,_,D)}var F=i.forwardRef(J),G=(n.p,function(){var e=[{icon:Object(o.jsx)(w,{}),link:"https://github.com/pbarrett21"},{icon:Object(o.jsx)(q,{}),link:"https://www.linkedin.com/in/pbarrett21/"},{icon:Object(o.jsx)(R,{}),link:"https://codepen.io/paulbarrett"},{icon:Object(o.jsx)(F,{}),link:"https://www.instagram.com/paulbarr21/"}];return Object(o.jsx)("footer",{className:"flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4",children:Object(o.jsx)("ol",{className:"flex list-none m-4 justify-between",children:e.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:e.icon})},e.link)}))})})}),K=(n(39),function(){return Object(o.jsxs)("div",{className:"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(o.jsx)("div",{className:"w-full flex bg-cvs",children:Object(o.jsx)("h1",{className:"head-container md:ml-16 md:text-7xl",children:"CVS"})}),Object(o.jsx)("div",{className:"m-4",children:Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget tellus lacus. Donec consequat accumsan purus sit amet cursus. Ut ultrices nisi quis lorem dapibus, sit amet consectetur est facilisis. Aenean volutpat et turpis vitae condimentum. Suspendisse sed ultrices mi. Phasellus dignissim ipsum eget mi rutrum aliquet. Aliquam imperdiet elit tincidunt, semper mi at, sodales felis. Suspendisse potenti. Nam eget eleifend diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac tristique diam. Nullam sollicitudin in quam nec tincidunt. Nulla ac nibh nisl. Nulla pretium, orci sit amet ultricies malesuada, nisi magna pharetra ipsum, non tincidunt tortor dui venenatis justo. Aliquam eu augue a nulla laoreet commodo. In et mollis justo. Etiam elementum at urna convallis dictum. Vestibulum fermentum id purus sit amet feugiat. Nulla facilisi. In pulvinar leo mauris, eget scelerisque odio auctor in. Proin finibus auctor mi in porta. Curabitur finibus sem et rhoncus maximus. Proin eros est, pulvinar ut felis et, imperdiet auctor ante. Aliquam nec quam purus. Vestibulum posuere felis in tellus fringilla pulvinar. Cras nec purus sed ipsum scelerisque posuere eget ac est. In nisl arcu, malesuada ac velit eget, ullamcorper commodo ante. Proin aliquet sed lectus consequat ullamcorper. Mauris a risus vel dolor posuere imperdiet a id nunc. Curabitur at tempus odio. Nunc semper luctus ante, nec consectetur quam luctus ut. In egestas sapien a quam mollis feugiat."})})]})}),X=(n(40),function(){return Object(o.jsxs)("div",{className:"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(o.jsx)("div",{className:"w-full flex bg-uk",children:Object(o.jsx)("h1",{className:"head-container-uk md:ml-16 md:text-4xl",children:"University of Kentucky"})}),Object(o.jsx)("div",{className:"m-4",children:Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget tellus lacus. Donec consequat accumsan purus sit amet cursus. Ut ultrices nisi quis lorem dapibus, sit amet consectetur est facilisis. Aenean volutpat et turpis vitae condimentum. Suspendisse sed ultrices mi. Phasellus dignissim ipsum eget mi rutrum aliquet. Aliquam imperdiet elit tincidunt, semper mi at, sodales felis. Suspendisse potenti. Nam eget eleifend diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac tristique diam. Nullam sollicitudin in quam nec tincidunt. Nulla ac nibh nisl. Nulla pretium, orci sit amet ultricies malesuada, nisi magna pharetra ipsum, non tincidunt tortor dui venenatis justo. Aliquam eu augue a nulla laoreet commodo. In et mollis justo. Etiam elementum at urna convallis dictum. Vestibulum fermentum id purus sit amet feugiat. Nulla facilisi. In pulvinar leo mauris, eget scelerisque odio auctor in. Proin finibus auctor mi in porta. Curabitur finibus sem et rhoncus maximus. Proin eros est, pulvinar ut felis et, imperdiet auctor ante. Aliquam nec quam purus. Vestibulum posuere felis in tellus fringilla pulvinar. Cras nec purus sed ipsum scelerisque posuere eget ac est. In nisl arcu, malesuada ac velit eget, ullamcorper commodo ante. Proin aliquet sed lectus consequat ullamcorper. Mauris a risus vel dolor posuere imperdiet a id nunc. Curabitur at tempus odio. Nunc semper luctus ante, nec consectetur quam luctus ut. In egestas sapien a quam mollis feugiat."})})]})});var z=function(){return Object(o.jsx)("div",{className:"flex flex-col h-screen overflow-auto hide-scroll md:m-auto md:items-start",children:Object(o.jsxs)(m.a,{children:[Object(o.jsxs)("div",{className:"flex flex-col items-center flex-foot w-full",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(c.c,{children:[Object(o.jsx)(c.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/experience",children:Object(o.jsx)(x,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/projects",children:Object(o.jsx)(h,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/about",children:Object(o.jsx)(p,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/cvs",children:Object(o.jsx)(K,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/uk",children:Object(o.jsx)(X,{})})]})]}),Object(o.jsx)(G,{})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root")),Q()}},[[41,1,2]]]);
//# sourceMappingURL=main.be1009ea.chunk.js.map