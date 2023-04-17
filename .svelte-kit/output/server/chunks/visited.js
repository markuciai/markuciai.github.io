import { B as BROWSER, w as writable } from "./index.js";
const browser = BROWSER;
const language = writable(
  browser
);
language.subscribe((val) => browser);
const visited = writable(
  browser
);
visited.subscribe((val) => browser);
export {
  language as l,
  visited as v
};
