export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ada28fcf.js","imports":["_app/immutable/entry/start.ada28fcf.js","_app/immutable/chunks/index.3371c1e3.js","_app/immutable/chunks/index.fe110163.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f0624c56.js","imports":["_app/immutable/entry/app.f0624c56.js","_app/immutable/chunks/index.3371c1e3.js"],"stylesheets":[],"fonts":[]}},
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
