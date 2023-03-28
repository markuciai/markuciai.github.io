export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.569791d5.js","imports":["_app/immutable/entry/start.569791d5.js","_app/immutable/chunks/index.847936d9.js","_app/immutable/chunks/singletons.93e26e91.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2fb35ac6.js","imports":["_app/immutable/entry/app.2fb35ac6.js","_app/immutable/chunks/index.847936d9.js"],"stylesheets":[],"fonts":[]}},
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
