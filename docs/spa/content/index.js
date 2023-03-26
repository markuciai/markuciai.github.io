import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Grid from"../components/grid.js";import Uses from"../components/source.js";import Pager from"../components/pager.js";function get_each_context(e,t,n){const s=e.slice();return s[12]=t[n],s}function create_each_block(e){let t,n=e[12]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[12]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let t,o,l,d,s,r,c,a,n,i;return s=new Grid({props:{items:e[8],postRangeLow:e[7],postRangeHigh:e[6]}}),n=new Pager({props:{currentPage:e[5],totalPages:e[9]}}),{c(){t=element("div"),o=element("h3"),l=text("Recent blog posts:"),d=space(),create_component(s.$$.fragment),r=space(),c=element("br"),a=space(),create_component(n.$$.fragment)},l(e){t=claim_element(e,"DIV",{});var u,i=children(t);o=claim_element(i,"H3",{}),u=children(o),l=claim_text(u,"Recent blog posts:"),u.forEach(detach),d=claim_space(i),claim_component(s.$$.fragment,i),r=claim_space(i),c=claim_element(i,"BR",{}),i.forEach(detach),a=claim_space(e),claim_component(n.$$.fragment,e)},m(e,u){insert(e,t,u),append(t,o),append(o,l),append(t,d),mount_component(s,t,null),append(t,r),append(t,c),insert(e,a,u),mount_component(n,e,u),i=!0},p(e,t){const o={};t&128&&(o.postRangeLow=e[7]),t&64&&(o.postRangeHigh=e[6]),s.$set(o);const i={};t&32&&(i.currentPage=e[5]),n.$set(i)},i(e){if(i)return;transition_in(s.$$.fragment,e),transition_in(n.$$.fragment,e),i=!0},o(e){transition_out(s.$$.fragment,e),transition_out(n.$$.fragment,e),i=!1},d(e){e&&detach(t),destroy_component(s),e&&detach(a),destroy_component(n,e)}}}function create_if_block(e){let t,n;return t=new Uses({props:{content:e[4],source:e[3]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&16&&(s.content=e[4]),n&8&&(s.source=e[3]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let i,d,u,o,h,c,r,l,a=e[1],s=[];for(let t=0;t<a.length;t+=1)s[t]=create_each_block(get_each_context(e,a,t));let t=e[2]&&create_if_block_1(e),n=e[3]&&create_if_block(e);return{c(){i=element("h1"),d=text(e[0]),u=space(),o=element("section");for(let e=0;e<s.length;e+=1)s[e].c();h=space(),t&&t.c(),c=space(),n&&n.c(),r=empty(),this.h()},l(a){i=claim_element(a,"H1",{});var l,m=children(i);d=claim_text(m,e[0]),m.forEach(detach),u=claim_space(a),o=claim_element(a,"SECTION",{id:!0}),l=children(o);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(detach),h=claim_space(a),t&&t.l(a),c=claim_space(a),n&&n.l(a),r=empty(),this.h()},h(){attr(o,"id","intro")},m(e,a){insert(e,i,a),append(i,d),insert(e,u,a),insert(e,o,a);for(let e=0;e<s.length;e+=1)s[e].m(o,null);insert(e,h,a),t&&t.m(e,a),insert(e,c,a),n&&n.m(e,a),insert(e,r,a),l=!0},p(e,[i]){if((!l||i&1)&&set_data(d,e[0]),i&2){a=e[1];let t;for(t=0;t<a.length;t+=1){const n=get_each_context(e,a,t);s[t]?s[t].p(n,i):(s[t]=create_each_block(n),s[t].c(),s[t].m(o,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=a.length}e[2]?t?(t.p(e,i),i&4&&transition_in(t,1)):(t=create_if_block_1(e),t.c(),transition_in(t,1),t.m(c.parentNode,c)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),e[3]?n?(n.p(e,i),i&8&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(r.parentNode,r)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros())},i(){if(l)return;transition_in(t),transition_in(n),l=!0},o(){transition_out(t),transition_out(n),l=!1},d(e){e&&detach(i),e&&detach(u),e&&detach(o),destroy_each(s,e),e&&detach(h),t&&t.d(e),e&&detach(c),n&&n.d(e),e&&detach(r)}}}let postsPerPage=3;function instance(e,t,n){let o,a,u,{title:r}=t,{intro:c}=t,{blog:l}=t,{source:d}=t,{content:s}=t,{allContent:i}=t,h=i.filter(e=>e.type=="blog"),m=h.length,f=Math.ceil(m/postsPerPage);return e.$$set=e=>{"title"in e&&n(0,r=e.title),"intro"in e&&n(1,c=e.intro),"blog"in e&&n(2,l=e.blog),"source"in e&&n(3,d=e.source),"content"in e&&n(4,s=e.content),"allContent"in e&&n(10,i=e.allContent)},e.$$.update=()=>{if(e.$$.dirty&16)$:n(5,o=s.pager?s.pager:1);if(e.$$.dirty&32)$:n(6,a=o*postsPerPage);if(e.$$.dirty&64)$:n(7,u=a-postsPerPage)},[r,c,l,d,s,o,a,u,h,f,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,intro:1,blog:2,source:3,content:4,allContent:10})}}export default Component