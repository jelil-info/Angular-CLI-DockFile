;
(self.AMP=self.AMP||[]).push({m:1,v:"2302171719000",n:"amp-fit-text",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,{isArray:i}=Array,{hasOwnProperty:e,toString:o}=Object.prototype;function r(t){const n=parseFloat(t);return"number"==typeof(i=n)&&isFinite(i)?n:void 0;var i}var s=["Webkit","webkit","Moz","moz","ms","O","o"];function l(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return s.some((t=>n.startsWith(t+"-")))?`-${n}`:n}function c(t,i,e){if(i.startsWith("--"))return i;n||(n=Object.create(null));let o=n[i];if(!o||e){if(o=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,n){for(let i=0;i<s.length;i++){const e=s[i]+n;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[e]&&(o=e)}e||(n[i]=o)}return o}function f(t,n,i,e,o){const r=c(t.style,n,o);if(!r)return;const s=e?i+e:i;t.style.setProperty(l(r),s)}function u(t){return`${t}px`}function a(t){return CSS.escape(t)}var h="i-amphtml-fit-text-measurer",m="i-amphtml-fit-text-content",p="i-amphtml-fit-text-content-wrapper";function d(t,n){!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(n),function(t,n){const i=n.ownerDocument.createDocumentFragment();for(let n=t.firstChild;n;n=n.nextSibling)i.appendChild(n.cloneNode(!0));n.appendChild(i)}(t,n)}var x=class extends t.BaseElement{static prerenderAllowed(){return!0}constructor(t){super(t),this.vX=null,this.ltt=null,this.rm=null,this.ctt=-1,this.ftt=-1,this.utt=null,this.att=""}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){const{element:t}=this,{content:n,contentWrapper:i,measurer:e}=function(t){if(function(t){return t.hasAttribute("i-amphtml-ssr")}(t))return function(t){const n=t.querySelector(`.${a(m)}`),i=t.querySelector(`.${a(p)}`),e=t.querySelector(`.${a(h)}`);if(!n||!i||!e)throw new Error("Invalid server render");return{content:n,contentWrapper:i,measurer:e}}(t);const n=t.ownerDocument,i=n.createElement("div");!function(t,n){t.classList.add("i-amphtml-fill-content")}(i),i.classList.add(m);const e=n.createElement("div");e.classList.add(p),i.appendChild(e);const o=n.createElement("div");return o.classList.add(h),function(t){return function(t,n){const i=[];for(let n=t.firstChild;n;n=n.nextSibling)!(function(t){let n;var i;return"string"==typeof t?n=t:1==(null==(i=t)?void 0:i.nodeType)&&(n=t.tagName),!!n&&n.toLowerCase().startsWith("i-")}(e=n)||e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("placeholder")||e.hasAttribute("fallback")||e.hasAttribute("overflow")))&&i.push(n);var e;return i}(t)}(t).forEach((t=>e.appendChild(t))),d(e,o),t.appendChild(i),t.appendChild(o),{content:i,contentWrapper:e,measurer:o}}(t);this.vX=n,this.ltt=i,this.rm=e,this.ctt=r(t.getAttribute("min-font-size"))||6,this.ftt=r(t.getAttribute("max-font-size"))||72,Object.defineProperty(this.element,"textContent",{set:t=>{this.att=t,this.mutateElement((()=>{this.ltt.textContent=t,this.htt(),this.hm()}))},get:()=>this.att||this.ltt.textContent})}isRelayoutNeeded(){return!0}layoutCallback(){if(this.win.ResizeObserver&&null===this.utt){const t=new this.win.ResizeObserver(function(t,n,i){let e=0,o=null;function r(i){o=null,e=t.setTimeout(s,100),n.apply(null,i)}function s(){e=0,o&&r(o)}return function(...t){e?o=t:r(t)}}(this.win,(()=>this.mutateElement((()=>{this.htt(),this.hm()})))));t.observe(this.vX),t.observe(this.rm),this.utt=function(){t.disconnect()}}return this.mutateElement((()=>{this.hm(),function(t,n){const{style:i}=t;for(const t in n)i.setProperty(l(c(i,t)),String(n[t]),"important")}(this.vX,{visibility:"visible"})}))}unlayoutCallback(){null!==this.utt&&(this.utt(),this.utt=null)}htt(){d(this.ltt,this.rm)}hm(){const t=this.vX.offsetHeight,n=this.vX.offsetWidth,i=function(t,n,i,e,o){for(o++;o-e>1;){const r=Math.floor((e+o)/2);f(t,"fontSize",u(r));const s=t.offsetHeight,l=t.offsetWidth;s>n||l>i?o=r:e=r}return e}(this.rm,t,n,this.ctt,this.ftt);f(this.ltt,"fontSize",u(i)),function(t,n,i,e){f(n,"fontSize",u(e));const o=n.offsetHeight>i,r=1.15*e,s=Math.floor(i/r);t.classList.toggle("i-amphtml-fit-text-content-overflown",o),function(t,n){for(const i in n)f(t,i,n[i])}(t,{lineClamp:o?s:"",maxHeight:o?u(r*s):""})}(this.ltt,this.rm,t,i)}};t.registerElement("amp-fit-text",x,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content{z-index:2!important;visibility:hidden!important}.i-amphtml-fit-text-content-wrapper{line-height:1.15em!important}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.i-amphtml-fit-text-measurer{position:absolute!important;top:0!important;left:0!important;z-index:1!important;visibility:hidden!important;line-height:1.15em!important}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-fit-text-0.1.mjs.map