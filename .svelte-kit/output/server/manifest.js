export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.26f937b8.js","imports":["_app/immutable/entry/start.26f937b8.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.c94ada8c.js","_app/immutable/chunks/paths.00404bb4.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5e4131cc.js","imports":["_app/immutable/entry/app.5e4131cc.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
