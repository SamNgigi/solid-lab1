import { cva } from "@/styled-system/css";

export const flexContainer = cva({
  base: {
    debug: true,
    display: "flex",
    flexWrap: "wrap",
  },
  variants: {
    hpos: {
      start: { justifyContent: "start" },
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    vpos: {
      start: { alignItems: "start" },
      center: { alignItems: "center" },
      end: { alignItems: "end" },
    },
  },
  defaultVariants: { hpos: "start" },
});

export const flexBox = cva({
  base: {
    debug: true,
    textAlign: "center",
    alignContent: "center",
  },
  variants: {
    size: {
      std: { bg: "blue.500", color: "white", w: "52", h: "52" },
      sm: { bg: "zinc.50", color: "black", w: "10", h: "10" },
    },
  },
  defaultVariants: { size: "std" },
});
