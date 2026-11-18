import "./style.css";
import { css } from "../styled-system/css";
import { stack } from "../styled-system/patterns/";

import { button } from "./components/button.recipe";
import { Card2, type Product } from "./other";

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function App() {
  const [active, setActive] = createSignal(false);

  const products: Product[] = [
    { name: "Mug", price: 12 },
    { name: "Notebook", price: 8 },
    { name: "Pen", price: 3 },
  ];
  return (
    <>
      <main class={stack({ gap: "4", p: "8" })}>
        <h1 class={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello</h1>
        <button
          class={button({ tone: active() ? "solid" : "ghost" })}
          onClick={() => setActive((val) => !val)}
        >
          Toggle
        </button>
      </main>
      <section class="shop">
        {products.map((product) => (
          <Card2 {...product} />
        ))}
      </section>
    </>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
