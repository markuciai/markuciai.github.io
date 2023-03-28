export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0ba88494.js","imports":["_app/immutable/entry/start.0ba88494.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.73107314.js","_app/immutable/chunks/paths.8a809f9f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e75062b2.js","imports":["_app/immutable/entry/app.e75062b2.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
