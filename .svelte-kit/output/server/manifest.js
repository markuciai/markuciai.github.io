export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.3a4dcdd7.js","imports":["_app/immutable/entry/start.3a4dcdd7.js","_app/immutable/chunks/index.c61cbb40.js","_app/immutable/chunks/index.fb30c39b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1ae85ef6.js","imports":["_app/immutable/entry/app.1ae85ef6.js","_app/immutable/chunks/index.c61cbb40.js"],"stylesheets":[],"fonts":[]}},
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
