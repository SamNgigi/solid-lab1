import { defineConfig } from "@pandacss/dev";
import { globalCss, semanticTokens } from "./src/theme";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: true,
  include: ["./src/**/*.{ts,tsx}"],
  exclude: [],
  globalCss: { extend: globalCss },
  theme: { extend: { semanticTokens } },
  outdir: "styled-system",
});
