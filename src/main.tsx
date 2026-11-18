import "./index.css";

import { render } from "@solidjs/web";
import { css } from "../styled-system/css";
import { Card } from "./components/ui/card";

type Product = { name: string; description: string; price: number };

const products: Product[] = [
  { name: "Mug", description: "Ceramic, 350 ml", price: 8 },
  { name: "Tumbler", description: "Stainless Steel, keeps cold 12h", price: 22 },
  { name: "Teapot", description: "Cast iron, 1 litre", price: 45 },
];

function App() {
  return (
    <main class={css({ p: "8", display: "flex", flexDirection: "column", gap: "6" })}>
      <h1 class={css({ fontSize: "3xl", fontWeight: "bold" })}>Shop</h1>

      <section class={css({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4" })}>
        {products.map((prod, i) => (
          <Card.Root variant={(["elevated", "outline", "subtle"] as const)[i]}>
            <Card.Header>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Description>{prod.description}</Card.Description>
            </Card.Header>
            <Card.Body>In stock</Card.Body>
            <Card.Footer class={css({ fontWeight: "semibold" })}>${prod.price}</Card.Footer>
          </Card.Root>
        ))}
      </section>
    </main>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
