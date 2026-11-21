import { render, Repeat } from "@solidjs/web";
import { createSignal } from "solid-js";

import "./style.css";
import { container } from "@/styled-system/patterns";
import { button } from "@/components/recipes/button.recipe";
import { grid } from "@/components/recipes/layout.recipe";

function App() {
  const [item, setItems] = createSignal(1);
  const classes = grid();
  return (
    <>
      <div class={container({ debug: true, display: "flex", px: "0" })}>
        <button
          class={button({ tone: "solid" })}
          onClick={() => setItems((val) => Math.max(0, val - 1))}
        >
          -
        </button>
        <p>{item()} items</p>
        <button
          class={button({ tone: "solid" })}
          onClick={() => setItems((val) => Math.min(9, val + 1))}
        >
          +
        </button>
      </div>
      <div class={[classes.container, container({ debug: true, px: "0", gap: "1" })]}>
        <Repeat count={item()} fallback={<span>No starts</span>}>
          {(index) => <div class={classes.item}>Item {index + 1}</div>}
        </Repeat>
      </div>
    </>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
