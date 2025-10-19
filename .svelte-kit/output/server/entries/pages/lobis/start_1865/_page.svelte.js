import { x as head } from "../../../../chunks/index.js";
import { h as head_signs, i as instructions } from "../../../../chunks/instructions.js";
import { a as attr, e as escape_html } from "../../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let date_started = /* @__PURE__ */ new Date();
    date_started.getTime();
    let date_started_h = date_started.getHours().toString().padStart(2, "0");
    let date_started_m = date_started.getMinutes().toString().padStart(2, "0");
    let date_started_s = date_started.getSeconds().toString().padStart(2, "0");
    head($$renderer2, ($$renderer3) => {
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          {
            $$renderer3.push("<!--[!-->");
            $$renderer3.title(($$renderer4) => {
              $$renderer4.push(`<title>Startas – Markučių Lobis</title>`);
            });
            $$renderer3.push(`<meta name="description" content="Žaidimas"/>`);
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]-->`);
    });
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section><img class="illustration"${attr("src", head_signs)}/> `);
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[!-->");
          {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<h1>Markučių Lobis</h1> <p class="subh">JŪS PRADĖJOTE KELIONĘ<br/>${escape_html(date_started_h)}:${escape_html(date_started_m)}:${escape_html(date_started_s)}</p> <article>Sveiki atvykę į žaidimą Markučių dvaro lobis! Ieškokite parke išdėliotų lentelių su QR kodais, skenuokite lenteles, skaitykite užuominas ir spręskite užduotis teisinga tvarka.</article> <img${attr("src", instructions)} width="100%"/> <article>Žaidimas prasideda prie įėjimo į Markučių dvaro parką.</article> <article>19 a. į Markučių dvarą buvo atvykstama karietomis pro pagrindinius vartus, o prie jų stovėjo didelis, iš geležinkelio bėgių padarytas kryžius. Šiuo metu ten stovi kitas objektas.</article> <div class="where-next"><span class="highlighted-question">Raskite kur buvo pagrindinis įėjimas į Markučių dvaro parką. <br/>Kaip manote, kur anksčiau galėjo stovėti kryžius?</span> <br/><br/> <span>Pirma užuomina – leiskitės žemyn laiptais.</span></div>`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></section> `);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
