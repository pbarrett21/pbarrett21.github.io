(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){var n={"./dark-thick.png":62,"./light-thick.png":63};function s(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id=61},62:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dark-thick.88bdbded.png"},63:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/light-thick.c59f33c7.png"},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cup-of-coffee.f45fb1d3.jpeg"},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cvs-health-logo-stacked.c78149f9.png"},69:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/uk-logo.56a78bea.jpeg"},70:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/loutrails.6cf0ee60.jpg"},71:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/websitejpg.d80a8951.jpeg"},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(10),i=a.n(l),r=(a(53),a(21)),c=(a(54),a(55),a(5)),o={theme:"dark",setTheme:function(){}},m=s.a.createContext(o),d=a(0),h=function(e){var t=Object(n.useState)(!1),s=Object(r.a)(t,2),l=s[0],i=s[1],o=Object(c.f)(),h=Object(n.useContext)(m).theme;return Object(d.jsx)("button",{className:"border-0 bg-transparent",children:Object(d.jsx)("img",{className:l?"w-8 h-8 spin":"h-8 w-8",onClick:function(){e.spin&&i(!l),o.push("/")},onAnimationEnd:function(){return i(!l)},src:a(61)("./".concat(h,"-thick.png")).default,alt:"Home Button"})})},b=a(16),j=(a(64),function(){var e=Object(c.g)(),t=Object(c.f)(),a=Object(n.useContext)(m).theme,s=new Map([["/",0],["/experience",1],["/projects",2],["/about",3]]),l=Object(n.useState)(s.get(e.pathname)),i=Object(r.a)(l,2),o=i[0],j=i[1],x=function(e){var t="m-4 md:ml-8 whitespace-nowrap";return e===o?t+" selected-tab":t};return Object(n.useEffect)((function(){var e=t.listen((function(e){j(s.get(e.pathname))}));return function(){e()}})),void 0!==o?Object(d.jsx)("nav",{className:"dark"!==a?"w-full sticky -top-1 bg-white":"w-full sticky -top-1 bg-darkMode text-white",children:Object(d.jsxs)("ol",{className:"flex list-none justify-between items-center max-w-full md:max-w-2xl lg:max-w-2xl m-auto",children:[Object(d.jsx)("li",{onClick:function(){return j(0)},className:"m-4 flex-shrink-0",children:Object(d.jsx)(h,{spin:!1})}),Object(d.jsx)("ul",{className:"flex ml-auto",children:[{id:1,label:"Experience",link:"experience"},{id:2,label:"Projects",link:"projects"},{id:3,label:"About Me",link:"about"}].map((function(e){return Object(d.jsx)("li",{className:x(e.id),children:Object(d.jsx)(b.b,{onClick:function(){return j(e.id)},to:e.link,children:e.label})},e.label)}))})]})}):Object(d.jsx)("nav",{className:"dark"!==a?"w-full sticky -top-1 bg-white":"w-full sticky -top-1 bg-darkMode text-white",children:Object(d.jsx)("ol",{className:"flex list-none max-w-full md:max-w-2xl lg:max-w-2xl m-auto",children:Object(d.jsx)("li",{className:"m-4",onClick:function(){return t.goBack()},children:Object(d.jsxs)("div",{className:"back-container",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),Object(d.jsx)("span",{children:"Go Back"})]})})})})}),x=(a(65),function(){var e=Object(c.f)(),t=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"!==t?"max-w-full md:max-w-2xl lg:max-w-2xl m-4":"text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(d.jsx)("img",{className:"rounded shadow-md",src:a(66).default,alt:"macbook and coffee"}),Object(d.jsxs)("div",{className:"md:flex md:flex-col md:items-center",children:[Object(d.jsx)("h1",{className:"text-xl font-semibold mt-6 mb-6 md:ml-auto md:mr-auto",children:"Hey there, I'm Paul \ud83d\udc4b"}),Object(d.jsx)("h1",{className:"text-lg font-normal",children:"I am a software developer dedicated to constant improvement and exploration"})]}),Object(d.jsx)("div",{className:"md:flex md:flex-col md:items-center mt-6",children:Object(d.jsxs)("span",{className:"text-lg font-normal mt-6 mb-6 md:ml-auto md:mr-auto",children:["Download my",Object(d.jsx)("a",{className:"font-medium underline ml-1 hover:text-green-600",href:"https://drive.google.com/file/d/1Bf8Yqsyx78_HYSKCbPKTby_3TZQCGn9x/view?usp=sharing",rel:"noreferrer",target:"_blank",children:"resume"})]})}),Object(d.jsx)("button",{className:"flex mt-10 md:ml-auto md:mr-auto",onClick:function(){e.push("/experience")},children:Object(d.jsxs)("div",{className:"back-container",children:[Object(d.jsx)("span",{children:"Check out my experience"}),Object(d.jsxs)("svg",{className:"arrow-bounce ml-2",fill:"none",height:"24",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),Object(d.jsx)("polyline",{points:"14 6 20 12 14 18"})]})]})})]})}),u=(a(67),function(e){return Object(d.jsxs)("div",{className:"back-container",children:[Object(d.jsx)("span",{children:e.text}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})}),f=function(e){var t=Object(c.f)(),a=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===a?"bg-darkMode text-white":"bg-white",children:[Object(d.jsx)("img",{className:"bg-white m-auto lg:max-w-xl mb-8 mt-8",src:e.imgSrc,alt:e.imgAlt}),Object(d.jsx)("h1",{className:"font-extrabold lg:font-black mt-8 text-2xl mb-4",children:e.cardTitle}),Object(d.jsx)("p",{className:"lg:text-lg",children:e.blurb}),Object(d.jsxs)("ul",{className:"mt-8 grid",children:[Object(d.jsxs)("li",{className:"list-grid",children:[Object(d.jsx)("p",{className:"font-semibold",children:"Role"}),Object(d.jsx)("p",{children:e.role})]}),Object(d.jsxs)("li",{className:"list-grid",children:[Object(d.jsx)("p",{className:"font-semibold",children:"Dates"}),Object(d.jsx)("p",{children:e.dates})]}),Object(d.jsxs)("li",{className:"list-grid",children:[Object(d.jsx)("p",{className:"font-semibold",children:"Technologies"}),Object(d.jsx)("p",{children:e.technologies})]})]}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)("button",{className:"flex mb-8",onClick:function(){t.push(e.learnMorePath)},children:Object(d.jsx)(u,{text:"Learn Mode"})})})]})},g=function(){return Object(d.jsxs)("div",{className:"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(d.jsx)(f,{cardTitle:"CVS Health",imgSrc:a(68).default,imgAlt:"CVS Health Logo",blurb:"I joined CVS Health in 2019 as a full stack engineer working on renovating workflows for PBM by creating modern single page applications.",role:"Software Engineer",dates:"June 2019 - Present",learnMorePath:"/cvs",technologies:"Angular, SpringBoot, Typescript, NGRX, AG Grid"}),Object(d.jsx)(f,{cardTitle:"University of Kentucky",imgSrc:a(69).default,imgAlt:"University of Kentucky Logo",blurb:"I graduated from the University of Kentucky in 2019 with a major in computer science and a minor in mathematics. During my time as a student I was able to work on many interesting projects and attend the CatHacks hackathon.",role:"Student",dates:"May 2015 - May 2019",learnMorePath:"/uk",technologies:"Angular, Java, C++, Machine Learning, Javascript"})]})},p=a(95),w=function(e){var t=Object(c.f)(),a=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===a?"bg-darkMode text-white":"bg-white",children:[Object(d.jsx)("img",{className:"m-auto lg:max-w-xl mb-8 mt-8",src:e.imgSrc,alt:e.imgAlt}),Object(d.jsx)("h1",{className:"font-bold lg:font-extrabold mt-8 text-2xl mb-4",children:e.cardTitle}),Object(d.jsx)("p",{className:"lg:text-lg",children:e.blurb}),Object(d.jsx)("div",{className:"mt-2 flex justify-end",children:e.technologies.map((function(e){return Object(d.jsx)(p.a,{label:e,size:"small",className:"ml-1",color:"primary",variant:"outlined"},e)}))}),Object(d.jsx)("div",{className:"flex justify-center mt-4",children:Object(d.jsx)("button",{className:"flex mb-8",onClick:function(){return t.push(e.learnMorePath)},children:Object(d.jsx)(u,{text:"Learn More"})})})]})},O=function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4":"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(d.jsx)(w,{cardTitle:"LouTrails",imgSrc:a(70).default,imgAlt:"LouTrails",blurb:"An informational website showcasing trails in the Louisville area.",technologies:["React","Styled Components","Mapbox GL JS","Gatsby"],learnMorePath:"/loutrails"}),Object(d.jsx)(w,{cardTitle:"Portfolio Website",imgSrc:a(71).default,imgAlt:"Website",blurb:"Creating this website has been an enjoyable opportunity to try my hand at responsive design and CSS animation as well as to explore new technologies and tools.",technologies:["React","Tailwind CSS","Responsive Design"],learnMorePath:"/website"}),Object(d.jsx)("h1",{className:"mt-16 text-lg lg:text-2xl font-semibold flex justify-center",children:"More to come, soon..."})]})},v=(a(72),function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white max-w-full md:max-w-2xl lg:max-w-2xl m-4":"max-w-full md:max-w-2xl lg:max-w-2xl m-4",children:[Object(d.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Career"}),Object(d.jsx)("p",{className:"text-lg font-normal ml-8",children:"I am a software developer with over 2 years of professional experience. I have been immersed in an agile development environment and have been fortunate to work with fantastic teammates on many interesting projects while using modern technologies. I have enjoyed being able to participate and contribute in the planning of new products and then to create and bring that vision to life."}),Object(d.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Education"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text-lg font-medium ml-8",children:"B.S. in Computer Science with Minor in Mathematics"}),Object(d.jsx)("p",{className:"text-lg font-normal ml-8",children:"University of Kentucky, 2015 - 2019"})]}),Object(d.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Hobbies and Interests"}),Object(d.jsx)("p",{className:"text-lg font-normal ml-8",children:"I have many hobbies and interests outside of my professional life!"}),Object(d.jsxs)("ul",{className:"pt-4 pl-16",children:[Object(d.jsx)("li",{children:"Mountain Biking \ud83d\udeb4"}),Object(d.jsx)("li",{children:"Hiking \ud83c\udf32"}),Object(d.jsx)("li",{children:"Photography \ud83d\udcf7"}),Object(d.jsx)("li",{children:"Paddleboarding \ud83c\udfc4\u200d\u2642\ufe0f"}),Object(d.jsx)("li",{children:"Cats \ud83d\udc08"})]}),Object(d.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Links"}),Object(d.jsx)("p",{className:"text-lg font-normal ml-8",children:"Here are some useful or relevant links:"}),Object(d.jsx)("ul",{className:"pt-4 pl-16",children:[{label:"Tools I use \ud83d\udee0",link:"https://github.com/pbarrett21/tools-and-gadgets/blob/main/README.md"},{label:"Github",link:"https://github.com/pbarrett21"},{label:"LinkedIn",link:"https://www.linkedin.com/in/pbarrett21/"},{label:"CodePen",link:"https://codepen.io/paulbarrett"},{label:"Instagram",link:"https://www.instagram.com/paulbarr21/"}].map((function(e){return Object(d.jsx)("li",{className:"mb-1",children:Object(d.jsx)("a",{className:"underline hover:text-green-600",href:e.link,rel:"noreferrer",target:"_blank",children:e.label})},e.label)}))}),Object(d.jsx)("h1",{className:"font-semibold text-2xl mt-10 mb-6",children:"Resume"}),Object(d.jsxs)("p",{className:"text-lg font-normal ml-8",children:["Feel free to take a look at my",Object(d.jsx)("a",{className:"font-medium underline ml-1 hover:text-green-600",href:"https://drive.google.com/file/d/1Bf8Yqsyx78_HYSKCbPKTby_3TZQCGn9x/view?usp=sharing",rel:"noreferrer",target:"_blank",children:"resume"})]})]})}),k=a(96),N=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],s=t[1],l=[{icon:Object(d.jsx)("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",fill:"none",stroke:a?"white":"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}),hoverText:"Github",link:"https://github.com/pbarrett21"},{icon:Object(d.jsxs)("svg",{fill:"none",height:"24",stroke:a?"white":"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(d.jsx)("rect",{height:"12",width:"4",x:"2",y:"9"}),Object(d.jsx)("circle",{cx:"4",cy:"4",r:"2"})]}),hoverText:"LinkedIn",link:"https://www.linkedin.com/in/pbarrett21/"},{icon:Object(d.jsxs)("svg",{fill:"none",height:"24",stroke:a?"white":"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),Object(d.jsx)("line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}),Object(d.jsx)("polyline",{points:"22 8.5 12 15.5 2 8.5"}),Object(d.jsx)("polyline",{points:"2 15.5 12 8.5 22 15.5"}),Object(d.jsx)("line",{x1:"12",x2:"12",y1:"2",y2:"8.5"})]}),hoverText:"CodePen",link:"https://codepen.io/paulbarrett"},{icon:Object(d.jsxs)("svg",{fill:"none",height:"24",stroke:a?"white":"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("rect",{height:"20",rx:"5",ry:"5",width:"20",x:"2",y:"2"}),Object(d.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(d.jsx)("line",{x1:"17.5",x2:"17.5",y1:"6.5",y2:"6.5"})]}),hoverText:"Instagram",link:"https://www.instagram.com/paulbarr21/"}],i=Object(n.useContext)(m),c=function(){s(!a),i.setTheme(a?"light":"dark")};return Object(d.jsx)("footer",{className:a?"flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4 bg-darkMode":"flex-shrink-0 md:w-19/20 max-w-full md:max-w-2xl lg:max-w-2xl md:m-auto pt-4",children:Object(d.jsxs)("ol",{className:"flex list-none m-4 justify-between",children:[l.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(k.a,{title:e.hoverText,"aria-label":e.hoverText,enterDelay:800,leaveDelay:200,placement:"top",children:Object(d.jsx)("a",{href:e.link,"aria-label":e.hoverText,rel:"noreferrer",target:"_blank",children:e.icon})})},e.link)})),a?Object(d.jsx)("li",{onClick:c,children:Object(d.jsx)(k.a,{title:"Light Mode","aria-label":"Light Mode",enterDelay:800,leaveDelay:200,placement:"top",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",viewBox:"0 0 20 20",fill:"white",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})}):Object(d.jsx)("li",{onClick:c,children:Object(d.jsx)(k.a,{title:"Dark Mode","aria-label":"Dark Mode",enterDelay:300,leaveDelay:200,placement:"top",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"black",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})})]})})},y=(a(73),function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white w-full md:max-w-2xl lg:max-w-2xl":"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(d.jsx)("div",{className:"w-full flex cvs-banner",children:Object(d.jsx)("h1",{className:"head-container md:ml-16 md:text-7xl",children:"CVS"})}),Object(d.jsxs)("div",{className:"m-4",children:[Object(d.jsx)("p",{className:"font-semibold",children:"I have been a full-stack engineer at CVS for over 2 years and have grown significantly during that time. I have enjoyed being able to participate and contribute at every stage of the product lifecycle from initial planning all the way to delivering MVP."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Technical Responsibilities and Information"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Technologies and Tools Used"}),Object(d.jsx)("p",{className:"ml-4",children:"Angular, SpringBoot, Oracle SQL databases, Typescript, GitLab, Flyway, Lombok, Hibernate, Spring Cloud Data Flow, Pivotal Tracker, Pivotal Cloud Foundry, Jenkins, Spring JPA"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Notable Libraries/Frameworks Used"}),Object(d.jsx)("p",{className:"ml-4",children:"Spectator, NgRx, RxJS, AgGrid, JUnit, Mockito"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"XP (Extreme Programming)"}),Object(d.jsxs)("p",{className:"ml-4",children:["I have been a part of an XP team since working at CVS. XP is a software development methodology similar to many other Agile methodologies. Some of the core concepts that I have been exposed to include TDD (test driven development), Continuous Integration, and paired programming. Learn more about XP",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://en.wikipedia.org/wiki/Extreme_programming",rel:"noreferrer",target:"_blank",children:"here"}),"."]}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Accomplishments and Other Roles"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Contribute to Proprietary Angular Component Library"}),Object(d.jsx)("p",{className:"ml-4",children:"I have enjoyed being able to contribute many new features and bugfixes on the CVS ACL. I have learned a lot about libraries, versioning, and more from this experience!"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Accessibility Champion"}),Object(d.jsxs)("p",{className:"ml-4",children:["I have championed the effort to bring greater accessibility standards to all products in our lab. This has included sharing knowledge how to make apps more accessible, integrating better accessibility standards into story creation / general workflow, showcasing empathy building exercises, following",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1 mr-1",href:"https://www.w3.org/TR/WCAG21/",rel:"noreferrer",target:"_blank",children:"W3 WCAG"}),"standards and more."]}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Upgrade security to Auth Code Flow"}),Object(d.jsxs)("p",{className:"ml-4",children:["I took the initiative to upgrade the security for our application from Implicit to",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://auth0.com/docs/flows/authorization-code-flow",rel:"noreferrer",target:"_blank",children:"Auth Code Flow"}),". Implementing this change involved work spanning from configuration on the front end to the back end as well as SSO setup and more. This was another great learning experience!"]}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Give Presentations"}),Object(d.jsxs)("p",{className:"ml-4",children:["I have given presentations in order to share knowledge with other engineers on various topics including",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1 mr-1",href:"https://github.com/ngneat/spectator",rel:"noreferrer",target:"_blank",children:"Spectator"}),"and",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://www.ag-grid.com/",rel:"noreferrer",target:"_blank",children:"AgGrid"}),"!"]}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Non-technical Responsibilities and Scope"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Product Lifecycle"}),Object(d.jsx)("p",{className:"ml-4",children:"I have enjoyed a large degree of inclusion to every stage of the product lifecycle. I have been able to participate in the initial stages of new products and have been able to provide engineering insight and suggestions during Discovery and Framing sessions, Inceptions, and Design Studios. I have been able to directly interact with and to form professional relationships with our business partners. "}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Conduct Interviews and Provide Mentorship"}),Object(d.jsx)("p",{className:"ml-4",children:"I have welcomed many new engineers and teammates and have taken on the role of a mentor in order to bring them up to speed in respect to code bases, practices, and XP rituals. Additionally, I have taken the responsibility of an interviewer and have evaluated prospective engineers and designers."})]})]})}),C=(a(74),function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white w-full md:max-w-2xl lg:max-w-2xl":"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(d.jsx)("div",{className:"w-full flex uk-banner",children:Object(d.jsx)("h1",{className:"head-container-uk md:ml-16 md:text-4xl",children:"University of Kentucky"})}),Object(d.jsxs)("div",{className:"m-4",children:[Object(d.jsx)("p",{className:"font-semibold",children:"I graduated from the University of Kentucky with a B.S. in Computer Science and a minor in Mathematics in May of 2019. During my time there I was fortunate to explore many different areas of interest and gained a great foundation to build on."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Relevant Coursework"}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Computer Science and Software Engineering"}),Object(d.jsxs)("p",{className:"ml-4",children:[Object(d.jsx)("a",{className:"underline hover:text-green-600",href:"https://github.com/pbarrett21/311App",rel:"noreferrer",target:"_blank",children:"Senior Design Project"}),", Machine Learning, Cryptology, Algorithm Design and Analysis, Theory of Computing, Systems Programming, Database Systems, Computer Science Ethics, Web Programming, Computer Networking"]}),Object(d.jsx)("h2",{className:"font-semibold ml-4 mt-4",children:"Mathematics"}),Object(d.jsx)("p",{className:"ml-4",children:"Applicable Algebra, Discrete Mathematics, Numerical Methods, Matrix Algebra, Calc III"}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Accomplishments"}),Object(d.jsx)("p",{className:"ml-4",children:"Dean's List 2018-2019"}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"CatHacks Hackathon"}),Object(d.jsxs)("p",{className:"ml-4",children:["Entered and placed 2nd in the CatHacks Hackathon. We used an Amazon Alexa to transcribe speech to text to a Google Docs document using a custom Alexa Skill. View the implementation ",Object(d.jsx)("a",{className:"underline hover:text-green-600",href:"https://github.com/pbarrett21/cathacks-2018",rel:"noreferrer",target:"_blank",children:"here"}),"."]})]})]})});function S(){var e=Object(c.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}a(75);var M=function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white w-full md:max-w-2xl lg:max-w-2xl":"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(d.jsx)("div",{className:"w-full flex website-gradient",children:Object(d.jsx)("h1",{className:"head-container-website md:ml-16 md:text-4xl",children:"Portfolio Website"})}),Object(d.jsxs)("div",{className:"m-4",children:[Object(d.jsx)("p",{className:"font-semibold",children:"I decided to create this website as an exercise to both give myself an opportunity to create a responsive website and also to serve as a platform for my current portfolio as well as future experiences or projects."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Technologies"}),Object(d.jsxs)("p",{className:"ml-4",children:["React (with Typescript),",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://tailwindcss.com/",rel:"noreferrer",target:"_blank",children:"Tailwind CSS"}),", Github Pages, Sass, Javascript, HTML"]}),Object(d.jsx)("p",{className:"ml-4 mt-2",children:"This was my first time using React with Typescript (.tsx) and I was very glad to be able to benefit from both technologies. This was also my first time using the CSS framework Tailwind CSS and I was very impressed with how easy it was to pick up and how it accelerated the designs."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Design"}),Object(d.jsxs)("p",{className:"ml-4",children:["I learned a great deal about implementing responsive design from this project. I greatly benefited from the prototyping tool",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://www.figma.com/",rel:"noreferrer",target:"_blank",children:"Figma"})," to design screens and flow before building. The Google Chrome devtools Device Mode also enabled me to simulate this website on different screen sizes and mobile devices."]}),Object(d.jsx)("div",{className:"flex justify-center mt-4",children:Object(d.jsx)("a",{className:"flex",href:"https://github.com/pbarrett21/pbarrett21.github.io/tree/develop",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(u,{text:"View the Code"})})})]})]})},T=(a(76),function(){var e=Object(n.useContext)(m).theme;return Object(d.jsxs)("div",{className:"dark"===e?"text-white w-full md:max-w-2xl lg:max-w-2xl":"w-full md:max-w-2xl lg:max-w-2xl",children:[Object(d.jsx)("div",{className:"w-full flex loutrails-gradient",children:Object(d.jsx)("h1",{className:"head-container-website md:ml-16 md:text-4xl",children:"LouTrails"})}),Object(d.jsxs)("div",{className:"m-4",children:[Object(d.jsx)("p",{className:"font-semibold",children:"I decided to create LouTrails to give myself an opportunity to work with a few technologies I've been interested in using a topic (nature and trails) that is a hobby of mine."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Technologies"}),Object(d.jsxs)("p",{className:"ml-4",children:["React (with Typescript),",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://styled-components.com/",rel:"noreferrer",target:"_blank",children:"Styled Components"}),",",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://www.gatsbyjs.com/",rel:"noreferrer",target:"_blank",children:"Gatsby"}),",",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://www.mapbox.com/mapbox-gljs",rel:"noreferrer",target:"_blank",children:"Mapbox GL JS"}),", Netlify CMS"]}),Object(d.jsx)("p",{className:"ml-4 mt-2",children:"This was my first time using Gatsby, Styled Components, and Mapbox and I am very pleased with the end result. Gatsby did a great job of optimizing otherwise tedious tasks like image optimization, lazy-loading, and code splitting. As a result, LouTrails is very quick and lightweight. Styled Components was very nice to use and improved organization greatly, especially in comparison to Tailwind CSS. Mapbox tied it all together by providing a clean and fast client-side map experience."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Noteworthy"}),Object(d.jsx)("p",{className:"ml-4",children:"Besides the maps created from Mapbox, this entire website was created without the help of outside libraries. I originally considered bringing in a library to create the search bar or dropdown but instead opted to create my own to keep them entirely customizable. Creating a functional filterable searchbar and dropdown proved to be more complicated than anticipated - but was a great learning experience."}),Object(d.jsx)("h1",{className:"font-semibold mt-10",children:"Design"}),Object(d.jsxs)("p",{className:"ml-4",children:["Once again, I implemented",Object(d.jsx)("a",{className:"underline hover:text-green-600 ml-1",href:"https://www.figma.com/",rel:"noreferrer",target:"_blank",children:"Figma"})," to design screens and flow before building this project."]}),Object(d.jsx)("div",{className:"flex justify-center mt-4",children:Object(d.jsx)("a",{className:"flex",href:"https://loutrails.netlify.app/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(u,{text:"Go to LouTrails"})})}),Object(d.jsx)("div",{className:"flex justify-center mt-4",children:Object(d.jsx)("a",{className:"flex",href:"https://github.com/pbarrett21/LouTrails",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(u,{text:"View the Code"})})})]})]})});var I=function(){var e=Object(n.useState)("dark"),t=Object(r.a)(e,2),a=t[0],s={theme:a,setTheme:t[1]};return Object(d.jsx)("div",{className:"dark"===a?"bg-darkMode flex flex-col h-screen hide-scroll md:m-auto md:items-start":"flex flex-col h-screen hide-scroll md:m-auto md:items-start",children:Object(d.jsx)(b.a,{children:Object(d.jsxs)(m.Provider,{value:s,children:[Object(d.jsxs)("div",{className:"dark"===a?"bg-darkMode flex flex-col items-center flex-foot w-full":"flex flex-col items-center flex-foot w-full",children:[Object(d.jsx)(j,{}),Object(d.jsx)(S,{}),Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/experience",children:Object(d.jsx)(g,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/projects",children:Object(d.jsx)(O,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/about",children:Object(d.jsx)(v,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/cvs",children:Object(d.jsx)(y,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/uk",children:Object(d.jsx)(C,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/website",children:Object(d.jsx)(M,{})}),Object(d.jsx)(c.a,{exact:!0,path:"/loutrails",children:Object(d.jsx)(T,{})})]})]}),Object(d.jsx)("div",{className:"dark"===a?"w-full bg-darkMode":"w-full",children:Object(d.jsx)(N,{})})]})})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),l(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),L()}},[[77,1,2]]]);
//# sourceMappingURL=main.0e70ee5d.chunk.js.map