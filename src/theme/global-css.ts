import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "*": { "--global-color-border": "colors.border" },
  body: { bg: "canvas", color: "fg.default" },
});
