import "./style.css";

import { render } from "@solidjs/web";
import { Card, type Product } from "./other";

function App() {
  const products: Product[] = [
    { name: "Mug", price: 12 },
    { name: "Notebook", price: 8 },
    { name: "Pen", price: 3 },
  ];
  return (
    <section class="shop">
      {products.map((prod) => (
        <Card {...prod} />
      ))}
    </section>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
