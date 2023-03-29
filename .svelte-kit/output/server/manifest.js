export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1d773c01.js","imports":["_app/immutable/entry/start.1d773c01.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.282ac8d5.js","_app/immutable/chunks/paths.3ffc0376.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8eece587.js","imports":["_app/immutable/entry/app.8eece587.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
