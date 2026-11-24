import { render } from "@solidjs/web";

import "./style.css";
import { cx, css } from "@/styled-system/css";
import { flexContainer, flexBox, mainContainer } from "@/components/recipes/flex.recipe";

function App() {
  return (
    <div class={cx(mainContainer(), flexContainer())}>
      <div
        class={cx(
          flexContainer({ jc: "center", ai: "center" }),
          flexBox({ bp: "sm" }),
          css({ alignSelf: "end" }),
        )}
      >
        <div class={flexBox({ size: "sm" })}>1</div>
      </div>
      <div class={cx(flexContainer({ jc: "center", ai: "center" }), flexBox())}>
        <div class={flexBox({ size: "sm" })}>2</div>
      </div>
      <div class={cx(flexContainer({ jc: "center", ai: "center" }), flexBox())}>
        <div class={flexBox({ size: "sm" })}>3</div>
      </div>
      <div class={cx(flexContainer({ jc: "center", ai: "center" }), flexBox())}>
        <div class={flexBox({ size: "sm" })}>4</div>
      </div>
      <div class={cx(flexContainer({ jc: "center", ai: "center" }), flexBox())}>
        <div class={flexBox({ size: "sm" })}>5</div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
