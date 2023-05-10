export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e0bdbafe.js","app":"_app/immutable/entry/app.40f075b4.js","imports":["_app/immutable/entry/start.e0bdbafe.js","_app/immutable/chunks/index.c61cbb40.js","_app/immutable/chunks/index.fb30c39b.js","_app/immutable/entry/app.40f075b4.js","_app/immutable/chunks/index.c61cbb40.js"],"stylesheets":[],"fonts":[]},
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
