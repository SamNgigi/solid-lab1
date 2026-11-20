import "./style.css";
import { container } from "../styled-system/patterns";
import { button } from "./components/button.recipe";

import { render } from "@solidjs/web";
import { createSignal, For } from "solid-js";

function App() {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <button
        class={button({ tone: "solid" })}
        onClick={() => setCats((items) => [...items.slice(1), items[0]])}
      >
        Rotate cats
      </button>
      <For each={cats()}>
        {(cat, index) => (
          <li>
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
              {index() + 1} : {cat.name} -
            </a>
            <input
              aria-label={`Note for ${cat.name}`}
              placeholder="A note for this row"
              type="text"
            />
          </li>
        )}
      </For>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
