export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a9f09f45.js","imports":["_app/immutable/entry/start.a9f09f45.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.2dfb138e.js","_app/immutable/chunks/paths.41541a51.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3d11c23c.js","imports":["_app/immutable/entry/app.3d11c23c.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
