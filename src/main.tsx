import "./style.css";
import { container } from "../styled-system/patterns";

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function App() {
  const [temp, setTemp] = createSignal(12);

  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <input
        id="range"
        min="-10"
        max="40"
        value={temp()}
        type="range"
        onInput={(event) => setTemp(Number(event.currentTarget.value))}
      />
      {` ${temp()}°C`}
      {temp() < 0 ? <p>Frost warning!</p> : <p>No frost tonight.</p>}
      {temp() > 25 ? <p>Hot</p> : temp() > 10 ? <p>Mild</p> : <p>Cold</p>}
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
