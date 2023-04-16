export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2f298c03.js","imports":["_app/immutable/entry/start.2f298c03.js","_app/immutable/chunks/index.c158a002.js","_app/immutable/chunks/paths.3f31f263.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.402d561f.js","imports":["_app/immutable/entry/app.402d561f.js","_app/immutable/chunks/index.c158a002.js"],"stylesheets":[],"fonts":[]}},
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
