import{j as u,b as le,c as de,F as z,s as J,d as V,i as X,u as me,e as ue,f as h,g as y,h as pe,k as j,l as O,S as fe,R as _e,Q as ye}from"./@qwik-city-plan-384504de.js";/**
 * @license
 * @builder.io/qwik/server 1.2.11
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var qe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function W(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const r=N(i),c=t[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,r){var g;const c=N(r),l=(g=globalThis.__qwik_reg_symbols)==null?void 0:g.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const v=qe(m);if(!(r in v))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return v[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function be(e,n){const t=W(e,n);J(t)}var N=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Z(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ge=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,ve=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,je=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function we(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?je:ve).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ge:he}function xe(e,n,t){if(!t)return[];const s=n.prefetchStrategy,o=Z(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ke(e,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function ke(e,n,t){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),m=i[l];m&&ee(a,r,s,t,m[1])}return s}function ee(e,n,t,s,o){const i=s+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)ee(e,n,a.imports,s,c)}t.push(a)}function Ne(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ee(e){const n={bundles:w(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function w(e){const n=[],t=s=>{if(Array.isArray(s))for(const o of s)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function ze(e){const n=new Map;let t=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Se(e,n,t){const s=Re(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ie(o,n,t),s.linkInsert==="html-append"&&Ce(o,n,s),s.linkInsert==="js-append"?Ae(o,n,s,t):s.workerFetchInsert==="always"&&Fe(o,n,t),o.length>0?u(z,{children:o}):null}function Ie(e,n,t){const s=ze(n);for(const o of s)e.push(u("link",{rel:"modulepreload",href:o,nonce:t}));e.push(u("script",{dangerouslySetInnerHTML:Ee(n),nonce:t}))}function Ce(e,n,t){const s=w(n),o=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ae(e,n,t,s){const o=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(w(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=E(),i+="}"),t.workerFetchInsert==="always"&&(i+=E()),e.push(u("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Fe(e,n,t){let s=`const u=${JSON.stringify(w(n))};`;s+=E(),e.push(u("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Re(e){return e&&typeof e=="object"?e:Te}var Te={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Pe="<!DOCTYPE html>";async function Ke(e,n){var T;let t=n.stream,s=0,o=0,i=0,a=0,r="",c;const l=((T=n.streaming)==null?void 0:T.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",v=n.containerAttributes??{},g=t,te=k(),se=Z(n),p=ne(n.manifest);function S(){r&&(g.write(r),r="",s=0,i++,i===1&&(a=te()))}function I(d){const f=d.length;s+=f,o+=f,r+=d}switch(l.strategy){case"disabled":t={write:I};break;case"direct":t=g;break;case"auto":let d=0,f=!1;const P=l.maximunChunk??0,x=l.maximunInitialChunk??0;t={write(b){b==="<!--qkssr-f-->"?f||(f=!0):b==="<!--qkssr-pu-->"?d++:b==="<!--qkssr-po-->"?d--:I(b),d===0&&(f||s>=(i===0?x:P))&&(f=!1,S())}};break}m==="html"?t.write(Pe):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await be(n,p);const C=p==null?void 0:p.manifest.injections,ie=C?C.map(d=>u(d.tag,d.attributes??{})):void 0,oe=k(),A=[];let F=0,R=0;await le(e,{stream:t,containerTagName:m,containerAttributes:v,serverData:n.serverData,base:se,beforeContent:ie,beforeClose:async(d,f,P,x)=>{var $,Q,D,U,M,G,B;F=oe();const b=k();c=await de(d,f,void 0,x);const q=[];if(n.prefetchStrategy!==null){const _=xe(c,n,p);if(_.length>0){const Y=Se(n.prefetchStrategy,_,($=n.serverData)==null?void 0:$.nonce);Y&&q.push(Y)}}const ae=JSON.stringify(c.state,void 0,void 0);q.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Le(ae),nonce:(Q=n.serverData)==null?void 0:Q.nonce})),c.funcs.length>0&&q.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:$e(c.funcs),nonce:(D=n.serverData)==null?void 0:D.nonce}));const ce=!c||c.mode!=="static",K=((U=n.qwikLoader)==null?void 0:U.include)??"auto",L=K==="always"||K==="auto"&&ce;if(L){const _=we({events:(M=n.qwikLoader)==null?void 0:M.events,debug:n.debug});q.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:_,nonce:(G=n.serverData)==null?void 0:G.nonce}))}const H=Array.from(f.$events$,_=>JSON.stringify(_));if(H.length>0){let _=`window.qwikevents.push(${H.join(", ")})`;L||(_=`window.qwikevents||=[];${_}`),q.push(u("script",{dangerouslySetInnerHTML:_,nonce:(B=n.serverData)==null?void 0:B.nonce}))}return He(A,d),R=b(),u(z,{children:q})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),S();const re=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!re,timing:{render:F,snapshot:R,firstFlush:a},_symbols:A}}function ne(e){if(e){if("mapper"in e)return e;if(e=Ne(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[N(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Le=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function He(e,n){var t;for(const s of n){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function $e(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function Oe(e){const n=W({manifest:e},ne(e));J(n)}const Qe={manifestHash:"1965s9",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26193,35156]},s_SgPauQ1y1yA:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_sgpauq1y1ya",hash:"SgPauQ1y1yA",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_MaGHfJVfpHg",loc:[391,623]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37109,38760]},s_AqerRz6SPa4:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_aqerrz6spa4",hash:"AqerRz6SPa4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[159,1082]},s_Ay6n7bYyssU:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component",canonicalFilename:"s_ay6n7byyssu",hash:"Ay6n7bYyssU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[165,2448]},s_BdGZ0ta0PG0:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_bdgz0ta0pg0",hash:"BdGZ0ta0PG0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[244,978]},s_GnEcn2Pd5bE:{origin:"components/starter/gauge/index.tsx",displayName:"gauge_component",canonicalFilename:"s_gnecn2pd5be",hash:"GnEcn2Pd5bE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[116,1127]},s_Js8xrjx23qQ:{origin:"components/starter/infobox/infobox.tsx",displayName:"infobox_component",canonicalFilename:"s_js8xrjx23qq",hash:"Js8xrjx23qQ",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[124,261]},s_MaGHfJVfpHg:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_maghfjvfphg",hash:"MaGHfJVfpHg",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,1545]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48714,50065]},s_RvGFPm4MX8Y:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component",canonicalFilename:"s_rvgfpm4mx8y",hash:"RvGFPm4MX8Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[162,732]},s_Sq1mgzbJKRk:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_sq1mgzbjkrk",hash:"Sq1mgzbJKRk",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[565,1631]},s_Tu1RmKizfXw:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component",canonicalFilename:"s_tu1rmkizfxw",hash:"Tu1RmKizfXw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1800,3048]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[22923,35443]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35727,36990]},s_YEH7vHTD0gY:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_yeh7vhtd0gy",hash:"YEH7vHTD0gY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[926,1066]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_iFAlXaB4apk:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_ifalxab4apk",hash:"iFAlXaB4apk",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[372,3050]},s_jK349VPX2No:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_jk349vpx2no",hash:"jK349VPX2No",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_kcI2UTnkhVU:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_kci2utnkhvu",hash:"kcI2UTnkhVU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[172,551]},s_1bJQUrIQ0Fk:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component_div_div_button_onClick",canonicalFilename:"s_1bjquriq0fk",hash:"1bJQUrIQ0Fk",ctxKind:"eventHandler",ctxName:"onClick$",captures:!1,parent:"s_Ay6n7bYyssU",loc:[555,2190]},s_QaC0ME0KH0U:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_qac0me0kh0u",hash:"QaC0ME0KH0U",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_YEH7vHTD0gY",loc:[947,953]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[22978,23012]},s_PJNSTnE0hAE:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_pjnstne0hae",hash:"PJNSTnE0hAE",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_MaGHfJVfpHg",loc:[270,276]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40128,41762]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44776,46600]},s_88esEY5EiTw:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_setCount",canonicalFilename:"s_88esey5eitw",hash:"88esEY5EiTw",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_RvGFPm4MX8Y",loc:[223,340]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36128,36189]},s_GazucFB6qN4:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick",canonicalFilename:"s_gazucfb6qn4",hash:"GazucFB6qN4",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_Tu1RmKizfXw",loc:[2697,2729]},s_KzjD6pHmKnY:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_useOnWindow",canonicalFilename:"s_kzjd6phmkny",hash:"KzjD6pHmKnY",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_Tu1RmKizfXw",loc:[1888,1996]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37636,37699]},s_eG9Ezt1Gk8I:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_eg9ezt1gk8i",hash:"eG9Ezt1Gk8I",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_MaGHfJVfpHg",loc:[938,1029]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24262,25581]},s_g0R3iBFnoo8:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick_1",canonicalFilename:"s_g0r3ibfnoo8",hash:"g0R3iBFnoo8",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_RvGFPm4MX8Y",loc:[648,679]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37817,38332]},s_ifCGrFgoVjc:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick",canonicalFilename:"s_ifcgrfgovjc",hash:"ifCGrFgoVjc",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_RvGFPm4MX8Y",loc:[472,503]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49021,49718]},s_qa0fGo20qj0:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick_1",canonicalFilename:"s_qa0fgo20qj0",hash:"qa0fGo20qj0",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_Tu1RmKizfXw",loc:[2937,2973]}},mapping:{s_02wMImzEAbk:"q-45462549.js",s_SgPauQ1y1yA:"q-edf5a556.js",s_8gdLBszqbaM:"q-463a15bd.js",s_AqerRz6SPa4:"q-2176e3f1.js",s_Ay6n7bYyssU:"q-6776c0d5.js",s_BdGZ0ta0PG0:"q-24e61810.js",s_GnEcn2Pd5bE:"q-464af855.js",s_Js8xrjx23qQ:"q-8a1a0658.js",s_MaGHfJVfpHg:"q-edf5a556.js",s_Nk9PlpjQm9Y:"q-5a8ce740.js",s_RvGFPm4MX8Y:"q-79567f05.js",s_Sq1mgzbJKRk:"q-3700841a.js",s_Tu1RmKizfXw:"q-ec2771bd.js",s_TxCFOy819ag:"q-45462549.js",s_WmYC5H00wtI:"q-a7f17cca.js",s_YEH7vHTD0gY:"q-db8a3718.js",s_e0ssiDXoeAM:"q-c33e0c82.js",s_iFAlXaB4apk:"q-56420305.js",s_jK349VPX2No:"q-0f0427bc.js",s_kcI2UTnkhVU:"q-d96b320d.js",s_1bJQUrIQ0Fk:"q-bcd83555.js",s_QaC0ME0KH0U:"q-db8a3718.js",s_RPDJAz33WLA:"q-45462549.js",s_PJNSTnE0hAE:"q-edf5a556.js",s_A5bZC7WO00A:"q-8eedcea2.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-c63437e6.js",s_88esEY5EiTw:"q-79567f05.js",s_BUbtvTyvVRE:"q-a7f17cca.js",s_GazucFB6qN4:"q-ec2771bd.js",s_KzjD6pHmKnY:"q-ec2771bd.js",s_eBQ0vFsFKsk:"q-f3c07ff0.js",s_eG9Ezt1Gk8I:"q-edf5a556.js",s_fX0bDjeJa0E:"q-45462549.js",s_g0R3iBFnoo8:"q-79567f05.js",s_i1Cv0pYJNR0:"q-463a15bd.js",s_ifCGrFgoVjc:"q-79567f05.js",s_p9MSze0ojs4:"q-5a8ce740.js",s_qa0fGo20qj0:"q-ec2771bd.js"},bundles:{"q-0829ec19.js":{size:9308,imports:["q-a3261d2d.js"],dynamicImports:["q-45462549.js","q-5a8ce740.js","q-663033b0.js","q-8eedcea2.js","q-c33e0c82.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-0f0427bc.js":{size:541,imports:["q-0829ec19.js","q-a3261d2d.js"],dynamicImports:["q-24e61810.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_jk349vpx2no.js"],symbols:["s_jK349VPX2No"]},"q-2176e3f1.js":{size:3824,imports:["q-a3261d2d.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_aqerrz6spa4.js"],symbols:["s_AqerRz6SPa4"]},"q-24e61810.js":{size:765,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_RouterHead.js","src/s_bdgz0ta0pg0.js"],symbols:["s_BdGZ0ta0PG0"]},"q-2b585fd1.js":{size:1667,imports:["q-a3261d2d.js"],dynamicImports:["q-ec2771bd.js"],origins:["src/components/starter/next-steps/next-steps.tsx"]},"q-3700841a.js":{size:1202,imports:["q-0829ec19.js","q-a3261d2d.js","q-d28dd5b0.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_sq1mgzbjkrk.js"],symbols:["s_Sq1mgzbJKRk"]},"q-45462549.js":{size:5847,imports:["q-0829ec19.js","q-a3261d2d.js"],dynamicImports:["q-7ddc901f.js","q-906f4370.js","q-a33add36.js","q-b99fb7c8.js","q-d28dd5b0.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-463a15bd.js":{size:1144,imports:["q-0829ec19.js","q-a3261d2d.js"],dynamicImports:["q-f3c07ff0.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-464af855.js":{size:955,imports:["q-a3261d2d.js"],origins:["src/components/starter/gauge/gauge.module.css?used","src/entry_gauge.js","src/s_gnecn2pd5be.js"],symbols:["s_GnEcn2Pd5bE"]},"q-56420305.js":{size:2833,imports:["q-2b585fd1.js","q-a3261d2d.js"],dynamicImports:["q-6776c0d5.js","q-79567f05.js","q-8a1a0658.js"],origins:["src/components/starter/counter/counter.tsx","src/components/starter/hero/hero.tsx","src/components/starter/infobox/infobox.tsx","src/entry_routes.js","src/s_ifalxab4apk.js"],symbols:["s_iFAlXaB4apk"]},"q-5a8ce740.js":{size:1037,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6776c0d5.js":{size:1146,imports:["q-a3261d2d.js"],dynamicImports:["q-bcd83555.js"],origins:["src/components/starter/hero/hero.module.css?used","src/entry_hero.js","src/media/thunder.png?jsx","src/s_ay6n7byyssu.js"],symbols:["s_Ay6n7bYyssU"]},"q-79567f05.js":{size:1168,imports:["q-a3261d2d.js"],dynamicImports:["q-464af855.js"],origins:["src/components/starter/counter/counter.module.css?used","src/components/starter/gauge/index.tsx","src/entry_counter.js","src/s_88esey5eitw.js","src/s_g0r3ibfnoo8.js","src/s_ifcgrfgovjc.js","src/s_rvgfpm4mx8y.js"],symbols:["s_88esEY5EiTw","s_g0R3iBFnoo8","s_ifCGrFgoVjc","s_RvGFPm4MX8Y"]},"q-7ddc901f.js":{size:305,imports:["q-a3261d2d.js"],dynamicImports:["q-56420305.js"],origins:["src/routes/index.tsx"]},"q-8a1a0658.js":{size:261,imports:["q-a3261d2d.js"],origins:["src/components/starter/infobox/infobox.module.css?used","src/entry_infobox.js","src/s_js8xrjx23qq.js"],symbols:["s_Js8xrjx23qQ"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.11/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-8eedcea2.js":{size:746,imports:["q-a3261d2d.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-906f4370.js":{size:380,imports:["q-0829ec19.js","q-a3261d2d.js"],dynamicImports:["q-db8a3718.js"],origins:["src/routes/layout.tsx"]},"q-a3261d2d.js":{size:49255,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.11_undici@5.24.0/node_modules/@builder.io/qwik/core.min.mjs"]},"q-a33add36.js":{size:236,imports:["q-a3261d2d.js"],dynamicImports:["q-edf5a556.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-a7f17cca.js":{size:787,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-b99fb7c8.js":{size:125,imports:["q-a3261d2d.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-bcd83555.js":{size:695,origins:["src/s_1bjquriq0fk.js"],symbols:["s_1bJQUrIQ0Fk"]},"q-c33e0c82.js":{size:467,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-c63437e6.js":{size:889,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-d1605d9f.js":{size:202,imports:["q-a3261d2d.js"],dynamicImports:["q-0f0427bc.js"],origins:["src/global.css","src/root.tsx"]},"q-d28dd5b0.js":{size:411,imports:["q-0829ec19.js","q-a3261d2d.js"],dynamicImports:["q-3700841a.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-d96b320d.js":{size:550,imports:["q-0829ec19.js","q-906f4370.js","q-a3261d2d.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_kci2utnkhvu.js"],symbols:["s_kcI2UTnkhVU"]},"q-db8a3718.js":{size:5396,imports:["q-a3261d2d.js"],dynamicImports:["q-2176e3f1.js","q-d96b320d.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_qac0me0kh0u.js","src/s_yeh7vhtd0gy.js"],symbols:["s_QaC0ME0KH0U","s_YEH7vHTD0gY"]},"q-ec2771bd.js":{size:1503,imports:["q-2b585fd1.js","q-a3261d2d.js"],origins:["src/components/starter/next-steps/next-steps.module.css?used","src/entry_next_steps.js","src/s_gazucfb6qn4.js","src/s_kzjd6phmkny.js","src/s_qa0fgo20qj0.js","src/s_tu1rmkizfxw.js"],symbols:["s_GazucFB6qN4","s_KzjD6pHmKnY","s_qa0fGo20qj0","s_Tu1RmKizfXw"]},"q-edf5a556.js":{size:2688,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_eg9ezt1gk8i.js","src/s_maghfjvfphg.js","src/s_pjnstne0hae.js","src/s_sgpauq1y1ya.js"],symbols:["s_eG9Ezt1Gk8I","s_MaGHfJVfpHg","s_PJNSTnE0hAE","s_SgPauQ1y1yA"]},"q-f3c07ff0.js":{size:128,imports:["q-0829ec19.js","q-a3261d2d.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-027f67b0.css",dangerouslySetInnerHTML:`._counter-wrapper_43sys_1{margin-top:50px;display:flex;align-items:center;justify-content:center;gap:10px}@media screen and (min-width: 768px){._counter-wrapper_43sys_1{gap:30px}}._anchor_1g8hj_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none;line-height:1.5}._anchor_1g8hj_1 span:not(._spacer_1g8hj_10){display:block}._spacer_1g8hj_10{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1g8hj_1 span{display:inline!important}}._wrapper_1v6hy_1{position:relative}._gauge_1v6hy_5{width:160px}._value_1v6hy_9{position:absolute;top:50%;left:50%;color:#fff;font-size:3rem;transform:translate(-50%,-50%);width:200px;text-align:center}@media screen and (min-width: 768px){._gauge_1v6hy_5{width:400px}._value_1v6hy_9{font-size:7rem}}._wrapper_tofv3_1{display:flex;align-items:center;justify-content:space-between}._logo_tofv3_7{display:inline-block}._logo_tofv3_7 a{display:block}._header_tofv3_14 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_tofv3_14 li{display:none;margin:0;padding:0;font-size:.7rem}._header_tofv3_14 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_tofv3_14 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_tofv3_14 li{display:inline-block}}._hero_resu5_1{display:flex;vertical-align:middle;flex-direction:column;flex-wrap:nowrap;align-items:center;height:450px;justify-content:center;gap:40px}._hero-image_resu5_12{width:100%;position:absolute;height:auto;object-fit:cover;z-index:-1;opacity:.2;pointer-events:none}._hero_resu5_1 p{color:#fff;margin:0;font-size:1rem}._button-group_resu5_28{display:flex;flex-direction:row;gap:24px}@media screen and (min-width: 768px){._hero_resu5_1{gap:60px;height:500px}._hero_resu5_1 p{font-size:1.3rem}}._infobox_oa4r7_1{color:#fff;font-size:.8rem;line-height:2;margin:0 0 40px}._infobox_oa4r7_1 h3{font-size:1rem;font-weight:400;margin:0 0 15px;padding:0}._infobox_oa4r7_1 li{line-height:2.5}@media screen and (min-width: 600px){._infobox_oa4r7_1{margin:0}}._gettingstarted_32zqp_1{display:flex;color:#fff;flex-direction:column;justify-content:center;align-items:center;height:280px;line-height:1.5;gap:10px;max-width:600px;margin:0 auto}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1rem;width:100%;word-break:break-word}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:.8rem}._gettingstarted_32zqp_1 ._hint_32zqp_19 a{color:var(--qwik-dark-purple)}@media screen and (min-width: 768px){._gettingstarted_32zqp_1{height:180px}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1.2rem}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:1rem}}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: #151934;--qwik-dark-text: #ffffff}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.11",vite:"",rollup:"3.29.1",env:"node",os:"darwin",node:"18.15.0"}},De=()=>{const e=me(),n=ue();return h(z,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:pe(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),y("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>j("meta",{...t},null,0,t.key)),e.links.map(t=>j("link",{...t},null,0,t.key)),e.styles.map(t=>j("style",{...t.props,dangerouslySetInnerHTML:O(t,"style")},null,0,t.key)),e.scripts.map(t=>j("script",{...t.props,dangerouslySetInnerHTML:O(t,"script")},null,0,t.key))]},1,"SI_0")},Ue=V(X(De,"s_BdGZ0ta0PG0"));const Me=()=>h(ye,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),h(Ue,null,3,"n0_0"),h(fe,null,3,"n0_1")],1,null),y("body",null,{lang:"en"},h(_e,null,3,"n0_2"),1,null)]},1,"n0_3"),Ge=V(X(Me,"s_jK349VPX2No"));function Je(e){return Ke(h(Ge,null,3,"oE_0"),{manifest:Qe,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Qe as m,Je as r,Oe as s};
