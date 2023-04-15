export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.48077f7c.js","imports":["_app/immutable/entry/start.48077f7c.js","_app/immutable/chunks/index.69e2c043.js","_app/immutable/chunks/paths.f9734c31.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1d56a19c.js","imports":["_app/immutable/entry/app.1d56a19c.js","_app/immutable/chunks/index.69e2c043.js"],"stylesheets":[],"fonts":[]}},
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
