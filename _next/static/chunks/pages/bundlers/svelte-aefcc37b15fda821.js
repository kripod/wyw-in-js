(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{5842:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bundlers/svelte",function(){return n(1237)}])},1237:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return a}});var l=n(7458),r=n(3995),o=n(3163),i=n(7497);n(7696);var t=n(5620);let a=[{depth:4,value:"Contents",id:"contents"},{depth:4,value:"Rollup",id:"rollup"},{depth:4,value:"Webpack",id:"webpack"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",h4:"h4",ul:"ul",li:"li",a:"a",p:"p",code:"code",pre:"pre",span:"span",strong:"strong"},(0,t.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Usage with Svelte"}),"\n",(0,l.jsx)(e.h4,{id:"contents",children:"Contents"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#Rollup-1",children:"Svelte with Rollup"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"#Webpack-1",children:"Svelte with Webpack"})}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"rollup",children:"Rollup"}),"\n",(0,l.jsxs)(e.p,{children:["Take a look: ",(0,l.jsx)(e.a,{href:"https://github.com/madhavarshney/svelte-linaria-sample/commit/d96443218694c0c8d80edf7c40a8fbf7c1f6997f",children:"d964432"})]}),"\n",(0,l.jsxs)(e.p,{children:["Install ",(0,l.jsx)(e.code,{children:"rollup-plugin-css-only"})," and update ",(0,l.jsx)(e.code,{children:"rollup.config.js"})]}),"\n",(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" svelte "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rollup-plugin-svelte'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" css "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rollup-plugin-css-only'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// for CSS bundling"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" wyw "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@wyw-in-js/rollup'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NODE_ENV"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'production'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins: ["})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"svelte"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      dev"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// allow `plugin-css-only` to bundle with CSS generated by wyw"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      emitCss"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"wyw"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      sourceMap"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" dev"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      output"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'<OUT_FOLDER>/bundle.css'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    })"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  ]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"IMPORTANT"}),": ",(0,l.jsx)(e.code,{children:"rollup-plugin-css-only"})," generates incorrect sourcemaps (see ",(0,l.jsx)(e.a,{href:"https://github.com/thgh/rollup-plugin-css-only/issues/10",children:"thgh/rollup-plugin-css-only#10"}),"). Use an alternative CSS plugin such as ",(0,l.jsx)(e.a,{href:"https://github.com/egoist/rollup-plugin-postcss",children:(0,l.jsx)(e.code,{children:"rollup-plugin-postcss"})})," instead in the same way as above."]}),"\n",(0,l.jsx)(e.h4,{id:"webpack",children:"Webpack"}),"\n",(0,l.jsxs)(e.p,{children:["Take a look: ",(0,l.jsx)(e.a,{href:"https://github.com/madhavarshney/svelte-linaria-sample/commit/5ffd69dc9f9584e3eec4127e798d7a4c1552ec19",children:"5ffd69d"})]}),"\n",(0,l.jsxs)(e.p,{children:["Update ",(0,l.jsx)(e.code,{children:"webpack.config.js"})," with the following:"]}),"\n",(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"prod"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"NODE_ENV"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'production'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"wywLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  loader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@wyw-in-js/webpack-loader'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  options"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    sourceMap"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"prod"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"exports"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"module"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    rules"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        test"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /\\.m"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"js"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        exclude"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /node_modules/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        use"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [wywLoader]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        test"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /\\.svelte"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"$"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        use"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          wywLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            loader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'svelte-loader'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            options"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              dev"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"prod"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              emitCss"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              hotReload"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"CSS"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" rules)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})})]})}let c={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/bundlers/svelte.mdx",route:"/bundlers/svelte",pageMap:[{kind:"Meta",data:{index:"Introduction","how-it-works":"How it works?","how-to":"How to use",bundlers:"Supported bundlers",changelog:"Changelog",configuration:"Configuration","feature-flags":"Feature Flags"}},{kind:"Folder",name:"bundlers",route:"/bundlers",children:[{kind:"MdxPage",name:"esbuild",route:"/bundlers/esbuild"},{kind:"MdxPage",name:"rollup",route:"/bundlers/rollup"},{kind:"MdxPage",name:"svelte",route:"/bundlers/svelte"},{kind:"MdxPage",name:"vite",route:"/bundlers/vite"},{kind:"MdxPage",name:"webpack",route:"/bundlers/webpack"},{kind:"Meta",data:{esbuild:"Esbuild",rollup:"Rollup",svelte:"Svelte",vite:"Vite",webpack:"Webpack"}}]},{kind:"MdxPage",name:"changelog",route:"/changelog"},{kind:"MdxPage",name:"configuration",route:"/configuration"},{kind:"MdxPage",name:"feature-flags",route:"/feature-flags"},{kind:"MdxPage",name:"how-it-works",route:"/how-it-works"},{kind:"Folder",name:"how-to",route:"/how-to",children:[{kind:"MdxPage",name:"custom-tagged-template",route:"/how-to/custom-tagged-template"},{kind:"Meta",data:{"custom-tagged-template":"Custom Tagged Template"}}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Usage with Svelte",headings:a},pageNextRoute:"/bundlers/svelte",nextraLayout:o.ZP,themeConfig:i.Z};e.default=(0,r.j)(c)},7497:function(s,e,n){"use strict";var l=n(7458);e.Z={footer:{component:null},logo:(0,l.jsx)("span",{children:"WyW-in-JS"}),primaryHue:210,primarySaturation:100,project:{docsRepositoryBase:"https://github.com/Anber/wyw-in-js/tree/main/apps/website",link:"https://github.com/Anber/wyw-in-js"},useNextSeoProps:()=>({titleTemplate:"%s – WyW-in-JS"})}}},function(s){s.O(0,[774,669,888,179],function(){return s(s.s=5842)}),_N_E=s.O()}]);