export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2f5c1340.js","imports":["_app/immutable/entry/start.2f5c1340.js","_app/immutable/chunks/index.b1f5afdd.js","_app/immutable/chunks/index.8ff6998b.js","_app/immutable/chunks/paths.27ebb673.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.00769695.js","imports":["_app/immutable/entry/app.00769695.js","_app/immutable/chunks/index.b1f5afdd.js"],"stylesheets":[],"fonts":[]}},
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
