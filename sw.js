if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const o=e=>s(e,r),f={module:{uri:r},exports:c,require:o};i[r]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f41085ce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-89a99588.css",revision:null},{url:"assets/index-97c51887.js",revision:null},{url:"index.html",revision:"dacba045ecb8f8a3b521b19064942e46"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/favicon.png",revision:"6275052b6cf906f322b5d224dfd0a2f0"},{url:"manifest.webmanifest",revision:"870b5a5011ff59cc2a9ad08e4aa1988b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new e.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
