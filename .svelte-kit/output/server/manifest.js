export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.40e00bdc.js","imports":["_app/immutable/entry/start.40e00bdc.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.038cff73.js","_app/immutable/chunks/paths.db061815.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.aa519c53.js","imports":["_app/immutable/entry/app.aa519c53.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
