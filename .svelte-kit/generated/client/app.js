export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/lobis": [3],
		"/lobis/arklides_1935": [4],
		"/lobis/cerkve_1903": [5],
		"/lobis/duonkepe_1868": [6],
		"/lobis/finish_1935": [7],
		"/lobis/kroketas_1867": [8],
		"/lobis/kryzius_1880": [9],
		"/lobis/namelis_1855": [10],
		"/lobis/oranzerija_1875": [11],
		"/lobis/start_1865": [12],
		"/lobis/sulinys_1867": [13],
		"/lobis/suniukai-1883": [14],
		"/lobis/tvenkiniai_1917": [15],
		"/lobis/virtuve_1899": [16],
		"/lobis/vistide_1877": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';