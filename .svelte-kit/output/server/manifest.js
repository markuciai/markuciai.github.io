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
		client: {start:"_app/immutable/entry/start.Dz5S9342.js",app:"_app/immutable/entry/app.BgnW7cOy.js",imports:["_app/immutable/entry/start.Dz5S9342.js","_app/immutable/chunks/BQyIqlV5.js","_app/immutable/chunks/CbH6fU83.js","_app/immutable/entry/app.BgnW7cOy.js","_app/immutable/chunks/BQyIqlV5.js","_app/immutable/chunks/B3v_TLHs.js","_app/immutable/chunks/BbJ52r7S.js","_app/immutable/chunks/CbH6fU83.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
