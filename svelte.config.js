import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined
		}),
		paths: {
			base: dev ? '' : '/reduction' // 例: '/my-svelte-app'
		},
		appDir: 'internal',
		prerender: {
			default: true
		}
	}
};
