import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';

const production = !process.env.ROLLUP_WATCH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},

	plugins: [
		svelte({
			preprocess: autoPreprocess(),
			// enable run-time checks when not in production
			dev: !production
		}),
		typescript({ sourceMap: !production })
	]
};

export default config;
