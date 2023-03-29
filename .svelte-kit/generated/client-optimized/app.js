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
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/lobis": [3],
		"/lobis/arklides": [4],
		"/lobis/cerkve": [5],
		"/lobis/duonkepe": [6],
		"/lobis/kroketas": [7],
		"/lobis/kryzius": [8],
		"/lobis/namelis": [9],
		"/lobis/oranzerija": [10],
		"/lobis/sulinys": [11],
		"/lobis/suniukai": [12],
		"/lobis/tvenkiniai": [13],
		"/lobis/virtuve": [14],
		"/lobis/vistide": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';