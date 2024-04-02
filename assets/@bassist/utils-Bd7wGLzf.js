/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
function e(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const t=typeof window<"u",r=/iPhone|phone|android|iPod|pad|iPad/i;function a(){return t?r.test(e()):!1}/Android/i.test(e());/iPhone|iPod|iPad|iOS/i.test(e());/uni-app|html5plus/.test(e());/MicroMessenger/i.test(e());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(e());/mqqbrowser|qqbrowser/i.test(e());/qzone\/.*_qz_([\d.]+)/i.test(e());/(weibo).*weibo__([\d.]+)/i.test(e());/(baiduboxapp)\/([\d.]+)/i.test(e());function s(i,{immediate:n}={immediate:!0}){t&&(n&&window.addEventListener("load",i,!1),window.addEventListener("orientationchange"in window?"orientationchange":"resize",i,!1))}t&&window.matchMedia("(prefers-color-scheme: dark)");t&&window.matchMedia("(prefers-color-scheme: light)");t&&window.matchMedia("(orientation: portrait)");t&&window.matchMedia("(orientation: landscape)");function d(){try{return"production"}catch{return}}d();function o(i){try{return i==="production"}catch{return!1}}o("development");o("test");o("production");export{s as Y,a as x};
