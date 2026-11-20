import "./style.css";
import { container } from "../styled-system/patterns";
import { button, track_bar } from "./components/button.recipe";

import { render } from "@solidjs/web";
import { createSignal, createMemo } from "solid-js";

const total = 8;

function App() {
  const [done, setDone] = createSignal(1);
  const percent = () => Math.round((done() / total) * 100);

  const status = createMemo(() =>
    percent() === 100 ? "done" : percent() < 30 ? "low" : "default",
  );
  const classes = createMemo(() => track_bar({ status: status() }));

  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <p>
        <button
          class={button({ tone: "solid" })}
          onClick={() => setDone((val) => Math.max(0, val - 1))}
        >
          -
        </button>
        {` ${done()} of ${total} tasks done `}
        <button
          class={button({ tone: "solid" })}
          onClick={() => setDone((val) => Math.min(total, val + 1))}
        >
          +
        </button>
      </p>
      <div class={classes().track}>
        <div class={classes().bar} style={{ width: `${percent()}%` }} />
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
