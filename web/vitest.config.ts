import { defineConfig, type Plugin } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

/** Stub static image imports (jpeg/png/svg) so components that import them
 *  can be unit-tested without a real asset pipeline. */
function stubStaticAssets(): Plugin {
  return {
    name: "stub-static-assets",
    enforce: "pre",
    load(id) {
      if (/\.(jpe?g|png|gif|webp|avif|svg)(\?.*)?$/.test(id)) {
        return "export default { src: '/stub.png', height: 100, width: 100 };";
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [stubStaticAssets(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    css: false,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
