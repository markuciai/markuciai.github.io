export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","ornament.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.pIHFRwsG.js",app:"_app/immutable/entry/app.CQ_LqNb7.js",imports:["_app/immutable/entry/start.pIHFRwsG.js","_app/immutable/chunks/1-mJzSNA.js","_app/immutable/chunks/DLPUDWTP.js","_app/immutable/entry/app.CQ_LqNb7.js","_app/immutable/chunks/1-mJzSNA.js","_app/immutable/chunks/DIfJRpHt.js","_app/immutable/chunks/BRUZ3jMa.js","_app/immutable/chunks/DLPUDWTP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/lobis","/lobis/arklides_1935","/lobis/cerkve_1903","/lobis/duonkepe_1868","/lobis/finish_1935","/lobis/kroketas_1867","/lobis/kryzius_1880","/lobis/namelis_1855","/lobis/oranzerija_1875","/lobis/start_1865","/lobis/sulinys_1867","/lobis/suniukai-1883","/lobis/tvenkiniai_1917","/lobis/virtuve_1899","/lobis/vistide_1877"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
