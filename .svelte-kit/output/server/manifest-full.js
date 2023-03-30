export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.076222ca.js","imports":["_app/immutable/entry/start.076222ca.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.cf3ce9eb.js","_app/immutable/chunks/paths.5636f04d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.66f9326c.js","imports":["_app/immutable/entry/app.66f9326c.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
			() => import('./nodes/15.js')
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
				id: "/lobis/arklides",
				pattern: /^\/lobis\/arklides\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lobis/cerkve",
				pattern: /^\/lobis\/cerkve\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lobis/duonkepe",
				pattern: /^\/lobis\/duonkepe\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lobis/kroketas",
				pattern: /^\/lobis\/kroketas\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/lobis/kryzius",
				pattern: /^\/lobis\/kryzius\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/lobis/namelis",
				pattern: /^\/lobis\/namelis\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/lobis/oranzerija",
				pattern: /^\/lobis\/oranzerija\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/lobis/sulinys",
				pattern: /^\/lobis\/sulinys\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/lobis/suniukai",
				pattern: /^\/lobis\/suniukai\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/lobis/tvenkiniai",
				pattern: /^\/lobis\/tvenkiniai\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/lobis/virtuve",
				pattern: /^\/lobis\/virtuve\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/lobis/vistide",
				pattern: /^\/lobis\/vistide\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
