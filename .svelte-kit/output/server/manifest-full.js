export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d5f96e67.js","imports":["_app/immutable/entry/start.d5f96e67.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.af2b7f53.js","_app/immutable/chunks/paths.77867d2c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b1b64193.js","imports":["_app/immutable/entry/app.b1b64193.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
