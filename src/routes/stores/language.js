import { writable } from "svelte/store";
import { browser } from "$app/environment";


// const language = writable("LT");
const language = writable(
    browser && (localStorage.language ||"LT")
    );
export default language;
language.subscribe((val) => browser && (localStorage.language = val) );