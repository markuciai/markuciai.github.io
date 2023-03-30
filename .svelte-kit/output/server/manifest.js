export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.076222ca.js","imports":["_app/immutable/entry/start.076222ca.js","_app/immutable/chunks/index.dfcf607e.js","_app/immutable/chunks/singletons.cf3ce9eb.js","_app/immutable/chunks/paths.5636f04d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.66f9326c.js","imports":["_app/immutable/entry/app.66f9326c.js","_app/immutable/chunks/index.dfcf607e.js"],"stylesheets":[],"fonts":[]}},
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
