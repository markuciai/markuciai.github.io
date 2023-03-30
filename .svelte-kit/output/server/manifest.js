export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.93dab321.js","imports":["_app/immutable/entry/start.93dab321.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.fd43af14.js","_app/immutable/chunks/paths.f297bb09.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.becec50e.js","imports":["_app/immutable/entry/app.becec50e.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
