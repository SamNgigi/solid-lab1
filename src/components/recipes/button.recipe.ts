import { cva, sva, type RecipeVariantProps } from "@/styled-system/css";

export const compound_button = sva({
  slots: ["root", "spinner", "content", "label", "loadingLabel"],
  base: {
    root: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      px: "4",
      py: "2",
      rounded: "4xl",
      fontWeight: "medium",
      _disabled: { opacity: 0.6, cursor: "not-allowed" },
    },
    spinner: {
      w: "[1em]",
      h: "[1em]",
      flexShrink: 0,
      borderWidth: "2px",
      borderColor: "currentColor",
      borderTopColor: "transparent",
      rounded: "full",
      animation: "spin",
      display: "none",
    },
    // Both labels share one grid cell, so the width = the wider of the two
    content: { display: "grid" },
    label: { gridArea: "1 / 1" },
    loadingLabel: { gridArea: "1 / 1", visibility: "hidden" },
  },
  variants: {
    tone: {
      solid: { root: { bg: "blue.500", color: "white", _hover: { bg: "blue.600" } } },
      danger: { root: { bg: "red.500", color: "white", _hover: { bg: "red.600" } } },
      ghost: { root: { bg: "transparent", _hover: { bg: "gray.100" } } },
    },
    loading: {
      true: {
        root: { cursor: "wait", _disabled: { opacity: 1, cursor: "wait" } },
        spinner: { display: "block" },
      },
    },
    hasLoadingText: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // Spinner only: overlay it and hide the label (keeps the width)
    {
      loading: true,
      hasLoadingText: false,
      css: {
        spinner: { position: "absolute" },
        label: { visibility: "hidden" },
      },
    },
    // Spinner + text: show the spinner inline and swap the labels
    {
      loading: true,
      hasLoadingText: true,
      css: {
        label: { visibility: "hidden" },
        loadingLabel: { visibility: "visible" },
      },
    },
  ],
  defaultVariants: { tone: "solid", loading: false, hasLoadingText: false },
});

export type CompoundButtonVariants = RecipeVariantProps<typeof compound_button>;

export const button = cva({
  base: { px: "4", py: "2", rounded: "4xl", fontWeight: "medium" },
  variants: {
    tone: {
      solid: { bg: "blue.500", color: "white", _hover: { bg: "blue.600" } },
      danger: { bg: "red.500", color: "white", _hover: { bg: "red.600" } },
      ghost: { bg: "transparent", _hover: { bg: "gray.100" } },
    },
  },
  defaultVariants: { tone: "solid" },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const track_bar = sva({
  slots: ["track", "bar"],
  base: {
    track: {
      width: "[300px]",
      height: "[20px]",
      background: "[#eee]",
      borderRadius: "[10px]",
      overflow: "[hidden]",
    },
    bar: {
      height: "[100%]",
      transition: "[width 0.3s]",
    },
  },
  variants: {
    status: {
      default: {
        bar: { background: "[#446b9e]" },
      },
      low: {
        bar: { background: "[#c0392b]" },
      },
      done: {
        bar: { background: "[#27ae60]" },
      },
    },
  },
  defaultVariants: { status: "default" },
});

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
