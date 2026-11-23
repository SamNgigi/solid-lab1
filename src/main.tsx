import { render, For } from "@solidjs/web";
import { createSignal } from "solid-js";

import "./style.css";
import { css, cva } from "@/styled-system/css";

const li = cva({
  base: { listStyle: "none", p: "[2px 8px]", cursor: "pointer" },
  variants: {
    active: {
      true: {
        bg: "[#446b9e]",
        color: "white",
      },
      false: {},
    },
  },
});

const rows = Array.from({ length: 1000 }, (_, i) => ({ id: i, label: `Row ${i}` }));
function App() {
  const [selected, setSelected] = createSignal(0);
  let checks = 0;
  const isSelected = (id: number) => {
    checks++;
    return selected() === id;
  };

  const select = (id: number) => {
    checks = 0;
    setSelected(id);
    setTimeout(() => console.log(`${checks} rows checked`));
  };

  return (
    <div class={css({ debug: true })}>
      <ul>
        <For each={rows}>
          {(row) => (
            <li class={li({ active: isSelected(row.id) })} onClick={() => select(row.id)}>
              {row.label}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
