export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b21b6930.js","imports":["_app/immutable/entry/start.b21b6930.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.77509bf3.js","_app/immutable/chunks/paths.f24ba01a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c322ca2f.js","imports":["_app/immutable/entry/app.c322ca2f.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
