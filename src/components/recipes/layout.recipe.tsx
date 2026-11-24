import { sva } from "@/styled-system/css";

export const flex = sva({
  slots: ["container", "item"],
  base: {
    container: {
      minH: "[100svh]",
      gap: "1",
      display: "flex",
      justifyContent: "end",
      // flexWrap: "wrap",
    },
    item: {
      bg: "blue.500",
      p: "8",
      color: "white",
      h: "[200px]",
      w: "[200px]",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    // position: {
    //   start: {
    //     container: { justifyContent: "start" },
    //   },
    //   end: {
    //     container: { justifyContent: "end" },
    //   }
    // }
  },
  defaultVariants: { debug: true },
});

export const grid = sva({
  slots: ["container", "item"],
  base: {
    container: {
      display: "grid",
      flex: "1",
      minH: "0",
      overflowY: "auto",
      padding: "[2%]",
      gridAutoColumns: "[1fr 1fr]",
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
  },
  defaultVariants: { debug: true },
});
