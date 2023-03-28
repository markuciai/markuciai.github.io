export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cc5e9d29.js","imports":["_app/immutable/entry/start.cc5e9d29.js","_app/immutable/chunks/index.6677c752.js","_app/immutable/chunks/singletons.08be07ea.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.4f319cd2.js","imports":["_app/immutable/entry/app.4f319cd2.js","_app/immutable/chunks/index.6677c752.js"],"stylesheets":[],"fonts":[]}},
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
