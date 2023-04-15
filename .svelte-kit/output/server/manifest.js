export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.62a3ea70.js","imports":["_app/immutable/entry/start.62a3ea70.js","_app/immutable/chunks/index.c158a002.js","_app/immutable/chunks/paths.7800a9c1.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e1ec0c20.js","imports":["_app/immutable/entry/app.e1ec0c20.js","_app/immutable/chunks/index.c158a002.js"],"stylesheets":[],"fonts":[]}},
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
