export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2b25e6b1.js","imports":["_app/immutable/entry/start.2b25e6b1.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.7e3f996d.js","_app/immutable/chunks/paths.76e54749.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.69b3e412.js","imports":["_app/immutable/entry/app.69b3e412.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
