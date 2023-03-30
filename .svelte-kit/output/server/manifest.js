export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9430a3a9.js","imports":["_app/immutable/entry/start.9430a3a9.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.39e71d82.js","_app/immutable/chunks/paths.044bc717.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e2d0ca5b.js","imports":["_app/immutable/entry/app.e2d0ca5b.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
