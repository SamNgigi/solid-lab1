import { cva, css } from "@/styled-system/css";

export const mainContainer = css({
  // debug: true,
  height: "[100vh]",
  bg: "gray.950",
  color: "white",
  overflowX: "scroll",
});

export const gridContainer = cva({
  base: {
    // debug: true,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(288px, 1fr))",
    gridAutoRows: "auto",
    gap: "0.5",
    justifyContent: "center",
  },
});

export const gridBox = cva({
  base: {
    bg: "blue.500",
    color: "white",
    textAlign: "center",
    alignContent: "center",
  },
  variants: {
    area: {
      gb1: { gridColumn: "1/3" },
      gb4: { gridColumn: "2/4" },
    },
  },
});

export const box = css({
  width: "fit-content",
  p: "4",
  m: "1",
  bg: "zinc.800",
  borderWidth: "1",
  rounded: "md",
  borderColor: "zinc.500",
});
