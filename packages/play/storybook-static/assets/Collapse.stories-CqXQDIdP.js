import{c as y,s as w,B as D,y as N,t as S}from"./index-DB1r8lHb.js";import{d as V,e as T,y as j,w as z,p as H,o as x,l as B,m as d,b as L,f as O,z as r,s as p,n as u,q,A,B as F,j as G,T as J,C as K,D as P,E as M,F as Q}from"./vue.esm-bundler-qIcVaKWD.js";const I=Symbol("collapseContext"),R={class:"er-collapse"},U="ErCollapse",W=y(V({name:U,__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:n}){const s=e,i=n,o=T(s.modelValue);function a(t){o.value=t,N(["update:modelValue","change"],l=>i(l,t))}return j(()=>{s.accordion&&o.value.length>1&&S()}),z(()=>s.modelValue,t=>a(t)),H(I,{activeNames:o,handleItemClick:function(t){let l=[...o.value];if(s.accordion)return l=[l[0]===t?"":t],void a(l);const m=l.indexOf(t);m>-1?l.splice(m,1):l.push(t),a(l)}}),(t,l)=>(x(),B("div",R,[d(t.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-f7a87c06"]]),v=e=>e.style.height="0px",h=e=>e.style.height=`${e.scrollHeight}px`,f=e=>e.style.height="",b=e=>e.style.overflow="hidden",g=e=>e.style.overflow="",X={beforeEnter(e){v(e),b(e)},enter:e=>h(e),afterEnter(e){f(e),g(e)},beforeLeave(e){h(e),b(e)},leave:e=>v(e),afterLeave(e){f(e),g(e)}},Y=["id"],Z={class:"er-collapse-item__title"},ee={class:"er-collapse-item__wapper"},ae=["id"],te=y(V({name:"ErCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const n=e,s=L(I),i=O(()=>{var a;return(a=s==null?void 0:s.activeNames.value)==null?void 0:a.includes(n.name)});function o(){n.disabled||(s==null||s.handleItemClick(n.name))}return(a,t)=>(x(),B("div",{class:u(["er-collapse-item",{"is-disabled":a.disabled}])},[r("div",{class:u(["er-collapse-item__header",{"is-disabled":a.disabled,"is-active":i.value}]),id:`item-header-${a.name}`,onClick:o},[r("span",Z,[d(a.$slots,"title",{},()=>[K(P(a.title),1)],!0)]),p(D,{icon:"angle-right",class:"header-angle"})],10,Y),p(J,A({name:"slide"},F(G(X))),{default:q(()=>[M(r("div",ee,[r("div",{class:"er-collapse-item__content",id:`item-content-${a.name}`},[d(a.$slots,"default",{},void 0,!0)],8,ae)],512),[[Q,i.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-ca4956eb"]]),$=w(W),k=w(te),oe={title:"Example/Collapse",component:$,subcomponents:{ErCollapseItem:k},tags:["autodocs"]},c={render:e=>({components:{ErCollapse:$,ErCollapseItem:k},setup(){return{args:e}},template:`
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var _,C,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ErCollapse,
      ErCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <er-collapse v-bind="args">
      <er-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </er-collapse-item>
      <er-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </er-collapse-item>
      <er-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </er-collapse-item>
    </er-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ["a"]
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const ne=["Default"];export{c as Default,ne as __namedExportsOrder,oe as default};
