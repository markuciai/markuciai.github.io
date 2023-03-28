import adapter from 'svelte-adapter-github';

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
      assets: 'docs',
      fallback: undefined,
      precompress: false,
      domain: '',
      jekyll: false
    })
  }
};