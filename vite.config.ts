import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true
    })
  ],

  build: {
    lib: {
      entry: resolve(process.cwd(), "src/index.ts"),
      name: "ReuseUI",
      fileName: "index",
      formats: ["es"]
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime"
      ]
    }
  }
});