/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
import{d as b,r as m,k as x,w as k,o as r,l as c,u as t,F as v,q as a,t as p,E as C,v as o,x as h,y as E,z as d,A as S,B as D,C as V,D as g,G as B,H as T,I as U}from"./element-plus-ornEJGRK.js";const H={key:0},L={m:"3"},$={m:"t-0 b-2"},j=["href"],N=b({__name:"DataTable",setup(n){const l=m(!1);var e=m(null),s=m(null);x(async()=>{const u=await(await fetch("/static_data.json")).json();e.value=u,s.value=e.value.filter(i=>i.num_bugs>3)}),k(l,()=>{console.log(l.value),l.value?s.value=e.value:e.value!==null&&(s.value=e.value.filter(_=>_.num_bugs>3))});const f=(_,u)=>u.category===_;return(_,u)=>(r(),c("div",null,[t(s)===null?(r(),c("p",H,"Loading...")):(r(),c(v,{key:1},[a(t(C),{data:t(s),"w-screen-md":"",border:"",stripe:"","highlight-current-row":""},{default:p(()=>[a(t(d),{prop:"category",label:"Category",width:"100","column-key":"category",filters:[{text:"UI Content",value:"UI Content"},{text:"UI Layout",value:"UI Layout"},{text:"Interaction",value:"Interaction"}],"filter-method":f}),a(t(d),{prop:"principle",label:"Principle"}),a(t(d),{prop:"num_bugs",label:"# Bugs",width:"100",align:"center"}),a(t(d),{type:"expand"},{header:p(()=>[a(t(S),{content:"Click to expand all bugs. Each one is linked to a GitHub Issue page.",placement:"top"},{default:p(()=>[a(t(D),{class:"info-icon"},{default:p(()=>[a(t(V))]),_:1})]),_:1})]),default:p(i=>[o("div",L,[o("p",$,[o("strong",null,g(i.row.principle),1)]),o("p",null,[h(" All bug report(s) that violated this principle: "),(r(!0),c(v,null,B(i.row.links,(y,I)=>(r(),c("span",null,[o("a",{href:y,target:"_blank"},g(I),9,j),h(", ")]))),256))])])]),_:1})]),_:1},8,["data"]),o("p",null,[h("Show all 362 principles: "),a(t(E),{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=i=>l.value=i)},null,8,["modelValue"])])],64))]))}}),A=n=>(T("data-v-40eeeb47"),n=n(),U(),n),F=A(()=>o("hr",null,null,-1)),G=b({__name:"HelloWorld",props:{msg:{}},setup(n){return(l,e)=>(r(),c(v,null,[o("h1",null,g(l.msg),1),F,a(N)],64))}}),w=(n,l)=>{const e=n.__vccOpts||n;for(const[s,f]of l)e[s]=f;return e},P=w(G,[["__scopeId","data-v-40eeeb47"]]),W={},q={class:"home"};function z(n,l){const e=P;return r(),c("div",q,[a(e,{msg:"Common Sense Principles"})])}const O=w(W,[["render",z],["__scopeId","data-v-e4127020"]]);export{O as default};