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
			external: source => {
				if (source === 'lodash/throttle') {
					return false; // Do not treat lodash/throttle as external
				}
				return true; // Treat other modules as external as per default behavior
			},
		},
	},
});
