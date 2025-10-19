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
};


// from chepulis
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// kit: {
// 	// '$src': 'src',
// 	alias: {
// 		$components: 'src/components'
// 	},
// 	adapter: adapter({
// 		pages: 'build',
// 		assets: 'build',
// 		fallback: undefined,
// 		precompress: false,
// 		strict: true
// 	}),

// }
// };




// from markuciai
// export default {
//   kit: {
//     adapter: adapter({
//       // default options are shown. On some platforms
//       // these options are set automatically — see below
//       pages: 'docs',
//       assets: 'docs',
//       fallback: undefined,
//       precompress: false,
//       domain: '',
//       jekyll: false
//     })
//   }
// };





export default config;


