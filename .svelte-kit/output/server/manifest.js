export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.992c2309.js","imports":["_app/immutable/entry/start.992c2309.js","_app/immutable/chunks/index.d08ce2ef.js","_app/immutable/chunks/singletons.c7f3ad42.js","_app/immutable/chunks/index.765f24db.js","_app/immutable/chunks/paths.ee9e88a3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5859baa7.js","imports":["_app/immutable/entry/app.5859baa7.js","_app/immutable/chunks/index.d08ce2ef.js"],"stylesheets":[],"fonts":[]}},
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
