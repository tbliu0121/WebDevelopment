(()=>{var e,r,t={},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(r,t,n,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,n,i]=e[u],l=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(l=!1,i<a&&(a=i));l&&(e.splice(u--,1),r=n())}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,n,i]},o.F={},o.E=e=>{Object.keys(o.F).map((r=>{o.F[r](e)}))},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>"js/test.4ad62b0e7f.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},o.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var s=c[u];if(s.getAttribute("src")==e){a=s;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=e),r[e]=[t];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=i);var a=o.p+o.u(r),l=new Error;o.l(a,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}}),"chunk-"+r,r)}},o.F.j=r=>{if(!o.o(e,r)||void 0===e[r]){e[r]=null;var t=document.createElement("link");o.nc&&t.setAttribute("nonce",o.nc),t.rel="prefetch",t.as="script",t.href=o.p+o.u(r),document.head.appendChild(t)}},o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[a,l,c]=t,u=0;for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var s=c(o);for(r&&r(t);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;return o.O(s)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o.O(0,[179],(()=>o.E(43)),5),console.log("index.js被加载了。。。"),document.getElementById("btn").onclick=function(){o.e(43).then(o.bind(o,411)).then((({mul:e})=>{console.log(e(4,6))}))},o.O()})();