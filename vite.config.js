import { sveltekit } from '@sveltejs/kit/vite';
import autoImport from 'sveltekit-autoimport';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [

		// autoimport from npm(bun), has a few ways of doing things, this is explicit https://www.npmjs.com/package/sveltekit-autoimport
		autoImport({ 
		  mapping: {
  			  onMount: `import { onMount } from 'svelte'`,
  			  globe: `import { globe } from '$components/globe.svelte.js'`,
  			  Stopper: `import Stopper from '$components/Stopper.svelte'`,
  			  Offer: `import Offer from '$components/Offer.svelte'`,
  			  is_browser: `import { is_browser } from '$app/environment'` // this one doesn't work?
	      // components: ['./src/components'],
  			}
	    }),
		sveltekit(),

	]
});



