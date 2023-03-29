export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8500a68d.js","imports":["_app/immutable/entry/start.8500a68d.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.d7bd3dac.js","_app/immutable/chunks/paths.4f24d1e0.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.90ec97e9.js","imports":["_app/immutable/entry/app.90ec97e9.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
