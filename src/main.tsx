import { render } from "@solidjs/web";

import "./style.css";
import { cx } from "@/styled-system/css";
import { flexContainer, flexBox } from "@/components/recipes/flex.recipe";

function App() {
  return (
    <div class={flexContainer({ hpos: "between" })}>
      <div
        class={cx(
          flexBox(),
          flexContainer({
            hpos: "center",
            vpos: "center",
          }),
        )}
      >
        <div class={flexBox({ size: "sm" })}>1</div>
      </div>
      <div
        class={cx(
          flexBox(),
          flexContainer({
            hpos: "evenly",
            vpos: "center",
          }),
        )}
      >
        <div class={flexBox({ size: "sm" })}>A</div>
        <div class={flexBox({ size: "sm" })}>B</div>
        <div class={flexBox({ size: "sm" })}>C</div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
