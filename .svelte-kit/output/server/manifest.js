export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2adadc1f.js","imports":["_app/immutable/entry/start.2adadc1f.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.6365fbe9.js","_app/immutable/chunks/paths.399a1db7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d96d2618.js","imports":["_app/immutable/entry/app.d96d2618.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
