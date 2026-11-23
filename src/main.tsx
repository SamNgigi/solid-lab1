import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { grid } from "@/components/recipes/layout.recipe";

function App() {
  return (
    <div
      class={css({
        height: "[100dvh]",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      })}
    >
      <div class={grid().container}>
        <div class={grid({ area: "bx1" }).item}>Item 1</div>
        <div class={grid({ area: "bx2" }).item}>Item 2</div>
        <div class={grid({ area: "bx3" }).item}>Item 3</div>
        <div class={grid({ area: "bx4" }).item}>Item 4</div>
        <div class={grid({ area: "bx5" }).item}>Item 5</div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
