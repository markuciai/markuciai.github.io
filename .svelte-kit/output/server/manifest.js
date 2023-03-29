export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a3802ca5.js","imports":["_app/immutable/entry/start.a3802ca5.js","_app/immutable/chunks/index.776eae6c.js","_app/immutable/chunks/singletons.bb64ea6a.js","_app/immutable/chunks/paths.abd87ac7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5da32057.js","imports":["_app/immutable/entry/app.5da32057.js","_app/immutable/chunks/index.776eae6c.js"],"stylesheets":[],"fonts":[]}},
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
