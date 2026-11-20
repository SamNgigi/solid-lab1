import "./style.css";
import { container } from "../styled-system/patterns";

import { render } from "@solidjs/web";
import { createSignal, Show, Switch, Match } from "solid-js";

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
      <Show when={temp() < 0} fallback={<p>No frost tonight</p>}>
        <p>Frost warning!</p>
      </Show>
      <Switch fallback={<p>Cold</p>}>
        <Match when={temp() > 25}>
          <p>Hot</p>
        </Match>
        <Match when={temp() > 10}>
          <p>Mild</p>
        </Match>
      </Switch>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
