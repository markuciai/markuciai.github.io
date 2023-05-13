export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0e63a865.js","imports":["_app/immutable/entry/start.0e63a865.js","_app/immutable/chunks/index.01d06d71.js","_app/immutable/chunks/index.3951f36f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b07f83f3.js","imports":["_app/immutable/entry/app.b07f83f3.js","_app/immutable/chunks/index.01d06d71.js"],"stylesheets":[],"fonts":[]}},
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
