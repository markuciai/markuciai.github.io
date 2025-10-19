export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.021c4173.js","app":"_app/immutable/entry/app.f70d020b.js","imports":["_app/immutable/entry/start.021c4173.js","_app/immutable/chunks/index.91a1003d.js","_app/immutable/chunks/index.1ceca79a.js","_app/immutable/entry/app.f70d020b.js","_app/immutable/chunks/index.91a1003d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
