export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.590c16aa.js","imports":["_app/immutable/entry/start.590c16aa.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.21d6be22.js","_app/immutable/chunks/paths.9cbb690c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.02ecaa5a.js","imports":["_app/immutable/entry/app.02ecaa5a.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
