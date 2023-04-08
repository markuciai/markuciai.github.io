export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cccc1bdb.js","imports":["_app/immutable/entry/start.cccc1bdb.js","_app/immutable/chunks/index.4f4526e2.js","_app/immutable/chunks/singletons.16b5f09e.js","_app/immutable/chunks/index.1be6d31f.js","_app/immutable/chunks/paths.5095e400.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.51a27f6f.js","imports":["_app/immutable/entry/app.51a27f6f.js","_app/immutable/chunks/index.4f4526e2.js"],"stylesheets":[],"fonts":[]}},
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
