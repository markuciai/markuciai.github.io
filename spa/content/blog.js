import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Uses from"../components/source.js";import{count}from"../scripts/stores.js";import Incrementer from"../components/incrementer.js";import Decrementer from"../components/decrementer.js";function get_each_context(e,t,n){const s=e.slice();return s[11]=t[n].name,s}function create_if_block_4(e){let n,t;return{c(){n=text("Written by "),t=text(e[2])},l(s){n=claim_text(s,"Written by "),t=claim_text(s,e[2])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&4&&set_data(t,e[2])},d(e){e&&detach(n),e&&detach(t)}}}function create_if_block_3(e){let n,t;return{c(){n=text(" on "),t=text(e[3])},l(s){n=claim_text(s," on "),t=claim_text(s,e[3])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&8&&set_data(t,e[3])},d(e){e&&detach(n),e&&detach(t)}}}function create_if_block_2(e){let t,c,i,a,n,r,s,o;return n=new Incrementer({}),s=new Decrementer({}),{c(){t=element("h3"),c=text("The count is "),i=text(e[9]),a=space(),create_component(n.$$.fragment),r=space(),create_component(s.$$.fragment)},l(o){t=claim_element(o,"H3",{});var l=children(t);c=claim_text(l,"The count is "),i=claim_text(l,e[9]),l.forEach(detach),a=claim_space(o),claim_component(n.$$.fragment,o),r=claim_space(o),claim_component(s.$$.fragment,o)},m(e,l){insert(e,t,l),append(t,c),append(t,i),insert(e,a,l),mount_component(n,e,l),insert(e,r,l),mount_component(s,e,l),o=!0},p(e,t){(!o||t&512)&&set_data(i,e[9])},i(e){if(o)return;transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),o=!0},o(e){transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),o=!1},d(e){e&&detach(t),e&&detach(a),destroy_component(n,e),e&&detach(r),destroy_component(s,e)}}}function create_if_block_1(e){let s,o,n=e[7],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,o){if(o&384){n=e[7];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_each_block(e){let t,s,o;var n=e[8]["layouts_components_"+e[11]+"_svelte"];function i(){return{}}return n&&(t=new n(i(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e){if(n!==(n=e[8]["layouts_components_"+e[11]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(i(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_if_block(e){let t,n;return t=new Uses({props:{content:e[6],source:e[5]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&64&&(s.content=e[6]),n&32&&(s.source=e[5]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let p,y,j,u,a,b,v,r,g,d,f,h,m,c,_,l,o=e[2]&&create_if_block_4(e),i=e[3]&&create_if_block_3(e),n=e[4]&&create_if_block_2(e),t=e[7]&&create_if_block_1(e),s=e[5]&&create_if_block(e);return{c(){p=element("h1"),y=text(e[0]),j=space(),u=element("p"),a=element("em"),o&&o.c(),b=empty(),i&&i.c(),v=space(),r=element("p"),g=space(),n&&n.c(),d=space(),t&&t.c(),f=space(),s&&s.c(),h=space(),m=element("p"),c=element("a"),_=text("Back home"),this.h()},l(l){p=claim_element(l,"H1",{});var w,O,x,C,k,E=children(p);y=claim_text(E,e[0]),E.forEach(detach),j=claim_space(l),u=claim_element(l,"P",{}),O=children(u),a=claim_element(O,"EM",{}),w=children(a),o&&o.l(w),b=empty(),i&&i.l(w),w.forEach(detach),O.forEach(detach),v=claim_space(l),r=claim_element(l,"P",{}),k=children(r),k.forEach(detach),g=claim_space(l),n&&n.l(l),d=claim_space(l),t&&t.l(l),f=claim_space(l),s&&s.l(l),h=claim_space(l),m=claim_element(l,"P",{}),x=children(m),c=claim_element(x,"A",{href:!0}),C=children(c),_=claim_text(C,"Back home"),C.forEach(detach),x.forEach(detach),this.h()},h(){attr(c,"href",".")},m(w,O){insert(w,p,O),append(p,y),insert(w,j,O),insert(w,u,O),append(u,a),o&&o.m(a,null),append(a,b),i&&i.m(a,null),insert(w,v,O),insert(w,r,O),r.innerHTML=e[1],insert(w,g,O),n&&n.m(w,O),insert(w,d,O),t&&t.m(w,O),insert(w,f,O),s&&s.m(w,O),insert(w,h,O),insert(w,m,O),append(m,c),append(c,_),l=!0},p(e,[c]){(!l||c&1)&&set_data(y,e[0]),e[2]?o?o.p(e,c):(o=create_if_block_4(e),o.c(),o.m(a,b)):o&&(o.d(1),o=null),e[3]?i?i.p(e,c):(i=create_if_block_3(e),i.c(),i.m(a,null)):i&&(i.d(1),i=null),(!l||c&2)&&(r.innerHTML=e[1]),e[4]?n?(n.p(e,c),c&16&&transition_in(n,1)):(n=create_if_block_2(e),n.c(),transition_in(n,1),n.m(d.parentNode,d)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros()),e[7]?t?(t.p(e,c),c&128&&transition_in(t,1)):(t=create_if_block_1(e),t.c(),transition_in(t,1),t.m(f.parentNode,f)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),e[5]?s?(s.p(e,c),c&32&&transition_in(s,1)):(s=create_if_block(e),s.c(),transition_in(s,1),s.m(h.parentNode,h)):s&&(group_outros(),transition_out(s,1,1,()=>{s=null}),check_outros())},i(){if(l)return;transition_in(n),transition_in(t),transition_in(s),l=!0},o(){transition_out(n),transition_out(t),transition_out(s),l=!1},d(e){e&&detach(p),e&&detach(j),e&&detach(u),o&&o.d(),i&&i.d(),e&&detach(v),e&&detach(r),e&&detach(g),n&&n.d(e),e&&detach(d),t&&t.d(e),e&&detach(f),s&&s.d(e),e&&detach(h),e&&detach(m)}}}function instance(e,t,n){let{title:s}=t,{body:o}=t,{author:i}=t,{date:a}=t,{store:r}=t,{source:c}=t,{content:l}=t,d;const m=count.subscribe(e=>{n(9,d=e)});let{components:u}=t,{allLayouts:h}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"body"in e&&n(1,o=e.body),"author"in e&&n(2,i=e.author),"date"in e&&n(3,a=e.date),"store"in e&&n(4,r=e.store),"source"in e&&n(5,c=e.source),"content"in e&&n(6,l=e.content),"components"in e&&n(7,u=e.components),"allLayouts"in e&&n(8,h=e.allLayouts)},[s,o,i,a,r,c,l,u,h,d]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,body:1,author:2,date:3,store:4,source:5,content:6,components:7,allLayouts:8})}}export default Component