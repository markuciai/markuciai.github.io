import { w as writable } from "./index.js";
import { b as browser } from "./language.js";
const visited = writable(
  browser
);
visited.subscribe((val) => browser);
export {
  visited as v
};
