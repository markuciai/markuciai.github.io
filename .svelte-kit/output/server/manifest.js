export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.10f89e8d.js","imports":["_app/immutable/entry/start.10f89e8d.js","_app/immutable/chunks/index.6677c752.js","_app/immutable/chunks/singletons.6ebbe353.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0cfa69e7.js","imports":["_app/immutable/entry/app.0cfa69e7.js","_app/immutable/chunks/index.6677c752.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
