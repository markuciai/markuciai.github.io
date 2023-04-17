import { B as BROWSER, w as writable } from "./index.js";
const browser = BROWSER;
const language = writable(
  browser
);
language.subscribe((val) => browser);
export {
  browser as b,
  language as l
};
