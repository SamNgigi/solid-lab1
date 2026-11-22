import { sva } from "@/styled-system/css";

export const grid = sva({
  slots: ["container", "item"],
  base: {
    container: {
      display: "grid",
      flex: "1",
      minH: "0",
      overflow: "auto",
      gridTemplateColumns: "repeat(3, minmax(0, 300px))",
      gridTemplateRows: "repeat(3, minmax(0, 300px))",
      gap: "[1em]",

      justifyItems: "center",
      alignItems: "center",

      justifyContent: "center",
      alignContent: "center",
    },
    item: {
      h: "[100px]",
      w: "[100px]",
      p: "8",
      bg: "blue.500",
      color: "white",
      textAlign: "center",
      rounded: "lg",
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
  },
  defaultVariants: { debug: true },
});
