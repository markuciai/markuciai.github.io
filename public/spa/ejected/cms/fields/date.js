import{SvelteComponent,attr,claim_element,detach,element,init,insert,listen,noop,safe_not_equal}from"../../../web_modules/svelte/internal/index.mjs";import{isDate,makeDate,formatDate}from"../date_checker.js";function create_fragment(e){let t,n,s,o;return{c(){t=element("input"),this.h()},l(e){t=claim_element(e,"INPUT",{type:!0}),this.h()},h(){attr(t,"type","date"),t.value=n=isDate(e[0])?makeDate(e[0]):null,t.required=!0},m(n,i){insert(n,t,i),s||(o=listen(t,"input",e[2]),s=!0)},p(e,[s]){s&1&&n!==(n=isDate(e[0])?makeDate(e[0]):null)&&(t.value=n)},i:noop,o:noop,d(e){e&&detach(t),s=!1,o()}}}function instance(e,t,n){let{field:s}=t;const o=e=>{n(0,s=formatDate(e,s))},i=e=>o(e.target.value);return e.$$set=e=>{"field"in e&&n(0,s=e.field)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0})}}export default Component