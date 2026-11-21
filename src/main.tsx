import { render } from "@solidjs/web";
import { createSignal, For } from "solid-js";

import "./style.css";
import { container } from "@/styled-system/patterns";

type Product = { id: number; name: string; price: number };
type ViewProps = { product: Product };
const products: Product[] = [
  { id: 1, name: "Mug", price: 12 },
  { id: 2, name: "Notebook", price: 8 },
  { id: 3, name: "Pen", price: 3 },
];

function Card(props: ViewProps) {
  return (
    <article
      style={{
        border: "1px solid #ccc",
        padding: "0.5rem",
        margin: "0.5rem 0",
      }}
    >
      <h3>{props.product.name}</h3>
      <p>${props.product.price}</p>
    </article>
  );
}

function Row() {
  throw new Error("TODO: Not Yet Implemented.");
}
function Tag() {
  throw new Error("TODO: Not Yet Implemented.");
}

const views = { card: Card, row: Row, tag: Tag };

function App() {
  const [view, setView] = createSignal("card");

  console.log(`current_view: ${view}`);
  console.log(`all_views: ${views}`);

  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <select
        name="view"
        id="view-selector"
        onChange={(event) => setView(event.currentTarget.value)}
      >
        <option value="card">Cards</option>
        <option value="row">Rows</option>
        <option value="tag">Tags</option>
      </select>
      <For each={products}>{(product) => <Card product={product} />}</For>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
