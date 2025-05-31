import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  resolve: {
    alias: {
      "@utils": "./src/utils",
      "@components": "./src/components",
    },
  },
  build: {
    outDir: "../wwwroot/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/js/main.js",
        prueba: "./src/js/prueba.js",
      },
      output: {
        entryFileNames: "[name].js", // produce: main.js, empleados.js, reportes.js
        assetFileNames: "[name][extname]",
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
