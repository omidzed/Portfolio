import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['lodash/throttle'],
	},
	build: {
		rollupOptions: {
			// Ensuring lodash isn't treated as an external dependency
			external: [],
		},
	},
});
