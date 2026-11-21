import { render, type JSX } from "@solidjs/web";

import "./style.css";
import { container } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";
import { CartProvider, useCart, type Cart, type CartProps } from "@/components/ui/other";

function Header(): JSX.Element {
  const cart: Cart = useCart();
  return <h1>Shop . {cart.count()} in cart</h1>;
}

function Product(props: CartProps): JSX.Element {
  const cart: Cart = useCart();
  return (
    <p class={css({ display: "flex", width: "fit-content", gap: "2" })}>
      {props.name}
      <button class={button({ tone: "solid" })} onClick={cart.add}>
        Add to Cart
      </button>
    </p>
  );
}

function Shop() {
  return (
    <>
      <Product name="Mug" />
      <Product name="Notebook" />
    </>
  );
}

function App() {
  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <CartProvider>
        <Header />
        <Shop />
      </CartProvider>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
