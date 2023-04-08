export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c84130ca.js","imports":["_app/immutable/entry/start.c84130ca.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.fcda4284.js","_app/immutable/chunks/paths.993ca8b7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9972ec8d.js","imports":["_app/immutable/entry/app.9972ec8d.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
