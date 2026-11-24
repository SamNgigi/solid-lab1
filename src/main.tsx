import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { flex } from "@/components/recipes/layout.recipe";

function App() {
  // console.log(setCount((v) => v + 1));

  return (
    <div
      class={css({
        display: "flex",
        minH: "[100svh]",
        justifyContent: "space-between",
        flexShrink: "0",
      })}
    >
      <div
        class={css({
          bg: "amber.500",
          color: "white",
          h: "[200px]",
          w: "[200px]",
        })}
      >
        Left Side
      </div>
      <div class={[flex().container]}>
        <div class={flex().item}>Item 1</div>
        <div class={flex().item}>Item 2</div>
        <div class={flex().item}>Item 3</div>
        <div class={flex().item}>Item 4</div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
