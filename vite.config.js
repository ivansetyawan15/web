import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});

// import { defineConfig } from 'vite';

// export default defineConfig({
//   // Konfigurasi Vite Anda di sini
//   root: 'src',
//   server: {
//     port: 3000,
//   },
// });