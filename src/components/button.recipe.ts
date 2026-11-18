import { cva, type RecipeVariantProps } from "../../styled-system/css";

export const button = cva({
  base: { px: "4", py: "2", rounded: "md", fontWeight: "normal" },
  variants: {
    tone: {
      solid: { bg: "yellow.600", color: "white", _hover: { bg: "blue.700" } },
      ghost: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "gray.300",
        _hover: { bg: "gray.100" },
      },
    },
  },
  defaultVariants: { tone: "solid" },
});
export type ButtonVariants = RecipeVariantProps<typeof button>;
