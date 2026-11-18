import type { JSX } from "@solidjs/web";
import { createContext, createMemo, omit, useContext, type Accessor } from "solid-js";
import { card, type CardVariantProps } from "../../../theme/recipes/card";

type CardClasses = ReturnType<typeof card>;

// Root computes the slot classes once and shares them with its parts.
const CardContext = createContext<Accessor<CardClasses>>();

const useCardClasses = () => useContext(CardContext); // throws if used outside <Card.Root>

export type RootProps = JSX.HTMLAttributes<HTMLDivElement> & CardVariantProps;

export function Root(props: RootProps) {
  const classes = createMemo(() => card({ variant: props.variant }));
  const rest = omit(props, "variant", "class", "children");
  return (
    <CardContext value={classes}>
      <div {...rest} class={[classes().root, props.class]}>
        {props.children}
      </div>
    </CardContext>
  );
}

type DivProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Header(props: DivProps) {
  const classes = useCardClasses();
  const rest = omit(props, "class");
  return <div {...rest} class={[classes().header, props.class]} />;
}

export function Body(props: DivProps) {
  const classes = useCardClasses();
  const rest = omit(props, "class");
  return <div {...rest} class={[classes().body, props.class]} />;
}

export function Footer(props: DivProps) {
  const classes = useCardClasses();
  const rest = omit(props, "class");
  return <div {...rest} class={[classes().footer, props.class]} />;
}

export function Title(props: JSX.HTMLAttributes<HTMLHeadingElement>) {
  const classes = useCardClasses();
  const rest = omit(props, "class");
  return <h3 {...rest} class={[classes().title, props.class]} />;
}

export function Description(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const classes = useCardClasses();
  const rest = omit(props, "class");
  return <p {...rest} class={[classes().description, props.class]} />;
}
