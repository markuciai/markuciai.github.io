import { c as create_ssr_component, a as subscribe, d as set_store_value, b as add_attribute } from "../../../../chunks/index2.js";
import { w as writable } from "../../../../chunks/index.js";
const task_object = "/_app/immutable/assets/saddle.c983f419.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1nwqlfc{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-1nwqlfc{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-1nwqlfc{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-1nwqlfc{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-1nwqlfc{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(180px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:clamp(-160px, -25vw, -110px) 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.where-next.too_early.svelte-1nwqlfc{background-color:#D33F37;color:#EEDC83}.highlighted-question.svelte-1nwqlfc{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-1nwqlfc{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-80px, -25vw, -40px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.task.svelte-1nwqlfc{padding:0 0 -200px 0}.map_section.svelte-1nwqlfc{color:white;font-size:16pt;padding:20px}",
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




${`${`<section class="svelte-1nwqlfc"><img class="illustration svelte-1nwqlfc"${add_attribute("src", task_object, 0)}>
	<div class="where-next too_early svelte-1nwqlfc">Tarnu namelio durys užrakintos.
		<br><br>
		Jus atejot per anksti! Pirma reikia rasti kelio pradžia.
	</div></section>`}`}`;
});
export {
  Page as default
};
