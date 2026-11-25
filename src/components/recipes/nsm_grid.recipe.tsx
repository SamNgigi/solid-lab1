// nsm_grid (nav + sidebar + main grid layout)
import { css } from "@/styled-system/css";

export const mainContainer = css({
  debug: true,
  height: "[100vh]",
  bg: "gray.950",
  color: "white",
  overflowX: "scroll",

  display: "grid",
  gridTemplateColumns: "[288px 1fr]",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: `
    "nav nav"
    "aside main"
  `,
});

export const nav = css({
  gridArea: "nav",
});

export const sidebar = css({
  gridArea: "aside",
});

export const main = css({
  gridArea: "main",
});
