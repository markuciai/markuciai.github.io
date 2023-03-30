export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a4ba9863.js","imports":["_app/immutable/entry/start.a4ba9863.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.10df4e2e.js","_app/immutable/chunks/paths.6f37c7aa.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e3d9fef5.js","imports":["_app/immutable/entry/app.e3d9fef5.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
