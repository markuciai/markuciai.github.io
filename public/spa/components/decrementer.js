import{SvelteComponent,append,children,claim_element,claim_text,detach,element,init,insert,listen,noop,safe_not_equal,text}from"../web_modules/svelte/internal/index.mjs";import{count}from"../scripts/stores.js";function create_fragment(e){let t,n,s,o;return{c(){t=element("button"),n=text("-")},l(e){t=claim_element(e,"BUTTON",{});var s=children(t);n=claim_text(s,"-"),s.forEach(detach)},m(i,a){insert(i,t,a),append(t,n),s||(o=listen(t,"click",e[0]),s=!0)},p:noop,i:noop,o:noop,d(e){e&&detach(t),s=!1,o()}}}function instance(){function t(){count.update(e=>e-1)}return[t]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export default Component