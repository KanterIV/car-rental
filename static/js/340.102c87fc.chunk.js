"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[340],{840:(n,e,t)=>{t.d(e,{c:()=>c});var r,a=t(312);const i=t(360).cp.button(r||(r=(0,a.c)(["\n  width: 274px;\n  height: 44px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 12px;\n  color: #fff;\n  background-color: #3470ff;\n  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #0b44cd;\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n\n  &:active {\n    box-shadow: none;\n  }\n"])));var o=t(496);const c=n=>{let{onBtnClick:e,children:t}=n;return(0,o.jsx)(i,{onClick:()=>{e()},children:t})}},600:(n,e,t)=>{t.d(e,{c:()=>L});var r,a=t(40),i=t(312),o=t(360);const c=o.cp.span(r||(r=(0,i.c)(["\n  margin-left: 6px;\n  margin-right: 6px;\n  color: #1214171a;\n"])));var s=t(496);const l=()=>(0,s.jsx)(c,{children:"|"});var p;const d=o.cp.li(p||(p=(0,i.c)(["\n  width: 274px;\n  height: 426px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .content-wrapper {\n    position: relative;\n  }\n\n  .cars-img {\n    margin-bottom: 14px;\n    border-radius: 14px;\n    width: 274px;\n    height: 268px;\n    object-fit: cover;\n  }\n\n  .title-wrapper {\n    display: flex;\n    margin-bottom: 8px;\n  }\n\n  .cars-title {\n    font-size: 16px;\n    line-height: 1.5;\n    margin-right: auto;\n  }\n\n  .car-price {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.5;\n  }\n\n  .description {\n    display: block;\n    color: #12141780;\n    font-size: 12px;\n    line-height: 1.5;\n    margin-bottom: auto;\n  }\n\n  .icon-heart-btn {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n\n    border: none;\n    background-color: transparent;\n\n    & svg {\n      path {\n        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n        stroke: rgba(255, 255, 255, 0.8);\n      }\n      width: 18px;\n      height: 18px;\n    }\n\n    &.isFavorite {\n      & svg {\n        path {\n          stroke: #3470ff;\n          fill: #3470ff;\n        }\n      }\n    }\n  }\n"])));var x,h=t(60);function m(){return m=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function f(n,e){let{title:t,titleId:r,...a}=n;return h.createElement("svg",m({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?h.createElement("title",{id:r},t):null,x||(x=h.createElement("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",stroke:"white",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const g=h.forwardRef(f);t.p;var u=t(624),b=t(192),w=t(460),j=t(640),y=t(840);const v=n=>{let{id:e,img:t,make:r,model:i,year:o,rentalPrice:c,address:p,rentalCompany:x,type:m}=n;const f={id:e,img:t,make:r,model:i,year:o,rentalPrice:c,address:p,rentalCompany:x,type:m},[v,k]=(0,h.useState)(!1),C=(0,u.OY)(),L=(0,u.w1)(b.M),z=(0,a.q4)(p),N=(0,a.EV)(p),O=(0,a.z4)(m);(0,h.useEffect)((()=>{L.find((n=>n.id===e))?k(!0):k(!1)}),[L,e]);return(0,s.jsxs)(d,{children:[(0,s.jsxs)("div",{className:"content-wrapper",children:[(0,s.jsx)("img",{src:t,className:"cars-img",alt:"".concat(r," ").concat(i)}),(0,s.jsxs)("div",{className:"title-wrapper",children:[(0,s.jsx)("h3",{className:"cars-title",children:"".concat(r," ").concat(i,", ").concat(o)}),(0,s.jsx)("p",{className:"car-price",children:c})]}),(0,s.jsxs)("div",{className:"description",children:[z,(0,s.jsx)(l,{}),N,(0,s.jsx)(l,{}),x,(0,s.jsx)(l,{}),O,(0,s.jsx)(l,{}),r,(0,s.jsx)(l,{}),e,(0,s.jsx)(l,{})]}),(0,s.jsx)("button",{className:v?"icon-heart-btn isFavorite":"icon-heart-btn",type:"button",onClick:()=>{L.find((n=>n.id===e))?C((0,w.mU)(f.id)):C((0,w.WW)(f))},children:(0,s.jsx)(g,{})})]}),(0,s.jsx)(y.c,{id:e,onBtnClick:async()=>{await C((0,j.mi)(e)),C((0,j.yI)())},children:"Learn more"})]})};var k;const C=o.cp.ul(k||(k=(0,i.c)(["\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n\n  margin-bottom: 100px;\n"]))),L=n=>{let{carsArray:e}=n;return(0,s.jsx)(C,{children:0!==e.length&&e.map((n=>{const{id:e,img:t,make:r,model:a,year:i,rentalPrice:o,address:c,rentalCompany:l,type:p}=n;return(0,s.jsx)(v,{id:e,img:t,make:r,model:a,year:i,rentalPrice:o,address:c,rentalCompany:l,type:p},e)}))})}},340:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var r,a=t(60),i=t(624),o=t(640),c=t(764),s=t(600),l=t(312);const p=t(360).cp.button(r||(r=(0,l.c)(["\n  display: block;\n  margin: 0 auto;\n  border: none;\n  background-color: transparent;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  color: #3470ff;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n  }\n\n  &.hidden {\n    display: none;\n  }\n"])));var d=t(496);const x=()=>{const[n,e]=(0,a.useState)(1),t=(0,i.w1)(c.ms),r=Math.ceil(t/12),s=(0,i.OY)();return(0,a.useEffect)((()=>{1!==n&&s((0,o.S_)(n))}),[s,n]),(0,d.jsx)(p,{className:n>=r&&"hidden",onClick:()=>{e((n=>n+1))},children:"Load more"})},h=()=>{const n=(0,i.OY)(),e=(0,i.w1)(c.Ws);return(0,a.useEffect)((()=>{n((0,o.g$)())}),[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.c,{carsArray:e}),(0,d.jsx)(x,{})]})}},192:(n,e,t)=>{t.d(e,{M:()=>r});const r=n=>n.favorite.favoriteArr}}]);
//# sourceMappingURL=340.102c87fc.chunk.js.map