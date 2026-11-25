import { render } from "@solidjs/web";

import "./style.css";
import { mainContainer, gridContainer, gridBox } from "@/components/recipes/grid.recipe";

function App() {
  return (
    <div class={mainContainer}>
      <div class={gridContainer()}>
        <div class={gridBox({ area: "gb1" })}>1</div>
        <div class={gridBox()}>2</div>
        <div class={gridBox()}>3</div>
        <div class={gridBox({ area: "gb4" })}>4</div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
