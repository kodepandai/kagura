import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
      entryRoot: "src"
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "index",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
