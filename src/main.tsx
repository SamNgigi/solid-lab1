import { css } from "../styled-system/css";
import "./index.css";

import { render } from "@solidjs/web";
import { Card, type Product } from "./other";

function App() {
  const product: Product = { name: "Mug", price: 8 };
  return (
    <>
      <div class={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🐼!</div>
      <section class="shop">
        <Card {...product} />
      </section>
    </>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
