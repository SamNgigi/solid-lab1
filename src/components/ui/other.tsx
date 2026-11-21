import { css } from "@/styled-system/css";

import { type Accessor, createSignal, children, For } from "solid-js";
import { type JSX } from "@solidjs/web";

export interface Cart {
  count: Accessor<number>; // same as () => number
  add: () => void;
}

export function createCart(): Cart {
  const [count, setCount] = createSignal(0);
  return { count, add: () => setCount((val) => val + 1) };
}

export function Steps(props: JSX.HTMLAttributes<HTMLElement>) {
  const steps = children(() => props.children);
  return (
    <ol class={_steps}>
      <For each={steps.toArray()}>
        {(step, index) => (
          <li>
            <strong>Step {index() + 1}</strong>
            {step}
          </li>
        )}
      </For>
    </ol>
  );
}

const _steps = css({
  "& li": {
    my: "2",
    py: "1",
    px: "3",
    borderLeft: "[4px solid #446b9e]",
    listStyle: "none",
  },
  "& li p": { m: "0" },
});

export type AvatarProps = { name: string; size?: number | null };

export function Avatar(props: AvatarProps) {
  const size = () => props.size ?? 48;
  const initials = () =>
    props.name
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .join("");

  return (
    <div
      class={avatar}
      style={{
        "--avatar-size": `${size()}px`,
        "--avatar-font-size": `${size() / 2.5}px`,
      }}
    >
      {initials()}
    </div>
  );
}

const avatar = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "[0.5rem]", // '2' in panda-css
  borderRadius: "[50%]",
  background: "[#446b9e]",
  color: "white",
  fontFamily: "[sans-serif]",
  fontWeight: "bold",
  width: "var(--avatar-size)",
  height: "var(--avatar-size)",
  fontSize: "var(--avatar-font-size)",
});
