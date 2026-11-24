import { cva } from "@/styled-system/css";

export const mainContainer = cva({
  base: { debug: true, minH: "4xl" },
});

export const flexContainer = cva({
  base: {
    debug: true,
    display: "flex",
    gap: "1",
    flexWrap: { smDown: "wrap" },
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
    debug: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "1",
  },
  variants: {
    size: {
      std: { bg: "blue.500", color: "white", w: "52", h: "52" },
      sm: { bg: "white", color: "black", w: "10", h: "10" },
    },
    grow: {
      "2x": { flexGrow: "2" },
    },
    bp: {
      sm: {
        bg: { mdDown: "amber.300", base: "blue.500" },
      },
    },
  },
  defaultVariants: { size: "std" },
});
