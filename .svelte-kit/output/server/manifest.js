export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.20dbd047.js","imports":["_app/immutable/entry/start.20dbd047.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.3c13a5d7.js","_app/immutable/chunks/paths.1329d6a4.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.73093bdf.js","imports":["_app/immutable/entry/app.73093bdf.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
