export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f5a549b9.js","imports":["_app/immutable/entry/start.f5a549b9.js","_app/immutable/chunks/index.b1f5afdd.js","_app/immutable/chunks/index.8ff6998b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1e088318.js","imports":["_app/immutable/entry/app.1e088318.js","_app/immutable/chunks/index.b1f5afdd.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/lobis",
				pattern: /^\/lobis\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lobis/arklides_1935",
				pattern: /^\/lobis\/arklides_1935\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lobis/cerkve_1903",
				pattern: /^\/lobis\/cerkve_1903\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lobis/duonkepe_1868",
				pattern: /^\/lobis\/duonkepe_1868\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lobis/finish_1935",
				pattern: /^\/lobis\/finish_1935\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/lobis/kroketas_1867",
				pattern: /^\/lobis\/kroketas_1867\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/lobis/kryzius_1880",
				pattern: /^\/lobis\/kryzius_1880\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/lobis/namelis_1855",
				pattern: /^\/lobis\/namelis_1855\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/lobis/oranzerija_1875",
				pattern: /^\/lobis\/oranzerija_1875\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/lobis/start_1865",
				pattern: /^\/lobis\/start_1865\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/lobis/sulinys_1867",
				pattern: /^\/lobis\/sulinys_1867\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/lobis/suniukai-1883",
				pattern: /^\/lobis\/suniukai-1883\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/lobis/tvenkiniai_1917",
				pattern: /^\/lobis\/tvenkiniai_1917\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/lobis/virtuve_1899",
				pattern: /^\/lobis\/virtuve_1899\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/lobis/vistide_1877",
				pattern: /^\/lobis\/vistide_1877\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
