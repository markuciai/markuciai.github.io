
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/lobis" | "/lobis/arklides_1935" | "/lobis/cerkve_1903" | "/lobis/duonkepe_1868" | "/lobis/finish_1935" | "/lobis/kroketas_1867" | "/lobis/kryzius_1880" | "/lobis/namelis_1855" | "/lobis/oranzerija_1875" | "/lobis/start_1865" | "/lobis/sulinys_1867" | "/lobis/suniukai-1883" | "/lobis/tvenkiniai_1917" | "/lobis/virtuve_1899" | "/lobis/vistide_1877" | "/stores";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/lobis": Record<string, never>;
			"/lobis/arklides_1935": Record<string, never>;
			"/lobis/cerkve_1903": Record<string, never>;
			"/lobis/duonkepe_1868": Record<string, never>;
			"/lobis/finish_1935": Record<string, never>;
			"/lobis/kroketas_1867": Record<string, never>;
			"/lobis/kryzius_1880": Record<string, never>;
			"/lobis/namelis_1855": Record<string, never>;
			"/lobis/oranzerija_1875": Record<string, never>;
			"/lobis/start_1865": Record<string, never>;
			"/lobis/sulinys_1867": Record<string, never>;
			"/lobis/suniukai-1883": Record<string, never>;
			"/lobis/tvenkiniai_1917": Record<string, never>;
			"/lobis/virtuve_1899": Record<string, never>;
			"/lobis/vistide_1877": Record<string, never>;
			"/stores": Record<string, never>
		};
		Pathname(): "/" | "/lobis" | "/lobis/" | "/lobis/arklides_1935" | "/lobis/arklides_1935/" | "/lobis/cerkve_1903" | "/lobis/cerkve_1903/" | "/lobis/duonkepe_1868" | "/lobis/duonkepe_1868/" | "/lobis/finish_1935" | "/lobis/finish_1935/" | "/lobis/kroketas_1867" | "/lobis/kroketas_1867/" | "/lobis/kryzius_1880" | "/lobis/kryzius_1880/" | "/lobis/namelis_1855" | "/lobis/namelis_1855/" | "/lobis/oranzerija_1875" | "/lobis/oranzerija_1875/" | "/lobis/start_1865" | "/lobis/start_1865/" | "/lobis/sulinys_1867" | "/lobis/sulinys_1867/" | "/lobis/suniukai-1883" | "/lobis/suniukai-1883/" | "/lobis/tvenkiniai_1917" | "/lobis/tvenkiniai_1917/" | "/lobis/virtuve_1899" | "/lobis/virtuve_1899/" | "/lobis/vistide_1877" | "/lobis/vistide_1877/" | "/stores" | "/stores/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | "/robots.txt" | string & {};
	}
}