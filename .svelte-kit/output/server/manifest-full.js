export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DeQb9kfk.js",app:"_app/immutable/entry/app.B7Wbry_N.js",imports:["_app/immutable/entry/start.DeQb9kfk.js","_app/immutable/chunks/BIg5O1t6.js","_app/immutable/chunks/Bpo-ulRz.js","_app/immutable/chunks/BgyyFh00.js","_app/immutable/chunks/CLL6TOOd.js","_app/immutable/entry/app.B7Wbry_N.js","_app/immutable/chunks/Bpo-ulRz.js","_app/immutable/chunks/BgyyFh00.js","_app/immutable/chunks/CLL6TOOd.js","_app/immutable/chunks/BnSVTgLM.js","_app/immutable/chunks/BIg5O1t6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/lobis",
				pattern: /^\/lobis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lobis/arklides_1935",
				pattern: /^\/lobis\/arklides_1935\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/lobis/cerkve_1903",
				pattern: /^\/lobis\/cerkve_1903\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lobis/duonkepe_1868",
				pattern: /^\/lobis\/duonkepe_1868\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lobis/finish_1935",
				pattern: /^\/lobis\/finish_1935\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/lobis/kroketas_1867",
				pattern: /^\/lobis\/kroketas_1867\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/lobis/kryzius_1880",
				pattern: /^\/lobis\/kryzius_1880\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/lobis/namelis_1855",
				pattern: /^\/lobis\/namelis_1855\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/lobis/oranzerija_1875",
				pattern: /^\/lobis\/oranzerija_1875\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/lobis/start_1865",
				pattern: /^\/lobis\/start_1865\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/lobis/sulinys_1867",
				pattern: /^\/lobis\/sulinys_1867\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/lobis/suniukai-1883",
				pattern: /^\/lobis\/suniukai-1883\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/lobis/tvenkiniai_1917",
				pattern: /^\/lobis\/tvenkiniai_1917\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/lobis/virtuve_1899",
				pattern: /^\/lobis\/virtuve_1899\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/lobis/vistide_1877",
				pattern: /^\/lobis\/vistide_1877\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
