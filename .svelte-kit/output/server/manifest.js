export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.dc05cd22.js","imports":["_app/immutable/entry/start.dc05cd22.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.69c4d083.js","_app/immutable/chunks/paths.a5715b6c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3ab801c8.js","imports":["_app/immutable/entry/app.3ab801c8.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
