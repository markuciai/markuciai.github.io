export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cd11556e.js","imports":["_app/immutable/entry/start.cd11556e.js","_app/immutable/chunks/index.3371c1e3.js","_app/immutable/chunks/index.fe110163.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a24445e6.js","imports":["_app/immutable/entry/app.a24445e6.js","_app/immutable/chunks/index.3371c1e3.js"],"stylesheets":[],"fonts":[]}},
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
