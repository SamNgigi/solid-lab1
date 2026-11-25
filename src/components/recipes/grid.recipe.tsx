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
    gridTemplateAreas: `
      "gb1 gb1 gb2"
      "gb3 gb4 gb4"
    `,
    gap: "1",
    // alignItems: "center"
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
      gb1: { gridArea: "gb1" },
      gb2: { gridArea: "gb2" },
      gb3: { gridArea: "gb3" },
      gb4: { gridArea: "gb4" },
    },
  },
});
