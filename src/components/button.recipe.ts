import { cva, sva, type RecipeVariantProps } from "../../styled-system/css";

export const button = cva({
  base: { px: "4", py: "2", rounded: "md", fontWeight: "medium" },
  variants: {
    tone: {
      solid: { bg: "blue.600", color: "white", _hover: { bg: "blue.700" } },
      ghost: { bg: "transparent", _hover: { bg: "gray.100" } },
    },
  },
  defaultVariants: { tone: "solid" },
});
export type ButtonVariants = RecipeVariantProps<typeof button>;

export const card = sva({
  slots: ["root", "title", "body"],
  className: "card",
  base: {
    root: {
      rounded: "lg",
      borderWidth: "1px",
      borderColor: "gray.200",
      bg: "white",
      p: "4",
    },
    title: { fontWeight: "semibold", mb: "2" },
    body: { color: "gray.600", fontSize: "sm" },
  },
  variants: {
    size: {
      sm: {
        root: { p: "3" },
        title: { fontSize: "md" },
        body: { fontSize: "xs" },
      },
      lg: {
        root: { p: "6" },
        title: { fontSize: "xl" },
        body: { fontSize: "md" },
      },
    },
  },
  defaultVariants: { size: "sm" },
});
