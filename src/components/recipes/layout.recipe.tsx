import { sva } from "@/styled-system/css";

export const grid = sva({
  slots: ["container", "item"],
  base: {
    container: {
      display: "grid",
      flex: "1",
      minH: "0",
      overflowY: "auto",
      padding: "[2%]",
      gridAutoColumns: "[200px]",
      gridAutoRows: "[auto]",
      gridTemplateAreas: `
        "bx1 bx1 bx2 bx3"
        "bx1 bx1 bx4 bx5"
      `,
      gap: "[1em]",

      justifyContent: "center",
      alignContent: "center",
    },
    item: {
      p: "8",
      bg: "blue.500",
      color: "white",
      textAlign: "center",
      rounded: "xs",
      fontSize: "4xl",
    },
  },
  variants: {
    debug: {
      true: {
        container: { debug: true },
        item: { debug: true },
      },
      false: {},
    },
    area: {
      bx1: { item: { gridArea: "bx1" } },
      bx2: { item: { gridArea: "bx2" } },
      bx3: { item: { gridArea: "bx3" } },
      bx4: { item: { gridArea: "bx4" } },
      bx5: { item: { gridArea: "bx5" } },
    },
  },
  defaultVariants: { debug: true },
});
