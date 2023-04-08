import { c as create_ssr_component, a as subscribe, d as set_store_value } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-11412mu{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-11412mu{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-11412mu{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-11412mu{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-11412mu{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(180px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:clamp(-160px, -25vw, -110px) 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.highlighted-question.svelte-11412mu{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-11412mu{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-80px, -25vw, -40px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.task.svelte-11412mu{padding:0 0 -200px 0}.map_section.svelte-11412mu{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $count, $$unsubscribe_count;
  const count = writable(0);
  $$unsubscribe_count = subscribe(count, (value) => $count = value);
  console.log($count);
  count.set(1);
  console.log($count);
  set_store_value(count, $count = 2, $count);
  console.log($count);
  $$result.css.add(css);
  $$unsubscribe_count();
  return `${$$result.head += `<!-- HEAD_svelte-1ds1kxo_START -->${$$result.title = `<title>Tarnų namelis – Markučių Lobis</title>`, ""}<meta name="description" content="Žaidimas"><!-- HEAD_svelte-1ds1kxo_END -->`, ""}



${`Per anksti! Pirma reikia rasti kelio pradžia.`}`;
});
export {
  Page as default
};
