if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const t=e=>i(e,a),o={module:{uri:a},exports:l,require:t};s[a]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"ae0b4648b1fc0d01500c9695d064cf67"},{url:"alipay.svg",revision:"d945e8f5bb6a35270cd5e898c374c2aa"},{url:"api-key-example.png",revision:"c73c184cff09db4c8bc5151fb409437f"},{url:"assets/alipay.-diSpgbo.svg",revision:null},{url:"assets/api-key-example.SIPTn648.png",revision:null},{url:"assets/app.xqIV4-e1.js",revision:null},{url:"assets/authorization-example.leEae7jJ.png",revision:null},{url:"assets/basic-example.CoMW3lqT.png",revision:null},{url:"assets/bearer-example.lpf3RrOY.png",revision:null},{url:"assets/ca.nNs_61aX.png",revision:null},{url:"assets/cache-flow-example._5wtAKjI.png",revision:null},{url:"assets/cazhegnshu.BG1hVZCx.png",revision:null},{url:"assets/chunks/framework.jWGKUnDR.js",revision:null},{url:"assets/chunks/mitmattack.o9VRSLED.js",revision:null},{url:"assets/chunks/theme.0WvG2cQa.js",revision:null},{url:"assets/chunks/virtual_pwa-register._PE6UgQp.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"assets/cookie-example.YqSHohrE.png",revision:null},{url:"assets/cors-simple-request.FryEr53k.png",revision:null},{url:"assets/cross-origin-request.4C8gsbtD.png",revision:null},{url:"assets/date-condition-request.tQmjNF23.png",revision:null},{url:"assets/digest-example.OOQ6z8rw.png",revision:null},{url:"assets/docs_authentication-strategy_authorization.md.fSHdXOJF.js",revision:null},{url:"assets/docs_authentication-strategy_authorization.md.fSHdXOJF.lean.js",revision:null},{url:"assets/docs_authentication-strategy_cookie.md.diuf3QIo.js",revision:null},{url:"assets/docs_authentication-strategy_cookie.md.diuf3QIo.lean.js",revision:null},{url:"assets/docs_content-negotiation_condition-request.md.FNkKQtIH.js",revision:null},{url:"assets/docs_content-negotiation_condition-request.md.FNkKQtIH.lean.js",revision:null},{url:"assets/docs_content-negotiation_range-request.md.4prU-TLy.js",revision:null},{url:"assets/docs_content-negotiation_range-request.md.4prU-TLy.lean.js",revision:null},{url:"assets/docs_overview_http-message-format.md.zS7Ad27V.js",revision:null},{url:"assets/docs_overview_http-message-format.md.zS7Ad27V.lean.js",revision:null},{url:"assets/docs_overview_the-history-of-http.md.Tleu6m7o.js",revision:null},{url:"assets/docs_overview_the-history-of-http.md.Tleu6m7o.lean.js",revision:null},{url:"assets/docs_performance-optimization-strategy_data-compression.md.dL-niaqc.js",revision:null},{url:"assets/docs_performance-optimization-strategy_data-compression.md.dL-niaqc.lean.js",revision:null},{url:"assets/docs_performance-optimization-strategy_http-cache.md.bVhgWQzW.js",revision:null},{url:"assets/docs_performance-optimization-strategy_http-cache.md.bVhgWQzW.lean.js",revision:null},{url:"assets/docs_performance-optimization-strategy_long-connection-and-short-connection.md.QFuJqKSW.js",revision:null},{url:"assets/docs_performance-optimization-strategy_long-connection-and-short-connection.md.QFuJqKSW.lean.js",revision:null},{url:"assets/docs_security-strategy_common-attack-and-protection-methods.md.v_zZJ5Jn.js",revision:null},{url:"assets/docs_security-strategy_common-attack-and-protection-methods.md.v_zZJ5Jn.lean.js",revision:null},{url:"assets/docs_security-strategy_content-security-policy.md.ctZja16E.js",revision:null},{url:"assets/docs_security-strategy_content-security-policy.md.ctZja16E.lean.js",revision:null},{url:"assets/docs_security-strategy_cross-origin-resource-sharing.md.yvF-Xb4O.js",revision:null},{url:"assets/docs_security-strategy_cross-origin-resource-sharing.md.yvF-Xb4O.lean.js",revision:null},{url:"assets/docs_security-strategy_rescue-insecure-http-https.md.an8WBkFe.js",revision:null},{url:"assets/docs_security-strategy_rescue-insecure-http-https.md.an8WBkFe.lean.js",revision:null},{url:"assets/docs_security-strategy_same-origin-policy.md.R18D90xr.js",revision:null},{url:"assets/docs_security-strategy_same-origin-policy.md.R18D90xr.lean.js",revision:null},{url:"assets/docs_support.md.9i-iYiqO.js",revision:null},{url:"assets/docs_support.md.9i-iYiqO.lean.js",revision:null},{url:"assets/double-au-example.i6d5Pn6a.png",revision:null},{url:"assets/duichengjiami.UmQTxK_0.png",revision:null},{url:"assets/end-to-end-compress.8dZ8v5-B.png",revision:null},{url:"assets/feiduichengjiami.eAf6rUOA.png",revision:null},{url:"assets/http-message-format-summary.l4RNElJl.png",revision:null},{url:"assets/http-message-format.Tet8PKhn.png",revision:null},{url:"assets/httpresume3.0jbOo_RR.png",revision:null},{url:"assets/httpresume4.GiQMPjbs.png",revision:null},{url:"assets/https-work-flow.7vSAGCgB.png",revision:null},{url:"assets/https.sIIeI-l3.png",revision:null},{url:"assets/if-range-header-example.cmy06oIO.png",revision:null},{url:"assets/if-range-last-modified-header-example.9Lt6XXNu.png",revision:null},{url:"assets/image-20230911215957339.4wO7bUBb.png",revision:null},{url:"assets/image-20230911220050215.t2LbGus3.png",revision:null},{url:"assets/image-20230911220153912.Gac_jZcH.png",revision:null},{url:"assets/image-20230912104215653.qf5nHDZf.png",revision:null},{url:"assets/image-20230912110935151.qeFRUc_R.png",revision:null},{url:"assets/index.md.Zh-aGtgD.js",revision:null},{url:"assets/index.md.Zh-aGtgD.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",revision:null},{url:"assets/inter-italic-cyrillic.-nLMcIwj.woff2",revision:null},{url:"assets/inter-italic-greek-ext.hznxWNZO.woff2",revision:null},{url:"assets/inter-italic-greek.PSfer2Kc.woff2",revision:null},{url:"assets/inter-italic-latin-ext.RnFly65-.woff2",revision:null},{url:"assets/inter-italic-latin.27E69YJn.woff2",revision:null},{url:"assets/inter-italic-vietnamese.xzQHe1q1.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",revision:null},{url:"assets/inter-roman-cyrillic.jIZ9REo5.woff2",revision:null},{url:"assets/inter-roman-greek-ext.9JiNzaSO.woff2",revision:null},{url:"assets/inter-roman-greek.Cb5wWeGA.woff2",revision:null},{url:"assets/inter-roman-latin-ext.GZWE-KO4.woff2",revision:null},{url:"assets/inter-roman-latin.bvIUbFQP.woff2",revision:null},{url:"assets/inter-roman-vietnamese.paY3CzEB.woff2",revision:null},{url:"assets/keyed-with-url-and-language.rfmApQN9.png",revision:null},{url:"assets/keyed-with-url.38AYl1hQ.png",revision:null},{url:"assets/link.LIoLsdYS.png",revision:null},{url:"assets/mapping.2xBEnYC1.png",revision:null},{url:"assets/mid-to-mid-compress.tp5FKvLF.png",revision:null},{url:"assets/mitmattack.WEMTmXgA.png",revision:null},{url:"assets/net.z-9jomc4.png",revision:null},{url:"assets/no-have-cache-example.rJRNBclw.png",revision:null},{url:"assets/pre-request-example.YBBs1jHH.png",revision:null},{url:"assets/private-public-cache.Bv38zo3j.png",revision:null},{url:"assets/range-request-example.1Xkfy1vb.png",revision:null},{url:"assets/range-request-wanzheng.0N9983zX.png",revision:null},{url:"assets/request-collapse.JMwmlAxT.png",revision:null},{url:"assets/Spriting.usyIx4pg.png",revision:null},{url:"assets/start-line-format.7_QQk7fD.png",revision:null},{url:"assets/style.SSIdxedq.css",revision:null},{url:"assets/version-condition-request.InDP_Mkq.png",revision:null},{url:"assets/wechatpay.LC6A2mKq.svg",revision:null},{url:"assets/xinrenglian.4SJeR1J5.png",revision:null},{url:"authorization-example.png",revision:"ec51976e2005675198f5512a340621a1"},{url:"basic-example.png",revision:"be45142aab7e988af1691790b6d85776"},{url:"bearer-example.png",revision:"56a4391110563b843cab4879c3bdea97"},{url:"ca.png",revision:"e224cbb44de0406b98a910a96e92c5ce"},{url:"cache-flow-example.png",revision:"8cdced65d7e13c0650b73c681fc13dc1"},{url:"cazhegnshu.png",revision:"0dc3226f899ea79d97c1be8aee06728e"},{url:"cookie-example.png",revision:"39430525d1ea5fd49f651c3216a1e808"},{url:"cors-simple-request.png",revision:"8e710669cf2526e8b472b982ced959df"},{url:"cross-origin-request.png",revision:"4b06951167e65383310489d822f3510e"},{url:"date-condition-request.png",revision:"34c851a46daaabee88dcae6b4002d5a7"},{url:"digest-example.png",revision:"ee7e7d8a3096a8686b1e3e918f99e456"},{url:"docs/authentication-strategy/authorization.html",revision:"b149e0f4f847da31db51cb5507267ffb"},{url:"docs/authentication-strategy/cookie.html",revision:"87da28ef3aecfc587219e072906760f1"},{url:"docs/content-negotiation/condition-request.html",revision:"6803920dccb03d32b3bb87e820e00439"},{url:"docs/content-negotiation/range-request.html",revision:"8f08a2cefae5714b87dec60dfe21f0f1"},{url:"docs/overview/http-message-format.html",revision:"e49a35105293afcf3e6f9981efe3f335"},{url:"docs/overview/the-history-of-http.html",revision:"c5cdbafdae067f43e13efcab7a68aab1"},{url:"docs/performance-optimization-strategy/data-compression.html",revision:"fbc5103d9619c8d4864129087804fae8"},{url:"docs/performance-optimization-strategy/http-cache.html",revision:"6fbb0fbeb06310bdef081fe1c98d0c5b"},{url:"docs/performance-optimization-strategy/long-connection-and-short-connection.html",revision:"19062dfcdc426193e70bea838158c16a"},{url:"docs/security-strategy/common-attack-and-protection-methods.html",revision:"3f14cca603ba6294909c0ef7028235bf"},{url:"docs/security-strategy/content-security-policy.html",revision:"f6fa91e95dc963f276f7f1eb38e64a38"},{url:"docs/security-strategy/cross-origin-resource-sharing.html",revision:"86a47044a6db22a0dd04a253d0babb13"},{url:"docs/security-strategy/rescue-insecure-http-https.html",revision:"2733482a0af852431c706565bbff4d91"},{url:"docs/security-strategy/same-origin-policy.html",revision:"82880e59cc9e1e7601bd18391c0abd89"},{url:"docs/support.html",revision:"3e1ae68f17dce10c2ab5b2f9a5f49742"},{url:"double-au-example.png",revision:"65d211fcc066da9fa278cb33b4164657"},{url:"duichengjiami.png",revision:"cdd4a3a84f9ac4649dda103a858704fa"},{url:"end-to-end-compress.png",revision:"8629df26700387a5a078ffa2b536264c"},{url:"feiduichengjiami.png",revision:"1c3697f6bac82e361272988b62aab9c8"},{url:"http-message-format-summary.png",revision:"cda144f78a337e0a21bd81fc38296d1a"},{url:"http-message-format.png",revision:"056cc4c914f760bb4132865c3c043d56"},{url:"httpresume3.png",revision:"a207970b811449c3e1dad2ca75a3f18d"},{url:"httpresume4.png",revision:"191401fee4d3b266bcc6c3586eaa43a8"},{url:"https-work-flow.png",revision:"8640e02f487490ce6dc14c064a330601"},{url:"https.png",revision:"ab16e3e03bee3707fd76f7a6ba3b6569"},{url:"if-range-header-example.png",revision:"cdc26f8f8bf8989fe3a9d9ec2d474492"},{url:"if-range-last-modified-header-example.png",revision:"06e88ee682211367446a1a92c9f9364a"},{url:"image-20230911215957339.png",revision:"ceca97e9f1834ce0ac6b026000283759"},{url:"image-20230911220044790.png",revision:"5598118ddb09b05e9f8632e57869044f"},{url:"image-20230911220048543.png",revision:"5598118ddb09b05e9f8632e57869044f"},{url:"image-20230911220050215.png",revision:"5598118ddb09b05e9f8632e57869044f"},{url:"image-20230911220153912.png",revision:"c583c833a876c6cc3d834c495c09147d"},{url:"image-20230912104215653.png",revision:"c34f9bd94d043a042c802f0c97106298"},{url:"image-20230912110935151.png",revision:"753ff400d2aabfff6159f138d0cdf12f"},{url:"index.html",revision:"b5dbf51028782c81694db7c210bae0af"},{url:"keyed-with-url-and-language.png",revision:"44da322816990c45392d033161b5d6ec"},{url:"keyed-with-url.png",revision:"6550cb55b0e3bd10f520400d30c97c02"},{url:"link.png",revision:"aeb123aba705ac910bc669287d0d74af"},{url:"logo-128.svg",revision:"099c9cec87d7e1dbc24fc6d7b55fbda2"},{url:"logo-144.svg",revision:"77779611469480200a22b49db51537fe"},{url:"logo-256.svg",revision:"b4ba238c323becd93964ac67ecdd4a7f"},{url:"logo-512.svg",revision:"80fb1b9c65d49d3aff8cd4c8c0ba907e"},{url:"logo-64.svg",revision:"c649b025f76ce5f9b5ab1e7931cda985"},{url:"logo.svg",revision:"04ec5e9e520ef00379d890456f8ebd7e"},{url:"mapping.png",revision:"12358d77ab0c7953795af91fe189667a"},{url:"mid-to-mid-compress.png",revision:"f0937adc5fa88518a2e68edeb335b285"},{url:"mitmattack.png",revision:"41f7dcaa60af6cacc7ed3ed354d45f12"},{url:"net.png",revision:"b60413403b14a95c483979b05d90e91d"},{url:"no-have-cache-example.png",revision:"e4fcf54f1e749073cd2990ff672929b8"},{url:"pre-request-example.png",revision:"36dc82c42d63cef9cfbb2d506163a4da"},{url:"private-public-cache.png",revision:"930ce2e23c83fc084211cf5d5b4c8cf9"},{url:"range-request-example.png",revision:"7c098d690f31bc16b60ccbecbf3388c1"},{url:"range-request-wanzheng.png",revision:"039a342a1cfe5a81c5f1704c9761ba32"},{url:"request-collapse.png",revision:"211772a8602a8c7cfc3377694608bcb2"},{url:"Spriting.png",revision:"049292cce2a7445db3cae2708f4fed6f"},{url:"start-line-format.png",revision:"e8e7abcfa428bd590293ca040348b1ba"},{url:"version-condition-request.png",revision:"b79cd4128d5ced4f91e74a4c082ea2bc"},{url:"wechatpay.svg",revision:"81880fe2ca28e8831d549df573006433"},{url:"xinrenglian.png",revision:"99d314627e6487563cc0cd6b2b5a9960"},{url:"logo.svg",revision:"04ec5e9e520ef00379d890456f8ebd7e"},{url:"logo-64.svg",revision:"c649b025f76ce5f9b5ab1e7931cda985"},{url:"logo-128.svg",revision:"099c9cec87d7e1dbc24fc6d7b55fbda2"},{url:"logo-256.svg",revision:"b4ba238c323becd93964ac67ecdd4a7f"},{url:"logo-512.svg",revision:"80fb1b9c65d49d3aff8cd4c8c0ba907e"},{url:"manifest.webmanifest",revision:"aacca9d33d18784882f9a8f9509e3bf6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
