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
					return true; // Do not treat lodash/throttle as external
				}
			},
		},
	},
});
