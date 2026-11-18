import { defineConfig } from "vite-plus";
import solid from "@solidjs/vite-plugin";
import pandacss from "@pandacss/vite";

export default defineConfig({
  plugins: [
    // turns css() calls into plain class strings at build time
    pandacss({ cwd: process.cwd(), transform: true }),
    solid(),
  ],
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
