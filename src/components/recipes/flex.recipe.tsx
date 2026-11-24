import { cva } from "@/styled-system/css";

export const mainContainer = cva({
  base: {
    // debug: true,
    height: "[100vh]",
    overflow: "hidden",
    bg: "[#0F1016]",
  },
});

export const flexContainer = cva({
  base: {
    // debug: true,
    display: "flex",
    gap: "4",
    flexWrap: "wrap",
  },
  variants: {
    jc: {
      start: { justifyContent: "start" },
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    ai: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
    },
    ac: {
      start: { alignContent: "start" },
      center: { alignContent: "center" },
      between: { alignContent: "space-between" },
      around: { alignContent: "space-around" },
      evenly: { alignContent: "space-evenly" },
    },
  },
  defaultVariants: { jc: "start" },
});

export const flexBox = cva({
  base: {
    // debug: true,
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    flexShrink: "1",
    padding: "2",
    gap: "2",
    rounded: "lg",
  },
  variants: {
    size: {
      std: { bg: "[#191A20]", color: "white", w: "[min(360px, 100%)]", h: "fit-content" },
      sm: { bg: "white", color: "black", w: "10", h: "10" },
    },
    dir: {
      row: { flexDirection: "row " },
      col: { flexDirection: "column" },
    },
    grow: {
      "2x": { flexGrow: "2" },
    },
    bp: {
      sm: {
        bg: { mdDown: "amber.300", base: "blue.500" },
      },
    },
    br: {
      set: {
        borderWidth: "1",
        borderColor: "zinc.600",
      },
    },
  },
  defaultVariants: { size: "std" },
});
