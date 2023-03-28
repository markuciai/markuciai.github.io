export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.10f89e8d.js","imports":["_app/immutable/entry/start.10f89e8d.js","_app/immutable/chunks/index.6677c752.js","_app/immutable/chunks/singletons.6ebbe353.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0cfa69e7.js","imports":["_app/immutable/entry/app.0cfa69e7.js","_app/immutable/chunks/index.6677c752.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
				id: "/lobis/kryzius",
				pattern: /^\/lobis\/kryzius\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
