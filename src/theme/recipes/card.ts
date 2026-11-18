import { sva, type RecipeVariantProps } from "../../../styled-system/css";

export const card = sva({
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    root: {
      borderRadius: "l3",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    },
    header: { display: "flex", flexDirection: "column", gap: "1", p: "6" },
    body: { display: "flex", flex: "1", flexDirection: "column", pb: "6", px: "6" },
    footer: { display: "flex", justifyContent: "flex-end", gap: "3", pb: "6", pt: "2", px: "6" },
    title: { textStyle: "lg", fontWeight: "semibold" },
    description: { color: "fg.muted", textStyle: "sm" },
  },
  defaultVariants: { variant: "outline" },
  variants: {
    variant: {
      elevated: { root: { bg: "surface", boxShadow: "lg" } },
      outline: { root: { bg: "surface", borderWidth: "1px" } },
      subtle: { root: { bg: "subtle" } },
    },
  },
});

export type CardVariantProps = NonNullable<RecipeVariantProps<typeof card>>;
