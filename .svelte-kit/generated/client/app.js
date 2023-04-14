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
		"/lobis/arklides": [4],
		"/lobis/cerkve": [5],
		"/lobis/duonkepe": [6],
		"/lobis/finish-1935": [7],
		"/lobis/kroketas": [8],
		"/lobis/kryzius": [9],
		"/lobis/namelis": [10],
		"/lobis/oranzerija": [11],
		"/lobis/start-1867": [12],
		"/lobis/sulinys": [13],
		"/lobis/suniukai": [14],
		"/lobis/tvenkiniai": [15],
		"/lobis/virtuve": [16],
		"/lobis/vistide": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';