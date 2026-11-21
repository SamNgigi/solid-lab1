import { sva } from "@/styled-system/css";

export const grid = sva({
  slots: ["container", "item"],
  base: {
    container: { display: "grid" },
    item: {
      p: "8",
      bg: "blue.500",
      color: "white",
      textAlign: "center",
      rounded: "lg",
      fontSize: "4xl",
    },
  },
});
