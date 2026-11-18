import "./style.css";
import { css } from "../styled-system/css";
import { button } from "./components/button.recipe";

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

const price = 12;

function App() {
  const [quantity, setQuantity] = createSignal(1);
  const total = () => quantity() * price;

  return (
    <>
      <span class={css({ display: "flex", gap: "1", p: "2" })}>
        <button
          class={button({ tone: "solid" })}
          onClick={() => {
            setQuantity((q) => Math.max(1, q - 1));
          }}
        >
          -
        </button>
        <span class={css({ p: "2" })}>{quantity()} mugs</span>
        <button
          class={button({ tone: "solid" })}
          onClick={() => {
            setQuantity((q) => q + 1);
          }}
        >
          +
        </button>
      </span>
      <p>Total: ${total}</p>
    </>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
