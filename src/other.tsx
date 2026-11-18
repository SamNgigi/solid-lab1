import { sva } from "../styled-system/css";

export type Product = { name: string; price: number };

export function Card(props: Product) {
  return (
    <article class="card">
      <h2>{props.name}</h2>
      <p>${props.price}</p>
    </article>
  );
}

export function Card2(props: Product) {
  const classes = card({ size: "lg" });
  return (
    <div class={classes.root}>
      <h2 class={classes.title}>{props.name}</h2>
      <div class={classes.body}>{props.price}</div>
    </div>
  );
}

const card = sva({
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
