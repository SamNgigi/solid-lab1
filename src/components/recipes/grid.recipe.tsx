import { cva, css } from "@/styled-system/css";

export const mainContainer = css({
  debug: true,
  height: "[100vh]",
  bg: "gray.950",
});

export const gridContainer = cva({
  base: {
    debug: true,
    h: "[50%]",
    display: "grid",
    gridTemplateColumns: "repeat(3, 208px)",
    gridTemplateRows: "repeat(2, 208px)",
    gap: "1",
    alignContent: "end",
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
