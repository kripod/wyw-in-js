(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{4788:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bundlers/esbuild",function(){return n(1918)}])},1918:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return c}});var r=n(7458),l=n(3995),i=n(3163),o=n(7497);n(7696);var t=n(5620),a=n(7081);let c=[{depth:3,value:"Installation",id:"installation"},{depth:3,value:"Configuration",id:"configuration"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Usage with esbuild"}),"\n",(0,r.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(a.mQ,{items:["npm","pnpm","yarn","bun"],storageKey:"selectedPackageManager",children:[(0,r.jsx)(a.OK,{children:(0,r.jsx)(e.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"i"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-D"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@wyw-in-js/esbuild"})]})})})}),(0,r.jsx)(a.OK,{children:(0,r.jsx)(e.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-D"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@wyw-in-js/esbuild"})]})})})}),(0,r.jsx)(a.OK,{children:(0,r.jsx)(e.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@wyw-in-js/esbuild"})]})})})}),(0,r.jsx)(a.OK,{children:(0,r.jsx)(e.pre,{"data-language":"sh","data-theme":"default",children:(0,r.jsx)(e.code,{"data-language":"sh","data-theme":"default",children:(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"bun"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--dev"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"@wyw-in-js/esbuild"})]})})})})]}),"\n",(0,r.jsx)(e.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" wyw "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@wyw-in-js/esbuild'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" esbuild "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'esbuild'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"prod"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NODE_ENV"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'production'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"esbuild"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".build"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    entryPoints"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'src/index.ts'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    outdir"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dist'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    bundle"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    minify"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" prod"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    plugins"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"wyw"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        filter"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /\\.(js"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"jsx"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"ts"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"tsx)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        sourceMap"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" prod"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      })"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".exit"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"));"})]})]})})]})}let h={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/bundlers/esbuild.mdx",route:"/bundlers/esbuild",pageMap:[{kind:"Meta",data:{index:"Introduction","how-it-works":"How it works?","how-to":"How to use",bundlers:"Supported bundlers",changelog:"Changelog",configuration:"Configuration","feature-flags":"Feature Flags"}},{kind:"Folder",name:"bundlers",route:"/bundlers",children:[{kind:"MdxPage",name:"esbuild",route:"/bundlers/esbuild"},{kind:"MdxPage",name:"rollup",route:"/bundlers/rollup"},{kind:"MdxPage",name:"svelte",route:"/bundlers/svelte"},{kind:"MdxPage",name:"vite",route:"/bundlers/vite"},{kind:"MdxPage",name:"webpack",route:"/bundlers/webpack"},{kind:"Meta",data:{esbuild:"Esbuild",rollup:"Rollup",svelte:"Svelte",vite:"Vite",webpack:"Webpack"}}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"configuration",route:"/configuration"},{kind:"MdxPage",name:"feature-flags",route:"/feature-flags"},{kind:"MdxPage",name:"how-it-works",route:"/how-it-works"},{kind:"Folder",name:"how-to",route:"/how-to",children:[{kind:"MdxPage",name:"custom-tagged-template",route:"/how-to/custom-tagged-template"},{kind:"Meta",data:{"custom-tagged-template":"Custom Tagged Template"}}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Usage with esbuild",headings:c},pageNextRoute:"/bundlers/esbuild",nextraLayout:i.ZP,themeConfig:o.Z};e.default=(0,l.j)(h)},7497:function(s,e,n){"use strict";var r=n(7458);e.Z={footer:{component:null},logo:(0,r.jsx)("span",{children:"WyW-in-JS"}),primaryHue:210,primarySaturation:100,project:{docsRepositoryBase:"https://github.com/Anber/wyw-in-js/tree/main/apps/website",link:"https://github.com/Anber/wyw-in-js"},useNextSeoProps:()=>({titleTemplate:"%s – WyW-in-JS"})}}},function(s){s.O(0,[774,669,888,179],function(){return s(s.s=4788)}),_N_E=s.O()}]);