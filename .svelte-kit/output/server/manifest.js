export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.01c37405.js","imports":["_app/immutable/entry/start.01c37405.js","_app/immutable/chunks/index.2af588b6.js","_app/immutable/chunks/singletons.343378bb.js","_app/immutable/chunks/index.168297e9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.39c97797.js","imports":["_app/immutable/entry/app.39c97797.js","_app/immutable/chunks/index.2af588b6.js"],"stylesheets":[],"fonts":[]}},
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
