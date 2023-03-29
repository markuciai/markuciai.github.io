export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0f7024d7.js","imports":["_app/immutable/entry/start.0f7024d7.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.56b4bb71.js","_app/immutable/chunks/paths.6a9f536e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.96d04ee5.js","imports":["_app/immutable/entry/app.96d04ee5.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
