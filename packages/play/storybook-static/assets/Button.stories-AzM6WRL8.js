import{f as P,w as B,u,e as f}from"./index-Bxd1s5Zc.js";import{c as q,s as O,_ as Q,B as z}from"./index-DB1r8lHb.js";import{d as A,u as U,b as W,e as X,f as c,o as m,g as h,n as Y,j as Z,k as nn,p as tn,r as en,t as b,l as on,m as v,q as an,s as rn,v as _,x as S}from"./vue.esm-bundler-qIcVaKWD.js";const F=Symbol("buttonGroupContext"),sn=q(A({name:"ErButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:500}},emits:["click"],setup(t,{expose:o,emit:a}){const e=t,K=a,L=U(),r=W(F,void 0),x=X(),d=c(()=>(r==null?void 0:r.size)??e.size??""),g=c(()=>(r==null?void 0:r.type)??e.type??""),y=c(()=>e.disabled||(r==null?void 0:r.disabled)||!1),w=c(()=>({marginRight:L.default?"6px":"0px"})),E=n=>{K("click",n)},M=Q(E,e.throttleDuration);return o({ref:x,disabled:y,size:d,type:g}),(n,C)=>(m(),h(nn(n.tag),{ref_key:"_ref",ref:x,class:Y(["er-button",{[`er-button--${g.value}`]:g.value,[`er-button--${d.value}`]:d.value,"is-plain":n.plain,"is-round":n.round,"is-circle":n.circle,"is-disabled":y.value,"is-loading":n.loading}]),disabled:!(!y.value&&!n.loading)||void 0,type:n.tag==="button"?n.nativeType:void 0,autofocus:n.autofocus,onClick:C[0]||(C[0]=T=>n.useThrottle?Z(M)(T):E(T))},{default:an(()=>[n.loading?v(n.$slots,"loading",{key:0},()=>[rn(z,{class:"loading-icon",icon:n.loadingIcon??"spinner",style:_(w.value),size:"1x",spin:""},null,8,["icon","style"])],!0):S("",!0),n.icon&&!n.loading?(m(),h(z,{key:1,icon:n.icon,size:"1x",style:_(w.value)},null,8,["icon","style"])):S("",!0),v(n.$slots,"default",{},void 0,!0)]),_:3},8,["class","disabled","type","autofocus"]))}}),[["__scopeId","data-v-cda73a40"]]),cn={class:"er-button-group"},ln=q(A({name:"ErButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(t){const o=t;return tn(F,en({size:b(o,"size"),type:b(o,"type"),disabled:b(o,"disabled")})),(a,e)=>(m(),on("div",cn,[v(a.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-805472f5"]]),p=O(sn),J=O(ln),gn={title:"Example/Button",component:p,subcomponents:{ButtonGroup:J},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:P()}},k=t=>`
<div style="margin: 5px;">
  ${t}
</div>
`,l={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:t=>({components:{ErButton:p},setup(){return{args:t}},template:k('<er-button v-bind="args">{{args.content}}</er-button>')}),play:async({canvasElement:t,args:o,step:a})=>{const e=B(t);await a("click button",async()=>{await u.click(e.getByRole("button"))}),f(o.onClick).toHaveBeenCalled()}},s={args:{icon:"search"},render:t=>({components:{ErButton:p},setup(){return{args:t}},template:k(`
      <er-button circle v-bind="args"/>
    `)}),play:async({canvasElement:t,args:o,step:a})=>{const e=B(t);await a("click button",async()=>{await u.click(e.getByRole("button"))}),f(o.onClick).toHaveBeenCalled()}};s.parameters={};const i={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2"},render:t=>({components:{ErButton:p,ErButtonGroup:J},setup(){return{args:t}},template:k(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `)}),play:async({canvasElement:t,args:o,step:a})=>{const e=B(t);await a("click btn1",async()=>{await u.click(e.getByText("Button1"))}),await a("click btn2",async()=>{await u.click(e.getByText("Button2"))}),f(o.onClick).toHaveBeenCalled()}};var D,G,$;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    type: "primary",
    content: "Button"
  },
  render: args => ({
    components: {
      ErButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<er-button v-bind="args">{{args.content}}</er-button>\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    // 获取canvas元素的上下文
    const canvas = within(canvasElement);
    // 执行点击按钮的操作
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    // 验证onClick函数是否被调用
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...($=(G=l.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var I,H,R;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: "search"
  },
  render: args => ({
    components: {
      ErButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <er-button circle v-bind="args"/>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(R=(H=s.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var V,j,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: "select"
      },
      options: ["primary", "success", "warning", "danger", "info", ""]
    },
    groupSize: {
      control: {
        type: "select"
      },
      options: ["large", "default", "small", ""]
    },
    groupDisabled: {
      control: "boolean"
    },
    content1: {
      control: {
        type: "text"
      },
      defaultValue: "Button1"
    },
    content2: {
      control: {
        type: "text"
      },
      defaultValue: "Button2"
    }
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2"
  },
  render: args => ({
    components: {
      ErButton,
      ErButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const yn=["Default","Circle","Group"];export{s as Circle,l as Default,i as Group,yn as __namedExportsOrder,gn as default};
