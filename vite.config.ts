import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// dev
	server: {
		port: 7000,
		open: true,
		host: true,
	}
});
