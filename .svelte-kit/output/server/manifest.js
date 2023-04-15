export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.3213e161.js","imports":["_app/immutable/entry/start.3213e161.js","_app/immutable/chunks/index.69e2c043.js","_app/immutable/chunks/paths.0b2d4672.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.502a8861.js","imports":["_app/immutable/entry/app.502a8861.js","_app/immutable/chunks/index.69e2c043.js"],"stylesheets":[],"fonts":[]}},
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
