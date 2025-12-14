// import adapter from '@sveltejs/adapter-static';
import adapter from 'svelte-adapter-github';
// import adapter from '@sveltejs/adapter-auto'; // not installed here?


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// '$src': 'src',
		alias: {
			$components: 'src/components'
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			// strict: true
	      domain: '',
	      jekyll: false
		}),
	}
}



export default config;


