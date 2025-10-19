import { writable } from "svelte/store";
import { browser } from "$app/environment";


const visited = writable(
    browser && (localStorage.visited || -1)
    );
export default visited;
visited.subscribe((val) => browser && (localStorage.visited = val) );