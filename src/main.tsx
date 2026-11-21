import { render, dynamic } from "@solidjs/web";
import { createSignal, For } from "solid-js";

import "./style.css";
import { container } from "@/styled-system/patterns";

type Product = { id: number; name: string; price: number };
type ViewProps = { product: Product };
const products: Product[] = [
  { id: 1, name: "Mug", price: 12 },
  { id: 1, name: "Notebook", price: 8 },
  { id: 1, name: "Pen", price: 3 },
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

function Row(props: ViewProps) {
  return (
    <p>
      {props.product.name} . ${props.product.price}
    </p>
  );
}

function Tag(props: ViewProps) {
  return (
    <strong style={{ "margin-left": "0.5rem", "margin-right": "1rem" }}>
      {props.product.name}
    </strong>
  );
}

const views = { card: Card, row: Row, tag: Tag };
type ViewT = keyof typeof views;

function App() {
  const [view, setView] = createSignal<ViewT>("card");
  const View = dynamic(() => views[view()]);

  return (
    <div class={container({ debug: false, p: "2", m: "2" })}>
      <select
        name="view"
        id="view-selector"
        onChange={(event) => setView(event.currentTarget.value as ViewT)}
      >
        <option value="card">Cards</option>
        <option value="row">Rows</option>
        <option value="tag">Tags</option>
      </select>
      <For each={products}>{(product) => <View product={product} />}</For>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
