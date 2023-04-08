export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a1f3b541.js","imports":["_app/immutable/entry/start.a1f3b541.js","_app/immutable/chunks/index.1b8e0e52.js","_app/immutable/chunks/singletons.01bf8410.js","_app/immutable/chunks/paths.98e486b7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9df9ce11.js","imports":["_app/immutable/entry/app.9df9ce11.js","_app/immutable/chunks/index.1b8e0e52.js"],"stylesheets":[],"fonts":[]}},
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
