import { render } from "@solidjs/web";
import { createSignal, createMemo, For, Loading } from "solid-js";

import "./style.css";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";

const tabs = ["Profile", "Posts", "Settings"];

async function fetchTab(tab: string) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return `This is the ${tab} page.`;
}

function App() {
  const [tab, setTab] = createSignal("Profile");
  const content = createMemo(() => fetchTab(tab()));

  const active = (name: string) => tab() === name;

  return (
    <div class={css({ debug: true, mt: "1" })}>
      <div class={css({ display: "flex", p: "0.5", gap: "0.5" })}>
        <For each={tabs}>
          {(tab) => (
            <button
              class={button({ tone: active(tab) ? "solid" : "solid2" })}
              onClick={() => setTab(tab)}
            >
              {tab}
            </button>
          )}
        </For>
      </div>
      <Loading fallback={<p>Loading...</p>}>
        <div
          class={css({
            padding: "[0.5, 0]",
            transition: "[opacity 0.2s]",
            opacity: "none",
          })}
        >
          {content()}
        </div>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
