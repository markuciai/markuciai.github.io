export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8b98e6c5.js","imports":["_app/immutable/entry/start.8b98e6c5.js","_app/immutable/chunks/index.69e2c043.js","_app/immutable/chunks/paths.3193c35a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.55881a5b.js","imports":["_app/immutable/entry/app.55881a5b.js","_app/immutable/chunks/index.69e2c043.js"],"stylesheets":[],"fonts":[]}},
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
