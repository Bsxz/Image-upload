"use strict";(self.webpackChunkepic_teach=self.webpackChunkepic_teach||[]).push([[756],{756:function(e,r,s){s.r(r);var n,a=s(168),t=(s(2791),s(7689)),i=s(9023),o=s(2360),l=s(3263),c=s(7615),m=s(376),u=s(7354),d=s(9279),p=s(184),h=o.ZP.div(n||(n=(0,a.Z)(["\n  max-width: 600px;\n  padding: 20px;\n  margin: 40px auto;\n  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, .2);\n  border-radius: 5px;\n  text-align: center;\n"])));r.default=(0,i.Pi)((function(){var e=(0,d.o)().AuthStore,r=(0,t.s0)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("h1",{children:"\u767b\u5165"}),(0,p.jsxs)(c.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:10},style:{maxWidth:600},initialValues:{remember:!0},onFinish:function(s){e.setUsername(s.username),e.setPassword(s.password),e.register().then((function(e){l.ZP.success("\u767b\u5f55\u6210\u529f"),r("/")})).catch((function(e){l.ZP.error("\u6ce8\u518c\u5931\u8d25")}))},autoComplete:"off",children:[(0,p.jsx)(c.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{validator:function(e,r){return r?/\W/.test(r)?Promise.reject("\u53ea\u80fd\u662f\u6570\u5b57\u4e0b\u5212\u7ebf"):r.length<4||r.length>10?Promise.reject("\u7528\u6237\u540d\u6700\u5c0f\u957f\u5ea6\u4e3a4\uff0c\u6700\u5927\u957f\u5ea6\u4e3a10"):Promise.resolve():Promise.reject("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")}}],children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)(c.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:8,message:"\u5bc6\u7801\u6700\u5c11\u516b\u4f4d\u6570"},{max:14,message:"\u5bc6\u7801\u6700\u591a\u5341\u516d\u4f4d\u6570"}],children:(0,p.jsx)(m.Z.Password,{})}),(0,p.jsx)(c.Z.Item,{label:"\u5bc6\u7801",name:"passwordConfirm",rules:[{required:!0,message:"\u518d\u6b21\u8f93\u5165\u5bc6\u7801"},function(e){var r=e.getFieldValue;return{validator:function(e,s){return r("password")===s?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}],children:(0,p.jsx)(m.Z.Password,{})}),(0,p.jsx)(c.Z.Item,{wrapperCol:{offset:8,span:10},children:(0,p.jsx)(u.ZP,{type:"primary",htmlType:"submit",children:"\u767b\u5165"})})]})]})})}))}}]);
//# sourceMappingURL=756.51047d8e.chunk.js.map