export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2cdef0fd.js","imports":["_app/immutable/entry/start.2cdef0fd.js","_app/immutable/chunks/index.ea08cdfa.js","_app/immutable/chunks/singletons.0482da06.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.873785f0.js","imports":["_app/immutable/entry/app.873785f0.js","_app/immutable/chunks/index.ea08cdfa.js"],"stylesheets":[],"fonts":[]}},
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
